(function(t){function e(e){for(var o,a,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={index:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0bea":function(t,e,n){"use strict";var o=n("926d"),i=n.n(o);i.a},"179c":function(t,e,n){},"289e":function(t,e,n){"use strict";var o=n("d90b"),i=n.n(o);i.a},"2a85":function(t,e,n){},"52af":function(t,e,n){"use strict";var o=n("e66d"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("body",[n("Todo")],1),n("Copyright")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"todoapp"},[n("header",{directives:[{name:"show",rawName:"v-show",value:t.canAddTodo,expression:"canAddTodo"}],staticClass:"header"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:t.placeholder},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.newTodo=e.target.value)}}})]),n("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length&&"preview"!==t.type,expression:"todos.length && type !== 'preview'"}],staticClass:"main"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.allDone,expression:"allDone"}],staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:Array.isArray(t.allDone)?t._i(t.allDone,null)>-1:t.allDone},on:{change:function(e){var n=t.allDone,o=e.target,i=!!o.checked;if(Array.isArray(n)){var s=null,a=t._i(n,s);o.checked?a<0&&(t.allDone=n.concat([s])):a>-1&&(t.allDone=n.slice(0,a).concat(n.slice(a+1)))}else t.allDone=i}}}),n("label",{directives:[{name:"show",rawName:"v-show",value:"today"===t.type,expression:"type === 'today'"}],attrs:{for:"toggle-all"}}),0===t.filteredTodos.length&&"today"===t.type?n("div",{staticClass:"todo-list--empty"},[t._v("空空如也")]):n("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,(function(e){return n("li",{key:e.id,staticClass:"todo",class:{completed:e.completed,editing:e==t.editedTodo}},[n("div",{staticClass:"view"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox",disabled:"today"!==t.type},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(n){var o=e.completed,i=n.target,s=!!i.checked;if(Array.isArray(o)){var a=null,r=t._i(o,a);i.checked?r<0&&t.$set(e,"completed",o.concat([a])):r>-1&&t.$set(e,"completed",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(e,"completed",s)}}}),n("label",{domProps:{innerHTML:t._s(e.title)},on:{click:function(n){return t.toggleAdditions(e)},dblclick:function(n){return t.editTodo(e)}}}),n("button",{staticClass:"destroy",on:{click:function(n){return t.removeTodo(e)}}})]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"todo.title"},{name:"todo-focus",rawName:"v-todo-focus",value:e==t.editedTodo,expression:"todo == editedTodo"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:e.title},on:{blur:function(n){return t.doneEdit(e)},keyup:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.doneEdit(e)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.cancelEdit(e)}],input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}}),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.showAddition,expression:"todo.showAddition"}],staticClass:"additions"},[n("li",{staticClass:"additions__item"},[n("p",[t._v("类型")]),t._v("： "),n("e-label",{attrs:{content:e.type,lkey:"type","select-key":"types",context:e},on:{done:t.onDone}})],1),n("li",{staticClass:"additions__item"},[n("p",[t._v("进度")]),t._v("： "),n("e-label",{attrs:{content:""+e.progress,lkey:"progress",context:e},on:{done:t.onDone}})],1),n("li",{staticClass:"additions__item"},[n("p",[t._v("工时")]),t._v("： "),n("e-label",{attrs:{content:""+e.duration,lkey:"duration",context:e},on:{done:t.onDone}})],1),n("li",{staticClass:"additions__item additions__item-note"},[n("p",[t._v("备注")]),t._v("： "),n("e-label",{attrs:{content:e.note,lkey:"note",context:e},on:{done:t.onDone}})],1)])])})),0)]),n("Preview",{ref:"preview",attrs:{show:"preview"===t.type,list:t.todos}}),n("Setting",{attrs:{show:"setting"===t.type}}),n("Actions",{attrs:{todos:t.todos,remaining:t.remaining,type:t.type},on:{change:t.onChangeType}})],1)},r=[],c=(n("4de4"),n("c740"),n("4160"),n("c975"),n("d81d"),n("13d5"),n("a434"),n("498a"),n("159b"),{fetch:function(t){var e=JSON.parse(localStorage.getItem(t)||"[]");return e.forEach((function(t,e){t.id=e})),this.uid=e.length,e},save:function(t,e){localStorage.setItem(t,JSON.stringify(e))},get:function(t){return JSON.parse(localStorage.getItem(t)||"{}")}}),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",[t._v(t._s(t.remaining))]),t._v(" "+t._s(t._f("pluralize")(t.remaining))+" left ")]),o("ul",{staticClass:"filters"},[o("li",{class:["filters-item",{selected:"yestoday"==t.type}],on:{click:function(e){return t.onChange("yestoday")}}},[t._v("Yestoday")]),o("li",{class:["filters-item",{selected:"today"==t.type}],on:{click:function(e){return t.onChange("today")}}},[t._v("Today")]),o("li",{class:["filters-item",{selected:"tomorrow"==t.type}],on:{click:function(e){return t.onChange("tomorrow")}}},[t._v("Tomorrow")])]),o("div",{staticClass:"more"},[o("img",{staticClass:"img",attrs:{src:n("f51c"),alt:""}}),o("ul",{staticClass:"more__action"},[o("li",{staticClass:"more__action-item",on:{click:function(e){return t.onChange("preview")}}},[t._v("Preview")]),o("li",{staticClass:"more__action-item",on:{click:function(e){return t.onChange("setting")}}},[t._v("Setting")])])])])},d=[],u=(n("a9e3"),{props:{type:String,todos:Array,remaining:Number},filters:{pluralize:function(t){return 1===t?"item":"items"}},methods:{removeCompleted:function(){this.todos=filters.active(this.todos)},onChange:function(t){this.$emit("change",t)}}}),p=u,f=(n("a0a8"),n("2877")),m=Object(f["a"])(p,l,d,!1,null,null,null),h=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"elabel"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.editing,expression:"!editing"}],staticClass:"elabel-item elabel-label",on:{dblclick:t.edit}},[t._v(t._s(t.current))]),n("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"model",rawName:"v-model",value:t.current,expression:"current"},{name:"todo-focus",rawName:"v-todo-focus",value:t.editing,expression:"editing"}],staticClass:"elabel-item elabel-edit",attrs:{type:"text"},domProps:{value:t.current},on:{blur:t.doneEdit,keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit(e)}],input:function(e){e.target.composing||(t.current=e.target.value)}}}),n("ol",{directives:[{name:"show",rawName:"v-show",value:t.showSelections,expression:"showSelections"}],staticClass:"selections"},t._l(t.selections,(function(e,o){return n("li",{key:o,class:["selections-item",{active:t.current===e}],on:{click:function(n){return t.onSelect(e)}}},[t._v(t._s(e))])})),0)])},y=[],g={props:{lkey:[String,Number],content:String,context:[Object,Array],selectKey:String},watch:{content:function(t){this.current=t},editing:function(t){var e=this;if(t){var n=c.get("config");this.selections=n[this.selectKey]}var o=setTimeout((function(){e.showSelections=t,clearTimeout(o)}),50)}},data:function(){return{current:this.content,cached:"",editing:!1,selections:[],showSelections:!1}},methods:{edit:function(){var t=this.current;this.cached=t,"-"!==t&&"0"!==t||(this.current=""),this.editing=!0},doneEdit:function(){this.editing=!1;var t=this.context,e=this.lkey,n=this.current.trim()||"-";this.current=n,this.$emit("done",{context:t,value:n,key:e})},cancelEdit:function(){this.editing=!1;var t=this.context,e=this.lkey;this.$emit("done",{context:t,key:e,value:this.cached})},onSelect:function(t){this.showSelections=!1;var e=this.context,n=this.lkey;this.current=t,this.$emit("done",{context:e,value:t,key:n})}},directives:{"todo-focus":function(t,e){e.value&&t.focus()}}},w=g,_=(n("289e"),Object(f["a"])(w,v,y,!1,null,null,null)),b=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"preview"},[t.isEmpty?n("div",[t._v("Nothing to preview")]):n("div",{domProps:{innerHTML:t._s(t.previewMd)}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addition,expression:"addition"}],staticClass:"addition",attrs:{name:"addition",id:"addition",rows:"8"},domProps:{value:t.addition},on:{input:function(e){e.target.composing||(t.addition=e.target.value)}}}),n("div",{staticClass:"actions"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.copyStr,expression:"copyStr"}],attrs:{id:"daiport"},domProps:{value:t.copyStr},on:{input:function(e){e.target.composing||(t.copyStr=e.target.value)}}}),n("button",{staticClass:"actions-btn",on:{click:function(e){return t.onCopy("simple")}}},[t._v("简报")]),n("button",{staticClass:"actions-btn",on:{click:function(e){return t.onCopy("daiport")}}},[t._v("日报")])])])},C=[],x=(n("99af"),n("ac1f"),n("5319"),n("5a0c")),T=n.n(x),E=n("d4cd")({html:!0,linkify:!0,typographer:!0}),S=T()(Date.now()).format("YYYY-MM-DD"),D=T()(Date.now()+864e5).format("YYYY-MM-DD"),j={today:{table:"**一、今日工作内容**\n\n| 类型 | 内容 | 完成情况 | 花费工时 | 备注 |\n|:---|:---|:---|:---|:---|\n",simple:"今日完成\n"},tomorrow:{table:"**二、明日工作计划**\n\n| 类型 | 内容 | 完成情况 |  预计花费工时 | 备注 |\n|:---|:---|:---|:---|:---|\n",simple:"\n明日计划\n"}},O={props:{show:Boolean,list:{type:Array,value:[]}},computed:{isEmpty:function(){return!this.list.length}},watch:{show:function(t){if(t){this.adaptData();var e=c.get("config"),n=e.autojump,o=e.url;this.autojump=n,this.url=o}}},data:function(){return{previewStr:"",previewMd:"",defaultAddition:"三、问题与建议\n无\n\n四、学习与总结\n无\n\n",addition:"",copyStr:"",autojump:0,url:""}},methods:{adaptData:function(){var t=j.today.table,e=j.tomorrow.table;this.list.map((function(n){var o=n.type,i=n.title,s=n.progress,a=n.duration,r=n.note,c=n.date,l="| ".concat(o," | ").concat(i," | ").concat(s," % | ").concat(a," h | ").concat(r," |\n");c===S?t+=l:c===D&&(e+=l)})),this.previewStr="".concat(t).concat(e,"\n"),this.previewMd=E.render(this.previewStr),this.addition=this.addition||this.defaultAddition},getSimpleStr:function(){var t=j.today.simple,e=j.tomorrow.simple;return this.list.map((function(n){var o=n.date,i=n.title,s="- ".concat(i.replace(/<br>/g," "),"\n");o===S?t+=s:o===D&&(e+=s)})),t+e},onCopy:function(t){var e=this;"daiport"===t?this.copyStr=this.previewStr+this.addition:"simple"===t&&(this.copyStr=this.getSimpleStr()),this.$nextTick((function(){var t=document.querySelector("#daiport");t.select(),document.execCommand("copy")&&(document.execCommand("copy"),e.autojump&&window.open(e.url,"_blank"),console.log("copied..."))}))}}},N=O,A=(n("d526"),Object(f["a"])(N,k,C,!1,null,null,null)),$=A.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"setting"},[n("li",{staticClass:"setting__item"},[n("div",{staticClass:"setting__item-title"},[t._v("日报地址：")]),n("div",{staticClass:"setting__item-content"},[n("ELabel",{attrs:{content:t.config.url,lkey:"url",context:t.config},on:{done:t.onDone}})],1)]),n("li",{staticClass:"setting__item"},[n("div",{staticClass:"setting__item-title"},[t._v("自动跳转：")]),n("div",{staticClass:"setting__item-content setting__item-content__autojump"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.autojump,expression:"config.autojump"}],attrs:{type:"radio",name:"autojump-yes",id:"yes"},domProps:{value:1,checked:t._q(t.config.autojump,1)},on:{change:function(e){return t.$set(t.config,"autojump",1)}}}),t._v("是")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.config.autojump,expression:"config.autojump"}],attrs:{type:"radio",name:"autojump-yes",id:"no"},domProps:{value:0,checked:t._q(t.config.autojump,0)},on:{change:function(e){return t.$set(t.config,"autojump",0)}}}),t._v("否")])])]),n("li",{staticClass:"setting__item"},[n("div",{staticClass:"setting__item-title"},[t._v("类型：")]),n("ul",{staticClass:"setting__item-content setting__item-content__types"},t._l(t.config.types,(function(e,o){return n("li",{key:o,staticClass:"setting__item-content-type"},[n("ELabel",{attrs:{content:e,lkey:o,context:t.config.types},on:{done:t.onDone}}),n("div",{class:["setting__item-content-options",{del:o>0}],on:{click:function(e){return t.onEdit(o)}}})],1)})),0)])])},Y=[],M="config",J={components:{ELabel:b},props:{show:Boolean},watch:{config:{handler:function(t){c.save(M,t)},deep:!0}},data:function(){return{config:{url:"-",types:["会议"],autojump:1}}},mounted:function(){var t=c.get(M);this.$set(this,"config",t)},methods:{onDone:function(t){var e=t.context,n=t.key,o=t.value;e[n]=o,this.updateConfig(this.config)},onEdit:function(t){var e=this.config.types;if(0===t){var n=e.length;if("-"===e[n-1])return;e.push("-")}else e.splice(t,1);this.updateConfig(this.config)},updateConfig:function(t){c.save(M,t)}}},K=J,L=(n("fac4"),Object(f["a"])(K,P,Y,!1,null,null,null)),B=L.exports,I=T()(Date.now()-864e5).format("YYYY-MM-DD"),q=T()(Date.now()).format("YYYY-MM-DD"),z=T()(Date.now()+864e5).format("YYYY-MM-DD"),F={yestoday:I,today:q,tomorrow:z},H={yestoday:function(t){return t.filter((function(t){return t.date===I}))},today:function(t){return t.filter((function(t){return t.date===q}))},tomorrow:function(t){return t.filter((function(t){return t.date===z}))},preview:function(t){return t.filter((function(t){return t.date===q||t.date===z}))}},G="daiport",W={components:{Actions:h,ELabel:b,Preview:$,Setting:B},data:function(){return{todos:[],newTodo:"",editedTodo:null,type:"today"}},watch:{todos:{handler:function(t){t.map((function(t){return t.progress=t.completed?100:t.progress})),c.save(G,t)},deep:!0}},computed:{filteredTodos:function(){var t=this.type;if("setting"===t)return[];var e=H[this.type](this.todos);return"all"!==t?e:e.sort((function(t,e){return t.date>=e.date?1:-1}))},remaining:function(){return H.today(this.todos).filter((function(t){return!t.completed})).length},allDone:{get:function(){return 0===this.remaining},set:function(t){this.filteredTodos.forEach((function(e){e.completed=t,e.progress=100}))}},placeholder:function(){return"What needs to be done ".concat(this.type,"?")},isEmpty:function(){return!this.todos.length},canAddTodo:function(){return"today"===this.type||"tomorrow"===this.type}},mounted:function(){this.init(),this.initKeyEvent()},methods:{init:function(){this.todos=c.fetch(G).reduce((function(t,e){if(e.date===I){if(t.push(e),1*e.progress<100&&!e.copied){var n=JSON.parse(JSON.stringify(e));e.copied=!0,n.date=q,n.showAddition=!0,t.push(n)}}else e.date!==q&&e.date!==z||t.push(e);return t}),[])},initKeyEvent:function(){var t=this;window.addEventListener("keyup",(function(e){var n=e.key;if(!t.disableKeyEvent)switch(n){case"y":t.type="yestoday";break;case"c":t.type="today";break;case"t":t.type="tomorrow";break;case"p":t.type="preview";break;case"s":t.type="setting";break;case"d":var o=t.type;t.type="preview",t.$nextTick((function(){var e=t.$refs.preview;e&&(e.onCopy("daiport"),t.$nextTick((function(){t.type=o})))}));break}}))},addTodo:function(){var t=this.newTodo&&this.newTodo.trim();t&&(this.todos.push({id:c.uid++,title:t,completed:!1,date:F[this.type],showAddition:!1,type:"-",note:"-",progress:0,duration:0}),this.newTodo="")},removeTodo:function(t){this.todos.splice(this.todos.indexOf(t),1)},editTodo:function(t){this.timer&&(clearTimeout(this.timer),this.timer=null),this.beforeEditCache=t.title,this.editedTodo=t},doneEdit:function(t){this.editedTodo&&(this.editedTodo=null,t.title=t.title.trim(),t.title||this.removeTodo(t))},cancelEdit:function(t){this.editedTodo=null,t.title=this.beforeEditCache},onChangeType:function(t){this.type=t},toggleAdditions:function(t){var e=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((function(){e.todos.map((function(e){return e.id!==t.id&&(e.showAddition=!1)})),t.showAddition=!t.showAddition}),200)},onDone:function(t){var e=t.context,n=t.key,o=t.value;"today"===this.type&&"progress"===n&&(e.completed=1*o>=100),e[n]=o;var i=this.todos.findIndex((function(t){return t.id===e.id}));this.todos[i]=e},onFocus:function(){this.disableKeyEvent=!0},onBlur:function(){this.disableKeyEvent=!1}},directives:{"todo-focus":function(t,e){e.value&&t.focus()}}},Q=W,R=(n("52af"),Object(f["a"])(Q,a,r,!1,null,null,null)),U=R.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright"},[n("a",{attrs:{href:"https://sanbaofengs.com",target:"_blank"}},[t._v("@Sanbaofeng's")]),t._v(" | "),n("a",{attrs:{href:"https://github.com",target:"_blank"}},[t._v("Github")])])}],Z={},tt=Z,et=(n("0bea"),Object(f["a"])(tt,V,X,!1,null,null,null)),nt=et.exports,ot={name:"App",components:{Todo:U,Copyright:nt}},it=ot,st=(n("5c0b"),Object(f["a"])(it,i,s,!1,null,null,null)),at=st.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(at)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},"926d":function(t,e,n){},"9c0c":function(t,e,n){},a0a8:function(t,e,n){"use strict";var o=n("2a85"),i=n.n(o);i.a},d526:function(t,e,n){"use strict";var o=n("179c"),i=n.n(o);i.a},d90b:function(t,e,n){},e66d:function(t,e,n){},f0e6:function(t,e,n){},f51c:function(t,e,n){t.exports=n.p+"img/more.6c86fed6.svg"},fac4:function(t,e,n){"use strict";var o=n("f0e6"),i=n.n(o);i.a}});
//# sourceMappingURL=index.fc92008c.js.map