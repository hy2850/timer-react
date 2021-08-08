(this["webpackJsonptimer-react"]=this["webpackJsonptimer-react"]||[]).push([[0],{19:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(6),i=n.n(r),a=n(2),u=(n(19),n(7)),o=n.n(u),l=n(14),j=(n(8),n(9),n(3)),b=n.n(j),m=n(0);function d(e){var t=Object(c.useState)("SHORT"===e.type?25:50),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)("SHORT"===e.type?5:10),u=Object(a.a)(i,2),o=u[0],l=u[1];Object(c.useEffect)((function(){if(e.isOpen)return document.addEventListener("keydown",j),function(){return document.removeEventListener("keydown",j)}}),[e.isOpen]);var j=function(t){!e.isOpen||"Space"!==t.code&&"Enter"!==t.code||d()};function d(t){t&&t.preventDefault();var n={timerTime:60*Number.parseInt(s),breakTime:60*Number.parseInt(o)};e.save(n),e.close()}return Object(m.jsx)(b.a,{className:"modal",id:"time",closeTimeoutMS:200,isOpen:e.isOpen,onRequestClose:e.close,children:Object(m.jsx)("div",{className:"modal",id:"time",children:Object(m.jsx)("div",{className:"modal-body",children:Object(m.jsxs)("form",{onSubmit:d,children:[Object(m.jsx)("div",{className:"settings",children:Object(m.jsxs)("div",{className:"settings-container-time",children:[Object(m.jsxs)("label",{children:["Timer \xa0",Object(m.jsx)("input",{id:"time",type:"number",step:"5",min:"0",max:"99",value:s,onChange:function(e){r(e.target.value)}})]}),Object(m.jsxs)("label",{children:["Break \xa0",Object(m.jsx)("input",{id:"time",type:"number",step:"5",min:"0",max:"99",value:o,onChange:function(e){l(e.target.value)}})]})]})}),Object(m.jsx)("input",{className:"settings-save",type:"submit",value:"Submit"})]})})})})}function O(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!1),u=Object(a.a)(i,2),o=u[0],l=u[1],j=Object(c.useState)("00"),b=Object(a.a)(j,2),d=b[0],O=b[1],f=Object(c.useState)("00"),p=Object(a.a)(f,2),v=p[0],g=p[1],h=Object(c.useState)(""),S=Object(a.a)(h,2),x=S[0],T=S[1];function N(t){T(0===t?d:v),0===t?r(!0):l(!0),e.pause()}function y(t){var n=0===t?"Minute":"Second",c=parseInt(0===t?d:v),s=parseInt(x);if(isNaN(s)&&alert("".concat(n," must be a number between 0 to ").concat(0===t?99:59)),0<=s&&s<(0===t?100:60)&&c!==s){console.log("Changing ".concat(n," from ").concat(c," to ").concat(s));var i=0===t?60*s+parseInt(v):60*parseInt(d)+s;e.update(i)}0===t?r(!1):l(!1)}return Object(c.useEffect)((function(){var t=Math.floor(e.time/60);t=t.toString().padStart(2,"0");var n=e.time%60;n=n.toString().padStart(2,"0"),O(t),g(n)}),[]),Object(c.useEffect)((function(){var e=document.getElementById("minWrite");e&&e.focus()}),[s]),Object(c.useEffect)((function(){var e=document.getElementById("secWrite");e&&e.focus()}),[o]),Object(m.jsxs)("div",{id:"timer",children:[s?Object(m.jsx)("input",{className:"write",id:"minWrite",type:"text",value:x,onChange:function(e){T(e.target.value)},onBlur:function(){y(0)}}):Object(m.jsx)("span",{className:"show",onDoubleClick:function(){N(0)},children:d}),":",o?Object(m.jsx)("input",{className:"write",id:"secWrite",type:"text",value:x,onChange:function(e){T(e.target.value)},onBlur:function(){y(1)}}):Object(m.jsx)("span",{className:"show",onDoubleClick:function(){N(1)},children:v})]})}b.a.setAppElement("#root");var f=n.p+"static/media/beep.3078eb82.mp3",p=n.p+"static/media/bell.b1616f76.mp3";var v=function(e){var t=Object(c.useRef)(e.settings.timerTime),n=Object(c.useRef)(e.settings.breakTime),s=Object(c.useRef)(e.settings.volume),r=Object(c.useRef)(e.settings.autoStart),i=Object(c.useState)(-1),u=Object(a.a)(i,2),j=u[0],b=u[1],v=Object(c.useState)(!1),g=Object(a.a)(v,2),h=g[0],S=g[1],x=Object(c.useRef)(!1),T=Object(c.useState)(!1),N=Object(a.a)(T,2),y=N[0],k=N[1],E=Object(c.useState)(0),w=Object(a.a)(E,2),C=w[0],R=w[1];Object(c.useEffect)((function(){-1==j&&b(x.current?n.current:t.current),R((function(e){return e+1}))}),[j]),Object(c.useEffect)((function(){return b(t.current),document.addEventListener("keydown",I),function(){return document.removeEventListener("keydown",I)}}),[]);var I=function(e){"Space"===e.code?S((function(e){return!e})):"KeyR"===e.code&&(e.ctrlKey&&(e.preventDefault(),x.current=!1),B())};function B(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];console.log(e?"Pausing":"Resetting"),S(!1),e||b(-1)}function L(c){t.current=c.timerTime,n.current=c.breakTime,B(),b(x.current?n.current:t.current);var s="initTimeSettings-json",r=JSON.parse(localStorage.getItem(s));r="SHORT"===e.type?Object.assign({},r,{shortTT:c.timerTime,shortBT:c.breakTime}):Object.assign({},r,{longTT:c.timerTime,longBT:c.breakTime}),e.update_initTime((function(e){return Object.assign({},e,r)})),window.localStorage.setItem(s,JSON.stringify(r))}return Object(c.useEffect)((function(){if(h){var t=setInterval((function(){if(0===j)return function(){var t=new Audio("SHORT"===e.type?f:p);t.volume=s.current;var n=1;t.addEventListener("ended",Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(++n>=1)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,new Promise((function(e){return setTimeout(e,300)}));case 5:this.currentTime=0,this.play();case 7:case"end":return e.stop()}}),e,this)}))),!1),t.play()}(),x.current=!x.current,B(),void((x.current||r.current)&&S(!0));b((function(e){return e-1}))}),1e3);return function(){return clearInterval(t)}}}),[h,j]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"timerBox","data-short":!0,children:[Object(m.jsx)("span",{id:"breakNotify",children:x.current?"(on Break)":" "}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:Object(m.jsx)(O,{time:j,pause:function(){return B(!0)},update:function(e){return function(e){var c={timerTime:t.current,breakTime:n.current};x.current?Object.assign(c,{breakTime:e}):Object.assign(c,{timerTime:e}),L(c)}(e)}},C)}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"buttonSet",children:[Object(m.jsx)("button",{className:"button",id:"start",onClick:function(){return S(!0)},children:" Start "}),Object(m.jsx)("button",{className:"button",id:"pause",onClick:function(){return B(!0)},children:" Pause "}),Object(m.jsx)("button",{className:"button secondary",id:"reset",onClick:function(){return B()},children:" Reset "}),Object(m.jsx)("button",{className:"button secondary",id:"timeSettings","data-modal-target":"SHORT",onClick:function(){return k(!0)},children:" Time "})]})]}),Object(m.jsx)(d,{type:e.type,isOpen:y,close:function(){return k(!1)},save:function(e){return L(e)}})]})};function g(e){var t=Object(c.useState)(e.curSettings.volume),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(e.curSettings.autoStart),u=Object(a.a)(i,2),o=u[0],l=u[1];Object(c.useEffect)((function(){if(e.isOpen)return document.addEventListener("keydown",j),function(){return document.removeEventListener("keydown",j)}}),[e.isOpen]);var j=function(t){!e.isOpen||"Space"!==t.code&&"Enter"!==t.code||(t.preventDefault(),d())};function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.preventDefault(),alert("Settings saved");var n={volume:Number.parseFloat(s),autoStart:o};e.save(n),e.close()}return Object(m.jsx)(b.a,{className:"modal",id:"general",closeTimeoutMS:200,isOpen:e.isOpen,onRequestClose:e.close,children:Object(m.jsxs)("div",{className:"modal",id:"general",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsx)("span",{className:"title",children:"General Settings"}),Object(m.jsx)("button",{className:"close-button",onClick:e.close,children:" \xd7 "})]}),Object(m.jsx)("div",{className:"modal-body",children:Object(m.jsxs)("form",{onSubmit:d,children:[Object(m.jsxs)("div",{className:"settings",children:[Object(m.jsx)("div",{className:"settings-container-checkbox",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",checked:o,onChange:function(){l((function(e){return!e}))}})," Auto start timers and breaks?"]})}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"settings-container-slider",children:["Select alarm volume",Object(m.jsx)("input",{className:"slider",id:"volume",type:"range",min:"0",max:"1",step:"0.01",value:s,onChange:function(e){r(e.target.value)}})]})]}),Object(m.jsx)("input",{className:"settings-save",type:"submit",value:"Submit"}),Object(m.jsx)("input",{className:"settings-save",type:"reset",value:"Reset"})]})})]})})}b.a.setAppElement("#root");var h=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!1),u=Object(a.a)(i,2),o=u[0],l=u[1],j={shortTT:1500,shortBT:300,longTT:3e3,longBT:600},b=Object(c.useState)(j),d=Object(a.a)(b,2),O=d[0],f=d[1];Object(c.useEffect)((function(){var e=localStorage.getItem("generalSettings-json");e&&x(JSON.parse(e));var t=localStorage.getItem("initTimeSettings-json");t&&f((function(e){return Object.assign({},e,JSON.parse(t))}))}),[]);var p=Object(c.useState)({volume:1,autoStart:!1}),h=Object(a.a)(p,2),S=h[0],x=h[1],T=Object(c.useState)(0),N=Object(a.a)(T,2),y=N[0],k=N[1];return Object(c.useEffect)((function(){k((function(e){return e+1})),localStorage.setItem("generalSettings-json",JSON.stringify(S))}),[S]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("span",{className:"title",children:"Pomodoro Timer Plus+"}),Object(m.jsxs)("div",{className:"main-buttonSet",children:[Object(m.jsx)("button",{onClick:function(){return r(!s)},children:"Long-Timer"}),Object(m.jsx)("button",{onClick:function(){return l(!0)},children:"Settings"}),Object(m.jsx)("button",{onClick:function(){return localStorage.clear(),alert("Cleared!"),void document.location.reload()},children:"Reset Settings"})]})]}),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(v,{type:"SHORT",settings:Object.assign({},S,{timerTime:O.shortTT,breakTime:O.shortBT}),update_initTime:f},y),s?Object(m.jsx)(v,{type:"LONG",settings:Object.assign({},S,{timerTime:O.longTT,breakTime:O.longBT}),update_initTime:f},y+2):null]}),Object(m.jsx)(g,{curSettings:S,id:"modalTest",isOpen:o,close:function(){return l(!1)},save:function(e){x(e)}},y+3)]})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))},8:function(e,t,n){},9:function(e,t,n){}},[[33,1,2]]]);
//# sourceMappingURL=main.205da264.chunk.js.map