(this["webpackJsonpredux-weather"]=this["webpackJsonpredux-weather"]||[]).push([[0],{18:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(5),r=c.n(n),i=(c(18),c(2)),l=c(13),d="GET_WEATHER",j="SET_LOADING",o="SET_ERROR",h="SET_ALERT",m=function(e){return{type:h,payload:e}},b=c(8),u=c.n(b),x=c(10),O=c(0),p=function(e){var t=e.title,c=Object(i.b)(),a=Object(s.useState)(""),n=Object(l.a)(a,2),r=n[0],h=n[1],b=function(e){if(e.preventDefault(),""===r.trim())return c(m("City is required!"));c({type:j}),c(function(e){return function(){var t=Object(x.a)(u.a.mark((function t(c){var s,a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("2f97d8637675ed7c813d7948dd818dea"));case 3:if((s=t.sent).ok){t.next=9;break}return t.next=7,s.json();case 7:throw a=t.sent,new Error(a.message);case 9:return t.next=11,s.json();case 11:n=t.sent,c({type:d,payload:n}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),c({type:o,payload:t.t0.message});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()}(r)),h("")};return Object(O.jsx)("div",{className:"hero is-light has-text-centered",children:Object(O.jsx)("div",{className:"hero-body",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{className:"title",children:t}),Object(O.jsxs)("form",{className:"py-5",onSubmit:function(e){return b(e)},children:[Object(O.jsx)("input",{placeholder:"Enter city name",style:{maxWidth:300},className:"input has-text-centered mb-2",type:"text",value:r,onChange:function(e){return function(e){h(e.currentTarget.value)}(e)}}),Object(O.jsx)("button",{className:"button is-primary is-fullwidth",style:{maxWidth:300,margin:"0 auto"},children:"Search"})]})]})})})},v=function(e){var t=e.message,c=e.onClose;return Object(O.jsxs)("div",{className:"modal is-active has text centered",children:[Object(O.jsx)("div",{className:"modal-background",onClick:c}),Object(O.jsxs)("div",{className:"modal-card",children:[Object(O.jsx)("header",{className:"modal-card-head has-background-danger",children:Object(O.jsx)("p",{className:"modal-card-title has-text-white",children:t})}),Object(O.jsx)("footer",{className:"modal-card-foot",style:{justifyContent:"center"},children:Object(O.jsx)("button",{className:"button",onClick:c,children:"Close"})})]})]})},g=function(e){var t=e.data,c=(1.8*t.main.temp-459.67).toFixed(2),s=(t.main.temp-273.15).toFixed(2);return Object(O.jsx)("section",{className:"section",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("h1",{className:"title has-text-centered",style:{marginBottom:50},children:[t.name," - ",t.sys.country]}),Object(O.jsxs)("div",{className:"level",style:{alignItems:"flex-start"},children:[Object(O.jsx)("div",{className:"level-item has-text-centered",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"heading",children:t.weather[0].description}),Object(O.jsx)("p",{className:"title",children:Object(O.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,".png"),alt:""})})]})}),Object(O.jsx)("div",{className:"level-item has-text-centered",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"heading",children:"temp"}),Object(O.jsxs)("div",{className:"title",children:[Object(O.jsxs)("p",{className:"mb-2",children:[t.main.temp,"K"]}),Object(O.jsxs)("p",{className:"mb-2",children:[c,Object(O.jsx)("sup",{children:"\u2109"})]}),Object(O.jsxs)("p",{children:[s,Object(O.jsx)("sup",{children:"\u2103"})]})]})]})}),Object(O.jsx)("div",{className:"level-item has-text-centered",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"heading",children:"humidity"}),Object(O.jsx)("p",{className:"title",children:t.main.humidity})]})}),Object(O.jsx)("div",{className:"level-item has-text-centered",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"heading",children:"pressure"}),Object(O.jsx)("p",{className:"title",children:t.main.pressure})]})}),Object(O.jsx)("div",{className:"level-item has-text-centered",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"heading",children:"wind"}),Object(O.jsxs)("p",{className:"title",children:[t.wind.speed," m/s"]})]})})]})]})})},N=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.weather.data})),c=Object(i.c)((function(e){return e.weather.loading})),s=Object(i.c)((function(e){return e.weather.error})),a=Object(i.c)((function(e){return e.alert.message}));return Object(O.jsxs)("div",{className:"has-text-centered",children:[Object(O.jsx)(p,{title:"Enter city name and press search button"}),c?Object(O.jsx)("h2",{className:"is-size-3 py-2",children:"Loading..."}):t&&Object(O.jsx)(g,{data:t}),a&&Object(O.jsx)(v,{message:a,onClose:function(){return e(m(""))}}),s&&Object(O.jsx)(v,{message:s,onClose:function(){return e({type:o,payload:""})}})]})},f=c(3),y=c(11),w=c(12),E=c(4),k={data:null,loading:!1,error:""},C={message:""},S=Object(f.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{data:t.payload,loading:!1,error:""};case j:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case o:return Object(E.a)(Object(E.a)({},e),{},{error:t.payload,loading:!1});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type===h?{message:t.payload}:e}}),T=Object(f.createStore)(S,Object(y.composeWithDevTools)(Object(f.applyMiddleware)(w.a)));c(27);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(i.a,{store:T,children:Object(O.jsx)(N,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.bcd7aaf7.chunk.js.map