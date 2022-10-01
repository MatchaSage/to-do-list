(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),d=n.n(i)()(o());d.push([e.id,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.card {\r\n    border: 1px solid purple;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    min-width: 100vw;\r\n    height: 100vh;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 9fr;\r\n    background-color: rgb(95, 95, 95);\r\n}\r\n\r\n.sidebar {\r\n    border: 1px solid red;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding-top: 20px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.header {\r\n    border: 4px solid green;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n    \r\n}\r\n\r\n.todo.container {\r\n    border: 2px solid white;\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.new.category.button {\r\n    height: 5%;\r\n    width: 95%;\r\n}\r\n\r\n.category.container {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.category.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 95%;\r\n    border-top: 1px solid yellow;\r\n}\r\n\r\n.header {\r\n    font-size: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n}\r\n\r\n.todo.header {\r\n    border: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-top: 5px;\r\n    border: 1px solid yellow;\r\n}\r\n\r\n#newCategory {\r\n    visibility: hidden;\r\n    position: fixed;\r\n    align-items: center;\r\n    top: 50%;\r\n    left: 50%;\r\n    border: 2px solid green;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 3rem;\r\n}\r\n\r\n#newTodo {\r\n    visibility: hidden;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: green;\r\n    padding: 30px;\r\n    font-size: 1.3rem;\r\n}",""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(d[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},d=[],c=0;c<e.length;c++){var a=e[c],l=r.base?a[0]+r.base:a[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=n(u),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}d.push(u)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var c=n(i[d]);t[c].references--}for(var a=r(e,o),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),d=n.n(i),c=n(565),a=n.n(c),l=n(216),s=n.n(l),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=a(),m.insert=d().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let y=document.querySelector(".category.list"),v=document.querySelector(".card.container");function g(e,t){let n=t.className.split(" ")[1];e.forEach((e=>{let t=e.className.split(" ")[1];n==t&&v.append(e)}))}function h(e){document.querySelectorAll(".delete.todo").forEach((t=>{t.addEventListener("click",(function(){console.log(e)}))}))}let x=document.querySelector(".new.category.button"),b=document.querySelector(".new.todo"),E=document.querySelector(".cancel.category"),w=document.getElementById("newCategory"),C=document.getElementById("newTodo"),L=document.querySelector(".cancel.todo"),S=document.getElementById("newTodo"),I=document.getElementById("newCategory"),T=document.querySelector(".category.Default"),q=document.querySelector(".todo.text"),D=document.querySelector(".card.container"),k=document.querySelector(".category.list").children,B=[];I.addEventListener("submit",(function(e){e.preventDefault(),function(e){let t=[],n=document.createElement("div");n.textContent=e,n.classList.add("category",e),t.push(n),t.forEach((e=>{y.append(e)}))}(document.getElementById("catTitle").value),[...k].forEach((e=>{e.addEventListener("click",(function(){for(T=e,q.textContent=T.textContent;0!=D.childNodes.length;)D.removeChild(D.lastChild);g(B,T)}))})),h(B)})),S.addEventListener("submit",(function(e){e.preventDefault();let t=function(e){let t=document.createElement("div");t.classList.add("card");let n=document.createElement("p");n.classList.add("title"),n.textContent=e.todoTitle;let r=document.createElement("p");r.classList.add("descript"),r.textContent=e.todoDescription;let o=document.createElement("p");o.classList.add("duedate"),o.textContent=e.todoDuedate;let i=document.createElement("p");i.classList.add("priority"),i.textContent=e.todoPriority;let d=document.createElement("p");d.classList.add("finished"),d.textContent=`Finished: ${e.todoFinished}`;let c=document.createElement("button");return c.classList.add("delete","todo"),c.textContent="Delete",t.append(n,r,o,i,d,c),t}({todoTitle:document.getElementById("todoTitle").value,todoDescription:document.getElementById("todoDescription").value,todoDuedate:document.getElementById("todoDuedate").value,todoPriority:document.getElementById("todoPriority").value,todoFinished:document.getElementById("todoFinished").checked});t.classList.add(T.textContent),B.push(t),g(B,T),h(B)})),L.addEventListener("click",(function(){C.style.visibility="hidden"})),b.addEventListener("click",(function(){"visible"==C.style.visibility?C.style.visibility="hidden":C.style.visibility="visible"})),E.addEventListener("click",(function(e){e.preventDefault(),w.style.visibility="hidden"})),x.addEventListener("click",(function(){"visible"==w.style.visibility?w.style.visibility="hidden":w.style.visibility="visible"}))})()})();