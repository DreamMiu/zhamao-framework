(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{686:function(t,s,a){"use strict";a.r(s);var n=a(81),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"接入-websocket-客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接入-websocket-客户端"}},[t._v("#")]),t._v(" 接入 WebSocket 客户端")]),t._v(" "),s("p",[t._v("炸毛框架其实从本质上讲，就是一个 HTTP + WebSocket 服务器，所以框架也支持对接其他任何 HTTP 客户端和 WebSocket 客户端，实际上炸毛框架非常适合用 WebSocket 做在线的 IM 聊天通讯，也可以方便地进行 WS 通信。这里主要说明如何对接一个自定义的 WebSocket 客户端。")]),t._v(" "),s("h2",{attrs:{id:"类型指定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型指定"}},[t._v("#")]),t._v(" 类型指定")]),t._v(" "),s("p",[t._v("由于 WebSocket 连接都具有同样的性质，没有状态，所以在建立 WebSocket 连接的时候，需要客户端表明自己的身份和类型。指定客户端连接类型的方式有两种：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("GET")]),t._v(" 参数传递，在连接的时候，加上 GET 参数 "),s("code",[t._v("type")]),t._v(" 即可。比如 js 中 WebSocket 建立时地址写："),s("code",[t._v("ws://127.0.0.1:20001/?type=foo")]),t._v("，这时传入的连接就是 "),s("code",[t._v("foo")]),t._v(" 类型。")]),t._v(" "),s("li",[s("code",[t._v("Header")]),t._v(" 传递，用户需要在建立连接时指定 HTTP 的头部信息 "),s("code",[t._v("X-Client-Role")]),t._v("，例如 "),s("code",[t._v("X-Client-Role: foo")]),t._v("，这时传入的连接就是 "),s("code",[t._v("foo")]),t._v(" 类型。")])]),t._v(" "),s("p",[t._v("以上两种方式，"),s("code",[t._v("Header")]),t._v(" 方式比 "),s("code",[t._v("GET")]),t._v(" 方式优先级要高，如果两者均没有指定，框架会将此连接当作 "),s("code",[t._v("default")]),t._v(" 类型接入。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("对于对接 OneBot 标准的机器人客户端，只要符合 OneBot 标准，即 "),s("code",[t._v("X-Client-Role")]),t._v(" 会自动带上 "),s("code",[t._v("universal")]),t._v("、"),s("code",[t._v("qq")]),t._v(" 等字样，就会自动标记为 "),s("code",[t._v("qq")]),t._v(" 类型。")])]),t._v(" "),s("h2",{attrs:{id:"逻辑编写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑编写"}},[t._v("#")]),t._v(" 逻辑编写")]),t._v(" "),s("p",[t._v("传入连接后，我们就能通过注解事件绑定来做我们自己想做的事情了！比如下方是传入类型为 foo 连接要做的事情")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("ZM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Swoole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("OnOpenEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("ZM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("ZM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ConnectionManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ConnectionObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n \t * @OnOpenEvent("foo")\n \t */')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("onFooConnect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("ConnectionObject")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Console")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('" 已连接！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("以上作用就是在终端输出 "),s("code",[t._v("foo 已连接！")]),t._v(" 这个提示的。关于 "),s("code",[t._v("ConnectionObject")]),t._v(" 对象，见下方。")]),t._v(" "),s("h2",{attrs:{id:"ws-连接对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ws-连接对象"}},[t._v("#")]),t._v(" WS 连接对象")]),t._v(" "),s("p",[t._v("对于每一个 WebSocket 连接，框架内都有一个专属的操作类，有获取类型名称、保存链接参数和属性以及获取文件标识符等功能。")]),t._v(" "),s("h3",{attrs:{id:"getfd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getfd"}},[t._v("#")]),t._v(" getFd()")]),t._v(" "),s("p",[t._v("获取文件标示符，用于发送消息、接收消息等。这个参数获取的 "),s("code",[t._v("fd")]),t._v(" 是 Swoole 指定的，用于发送信息等。")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("blockquote",[s("p",[t._v("WebSocket 是全双工的，所以发送和接收其实是互不干扰的，你可以不仅仅在 WebSocket 相关的上下文中，还可以比如在 HTTP 或者机器人上下文中给别的 WebSocket 客户端发请求。")])]),t._v(" "),s("h3",{attrs:{id:"getname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getname"}},[t._v("#")]),t._v(" getName()")]),t._v(" "),s("p",[t._v("获取连接对象绑定的连接类型，例如上方提到的 "),s("code",[t._v("foo")]),t._v("、"),s("code",[t._v("default")]),t._v(" 等。")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Console")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"当前连接类型："')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前连接类型：foo")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"setname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setname"}},[t._v("#")]),t._v(" setName()")]),t._v(" "),s("p",[t._v("改变连接对象绑定的连接类型，例如从 "),s("code",[t._v("foo")]),t._v(" 改为 "),s("code",[t._v("bar")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bar")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"getoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getoptions"}},[t._v("#")]),t._v(" getOptions()")]),t._v(" "),s("p",[t._v("获取此连接存储的所有参数，以数组形式。存储内容见下方 "),s("code",[t._v("setOption()")]),t._v("。")]),t._v(" "),s("p",[t._v("格式："),s("code",[t._v('["参数1" => {参数1的值}, "参数2" => {参数2的值}]')])]),t._v(" "),s("h3",{attrs:{id:"getoption"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getoption"}},[t._v("#")]),t._v(" getOption()")]),t._v(" "),s("p",[t._v("获取此连接存储的参数，获取指定名称的，此方法拥有一个参数 "),s("code",[t._v("$key")]),t._v("，指定即可获取。")]),t._v(" "),s("p",[t._v("如果没有对应参数，则返回 "),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("p",[t._v("我们在前面的机器人部分知道，框架主要是用于机器人的连接，那么机器人客户端在连接后，比如我们想知道这个机器人的 WS 连接对应的是哪个 QQ 号的机器人，我们就可以用 "),s("code",[t._v('getOption("connect_id")')]),t._v(" 来获取。这个 "),s("code",[t._v("connect_id")]),t._v(" 是 OneBot 标准的客户端接入后自动填入的一个参数。例如，我们想在机器人接入后打出接入机器人的 QQ 号：")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * @OnOpenEvent("qq")\n */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("onQQConnect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Console")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"机器人 "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"connect_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('" 已连接！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 机器人 123456 已连接！")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"setoption"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setoption"}},[t._v("#")]),t._v(" setOption()")]),t._v(" "),s("p",[t._v("设置连接存储的参数。参数："),s("code",[t._v("setOption($key, $value)")]),t._v("。"),s("code",[t._v("$key")]),t._v(" 限定为 "),s("code",[t._v("connect_id")]),t._v(" 一种。（因为目前有了 LightCache，所以这里暂时不提供别的 key 设定）")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"connect_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"asdasdasd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $value 最长长度为 29")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"发送到-websocket-客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送到-websocket-客户端"}},[t._v("#")]),t._v(" 发送到 WebSocket 客户端")]),t._v(" "),s("p",[t._v("很简单，从上面获取到 "),s("code",[t._v("fd")]),t._v(" 后使用下面的方式就可以了～")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二个为 string 类型的参数")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"从客户端接收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从客户端接收"}},[t._v("#")]),t._v(" 从客户端接收")]),t._v(" "),s("p",[t._v("接收消息必须从 "),s("code",[t._v("@OnMessageEvent")]),t._v(" 注解事件下接收，使用上下文 "),s("code",[t._v("ctx()->getFrame()")]),t._v(" 获取消息帧。")]),t._v(" "),s("p",[t._v("从这里获取的 "),s("code",[t._v("Frame")]),t._v(" 对象，见 "),s("a",{attrs:{href:"https://wiki.swoole.com/#/websocket_server?id=swoolewebsocketframe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swoole 文档 - Frame"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("Frame 对象有四个参数：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$frame->fd")]),t._v("：获取发来帧的 fd")]),t._v(" "),s("li",[s("code",[t._v("$frame->data")]),t._v("：数据本体")]),t._v(" "),s("li",[s("code",[t._v("$frame->opcode")]),t._v("：数据类型 int 值，见 "),s("a",{attrs:{href:"https://wiki.swoole.com/#/websocket_server?id=%e6%95%b0%e6%8d%ae%e5%b8%a7%e7%b1%bb%e5%9e%8b",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swoole 文档 - 数据帧类型"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("code",[t._v("$frame->finish")]),t._v("：是否发送完毕，bool")])]),t._v(" "),s("p",[t._v("下面以接收一个 json 字符串为例，并进行后续的解析：")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * @OnMessageEvent("foo")\n */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("onMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ctx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$json_str")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$frame")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 假设传入的是 {"key1":"value1","k2":"v2"}')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$json")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json_decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$json_str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Console")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"key1 的值是:"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"key1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"关闭连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭连接"}},[t._v("#")]),t._v(" 关闭连接")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);