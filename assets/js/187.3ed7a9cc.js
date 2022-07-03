(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{863:function(s,t,a){"use strict";a.r(t);var n=a(81),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"zmutil-杂项工具类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zmutil-杂项工具类"}},[s._v("#")]),s._v(" ZMUtil 杂项工具类")]),s._v(" "),t("p",[s._v("调用前先 use："),t("code",[s._v("use ZM\\Utils\\ZMUtil;")])]),s._v(" "),t("h2",{attrs:{id:"zmutil-stop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zmutil-stop"}},[s._v("#")]),s._v(" ZMUtil::stop()")]),s._v(" "),t("p",[s._v("停止框架运行。")]),s._v(" "),t("h2",{attrs:{id:"zmutil-reload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zmutil-reload"}},[s._v("#")]),s._v(" ZMUtil::reload()")]),s._v(" "),t("p",[s._v("重载框架，这会断开所有到框架的连接和重载所有 "),t("code",[s._v("src/")]),s._v(" 目录下的用户源码并重新加载所有 Worker 进程。")]),s._v(" "),t("h2",{attrs:{id:"zmutil-getmodinstance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zmutil-getmodinstance"}},[s._v("#")]),s._v(" ZMUtil::getModInstance()")]),s._v(" "),t("p",[s._v("根据类名称拿到此类的单例（前提是目标的类的构造函数为空）。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[s._v("ASD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("ZMUtil")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getModInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("ASD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"zmutil-getreloadablefiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zmutil-getreloadablefiles"}},[s._v("#")]),s._v(" ZMUtil::getReloadableFiles()")]),s._v(" "),t("p",[s._v("返回可通过热重启（reload）来重新加载的 php 文件列表。")]),s._v(" "),t("p",[s._v("以下是示例模块下的例子（直接拉取最新的框架源码并运行框架后获取的）。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[s._v("array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("94")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Context/Context.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Context/ContextInterface.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/AnnotationParser.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("97")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/Custom/Annotation/Example.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("98")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Interfaces/CustomAnnotation.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/Module/Example/Hello.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Swoole/OnStart.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/CQ/CQCommand.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Interfaces/Level.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("103")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Command/TerminalCommand.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("104")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Http/RequestMapping.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("105")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Http/RequestMethod.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("106")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Http/Middleware.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("107")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Interfaces/ErgodicAnnotation.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("108")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Swoole/OnOpenEvent.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("109")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Swoole/OnSwooleEventBase.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Interfaces/Rule.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Swoole/OnCloseEvent.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("112")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Swoole/OnRequestEvent.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("113")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Http/RouteManager.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"vendor/symfony/routing/RouteCollection.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("115")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"vendor/symfony/routing/Route.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("116")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/Module/Middleware/TimerMiddleware.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("117")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Http/MiddlewareInterface.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("118")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Http/MiddlewareClass.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("119")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Http/HandleBefore.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Http/HandleAfter.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("121")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Http/HandleException.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("122")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Event/EventManager.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Annotation/Swoole/OnSwooleEvent.php"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"src/ZM/Event/EventDispatcher.php"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("blockquote",[t("p",[s._v("为什么不能重载所有文件？因为框架是多进程模型，而重载相当于只重新启动了一次 Worker 进程，Manager 和 Master 进程未重启，所以被 Manager、Master 进程已经加载的 PHP 文件无法使用 reload 命令重新加载。详见 "),t("RouterLink",{attrs:{to:"/advanced/multi-process/#_5"}},[s._v("进阶 - 进程间隔离")]),s._v("。")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);