(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,i){e.exports={"is-done":"TodoList_is-done__3cEJe"}},78:function(e,t,i){},79:function(e,t,i){},87:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i(10),a=i.n(c),o=(i(78),i(45)),r=i(14),l=i(29),s=i(19),d=(i(79),i(54)),j=i.n(d),u=i(125),b=i(118),O=i(60),h=i.n(O),f=i(5);function x(e){var t=Object(n.useState)(""),i=Object(s.a)(t,2),c=i[0],a=i[1],o=Object(n.useState)(null),r=Object(s.a)(o,2),l=r[0],d=r[1],j=function(){c.trim()?(d(null),e.addItem(c.trim()),a("")):d({errorText:"\u043d\u0430\u0434\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438!",isTrue:!0})};return Object(f.jsxs)("div",{children:[Object(f.jsx)(u.a,{id:"outlined-basic",title:"Type text...",label:"Make It",variant:"outlined",size:"small",value:c,onChange:function(e){console.log(e.currentTarget.value),a(e.currentTarget.value)},onKeyPress:function(e){d(null),"Enter"===e.key&&j()},error:null===l||void 0===l?void 0:l.isTrue,helperText:(null===l||void 0===l?void 0:l.isTrue)&&"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"}),Object(f.jsx)(b.a,{onClick:j,color:"primary",style:{height:"20px",margin:"10px"},children:Object(f.jsx)(h.a,{})})]})}var v=i(64);function p(e){var t=e.title,i=Object(v.a)(e,["title"]),c=Object(n.useState)(!1),a=Object(s.a)(c,2),o=a[0],r=a[1],l=Object(n.useState)(""),d=Object(s.a)(l,2),j=d[0],b=d[1];return o?Object(f.jsx)("span",{children:Object(f.jsx)(u.a,{id:"outlined-basic",label:"\u0417\u0430\u0434\u0430\u0447\u0430",size:"small",value:j,onBlur:function(){r(!1),i.changeTitle(j)},autoFocus:!0,onChange:function(e){b(e.currentTarget.value)}})}):Object(f.jsx)("span",{onDoubleClick:function(){r(!0),b(t)},children:t})}var g=i(127),m=i(119),T=i(61),D=i.n(T),k=i(62),y=i.n(k);function L(e){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h3",{children:[Object(f.jsx)(p,{title:e.title,changeTitle:function(t){e.changeTodoListTitle(e.todoListID,t)}}),Object(f.jsx)(b.a,{"aria-label":"delete",onClick:function(){return e.deleteTodoList(e.todoListID)},children:Object(f.jsx)(D.a,{color:"secondary"})})]}),Object(f.jsx)(x,{addItem:function(t){e.addTask(t,e.todoListID)}}),Object(f.jsx)("ul",{style:{listStyle:"none",padding:"5px"},children:e.tasks.map((function(t){return Object(f.jsxs)("li",{className:t.isDone?j.a["is-done"]:"",children:[Object(f.jsx)(g.a,{size:"small",color:"primary",onChange:function(i){e.changeTaskStatus(t.id,i.currentTarget.checked,e.todoListID)},checked:t.isDone}),Object(f.jsx)(p,{title:t.title,changeTitle:function(i){e.changeTitle(t.id,e.todoListID,i)}}),Object(f.jsx)(b.a,{"aria-label":"delete",onClick:function(){return e.removeTask(t.id,e.todoListID)},children:Object(f.jsx)(y.a,{color:"secondary"})})]},t.id)}))}),Object(f.jsxs)("div",{children:[Object(f.jsx)(m.a,{color:"default",variant:"all"===e.filter?"contained":"text",onClick:function(){return e.changeFilter("all",e.todoListID)},children:"All"}),Object(f.jsx)(m.a,{color:"primary",variant:"active"===e.filter?"contained":"text",onClick:function(){return e.changeFilter("active",e.todoListID)},children:"Active"}),Object(f.jsx)(m.a,{color:"secondary",variant:"completed"===e.filter?"contained":"text",onClick:function(){return e.changeFilter("completed",e.todoListID)},children:"Completed"})]})]})}var I=i(126),S=i(120),C=i(89),w=i(121),A=i(122),F=i(123),J=i(124),B=i(63),W=i.n(B);var z=function(){var e,t=Object(I.a)(),i=Object(I.a)(),c=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:i,title:"What To Buy",filter:"all"}]),a=Object(s.a)(c,2),d=a[0],j=a[1],u=Object(n.useState)((e={},Object(l.a)(e,t,[{id:Object(I.a)(),title:"HTML&CSS",isDone:!0},{id:Object(I.a)(),title:"JS",isDone:!0},{id:Object(I.a)(),title:"ReactJS",isDone:!1},{id:Object(I.a)(),title:"Rest API",isDone:!1},{id:Object(I.a)(),title:"GraphQL",isDone:!1}]),Object(l.a)(e,i,[{id:Object(I.a)(),title:"\u041a\u0443\u043f\u0438\u0442\u044c \u043a\u043e\u0448\u043a\u0443",isDone:!0},{id:Object(I.a)(),title:"\u0411\u0440\u043e\u0441\u0438\u0442\u044c \u043a\u0443\u0440\u0438\u0442\u044c",isDone:!0}]),e)),O=Object(s.a)(u,2),h=O[0],v=O[1];function p(e,t){h[t]=h[t].filter((function(t){return t.id!==e})),v(Object(r.a)({},h))}function g(e,t){var i={id:Object(I.a)(),title:e,isDone:!1},n=Object(r.a)({},h);n[t]=[i].concat(Object(o.a)(h[t])),v(n)}function T(e,t,i){var n=Object(r.a)({},h);n[i]=n[i].map((function(i){return i.id===e?Object(r.a)(Object(r.a)({},i),{},{isDone:t}):i})),v(n)}function D(e,t,i){var n=Object(r.a)({},h);n[t]=n[t].map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{title:i}):t})),v(n)}var k=function(e){var t=d.filter((function(t){return t.id!==e}));j(t);var i=Object(r.a)({},h);delete i[e],v(i)};function y(e,t){var i=d.find((function(t){return t.id===e}));i&&(i.title=t,console.log(d),j(Object(o.a)(d)))}function B(e,t){j(d.map((function(i){return i.id===t?Object(r.a)(Object(r.a)({},i),{},{filter:e}):i})))}var z=d.map((function(e,t){var i=function(e){switch(e.filter){case"active":return h[e.id].filter((function(e){return!e.isDone}));case"completed":return h[e.id].filter((function(e){return e.isDone}));default:return h[e.id]}}(e);return Object(f.jsx)(S.a,{item:!0,children:Object(f.jsx)(C.a,{elevation:6,style:{padding:"15px",textAlign:"center"},children:Object(f.jsx)(L,{todoListID:e.id,title:e.title,filter:e.filter,tasks:i,removeTask:p,deleteTodoList:k,changeFilter:B,addTask:g,changeTaskStatus:T,changeTitle:D,changeTodoListTitle:y},t)})})}));return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(w.a,{position:"static",children:Object(f.jsxs)(A.a,{children:[Object(f.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(f.jsx)(W.a,{})}),Object(f.jsx)(F.a,{variant:"h6",children:"TodoList"}),Object(f.jsx)(m.a,{color:"inherit",children:"Login"})]})}),Object(f.jsxs)(J.a,{fixed:!0,children:[Object(f.jsx)(S.a,{container:!0,style:{padding:"20px"},spacing:1,children:Object(f.jsx)(x,{addItem:function(e){var t={id:Object(I.a)(),title:e,filter:"all"};j([t].concat(Object(o.a)(d))),v(Object(r.a)(Object(r.a)({},h),{},Object(l.a)({},t.id,[])))}})}),Object(f.jsx)(S.a,{container:!0,spacing:3,children:z})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(f.jsx)(z,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[87,1,2]]]);
//# sourceMappingURL=main.cce146c2.chunk.js.map