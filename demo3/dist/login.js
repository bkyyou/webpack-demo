(()=>{var t={2941:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},7991:t=>{t.exports=function(t,r,e){if(!(t instanceof r))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},3223:(t,r,e)=>{var n=e(3711);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},3986:(t,r,e)=>{var n=e(7632),o=e(4e3),i=e(3766),c=function(t){return function(r,e,c){var u,a=n(r),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},9729:(t,r,e)=>{var n=e(9135),o=e(8904),i=e(9146),c=e(4e3),u=e(194),a=[].push,f=function(t){var r=1==t,e=2==t,f=3==t,s=4==t,p=6==t,l=7==t,v=5==t||p;return function(h,d,y,g){for(var x,m,b=i(h),w=o(b),j=n(d,y,3),S=c(w.length),O=0,E=g||u,T=r?E(h,S):e||l?E(h,0):void 0;S>O;O++)if((v||O in w)&&(m=j(x=w[O],O,b),t))if(r)T[O]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return O;case 2:a.call(T,x)}else switch(t){case 4:return!1;case 7:a.call(T,x)}return p?-1:f||s?s:T}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},5269:(t,r,e)=>{var n=e(8237),o=e(9792),i=e(7794),c=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[c]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},194:(t,r,e)=>{var n=e(3711),o=e(3127),i=e(9792)("species");t.exports=function(t,r){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?n(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},6029:(t,r,e)=>{var n=e(9792)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[n]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},1668:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},6405:(t,r,e)=>{var n=e(112),o=e(1668),i=e(9792)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?e:c?o(r):"Object"==(n=o(r))&&"function"==typeof r.callee?"Arguments":n}},1085:(t,r,e)=>{var n=e(7619),o=e(9270),i=e(5303),c=e(9329);t.exports=function(t,r){for(var e=o(r),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];n(t,s)||u(t,s,a(r,s))}}},7302:(t,r,e)=>{var n=e(6373),o=e(9329),i=e(9856);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9856:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6373:(t,r,e)=>{var n=e(8237);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},9017:(t,r,e)=>{var n=e(9422),o=e(3711),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},5915:(t,r,e)=>{var n=e(8678);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},1177:(t,r,e)=>{var n=e(1668),o=e(9422);t.exports="process"==n(o.process)},892:(t,r,e)=>{var n=e(8678);t.exports=/web0s(?!.*chrome)/i.test(n)},8678:(t,r,e)=>{var n=e(6065);t.exports=n("navigator","userAgent")||""},7794:(t,r,e)=>{var n,o,i=e(9422),c=e(8678),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(n=f.split("."))[0]+n[1]:c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},4013:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8648:(t,r,e)=>{var n=e(9422),o=e(5303).f,i=e(7302),c=e(2502),u=e(3463),a=e(1085),f=e(767);t.exports=function(t,r){var e,s,p,l,v,h=t.target,d=t.global,y=t.stat;if(e=d?n:y?n[h]||u(h,{}):(n[h]||{}).prototype)for(s in r){if(l=r[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(d?s:h+(y?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(e,s,l,t)}}},8237:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9135:(t,r,e)=>{var n=e(2941);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},6065:(t,r,e)=>{var n=e(6697),o=e(9422),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},3478:(t,r,e)=>{var n=e(6405),o=e(2583),i=e(9792)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},9422:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},7619:t=>{var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},8604:t=>{t.exports={}},349:(t,r,e)=>{var n=e(9422);t.exports=function(t,r){var e=n.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,r))}},7026:(t,r,e)=>{var n=e(6065);t.exports=n("document","documentElement")},2365:(t,r,e)=>{var n=e(6373),o=e(8237),i=e(9017);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8904:(t,r,e)=>{var n=e(8237),o=e(1668),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},8962:(t,r,e)=>{var n=e(63),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},4203:(t,r,e)=>{var n,o,i,c=e(8515),u=e(9422),a=e(3711),f=e(7302),s=e(7619),p=e(63),l=e(7968),v=e(8604),h=u.WeakMap;if(c){var d=p.state||(p.state=new h),y=d.get,g=d.has,x=d.set;n=function(t,r){return r.facade=t,x.call(d,t,r),r},o=function(t){return y.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var m=l("state");v[m]=!0,n=function(t,r){return r.facade=t,f(t,m,r),r},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!a(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7751:(t,r,e)=>{var n=e(9792),o=e(2583),i=n("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},3127:(t,r,e)=>{var n=e(1668);t.exports=Array.isArray||function(t){return"Array"==n(t)}},767:(t,r,e)=>{var n=e(8237),o=/#|\.prototype\./,i=function(t,r){var e=u[c(t)];return e==f||e!=a&&("function"==typeof r?n(r):!!r)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},3711:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},2386:t=>{t.exports=!1},1049:(t,r,e)=>{var n=e(3223),o=e(7751),i=e(4e3),c=e(9135),u=e(3478),a=e(4470),f=function(t,r){this.stopped=t,this.result=r};t.exports=function(t,r,e){var s,p,l,v,h,d,y,g=e&&e.that,x=!(!e||!e.AS_ENTRIES),m=!(!e||!e.IS_ITERATOR),b=!(!e||!e.INTERRUPTED),w=c(r,g,1+x+b),j=function(t){return s&&a(s),new f(!0,t)},S=function(t){return x?(n(t),b?w(t[0],t[1],j):w(t[0],t[1])):b?w(t,j):w(t)};if(m)s=t;else{if("function"!=typeof(p=u(t)))throw TypeError("Target is not iterable");if(o(p)){for(l=0,v=i(t.length);v>l;l++)if((h=S(t[l]))&&h instanceof f)return h;return new f(!1)}s=p.call(t)}for(d=s.next;!(y=d.call(s)).done;){try{h=S(y.value)}catch(t){throw a(s),t}if("object"==typeof h&&h&&h instanceof f)return h}return new f(!1)}},4470:(t,r,e)=>{var n=e(3223);t.exports=function(t){var r=t.return;if(void 0!==r)return n(r.call(t)).value}},2583:t=>{t.exports={}},7370:(t,r,e)=>{var n,o,i,c,u,a,f,s,p=e(9422),l=e(5303).f,v=e(4408).set,h=e(5915),d=e(892),y=e(1177),g=p.MutationObserver||p.WebKitMutationObserver,x=p.document,m=p.process,b=p.Promise,w=l(p,"queueMicrotask"),j=w&&w.value;j||(n=function(){var t,r;for(y&&(t=m.domain)&&t.exit();o;){r=o.fn,o=o.next;try{r()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},h||y||d||!g||!x?b&&b.resolve?(f=b.resolve(void 0),s=f.then,c=function(){s.call(f,n)}):c=y?function(){m.nextTick(n)}:function(){v.call(p,n)}:(u=!0,a=x.createTextNode(""),new g(n).observe(a,{characterData:!0}),c=function(){a.data=u=!u})),t.exports=j||function(t){var r={fn:t,next:void 0};i&&(i.next=r),o||(o=r,c()),i=r}},4963:(t,r,e)=>{var n=e(9422);t.exports=n.Promise},7449:(t,r,e)=>{var n=e(1177),o=e(7794),i=e(8237);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(n?38===o:o>37&&o<41)}))},8515:(t,r,e)=>{var n=e(9422),o=e(8962),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},5936:(t,r,e)=>{"use strict";var n=e(2941),o=function(t){var r,e;this.promise=new t((function(t,n){if(void 0!==r||void 0!==e)throw TypeError("Bad Promise constructor");r=t,e=n})),this.resolve=n(r),this.reject=n(e)};t.exports.f=function(t){return new o(t)}},9329:(t,r,e)=>{var n=e(6373),o=e(2365),i=e(3223),c=e(2602),u=Object.defineProperty;r.f=n?u:function(t,r,e){if(i(t),r=c(r,!0),i(e),o)try{return u(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},5303:(t,r,e)=>{var n=e(6373),o=e(7981),i=e(9856),c=e(7632),u=e(2602),a=e(7619),f=e(2365),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(t,r){if(t=c(t),r=u(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},3595:(t,r,e)=>{var n=e(8654),o=e(4013).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},263:(t,r)=>{r.f=Object.getOwnPropertySymbols},8654:(t,r,e)=>{var n=e(7619),o=e(7632),i=e(3986).indexOf,c=e(8604);t.exports=function(t,r){var e,u=o(t),a=0,f=[];for(e in u)!n(c,e)&&n(u,e)&&f.push(e);for(;r.length>a;)n(u,e=r[a++])&&(~i(f,e)||f.push(e));return f}},7981:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},2075:(t,r,e)=>{"use strict";var n=e(112),o=e(6405);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},9270:(t,r,e)=>{var n=e(6065),o=e(3595),i=e(263),c=e(3223);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(c(t)),e=i.f;return e?r.concat(e(t)):r}},6697:(t,r,e)=>{var n=e(9422);t.exports=n},8349:t=>{t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},7113:(t,r,e)=>{var n=e(3223),o=e(3711),i=e(5936);t.exports=function(t,r){if(n(t),o(r)&&r.constructor===t)return r;var e=i.f(t);return(0,e.resolve)(r),e.promise}},1417:(t,r,e)=>{var n=e(2502);t.exports=function(t,r,e){for(var o in r)n(t,o,r[o],e);return t}},2502:(t,r,e)=>{var n=e(9422),o=e(7302),i=e(7619),c=e(3463),u=e(8962),a=e(4203),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,r,e,u){var a,f=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(a=s(e)).source||(a.source=p.join("string"==typeof r?r:""))),t!==n?(f?!v&&t[r]&&(l=!0):delete t[r],l?t[r]=e:o(t,r,e)):l?t[r]=e:c(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},7084:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3463:(t,r,e)=>{var n=e(9422),o=e(7302);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},6084:(t,r,e)=>{"use strict";var n=e(6065),o=e(9329),i=e(9792),c=e(6373),u=i("species");t.exports=function(t){var r=n(t),e=o.f;c&&r&&!r[u]&&e(r,u,{configurable:!0,get:function(){return this}})}},4341:(t,r,e)=>{var n=e(9329).f,o=e(7619),i=e(9792)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},7968:(t,r,e)=>{var n=e(1891),o=e(7524),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},63:(t,r,e)=>{var n=e(9422),o=e(3463),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},1891:(t,r,e)=>{var n=e(2386),o=e(63);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.9.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6590:(t,r,e)=>{var n=e(3223),o=e(2941),i=e(9792)("species");t.exports=function(t,r){var e,c=n(t).constructor;return void 0===c||null==(e=n(c)[i])?r:o(e)}},4408:(t,r,e)=>{var n,o,i,c=e(9422),u=e(8237),a=e(9135),f=e(7026),s=e(9017),p=e(5915),l=e(1177),v=c.location,h=c.setImmediate,d=c.clearImmediate,y=c.process,g=c.MessageChannel,x=c.Dispatch,m=0,b={},w="onreadystatechange",j=function(t){if(b.hasOwnProperty(t)){var r=b[t];delete b[t],r()}},S=function(t){return function(){j(t)}},O=function(t){j(t.data)},E=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var r=[],e=1;arguments.length>e;)r.push(arguments[e++]);return b[++m]=function(){("function"==typeof t?t:Function(t)).apply(void 0,r)},n(m),m},d=function(t){delete b[t]},l?n=function(t){y.nextTick(S(t))}:x&&x.now?n=function(t){x.now(S(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=O,n=a(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&v&&"file:"!==v.protocol&&!u(E)?(n=E,c.addEventListener("message",O,!1)):n=w in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),j(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:h,clear:d}},3766:(t,r,e)=>{var n=e(8987),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},7632:(t,r,e)=>{var n=e(8904),o=e(7084);t.exports=function(t){return n(o(t))}},8987:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},4e3:(t,r,e)=>{var n=e(8987),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},9146:(t,r,e)=>{var n=e(7084);t.exports=function(t){return Object(n(t))}},2602:(t,r,e)=>{var n=e(3711);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},112:(t,r,e)=>{var n={};n[e(9792)("toStringTag")]="z",t.exports="[object z]"===String(n)},7524:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},8179:(t,r,e)=>{var n=e(7449);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},9792:(t,r,e)=>{var n=e(9422),o=e(1891),i=e(7619),c=e(7524),u=e(7449),a=e(8179),f=o("wks"),s=n.Symbol,p=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},4820:(t,r,e)=>{"use strict";var n=e(8648),o=e(9729).map;n({target:"Array",proto:!0,forced:!e(5269)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},3735:(t,r,e)=>{var n=e(112),o=e(2502),i=e(2075);n||o(Object.prototype,"toString",i,{unsafe:!0})},5826:(t,r,e)=>{"use strict";var n,o,i,c,u=e(8648),a=e(2386),f=e(9422),s=e(6065),p=e(4963),l=e(2502),v=e(1417),h=e(4341),d=e(6084),y=e(3711),g=e(2941),x=e(7991),m=e(8962),b=e(1049),w=e(6029),j=e(6590),S=e(4408).set,O=e(7370),E=e(7113),T=e(349),P=e(5936),M=e(8349),I=e(4203),A=e(767),k=e(9792),_=e(1177),F=e(7794),N=k("species"),R="Promise",C=I.get,L=I.set,D=I.getterFor(R),z=p,U=f.TypeError,W=f.document,q=f.process,B=s("fetch"),G=P.f,K=G,H=!!(W&&W.createEvent&&f.dispatchEvent),V="function"==typeof PromiseRejectionEvent,Y="unhandledrejection",J=A(R,(function(){if(!(m(z)!==String(z))){if(66===F)return!0;if(!_&&!V)return!0}if(a&&!z.prototype.finally)return!0;if(F>=51&&/native code/.test(z))return!1;var t=z.resolve(1),r=function(t){t((function(){}),(function(){}))};return(t.constructor={})[N]=r,!(t.then((function(){}))instanceof r)})),Q=J||!w((function(t){z.all(t).catch((function(){}))})),X=function(t){var r;return!(!y(t)||"function"!=typeof(r=t.then))&&r},Z=function(t,r){if(!t.notified){t.notified=!0;var e=t.reactions;O((function(){for(var n=t.value,o=1==t.state,i=0;e.length>i;){var c,u,a,f=e[i++],s=o?f.ok:f.fail,p=f.resolve,l=f.reject,v=f.domain;try{s?(o||(2===t.rejection&&et(t),t.rejection=1),!0===s?c=n:(v&&v.enter(),c=s(n),v&&(v.exit(),a=!0)),c===f.promise?l(U("Promise-chain cycle")):(u=X(c))?u.call(c,p,l):p(c)):l(n)}catch(t){v&&!a&&v.exit(),l(t)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&tt(t)}))}},$=function(t,r,e){var n,o;H?((n=W.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),f.dispatchEvent(n)):n={promise:r,reason:e},!V&&(o=f["on"+t])?o(n):t===Y&&T("Unhandled promise rejection",e)},tt=function(t){S.call(f,(function(){var r,e=t.facade,n=t.value;if(rt(t)&&(r=M((function(){_?q.emit("unhandledRejection",n,e):$(Y,e,n)})),t.rejection=_||rt(t)?2:1,r.error))throw r.value}))},rt=function(t){return 1!==t.rejection&&!t.parent},et=function(t){S.call(f,(function(){var r=t.facade;_?q.emit("rejectionHandled",r):$("rejectionhandled",r,t.value)}))},nt=function(t,r,e){return function(n){t(r,n,e)}},ot=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,Z(t,!0))},it=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw U("Promise can't be resolved itself");var n=X(r);n?O((function(){var e={done:!1};try{n.call(r,nt(it,e,t),nt(ot,e,t))}catch(r){ot(e,r,t)}})):(t.value=r,t.state=1,Z(t,!1))}catch(r){ot({done:!1},r,t)}}};J&&(z=function(t){x(this,z,R),g(t),n.call(this);var r=C(this);try{t(nt(it,r),nt(ot,r))}catch(t){ot(r,t)}},(n=function(t){L(this,{type:R,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(z.prototype,{then:function(t,r){var e=D(this),n=G(j(this,z));return n.ok="function"!=typeof t||t,n.fail="function"==typeof r&&r,n.domain=_?q.domain:void 0,e.parent=!0,e.reactions.push(n),0!=e.state&&Z(e,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,r=C(t);this.promise=t,this.resolve=nt(it,r),this.reject=nt(ot,r)},P.f=G=function(t){return t===z||t===i?new o(t):K(t)},a||"function"!=typeof p||(c=p.prototype.then,l(p.prototype,"then",(function(t,r){var e=this;return new z((function(t,r){c.call(e,t,r)})).then(t,r)}),{unsafe:!0}),"function"==typeof B&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(z,B.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:J},{Promise:z}),h(z,R,!1,!0),d(R),i=s(R),u({target:R,stat:!0,forced:J},{reject:function(t){var r=G(this);return r.reject.call(void 0,t),r.promise}}),u({target:R,stat:!0,forced:a||J},{resolve:function(t){return E(a&&this===i?z:this,t)}}),u({target:R,stat:!0,forced:Q},{all:function(t){var r=this,e=G(r),n=e.resolve,o=e.reject,i=M((function(){var e=g(r.resolve),i=[],c=0,u=1;b(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,e.call(r,t).then((function(t){f||(f=!0,i[a]=t,--u||n(i))}),o)})),--u||n(i)}));return i.error&&o(i.value),e.promise},race:function(t){var r=this,e=G(r),n=e.reject,o=M((function(){var o=g(r.resolve);b(t,(function(t){o.call(r,t).then(e.resolve,n)}))}));return o.error&&n(o.value),e.promise}})},5999:(t,r,e)=>{var n=e(8648),o=e(9422),i=e(8678),c=[].slice,u=function(t){return function(r,e){var n=arguments.length>2,o=n?c.call(arguments,2):void 0;return t(n?function(){("function"==typeof r?r:Function(r)).apply(this,o)}:r,e)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})}},r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";e(5826),e(3735),e(5999),e(4820);console.log("login.js"),new Promise((function(t){setTimeout((function(){t(1111)}),1e3)})).then((function(t){console.log(t)}));var t=[1,2,3].map((function(t){return console.log("val",t),t}));console.log("arr",t)})()})();