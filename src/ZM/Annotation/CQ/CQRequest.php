<?php

declare(strict_types=1);

namespace ZM\Annotation\CQ;

use Doctrine\Common\Annotations\Annotation\Target;
use ZM\Annotation\AnnotationBase;
use ZM\Annotation\Interfaces\Level;

/**
 * Class CQRequest
 * @Annotation
 * @Target("ALL")
 */
class CQRequest extends AnnotationBase implements Level
{
    /** @var string */
    public $request_type = '';

    /** @var string */
    public $sub_type = '';

    /** @var int */
    public $user_id = 0;

    /** @var string */
    public $comment = '';

    /** @var int */
    public $level = 20;

    public function getLevel(): int
    {
        return $this->level;
    }

    /**
     * @param int $level
     */
    public function setLevel($level)
    {
        $this->level = $level;
    }
}
