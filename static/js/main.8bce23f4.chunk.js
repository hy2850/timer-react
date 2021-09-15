(this["webpackJsonptimer-react"]=this["webpackJsonptimer-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(7),r=n.n(s),a=n(2),o=(n(28),n(13)),u=n.n(o),l=n(21),d=n(5),b=n(52),j=n(51),m=n(8),O=n.n(m),f=(n(15),n(16),n(6)),g=n.n(f),v=n(1);function p(e){var t=Object(c.useState)("SHORT"===e.type?25:50),n=Object(a.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)("SHORT"===e.type?5:10),o=Object(a.a)(r,2),u=o[0],l=o[1];Object(c.useEffect)((function(){return document.addEventListener("keydown",d),function(){return document.removeEventListener("keydown",d)}}));var d=function(t){!e.isOpen||"Space"!==t.code&&"Enter"!==t.code||b()};function b(t){t&&t.preventDefault();var n={timerTime:60*Number.parseInt(i),breakTime:60*Number.parseInt(u)};e.save(n),e.close()}return Object(v.jsx)(g.a,{className:"modal",id:"time",closeTimeoutMS:200,isOpen:e.isOpen,onRequestClose:e.close,children:Object(v.jsx)("div",{className:"modal",id:"time",children:Object(v.jsx)("div",{className:"modal-body",children:Object(v.jsxs)("form",{onSubmit:b,children:[Object(v.jsx)("div",{className:"settings",children:Object(v.jsxs)("div",{className:"settings-container-time",children:[Object(v.jsxs)("label",{children:["Timer \xa0",Object(v.jsx)("input",{className:"time",type:"number",step:"5",min:"0",max:"99",value:i,onChange:function(e){s(e.target.value)}})]}),Object(v.jsxs)("label",{children:["Break \xa0",Object(v.jsx)("input",{className:"time",type:"number",step:"1",min:"0",max:"99",value:u,onChange:function(e){l(e.target.value)}})]})]})}),Object(v.jsx)("input",{className:"settings-save",type:"submit",value:"Submit"})]})})})})}function h(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(a.a)(r,2),u=o[0],l=o[1],d=Object(c.useState)("00"),b=Object(a.a)(d,2),j=b[0],m=b[1],O=Object(c.useState)("00"),f=Object(a.a)(O,2),g=f[0],p=f[1],h=Object(c.useState)(""),S=Object(a.a)(h,2),A=S[0],x=S[1];function N(t){x(0===t?j:g),0===t?s(!0):l(!0),e.pause()}function T(t){var n=0===t?"Minute":"Second",c=parseInt(0===t?j:g),i=parseInt(A);if(isNaN(i)&&alert("".concat(n," must be a number between 0 to ").concat(0===t?99:59)),0<=i&&i<(0===t?100:60)&&c!==i){var r=0===t?60*i+parseInt(g):60*parseInt(j)+i;e.update(r)}0===t?s(!1):l(!1)}return Object(c.useLayoutEffect)((function(){var t=Math.floor(e.time/60);t=t.toString().padStart(2,"0");var n=e.time%60;n=n.toString().padStart(2,"0"),m(t),p(n)}),[]),Object(c.useEffect)((function(){var e=document.getElementById("minWrite");e&&e.focus()}),[i]),Object(c.useEffect)((function(){var e=document.getElementById("secWrite");e&&e.focus()}),[u]),Object(v.jsxs)("div",{id:"timer",children:[i?Object(v.jsx)("input",{className:"write",id:"minWrite",type:"text",value:A,onChange:function(e){x(e.target.value)},onBlur:function(){T(0)}}):Object(v.jsx)("span",{className:"show",onDoubleClick:function(){N(0)},children:j}),":",u?Object(v.jsx)("input",{className:"write",id:"secWrite",type:"text",value:A,onChange:function(e){x(e.target.value)},onBlur:function(){T(1)}}):Object(v.jsx)("span",{className:"show",onDoubleClick:function(){N(1)},children:g})]})}g.a.setAppElement("#root");var S=n.p+"static/media/beep.3078eb82.mp3",A=n.p+"static/media/bell.b1616f76.mp3",x="data:image/png;base64,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",N=60,T="Pomodoro Timer+";var y=function(e){var t=Object(c.useRef)(e.settings.timerTime),n=Object(c.useRef)(e.settings.breakTime),i=Object(c.useRef)(e.settings.volume),s=Object(c.useRef)(e.settings.autoStart),r=Object(c.useRef)(null),o=Object(c.useState)(t.current),m=Object(a.a)(o,2),f=m[0],g=m[1],y=Object(c.useState)(!1),k=Object(a.a)(y,2),w=k[0],P=k[1],J=Object(c.useState)(!1),R=Object(a.a)(J,2),L=R[0],H=R[1],C=Object(c.useState)(!1),E=Object(a.a)(C,2),B=E[0],K=E[1],F=Object(c.useState)(0),D=Object(a.a)(F,2),W=D[0],G=D[1],U=Object(d.c)((function(e){return e.onNoti}));Object(c.useLayoutEffect)((function(){return document.addEventListener("keydown",z),function(){return document.removeEventListener("keydown",z)}}));var z=function(e){"Space"===e.code?P((function(e){return!e})):"KeyR"===e.code&&(e.ctrlKey?(e.preventDefault(),H(!1)):I())};function I(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];P(!1),e||g(L?n.current:t.current)}function M(){var c=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(U){var i="".concat("SHORT"===e.type?"Short":"Long"),s=i+" timer"+"".concat(c?" over!":" start!"),r="".concat(c?"Break time "+n.current/N:"Focus for another "+t.current/N)+" minutes",a=new Notification(s,{body:r,icon:x});a.addEventListener("click",(function(e){window.focus()}))}}function Z(c){t.current=c.timerTime,n.current=c.breakTime,I();var i="initTimeSettings-json",s=JSON.parse(localStorage.getItem(i));s="SHORT"===e.type?Object.assign({},s,{shortTT:c.timerTime,shortBT:c.breakTime}):Object.assign({},s,{longTT:c.timerTime,longBT:c.breakTime}),window.localStorage.setItem(i,JSON.stringify(s))}return Object(b.a)((function(){if(G((function(e){return e+1})),w){if("LONG"===e.type)return;var t=Math.floor(f/N);t=t.toString();var n=f%N;n=n.toString();var c=t.padStart(2,"0")+":"+n.padStart(2,"0");document.title="("+c+") "+T}}),[f]),Object(c.useEffect)((function(){w?r.current=O()().add(f,"s"):"SHORT"===e.type&&(document.title=T)}),[w]),Object(j.a)((function(){if(f<=0)return function(){var t=new Audio("SHORT"===e.type?S:A);t.volume=i.current;var n=1;t.addEventListener("ended",Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(++n>=1)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,new Promise((function(e){return setTimeout(e,300)}));case 5:this.currentTime=0,this.play();case 7:case"end":return e.stop()}}),e,this)}))),!1),t.play()}(),void H((function(e){return!e}));var t=r.current.diff(O()());g(Math.round(t/1e3))}),w?1e3:null),Object(b.a)((function(){I(),f>0||(L?(r.current=O()().add(n.current,"s"),P(!0),M(!0)):s.current&&(r.current=O()().add(t.current,"s"),P(!0),M(!1)))}),[L]),Object(v.jsxs)("div",{className:"timerNswitch",children:[Object(v.jsxs)("div",{className:"timerBox",children:[Object(v.jsx)("span",{id:"breakNotify",children:L?"(on Break)":" "}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:Object(v.jsx)(h,{time:f,pause:function(){return I(!0)},update:function(e){return function(e){var c={timerTime:t.current,breakTime:n.current};L?Object.assign(c,{breakTime:e}):Object.assign(c,{timerTime:e}),Z(c)}(e)}},W)}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"buttonSet",children:[Object(v.jsx)("button",{className:"button",id:"start",onClick:function(){return P(!0)},children:" Start "}),Object(v.jsx)("button",{className:"button",id:"pause",onClick:function(){return I(!0)},children:" Pause "}),Object(v.jsx)("button",{className:"button secondary",id:"reset",onClick:function(){return I()},children:" Reset "}),Object(v.jsx)("button",{className:"button secondary",id:"timeSettings","data-modal-target":"SHORT",onClick:function(){return K(!0)},children:" Time "})]})]}),Object(v.jsxs)("label",{className:"switch",children:[Object(v.jsx)("input",{type:"checkbox",onChange:function(){return H((function(e){return!e})),void I()},checked:L}),Object(v.jsx)("span",{className:"slider round"})]}),Object(v.jsx)(p,{type:e.type,isOpen:B,close:function(){return K(!1)},save:function(e){return Z(e)}})]})},k=n(9),w=Object(k.b)({name:"noti",initialState:{onNoti:!1},reducers:{turnOn:function(e){e.onNoti=!0},turnOff:function(e){e.onNoti=!1}}}),P=w.actions,J=P.turnOn,R=P.turnOff,L=w.reducer;function H(e){var t=Object(c.useState)(e.curSettings.volume),n=Object(a.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)(e.curSettings.autoStart),o=Object(a.a)(r,2),u=o[0],l=o[1],b=Object(d.c)((function(e){return e.onNoti})),j=Object(d.b)();Object(c.useEffect)((function(){return document.addEventListener("keydown",m),function(){return document.removeEventListener("keydown",m)}}));var m=function(t){!e.isOpen||"Space"!==t.code&&"Enter"!==t.code||(t.preventDefault(),O())};function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.preventDefault(),alert("Settings saved");var n={volume:Number.parseFloat(i),autoStart:u};e.save(n),e.close()}return Object(v.jsx)(g.a,{className:"modal",id:"general",closeTimeoutMS:200,isOpen:e.isOpen,onRequestClose:e.close,children:Object(v.jsxs)("div",{className:"modal",id:"general",children:[Object(v.jsxs)("div",{className:"modal-header",children:[Object(v.jsx)("span",{className:"title",children:"General Settings"}),Object(v.jsx)("button",{className:"close-button",onClick:e.close,children:" \xd7 "})]}),Object(v.jsx)("div",{className:"modal-body",children:Object(v.jsxs)("form",{onSubmit:O,children:[Object(v.jsxs)("div",{className:"settings",children:[Object(v.jsxs)("div",{className:"settings-container-checkbox",children:[Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"checkbox",checked:u,onChange:function(){l((function(e){return!e}))}})," Auto start timers and breaks?"]}),Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"checkbox",checked:b,onChange:function(){b?j(R()):"granted"!==Notification.permission?Notification.requestPermission().then((function(e){"granted"===e?(console.log("Permission granted"),j(J())):console.log("Permission denied")})):j(J())}})," Send notification when the timer is over"]})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"settings-container-slider",children:["Select alarm volume",Object(v.jsx)("input",{className:"slide",id:"volume",type:"range",min:"0",max:"1",step:"0.01",value:i,onChange:function(e){s(e.target.value)}})]})]}),Object(v.jsx)("input",{className:"settings-save",type:"submit",value:"Submit"})]})})]})})}g.a.setAppElement("#root");var C=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(a.a)(r,2),u=o[0],l=o[1],d=Object(c.useState)(0),b=Object(a.a)(d,2),j=b[0],m=b[1],O={shortTT:1500,shortBT:300,longTT:3e3,longBT:600},f={volume:1,autoStart:!1},g=localStorage.getItem("generalSettings-json");g?f=JSON.parse(g):localStorage.setItem("generalSettings-json",JSON.stringify(f));var p=localStorage.getItem("initTimeSettings-json");return p?O=JSON.parse(p):localStorage.setItem("initTimeSettings-json",JSON.stringify(O)),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("span",{className:"title",children:"Pomodoro Timer Plus+"}),Object(v.jsxs)("div",{className:"main-buttonSet",children:[Object(v.jsx)("button",{onClick:function(){return s(!i)},children:"Long-Timer"}),Object(v.jsx)("button",{onClick:function(){return l(!0)},children:"Settings"}),Object(v.jsx)("button",{onClick:function(){window.confirm("Reset settings?")&&(localStorage.clear(),document.location.reload())},children:"Reset Settings"})]})]}),Object(v.jsxs)("div",{className:"wrapper",children:[Object(v.jsx)(y,{type:"SHORT",settings:Object.assign({},f,{timerTime:O.shortTT,breakTime:O.shortBT})},j),i?Object(v.jsx)(y,{type:"LONG",settings:Object.assign({},f,{timerTime:O.longTT,breakTime:O.longBT})},j+2):null]}),Object(v.jsx)(H,{curSettings:f,id:"modalTest",isOpen:u,close:function(){return l(!1)},save:function(e){return f=t=e,localStorage.setItem("generalSettings-json",JSON.stringify(t)),void m((function(e){return e+1}));var t}},j+3)]})},E=n(4),B=n(22),K={key:"root",storage:n.n(B).a,version:1},F=Object(E.g)(K,L),D=Object(k.a)({reducer:F,middleware:function(e){return e({serializableCheck:{ignoredActions:[E.a,E.f,E.b,E.c,E.d,E.e]}})}}),W=Object(E.h)(D),G=n(23);r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(d.a,{store:D,children:Object(v.jsx)(G.a,{loading:null,persistor:W,children:Object(v.jsx)(C,{})})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.8bce23f4.chunk.js.map