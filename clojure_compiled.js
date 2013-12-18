goog.provide('lt.objs.clients.nrepl');
goog.require('cljs.core');
goog.require('lt.util.load');
goog.require('lt.util.cljs');
goog.require('lt.util.js');
goog.require('lt.objs.files');
goog.require('lt.util.js');
goog.require('cljs.reader');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.cljs');
goog.require('lt.objs.files');
goog.require('lt.objs.clients');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.clients');

lt.objs.clients.nrepl.bencode = lt.util.load.node_module.call(null,"bencode");

lt.objs.clients.nrepl.Buffer = require("buffer");

lt.objs.clients.nrepl.net = require("net");

lt.objs.clients.nrepl.encode = (function encode(msg){return lt.objs.clients.nrepl.bencode.encode(cljs.core.clj__GT_js.call(null,msg));
});

lt.objs.clients.nrepl.create_buffer = (function create_buffer(size){var b = lt.objs.clients.nrepl.Buffer.Buffer;return (new b(size));
});

lt.objs.clients.nrepl.decode = (function decode(client,msg){var msgs = [];var msg_8188__$1 = msg;while(true){
if((msg_8188__$1.length <= 0))
{lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",3930752946),null], null));
} else
{try{var neue_8189 = lt.util.cljs.js__GT_clj.call(null,lt.objs.clients.nrepl.bencode.decode(msg_8188__$1,"utf-8"),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var pos_8190 = lt.objs.clients.nrepl.bencode.decode.position;msgs.push(neue_8189);
if(cljs.core.truth_((function (){var and__6404__auto__ = pos_8190;if(cljs.core.truth_(and__6404__auto__))
{return (pos_8190 >= msg_8188__$1.length);
} else
{return and__6404__auto__;
}
})()))
{lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",3930752946),null], null));
} else
{{
var G__8191 = msg_8188__$1.slice(pos_8190);
msg_8188__$1 = G__8191;
continue;
}
}
}catch (e8175){if((e8175 instanceof global.Error))
{var e_8192 = e8175;lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",3930752946),msg_8188__$1], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8175;
} else
{}
}
}}
break;
}
return msgs;
});

lt.objs.clients.nrepl.queue = [];

lt.objs.clients.nrepl.queue_index = 0;

lt.objs.clients.nrepl.running_QMARK_ = false;

lt.objs.clients.nrepl.non_blocking_loop = (function non_blocking_loop(client){if((lt.objs.clients.nrepl.queue_index > 20))
{lt.objs.clients.nrepl.queue.splice(0,lt.objs.clients.nrepl.queue_index);
lt.objs.clients.nrepl.queue_index = 0;
} else
{}
lt.object.raise.call(null,client,new cljs.core.Keyword("lt.objs.clients.nrepl","message","lt.objs.clients.nrepl/message",2167279778),(lt.objs.clients.nrepl.queue[lt.objs.clients.nrepl.queue_index]));
if((lt.objs.clients.nrepl.queue_index >= lt.objs.clients.nrepl.queue.length))
{lt.objs.clients.nrepl.running_QMARK_ = false;
lt.objs.clients.nrepl.queue_index = 0;
return lt.objs.clients.nrepl.queue = [];
} else
{return global.setImmediate((function (){lt.objs.clients.nrepl.queue_index = (lt.objs.clients.nrepl.queue_index + 1);
return non_blocking_loop.call(null,client);
}));
}
});

lt.objs.clients.nrepl.try_decode = (function try_decode(client,data){var buffer = (cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)))?lt.objs.clients.nrepl.Buffer.Buffer.concat([new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)),data]):data);var decoded = lt.objs.clients.nrepl.decode.call(null,client,buffer);lt.objs.clients.nrepl.queue = lt.objs.clients.nrepl.queue.concat(decoded);
if(cljs.core.truth_(lt.objs.clients.nrepl.running_QMARK_))
{return null;
} else
{lt.objs.clients.nrepl.running_QMARK_ = true;
return lt.objs.clients.nrepl.non_blocking_loop.call(null,client);
}
});

lt.objs.clients.nrepl.connect_to = (function connect_to(host,port,client){var socket = lt.objs.clients.nrepl.net.connect(port,host);socket.on("connect",(function (){if(cljs.core.truth_(cljs.core.deref.call(null,client)))
{return lt.object.raise.call(null,client,new cljs.core.Keyword("lt.objs.clients.nrepl","connect","lt.objs.clients.nrepl/connect",2163443591));
} else
{return null;
}
}));
socket.on("error",(function (){if(cljs.core.truth_(cljs.core.deref.call(null,client)))
{return lt.object.raise.call(null,client,new cljs.core.Keyword("lt.objs.clients.nrepl","connect-fail","lt.objs.clients.nrepl/connect-fail",1250528944));
} else
{return null;
}
}));
socket.on("data",(function (p1__8176_SHARP_){if(cljs.core.truth_(cljs.core.deref.call(null,client)))
{return lt.objs.clients.nrepl.try_decode.call(null,client,p1__8176_SHARP_);
} else
{return null;
}
}));
socket.on("close",(function (){if(cljs.core.truth_(cljs.core.deref.call(null,client)))
{return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"close!","close!",3951350939));
} else
{return null;
}
}));
return socket;
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","nrepl-connect","lt.objs.clients.nrepl/nrepl-connect",741110935),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.clients.nrepl","connect","lt.objs.clients.nrepl/connect",2163443591),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.objs.clients.nrepl.send_STAR_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",1013907795),"clone"], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","init-remote-session","lt.objs.clients.nrepl/init-remote-session",1704053253),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,session){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session","session",2998892040),session], null));
return lt.objs.clients.nrepl.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",1013907795),"client.init",new cljs.core.Keyword(null,"id","id",1013907597),lt.objs.clients.__GT_id.call(null,this$),new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"remote","remote",4374260664),true,new cljs.core.Keyword(null,"client-id","client-id",3404733903),lt.objs.clients.__GT_id.call(null,this$)], null)], null))], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","client.settings.remote","lt.objs.clients.nrepl/client.settings.remote",4387090395),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client.settings","client.settings",3356017240),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,info){lt.objs.clients.handle_connection_BANG_.call(null,info);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dir","dir",1014003711),null], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","nrepl-send!","lt.objs.clients.nrepl/nrepl-send!",1630478152),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,msg){return lt.objs.clients.nrepl.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"id","id",1013907597),(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return 0;
}
})(),new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","client.settings","lt.objs.clients.nrepl/client.settings",802234755),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client.settings","client.settings",3356017240),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,info){return lt.objs.clients.handle_connection_BANG_.call(null,info);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","init-session","lt.objs.clients.nrepl/init-session",2134920568),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-session","new-session",1013080795),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,session){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session","session",2998892040),session], null));
return lt.objs.clients.nrepl.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",1013907795),"client.init",new cljs.core.Keyword(null,"id","id",1013907597),lt.objs.clients.__GT_id.call(null,this$),new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",3404733903),lt.objs.clients.__GT_id.call(null,this$),new cljs.core.Keyword(null,"dir","dir",1014003711),new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null))], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","nrepl-message","lt.objs.clients.nrepl/nrepl-message",726056370),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.clients.nrepl","message","lt.objs.clients.nrepl/message",2167279778),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,msg){var op = new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(msg);var encoding = new cljs.core.Keyword(null,"encoding","encoding",2725126341).cljs$core$IFn$_invoke$arity$1(msg);var info = (cljs.core.truth_(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))?(function (){var G__8177 = encoding;if(cljs.core._EQ_.call(null,"json",G__8177))
{return JSON.parse(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg));
} else
{if(cljs.core._EQ_.call(null,"edn",G__8177))
{return cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(encoding)].join('')));
} else
{return null;
}
}
}
})():null);if(cljs.core.truth_(new cljs.core.Keyword(null,"new-session","new-session",1013080795).cljs$core$IFn$_invoke$arity$1(msg)))
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"new-session","new-session",1013080795),new cljs.core.Keyword(null,"new-session","new-session",1013080795).cljs$core$IFn$_invoke$arity$1(msg));
} else
{}
if(cljs.core.truth_(cljs.core.set.call(null,new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(msg)).call(null,"interrupted")))
{lt.objs.notifos.done_working.call(null);
} else
{}
if(cljs.core.truth_(op))
{if(cljs.core.truth_(lt.util.cljs.str_contains_QMARK_.call(null,op,"client.")))
{return lt.object.raise.call(null,this$,cljs.core.keyword.call(null,op),info);
} else
{return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(msg),op,info], null));
}
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","try-connect!","lt.objs.clients.nrepl/try-connect!",2334849000),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"try-connect!","try-connect!",1801329595),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,info){if(cljs.core.truth_(new cljs.core.Keyword(null,"port","port",1017351155).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect!","connect!",4735997929));
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","connect!","lt.objs.clients.nrepl/connect!",3724440594),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect!","connect!",4735997929),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"socket","socket",4411822821),lt.objs.clients.nrepl.connect_to.call(null,new cljs.core.Keyword(null,"host","host",1017112858).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,this$),"localhost"),new cljs.core.Keyword(null,"port","port",1017351155).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),this$)], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.clients.nrepl","close","lt.objs.clients.nrepl/close",3049597585),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.objs.clients.rem_BANG_.call(null,this$);
}));

lt.objs.clients.nrepl.send_STAR_ = (function send_STAR_(client,msg){var c = lt.objs.clients.nrepl.encode.call(null,msg);return new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).write(c);
});

