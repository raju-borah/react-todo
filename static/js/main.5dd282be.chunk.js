(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{78:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(57),s=n.n(r),i=n(21),o=n(52),j=n(12),u=n(105),d=n(116),b=n(1);function l(t){return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(u.a,{}),Object(b.jsx)(d.a,{maxWidth:"sm",children:t.children})]})}var O=n(117),x=n(111),p=n(118),f=n(59),h=n.n(f),m=n(44),g=n.n(m);function v(t){var e=Object(a.useState)(""),n=Object(j.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){r(t.value)}),[t.value]),Object(b.jsxs)(O.a,{component:"form",sx:{p:"4px 4px",display:"flex",alignItems:"center",boxShadow:"0px 0px 1px 1px green"},onSubmit:function(e){e.preventDefault(),t.onAddTask(c),r("")},children:[Object(b.jsx)(x.a,{sx:{ml:1,flex:1},placeholder:"Add Task",inputProps:{"aria-label":"Task"},value:c,onChange:function(t){return r(t.target.value)}}),Object(b.jsxs)(p.a,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:[t.isEditingBtn&&Object(b.jsx)(g.a,{}),!t.isEditingBtn&&Object(b.jsx)(h.a,{})]})]})}var k=n(119),S=n(112),T=n(113),y=n(120),E=n(115),w=n(60),I=n.n(w),B=n(61),D=n.n(B),J=n(121);function A(t){var e=t.tasks,n=t.onRemoveTask,a=t.onEditedTask;return Object(b.jsxs)(k.a,{sx:{width:"100%",bgcolor:"background.paper",marginTop:"10px"},children:[e.map((function(t){return Object(b.jsxs)(S.a,{children:[Object(b.jsx)(y.a,{children:Object(b.jsx)(E.a,{children:Object(b.jsx)(I.a,{})})}),Object(b.jsx)(T.a,{primary:t.task}),Object(b.jsx)(J.a,{variant:"text",onClick:function(){return a(t.id)},children:Object(b.jsx)(g.a,{})}),Object(b.jsx)(J.a,{variant:"text",onClick:function(){return n(t.id)},children:Object(b.jsx)(D.a,{})})]},t.id)})),0===e.length&&Object(b.jsx)(S.a,{children:"No ToDo "},"no-todo")]})}var C=function(){var t=Object(a.useState)(function(){var t=localStorage.getItem("mytodolist");return t?JSON.parse(t):[]}()),e=Object(j.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),u=s[0],d=s[1],O=Object(a.useState)(!1),x=Object(j.a)(O,2),p=x[0],f=x[1],h=Object(a.useState)(""),m=Object(j.a)(h,2),g=m[0],k=m[1];return Object(a.useEffect)((function(){localStorage.setItem("mytodolist",JSON.stringify(n))}),[n]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(l,{children:[Object(b.jsx)("h1",{style:{color:"white"},children:"TODO LIST"}),Object(b.jsx)(v,{onAddTask:function(t){p?c(n.map((function(e){return e.id===g?Object(o.a)(Object(o.a)({},e),{},{task:t}):e}))):(console.log(Date.now()),c((function(e){return[].concat(Object(i.a)(e),[{task:t,id:Math.random().toString()}])}))),d(""),f(!1),k("")},value:u,isEditingBtn:p}),Object(b.jsx)(A,{tasks:n,onRemoveTask:function(t){var e=n.filter((function(e){return e.id!==t}));c(e)},onEditedTask:function(t){var e=n.find((function(e){return e.id===t}));d(e.task),f(!0),k(e.id)}})]})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.5dd282be.chunk.js.map