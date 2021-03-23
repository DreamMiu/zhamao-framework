<?php


namespace ZM\Module;

use Exception;
use ZM\Annotation\CQ\CQAPIResponse;
use ZM\Annotation\CQ\CQBefore;
use ZM\Annotation\CQ\CQCommand;
use ZM\Annotation\CQ\CQMessage;
use ZM\Annotation\CQ\CQMetaEvent;
use ZM\Annotation\CQ\CQNotice;
use ZM\Annotation\CQ\CQRequest;
use ZM\Event\EventDispatcher;
use ZM\Exception\InterruptException;
use ZM\Exception\WaitTimeoutException;
use ZM\Utils\CoMessage;

/**
 * Class QQBot
 * @package ZM\Module
 */
class QQBot
{
    /**
     * @throws InterruptException
     * @throws Exception
     */
    public function handle() {
        try {
            $data = json_decode(context()->getFrame()->data, true);
            set_coroutine_params(["data" => $data]);
            if (isset($data["post_type"])) {
                //echo TermColor::ITALIC.json_encode($data, 128|256).TermColor::RESET.PHP_EOL;
                ctx()->setCache("level", 0);
                //Console::debug("Calling CQ Event from fd=" . ctx()->getConnection()->getFd());
                if ($data["post_type"] != "meta_event") {
                    $r = $this->dispatchBeforeEvents($data); // before在这里执行，元事件不执行before为减少不必要的调试日志
                    if ($r->store === "block") EventDispatcher::interrupt();
                }
                //Console::warning("最上数据包：".json_encode($data));
            }
            if (isset($data["echo"]) || isset($data["post_type"])) {
                if (CoMessage::resumeByWS()) EventDispatcher::interrupt();
            }
            if (isset($data["post_type"])) $this->dispatchEvents($data);
            else $this->dispatchAPIResponse($data);
        } /** @noinspection PhpRedundantCatchClauseInspection */ catch (WaitTimeoutException $e) {
            $e->module->finalReply($e->getMessage());
        }
    }

    /**
     * @param $data
     * @return EventDispatcher
     * @throws Exception
     */
    public function dispatchBeforeEvents($data): EventDispatcher {
        $before = new EventDispatcher(CQBefore::class);
        $before->setRuleFunction(function ($v) use ($data) {
            return $v->cq_event == $data["post_type"];
        });
        $before->setReturnFunction(function ($result) {
            if (!$result) EventDispatcher::interrupt("block");
        });
        $before->dispatchEvents($data);
        return $before;
    }