lt.objs.clients.nrepl.send = (function send(client,msg){var session = new cljs.core.Keyword(null,"session","session",2998892040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));var msg__$1 = cljs.core.merge.call(null,(cljs.core.truth_(session)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session","session",2998892040),session], null):null),msg);return lt.objs.clients.nrepl.send_STAR_.call(null,client,msg__$1,lt.objs.clients.nrepl.cb);
});

goog.provide('lt.objs.langs.clj');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.app');
goog.require('lt.objs.files');
goog.require('lt.objs.connector');
goog.require('lt.objs.statusbar');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.platform');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.connector');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.plugins.watches');
goog.require('lt.objs.app');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.deploy');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('lt.util.js');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.deploy');
goog.require('lt.objs.editor');

lt.objs.langs.clj.shell = lt.util.load.node_module.call(null,"shelljs");

lt.objs.langs.clj.cur_path = lt.objs.langs.clj.shell.pwd();

lt.objs.langs.clj.home_path = lt.objs.deploy.home_path;

lt.objs.langs.clj.jar_path = lt.objs.files.join.call(null,lt.objs.langs.clj.home_path,"plugins/clojure/runner/target/lein-light-standalone.jar");

lt.objs.langs.clj.binary_search = (function binary_search(arr,loc){var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc);var f = 0;var l = (arr.length - 1);while(true){
var i = (((f + l) / 2) | 0);var cur = (arr[i]);if(((cur.line >= line)) && ((cur.endLine <= line)))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),cur.line,new cljs.core.Keyword(null,"end-line","end-line",2693041432),cur.endLine,new cljs.core.Keyword(null,"col","col",1014002930),cur.col,new cljs.core.Keyword(null,"end-col","end-col",3700460800),cur.endCol], null);
} else
{if(cljs.core._EQ_.call(null,f,i,l))
{return null;
} else
{if((line > cur.endLine))
{{
var G__8245 = (i + 1);
var G__8246 = l;
f = G__8245;
l = G__8246;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__8247 = f;
var G__8248 = i;
f = G__8247;
l = G__8248;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});

lt.objs.langs.clj.find_form = (function find_form(str,loc){var parsed = lt.objs.langs.clj.parser.parse(str);return lt.objs.langs.clj.binary_search.call(null,parsed,loc);
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","highlight-comment-forms","lt.objs.langs.clj/highlight-comment-forms",2831157857),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure: Highlight comment forms as comments",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){var temp__4092__auto__ = lt.objs.editor.inner_mode.call(null,this$);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return m.commentForms = true;
} else
{return null;
}
}));

lt.objs.langs.clj.local_name = "LightTable-REPL";

lt.objs.langs.clj.unescape_unicode = (function unescape_unicode(s){if(typeof s === 'string')
{return clojure.string.replace.call(null,s,/\\x(..)/,(function (res,r){return String.fromCharCode(parseInt(r,16));
}));
} else
{return null;
}
});

lt.objs.langs.clj.cljs_result_format = (function cljs_result_format(n){if(cljs.core.fn_QMARK_.call(null,n))
{return [cljs.core.str("(fn "),cljs.core.str(n.name),cljs.core.str(" ..)")].join('');
} else
{if((n == null))
{return "nil";
} else
{if(cljs.core._EQ_.call(null,cljs.core.pr_str.call(null,n),"#<[object Object]>"))
{return lt.objs.console.inspect.call(null,n);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.pr_str.call(null,n);
} else
{return null;
}
}
}
}
});

lt.objs.langs.clj.try_connect = (function try_connect(p__8193){var map__8196 = p__8193;var map__8196__$1 = ((cljs.core.seq_QMARK_.call(null,map__8196))?cljs.core.apply.call(null,cljs.core.hash_map,map__8196):map__8196);var info = cljs.core.get.call(null,map__8196__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var map__8197 = (cljs.core.truth_(path)?lt.objs.langs.clj.find_project.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)):null);var map__8197__$1 = ((cljs.core.seq_QMARK_.call(null,map__8197))?cljs.core.apply.call(null,cljs.core.hash_map,map__8197):map__8197);var project_path = cljs.core.get.call(null,map__8197__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));if(cljs.core.truth_(project_path))
{return lt.objs.langs.clj.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"nrepl.client","nrepl.client",4747318638))], null));
} else
{var or__6416__auto__ = lt.objs.clients.by_name.call(null,lt.objs.langs.clj.local_name);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return lt.objs.langs.clj.run_local_server.call(null,lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"nrepl.client","nrepl.client",4747318638)));
}
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","on-eval","lt.objs.langs.clj/on-eval",3352835139),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor){return lt.object.raise.call(null,lt.objs.langs.clj.clj_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"print-length","print-length",3960797560),lt.object.raise_reduce.call(null,editor,new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null),new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.watches.watched_range.call(null,editor,null,null,(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.cljs","editor.cljs",4270230213)))?lt.objs.langs.clj.cljs_watch:lt.objs.langs.clj.clj_watch)))], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","on-eval.one","lt.objs.langs.clj/on-eval.one",3723400875),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor){var code = lt.plugins.watches.watched_range.call(null,editor,null,null,(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.cljs","editor.cljs",4270230213)))?lt.objs.langs.clj.cljs_watch:lt.objs.langs.clj.clj_watch));var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),code));var info__$2 = cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"print-length","print-length",3960797560),lt.object.raise_reduce.call(null,editor,new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null));return lt.object.raise.call(null,lt.objs.langs.clj.clj_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$2], null));
}));

lt.objs.langs.clj.fill_placeholders = (function fill_placeholders(editor,exp){return clojure.string.replace.call(null,clojure.string.replace.call(null,exp,"__SELECTION*__",cljs.core.pr_str.call(null,lt.objs.editor.selection.call(null,editor))),"__SELECTION__",lt.objs.editor.selection.call(null,editor));
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","on-eval.custom","lt.objs.langs.clj/on-eval.custom",761441942),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,exp,opts){var code = lt.objs.langs.clj.fill_placeholders.call(null,editor,exp);var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"ns","ns",1013907767),(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(info);
}
})(),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end")),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"result-type","result-type",4725630556),(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})()], null));var info__$2 = cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"print-length","print-length",3960797560),lt.object.raise_reduce.call(null,editor,new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null));return lt.object.raise.call(null,lt.objs.langs.clj.clj_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$2], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","on-code","lt.objs.langs.clj/on-code",3352936852),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.code","editor.eval.cljs.code",866569770),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,result){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"exec.cljs!","exec.cljs!",3800101572),result);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","exec.cljs!","lt.objs.langs.clj/exec.cljs!",3216591803),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exec.cljs!","exec.cljs!",3800101572),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,res){var client = new cljs.core.Keyword(null,"exec","exec",1017031683).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var res__$1 = cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",2111450984)], null),((function (client,path){
return (function (p1__8198_SHARP_){var iter__7114__auto__ = ((function (client,path){
return (function iter__8199(s__8200){return (new cljs.core.LazySeq(null,((function (client,path){
return (function (){var s__8200__$1 = s__8200;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8200__$1);if(temp__4092__auto__)
{var s__8200__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8200__$2))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,s__8200__$2);var size__7113__auto__ = cljs.core.count.call(null,c__7112__auto__);var b__8202 = cljs.core.chunk_buffer.call(null,size__7113__auto__);if((function (){var i__8201 = 0;while(true){
if((i__8201 < size__7113__auto__))
{var r = cljs.core._nth.call(null,c__7112__auto__,i__8201);cljs.core.chunk_append.call(null,b__8202,cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.eval.append_source_file.call(null,lt.objs.eval.pad.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(r),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(r)) - 1)),path)));
{
var G__8249 = (i__8201 + 1);
i__8201 = G__8249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8202),iter__8199.call(null,cljs.core.chunk_rest.call(null,s__8200__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8202),null);
}
} else
{var r = cljs.core.first.call(null,s__8200__$2);return cljs.core.cons.call(null,cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.eval.append_source_file.call(null,lt.objs.eval.pad.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(r),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(r)) - 1)),path)),iter__8199.call(null,cljs.core.rest.call(null,s__8200__$2)));
}
} else
{return null;
}
break;
}
});})(client,path))
,null,null));
});})(client,path))
;return iter__7114__auto__.call(null,p1__8198_SHARP_);
});})(client,path))
);return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"cljs"], null),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"exec","exec",1017031683),new cljs.core.Keyword(null,"origin","origin",4300251800),this$], null)),new cljs.core.Keyword(null,"editor.eval.cljs.exec","editor.eval.cljs.exec",866638030),res__$1,new cljs.core.Keyword(null,"only","only",1017320222),this$);
}));

