!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.plekanmodules=e():t.plekanmodules=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){function r(t){return t&&t.__esModule?t:{"default":t}}var o,i,u=n(54),a=r(u),s=n(137),c=r(s),f=n(139),l=r(f),d=n(140),p=r(d),m=n(136),h=r(m),v=n(135),y=r(v),g=n(138),x=r(g);!function(){var n={imagetext:c["default"],thereimagetext:x["default"],imageontext:h["default"],gap:y["default"],videoembed:p["default"],twocloumn:l["default"]};"object"==(0,a["default"])(e)?t.exports=n:(o=[],i=function(){return n}.apply(e,o),!(void 0!==i&&(t.exports=i)))}()},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(27)("wks"),o=n(16),i=n(1).Symbol,u="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};a.store=r},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(8),o=n(15);t.exports=n(7)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(41),o=n(23);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11),o=n(40),i=n(30),u=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(45),o=n(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(1),o=n(3),i=n(38),u=n(5),a="prototype",s=function(t,e,n){var c,f,l,d=t&s.F,p=t&s.G,m=t&s.S,h=t&s.P,v=t&s.B,y=t&s.W,g=p?o:o[e]||(o[e]={}),x=g[a],b=p?r:m?r[e]:(r[e]||{})[a];p&&(n=e);for(c in n)f=!d&&b&&void 0!==b[c],f&&c in g||(l=f?b[c]:n[c],g[c]=p&&"function"!=typeof b[c]?n[c]:v&&f?i(l,r):y&&b[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[c]=l,t&s.R&&x&&!x[c]&&u(x,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=l[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(s(r.parts[i],e))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(s(r.parts[i],e));l[r.id]={id:r.id,refs:1,parts:u}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],u=o[1],a=o[2],s=o[3],c={css:u,media:a,sourceMap:s};n[i]?n[i].parts.push(c):e.push(n[i]={id:i,parts:[c]})}return e}function i(t,e){var n=m(),r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function u(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function s(t,e){var n,r,o;if(e.singleton){var i=v++;n=h||(h=a(e)),r=c.bind(null,n,i,!1),o=c.bind(null,n,i,!0)}else n=a(e),r=f.bind(null,n),o=function(){u(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function c(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function f(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],u=0;u<n.length;u++){var a=n[u],s=l[a.id];s.refs--,i.push(s)}if(t){var c=o(t);r(c,e)}for(var u=0;u<i.length;u++){var s=i[u];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete l[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(33),i=r(o),u=n(22),a=r(u),s='<div contenteditable="true">DEFAULT</div>';e["default"]={props:["store","index","displayLanguage"],data:function(){return{DEFAULT_CONTENT:s,activeEditor:!1,updatable:null}},computed:{languages:function(){return this.store.state.languages},currentLanguge:function(){return this.store.state.currentLanguge},me:function(){return this.store.state.rows[this.index]},content:function(){var t=this.me.contents[this.displayLanguage].html;return t?t:this.DEFAULT_CONTENT}},mounted:function(){var t=this,e=this.$el.querySelectorAll("[contenteditable]");(0,a["default"])(e).map(function(t){e[t].contentEditable=!0}),this.languages.map(function(e){try{var n=t.me.contents[e].html;t.me.contents[e].html=n?n:t.DEFAULT_CONTENT}catch(r){var o=JSON.parse((0,i["default"])(t.me));o.contents[e]={},o.contents[e].html=t.DEFAULT_CONTENT,o.contents[e].fields={},t.store.updateRows(t.index,o)}}),this.setEditable(),document.addEventListener("mousedown",function(e){var n=e.target;t.updatable=childOf(n,window.editorElement)||"editor"==n.className}),document.addEventListener("mouseup",function(e){t.updatable=null}),document.addEventListener("domupdated",function(e){t.updateHTML()},!1)},updated:function(){this.setEditable();var t=document.querySelectorAll("img");(0,a["default"])(t).map(function(e){t[e].addEventListener("error",function(){t[e].src="http://www.pressedfortimelincoln.co.uk/wp-content/uploads/2013/05/placeholder1-1024x768.png"},!1)})},methods:{setEditable:function(){var t=this,e=this.$el.querySelectorAll("[contenteditable='true']");(0,a["default"])(e).map(function(n){e[n].onblur=function(e){t.updatable||(t.updateHTML(),window.editorElement.classList.remove("active"))}})},updateHTML:function(){this.me.contents[this.displayLanguage].html=this.$el.innerHTML.trim()}}}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(8).f,o=n(4),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){t.exports={"default":n(56),__esModule:!0}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=!0},function(t,e,n){var r=n(27)("keys"),o=n(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(23);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(3),i=n(25),u=n(32),a=n(8).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(2)},function(t,e,n){t.exports={"default":n(55),__esModule:!0}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(16)("meta"),o=n(10),i=n(4),u=n(8).f,a=0,s=Object.isExtensible||function(){return!0},c=!n(9)(function(){return s(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[r].w},p=function(t){return c&&m.NEED&&s(t)&&!i(t,r)&&f(t),t},m=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){t.exports=n(5)},function(t,e,n){var r=n(59);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(7)&&!n(9)(function(){return 7!=Object.defineProperty(n(39)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(34);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(25),o=n(13),i=n(37),u=n(5),a=n(4),s=n(14),c=n(65),f=n(21),l=n(71),d=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),m="@@iterator",h="keys",v="values",y=function(){return this};t.exports=function(t,e,n,g,x,b,A){c(n,e,g);var w,_,C,O=function(t){if(!p&&t in T)return T[t];switch(t){case h:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",S=x==v,E=!1,T=t.prototype,j=T[d]||T[m]||x&&T[x],M=j||O(x),B=x?S?O("entries"):M:void 0,F="Array"==e?T.entries||j:j;if(F&&(C=l(F.call(new t)),C!==Object.prototype&&(f(C,k,!0),r||a(C,d)||u(C,d,y))),S&&j&&j.name!==v&&(E=!0,M=function(){return j.call(this)}),r&&!A||!p&&!E&&T[d]||u(T,d,M),s[e]=M,s[k]=y,x)if(w={values:S?M:O(v),keys:b?M:O(h),entries:B},A)for(_ in w)_ in T||i(T,_,w[_]);else o(o.P+o.F*(p||E),e,w);return w}},function(t,e,n){var r=n(11),o=n(68),i=n(24),u=n(26)("IE_PROTO"),a=function(){},s="prototype",c=function(){var t,e=n(39)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(64).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),c=t.F;r--;)delete c[s][i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[s]=r(t),n=new a,a[s]=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(45),o=n(24).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(4),o=n(6),i=n(61)(!1),u=n(26)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),s=0,c=[];for(n in a)n!=u&&r(a,n)&&c.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},,function(t,e,n){var r=n(34);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e){},function(t,e,n){n(75);for(var r=n(1),o=n(5),i=n(14),u=n(2)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var c=a[s],f=r[c],l=f&&f.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,e,n){t.exports={"default":n(57),__esModule:!0}},function(t,e,n){t.exports={"default":n(58),__esModule:!0}},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(52),i=r(o),u=n(51),a=r(u),s="function"==typeof a["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof a["default"]&&t.constructor===a["default"]?"symbol":typeof t};e["default"]="function"==typeof a["default"]&&"symbol"===s(i["default"])?function(t){return"undefined"==typeof t?"undefined":s(t)}:function(t){return t&&"function"==typeof a["default"]&&t.constructor===a["default"]?"symbol":"undefined"==typeof t?"undefined":s(t)}},function(t,e,n){var r=n(3),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(76),t.exports=n(3).Object.keys},function(t,e,n){n(78),n(49),n(79),n(80),t.exports=n(3).Symbol},function(t,e,n){n(77),n(50),t.exports=n(32).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(6),o=n(46),i=n(74);t.exports=function(t){return function(e,n,u){var a,s=r(e),c=o(s.length),f=i(u,c);if(t&&n!=n){for(;c>f;)if(a=s[f++],a!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},,function(t,e,n){var r=n(12),o=n(36),i=n(20);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),s=i.f,c=0;a.length>c;)s.call(t,u=a[c++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){"use strict";var r=n(43),o=n(15),i=n(21),u={};n(5)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(12),o=n(6);t.exports=function(t,e){for(var n,i=o(t),u=r(i),a=u.length,s=0;a>s;)if(i[n=u[s++]]===e)return n}},function(t,e,n){var r=n(8),o=n(11),i=n(12);t.exports=n(7)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,s=0;a>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(20),o=n(15),i=n(6),u=n(30),a=n(4),s=n(40),c=Object.getOwnPropertyDescriptor;e.f=n(7)?c:function(t,e){if(t=i(t),e=u(e,!0),s)try{return c(t,e)}catch(n){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(6),o=n(44).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?a(t):o(r(t))}},function(t,e,n){var r=n(4),o=n(29),i=n(26)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(13),o=n(3),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(28),o=n(23);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),s=r(n),c=a.length;return s<0||s>=c?t?"":void 0:(i=a.charCodeAt(s),i<55296||i>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):i:t?a.slice(s,s+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(28),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){"use strict";var r=n(60),o=n(66),i=n(14),u=n(6);t.exports=n(42)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(29),o=n(12);n(72)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){"use strict";var r=n(73)(!0);n(42)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(4),i=n(7),u=n(13),a=n(37),s=n(35).KEY,c=n(9),f=n(27),l=n(21),d=n(16),p=n(2),m=n(32),h=n(31),v=n(67),y=n(63),g=n(48),x=n(11),b=n(6),A=n(30),w=n(15),_=n(43),C=n(70),O=n(69),k=n(8),S=n(12),E=O.f,T=k.f,j=C.f,M=r.Symbol,B=r.JSON,F=B&&B.stringify,N="prototype",L=p("_hidden"),P=p("toPrimitive"),R={}.propertyIsEnumerable,D=f("symbol-registry"),I=f("symbols"),U=f("op-symbols"),W=Object[N],z="function"==typeof M,H=r.QObject,J=!H||!H[N]||!H[N].findChild,K=i&&c(function(){return 7!=_(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(W,e);r&&delete W[e],T(t,e,n),r&&t!==W&&T(W,e,r)}:T,Y=function(t){var e=I[t]=_(M[N]);return e._k=t,e},G=z&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},q=function(t,e,n){return t===W&&q(U,e,n),x(t),e=A(e,!0),x(n),o(I,e)?(n.enumerable?(o(t,L)&&t[L][e]&&(t[L][e]=!1),n=_(n,{enumerable:w(0,!1)})):(o(t,L)||T(t,L,w(1,{})),t[L][e]=!0),K(t,e,n)):T(t,e,n)},Q=function(t,e){x(t);for(var n,r=y(e=b(e)),o=0,i=r.length;i>o;)q(t,n=r[o++],e[n]);return t},V=function(t,e){return void 0===e?_(t):Q(_(t),e)},$=function(t){var e=R.call(this,t=A(t,!0));return!(this===W&&o(I,t)&&!o(U,t))&&(!(e||!o(this,t)||!o(I,t)||o(this,L)&&this[L][t])||e)},Z=function(t,e){if(t=b(t),e=A(e,!0),t!==W||!o(I,e)||o(U,e)){var n=E(t,e);return!n||!o(I,e)||o(t,L)&&t[L][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=j(b(t)),r=[],i=0;n.length>i;)o(I,e=n[i++])||e==L||e==s||r.push(e);return r},tt=function(t){for(var e,n=t===W,r=j(n?U:b(t)),i=[],u=0;r.length>u;)!o(I,e=r[u++])||n&&!o(W,e)||i.push(I[e]);return i};z||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===W&&e.call(U,n),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),K(this,t,w(1,n))};return i&&J&&K(W,t,{configurable:!0,set:e}),Y(t)},a(M[N],"toString",function(){return this._k}),O.f=Z,k.f=q,n(44).f=C.f=X,n(20).f=$,n(36).f=tt,i&&!n(25)&&a(W,"propertyIsEnumerable",$,!0),m.f=function(t){return Y(p(t))}),u(u.G+u.W+u.F*!z,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var et=S(p.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!z,"Symbol",{"for":function(t){return o(D,t+="")?D[t]:D[t]=M(t)},keyFor:function(t){if(G(t))return v(D,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!z,"Object",{create:V,defineProperty:q,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:X,getOwnPropertySymbols:tt}),B&&u(u.S+u.F*(!z||c(function(){var t=M();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!G(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!G(e))return e}),r[1]=e,F.apply(B,r)}}}),M[N][P]||n(5)(M[N],P,M[N].valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(31)("asyncIterator")},function(t,e,n){n(31)("observable")},,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=r(o),u='\n<div class="gap">\n  <!--  -->\n</div>\n';e["default"]={mixins:[i["default"]],data:function(){return{DEFAULT_CONTENT:u}},updated:function(){}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=r(o),u='\n<div class="imageontext">\n  <div class="image-layer">\n    <img src="/static/sunset.png" alt="" />\n    <div class="text">\n        <span contenteditable="true">Lorem ipsum dolor.</span>\n    </div>\n  </div>\n</div>\n';e["default"]={mixins:[i["default"]],data:function(){return{DEFAULT_CONTENT:u}},updated:function(){}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=r(o),u='\n<div>\n  <img width="100%" src="//d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg" alt=""/>\n</div>\n';e["default"]={mixins:[i["default"]],data:function(){return{DEFAULT_CONTENT:u}},updated:function(){}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=r(o),u='\n<div class="thereimagetext">\n  <h1 contenteditable="true">BEAUTIFUL CONTENT</h1>\n  <p contenteditable="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>\n   <div class="thereimagetext-image">\n        <img src="http://img2-ak.lst.fm/i/u/300x300/6184a4e751484a3d96ab9ab669b1d311.jpg" alt="" />\n        <img src="http://wadpphoto.com/wp-content/uploads/2016/09/hd-nature-wallpapers-29_Widescreen-wallpaper-300x300.jpg" alt="" />\n        <img src="http://vcresearch.berkeley.edu/sites/default/files/news_images/FieldAwe300.jpg" alt="" />\n   </div>\n</div>\n';e["default"]={mixins:[i["default"]],data:function(){return{DEFAULT_CONTENT:u}},updated:function(){}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=r(o),u='\n\t<div class="plekan-clearfix">\n\t\t<h2 contenteditable="true" class="twocloumn-title">Schiaparelli kayıp</h2>\n      <div contenteditable="true" class="twocloumn-text">ESA, Schiaparelli’nin Mars’a önceki günkü inişi sırasında beklenenden farklı hareket ettiğini açıkladı. Kurumun gezegenlerle ilgili çalışmalarından sorumlu Andrea Accomazzo, robota ne olduğunu bilemediklerini itiraf etti.\n\n        <p>Keşif robotunu fırlatan uydudan gelen veriler, robotun, paraşütünü çok erken açtığını gösteriyor.</p>\n\n        Ayrıca robotun yüzeye iyice yaklaştığında kendisini yere oturtmaya yarayacak roketleri de beklenenden çok daha kısa süre çalıştırdığı tahmin ediliyor.\n\n        BBC Türkçe’deki habere göre ESA henüz robotun inerken parçalanıp parçalanmadığını kesin olarak belirleyemedi ama iyimser de değil. Uzmanlar, verileri incelemeye ve küçük bir ihtimal de olsa gezegen yüzeyine oturduysa diye Schiaparelli’ye sinyaller yollamaya devam ediyor. Şu anda ESA’nın bütün yapabileceği, Schiaparelli’nin inişe 1 dakika kalana kadar, kendisini fırlatan TGO adlı uyduya gönderdiği verileri taramak suretiyle anlayabilmek.\n      </div>\n\t</div>\n  ';e["default"]={mixins:[i["default"]],data:function(){return{DEFAULT_CONTENT:u}},updated:function(){}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=r(o),u='\n<div class="videoembed">\n  <div class="plekan-xs-6">\n    <iframe width="100%" height="400" src="https://www.youtube.com/embed/KLZJ8BdBEoM" frameborder="0" allowfullscreen></iframe>\n  </div>\n  <div class="plekan-xs-6">\n  <h3 contenteditable="true">Vue 2.0 is Here!</h3>\n    <p contenteditable="true">\n    Today I am thrilled to announce the official release of Vue.js 2.0: Ghost in the Shell. After 8 alphas, 8 betas and 8 rcs (a total coincidence!), Vue.js 2.0 is ready for production! The official guide has been fully updated and is available at vuejs.org/guide.\n    </p>\n\n    <p contenteditable="true">\n    Ever since the work on 2.0 started back in April, the core team has made significant contributions to API design, bug fixes, documentation and TypeScript typings (yes, vue core, vue-router and vuex 2.0 all have TypeScript typings shipped in the npm packages), and the community also provided extremely valuable feedback on API changes — a big thank you to everyone involved!\n    </p>\n  </div>\n</div>\n';e["default"]={mixins:[i["default"]],data:function(){return{DEFAULT_CONTENT:u}},updated:function(){}}},,,,,,,,,,,,,,,,,,function(t,e,n){e=t.exports=n(17)(),e.push([t.id,".twocloumn-text,.twocloumn-title{padding-left:30px}.twocloumn-text{margin-bottom:29px}","",{version:3,sources:["/./src/core/modules/twocloumn.vue"],names:[],mappings:"AAIA,iCAFE,iBAAmB,CAKpB,AAHD,gBACE,kBAAoB,CAErB",file:"twocloumn.vue",sourcesContent:["\n.twocloumn-title{\n  padding-left: 30px;\n}\n.twocloumn-text{\n  margin-bottom: 29px;\n  padding-left: 30px;\n}\n"],sourceRoot:"webpack://"}])},,function(t,e,n){e=t.exports=n(17)(),e.push([t.id,".gap{padding:10px}","",{version:3,sources:["/./src/core/modules/gap.vue"],names:[],mappings:"AACA,KAAK,YAAY,CAChB",file:"gap.vue",sourcesContent:["\n.gap{padding:10px\n}\n"],sourceRoot:"webpack://"}])},function(t,e,n){e=t.exports=n(17)(),e.push([t.id,".thereimagetext h1,.thereimagetext p{text-align:center}.thereimagetext p{font-style:italic}.thereimagetext .thereimagetext-image{margin-top:40px;text-align:center}.thereimagetext .thereimagetext-image img{width:150px;margin-left:10px;padding:50;border-radius:50%}","",{version:3,sources:["/./src/core/modules/thereimagetext.vue"],names:[],mappings:"AACA,qCAAqC,iBAAiB,CACrD,AACD,kBAAkB,iBAAiB,CAClC,AACD,sCAAsC,gBAAgB,iBAAiB,CACtE,AACD,0CAA0C,YAAY,iBAAiB,WAAW,iBAAiB,CAClG",file:"thereimagetext.vue",sourcesContent:["\n.thereimagetext h1,.thereimagetext p{text-align:center\n}\n.thereimagetext p{font-style:italic\n}\n.thereimagetext .thereimagetext-image{margin-top:40px;text-align:center\n}\n.thereimagetext .thereimagetext-image img{width:150px;margin-left:10px;padding:50;border-radius:50%\n}\n"],sourceRoot:"webpack://"}])},function(t,e,n){e=t.exports=n(17)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"videoembed.vue",sourceRoot:"webpack://"}])},,function(t,e,n){e=t.exports=n(17)(),e.push([t.id,".imageontext{position:relative}.imageontext .image-layer{width:100%}.imageontext img{width:100%;display:block}.imageontext .text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;background-color:rgba(0,0,0,.5);width:100%;text-align:center;font-weight:100!important;padding:4px;font-size:40px}","",{version:3,sources:["/./src/core/modules/imageontext.vue"],names:[],mappings:"AACA,aAAa,iBAAiB,CAC7B,AACD,0BAA0B,UAAU,CACnC,AACD,iBAAiB,WAAW,aAAa,CACxC,AACD,mBAAmB,kBAAkB,QAAQ,SAAS,+BAAgC,WAAW,gCAAiC,WAAW,kBAAkB,0BAA2B,YAAY,cAAc,CACnN",file:"imageontext.vue",sourcesContent:["\n.imageontext{position:relative\n}\n.imageontext .image-layer{width:100%\n}\n.imageontext img{width:100%;display:block\n}\n.imageontext .text{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:#FFF;background-color:rgba(0,0,0,0.5);width:100%;text-align:center;font-weight:100 !important;padding:4px;font-size:40px\n}\n"],sourceRoot:"webpack://"}])},,,,,,,,,,,function(t,e,n){var r,o;n(156),r=n(95);var i=n(146);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,o;n(160),r=n(96);var i=n(150);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,o;r=n(97);var i=n(143);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,o;n(157),r=n(98);var i=n(147);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,o;n(154),r=n(99);var i=n(144);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,n){var r,o;n(158),r=n(100);var i=n(148);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},,,function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"twocloumn",domProps:{innerHTML:_s(content)}})},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"twocloumn",domProps:{innerHTML:_s(content)}})},staticRenderFns:[]}},,function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"gap",domProps:{innerHTML:_s(content)}})},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"thereimagetext",domProps:{innerHTML:_s(content)}})},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"videoembed",domProps:{innerHTML:_s(content)}})},staticRenderFns:[]}},,function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"imageontext",domProps:{innerHTML:_s(content)}})},staticRenderFns:[]}},,,,function(t,e,n){var r=n(118);"string"==typeof r&&(r=[[t.id,r,""]]);n(18)(r,{});r.locals&&(t.exports=r.locals)},,function(t,e,n){var r=n(120);"string"==typeof r&&(r=[[t.id,r,""]]);n(18)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(121);"string"==typeof r&&(r=[[t.id,r,""]]);n(18)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(122);"string"==typeof r&&(r=[[t.id,r,""]]);n(18)(r,{});r.locals&&(t.exports=r.locals)},,function(t,e,n){var r=n(124);"string"==typeof r&&(r=[[t.id,r,""]]);n(18)(r,{});r.locals&&(t.exports=r.locals)}])});
//# sourceMappingURL=plekanmodules.js.map