(this.webpackJsonpterminal=this.webpackJsonpterminal||[]).push([[0],{12:function(e,t,n){e.exports={select:"ThemeSelect_select__3hKQk"}},14:function(e,t,n){e.exports=n(33)},19:function(e,t,n){},2:function(e,t,n){e.exports={container:"Console_container__2LGSf",name:"Console_name__11bSO",matrix:"Console_matrix__1QWdB",cell:"Console_cell__hou6F",button:"Console_button__11w1H"}},3:function(e,t,n){e.exports={container:"ThemeList_container__KMQ-C",theme:"ThemeList_theme__3lD1D",label:"ThemeList_label__3WRZN",active:"ThemeList_active__Ed-ep"}},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=(n(19),n(5)),i=n.n(l),m=n(9),s=n(1),u=n(10),h=n(2),b=n.n(h),f=n(11),p=n.n(f),d=["background","black","red","green","yellow","blue","purple","cyan","white","background"],_=["black","brightBlack","red","brightRed","green","brightGreen","yellow","brightYellow","blue","brightBlue","purple","brightPurple","cyan","brightCyan","white","brightWhite"],v=["black","red","green","yellow","blue","purple","cyan","white"],g=function(e){if(null==e)return"";var t=v.sort((function(){return Math.random()-.5})).find((function(t){return p.a.isAccessible(e[t],e.background)}));return null!=t?e[t]:e[v[0]]},E=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),i=Object(s.a)(l,2),m=i[0],h=i[1];return Object(a.useEffect)((function(){h(g(e.theme))}),[e.theme]),e.theme?r.a.createElement("section",{className:b.a.container,style:{background:e.theme.background}},r.a.createElement("h2",{onClick:function(){h(g(e.theme))},className:b.a.name,style:{color:m}},e.theme.name),r.a.createElement("div",{className:b.a.matrix},_.map((function(t,n){return d.map((function(a,c){return r.a.createElement("div",{key:n+" "+c,className:b.a.cell,style:{background:e.theme?e.theme[a]:"",color:e.theme?e.theme[t]:""}},"gYw")}))}))),r.a.createElement("button",{className:b.a.button,style:{color:e.theme.background,background:m},onClick:function(){c||(o(!0),u.a(JSON.stringify(e.theme,null,2)),setTimeout((function(){o(!1)}),1e3))}},c?"Copied!":"Copy Theme")):r.a.createElement("div",null,"Loading...")},k=n(3),w=n.n(k),y=function(e){return r.a.createElement("section",{className:w.a.container},e.themeNames.map((function(t){return r.a.createElement("div",{key:t,className:"".concat(w.a.theme," ").concat(t===e.activeTheme?w.a.active:"")},r.a.createElement("input",{type:"radio",id:t,name:"themes",value:t,checked:t===e.activeTheme,onChange:function(){e.setActiveTheme(t)}}),r.a.createElement("label",{className:w.a.label,htmlFor:t},r.a.createElement("span",{className:w.a.tabbed},t)))})))},N=n(12),C=n.n(N),T=function(e){return r.a.createElement("select",{className:C.a.select,value:e.activeTheme,onChange:function(t){t.preventDefault(),t.target&&e.setActiveTheme(t.target.value)}},e.themeNames.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))},j=n(4),O=n.n(j),x=n(6),S=n.n(x),H=function(){return r.a.createElement("section",{className:S.a.container},r.a.createElement("h1",{className:S.a.title},"Windows Terminal Themes"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mbadolato/iTerm2-Color-Schemes"},"via iTerm2 Color Schemes")," | ",r.a.createElement("a",{target:"_blank",href:"/colour-schemes.json"},"Download all"))},A=n(13),L=function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?-1:e.name.toUpperCase()>t.name.toUpperCase()?1:0},W=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],h=l[1],b=Object(a.useState)(!1),f=Object(s.a)(b,2),p=f[0],d=f[1];Object(a.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/colour-schemes.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.sort(L)),h(n[0].name),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()();var e=new A.a((function(e){var t=e[0].contentRect.width;t>768?d(!1):t<768&&d(!0)}));return e.observe(document.body),function(){e.unobserve(document.body)}}),[]);var _=n.find((function(e){return e.name===u}));return r.a.createElement("section",{className:O.a.container},r.a.createElement("aside",{className:O.a.sidebar},r.a.createElement(H,null),p?r.a.createElement(T,{themeNames:n.map((function(e){return e.name})),activeTheme:u,setActiveTheme:h}):r.a.createElement(y,{themeNames:n.map((function(e){return e.name})),activeTheme:u,setActiveTheme:h})),r.a.createElement("section",{className:O.a.content},r.a.createElement(E,{theme:_})))},B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,n){e.exports={container:"Home_container__1ukFy",sidebar:"Home_sidebar__3bw15",content:"Home_content__2tXgb"}},6:function(e,t,n){e.exports={container:"Header_container__1VC87",title:"Header_title__3SH2Q"}}},[[14,1,2]]]);
//# sourceMappingURL=main.7e665aca.chunk.js.map