lt.objs.langs.clj.mime__GT_type = new cljs.core.PersistentArrayMap(null, 2, ["text/x-clojure","clj","text/x-clojurescript","cljs"], null);

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","eval!","lt.objs.langs.clj/eval!",1600974726),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,event){var map__8203 = event;var map__8203__$1 = ((cljs.core.seq_QMARK_.call(null,map__8203))?cljs.core.apply.call(null,cljs.core.hash_map,map__8203):map__8203);var origin = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword(null,"info","info",1017141280));var command = lt.util.cljs.__GT_dottedkw.call(null,new cljs.core.Keyword(null,"editor.eval","editor.eval",4270299119),lt.objs.langs.clj.mime__GT_type.call(null,new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(info)));var client = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,origin)));lt.objs.notifos.working.call(null);
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.clj.try_connect], null)),command,info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","build!","lt.objs.langs.clj/build!",3356902364),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"build!","build!",3930847973),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,event){var map__8204 = event;var map__8204__$1 = ((cljs.core.seq_QMARK_.call(null,map__8204))?cljs.core.apply.call(null,cljs.core.hash_map,map__8204):map__8204);var origin = cljs.core.get.call(null,map__8204__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8204__$1,new cljs.core.Keyword(null,"info","info",1017141280));var command = lt.util.cljs.__GT_dottedkw.call(null,lt.objs.langs.clj.mime__GT_type.call(null,new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(info)),"compile");lt.objs.notifos.working.call(null,"Starting build");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.clj.try_connect], null)),command,info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","build-cljs-plugin","lt.objs.langs.clj/build-cljs-plugin",4369932672),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"build","build",1107999200),null], null), null),new cljs.core.Keyword(null,"desc","desc",1016984067),"Plugin: build ClojureScript plugin",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,opts){var to_compile = lt.objs.files.filter_walk.call(null,(function (p1__8205_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__8205_SHARP_),"cljs");
}),lt.objs.files.join.call(null,new cljs.core.Keyword("lt.objs.plugins","plugin-path","lt.objs.plugins/plugin-path",2063828362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),"src"));return lt.object.raise.call(null,lt.objs.langs.clj.clj_lang,new cljs.core.Keyword(null,"build!","build!",3930847973),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"files","files",1111338473),to_compile,new cljs.core.Keyword(null,"mime","mime",1017255846),new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"path","path",1017337751),lt.objs.files.join.call(null,new cljs.core.Keyword("lt.objs.plugins","plugin-path","lt.objs.plugins/plugin-path",2063828362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),"plugin.edn"),new cljs.core.Keyword(null,"ignore","ignore",4118475076),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cljs.core","cljs.core",1979061844,null),new cljs.core.Symbol(null,"cljs.reader","cljs.reader",-1715113864,null),new cljs.core.Symbol(null,"clojure.string","clojure.string",-2028944364,null),new cljs.core.Symbol(null,"clojure.set","clojure.set",-2081128431,null),new cljs.core.Symbol(null,"goog.string","goog.string",-745757000,null)], null),new cljs.core.Keyword(null,"merge?","merge?",4231255673),true], null),new cljs.core.Keyword(null,"origin","origin",4300251800),this$], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","plugin-compile-results","lt.objs.langs.clj/plugin-compile-results",4018048043),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs.compile.results","cljs.compile.results",3808629809),null], null), null),new cljs.core.Keyword(null,"desc","desc",1016984067),"Plugin: output compile results",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,res){var plugin_name = lt.objs.files.basename.call(null,new cljs.core.Keyword("lt.objs.plugins","plugin-path","lt.objs.plugins/plugin-path",2063828362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var final_path = lt.objs.files.join.call(null,new cljs.core.Keyword("lt.objs.plugins","plugin-path","lt.objs.plugins/plugin-path",2063828362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),[cljs.core.str(plugin_name),cljs.core.str("_compiled.js")].join(''));lt.objs.notifos.done_working.call(null,[cljs.core.str("Compiled plugin to "),cljs.core.str(final_path)].join(''));
return lt.objs.files.save.call(null,final_path,new cljs.core.Keyword(null,"js","js",1013907643).cljs$core$IFn$_invoke$arity$1(res));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","on-result-set-ns","lt.objs.langs.clj/on-result-set-ns",3645523899),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.eval.cljs.code","editor.eval.cljs.code",866569770),null,new cljs.core.Keyword(null,"editor.eval.clj.result","editor.eval.clj.result",1582056205),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res){if(cljs.core.truth_((function (){var and__6404__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(and__6404__auto__))
{return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))),new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(res));
} else
{return and__6404__auto__;
}
})()))
{return lt.object.update_BANG_.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280)], null),cljs.core.assoc,new cljs.core.Keyword(null,"ns","ns",1013907767),new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(res));
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","no-op","lt.objs.langs.clj/no-op",1609138654),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.eval.clj.no-op","editor.eval.clj.no-op",3245525409),null,new cljs.core.Keyword(null,"editor.eval.cljs.no-op","editor.eval.cljs.no-op",751609204),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.objs.notifos.done_working.call(null);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-result","lt.objs.langs.clj/cljs-result",2757404497),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.result","editor.eval.cljs.result",1580065178),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res){lt.objs.notifos.done_working.call(null);
var type = (function (){var or__6416__auto__ = new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res));if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})();var ev = lt.util.cljs.__GT_dottedkw.call(null,new cljs.core.Keyword(null,"editor.eval.cljs.result","editor.eval.cljs.result",1580065178),type);return lt.object.raise.call(null,obj,ev,res);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-result.replace","lt.objs.langs.clj/cljs-result.replace",4638650895),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.result.replace","editor.eval.cljs.result.replace",1975778400),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res){var temp__4090__auto__ = (function (){var or__6416__auto__ = new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res);
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var err = temp__4090__auto__;return lt.objs.notifos.set_msg_BANG_.call(null,err,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.objs.editor.replace_selection.call(null,obj,lt.objs.langs.clj.unescape_unicode.call(null,(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return "";
}
})()));
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-result.statusbar","lt.objs.langs.clj/cljs-result.statusbar",3103960004),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.result.statusbar","editor.eval.cljs.result.statusbar",4637192717),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res){var temp__4090__auto__ = (function (){var or__6416__auto__ = new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res);
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var err = temp__4090__auto__;return lt.objs.notifos.set_msg_BANG_.call(null,err,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,lt.objs.langs.clj.unescape_unicode.call(null,(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return "";
}
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"result"], null));
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-result.inline","lt.objs.langs.clj/cljs-result.inline",1067194080),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.result.inline","editor.eval.cljs.result.inline",4674785425),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res){var meta = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res);var loc = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta) - 1)], null);var temp__4090__auto__ = (function (){var or__6416__auto__ = new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res);
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var err = temp__4090__auto__;return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.cljs.exception","editor.eval.cljs.exception",4479049174),res,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),lt.objs.langs.clj.unescape_unicode.call(null,(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return "";
}
})()),loc);
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-result","lt.objs.langs.clj/clj-result",1468200642),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result","editor.eval.clj.result",1582056205),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res){lt.objs.notifos.done_working.call(null);
var type = (function (){var or__6416__auto__ = new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res));if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})();var ev = lt.util.cljs.__GT_dottedkw.call(null,new cljs.core.Keyword(null,"editor.eval.clj.result","editor.eval.clj.result",1582056205),type);return lt.object.raise.call(null,obj,ev,res);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-result.replace","lt.objs.langs.clj/clj-result.replace",3584954496),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.replace","editor.eval.clj.result.replace",4306451155),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res){var seq__8206 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res));var chunk__8208 = null;var count__8209 = 0;var i__8210 = 0;while(true){
if((i__8210 < count__8209))
{var result = cljs.core._nth.call(null,chunk__8208,i__8210);var meta_8250 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_8251 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_8250) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_8250),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_8250) - 1)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{lt.objs.editor.replace_selection.call(null,obj,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));
}
{
var G__8252 = seq__8206;
var G__8253 = chunk__8208;
var G__8254 = count__8209;
var G__8255 = (i__8210 + 1);
seq__8206 = G__8252;
chunk__8208 = G__8253;
count__8209 = G__8254;
i__8210 = G__8255;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8206);if(temp__4092__auto__)
{var seq__8206__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8206__$1))
{var c__7145__auto__ = cljs.core.chunk_first.call(null,seq__8206__$1);{
var G__8256 = cljs.core.chunk_rest.call(null,seq__8206__$1);
var G__8257 = c__7145__auto__;
var G__8258 = cljs.core.count.call(null,c__7145__auto__);
var G__8259 = 0;
seq__8206 = G__8256;
chunk__8208 = G__8257;
count__8209 = G__8258;
i__8210 = G__8259;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__8206__$1);var meta_8260 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_8261 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_8260) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_8260),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_8260) - 1)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{lt.objs.editor.replace_selection.call(null,obj,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));
}
{
var G__8262 = cljs.core.next.call(null,seq__8206__$1);
var G__8263 = null;
var G__8264 = 0;
var G__8265 = 0;
seq__8206 = G__8262;
chunk__8208 = G__8263;
count__8209 = G__8264;
i__8210 = G__8265;
continue;
}
}
} else
{return null;
}
}
break;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-result.statusbar","lt.objs.langs.clj/clj-result.statusbar",4342075885),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.statusbar","editor.eval.clj.result.statusbar",2440781760),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res){var seq__8212 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res));var chunk__8214 = null;var count__8215 = 0;var i__8216 = 0;while(true){
if((i__8216 < count__8215))
{var result = cljs.core._nth.call(null,chunk__8214,i__8216);var meta_8266 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_8267 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_8266) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_8266),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_8266) - 1)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"result"], null));
}
{
var G__8268 = seq__8212;
var G__8269 = chunk__8214;
var G__8270 = count__8215;
var G__8271 = (i__8216 + 1);
seq__8212 = G__8268;
chunk__8214 = G__8269;
count__8215 = G__8270;
i__8216 = G__8271;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8212);if(temp__4092__auto__)
{var seq__8212__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8212__$1))
{var c__7145__auto__ = cljs.core.chunk_first.call(null,seq__8212__$1);{
var G__8272 = cljs.core.chunk_rest.call(null,seq__8212__$1);
var G__8273 = c__7145__auto__;
var G__8274 = cljs.core.count.call(null,c__7145__auto__);
var G__8275 = 0;
seq__8212 = G__8272;
chunk__8214 = G__8273;
count__8215 = G__8274;
i__8216 = G__8275;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__8212__$1);var meta_8276 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_8277 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_8276) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_8276),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_8276) - 1)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"result"], null));
}
{
var G__8278 = cljs.core.next.call(null,seq__8212__$1);
var G__8279 = null;
var G__8280 = 0;
var G__8281 = 0;
seq__8212 = G__8278;
chunk__8214 = G__8279;
count__8215 = G__8280;
i__8216 = G__8281;
continue;
}
}
} else
{return null;
}
}
break;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-result.inline","lt.objs.langs.clj/clj-result.inline",2141902415),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.inline","editor.eval.clj.result.inline",1424832446),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res){var seq__8218 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res));var chunk__8220 = null;var count__8221 = 0;var i__8222 = 0;while(true){
if((i__8222 < count__8221))
{var result = cljs.core._nth.call(null,chunk__8220,i__8222);var meta_8282 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_8283 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_8282) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_8282),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_8282) - 1)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_8283);
}
{
var G__8284 = seq__8218;
var G__8285 = chunk__8220;
var G__8286 = count__8221;
var G__8287 = (i__8222 + 1);
seq__8218 = G__8284;
chunk__8220 = G__8285;
count__8221 = G__8286;
i__8222 = G__8287;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8218);if(temp__4092__auto__)
{var seq__8218__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8218__$1))
{var c__7145__auto__ = cljs.core.chunk_first.call(null,seq__8218__$1);{
var G__8288 = cljs.core.chunk_rest.call(null,seq__8218__$1);
var G__8289 = c__7145__auto__;
var G__8290 = cljs.core.count.call(null,c__7145__auto__);
var G__8291 = 0;
seq__8218 = G__8288;
chunk__8220 = G__8289;
count__8221 = G__8290;
i__8222 = G__8291;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__8218__$1);var meta_8292 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result);var loc_8293 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_8292) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_8292),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_8292) - 1)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(result)))
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),result,new cljs.core.Keyword(null,"passed","passed",4313490402));
} else
{lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result),loc_8293);
}
{
var G__8294 = cljs.core.next.call(null,seq__8218__$1);
var G__8295 = null;
var G__8296 = 0;
var G__8297 = 0;
seq__8218 = G__8294;
chunk__8220 = G__8295;
count__8221 = G__8296;
i__8222 = G__8297;
continue;
}
}
} else
{return null;
}
}
break;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-exception","lt.objs.langs.clj/clj-exception",4450372364),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res,passed_QMARK_){if(cljs.core.truth_(passed_QMARK_))
{} else
{lt.objs.notifos.done_working.call(null,"");
}
var meta = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res);var loc = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$2(meta,0),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$2(meta,1) - 1)], null);lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(res),loc);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-exception","lt.objs.langs.clj/cljs-exception",4584610869),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.exception","editor.eval.cljs.exception",4479049174),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,res,passed_QMARK_){if(cljs.core.truth_(passed_QMARK_))
{} else
{lt.objs.notifos.done_working.call(null,"");
}
var meta = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res);var loc = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta) - 1)], null);var msg = (function (){var or__6416__auto__ = new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res);
}
})();var stack = (function (){var or__6416__auto__ = new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res).stack;
}
})();lt.objs.notifos.set_msg_BANG_.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),stack,loc);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","eval-location","lt.objs.langs.clj/eval-location",3661950535),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.eval.clj.location","editor.eval.clj.location",3783930661),null,new cljs.core.Keyword(null,"editor.eval.cljs.location","editor.eval.cljs.location",1870553714),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,loc){return null;
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","eval-print","lt.objs.langs.clj/eval-print",2999565997),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.print","editor.eval.clj.print",3247519457),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,str){if(cljs.core.not_EQ_.call(null,"\n",new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(str)))
{return lt.objs.console.loc_log.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",1017047278),lt.objs.files.basename.call(null,(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{var or__6416__auto____$1 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(or__6416__auto____$1))
{return or__6416__auto____$1;
} else
{return "unknown";
}
}
})()),new cljs.core.Keyword(null,"line","line",1017226086),(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,this$,new cljs.core.Keyword(null,"nrepl.client","nrepl.client",4747318638)))?"stdout":null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(str),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(str)], null));
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","eval-print-err","lt.objs.langs.clj/eval-print-err",665272021),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.print.err","editor.eval.clj.print.err",4679424472),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,str){if(cljs.core.not_EQ_.call(null,"\n",new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(str)))
{return lt.objs.console.error.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(str));
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","handle-cancellation","lt.objs.langs.clj/handle-cancellation",4150971649),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.cancel","editor.eval.clj.cancel",1148758378),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){lt.objs.notifos.done_working.call(null);
return lt.objs.notifos.set_msg_BANG_.call(null,"Canceled clj eval.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","print-length","lt.objs.langs.clj/print-length",3444392583),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null], null), null),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure: Set the print length for eval (doesn't affect CLJS)",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"length",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"number","number",4274507451)], null)], null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true,new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,res,len){return len;
}));