    /**
     * @param $data
     * @throws InterruptException
     * @throws Exception
     */
    private function dispatchEvents($data) {
        //Console::warning("最xia数据包：".json_encode($data));
        switch ($data["post_type"]) {
            case "message":
                $word = explodeMsg(str_replace("\r", "", context()->getMessage()));
                if (empty($word)) $word = [""];
                if (count(explode("\n", $word[0])) >= 2) {
                    $enter = explode("\n", context()->getMessage());
                    $first = split_explode(" ", array_shift($enter));
                    $word = array_merge($first, $enter);
                    foreach ($word as $k => $v) {
                        $word[$k] = trim($word[$k]);
                    }
                }
                //分发CQCommand事件
                $dispatcher = new EventDispatcher(CQCommand::class);
                $dispatcher->setRuleFunction(function (CQCommand $v) use ($word) {
                    if (array_diff([$v->match, $v->pattern, $v->regex, $v->keyword, $v->end_with, $v->start_with], [""]) == []) return false;
                    elseif (($v->user_id == 0 || ($v->user_id != 0 && $v->user_id == ctx()->getUserId())) &&
                        ($v->group_id == 0 || ($v->group_id != 0 && $v->group_id == (ctx()->getGroupId() ?? 0))) &&
                        ($v->message_type == '' || ($v->message_type != '' && $v->message_type == ctx()->getMessageType()))
                    ) {
                        if (($word[0] != "" && $v->match == $word[0]) || in_array($word[0], $v->alias)) {
                            array_shift($word);
                            ctx()->setCache("match", $word);
                            return true;
                        } elseif ($v->start_with != "" && mb_strpos(ctx()->getMessage(), $v->start_with) === 0) {
                            ctx()->setCache("match", [mb_substr(ctx()->getMessage(), mb_strlen($v->start_with))]);
                            return true;
                        } elseif ($v->end_with != "" && strlen(ctx()->getMessage()) == (strripos(ctx()->getMessage(), $v->end_with) + strlen($v->end_with))) {
                            ctx()->setCache("match", [substr(ctx()->getMessage(), 0, strripos(ctx()->getMessage(), $v->end_with))]);
                            return true;
                        } elseif ($v->keyword != "" && mb_strpos(ctx()->getMessage(), $v->keyword) !== false) {
                            ctx()->setCache("match", explode($v->keyword, ctx()->getMessage()));
                            return true;
                        } elseif ($v->pattern != "") {
                            $match = matchArgs($v->pattern, ctx()->getMessage());
                            if ($match !== false) {
                                ctx()->setCache("match", $match);
                                return true;
                            }
                        } elseif ($v->regex != "") {
                            if (preg_match("/" . $v->regex . "/u", ctx()->getMessage(), $word2) != 0) {
                                ctx()->setCache("match", $word2);
                                return true;
                            }
                        }
                    }
                    return false;
                });
                $dispatcher->setReturnFunction(function ($result) {
                    if (is_string($result)) ctx()->reply($result);
                    if (ctx()->getCache("has_reply") === true) EventDispatcher::interrupt();
                });
                $dispatcher->dispatchEvents();
                if ($dispatcher->status == EventDispatcher::STATUS_INTERRUPTED) EventDispatcher::interrupt();

                //分发CQMessage事件
                $msg_dispatcher = new EventDispatcher(CQMessage::class);
                $msg_dispatcher->setRuleFunction(function ($v) {
                    return ($v->message == '' || ($v->message != '' && $v->message == context()->getData()["message"])) &&
                        ($v->user_id == 0 || ($v->user_id != 0 && $v->user_id == context()->getData()["user_id"])) &&
                        ($v->group_id == 0 || ($v->group_id != 0 && $v->group_id == (context()->getData()["group_id"] ?? 0))) &&
                        ($v->message_type == '' || ($v->message_type != '' && $v->message_type == context()->getData()["message_type"])) &&
                        ($v->raw_message == '' || ($v->raw_message != '' && $v->raw_message == context()->getData()["raw_message"]));
                });
                $msg_dispatcher->setReturnFunction(function ($result) {
                    if (is_string($result)) ctx()->reply($result);
                });
                $msg_dispatcher->dispatchEvents(ctx()->getMessage());
                return;
            case "meta_event":
                //Console::success("当前数据包：".json_encode(ctx()->getData()));
                $dispatcher = new EventDispatcher(CQMetaEvent::class);
                $dispatcher->setRuleFunction(function (CQMetaEvent $v) {
                    return ($v->meta_event_type == '' || ($v->meta_event_type != '' && $v->meta_event_type == ctx()->getData()["meta_event_type"]));
                });
                //eval(BP);
                $dispatcher->dispatchEvents(ctx()->getData());
                return;
            case "notice":
                $dispatcher = new EventDispatcher(CQNotice::class);
                $dispatcher->setRuleFunction(function (CQNotice $v) {
                    return
                        ($v->notice_type == '' || ($v->notice_type != '' && $v->notice_type == ctx()->getData()["notice_type"])) &&
                        ($v->sub_type == '' || ($v->sub_type != '' && $v->sub_type == ctx()->getData()["sub_type"])) &&
                        ($v->group_id == '' || ($v->group_id != '' && $v->group_id == ctx()->getData()["group_id"])) &&
                        ($v->operator_id == '' || ($v->operator_id != '' && $v->operator_id == ctx()->getData()["operator_id"]));
                });
                $dispatcher->dispatchEvents(ctx()->getData());
                return;
            case "request":
                $dispatcher = new EventDispatcher(CQRequest::class);
                $dispatcher->setRuleFunction(function (CQRequest $v) {
                    return ($v->request_type == '' || ($v->request_type != '' && $v->request_type == ctx()->getData()['request_type'])) &&
                        ($v->sub_type == '' || ($v->sub_type != '' && $v->sub_type == ctx()->getData()['sub_type'])) &&
                        ($v->user_id == 0 || ($v->user_id != 0 && $v->user_id == ctx()->getData()["user_id"])) &&
                        ($v->comment == '' || ($v->comment != '' && $v->comment == ctx()->getData()['comment']));
                });
                $dispatcher->dispatchEvents(ctx()->getData());
                return;
        }
    }

    /**
     * @param $req
     * @throws Exception
     */
    private function dispatchAPIResponse($req) {
        set_coroutine_params(["cq_response" => $req]);
        $dispatcher = new EventDispatcher(CQAPIResponse::class);
        $dispatcher->setRuleFunction(function (CQAPIResponse $response) {
            return $response->retcode == ctx()->getCQResponse()["retcode"];
        });
        $dispatcher->dispatchEvents($req);
    }
}
