<?php /** @noinspection PhpIncludeInspection */

require_once ((!is_dir(__DIR__ . '/../vendor')) ? getcwd() : (__DIR__ . "/..")) . "/vendor/autoload.php";

(new ZM\ConsoleApplication("zhamao-framework"))->initEnv()->run();