lt.object.object_STAR_.call(null,new cljs.core.Keyword(null,"langs.clj","langs.clj",2528862058),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clojure.lang","clojure.lang",4535056938),null], null), null));

lt.objs.langs.clj.clj_lang = lt.object.create.call(null,new cljs.core.Keyword(null,"langs.clj","langs.clj",2528862058));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","java-exe","lt.objs.langs.clj/java-exe",2531853416),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure: set the path to the Java executable for clients",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"path"], null)], null),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true,new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,path){return lt.object.merge_BANG_.call(null,lt.objs.langs.clj.clj_lang,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"java-exe","java-exe",4725979993),path], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","require-jar","lt.objs.langs.clj/require-jar",1330082332),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,path){var code = cljs.core.pr_str.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("pomegranate","add-classpath","pomegranate/add-classpath",-1341356599,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,398),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,398),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,77)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,path))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,398),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,398),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,84))))));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"send!","send!",1123226891),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cb","cb",1013907409),lt.object.__GT_id.call(null,this$),new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.clj","editor.eval.clj",1083014050),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"ns","ns",1013907767),"user",new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747)], null)], null)], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","connect","lt.objs.langs.clj/connect",845075811),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,path){return lt.objs.langs.clj.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
}));

lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Clojure",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a project.clj to connect to for either Clojure or ClojureScript.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.file.call(null,lt.objs.langs.clj.clj_lang,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));

lt.objs.langs.clj.server_input = (function server_input(){var e__7752__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"host:port",new cljs.core.Keyword(null,"value","value",1125876963),"localhost:"], null)], null));var seq__8230_8298 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
})], null)));var chunk__8231_8299 = null;var count__8232_8300 = 0;var i__8233_8301 = 0;while(true){
if((i__8233_8301 < count__8232_8300))
{var vec__8234_8302 = cljs.core._nth.call(null,chunk__8231_8299,i__8233_8301);var ev__7753__auto___8303 = cljs.core.nth.call(null,vec__8234_8302,0,null);var func__7754__auto___8304 = cljs.core.nth.call(null,vec__8234_8302,1,null);lt.util.dom.on.call(null,e__7752__auto__,ev__7753__auto___8303,func__7754__auto___8304);
{
var G__8305 = seq__8230_8298;
var G__8306 = chunk__8231_8299;
var G__8307 = count__8232_8300;
var G__8308 = (i__8233_8301 + 1);
seq__8230_8298 = G__8305;
chunk__8231_8299 = G__8306;
count__8232_8300 = G__8307;
i__8233_8301 = G__8308;
continue;
}
} else
{var temp__4092__auto___8309 = cljs.core.seq.call(null,seq__8230_8298);if(temp__4092__auto___8309)
{var seq__8230_8310__$1 = temp__4092__auto___8309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8230_8310__$1))
{var c__7145__auto___8311 = cljs.core.chunk_first.call(null,seq__8230_8310__$1);{
var G__8312 = cljs.core.chunk_rest.call(null,seq__8230_8310__$1);
var G__8313 = c__7145__auto___8311;
var G__8314 = cljs.core.count.call(null,c__7145__auto___8311);
var G__8315 = 0;
seq__8230_8298 = G__8312;
chunk__8231_8299 = G__8313;
count__8232_8300 = G__8314;
i__8233_8301 = G__8315;
continue;
}
} else
{var vec__8235_8316 = cljs.core.first.call(null,seq__8230_8310__$1);var ev__7753__auto___8317 = cljs.core.nth.call(null,vec__8235_8316,0,null);var func__7754__auto___8318 = cljs.core.nth.call(null,vec__8235_8316,1,null);lt.util.dom.on.call(null,e__7752__auto__,ev__7753__auto___8317,func__7754__auto___8318);
{
var G__8319 = cljs.core.next.call(null,seq__8230_8310__$1);
var G__8320 = null;
var G__8321 = 0;
var G__8322 = 0;
seq__8230_8298 = G__8319;
chunk__8231_8299 = G__8320;
count__8232_8300 = G__8321;
i__8233_8301 = G__8322;
continue;
}
}
} else
{}
}
break;
}
return e__7752__auto__;
});

lt.objs.langs.clj.connect_to_remote = (function connect_to_remote(server){var vec__8237 = clojure.string.split.call(null,server,":");var host = cljs.core.nth.call(null,vec__8237,0,null);var port = cljs.core.nth.call(null,vec__8237,1,null);if(cljs.core.truth_((function (){var and__6404__auto__ = host;if(cljs.core.truth_(and__6404__auto__))
{return port;
} else
{return and__6404__auto__;
}
})()))
{var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"nrepl.client.remote","nrepl.client.remote",626670570));lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1017351155),port,new cljs.core.Keyword(null,"host","host",1017112858),host,new cljs.core.Keyword(null,"name","name",1017277949),server], null));
return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connect!","connect!",4735997929));
} else
{return null;
}
});

lt.objs.langs.clj.remote_connect = (function remote_connect(){var input = lt.objs.langs.clj.server_input.call(null);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect to a remote nREPL server.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"In order to connect to an nrepl server, make sure the server is started (e.g. lein repl :headless)\n                                 and that you have included the lighttable.nrepl.handler/lighttable-ops middleware."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Server: "], null),input], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"connect",new cljs.core.Keyword(null,"action","action",3885920680),((function (input){
return (function (){return lt.objs.langs.clj.connect_to_remote.call(null,lt.util.dom.val.call(null,input));
});})(input))
], null)], null)], null));lt.util.dom.focus.call(null,input);
return input.setSelectionRange(1000,1000);
});

lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Clojure (remote nREPL)",new cljs.core.Keyword(null,"desc","desc",1016984067),"Enter in the host:port address of an nREPL server to connect to",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.langs.clj.remote_connect.call(null);
})], null));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-watch-src","lt.objs.langs.clj/cljs-watch-src",2291659716),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch.src+","watch.src+",868749304),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,cur,meta,src){var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"ev","ev",1013907491),new cljs.core.Keyword(null,"editor.eval.cljs.watch","editor.eval.cljs.watch",759571670));return [cljs.core.str("(js/lttools.watch "),cljs.core.str(src),cljs.core.str(" (clj->js "),cljs.core.str(cljs.core.pr_str.call(null,meta__$1)),cljs.core.str("))")].join('');
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-watch-src","lt.objs.langs.clj/clj-watch-src",1621533363),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch.src+","watch.src+",868749304),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,cur,meta,src){return [cljs.core.str("(lighttable.nrepl.eval/watch "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,meta)),cljs.core.str(")")].join('');
}));

lt.objs.langs.clj.fill_watch_placeholders = (function fill_watch_placeholders(exp,src,meta,watch){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,exp,"\n"," "),"__SELECTION*__",cljs.core.pr_str.call(null,src)),"__SELECTION__",src),"__ID__",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(meta))),/__\|(.*)\|__/,watch);
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-watch-custom-src","lt.objs.langs.clj/cljs-watch-custom-src",3215613610),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch.custom.src+","watch.custom.src+",509336567),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,cur,meta,opts,src){var watch = [cljs.core.str("(js/lttools.raise "),cljs.core.str(new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(meta)),cljs.core.str(" :editor.eval.cljs.watch {:meta "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"exp","exp",1014005135)),meta))),cljs.core.str(" :result $1})")].join('');return lt.objs.langs.clj.fill_watch_placeholders.call(null,new cljs.core.Keyword(null,"exp","exp",1014005135).cljs$core$IFn$_invoke$arity$1(opts),src,meta,watch);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-watch-custom-src","lt.objs.langs.clj/clj-watch-custom-src",4598367451),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch.custom.src+","watch.custom.src+",509336567),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,cur,meta,opts,src){var wrapped = (cljs.core.truth_(new cljs.core.Keyword(null,"verbatim","verbatim",3307884968).cljs$core$IFn$_invoke$arity$1(opts))?"$1":"(pr-str $1)");var watch = [cljs.core.str("(lighttable.nrepl.core/safe-respond-to "),cljs.core.str(new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(meta)),cljs.core.str(" :editor.eval.clj.watch {:meta "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"exp","exp",1014005135)),meta))),cljs.core.str(" :result "),cljs.core.str(wrapped),cljs.core.str("})")].join('');return lt.objs.langs.clj.fill_watch_placeholders.call(null,new cljs.core.Keyword(null,"exp","exp",1014005135).cljs$core$IFn$_invoke$arity$1(opts),src,meta,watch);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-watch-result","lt.objs.langs.clj/cljs-watch-result",1009970647),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.watch","editor.eval.cljs.watch",759571670),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,res){var temp__4092__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)));if(cljs.core.truth_(temp__4092__auto__))
{var watch = temp__4092__auto__;var str_result = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"verbatim","verbatim",3307884968).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res)):new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res));var str_result__$1 = ((cljs.core._EQ_.call(null,str_result,"#<[object Object]>"))?lt.objs.console.util_inspect.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),false,1):str_result);var str_result__$2 = lt.util.js.escape.call(null,str_result__$1);return lt.object.raise.call(null,new cljs.core.Keyword(null,"inline-result","inline-result",656479555).cljs$core$IFn$_invoke$arity$1(watch),new cljs.core.Keyword(null,"update!","update!",779473898),str_result__$2);
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-watch-result","lt.objs.langs.clj/clj-watch-result",2126107784),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.watch","editor.eval.clj.watch",3253487875),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,res){var temp__4092__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)));if(cljs.core.truth_(temp__4092__auto__))
{var watch = temp__4092__auto__;var str_result = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);var str_result__$1 = lt.util.js.escape.call(null,str_result);return lt.object.raise.call(null,new cljs.core.Keyword(null,"inline-result","inline-result",656479555).cljs$core$IFn$_invoke$arity$1(watch),new cljs.core.Keyword(null,"update!","update!",779473898),str_result__$1);
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-doc","lt.objs.langs.clj/clj-doc",820727549),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor){var token = lt.objs.langs.clj.find_symbol_at_cursor.call(null,editor);var command = new cljs.core.Keyword(null,"editor.clj.doc","editor.clj.doc",4087602908);var info = cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"doc","doc",1014003882),new cljs.core.Keyword(null,"loc","loc",1014011570),new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"sym","sym",1014018617),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"print-length","print-length",3960797560),lt.object.raise_reduce.call(null,editor,new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null),new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.watches.watched_range.call(null,editor,null,null,lt.objs.langs.clj.clj_watch));if(cljs.core.truth_(token))
{return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.clj.try_connect], null)),command,info,new cljs.core.Keyword(null,"only","only",1017320222),editor);
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","print-clj-doc","lt.objs.langs.clj/print-clj-doc",3997775837),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.clj.doc","editor.clj.doc",4087602908),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,result){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882),new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(result)))
{if(cljs.core.not.call(null,result))
{return lt.objs.notifos.set_msg_BANG_.call(null,"No docs found.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),result);
}
} else
{return null;
}
}));

lt.objs.langs.clj.symbol_token_QMARK_ = (function symbol_token_QMARK_(s){return cljs.core.re_seq.call(null,/[\w\$_\-\.\*\+\\/\?\><!]/,s);
});

lt.objs.langs.clj.find_symbol_at_cursor = (function find_symbol_at_cursor(editor){var loc = lt.objs.editor.__GT_cursor.call(null,editor);var token_left = lt.objs.editor.__GT_token.call(null,editor,loc);var token_right = lt.objs.editor.__GT_token.call(null,editor,cljs.core.update_in.call(null,loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var or__6416__auto__ = (cljs.core.truth_(lt.objs.langs.clj.symbol_token_QMARK_.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token_right)))?cljs.core.assoc.call(null,token_right,new cljs.core.Keyword(null,"loc","loc",1014011570),loc):null);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{if(cljs.core.truth_(lt.objs.langs.clj.symbol_token_QMARK_.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token_left))))
{return cljs.core.assoc.call(null,token_left,new cljs.core.Keyword(null,"loc","loc",1014011570),loc);
} else
{return null;
}
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-doc","lt.objs.langs.clj/cljs-doc",849985742),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor){var token = lt.objs.langs.clj.find_symbol_at_cursor.call(null,editor);var command = new cljs.core.Keyword(null,"editor.cljs.doc","editor.cljs.doc",1871386511);var info = cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"doc","doc",1014003882),new cljs.core.Keyword(null,"loc","loc",1014011570),new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"sym","sym",1014018617),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"print-length","print-length",3960797560),lt.object.raise_reduce.call(null,editor,new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null),new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.watches.watched_range.call(null,editor,null,null,lt.objs.langs.clj.cljs_watch));if(cljs.core.truth_(token))
{return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.clj.try_connect], null)),command,info,new cljs.core.Keyword(null,"only","only",1017320222),editor);
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","print-cljs-doc","lt.objs.langs.clj/print-cljs-doc",1098363886),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.cljs.doc","editor.cljs.doc",1871386511),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,result){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882),new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(result)))
{if(cljs.core.not.call(null,result))
{return lt.objs.notifos.set_msg_BANG_.call(null,"No docs found.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),result);
}
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","clj-doc-search","lt.objs.langs.clj/clj-doc-search",643413122),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types+","types+",4450069060),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,cur){return cljs.core.conj.call(null,cur,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"clj",new cljs.core.Keyword(null,"trigger","trigger",4248979754),new cljs.core.Keyword(null,"docs.clj.search","docs.clj.search",4491771930),new cljs.core.Keyword(null,"file-types","file-types",1727875162),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Clojure",null], null), null)], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","cljs-doc-search","lt.objs.langs.clj/cljs-doc-search",4282074513),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types+","types+",4450069060),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,cur){return cljs.core.conj.call(null,cur,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"cljs",new cljs.core.Keyword(null,"trigger","trigger",4248979754),new cljs.core.Keyword(null,"docs.cljs.search","docs.cljs.search",744247267),new cljs.core.Keyword(null,"file-types","file-types",1727875162),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["ClojureScript",null], null), null)], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","trigger-update-hints","lt.objs.langs.clj/trigger-update-hints",2534091566),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.eval.cljs.result","editor.eval.cljs.result",1580065178),null,new cljs.core.Keyword(null,"editor.eval.clj.result","editor.eval.clj.result",1582056205),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100,new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(cljs.core.deref.call(null,default_client)))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.clj.hints.update","editor.clj.hints.update",974508971));
} else
{return null;
}
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","start-update-hints","lt.objs.langs.clj/start-update-hints",1083703484),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.clj.hints.update","editor.clj.hints.update",974508971),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,res){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.clj.hints","editor.clj.hints",4199319536),new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.clj.try_connect], null)),new cljs.core.Keyword(null,"editor.clj.hints","editor.clj.hints",4199319536),info,new cljs.core.Keyword(null,"only","only",1017320222),editor);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","finish-update-hints","lt.objs.langs.clj/finish-update-hints",4570099755),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.clj.hints.result","editor.clj.hints.result",878928639),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,res){return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.clj","hints","lt.objs.langs.clj/hints",1612734269),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res),0))], null));
}));

lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword(null,"editor.clj.hints.update","editor.clj.hints.update",974508971));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","use-local-hints","lt.objs.langs.clj/use-local-hints",1818991397),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,hints){var clj_hints = new cljs.core.Keyword("lt.objs.langs.clj","hints","lt.objs.langs.clj/hints",1612734269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))));var ns = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));var type = lt.objs.langs.clj.mime__GT_type.call(null,new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return cljs.core.concat.call(null,cljs.core.get_in.call(null,clj_hints,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,[cljs.core.str(ns)].join('')], null)),hints);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","use-global-hints","lt.objs.langs.clj/use-global-hints",1344271137),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,hints){var clj_hints = new cljs.core.Keyword("lt.objs.langs.clj","hints","lt.objs.langs.clj/hints",1612734269).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))));var type = lt.objs.langs.clj.mime__GT_type.call(null,new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return cljs.core.concat.call(null,cljs.core.get_in.call(null,clj_hints,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,""], null)),hints);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","jump-to-definition-at-cursor","lt.objs.langs.clj/jump-to-definition-at-cursor",4008293922),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.jump-to-definition-at-cursor!","editor.jump-to-definition-at-cursor!",4501637705),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor){var token = lt.objs.langs.clj.find_symbol_at_cursor.call(null,editor);if(cljs.core.truth_(token))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.jump-to-definition!","editor.jump-to-definition!",3261820364),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","start-jump-to-definition","lt.objs.langs.clj/start-jump-to-definition",1286212666),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.jump-to-definition!","editor.jump-to-definition!",3261820364),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,string){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var command = lt.util.cljs.__GT_dottedkw.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),lt.objs.langs.clj.mime__GT_type.call(null,new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(info)),new cljs.core.Keyword(null,"doc","doc",1014003882));var info__$1 = cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"jump","jump",1017178016),new cljs.core.Keyword(null,"sym","sym",1014018617),string);return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info__$1,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.clj.try_connect], null)),command,info__$1,new cljs.core.Keyword(null,"only","only",1017320222),editor);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","finish-jump-to-definition","lt.objs.langs.clj/finish-jump-to-definition",3277605993),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.clj.doc","editor.clj.doc",4087602908),null,new cljs.core.Keyword(null,"editor.cljs.doc","editor.cljs.doc",1871386511),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (editor,p__8238){var map__8239 = p__8238;var map__8239__$1 = ((cljs.core.seq_QMARK_.call(null,map__8239))?cljs.core.apply.call(null,cljs.core.hash_map,map__8239):map__8239);var res = map__8239__$1;var line = cljs.core.get.call(null,map__8239__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__8239__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"jump","jump",1017178016),new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(res)))
{if(cljs.core.truth_((function (){var and__6404__auto__ = res;if(cljs.core.truth_(and__6404__auto__))
{var and__6404__auto____$1 = file;if(cljs.core.truth_(and__6404__auto____$1))
{return line;
} else
{return and__6404__auto____$1;
}
} else
{return and__6404__auto__;
}
})()))
{return lt.object.raise.call(null,lt.objs.jump_stack.jump_stack,new cljs.core.Keyword(null,"jump-stack.push!","jump-stack.push!",4063822260),editor,file,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Definition not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","on-out","lt.objs.langs.clj/on-out",2705630921),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,data){var out = data.toString();lt.objs.console.core_log.write([cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),cljs.core.str("[stdout]: "),cljs.core.str(data)].join(''));
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
if((out.indexOf("nREPL server started") > -1))
{lt.objs.notifos.done_working.call(null);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
var client = lt.objs.clients.by_id.call(null,new cljs.core.Keyword(null,"cid","cid",1014002736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1017351155),cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/port ([\d]+)/,out)))], null));
return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"connect!","connect!",4735997929));
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Retrieving deps.. ",cljs.core.PersistentArrayMap.EMPTY);
}
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","on-error","lt.objs.langs.clj/on-error",1439956243),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,data){var out = data.toString();lt.objs.console.core_log.write([cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),cljs.core.str("[stderr]: "),cljs.core.str(data)].join(''));
if((new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).indexOf("nREPL server started") > -1))
{return null;
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","on-exit","lt.objs.langs.clj/on-exit",3352833213),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.objs.notifos.done_working.call(null);
lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Looks like there was an issue trying to connect\n                                                      to the project. Here's what we got:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
lt.objs.notifos.set_msg_BANG_.call(null,"Failed to connect",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
lt.objs.clients.rem_BANG_.call(null,lt.objs.clients.by_id.call(null,new cljs.core.Keyword(null,"cid","cid",1014002736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
}));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.clj","connecting-notifier","lt.objs.langs.clj/connecting-notifier",1366428052),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.clj","on-exit","lt.objs.langs.clj/on-exit",3352833213),new cljs.core.Keyword("lt.objs.langs.clj","on-error","lt.objs.langs.clj/on-error",1439956243),new cljs.core.Keyword("lt.objs.langs.clj","on-out","lt.objs.langs.clj/on-out",2705630921)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,notifier,cid){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"notifier","notifier",2599267608),notifier,new cljs.core.Keyword(null,"buffer","buffer",3930752946),"",new cljs.core.Keyword(null,"cid","cid",1014002736),cid], null));
return null;
}));

lt.objs.langs.clj.wrap_quotes = (function wrap_quotes(s){return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});

lt.objs.langs.clj.escape_spaces = (function escape_spaces(s){if(cljs.core._EQ_.call(null,lt.objs.files.separator,"\\"))
{return lt.objs.langs.clj.wrap_quotes.call(null,s);
} else
{return clojure.string.replace.call(null,s,/ /,"\\ ");
}
});

lt.objs.langs.clj.windows_escape = (function windows_escape(s){if(cljs.core.truth_((function (){var and__6404__auto__ = lt.util.cljs.str_contains_QMARK_.call(null,s," ");if(cljs.core.truth_(and__6404__auto__))
{return lt.objs.platform.win_QMARK_.call(null);
} else
{return and__6404__auto__;
}
})()))
{return lt.objs.langs.clj.wrap_quotes.call(null,s);
} else
{return s;
}
});

lt.objs.langs.clj.jar_command = (function jar_command(path,name,client){return [cljs.core.str((function (){var or__6416__auto__ = new cljs.core.Keyword(null,"java-exe","java-exe",4725979993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.clj.clj_lang));if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return "java";
}
})()),cljs.core.str(" -jar "),cljs.core.str(lt.objs.langs.clj.windows_escape.call(null,lt.objs.langs.clj.jar_path)),cljs.core.str(" "),cljs.core.str(name)].join('');
});

lt.objs.langs.clj.run_jar = (function run_jar(p__8240){var map__8242 = p__8240;var map__8242__$1 = ((cljs.core.seq_QMARK_.call(null,map__8242))?cljs.core.apply.call(null,cljs.core.hash_map,map__8242):map__8242);var client = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"name","name",1017277949));var project_path = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var path = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.clj","connecting-notifier","lt.objs.langs.clj/connecting-notifier",1366428052),lt.objs.langs.clj.n,lt.objs.clients.__GT_id.call(null,client));var args = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-Xmx1g","-jar",lt.objs.langs.clj.windows_escape.call(null,lt.objs.langs.clj.jar_path)], null);lt.objs.notifos.working.call(null,"Connecting..");
lt.objs.console.core_log.write([cljs.core.str("STARTING CLIENT: "),cljs.core.str(lt.objs.langs.clj.jar_command.call(null,project_path,name,client))].join(''));
lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"java-exe","java-exe",4725979993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.clj.clj_lang));if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return "java";
}
})(),new cljs.core.Keyword(null,"args","args",1016906831),(cljs.core.truth_(name)?cljs.core.conj.call(null,args,name):args),new cljs.core.Keyword(null,"cwd","cwd",1014003170),project_path,new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dir","dir",1014003711),project_path], null));
return lt.object.raise.call(null,client,new cljs.core.Keyword(null,"try-connect!","try-connect!",1801329595));
});

lt.objs.langs.clj.run_local_server = (function run_local_server(client){return lt.objs.langs.clj.check_all.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",1017337751),[cljs.core.str(lt.objs.langs.clj.home_path),cljs.core.str("/plugins/clojure/")].join(''),new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"name","name",1017277949),lt.objs.langs.clj.local_name], null));
});

lt.objs.langs.clj.check_java = (function check_java(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"java","java",1017159060),(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"java-exe","java-exe",4725979993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.langs.clj.clj_lang));if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{var or__6416__auto____$1 = (process.env["JAVA_HOME"]);if(cljs.core.truth_(or__6416__auto____$1))
{return or__6416__auto____$1;
} else
{return lt.objs.langs.clj.shell.which("java");
}
}
})());
});

lt.objs.langs.clj.check_ltjar = (function check_ltjar(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"ltjar","ltjar",1117205253),lt.objs.files.exists_QMARK_.call(null,lt.objs.langs.clj.jar_path));
});

lt.objs.langs.clj.find_project = (function find_project(obj){var p = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(obj);var roots = lt.objs.files.get_roots.call(null);var cur = p;var prev = "";while(true){
if(cljs.core.truth_((function (){var or__6416__auto__ = cljs.core.empty_QMARK_.call(null,cur);if(or__6416__auto__)
{return or__6416__auto__;
} else
{var or__6416__auto____$1 = roots.call(null,cur);if(cljs.core.truth_(or__6416__auto____$1))
{return or__6416__auto____$1;
} else
{return cljs.core._EQ_.call(null,cur,prev);
}
}
})()))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),null);
} else
{if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,cur,"project.clj"))))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),cur);
} else
{{
var G__8323 = lt.objs.files.parent.call(null,cur);
var G__8324 = cur;
cur = G__8323;
prev = G__8324;
continue;
}
}
}
break;
}
});

