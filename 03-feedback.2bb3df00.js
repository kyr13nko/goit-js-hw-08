!function(){var e,t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var r="Expected a function",a=0/0,f=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,m=s||v||Function("return this")(),g=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return m.Date.now()};function S(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":o(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==g.call(t))return a;if(S(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var i=l.test(e);return i||c.test(e)?d(e.slice(2),i?2:8):u.test(e)?a:+e}i=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return S(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,a,f,u,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw TypeError(r);function m(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function g(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||s&&i>=a}function O(){var e,n,i,o=b();if(g(o))return T(o);u=setTimeout(O,(e=o-l,n=o-c,i=t-e,s?y(i,a-n):i))}function T(e){return(u=void 0,v&&i)?m(e):(i=o=void 0,f)}function h(){var e,n=b(),r=g(n);if(i=arguments,o=this,l=n,r){if(void 0===u)return c=e=l,u=setTimeout(O,t),d?m(e):f;if(s)return u=setTimeout(O,t),m(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=j(t)||0,S(n)&&(d=!!n.leading,a=(s="maxWait"in n)?p(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=o=u=void 0},h.flush=function(){return void 0===u?f:T(b())},h}(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),T="feedback-form-state";O.addEventListener("submit",function(e){e.preventDefault(),console.log(h),localStorage.removeItem(T),e.currentTarget.reset()}),O.addEventListener("input",((t=i)&&t.__esModule?t.default:t)(function(e){h[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(h))},500));var h=JSON.parse(localStorage.getItem(T))||{};(e=JSON.parse(localStorage.getItem(T)))&&(O.email.value=e.email,O.message.value=e.message)}();
//# sourceMappingURL=03-feedback.2bb3df00.js.map
