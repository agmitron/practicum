(()=>{"use strict";var e={4182:(e,t,n)=>{var r=n(7294),o=n(3935),a=n(3727),c=n(5977),i=n(3038),l=n.n(i);function s(e){var t=e.name;console.log("Counter.render()");var n=(0,r.useState)(0),o=l()(n,2),a=o[0],c=o[1];return r.createElement("div",{className:"ui-counter"},r.createElement("p",{className:"ui-counter__title"},"Counter Widget"),r.createElement("div",{className:"ui-counter__body"},r.createElement("p",{className:"ui-counter__body__name"},t),r.createElement("p",{className:"ui-counter__body__count"},a),r.createElement("button",{className:"ui-counter__body__button",onClick:function(){c(a+1)},disabled:3===a},"Increment")))}var u=n(9713),p=n.n(u),m=n(9669),d=n.n(m);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){console.log(e),console.log("Post.render()");var t=(0,r.useState)({isLoading:!0,title:"",description:""}),n=l()(t,2),o=n[0],a=n[1];return(0,r.useEffect)((function(){return(console.log("Post.fetchData()"),d().get("https://jsonplaceholder.typicode.com/posts/3").then((function(e){return{title:e.data.title,body:e.data.body}}))).then((function(e){a(f(f({},o),{},{isLoading:!1,title:e.title,description:e.body}))})),function(){console.log("Post componentDidMount()")}}),[]),r.createElement("div",{className:"ui-post"},r.createElement("p",{className:"ui-post__title"},"Post Widget"),null!=o&&o.isLoading?"loading...":r.createElement("div",{className:"ui-post__body"},r.createElement("p",{className:"ui-post__body__title"},null==o?void 0:o.title),r.createElement("p",{className:"ui-post__body__description"},null==o?void 0:o.description)))}function v(){return console.log("App.render()"),r.createElement("div",{className:"ui-app"},r.createElement("div",{className:"ui-app__navigation"},r.createElement(a.OL,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/",exact:!0},"Counter"),r.createElement(a.OL,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/post",exact:!0},"Post")),r.createElement(c.rs,null,r.createElement(c.AW,{path:"/",exact:!0,render:function(){return r.createElement(s,{name:"Monica Geller"})}}),r.createElement(c.AW,{path:"/post",exact:!0,component:b})))}o.hydrate(r.createElement(a.VK,null,r.createElement(v,null)),document.getElementById("app"))}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[4182,736]],r=()=>{};function o(){for(var r,o=0;o<t.length;o++){for(var a=t[o],c=!0,i=1;i<a.length;i++){var l=a[i];0!==e[l]&&(c=!1)}c&&(t.splice(o--,1),r=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},c=c.slice();for(var e=0;e<c.length;e++)a(c[e]);return(r=o)()};var a=o=>{for(var a,c,[l,s,u,p]=o,m=0,d=[];m<l.length;m++)c=l[m],n.o(e,c)&&e[c]&&d.push(e[c][0]),e[c]=0;for(a in s)n.o(s,a)&&(n.m[a]=s[a]);for(u&&u(n),i(o);d.length;)d.shift()();return p&&t.push.apply(t,p),r()},c=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[],i=c.push.bind(c);c.push=a})(),n.x()})();
//# sourceMappingURL=main.js.map