lt.objs.langs.clj.notify = (function notify(obj){var map__8244 = obj;var map__8244__$1 = ((cljs.core.seq_QMARK_.call(null,map__8244))?cljs.core.apply.call(null,cljs.core.hash_map,map__8244):map__8244);var ltjar = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"ltjar","ltjar",1117205253));var path = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"path","path",1017337751));var project_path = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var java = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"java","java",1017159060));if((cljs.core.not.call(null,java)) || (cljs.core.empty_QMARK_.call(null,java)))
{lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find java.",new cljs.core.Keyword(null,"body","body",1016933652),"Clojure evaluation requires the JDK to be installed.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Download the JDK",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.objs.platform.open.call(null,"http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html");
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
} else
{if(cljs.core.not.call(null,ltjar))
{lt.objs.deploy.deploy.call(null);
lt.objs.langs.clj.run_jar.call(null,obj);
} else
{if(cljs.core.not.call(null,project_path))
{lt.objs.console.error.call(null,[cljs.core.str("Couldn't find a project.clj in any parent of "),cljs.core.str(path)].join(''));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.objs.langs.clj.run_jar.call(null,obj);
} else
{}
}
}
}
return obj;
});

lt.objs.langs.clj.check_all = (function check_all(obj){lt.objs.langs.clj.notify.call(null,lt.objs.langs.clj.find_project.call(null,lt.objs.langs.clj.check_ltjar.call(null,lt.objs.langs.clj.check_java.call(null,obj))));
return new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(obj);
});

goog.provide('lt.objs.instarepl');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('crate.binding');
goog.require('lt.objs.langs.clj');
goog.require('lt.objs.sidebar.command');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('cljs.reader');
goog.require('crate.core');
goog.require('lt.objs.metrics');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.langs.clj');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.plugins.watches');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.metrics');
goog.require('crate.core');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","on-eval-sonar","lt.objs.instarepl/on-eval-sonar",2842128615),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (obj,auto_QMARK_,pos_QMARK_){var ed = new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));var v = lt.plugins.watches.watched_range.call(null,obj,null,null,lt.objs.langs.clj.clj_watch);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"local","local",1117049565),true,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,ed),new cljs.core.Keyword(null,"auto?","auto?",1107086306),false,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed,"start"))], null)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"local","local",1117049565),true,new cljs.core.Keyword(null,"code","code",1016963423),v,new cljs.core.Keyword(null,"auto?","auto?",1107086306),auto_QMARK_,new cljs.core.Keyword(null,"pos","pos",1014015430),(cljs.core.truth_(pos_QMARK_)?lt.objs.editor.__GT_cursor.call(null,ed):null)));var info__$2 = cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"print-length","print-length",3960797560),lt.object.raise_reduce.call(null,obj,new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null));lt.objs.notifos.working.call(null,"");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"origin","origin",4300251800),obj,new cljs.core.Keyword(null,"info","info",1017141280),info__$2,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.clj.try_connect,new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.clj.sonar","editor.eval.clj.sonar",3250205047)], null)),new cljs.core.Keyword(null,"editor.eval.clj.sonar","editor.eval.clj.sonar",3250205047),info__$2,new cljs.core.Keyword(null,"only","only",1017320222),new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","on-eval-one","lt.objs.instarepl/on-eval-one",2881904198),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"eval","eval",1017029646),false,new cljs.core.Keyword(null,"pos","pos",1014015430));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","eval-on-change","lt.objs.instarepl/eval-on-change",2889006780),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),300,new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){var parent = cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(parent)))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"eval","eval",1017029646),true);
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","sonar-result","lt.objs.instarepl/sonar-result",2349478978),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.sonar.result","editor.eval.clj.sonar.result",4675879832),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,res){lt.objs.notifos.done_working.call(null);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null));
lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),new cljs.core.Keyword(null,"ns","ns",1013907767),(function (){var or__6416__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return "user";
}
})())], null));
return lt.objs.instarepl.update_res.call(null,this$,res);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","no-op","lt.objs.instarepl/no-op",4324562108),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.sonar.noop","editor.eval.clj.sonar.noop",633248029),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.objs.notifos.done_working.call(null);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","clj-exception","lt.objs.instarepl/clj-exception",1694652294),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.exception","editor.eval.clj.exception",3664192387),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,ex){lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(ex)], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","destroy-on-close","lt.objs.instarepl/destroy-on-close",3472470380),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"close","close",1108660586));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","cleanup-on-destroy","lt.objs.instarepl/cleanup-on-destroy",4764934484),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){var seq__7930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));var chunk__7931 = null;var count__7932 = 0;var i__7933 = 0;while(true){
if((i__7933 < count__7932))
{var vec__7934 = cljs.core._nth.call(null,chunk__7931,i__7933);var _ = cljs.core.nth.call(null,vec__7934,0,null);var w = cljs.core.nth.call(null,vec__7934,1,null);lt.object.raise.call(null,w,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__7983 = seq__7930;
var G__7984 = chunk__7931;
var G__7985 = count__7932;
var G__7986 = (i__7933 + 1);
seq__7930 = G__7983;
chunk__7931 = G__7984;
count__7932 = G__7985;
i__7933 = G__7986;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7930);if(temp__4092__auto__)
{var seq__7930__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7930__$1))
{var c__7145__auto__ = cljs.core.chunk_first.call(null,seq__7930__$1);{
var G__7987 = cljs.core.chunk_rest.call(null,seq__7930__$1);
var G__7988 = c__7145__auto__;
var G__7989 = cljs.core.count.call(null,c__7145__auto__);
var G__7990 = 0;
seq__7930 = G__7987;
chunk__7931 = G__7988;
count__7932 = G__7989;
i__7933 = G__7990;
continue;
}
} else
{var vec__7935 = cljs.core.first.call(null,seq__7930__$1);var _ = cljs.core.nth.call(null,vec__7935,0,null);var w = cljs.core.nth.call(null,vec__7935,1,null);lt.object.raise.call(null,w,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__7991 = cljs.core.next.call(null,seq__7930__$1);
var G__7992 = null;
var G__7993 = 0;
var G__7994 = 0;
seq__7930 = G__7991;
chunk__7931 = G__7992;
count__7932 = G__7993;
i__7933 = G__7994;
continue;
}
}
} else
{return null;
}
}
break;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","dirty-parent","lt.objs.instarepl/dirty-parent",1326356324),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),null,new cljs.core.Keyword(null,"clean","clean",1108650427),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null));
} else
{return null;
}
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","close-parent","lt.objs.instarepl/close-parent",1716176394),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.object.destroy_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","set-parent-title","lt.objs.instarepl/set-parent-title",937428839),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-changed","path-changed",1619241086),null,new cljs.core.Keyword(null,"save-as","save-as",2886670836),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.clj","editor.clj",3751346322)], null));
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","on-show-refresh-eds","lt.objs.instarepl/on-show-refresh-eds",2271880455),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"show","show",1017433711));
lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lt.objs.editor.focus.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","reroute-watches","lt.objs.instarepl/reroute-watches",2566275905),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.watch","editor.eval.clj.watch",3253487875),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,r){return lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"editor.eval.clj.watch","editor.eval.clj.watch",3253487875),r);
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","on-focus-focus-ed","lt.objs.instarepl/on-focus-focus-ed",4749382066),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus!","focus!",4039653819),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.object.raise.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"focus!","focus!",4039653819));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","live-toggle","lt.objs.instarepl/live-toggle",2572575444),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"clear-inline-results","clear-inline-results",1542062004));
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),cljs.core.not.call(null,new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null));
return lt.objs.editor.focus.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}));

lt.objs.instarepl.default_content = ";; Anything you type in here will be executed\n;; immediately with the results shown on the\n;; right.\n";

lt.objs.instarepl.clean_ex = (function clean_ex(x){return x.replace((new RegExp("^.*user/eval[\\s\\S]*","gmi")),"");
});

lt.objs.instarepl.__GT_type_BAR_val = (function __GT_type_BAR_val(r,vs){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",1017410644).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"result","result",4374444943)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["result",cljs.core.last.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r))], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",1017410644).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"ex","ex",1013907493)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exception",lt.objs.instarepl.clean_ex.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r)))], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["use",cljs.core.get.call(null,vs,new cljs.core.Keyword(null,"root","root",1017410644).cljs$core$IFn$_invoke$arity$1(r))], null);
} else
{return null;
}
}
}
});

