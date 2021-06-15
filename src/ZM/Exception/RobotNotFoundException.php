<?php


namespace ZM\Exception;


use Throwable;

/**
 * Class RobotNotFoundException
 * @package ZM\Exception
 * @since 1.2
 */
class RobotNotFoundException extends ZMException
{
    public function __construct($message = "", $code = 0, Throwable $previous = null) {
        parent::__construct(zm_internal_errcode("E00037") . $message, $code, $previous);
    }
}
