(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(14),i=n.n(c),a=n(7),s=n(19),l=n(24),u=n(4),b=n(3),d=n(25),j=Object(d.recoilPersist)().persistAtom,f=Object(a.atom)({key:"categories",default:["TO_DO","DOING","DONE"],effects_UNSTABLE:[j]}),O=Object(a.atom)({key:"category",default:"TO_DO"}),h=Object(a.atom)({key:"toDo",default:[],effects_UNSTABLE:[j]}),m=Object(a.selector)({key:"toDoSelector",get:function(e){var t=e.get,n=t(h),o=t(O);return null===n?[]:n.filter((function(e){return e.category===o}))}}),g=n(6),p=n(18),x=n(2);var v=function(){var e=Object(a.useSetRecoilState)(f),t=Object(p.a)(),n=t.register,o=t.handleSubmit,r=t.setValue;return Object(x.jsxs)("form",{onSubmit:o((function(t){var n=t.category;e((function(e){return[n].concat(Object(g.a)(e))})),r("category","")})),children:[Object(x.jsx)("input",Object(u.a)(Object(u.a)({},n("category",{required:"Please add a category"})),{},{placeholder:"Add a Category"})),Object(x.jsx)("button",{children:"Add Category"})]})};var y=function(){var e=Object(a.useRecoilValue)(f),t=Object(a.useSetRecoilState)(f);return Object(x.jsxs)("div",{children:["Categories List",Object(x.jsx)("hr",{}),Object(x.jsx)(v,{}),e.map((function(e){return Object(x.jsxs)("div",{children:[e,Object(x.jsx)("button",{onClick:function(n){!function(e,n){t((function(t){return console.log(t),Object(g.a)(t.filter((function(t){return t!==e})))}))}(e)},children:"\u274c"})]})})),Object(x.jsx)("hr",{})]})};var S=function(){var e=Object(a.useSetRecoilState)(h),t=Object(a.useRecoilValue)(O),n=Object(p.a)(),o=n.register,r=n.handleSubmit,c=n.setValue;return Object(x.jsxs)("form",{onSubmit:r((function(n){var o=n.toDo;e((function(e){return[{text:o,id:Date.now(),category:t}].concat(Object(g.a)(e))})),c("toDo","")})),children:[Object(x.jsx)("input",Object(u.a)(Object(u.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(x.jsx)("button",{children:"Add Todo"})]})};var k=function(e){var t=e.text,n=e.category,o=e.id,r=Object(a.useSetRecoilState)(h),c=Object(a.useRecoilValue)(f),i=function(e){var n=e.currentTarget.name;r((function(e){var r=e.findIndex((function(e){return e.id===o})),c={text:t,id:o,category:n};return[].concat(Object(g.a)(e.slice(0,r)),[c],Object(g.a)(e.slice(r+1)))}))};return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:t}),c.map((function(e){return e===n?null:Object(x.jsx)("button",{name:e,onClick:i,children:e})})),Object(x.jsx)("button",{onClick:function(){r((function(e){var t=e.findIndex((function(e){return e.id===o}));return[].concat(Object(g.a)(e.slice(0,t)),Object(g.a)(e.slice(t+1)))}))},children:"\u274c"})]})};var C,D=function(){var e=Object(a.useRecoilValue)(m),t=Object(a.useRecoilValue)(f),n=Object(a.useRecoilState)(O),o=Object(b.a)(n,2),r=o[0],c=o[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{}),Object(x.jsx)("h1",{children:"To Dos"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("select",{value:r,onInput:function(e){c(e.currentTarget.value)},children:[t.map((function(e){return Object(x.jsx)("option",{value:e,children:e})})),";"]}),Object(x.jsx)(S,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(x.jsx)(k,Object(u.a)({},e),e.id)}))]})},R=Object(s.b)(C||(C=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var q=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(R,{}),Object(x.jsx)(D,{})]})};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(a.RecoilRoot,{children:Object(x.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(x.jsx)(q,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.fbe4d396.chunk.js.map