lt.objs.instarepl.inline = (function inline(this$,res,opts){return lt.object.create.call(null,new cljs.core.Keyword("lt.objs.eval","inline-result","lt.objs.eval/inline-result",1807255869),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ed","ed",1013907473),this$,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"inline","inline",4124874251))),new cljs.core.Keyword(null,"opts","opts",1017322386),opts,new cljs.core.Keyword(null,"trunc-length","trunc-length",2555961753),100,new cljs.core.Keyword(null,"result","result",4374444943),res,new cljs.core.Keyword(null,"loc","loc",1014011570),opts,new cljs.core.Keyword(null,"line","line",1017226086),lt.objs.editor.line_handle.call(null,this$,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(opts))], null));
});

lt.objs.instarepl.update_res = (function update_res(this$,results){var main = new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var vs = cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"vals","vals",1017516260).cljs$core$IFn$_invoke$arity$1(results));var repls = new cljs.core.Keyword(null,"uses","uses",1017503550).cljs$core$IFn$_invoke$arity$1(results);var out = new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(results);return lt.objs.editor.operation.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),(function (){var seq__7948_7995 = cljs.core.seq.call(null,new cljs.core.Keyword("lt.objs.instarepl","widgets","lt.objs.instarepl/widgets",2024163194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main)));var chunk__7949_7996 = null;var count__7950_7997 = 0;var i__7951_7998 = 0;while(true){
if((i__7951_7998 < count__7950_7997))
{var w_7999 = cljs.core._nth.call(null,chunk__7949_7996,i__7951_7998);lt.object.raise.call(null,w_7999,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__8000 = seq__7948_7995;
var G__8001 = chunk__7949_7996;
var G__8002 = count__7950_7997;
var G__8003 = (i__7951_7998 + 1);
seq__7948_7995 = G__8000;
chunk__7949_7996 = G__8001;
count__7950_7997 = G__8002;
i__7951_7998 = G__8003;
continue;
}
} else
{var temp__4092__auto___8004 = cljs.core.seq.call(null,seq__7948_7995);if(temp__4092__auto___8004)
{var seq__7948_8005__$1 = temp__4092__auto___8004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7948_8005__$1))
{var c__7145__auto___8006 = cljs.core.chunk_first.call(null,seq__7948_8005__$1);{
var G__8007 = cljs.core.chunk_rest.call(null,seq__7948_8005__$1);
var G__8008 = c__7145__auto___8006;
var G__8009 = cljs.core.count.call(null,c__7145__auto___8006);
var G__8010 = 0;
seq__7948_7995 = G__8007;
chunk__7949_7996 = G__8008;
count__7950_7997 = G__8009;
i__7951_7998 = G__8010;
continue;
}
} else
{var w_8011 = cljs.core.first.call(null,seq__7948_8005__$1);lt.object.raise.call(null,w_8011,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
{
var G__8012 = cljs.core.next.call(null,seq__7948_8005__$1);
var G__8013 = null;
var G__8014 = 0;
var G__8015 = 0;
seq__7948_7995 = G__8012;
chunk__7949_7996 = G__8013;
count__7950_7997 = G__8014;
i__7951_7998 = G__8015;
continue;
}
}
} else
{}
}
break;
}
return lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.instarepl","widgets","lt.objs.instarepl/widgets",2024163194),cljs.core.doall.call(null,(function (){var iter__7114__auto__ = (function iter__7952(s__7953){return (new cljs.core.LazySeq(null,(function (){var s__7953__$1 = s__7953;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7953__$1);if(temp__4092__auto__)
{var s__7953__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7953__$2))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,s__7953__$2);var size__7113__auto__ = cljs.core.count.call(null,c__7112__auto__);var b__7955 = cljs.core.chunk_buffer.call(null,size__7113__auto__);if((function (){var i__7954 = 0;while(true){
if((i__7954 < size__7113__auto__))
{var r = cljs.core._nth.call(null,c__7112__auto__,i__7954);var vec__7958 = lt.objs.instarepl.__GT_type_BAR_val.call(null,r,vs);var type = cljs.core.nth.call(null,vec__7958,0,null);var val = cljs.core.nth.call(null,vec__7958,1,null);cljs.core.chunk_append.call(null,b__7955,lt.objs.instarepl.inline.call(null,main,val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"line","line",1017226086),(cljs.core.first.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r)) - 1)], null)));
{
var G__8016 = (i__7954 + 1);
i__7954 = G__8016;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7955),iter__7952.call(null,cljs.core.chunk_rest.call(null,s__7953__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7955),null);
}
} else
{var r = cljs.core.first.call(null,s__7953__$2);var vec__7959 = lt.objs.instarepl.__GT_type_BAR_val.call(null,r,vs);var type = cljs.core.nth.call(null,vec__7959,0,null);var val = cljs.core.nth.call(null,vec__7959,1,null);return cljs.core.cons.call(null,lt.objs.instarepl.inline.call(null,main,val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"line","line",1017226086),(cljs.core.first.call(null,new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(r)) - 1)], null)),iter__7952.call(null,cljs.core.rest.call(null,s__7953__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7114__auto__.call(null,repls);
})())], null));
}));
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","start-content","lt.objs.instarepl/start-content",2306861657),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-content+","start-content+",2652166991),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"Instarepl: Set start content",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"content"], null)], null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,res,content){return content;
}));

lt.objs.instarepl.live_toggle = (function live_toggle(this$){var e__7752__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__7960_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__7960_SHARP_))?null:"off"))].join('');
}))], null),"live"], null));var seq__7967_8017 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
})], null)));var chunk__7968_8018 = null;var count__7969_8019 = 0;var i__7970_8020 = 0;while(true){
if((i__7970_8020 < count__7969_8019))
{var vec__7971_8021 = cljs.core._nth.call(null,chunk__7968_8018,i__7970_8020);var ev__7753__auto___8022 = cljs.core.nth.call(null,vec__7971_8021,0,null);var func__7754__auto___8023 = cljs.core.nth.call(null,vec__7971_8021,1,null);lt.util.dom.on.call(null,e__7752__auto__,ev__7753__auto___8022,func__7754__auto___8023);
{
var G__8024 = seq__7967_8017;
var G__8025 = chunk__7968_8018;
var G__8026 = count__7969_8019;
var G__8027 = (i__7970_8020 + 1);
seq__7967_8017 = G__8024;
chunk__7968_8018 = G__8025;
count__7969_8019 = G__8026;
i__7970_8020 = G__8027;
continue;
}
} else
{var temp__4092__auto___8028 = cljs.core.seq.call(null,seq__7967_8017);if(temp__4092__auto___8028)
{var seq__7967_8029__$1 = temp__4092__auto___8028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7967_8029__$1))
{var c__7145__auto___8030 = cljs.core.chunk_first.call(null,seq__7967_8029__$1);{
var G__8031 = cljs.core.chunk_rest.call(null,seq__7967_8029__$1);
var G__8032 = c__7145__auto___8030;
var G__8033 = cljs.core.count.call(null,c__7145__auto___8030);
var G__8034 = 0;
seq__7967_8017 = G__8031;
chunk__7968_8018 = G__8032;
count__7969_8019 = G__8033;
i__7970_8020 = G__8034;
continue;
}
} else
{var vec__7972_8035 = cljs.core.first.call(null,seq__7967_8029__$1);var ev__7753__auto___8036 = cljs.core.nth.call(null,vec__7972_8035,0,null);var func__7754__auto___8037 = cljs.core.nth.call(null,vec__7972_8035,1,null);lt.util.dom.on.call(null,e__7752__auto__,ev__7753__auto___8036,func__7754__auto___8037);
{
var G__8038 = cljs.core.next.call(null,seq__7967_8029__$1);
var G__8039 = null;
var G__8040 = 0;
var G__8041 = 0;
seq__7967_8017 = G__8038;
chunk__7968_8018 = G__8039;
count__7969_8019 = G__8040;
i__7970_8020 = G__8041;
continue;
}
}
} else
{}
}
break;
}
return e__7752__auto__;
});

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.instarepl","instarepl","lt.objs.instarepl/instarepl",4467487133),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instarepl","instarepl",1043123260),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Instarepl",new cljs.core.Keyword(null,"live","live",1017226334),true,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){var main = lt.object.add_tags.call(null,lt.object.remove_tags.call(null,lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mime","mime",1017255846),"text/x-clojure",new cljs.core.Keyword(null,"content","content",1965434859),"",new cljs.core.Keyword(null,"ns","ns",1013907767),"user"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.clj","editor.clj",3751346322)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.clj.instarepl","editor.clj.instarepl",2477999342),new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null));lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",1111596255),this$], null));
lt.objs.editor.set_val.call(null,main,(function (){var or__6416__auto__ = lt.object.raise_reduce.call(null,main,new cljs.core.Keyword(null,"start-content+","start-content+",2652166991));if(cljs.core.truth_(or__6416__auto__))
{return or__6416__auto__;
} else
{return lt.objs.instarepl.default_content;
}
})());
lt.objs.editor.clear_history.call(null,main);
lt.object.merge_BANG_.call(null,main,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),false,new cljs.core.Keyword(null,"editor.generation","editor.generation",4482163627),lt.objs.editor.__GT_generation.call(null,main)], null));
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",1017248043),main,new cljs.core.Keyword(null,"dirty","dirty",1109497668),false], null));
lt.objs.editor._PLUS_class.call(null,main,new cljs.core.Keyword(null,"main","main",1017248043));
lt.objs.editor.move_cursor.call(null,main,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),10000,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),lt.objs.instarepl.live_toggle.call(null,this$),lt.object.__GT_content.call(null,main),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.error","p.error",3043794556),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146))], null)], null);
}));

lt.objs.instarepl.add = (function add(){var instarepl = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.instarepl","instarepl","lt.objs.instarepl/instarepl",4467487133));lt.objs.tabs.add_BANG_.call(null,instarepl);
lt.objs.tabs.active_BANG_.call(null,instarepl);
return instarepl;
});

lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"instarepl-current","instarepl-current",1922368232),new cljs.core.Keyword(null,"desc","desc",1016984067),"Instarepl: Make current editor an instarepl",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var cur = lt.objs.editor.pool.last_active.call(null);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cur));if(cljs.core.truth_(cur))
{if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(info),"text/x-clojure")))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Instarepl only works for Clojure",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{var content = lt.objs.editor.__GT_val.call(null,cur);var dirty = new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cur));var inst = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.instarepl","instarepl","lt.objs.instarepl/instarepl",4467487133));var ed = new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,inst));lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"widgets","widgets",2354242081),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dirty","dirty",1109497668),dirty], null));
lt.object.merge_BANG_.call(null,inst,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"dirty","dirty",1109497668),dirty], null));
lt.object.remove_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null));
lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null));
lt.objs.editor.set_val.call(null,ed,content);
lt.object.raise.call(null,cur,new cljs.core.Keyword(null,"close.force","close.force",4409585383));
lt.objs.tabs.add_BANG_.call(null,inst);
return lt.objs.tabs.active_BANG_.call(null,inst);
}
} else
{return null;
}
})], null));

lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"instarepl","instarepl",1043123260),new cljs.core.Keyword(null,"desc","desc",1016984067),"Instarepl: Open a clojure instarepl",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.metrics.capture_BANG_.call(null,new cljs.core.Keyword(null,"editor.clj.instarepl","editor.clj.instarepl",2477999342));
return lt.objs.instarepl.add.call(null);
})], null));

lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"instarepl.toggle-live","instarepl.toggle-live",2218373139),new cljs.core.Keyword(null,"desc","desc",1016984067),"Instarepl: Toggle live mode",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
{return lt.object.raise.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
} else
{return null;
}
} else
{return null;
}
})], null));


//# sourceMappingURL=