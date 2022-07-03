(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{864:function(t,a,s){"use strict";s.r(a);var e=s(81),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-路由管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-路由管理"}},[t._v("#")]),t._v(" HTTP 路由管理")]),t._v(" "),a("p",[t._v("HTTP 路由管理器用作管理炸毛框架内 "),a("code",[t._v("@RequestMapping")]),t._v(" 和静态目录的路由操作的，可在运行过程中编写添加路由。")]),t._v(" "),a("p",[t._v("类定义："),a("code",[t._v("\\ZM\\Http\\RouteManager")])]),t._v(" "),a("blockquote",[a("p",[t._v("2.3.0 版本起可用。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("因为炸毛框架的路由实现是不基于跨进程的共享内存的，所以每次使用这里面的工具函数都需要单独在所有 Worker 进程中执行一次，最好的办法就是在启动框架时执行（"),a("code",[t._v("@OnStart(-1)")]),t._v(" 即可，代表此注解事件将在每个工作进程中都被执行一次）。")])]),t._v(" "),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("h3",{attrs:{id:"importroutebyannotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importroutebyannotation"}},[t._v("#")]),t._v(" importRouteByAnnotation()")]),t._v(" "),a("p",[t._v("通过注解类导入路由。（注：此方法一般为框架内部使用）")]),t._v(" "),a("p",[t._v("定义："),a("code",[t._v("importRouteByAnnotation(RequestMapping $vss, $method, $class, $methods_annotations)")])]),t._v(" "),a("p",[t._v("参数 "),a("code",[t._v("$vss")]),t._v("：RequestMapping 注解类，类中定义 "),a("code",[t._v("route")]),t._v(" 和 "),a("code",[t._v("request_method")]),t._v(" 即可。")]),t._v(" "),a("p",[t._v("参数 "),a("code",[t._v("$method, $class")]),t._v("：执行的目标注解事件函数位置，比如 "),a("code",[t._v("$class = \\Module\\Example\\Hello::class")]),t._v("，"),a("code",[t._v("$method = 'hitokoto'")]),t._v("。")]),t._v(" "),a("p",[t._v("参数 "),a("code",[t._v("$methods_annotations")]),t._v("：需要绑定的 Controller 注解类数组，一般数组内建议只带有一个 Controller，如 "),a("code",[t._v("[$controller]")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"addstaticfileroute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addstaticfileroute"}},[t._v("#")]),t._v(" addStaticFileRoute()")]),t._v(" "),a("p",[t._v("添加一个单目录（此目录下无子目录，只有文件）并绑定为一个路由。")]),t._v(" "),a("p",[t._v("定义："),a("code",[t._v("addStaticFileRoute($route, $path)")])]),t._v(" "),a("p",[t._v("参数 "),a("code",[t._v("$route")]),t._v("：绑定的目标路由，如 "),a("code",[t._v("/images/")]),t._v("。")]),t._v(" "),a("p",[t._v("参数 "),a("code",[t._v("$path")]),t._v("：绑定的文件目录位置，如 "),a("code",[t._v("/root/zhamao-framework-starter/zm_data/images/")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @OnStart(-1)\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("onStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("RouteManager")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addStaticFileRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"/images/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("DataProvider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataFolder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"images/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),a("h3",{attrs:{id:"routemanager-routes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routemanager-routes"}},[t._v("#")]),t._v(" RouteManager::$routes")]),t._v(" "),a("p",[t._v("此为存放路由树的变量，请谨慎操作。")]),t._v(" "),a("p",[t._v("定义："),a("code",[t._v("\\Symfony\\Component\\Routing\\RouteCollection | null")])]),t._v(" "),a("p",[t._v("炸毛框架使用了 Symfony 框架的 route 组件，有关详情请查阅 "),a("a",{attrs:{href:"https://symfony.com/doc/current/routing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);