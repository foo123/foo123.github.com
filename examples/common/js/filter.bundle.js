/**
*
*   Classy.js
*   @version: 0.9.3
*   @built on 2016-07-19 17:09:27
*
*   Object-Oriented micro-framework for JavaScript
*   https://github.com/foo123/classy.js
*
**/!function(e,n,i){"use strict";"object"==typeof module&&module.exports?(module.$deps=module.$deps||{})&&(module.exports=module.$deps[n]=i.call(e)):"function"==typeof define&&define.amd&&"function"==typeof require&&"function"==typeof require.specified&&require.specified(n)?define(n,["module"],function(n){return i.moduleUri=n.uri,i.call(e)}):n in e||(e[n]=i.call(e)||1)&&"function"==typeof define&&define.amd&&define(function(){return e[n]})}(this,"Classy",function(){"use strict";var e=void 0,n="constructor",i="prototype",t="__proto__",r="__static__",l="__private__",u="$super",a="$static",o="$latestatic",f="$class",c=2,s=4,b=8,d=256,m=Object,p=m[i],v=Function,g=v[i],h=String,y=Number,x=RegExp,w=Array,j=p.toString,E=(g.call.bind(g.toString),"hasOwnProperty"),_="propertyIsEnumerable",q=m.keys,I=m.defineProperty,$=function(e){return typeof e},A=function(e){throw new TypeError(e)},P=2,S=3,T=4,C=8,M=9,N=16,O=32,R=64,F=128,L=256,U=512,V=1024,k={"[object Array]":N,"[object RegExp]":F,"[object Number]":P,"[object String]":C,"[object Function]":R,"[object Object]":O},B=function(n){var i;return null===n?L:!0===n||!1===n?T:e===n?U:(i=j.call(n),i=k[i]||V,P===i||n instanceof y?isNaN(n)?S:P:C===i||n instanceof h?1===n.length?M:C:N===i||n instanceof w?N:F===i||n instanceof x?F:R===i||n instanceof v?R:O===i?O:V)},D=function(e,n){var i,t=n.length,r=[].concat(e);for(i=0;t>i;i++)-1<r.indexOf(n[i])||r.push(n[i]);return r},z=function(e,n){O!==B(e)&&A("bad desc");var i={};if(e[E]("enumerable")&&(i.enumerable=!!n.enumerable),e[E]("configurable")&&(i.configurable=!!n.configurable),e[E]("value")&&(i.value=n.value),e[E]("writable")&&(i.writable=!!e.writable),e[E]("get")){var t=e.get;R!==B(t)&&"undefined"!==t&&A("bad get"),i.get=t}if(e[E]("set")){var r=e.set;R!==B(r)&&"undefined"!==r&&A("bad set"),i.set=r}return("get"in i||"set"in i)&&("value"in i||"writable"in i)&&A("identity-confused descriptor"),i},G=m.defineProperties||function(e,n){"object"===$(e)&&null!==e||A("bad obj"),n=m(n);for(var i=q(n),t=[],r=0;r<i.length;r++)t.push([i[r],z(n[i[r]],e)]);for(var r=0;r<t.length;r++)I(e,t[r][0],t[r][1]);return e},H=function(){},J=m.create||function(e,n){var r,l=function(){};return l[i]=e,r=new l,r[t]=e,"object"===$(n)&&G(r,n),r},K=function(){var e,n,i,t,r,l,u,a=arguments;for(n=a[0]||{},e=a.length,l=1;e>l;l++)if(i=a[l],O===B(i))for(r in i)i[E](r)&&i[_](r)&&(t=i[r],u=B(t),P&u?n[r]=0+t:(C|N)&u?n[r]=t.slice(0):n[r]=t);return n},Q=function(e,i,t){var r,l,u=!!i;if(u||t)if(r={},i=u?i+"$":i,t&&R===B(t))for(l in e)e[E](l)&&(n!==l?(u&&R===B(e[l])&&(r[i+l]=e[l]),r[t(l,e[l])]=e[l]):r[l]=e[l]);else for(l in e)e[E](l)&&(n!==l?(u&&R===B(e[l])&&(r[i+l]=e[l]),t&&l in t?r[t[l]]=e[l]:r[l]=e[l]):r[l]=e[l]);else r=e;return r},W=function(e){var n=e[u]||H,i=e[u+"v"]||H,t=null;return[function(i,r,l,u,a,o,f,c,s,b,d){var m,p;return t===i?m=n.call(this,i,r,l,u,a,o,f,c,s,b,d):(p=e[i])&&(t=i,m=p.call(this,r,l,u,a,o,f,c,s,b,d),t=null),m},function(n,r){var l,u;return t===n?l=i.call(this,n,r):(u=e[n])&&(t=n,l=r&&r.length?u.apply(this,r):u.call(this),t=null),l}]},X=function(e,n){return this instanceof X?(this.factory=e,void(this.qualifier=(P===B(n)?n:0)|c)):new X(e,n)},Y=function(e,n){return this instanceof Y?(this.prop=e,void(this.qualifier=(P===B(n)?n:0)|c)):new Y(e,n)},Z=function(t,c,p,v){t=t||m,c=c||{};var g,h,y,x,w,j,_,I,$,A,S=t[a]||null,T=t[o]||{},M=t[i],F=null,L=K({},T),U=null,V={};c[E](n)||(c[n]=function(){}),g=c[n],c[E](l)&&(V=c[l]||{},delete c[l]),c[E](r)&&(F=c[r],U=q(F),delete c[r]);for($ in c)if(c[E]($)){if(A=c[$],A instanceof X){if(b&A.qualifier){d&A.qualifier?L[$]=A:((F=F||{})[$]=A.factory(t,V,g),(U=U||[]).push($)),delete c[$];continue}if(s&A.qualifier){V[$]=A,delete c[$];continue}A=c[$]=A.factory(M,V,g)}R===B(A)&&(A[u]=M[$]||H)}for($ in V)V[E]($)&&(A=V[$],A instanceof X&&(A=V[$]=A.factory(M,V,g)),R!==B(A)&&delete V[$]);if(g[i]=Q(J(M),p,v),g[i]=K(g[i],c),h=W(M),w={},w[f]=w[n]={value:g,enumerable:!1,writable:!0,configurable:!0},w[u]={value:h[0],enumerable:!1,writable:!0,configurable:!0},w[u+"v"]={value:h[1],enumerable:!1,writable:!0,configurable:!0},G(g[i],w),w={},S||U)for(S=D(S||[],U||[]),x=S.length,y=0;x>y;y++){if(j=S[y],_=null,F&&e!==F[j]){if((A=F[j])instanceof X){if((b|d)&A.qualifier){L[j]=A;continue}_=A.factory(t,V,g)}else{if(L[E](j))continue;_=F[j]}R===B(_)&&(_[u]=t[j]||H)}else e!==t[j]&&(I=B(t[j]),_=O===I?K(null,t[j]):(C|N)&I?t[j].slice(0):P&I?0+t[j]:t[j]);w[j]={value:_,enumerable:!1,writable:!0,configurable:!0}}for(j in L)L[E](j)&&(_=L[j].factory(t,V,g),w[j]={value:_,enumerable:!1,writable:!0,configurable:!0});return w[a]={value:S,enumerable:!1,writable:!0,configurable:!0},w[o]={value:L,enumerable:!1,writable:!0,configurable:!0},w[u]={value:t,enumerable:!1,writable:!0,configurable:!0},G(g,w),g},ee=K,ne=K,ie=function(n){var t,r,l,c;if(R===B(n)){if(u in n&&(n[u]=e),f in n&&(n[f]=e),o in n&&(n[o]=e),a in n){for(l=n[a],t=0,r=l.length;r>t;t++)c=l[t],c in n&&(R===B(n[c])&&n[c][u]&&(n[c][u]=e),n[c]=e);n[a]=e}l=n[i];for(c in l)R===B(l[c])&&(l[c][u]&&(l[c][u]=e),l[c]=e);l[u]=e,l[u+"v"]=e}},te=function(){var e=arguments,n=e.length,t=null;if(b===e[0])return e[1]||{};if(n>=2){var r=B(e[0]);r=R===r?{Extends:e[0]}:O===r?e[0]:{Extends:m};var l,u,a=e[1]||{},o={},f=r[E]("Extends")?r.Extends:r[E]("extends")?r["extends"]:m,c=r[E]("Implements")?r.Implements:r[E]("implements")?r["implements"]:null,s=r[E]("Mixin")?r.Mixin:r[E]("mixin")?r.mixin:null,d=null;if(c=c?[].concat(c):null,s=s?[].concat(s):null)for(l=0,u=s.length;u>l;l++)O===B(s[l])?s[l][E]("mixin")&&s[l].mixin&&s[l].mixin[i]&&(d=Q(s[l].mixin[i],s[l].namespace||null,s[l].as||null),o=ne(o,d)):s[l][i]&&(d=s[l][i],o=ne(o,d));if(c)for(l=0,u=c.length;u>l;l++)O===B(c[l])?c[l][E]("implements")&&c[l]["implements"]&&c[l]["implements"][i]&&(d=Q(c[l]["implements"][i],c[l].namespace||null,c[l].as||null),o=ee(o,d)):c[l][i]&&(d=c[l][i],o=ee(o,d));t=O===B(f)?Z(f["extends"]||m,K(o,a),f.namespace||null,f.as||null):Z(f,K(o,a))}else t=Z(m,e[0]);return t},re={VERSION:"0.9.3",PUBLIC:c,STATIC:b,LATE:d,PRIVATE:s,Type:B,Create:J,Merge:K,Alias:Q,Implements:ee,Mixin:ne,Extends:Z,Dispose:ie,Method:X,Prop:Y,Class:te};return re});
/**
*
*   Asynchronous.js
*   @version: 0.5.1
*
*   Simple JavaScript class to manage asynchronous, parallel, linear, sequential and interleaved tasks
*   https://github.com/foo123/asynchronous.js
*
**/
!function(n,e,t){"use strict";"undefined"!=typeof Components&&"object"==typeof Components.classes&&"object"==typeof Components.classesByID&&Components.utils&&"function"==typeof Components.utils["import"]?(n.$deps=n.$deps||{})&&(n.EXPORTED_SYMBOLS=[e])&&(n[e]=n.$deps[e]=t.call(n)):"object"==typeof module&&module.exports?(module.$deps=module.$deps||{})&&(module.exports=module.$deps[e]=t.call(n)):"undefined"!=typeof System&&"function"==typeof System.register&&"function"==typeof System["import"]?System.register(e,[],function(r){r(e,t.call(n))}):"function"==typeof define&&define.amd&&"function"==typeof require&&"function"==typeof require.specified&&require.specified(e)?define(e,["module"],function(e){return t.moduleUri=e.uri,t.call(n)}):e in n||(n[e]=t.call(n)||1)&&"function"==typeof define&&define.amd&&define(function(){return n[e]})}(this,"Asynchronous",function n(e){"use strict";function t(n){var e,t=[];if(n)for(e in n)n[c](e)&&t.push(e+"="+(!0===n[e]||1===n[e]?"yes":!1===n[e]||0===n[e]?"no":n[e]));return t.join(",")}function r(n,e){n.$runmode=M,n.$running=!1}function o(n,e){var t,r=n,o=r.$queue;if(r.$runmode=x,o){for(;o.length&&(!o[0]||!o[0].canRun());)o.shift();o.length?(r.$running=!0,t=o.shift(),e?t.runWithArgs(e):t.run(),t.complete()):r.$running=!1}}function i(n,e){var t,r=n,o=r.$queue,s=0;if(r.$runmode=R,o&&o.length){for(r.$running=!0;s<o.length;)t=o[s],t&&t.canRun()?(e?t.runWithArgs(e):t.run(),t.isFinished()?(o.shift(),t.complete()):s++):o.shift();r.$running=!1,r.$timer=N(v(i,r),r.$interval)}}function s(n,e){var t,r=n,o=r.$queue;r.$runmode=O,o&&o.length&&(t=o[0],t&&t.canRun()?(r.$running=!0,e?t.runWithArgs(e):t.run(),t.isFinished()&&(o.shift(),t.complete())):o.shift(),r.$running=!1,r.$timer=N(v(s,r),r.$interval))}var u,l="prototype",c="hasOwnProperty",a=Object,f=Array,p=Function,d=p[l],h=a[l],m=f[l],$=(JSON.parse,JSON.stringify),g=function(){},v=function(n,e){return function(){return n(e)}},w=d.call.bind(m.slice),y=h.toString,b=function(n){return"function"==typeof n},S=function(n,e){return n instanceof e},N=setTimeout,k=clearTimeout,j=e,E=0,T=1,q=2,W=60,A=0,R=1,x=2,M=3,O=4,C="undefined"!=typeof Components&&"object"==typeof Components.classes&&"object"==typeof Components.classesByID&&Components.utils&&"function"==typeof Components.utils["import"],L="undefined"!=typeof global&&"[object global]"===y.call(global),I=L&&"undefined"!=typeof process.send,U=!C&&!L&&"undefined"!=typeof SharedWorkerGlobalScope&&"function"==typeof importScripts,B=!C&&!L&&"undefined"!=typeof WorkerGlobalScope&&"function"==typeof importScripts&&navigator instanceof WorkerNavigator,D=!(C||L||B||U||"undefined"==typeof navigator||"undefined"==typeof document),F=(D&&!!window.opener,D&&window.self!==window.top,"function"==typeof define&&define.amd),P=L||"function"==typeof Worker||"function"==typeof SharedWorker,_=L?this:U||B?self||this:window||this,z=L?module.$deps:U||B?self||this:window||this,G=(L?global:U||B?self||this:window||this,I||U||B),J=I&&0===process.listenerCount("message")||U&&!_.onconnect||B&&!_.onmessage,V=J?function un(n){un.handler&&un.handler(I?n:n.data)}:g,K=null,Q={},X=(L?require("os").cpus().length:4,L?null:"undefined"!=typeof _.webkitURL?_.webkitURL:"undefined"!=typeof _.URL?_.URL:null),Y=function(n,e){return n&&X?X.createObjectURL(new Blob(n.push?n:[n],e||{type:"text/javascript"})):n},H=function ln(n){var e;return L?{file:__filename,path:__dirname}:U||B?{file:e=self.location.href,path:e.split("/").slice(0,-1).join("/")}:F&&n?{file:e=n,path:e.split("/").slice(0,-1).join("/")}:D&&(e=document.getElementsByTagName("script"))&&e.length?(ln.link||(ln.link=document.createElement("a")),ln.link.href=e[e.length-1].src,e=ln.link.href,{file:e,path:e.split("/").slice(0,-1).join("/")}):{path:null,file:null}},Z=H(n.moduleUri),nn=Z.file,en=function(n,e){if(n=n||{},e)for(var t in e)e[c](t)&&(n[t]=e[t]);return n},tn=0;Q[nn]=1,L?(u=function(n){var e=this;e.process=require("child_process").fork(n),e.process.on("message",function(n){e.onmessage&&e.onmessage(n)}),e.process.on("error",function(n){e.onerror&&e.onerror(n)})},u.Shared=u,u[l]={constructor:u,process:null,onmessage:null,onerror:null,postMessage:function(n){return this.process&&this.process.send(n),this},terminate:function(){return this.process&&(this.process.kill(),this.process=null),this}}):(u=function(n){var e=this;e.process=new Worker(n),e.process.onmessage=function(n){e.onmessage&&e.onmessage(n.data)},e.process.onerror=function(n){e.onerror&&e.onerror(n)}},u.Shared=u,u[l]={constructor:u,process:null,onmessage:null,onerror:null,postMessage:function(n){return this.process&&this.process.postMessage(n),this},terminate:function(){return this.process&&(this.process.terminate(),this.process=null),this}},"function"==typeof SharedWorker&&(u.Shared=function(n){var e=this;e.process=new SharedWorker(n),e.process.port.start(),e.process.port.onmessage=function(n){e.onmessage&&e.onmessage(n.data)},e.process.port.onerror=e.process.onerror=function(n){e.onerror&&e.onerror(n)}},u.Shared[l]={constructor:u.Shared,process:null,onmessage:null,onerror:null,postMessage:function(n){return this.process&&this.process.port.postMessage(n),this},terminate:function(){return this.process&&(this.process.port.close(),this.process=null),this}})),J&&(U?(_.close=g,_.postMessage=g,_.onconnect=function(n){var e=n.ports[0];_.close=function(){e.close()},_.postMessage=function(n){e.postMessage(n)},e.addEventListener("message",V),e.start()}):B?_.onmessage=V:I&&(_.close=function(){process.exit()},_.postMessage=function(n){process.send(n)},_.importScripts=function(n){try{new Function("",require("fs").readFileSync(n).toString()).call(z)}catch(e){throw e}},process.on("message",V)));var rn=function cn(n){var e=this;return e instanceof cn?(e.$id=(++tn).toString(16),void(e.options=en({width:400,height:400,toolbar:0,location:0,directories:0,status:0,menubar:0,scrollbars:1,resizable:1},n))):new cn(n)};rn[l]={constructor:rn,options:null,$id:null,$window:null,dispose:function(){var n=this;return n.$window&&n.close(),n.$window=null,n.$id=null,n.options=null,n},close:function(){var n=this;return n.$window&&(n.$window.closed||n.$window.close(),n.$window=null),n},ready:function(n,e){var t=this,r=function o(){!t.$window||n&&!t.$window[n]?setTimeout(o,60):e()};return setTimeout(r,0),t},open:function(n){var e=this;return!e.$window&&n&&(e.$window=window.open(n.push?Y(["\ufeff"].concat(n),{type:"text/html;charset=utf-8"}):n,e.$id,t(e.options))),e},write:function(n){var e=this;return e.$window&&n&&e.$window.document.write(n),e}};var on=function an(n){if(n instanceof an)return n;if(!(this instanceof an))return new an(n);var t,r=this,o=null,i=null,s=null,u=!1,l=!1,c=!1,a=!1,f=!1,p=!1,d=null,h=0,m=1,$=null,g=null,v=null,w=e;r.queue=function(n){return arguments.length?(o=n,r):o},r.jumpNext=function(n){o&&o.jumpNext(!1,n)},r.abort=function(n){o&&(o.abort(!1),n&&(o.dispose(),o=null))},r.dispose=function(){o&&(o.dispose(),o=null)},r.task=function(n){return i=n,r},n&&r.task(n),r.run=t=function(){return i.jumpNext=r.jumpNext,i.abort=r.abort,i.dispose=r.dispose,w=i(),u=!0,i.jumpNext=null,i.abort=null,i.dispose=null,w},r.runWithArgs=function(n){return i.jumpNext=r.jumpNext,i.abort=r.abort,i.dispose=r.dispose,w=i.apply(null,n),u=!0,i.jumpNext=null,i.abort=null,i.dispose=null,w},r.canRun=function(){return i&&(!u||l||c||a||f||p)?(l||c)&&h>=$?!1:c&&!d?!1:!a&&!f||w!==g:!1},r.iif=function(n,e,t){return n?r.task(e):arguments.length>2&&r.task(t),r},r.until=function(n){return w=e,d=null,g=n,f=!0,p=!1,l=!1,c=!1,a=!1,r.run=t,r},r.untilNot=function(n){return w=e,d=null,v=n,p=!0,f=!1,l=!1,c=!1,a=!1,r.run=t,r},r.loop=function(n,t,o){return w=e,d=null,h=t||0,m=o||1,$=n,l=!0,f=!1,p=!1,c=!1,a=!1,r.run=function(){var n;return n=i(h),h+=m,w=n,u=!0,n},r},r.each=function(n){return w=e,d=n,h=0,m=1,$=n?n.length||0:0,c=!0,f=!1,p=!1,l=!1,a=!1,r.run=function(){var n;return n=i(d[h],h),h++,w=n,u=!0,n},r},r.recurse=function(n,e){return d=null,w=n,g=e,a=!0,f=!1,p=!1,l=!1,c=!1,r.run=function(){var n;return n=i(w),w=n,u=!0,n},r},r.isFinished=function(){var n=!u||p||f||l||c||a;return n&&(f||a)&&w===g&&(n=!1),n&&p&&w!==v&&(n=!1),n&&(l||c)&&h>=$&&(n=!1),!n},r.onComplete=function(n){return s=n||null,r},r.complete=function(){return s&&b(s)&&s(),r}},sn=function fn(n,e){if(S(n,on))return n;if(b(n))return new on(n);if(!S(this,fn))return new fn(n,e);var t=this;t.$interval=arguments.length?parseInt(n,10)||W:W,t.$timer=null,t.$runmode=A,t.$running=!1,t.$queue=[],J&&!1!==e&&t.initThread()};return sn.VERSION="0.5.1",sn.Thread=u,sn.Task=on,sn.BrowserWindow=rn,sn.MODE={NONE:A,INTERLEAVE:R,LINEAR:x,PARALLEL:M,SEQUENCE:O},sn.Platform={UNDEFINED:j,UNKNOWN:E,NODE:T,BROWSER:q},sn.supportsMultiThreading=function(){return P},sn.isPlatform=function(n){return T===n?L:q===n?D:e},sn.isThread=function(n,e){return e=!0===e?J:!0,T===n?e&&I:q===n?e&&(U||B):e&&G},sn.path=H,sn.blob=Y,sn.load=function(n,e,t){if(n){var r=function(){n=n.split(".");for(var e=z;n.length;)n[0]&&n[0].length&&e[n[0]]&&(e=e[n[0]]),n.shift();return e&&_!==e?b(e)?!1!==t?new e:e():e:void 0};return e&&e.length&&sn.importScripts(e.join?e.join(","):e),r()}return null},sn.listen=J?function(n){V.handler=n}:g,sn.send=J?function(n){_.postMessage(n)}:g,sn.importScripts=J?function(n){if(n&&n.length){n.split&&(n=n.split(","));for(var e=0,t=n.length;t>e;e++){var r=n[e];r&&r.length&&1!==Q[r]&&(_.importScripts(r),Q[r]=1)}}}:g,sn.close=J?function(){_.close()}:g,sn.log="undefined"!=typeof console?function(n){console.log(n||"")}:g,sn.serialize=function(n){n=n||new sn(0,!1);var e=function(e){var t=function(){var t=this,r=arguments;n.step(function(){e.apply(t,r)}),n.$running||n.run(x)};return t.free=function(){return e},t};return e.free=function(){n&&n.dispose(),n=null},e},sn[l]={constructor:sn,$interval:W,$timer:null,$queue:null,$thread:null,$events:null,$runmode:A,$running:!1,dispose:function(n){var e=this;return e.unfork(!0),e.$timer&&k(e.$timer),e.$thread=null,e.$timer=null,e.$interval=null,e.$queue=null,e.$runmode=A,e.$running=!1,J&&!0===n&&sn.close(),e},empty:function(){var n=this;return n.$timer&&k(n.$timer),n.$timer=null,n.$queue=[],n.$runmode=A,n.$running=!1,n},interval:function(n){return arguments.length?(this.$interval=parseInt(n,10)||this.$interval,this):this.$interval},fork:function(n,e,t,r){var o,i,s,l=this;if(!l.$thread){if(!P)throw l.$thread=null,new Error("Asynchronous: Multi-Threading is NOT supported!");L?(i="Asynchronous: Thread (Process): ",s="Asynchronous: Thread (Process) Error: "):(i="Asynchronous: Thread (Worker): ",s="Asynchronous: Thread (Worker) Error: "),l.$events=l.$events||{},o=l.$thread=!0===r?new u.Shared(nn):new u(nn),o.onmessage=function(n){if(n.event){var e=n.event,t=n.data||null;l.$events&&l.$events[e]?l.$events[e](t):"console.log"!==e&&"console.error"!==e||sn.log(("console.error"===e?s:i)+(t||""))}},o.onerror=function(n){if(!l.$events||!l.$events.error)throw new Error(s+n.toString());l.$events.error(n)},l.send("initThread",{component:n||null,asInstance:!1!==t,imports:e?[].concat(e).join(","):null})}return l},unfork:function(n){var e=this;return e.$thread&&(!0===n?e.$thread.terminate():e.send("dispose")),e.$thread=null,e.$events=null,e},initThread:function(){var n=this;return J&&(n.$events={},sn.listen(function(e){var t=e.event,r=e.data||null;t&&n.$events[t]?n.$events[t](r):"dispose"===t&&(n.dispose(),sn.close())})),n},listen:function(n,e){return n&&b(e)&&this.$events&&(this.$events[n]=e),this},unlisten:function(n,e){return n&&this.$events&&this.$events[n]&&(2>arguments.length||e===this.$events[n])&&delete this.$events[n],this},send:function(n,e){return n&&(J?sn.send({event:n,data:e||null}):this.$thread&&this.$thread.postMessage({event:n,data:e||null})),this},task:function(n){return S(n,on)?n:b(n)?on(n):void 0},iif:function(){var n=arguments,e=new on;return e.iif.apply(e,n)},until:function(){var n=w(arguments),e=new on(n.pop());return e.until.apply(e,n)},untilNot:function(){var n=w(arguments),e=new on(n.pop());return e.untilNot.apply(e,n)},loop:function(){var n=w(arguments),e=new on(n.pop());return e.loop.apply(e,n)},each:function(){var n=w(arguments),e=new on(n.pop());return e.each.apply(e,n)},recurse:function(){var n=w(arguments),e=new on(n.pop());return e.recurse.apply(e,n)},step:function(n){var e=this;return n&&e.$queue.push(e.task(n).queue(e)),e},steps:function(){var n,e,t=this,r=arguments;for(e=r.length,n=0;e>n;n++)t.step(r[n]);return t},jumpNext:function(n,e){var t=this,r=t.$queue;return e=e||0,!1!==n?function(){return e<r.length&&(e>0&&r.splice(0,e),t.run(t.$runmode)),t}:(e<r.length&&(e>0&&r.splice(0,e),t.run(t.$runmode)),t)},jumpNextWithArgs:function(n,e,t){var r=this,o=r.$queue;return e=e||0,!1!==n?function(){return e<o.length&&(e>0&&o.splice(0,e),r.run(r.$runmode,arguments)),r}:(e<o.length&&(e>0&&o.splice(0,e),r.run(r.$runmode,t)),r)},abort:function(n,e){var t=this;return!1!==n?function(){return e&&e>0?N(function(){t.empty()},e):t.empty(),t}:(e&&e>0?N(function(){t.empty()},e):t.empty(),t)},run:function(n,e){var t=this;return arguments.length?t.$runmode=n:n=t.$runmode,e=e||null,O===n?s(t,e):R===n?i(t,e):x===n?o(t,e):M===n&&r(t,e),t}},J&&(sn.log=function(n){sn.send({event:"console.log",data:"string"!=typeof n?$(n):n})},sn.listen(function(n){var e=n.event,t=n.data||null;switch(e){case"initThread":t&&t.component&&(K&&(b(K.dispose)&&K.dispose(),K=null),K=sn.load(t.component,t.imports,t.asInstance));break;case"dispose":K&&(b(K.dispose)&&K.dispose(),K=null),sn.close()}})),sn});
/**
*
*   FILTER.js
*   @version: 0.9.7
*   @built on 2016-10-20 19:44:52
*   @dependencies: Classy.js, Asynchronous.js
*
*   JavaScript Image Processing Library
*   https://github.com/foo123/FILTER.js
*
**/!function( root, name, factory ){
"use strict";
var deps = "Classy,Asynchronous".split(/\s*,\s*/);
function extract(obj,keys,index,load){return obj ? keys.map(function(k, i){return (index ? obj[i] : obj[k]) || (load?load(k):null); }) : [];}
if ( ('object'===typeof module) && module.exports ) /* CommonJS */
    (module.$deps = module.$deps||{}) && (module.exports = module.$deps[name] = factory.apply(root, extract(module.$deps,deps,false,function(k){return require("./"+k.toLowerCase());})));
else if ( ('function'===typeof define)&&define.amd&&('function'===typeof require)&&('function'===typeof require.specified)&&require.specified(name) /*&& !require.defined(name)*/ ) /* AMD */
    define(name,['module'].concat(deps),function(module){factory.moduleUri = module.uri; return factory.apply(root, extract(Array.prototype.slice.call(arguments,1),deps,true));});
else if ( !(name in root) ) /* Browser/WebWorker/.. */
    (root[name]=factory.apply(root, extract(root,deps)))&&('function'===typeof(define))&&define.amd&&define(function(){return root[name];} );
}(  /* current root */          this, 
    /* module name */           "FILTER",
    /* module factory */        function ModuleFactory__FILTER( Classy,Asynchronous ){
/* main code starts here */

/**
*
*   FILTER.js
*   @version: 0.9.7
*   @built on 2016-10-20 19:44:52
*   @dependencies: Classy.js, Asynchronous.js
*
*   JavaScript Image Processing Library
*   https://github.com/foo123/FILTER.js
*
**/
"use strict";
var FILTER = {
    VERSION: "0.9.7",
    Classy: Classy, Asynchronous: Asynchronous,
    Class: Classy.Class, Path: Asynchronous.path( ModuleFactory__FILTER.moduleUri )
};
/**
*
* Filter SuperClass, Interfaces and Utilities
* @package FILTER.js
*
**/
!function(root, FILTER, undef){
"use strict";

// http://jsperf.com/math-floor-vs-math-round-vs-parseint/33

var PROTO = 'prototype', HAS = 'hasOwnProperty', KEYS = Object.keys
    ,OP = Object[PROTO], FP = Function[PROTO], AP = Array[PROTO]
    
    ,FILTERPath = FILTER.Path, Merge = FILTER.Classy.Merge, Async = FILTER.Asynchronous
    
    ,isNode = Async.isPlatform( Async.Platform.NODE ), isBrowser = Async.isPlatform( Async.Platform.BROWSER )
    ,supportsThread = Async.supportsMultiThreading( ), isThread = Async.isThread( null, true ), isInsideThread = Async.isThread( )
    ,userAgent = "undefined" !== typeof navigator && navigator.userAgent ? navigator.userAgent : ""
    ,platform = "undefined" !== typeof navigator && navigator.platform ? navigator.platform : ""
    ,vendor = "undefined" !== typeof navigator && navigator.vendor ? navigator.vendor : ""
    
    //,toStringPlugin = function( ) { return "[FILTER: " + this.name + "]"; }
    //,applyPlugin = function( im, w, h, image ){ return im; }
    ,initPlugin = function( ) { }
    ,constructorPlugin = function( init ) {
        return function PluginFilter( ) {
            var self = this;
            // factory/constructor pattern
            if ( !(self instanceof PluginFilter) )
            {
                if ( arguments.length )
                {
                    arguments.__arguments__ = true;
                    return new PluginFilter(arguments);
                }
                else
                {
                    return new PluginFilter();
                }
            }
            self.$super('constructor');
            init.apply( self, (1===arguments.length) && (true===arguments[0].__arguments__) ? arguments[0] : arguments );
        };
    }
    ,devicePixelRatio = FILTER.devicePixelRatio = (isBrowser && !isInsideThread ? window.devicePixelRatio : 1) || 1
    ,notSupportClamp = FILTER._notSupportClamp = "undefined" === typeof Uint8ClampedArray
    ,log, _uuid = 0, Min = Math.min, Max = Math.max
;

//
// Browser Sniffing support
var Browser = FILTER.Browser = {
// http://stackoverflow.com/questions/4224606/how-to-check-whether-a-script-is-running-under-node-js
isNode                  : isNode,
isBrowser               : isBrowser,
isWorker                : isThread,
isInsideWorker          : isInsideThread,
supportsWorker          : supportsThread,
isPhantom               : /PhantomJS/.test(userAgent),

// http://www.quirksmode.org/js/detect.html
// http://my.opera.com/community/openweb/idopera/
// http://stackoverflow.com/questions/1998293/how-to-determine-the-opera-browser-using-javascript
isOpera                 : isBrowser && /Opera|OPR\//.test(userAgent),
isFirefox               : isBrowser && /Firefox\//.test(userAgent),
isChrome                : isBrowser && /Chrome\//.test(userAgent),
isSafari                : isBrowser && /Apple Computer/.test(vendor),
isKhtml                 : isBrowser && /KHTML\//.test(userAgent),
// IE 11 replaced the MSIE with Mozilla like gecko string, check for Trident engine also
isIE                    : isBrowser && (/MSIE \d/.test(userAgent) || /Trident\/\d/.test(userAgent)),

// adapted from Codemirror (https://github.com/marijnh/CodeMirror) browser sniffing
isGecko                 : isBrowser && /gecko\/\d/i.test(userAgent),
isWebkit                : isBrowser && /WebKit\//.test(userAgent),
isMac_geLion            : isBrowser && /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(userAgent),
isMac_geMountainLion    : isBrowser && /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent),

isMobile                : false,
isIOS                   : /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent),
isWin                   : /windows/i.test(platform),
isMac                   : false,
isIE_lt8                : false,
isIE_lt9                : false,
isQtWebkit              : false
};
Browser.isMobile = Browser.isIOS || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
Browser.isMac = Browser.isIOS || /Mac/.test(platform);
Browser.isIE_lt8 = Browser.isIE  && !isInsideThread && (null == document.documentMode || document.documentMode < 8);
Browser.isIE_lt9 = Browser.isIE && !isInsideThread && (null == document.documentMode || document.documentMode < 9);
Browser.isQtWebkit = Browser.isWebkit && /Qt\/\d+\.\d+/.test(userAgent);

FILTER.getPath = Async.path;

FILTER.uuid = function( namespace ) { 
    return [namespace||'filter', new Date( ).getTime( ), ++_uuid].join('_'); 
};

// Typed Arrays Substitute(s)
FILTER.Array = Array;
FILTER.Array32F = (typeof Float32Array !== "undefined") ? Float32Array : Array;
FILTER.Array64F = (typeof Float64Array !== "undefined") ? Float64Array : Array;
FILTER.Array8I = (typeof Int8Array !== "undefined") ? Int8Array : Array;
FILTER.Array16I = (typeof Int16Array !== "undefined") ? Int16Array : Array;
FILTER.Array32I = (typeof Int32Array !== "undefined") ? Int32Array : Array;
FILTER.Array8U = (typeof Uint8Array !== "undefined") ? Uint8Array : Array;
FILTER.Array16U = (typeof Uint16Array !== "undefined") ? Uint16Array : Array;
FILTER.Array32U = (typeof Uint32Array !== "undefined") ? Uint32Array : Array;
FILTER.ImArray = notSupportClamp ? FILTER.Array8U : Uint8ClampedArray;
// opera seems to have a bug which copies Uint8ClampedArrays by reference instead by value (eg. as Firefox and Chrome)
// however Uint8 arrays are copied by value, so use that instead for doing fast copies of image arrays
FILTER.ImArrayCopy = Browser.isOpera ? FILTER.Array8U : FILTER.ImArray;
FILTER.ColorTable = FILTER.ImArrayCopy;
FILTER.AffineMatrix = FILTER.ColorMatrix = FILTER.ConvolutionMatrix = FILTER.Array32F;

// Constants
FILTER.MODE = {
    IGNORE: 0, WRAP: 1, CLAMP: 2,
    COLOR: 3, COLOR32: 3, TILE: 4, STRETCH: 5,
    INTENSITY: 6, HUE: 7, SATURATION: 8,
    GRAY: 9, GRAYSCALE: 9, RGB: 10, RGBA: 11, HSV: 12, CMY: 13, CMYK: 13, XYZ: 28, ILL: 29, PATTERN: 14,
    COLOR8: 15, COLORMASK: 16, COLORMASK32: 16, COLORMASK8: 17,
    MATRIX: 18, LINEAR: 19, RADIAL: 20, NONLINEAR: 21,
    STATISTICAL: 22, ADAPTIVE: 23, THRESHOLD: 24, HISTOGRAM: 25, MONO: 26, MASK: 27
};
FILTER.CHANNEL = {
    R: 0, G: 1, B: 2, A: 3,
    RED: 0, GREEN: 1, BLUE: 2, ALPHA: 3,
    Y: 1, CB: 2, CR: 0, IP: 0, Q: 2,
    INPHASE: 0, QUADRATURE: 2,
    H: 0, S: 2, V: 1, I: 1, U: 2,
    HUE: 0, SATURATION: 2, INTENSITY: 1,
    CY: 2, MA: 0, YE: 1, K: 3,
    CYAN: 2, MAGENTA: 0, YELLOW: 1, BLACK: 3,
    XX: 0, YY: 1, ZZ: 2,
    ILL1: 0, ILL2: 1, ILL3: 2
};
FILTER.STRIDE = {
    CHANNEL: [0,0,1], X: [0,1,4], Y: [1,0,4],
    RGB: [0,1,2], ARGB: [3,0,1,2], RGBA: [0,1,2,3],
    BGR: [2,1,0], ABGR: [3,2,1,0], BGRA: [2,1,0,3]
};
FILTER.LUMA = FILTER.LUMA_YUV = FILTER.LUMA_YIQ = new FILTER.Array32F([
    //0.212671, 0.71516, 0.072169
    0.2126, 0.7152, 0.0722
]);
FILTER.LUMA_YCbCr = new FILTER.Array32F([
    //0.30, 0.59, 0.11
    0.299, 0.587, 0.114
]);
FILTER.LUMA_GREEN = new FILTER.Array32F([
    0, 1, 0
]);
FILTER.CONSTANTS = FILTER.CONST = {
     X: 0, Y: 1, Z: 2
    ,PI: Math.PI, PI2: 2*Math.PI, PI_2: Math.PI/2
    ,toRad: Math.PI/180, toDeg: 180/Math.PI
};
FILTER.FORMAT = {
    IMAGE: 1024, DATA: 2048,
    PNG: 2, JPG: 3, JPEG: 4,
    GIF: 5, BMP: 6, TGA: 7, RGBE: 8
};
FILTER.MIME = {
     PNG    : "image/png"
    ,JPG    : "image/jpeg"
    ,JPEG   : "image/jpeg"
    ,GIF    : "image/gif"
    ,BMP    : "image/bmp"
};

notSupportClamp = FILTER._notSupportClamp = notSupportClamp || Browser.isOpera;

// packages
FILTER.Util = {
    String  : { },
    Array   : {
        // IE still does not support Uint8ClampedArray and some methods on it, add the method "set"
         hasClampedArray: "undefined" !== typeof Uint8ClampedArray
        ,hasArrayset: ("undefined" !== typeof Int16Array) && ("function" === typeof Int16Array[PROTO].set)
        ,hasSubarray: "function" === typeof FILTER.Array32F[PROTO].subarray
    },
    IO      : { },
    Filter  : { },
    Image   : { },
    GLSL    : { }//,
    //SVG     : { }
};
FILTER.IO = { };
FILTER.Codec = { };
FILTER.Interpolation = { };
FILTER.Transform = { };
FILTER.MachineLearning = { };
FILTER.GLSL = { };
FILTER.SVG = { };

FILTER.NotImplemented = function( method ) {
    return method ? function( ) { throw new Error('Method "'+method+'" not Implemented!'); } : function( ) { throw new Error('Method not Implemented!'); };
};

//
// logging
log = FILTER.log = isThread ? Async.log : (("undefine" !== typeof console) && console.log ? function( s ) { console.log(s); } : function( s ) { /* do nothing*/ });
FILTER.warning = function( s ) { log( 'WARNING: ' + s ); }; 
FILTER.error = function( s, throwErr ) { log( 'ERROR: ' + s ); if ( throwErr ) throw new Error(s); };

// Thread Filter Interface (internal)
var FilterThread = FILTER.FilterThread = FILTER.Class( Async, {
    
     path: FILTERPath
    ,name: null
    ,_listener: null
    ,_rand: null
    
    ,constructor: function( ) {
        var self = this, filter = null;
        if ( isThread )
        {
            self.initThread( )
                .listen('load', function( data ) {
                    if ( data && data.filter )
                    {
                        if ( filter ) 
                        {
                            filter.dispose( true );
                            filter = null;
                        }
                        filter = Async.load( 'FILTER.' + data.filter/*, data["import"] || data["imports"]*/ );
                    }
                })
                .listen('import', function( data ) {
                    if ( data && data["import"] && data["import"].length )
                    {
                        Async.importScripts( data["import"].join ? data["import"].join(',') : data["import"] );
                    }
                })
                /*.listen('params', function( data ) {
                    if ( filter ) filter.unserializeFilter( data );
                })
                .listen('inputs', function( data ) {
                    if ( filter ) filter.unserializeInputs( data );
                })*/
                .listen('apply', function( data ) {
                    if ( filter && data && data.im )
                    {
                        //log(data.im[0]);
                        var im = data.im; im[ 0 ] = FILTER.Util.Array.typed( im[ 0 ], FILTER.ImArray );
                        if ( data.params ) filter.unserializeFilter( data.params );
                        if ( data.inputs ) filter.unserializeInputs( data.inputs, im );
                        // pass any filter metadata if needed
                        im = filter._apply( im[ 0 ], im[ 1 ], im[ 2 ] );
                        self.send( 'apply', {im: filter._update ? im : false, meta: filter.hasMeta ? filter.metaData( true ) : null} );
                    }
                    else
                    {
                        self.send( 'apply', {im: null} );
                    }
                })
                .listen('dispose', function( data ) {
                    if ( filter ) 
                    {
                        filter.dispose( true );
                        filter = null;
                    }
                    self.dispose( true );
                    //Async.close( );
                })
            ;
        }
    }
    
    ,dispose: function( explicit ) {
        var self = this;
        self.path = null;
        self.name = null;
        self._rand = null;
        if ( self._listener )
        {
            self._listener.cb = null;
            self._listener = null;
        }
        self.$super('dispose', explicit);
        return self;
    }
    
    // activate or de-activate thread/worker filter
    ,thread: function( enable, imports ) {
        var self = this;
        if ( !arguments.length ) enable = true;
        enable = !!enable;
        // activate worker
        if ( enable && !self.$thread ) 
        {
            if ( null === self._rand )
                self._rand = isNode ? '' : ((-1 === self.path.file.indexOf('?') ? '?' : '&') + (new Date().getTime()));
            self.fork( 'FILTER.FilterThread', FILTERPath.file !== self.path.file ? [ FILTERPath.file, self.path.file+self._rand ] : self.path.file+self._rand );
            if ( imports && imports.length )
                self.send('import', {'import': imports.join ? imports.join(',') : imports});
            self.send('load', {filter: self.name});
            self.listen( 'apply', self._listener=function l( data ) { l.cb && l.cb( data ); } );
        }
        // de-activate worker (if was activated before)
        else if ( !enable && self.$thread )
        {
            self._listener.cb = null;
            self._listener = null;
            self.unfork( );
        }
        return self;
    }
    
    ,sources: function( ) {
        if ( !arguments.length ) return this;
        var sources = arguments[0] instanceof Array ? arguments[0] : AP.slice.call( arguments );
        if ( sources.length )
        {
            var blobs = [ ], i;
            for (i=0; i<sources.length; i++)
                blobs.push( Async.blob( "function" === typeof sources[ i ] ? sources[ i ].toString( ) : sources[ i ] ) );
            this.send('import', {'import': blobs.join( ',' )});
        }
        return this;
    }
    
    ,scripts: function( ) {
        if ( !arguments.length ) return this;
        var scripts = arguments[0] instanceof Array ? arguments[0] : AP.slice.call( arguments );
        if ( scripts.length ) this.send('import', {'import': scripts.join( ',' )});
        return this;
    }
});
// Abstract Generic Filter (implements Async Worker/Thread Interface transparently)
var Filter = FILTER.Filter = FILTER.Class( FilterThread, {
    name: "Filter"
    
    ,constructor: function Filter( ) {
        var self = this;
        //self.$super('constructor', 100, false);
        self.inputs = {};
        self.meta = null;
    }
    
    // filters can have id's
    ,_isOn: true
    ,_update: true
    ,id: null
    ,onComplete: null
    ,mode: 0
    ,selection: null
    ,inputs: null
    ,hasInputs: false
    ,meta: null
    ,hasMeta: false
    
    ,dispose: function( ) {
        var self = this;
        self.name = null;
        self.id = null;
        self._isOn = null;
        self._update = null;
        self.onComplete = null;
        self.mode = null;
        self.selection = null;
        self.inputs = null;
        self.hasInputs = null;
        self.meta = null;
        self.hasMeta = null;
        self.$super('dispose');
        return self;
    }
    
    // alias of thread method
    ,worker: FilterThread[PROTO].thread
    
    
    // @override
    ,metaData: function( meta, serialisation ) {
        return this.meta;
    }
    ,getMetaData: null
    
    // @override
    ,setMetaData: function( meta, serialisation ) {
        this.meta = meta;
        return this;
    }
    
    /* FIXED: by counting update references in image and comparing current ref count with image ref count
    
**NOTE** The way extra filter inputs are handled has a bug at present. If same image is used as extra input in more than one filter and image is updated through another filter, it is possible depending on order of application that some filters will get the previous version of the image as input (because it is cached and not resent to save bandwidth) while only the first filter will get the updated version. It is going to be fixed in a next update.
    */
    ,setInput: function( key, inputImage ) {
        var self = this;
        key = String(key);
        if ( null === inputImage )
        {
            if ( self.inputs[key] ) delete self.inputs[key];
        }
        else
        {
            self.inputs[key] = [null, inputImage, inputImage.nref];
        }
        return self;
    }
    
    ,unsetInput: function( key ) {
        var self = this;
        key = String(key);
        if ( self.inputs[key] ) delete self.inputs[key];
        return self;
    }
    ,delInput: null
    
    ,resetInputs: function( ) {
        this.inputs = {};
        return this;
    }
    
    ,input: function( key ) {
        var input = this.inputs[String(key)];
        if ( !input ) return null;
        if ( (null == input[0]) || (input[1] && (input[2] !== input[1].nref)) )
        {
            input[2] = input[1].nref; // compare and update current ref count with image ref count
            input[0] = input[1].getSelectedData( 1 );
        }
        return input[0] || null;
    }
    ,getInput: null
    
    // @override
    ,serialize: function( ) {
        return null;
    }
    
    // @override
    ,unserialize: function( params ) {
        return this;
    }
    
    ,serializeInputs: function( curIm ) {
        if ( !this.hasInputs ) return null;
        var inputs = this.inputs, input, k = KEYS(inputs), i, l = k.length, json;
        if ( !l ) return null;
        json = { };
        for(i=0; i<l; i++)
        {
            input = inputs[k[i]];
            if ( (null == input[0]) || (input[1] && (input[2] !== input[1].nref)) )
            {
                // save bandwidth if input is same as main current image being processed
                input[2] = input[1].nref; // compare and update current ref count with image ref count
                json[k[i]] = curIm === input[1] ? true : input[1].getSelectedData( 1 );
            }
        }
        return json;
    }
    
    ,unserializeInputs: function( json, curImData ) {
        var self = this;
        if ( !json || !self.hasInputs ) return self;
        var inputs = self.inputs, input, k = KEYS(json), i, l = k.length,
            IMG = FILTER.ImArray, TypedArray = FILTER.Util.Array.typed;
        for(i=0; i<l; i++)
        {
            input = json[k[i]];
            if ( !input ) continue;
            // save bandwidth if input is same as main current image being processed
            if ( true === input ) input = curImData;
            else input[0] = TypedArray( input[0], IMG )
            inputs[k[i]] = [input, null, 0];
        }
        return self;
    }
    
    ,serializeFilter: function( ) {
        var self = this;
        return { filter: self.name, _isOn: self._isOn, _update: self._update, mode: self.mode, selection: self.selection, params: self.serialize( ) };
    }
    
    ,unserializeFilter: function( json ) {
        var self = this;
        if ( json && (self.name === json.filter) )
        {
            self._isOn = json._isOn; self._update = json._update;
            self.mode = json.mode||0; self.selection = json.selection||null;
            if ( self._isOn && json.params ) self.unserialize( json.params );
        }
        return self;
    }
    
    ,select: function( x1, y1, x2, y2, absolute ) {
        var self = this;
        if ( false === x1 )
        {
            self.selection = null
        }
        else
        {
            self.selection = absolute ? [ 
                Max(0.0, x1||0),
                Max(0.0, y1||0),
                Max(0.0, x2||0),
                Max(0.0, y2||0),
                0
            ] : [
                Min(1.0, Max(0.0, x1||0)),
                Min(1.0, Max(0.0, y1||0)),
                Min(1.0, Max(0.0, x2||0)),
                Min(1.0, Max(0.0, y2||0)),
                1
            ];
        }
        return self;
    }

    ,deselect: function( ) {
        return this.select( false );
    }
    
    ,complete: function( f ) {
        this.onComplete = f || null;
        return this;
    }
    
    ,setMode: function( mode ) {
        this.mode = mode;
        return this;
    }

    ,getMode: function( ) {
        return this.mode;
    }

    // whether filter is ON
    ,isOn: function( ) {
        return this._isOn;
    }
    
    // whether filter updates output image or not
    ,update: function( bool ) {
        if ( !arguments.length ) bool = true;
        this._update = !!bool;
        return this;
    }
    
    // allow filters to be turned ON/OFF
    ,turnOn: function( bool ) {
        if ( !arguments.length ) bool = true;
        this._isOn = !!bool;
        return this;
    }
    
    // toggle ON/OFF state
    ,toggle: function( ) {
        this._isOn = !this._isOn;
        return this;
    }
    
    // @override
    ,reset: function( ) {
        this.resetInputs( );
        return this;
    }
    
    // @override
    ,canRun: function( ) {
        return this._isOn;
    }
    
    // @override
    ,combineWith: function( filter ) {
        return this;
    }
    
    // @override
    // for internal use, each filter overrides this
    ,_apply: function( im, w, h, metaData ) { 
        /* do nothing here, override */
        return im;
    }
    
    // generic apply a filter from an image (src) to another image (dst) with optional callback (cb)
    ,apply: function( src, dst, cb ) {
        var self = this, im, im2;
        
        if ( !self.canRun( ) ) return src;
        
        if ( arguments.length < 3 )
        {
            if ( dst && dst.setSelectedData ) 
            {
                // dest is an image and no callback
                cb = null;
            }
            else if ( 'function' === typeof dst )
            {
                // dst is callback, dst is same as src
                cb = dst;
                dst = src;
            }
            else
            {
                dst = src;
                cb = null;
            }
        }
        
        if ( src && dst )
        {
            cb = cb || self.onComplete;
            im = src.getSelectedData( );
            if ( self.$thread )
            {
                self._listener.cb = function( data ) { 
                    //self.unlisten( 'apply' );
                    self._listener.cb = null;
                    if ( data ) 
                    {
                        // listen for metadata if needed
                        //if ( null != data.update ) self._update = !!data.update;
                        if ( data.meta ) self.setMetaData( data.meta, true );
                        if ( data.im && self._update )
                        {
                            if ( self.hasMeta && (null != self.meta._IMG_WIDTH) )
                                dst.dimensions( self.meta._IMG_WIDTH, self.meta._IMG_HEIGHT );
                            dst.setSelectedData( FILTER.Util.Array.typed( data.im, FILTER.ImArray ) );
                        }
                    }
                    if ( cb ) cb.call( self );
                };
                // process request
                self.send( 'apply', {im: im, /*id: src.id,*/ params: self.serializeFilter( ), inputs: self.serializeInputs( src )} );
            }
            else
            {
                im2 = self._apply( im[ 0 ], im[ 1 ], im[ 2 ], {src:src, dst:dst} );
                // update image only if needed
                // some filters do not actually change the image data
                // but instead process information from the data,
                // no need to update in such a case
                if ( self._update )
                {
                    if ( self.hasMeta && (null != self.meta._IMG_WIDTH) )
                        dst.dimensions( self.meta._IMG_WIDTH, self.meta._IMG_HEIGHT );
                    dst.setSelectedData( im2 );
                }
                if ( cb ) cb.call( self );
            }
        }
        return src;
    }
    
    ,toString: function( ) {
        return "[FILTER: " + this.name + "]";
    }
});
FILTER.Filter[PROTO].getMetaData = FILTER.Filter[PROTO].metaData;
FILTER.Filter[PROTO].getInput = FILTER.Filter[PROTO].input;
FILTER.Filter[PROTO].delInput = FILTER.Filter[PROTO].unsetInput;
FILTER.Filter.get = function( filterClass ) {
    if ( !filterClass || !filterClass.length ) return null;
    if ( -1 < filterClass.indexOf('.') )
    {
        filterClass = filterClass.split('.');
        var i, l = filterClass.length, part, F = FILTER;
        for(i=0; i<l; i++)
        {
            part = filterClass[i];
            if ( !F[part] ) return null;
            F = F[part];
        }
        return F;
    }
    else
    {
        return FILTER[filterClass] || null;
    }
};

// IO Manager class
FILTER.IO.Manager = FILTER.Class({
    name: "IO.Manager",
    
    __static__: {
        // accessible as "$class.read" (extendable and with "late static binding")
        read: FILTER.Classy.Method(function($super, $private, $class){
              // $super is the direct reference to the superclass itself (NOT the prototype)
              // $private is the direct reference to the private methods of this class (if any)
              // $class is the direct reference to this class itself (NOT the prototype)
              return function( path, onComplete, onError, rest ) {
                return new $class().read(path, onComplete, onError, rest);
            }
        }, FILTER.Classy.LATE|FILTER.Classy.STATIC ),
        
        // accessible as "$class.write" (extendable and with "late static binding")
        write: FILTER.Classy.Method(function($super, $private, $class){
              // $super is the direct reference to the superclass itself (NOT the prototype)
              // $private is the direct reference to the private methods of this class (if any)
              // $class is the direct reference to this class itself (NOT the prototype)
              return function( path, data, onComplete, onError ) {
                return new $class().write(path, data, onComplete, onError);
            }
        }, FILTER.Classy.LATE|FILTER.Classy.STATIC ),
        
        load: FILTER.Classy.Method(function($super, $private, $class){
              // $super is the direct reference to the superclass itself (NOT the prototype)
              // $private is the direct reference to the private methods of this class (if any)
              // $class is the direct reference to this class itself (NOT the prototype)
              return function( path, onComplete, onError, rest ) {
                return new $class().read(path, onComplete, onError, rest);
            }
        }, FILTER.Classy.LATE|FILTER.Classy.STATIC ),
        
        // accessible as "$class.write" (extendable and with "late static binding")
        save: FILTER.Classy.Method(function($super, $private, $class){
              // $super is the direct reference to the superclass itself (NOT the prototype)
              // $private is the direct reference to the private methods of this class (if any)
              // $class is the direct reference to this class itself (NOT the prototype)
              return function( path, data, onComplete, onError ) {
                return new $class().write(path, data, onComplete, onError);
            }
        }, FILTER.Classy.LATE|FILTER.Classy.STATIC )
    },
    
    constructor: function Manager( ){
        /*var self = this;
        if ( !(self instanceof Manager) )
            return new Manager( );*/
    },
    
    _crossOrigin: null,
    _responseType: null,
    _encoding: null,
    
    dispose: function( ){
        var self = this;
        self._crossOrigin = null;
        self._responseType = null;
        self._encoding = null;
        return self;
    },
    
    // override in sub-classes
    read: function( path, onComplete, onError ){
        return null;
    },
    write: function( path, data, onComplete, onError ){
        return null;
    },
    
    // aliases
    load: function( path, onComplete, onError ){
        return this.read( path, onComplete, onError );
    },
    save: function( path, data, onComplete, onError ){
        return this.write( path, data, onComplete, onError );
    },

    responseType: function ( value ) {
        var self = this;
        if ( arguments.length )
        {
            self._responseType = value;
            return self;
        }
        return self._responseType;
    },

    crossOrigin: function ( value ) {
        var self = this;
        if ( arguments.length )
        {
            self._crossOrigin = value;
            return self;
        }
        return self._crossOrigin;
    },
    
    encoding: function ( value ) {
        var self = this;
        if ( arguments.length )
        {
            self._encoding = value;
            return self;
        }
        return self._encoding;
    }
});
// aliases
FILTER.IO.Loader = FILTER.IO.Reader = FILTER.IO.Writer = FILTER.IO.Manager;
// a default raw codec
FILTER.Codec.RAW = {
    encoder: function( imgData, metaData ) {
        return new Buffer( imgData );
    },
    decoder: function( buffer, metaData ) {
        return {
            width: metaData.width || 0,
            height: metaData.height || 0,
            data: new Uint8Array( buffer )
        };
    }
};

// filter plugin creation micro-framework
FILTER.Create = function( methods ) {
    methods = Merge({
             init: initPlugin
            ,name: "PluginFilter"
    }, methods);
    var filterName = methods.name;
    methods.constructor = constructorPlugin( methods.init );
    if ( (null == methods._apply) && ("function" === typeof methods.apply) ) methods._apply = methods.apply;
    // add some aliases
    if ( ("function" === typeof methods.metaData) && (methods.metaData !== Filter[PROTO].metaData) ) methods.getMetaData = methods.metaData;
    else if ( ("function" === typeof methods.getMetaData) && (methods.getMetaData !== Filter[PROTO].getMetaData) ) methods.metaData = methods.getMetaData;
    delete methods.init; if ( methods[HAS]('apply') ) delete methods.apply;
    return FILTER[filterName] = FILTER.Class( Filter, methods );
};

}(this, FILTER);/**
*
* Filter Core Utils (Filter, Image, Math, Geometry)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

if ( FILTER.Util.LOADED_CORE ) return;
FILTER.Util.LOADED_CORE = true;

var MODE = FILTER.MODE, notSupportClamp = FILTER._notSupportClamp, noTypedArraySet = FILTER._noTypedArraySet,
    IMG = FILTER.ImArray, IMGcpy = FILTER.ImArrayCopy,
    A32F = FILTER.Array32F, A64F = FILTER.Array64F,
    A32I = FILTER.Array32I, A16I = FILTER.Array16I, A8U = FILTER.Array8U,
    ColorTable = FILTER.ColorTable, ColorMatrix = FILTER.ColorMatrix,
    AffineMatrix = FILTER.AffineMatrix, ConvolutionMatrix = FILTER.ConvolutionMatrix,
    ArrayUtil = FILTER.Util.Array = FILTER.Util.Array || {},
    StringUtil = FILTER.Util.String = FILTER.Util.String || {},
    MathUtil = FILTER.Util.Math = FILTER.Util.Math || {},
    ImageUtil = FILTER.Util.Image = FILTER.Util.Image || {},
    FilterUtil = FILTER.Util.Filter = FILTER.Util.Filter || {},
    CodecUtil = FILTER.Util.Codec = FILTER.Util.Codec || {},
    Exp = Math.exp, Sqrt = Math.sqrt, Pow = Math.pow, Ceil = Math.ceil, Floor = Math.floor,
    Log = Math.log, Sin = Math.sin, Cos = Math.cos, Min = Math.min, Max = Math.max, Abs = Math.abs,
    PI = Math.PI, PI2 = PI+PI, PI_2 = 0.5*PI, 
    pi = PI, pi2 = PI2, pi_2 = PI_2, pi_32 = 3*pi_2,
    Log2 = Math.log2 || function( x ) { return Log(x) / Math.LN2; },
    esc_re = /([.*+?^${}()|\[\]\/\\\-])/g, trim_re = /^\s+|\s+$/g,
    func_body_re = /^function[^{]+{([\s\S]*)}$/;

function esc( s )
{
    return s.replace(esc_re, '\\$1');
}
function function_body( func )
{
    return func.toString( ).match( func_body_re )[ 1 ] || '';
}

function clamp( x, m, M )
{ 
    return x > M ? M : (x < m ? m : x); 
}

function arrayset_shim( a, b, offset, b0, b1 )
{
    //"use asm";
    offset = offset || 0; b0 = b0 || 0;
    var j, i, n = b1 ? b1-b0+1 : b.length, rem = n&31;
    for(i=0; i<rem; i++)
    {
        a[ i + offset ] = b[ b0 + i ];
    }
    for(j=rem; j<n; j+=32)
    {
        i = j;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
        a[ i + offset ] = b[ b0 + i ]; ++i;
    }
}

function crop( im, w, h, x1, y1, x2, y2 )
{
    //"use asm";
    x2 = Min(x2, w-1); y2 = Min(y2, h-1);
    var nw = x2-x1+1, nh = y2-y1+1, 
        croppedSize = (nw*nh)<<2, cropped = new IMG(croppedSize), 
        y, yw, nw4 = nw<<2, pixel, pixel2;

    for (y=y1,yw=y1*w,pixel=0; y<=y2; y++,yw+=w,pixel+=nw4)
    {
        pixel2 = (yw+x1)<<2;
        cropped.set(im.subarray(pixel2, pixel2+nw4), pixel);
    }
    return cropped;
}
function crop_shim( im, w, h, x1, y1, x2, y2 )
{
    //"use asm";
    x2 = Min(x2, w-1); y2 = Min(y2, h-1);
    var nw = x2-x1+1, nh = y2-y1+1, 
        croppedSize = (nw*nh)<<2, cropped = new IMG(croppedSize), 
        y, yw, nw4 = nw<<2, pixel, pixel2;

    for (y=y1,yw=y1*w,pixel=0; y<=y2; y++,yw+=w,pixel+=nw4)
    {
        pixel2 = (yw+x1)<<2;
        arrayset_shim(cropped, im, pixel, pixel2, pixel2+nw4);
    }
    return cropped;
}
function pad( im, w, h, pad_right, pad_bot, pad_left, pad_top )
{
    //"use asm";
    pad_right = pad_right || 0; pad_bot = pad_bot || 0;
    pad_left = pad_left || 0; pad_top = pad_top || 0;
    var nw = w+pad_left+pad_right, nh = h+pad_top+pad_bot, 
        paddedSize = (nw*nh)<<2, padded = new IMG(paddedSize), 
        y, yw, w4 = w<<2, nw4 = nw<<2, pixel, pixel2,
        offtop = pad_top*nw4, offleft = pad_left<<2;

    for (y=0,yw=0,pixel=offtop; y<h; y++,yw+=w,pixel+=nw4)
    {
        pixel2 = yw<<2;
        padded.set(im.subarray(pixel2, pixel2+w4), offleft+pixel);
    }
    return padded;
}
function pad_shim( im, w, h, pad_right, pad_bot, pad_left, pad_top )
{
    //"use asm";
    pad_right = pad_right || 0; pad_bot = pad_bot || 0;
    pad_left = pad_left || 0; pad_top = pad_top || 0;
    var nw = w+pad_left+pad_right, nh = h+pad_top+pad_bot, 
        paddedSize = (nw*nh)<<2, padded = new IMG(paddedSize), 
        y, yw, w4 = w<<2, nw4 = nw<<2, pixel, pixel2,
        offtop = pad_top*nw4, offleft = pad_left<<2;

    for (y=0,yw=0,pixel=offtop; y<h; y++,yw+=w,pixel+=nw4)
    {
        pixel2 = yw<<2;
        arrayset_shim(padded, im, offleft+pixel, pixel2, pixel2+w4);
    }
    return padded;
}
function get_data( D, W, H, x0, y0, x1, y1, orig )
{
    //"use asm";
    x0 = Min(x0, W-1); y0 = Min(y0, H-1);
    x1 = Min(x1, W-1); y1 = Min(y1, H-1);
    if ( (0 === x0) && (0 === y0) && (W === x1+1) && (H === y1+1) ) return true === orig ? D : new IMGcpy( D );
    if ( !D.length || (x1 < x0) || (y1 < y0) ) return new IMG(0);
    var x, y, i, I, w = x1-x0+1, h = y1-y0+1, size = (w*h) << 2, d = new IMG(size);
    for(x=x0,y=y0,i=0; y<=y1; i+=4,x++)
    {
        if ( x>x1 ){ x=x0; y++; }
        I = (y*W + x) << 2;
        d[i  ] = D[I  ];
        d[i+1] = D[I+1];
        d[i+2] = D[I+2];
        d[i+3] = D[I+3];
    }
    return d;
}
function set_data( D, W, H, d, w, h, x0, y0, x1, y1, X0, Y0 )
{
    //"use asm";
    var i, I, x, y;
    if ( !D.length || !d.length || !w || !h || !W || !H ) return D;
    x0 = Min(x0, w-1); y0 = Min(y0, h-1);
    X0 = Min(X0, W-1); Y0 = Min(Y0, H-1);
    x1 = Min(x1, w-1); y1 = Min(y1, h-1);
    X0 -= x0; Y0 -= y0;
    for(x=x0,y=y0; y<=y1; x++)
    {
        if ( x>x1 ) { x=x0; y++; }
        if ( (y+Y0 >= H) || (x+X0 >= W) ) continue;
        i = (y*w + x) << 2;
        I = ((y+Y0)*W + x+X0) << 2;
        D[I  ] = d[i  ];
        D[I+1] = d[i+1];
        D[I+2] = d[i+2];
        D[I+3] = d[i+3];
    }
    return D;
}
function fill_data( D, W, H, c, x0, y0, x1, y1 )
{
    //"use asm";
    x0 = Min(x0, W-1); y0 = Min(y0, H-1);
    x1 = Min(x1, W-1); y1 = Min(y1, H-1);
    if ( !D.length || (x1 < x0) || (y1 < y0) ) return D;
    var x, y, i, r = c[0] & 255, g = c[1] & 255, b = c[2] & 255, a = 3 < c.length ? c[3] & 255 : 255;
    for(x=x0,y=y0; y<=y1; x++)
    {
        if ( x>x1 ) { x=x0; y++; }
        i = (y*W + x) << 2;
        D[i  ] = r;
        D[i+1] = g;
        D[i+2] = b;
        D[i+3] = a;
    }
    return D;
}

// compute integral image (Summed Area Table, SAT) (for a given channel)
function integral( im, w, h, stride, channel, integ ) 
{
    //"use asm";
    stride = stride||0; channel = channel||0;
    var len = im.length, size = len>>>stride, rowLen = w<<stride,
        rem = (w&31)<<stride, i32 = 32<<stride, ii = 1<<stride,
        integ, sum, i, j, i0, x;
        
    integ = integ || new A32F(size);
    // compute integral of image in one pass
    // first row
    sum = 0; j = 0;
    for (i=channel; i<rem; i+=ii)
    {
        sum += im[i]; integ[j++] = sum;
    }
    for (i0=rem+channel; i0<rowlen; i0+=i32)
    {
        i =i0; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
        i+=ii; sum += im[i]; integ[j++] = sum;
    }
    
    // other rows
    x=0; j=0; sum=0; rem += rowlen;
    for (i=rowLen+channel; i<rem; i+=ii)
    {
        sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
    }
    for (i0=rem+channel; i0<len; i0+=i32)
    {
        i =i0; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
        i+=ii; sum += im[i]; integ[j+w] = integ[j] + sum; ++j;
        if ( ++x >=w ) { x=0; sum=0; }
    }
    return integ;
}
// compute image histogram (for a given channel)
function histogram( im, w, h, stride, channel, pdf_only, cdf )
{
    //"use asm";
    stride = stride||0; channel = channel||0;
    var i, i0, i32 = 32<<stride, ii = 1<<stride,
        l = im.length, l2 = l>>>stride, accum, rem = (l2&31)<<stride;
    
    // initialize the arrays
    cdf = cdf || new A32F( 256 ); 
    /*for (i=0; i<256; i+=32) 
    { 
        // partial loop unrolling
        cdf[i   ]=0;
        cdf[i+1 ]=0;
        cdf[i+2 ]=0;
        cdf[i+3 ]=0;
        cdf[i+4 ]=0;
        cdf[i+5 ]=0;
        cdf[i+6 ]=0;
        cdf[i+7 ]=0;
        cdf[i+8 ]=0;
        cdf[i+9 ]=0;
        cdf[i+10]=0;
        cdf[i+11]=0;
        cdf[i+12]=0;
        cdf[i+13]=0;
        cdf[i+14]=0;
        cdf[i+15]=0;
        cdf[i+16]=0;
        cdf[i+17]=0;
        cdf[i+18]=0;
        cdf[i+19]=0;
        cdf[i+20]=0;
        cdf[i+21]=0;
        cdf[i+22]=0;
        cdf[i+23]=0;
        cdf[i+24]=0;
        cdf[i+25]=0;
        cdf[i+26]=0;
        cdf[i+27]=0;
        cdf[i+28]=0;
        cdf[i+29]=0;
        cdf[i+30]=0;
        cdf[i+31]=0;
    }*/
    // compute pdf
    for (i=channel; i<rem; i+=ii)
    {
        cdf[ im[ i ] ]++;
    }
    for (i0=rem+channel; i0<l; i0+=i32)
    {
        // partial loop unrolling
        i =i0; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
        i+=ii; cdf[ im[i] ]++;
    }
    
    // return pdf NOT cdf
    if ( true === pdf_only ) return cdf;
    
    // compute cdf
    for (accum=0,i=0; i<256; i+=64) 
    { 
        // partial loop unrolling
        accum += cdf[i   ]; cdf[i   ] = accum;
        accum += cdf[i+1 ]; cdf[i+1 ] = accum;
        accum += cdf[i+2 ]; cdf[i+2 ] = accum;
        accum += cdf[i+3 ]; cdf[i+3 ] = accum;
        accum += cdf[i+4 ]; cdf[i+4 ] = accum;
        accum += cdf[i+5 ]; cdf[i+5 ] = accum;
        accum += cdf[i+6 ]; cdf[i+6 ] = accum;
        accum += cdf[i+7 ]; cdf[i+7 ] = accum;
        accum += cdf[i+8 ]; cdf[i+8 ] = accum;
        accum += cdf[i+9 ]; cdf[i+9 ] = accum;
        accum += cdf[i+10]; cdf[i+10] = accum;
        accum += cdf[i+11]; cdf[i+11] = accum;
        accum += cdf[i+12]; cdf[i+12] = accum;
        accum += cdf[i+13]; cdf[i+13] = accum;
        accum += cdf[i+14]; cdf[i+14] = accum;
        accum += cdf[i+15]; cdf[i+15] = accum;
        accum += cdf[i+16]; cdf[i+16] = accum;
        accum += cdf[i+17]; cdf[i+17] = accum;
        accum += cdf[i+18]; cdf[i+18] = accum;
        accum += cdf[i+19]; cdf[i+19] = accum;
        accum += cdf[i+20]; cdf[i+20] = accum;
        accum += cdf[i+21]; cdf[i+21] = accum;
        accum += cdf[i+22]; cdf[i+22] = accum;
        accum += cdf[i+23]; cdf[i+23] = accum;
        accum += cdf[i+24]; cdf[i+24] = accum;
        accum += cdf[i+25]; cdf[i+25] = accum;
        accum += cdf[i+26]; cdf[i+26] = accum;
        accum += cdf[i+27]; cdf[i+27] = accum;
        accum += cdf[i+28]; cdf[i+28] = accum;
        accum += cdf[i+29]; cdf[i+29] = accum;
        accum += cdf[i+30]; cdf[i+30] = accum;
        accum += cdf[i+31]; cdf[i+31] = accum;
        accum += cdf[i+32]; cdf[i+32] = accum;
        accum += cdf[i+33]; cdf[i+33] = accum;
        accum += cdf[i+34]; cdf[i+34] = accum;
        accum += cdf[i+35]; cdf[i+35] = accum;
        accum += cdf[i+36]; cdf[i+36] = accum;
        accum += cdf[i+37]; cdf[i+37] = accum;
        accum += cdf[i+38]; cdf[i+38] = accum;
        accum += cdf[i+39]; cdf[i+39] = accum;
        accum += cdf[i+40]; cdf[i+40] = accum;
        accum += cdf[i+41]; cdf[i+41] = accum;
        accum += cdf[i+42]; cdf[i+42] = accum;
        accum += cdf[i+43]; cdf[i+43] = accum;
        accum += cdf[i+44]; cdf[i+44] = accum;
        accum += cdf[i+45]; cdf[i+45] = accum;
        accum += cdf[i+46]; cdf[i+46] = accum;
        accum += cdf[i+47]; cdf[i+47] = accum;
        accum += cdf[i+48]; cdf[i+48] = accum;
        accum += cdf[i+49]; cdf[i+49] = accum;
        accum += cdf[i+50]; cdf[i+50] = accum;
        accum += cdf[i+51]; cdf[i+51] = accum;
        accum += cdf[i+52]; cdf[i+52] = accum;
        accum += cdf[i+53]; cdf[i+53] = accum;
        accum += cdf[i+54]; cdf[i+54] = accum;
        accum += cdf[i+55]; cdf[i+55] = accum;
        accum += cdf[i+56]; cdf[i+56] = accum;
        accum += cdf[i+57]; cdf[i+57] = accum;
        accum += cdf[i+58]; cdf[i+58] = accum;
        accum += cdf[i+59]; cdf[i+59] = accum;
        accum += cdf[i+60]; cdf[i+60] = accum;
        accum += cdf[i+61]; cdf[i+61] = accum;
        accum += cdf[i+62]; cdf[i+62] = accum;
        accum += cdf[i+63]; cdf[i+63] = accum;
    }
    return cdf;
}
function spectrum( im, w, h, stride, channel )
{
    // TODO
    return null;
}

function integral2( im, w, h, stride, channel, sat, sat2, rsat )
{
    //"use asm";
    var len = im.length, size = len>>>stride, rowLen = w<<stride,
        rem = (w&31)<<stride, sum, sum2, c, i, i0, j, i32 = 32<<stride, ii = 1<<stride, x, y;
        
    // compute sat(integral), sat2(square) and rsat(tilted integral) of image in one pass
    // SAT(-1, y) = SAT(x, -1) = SAT(-1, -1) = 0
    // SAT(x, y) = SAT(x, y-1) + SAT(x-1, y) + I(x, y) - SAT(x-1, y-1)  <-- integral image
    
    // RSAT(-1, y) = RSAT(x, -1) = RSAT(x, -2) = RSAT(-1, -1) = RSAT(-1, -2) = 0
    // RSAT(x, y) = RSAT(x-1, y-1) + RSAT(x+1, y-1) - RSAT(x, y-2) + I(x, y) + I(x, y-1)    <-- rotated(tilted) integral image at 45deg
    // first row
    sum=sum2=0; j=0;
    for (i=channel; i<rem; i+=ii)
    {
        c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
    }
    for (i0=rem+channel; i0<rowLen; i0+=i32)
    {
        i =i0; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
        i+=ii; c=im[i]; sum+=c; sat[j]=sum; rsat[j]=c; sum2+=c*c; sat2[j]=sum2; ++j;
    }
    
    // other rows
    x=0; y=1; j=0; sum=0; sum2=0; rem+=rowLen;
    for (i=rowLen+channel; i<rem; i+=ii)
    {
        c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
    }
    for (i0=rem+channel; i0<len; i0+=i32)
    {
        i =i0; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
        i+=ii; c=im[i]; sum+=c; sat[j+w]=sat[j]+sum; sum2+=c*c; sat2[j+w]=sat2[j]+sum2; rsat[j+w]=rsat[j+1-w] + (c+im[(j-w)<<stride]) + (y>1?rsat[j-w-w]:0) + (x>0?rsat[j-1-w]:0); ++j;
        if ( ++x >=w ) { x=0; y++; sum=sum2=0; }
    }
}
function gradient( im, w, h, stride, channel, do_lowpass, do_sat,
                    low, high, MAGNITUDE_SCALE, MAGNITUDE_LIMIT, MAGNITUDE_MAX )
{
    //"use asm";
    var stride0 = stride, imSize = im.length, count = imSize>>>stride,
        index, i, j, k, sum, w_1 = w-1, h_1 = h-1, w_2, h_2, w2, w4 = w<<stride,
        dx = 1<<stride, dx2 = dx<<1, dy = w4, count = imSize>>>stride,
        i0, i1s, i2s, i1n, i2n, i1w, i1e, ine, inw, ise, isw, //f,
        sobelX, sobelY, gX = new A32F(count), gY = new A32F(count), lowpassed;
    
    if( do_lowpass )
    {
        w_2 = w-2; h_2 = h-2; w2 = w<<1;
        lowpassed = new A8U(count); //f = 1.0/159.0;
        // pre-bluring is optional, e.g a deriche pre-blur filtering can be used
        /*
        gauss lowpass 5x5 with sigma = 1.4
                       | 2  4  5  4 2 |
                 1     | 4  9 12  9 4 |
        Gauss = ---  * | 5 12 15 12 5 |
                159    | 4  9 12  9 4 |
                       | 2  4  5  4 2 |
        */
        /*
        // first, second rows, last, second-to-last rows
        for (i=0; i<w; i++)
        {
            lowpassed[i] = 0; lowpassed[i+w] = 0;
            lowpassed[i+count-w] = 0; lowpassed[i+count-w2] = 0;
        }
        // first, second columns, last, second-to-last columns
        for (i=0,k=0; i<h; i++,k+=w)
        {
            lowpassed[k] = 0; lowpassed[1+k] = 0;
            lowpassed[w_1+k] = 0; lowpassed[w_2+k] = 0;
        }
        */
        for(i=2,j=2,k=w2; j<h_2; i++)
        {
            if ( i >= w_2 ){ i=2; k+=w; j++; if(j>=h_2) break; }
            index = i+k; i0 = (index<<stride)+channel;
            i1s = i0+dy; i2s = i1s+dy; i1n = i0-dy; i2n = i1n-dy;
            // use fixed-point arithmetic here
            lowpassed[index] = (((103*(
                        2*im[i2n-dx2] +  4*im[i2n-dx] +  5*im[i2n] +  4*im[i2n+dx] + 2*im[i2n+dx2]
                       +4*im[i1n-dx2] +  9*im[i1n-dx] + 12*im[i1n] +  9*im[i1n+dx] + 4*im[i1n+dx2]
                       +5*im[i0 -dx2] + 12*im[i0 -dx] + 15*im[i0 ] + 12*im[i0 +dx] + 5*im[i0 +dx2]
                       +4*im[i1s-dx2] +  9*im[i1s-dx] + 12*im[i1s] +  9*im[i1s+dx] + 4*im[i1s+dx2]
                       +2*im[i2s-dx2] +  4*im[i2s-dx] +  5*im[i2s] +  4*im[i2s+dx] + 2*im[i2s+dx2]
                      )+8192)&0xFFFFFFFF)>>>14)&255;
        }
        dx = 1; dx2 = 2; dy = w; stride = 0; channel = 0;
    }
    else
    {
        lowpassed = im;
    }
    
    /*
    separable sobel gradient 3x3 in X,Y directions
             | −1  0  1 |
    sobelX = | −2  0  2 |
             | −1  0  1 |
             
             |  1  2  1 |
    sobelY = |  0  0  0 |
             | −1 -2 -1 |
    */
    for(i=1,j=1,k=w; j<h_1; i++)
    {
        if ( i >= w_1 ){ i=1; k+=w; j++; if(j>=h_1) break; }
        index = k+i; i0 = (index<<stride)+channel;
        i1s = i0+dy; i1n = i0-dy;
        gX[index] = lowpassed[i1n+dx]-lowpassed[i1n-dx]+(lowpassed[i0+dx]<<1)-(lowpassed[i0-dx]<<1)+lowpassed[i1s+dx]-lowpassed[i1s-dx];
        gY[index] = lowpassed[i1n-dx]-lowpassed[i1s-dx]+(lowpassed[i1n]<<1)-(lowpassed[i1s]<<1)+lowpassed[i1n+dx]-lowpassed[i1s+dx];
    }
    // do the next stages of canny edge processing
    return optimum_gradient( gX, gY, im, w, h, stride0, do_sat, low, high, MAGNITUDE_SCALE, MAGNITUDE_LIMIT, MAGNITUDE_MAX );
}
function optimum_gradient( gX, gY, im, w, h, stride, sat, low, high, MAGNITUDE_SCALE, MAGNITUDE_LIMIT, MAGNITUDE_MAX )
{
    //"use asm";
    if ( null == MAGNITUDE_SCALE )
    {
        MAGNITUDE_SCALE = 1; MAGNITUDE_LIMIT = 510; // 2*255
        MAGNITUDE_MAX = MAGNITUDE_SCALE * MAGNITUDE_LIMIT;
    }
    var imSize = im.length, count = imSize>>>stride, index, i, j, k, sum,
        w_1 = w-1, h_1 = h-1, i0, i1s, i2s, i1n, i2n, i1w, i1e, ine, inw, ise, isw,
        g = new A32F(count), xGrad, yGrad, absxGrad, absyGrad, gradMag, tmp,
        nMag, sMag, wMag, eMag, neMag, seMag, swMag, nwMag, gg,
        x0, x1, x2, y0, y1, y2, x, y, y0w, yw, jj, ii, followedge;
    
    // non-maximal supression
    for(i=1,j=1,k=w; j<h_1; i++)
    {
        if ( i >= w_1 ){ i=1; k+=w; j++; if(j>=h_1) break; }
        
        i0 = i + k;
        i1n = i0 - w;
        i1s = i0 + w;
        i1w = i0 - 1;
        i1e = i0 + 1;
        inw = i1n - 1;
        ine = i1n + 1;
        isw = i1s - 1;
        ise = i1s + 1;
        
        xGrad = gX[i0]; yGrad = gY[i0];
        absxGrad = Abs(xGrad); absyGrad = Abs(yGrad);
        gradMag = absxGrad+absyGrad;
        nMag = Abs(gX[i1n])+Abs(gY[i1n]);
        sMag = Abs(gX[i1s])+Abs(gY[i1s]);
        wMag = Abs(gX[i1w])+Abs(gY[i1w]);
        eMag = Abs(gX[i1e])+Abs(gY[i1e]);
        neMag = Abs(gX[ine])+Abs(gY[ine]);
        seMag = Abs(gX[ise])+Abs(gY[ise]);
        swMag = Abs(gX[isw])+Abs(gY[isw]);
        nwMag = Abs(gX[inw])+Abs(gY[inw]);
        
        gg = (xGrad * yGrad <= 0
            ? absxGrad >= absyGrad
                ? (tmp = absxGrad * gradMag) >= Abs(yGrad * neMag - (xGrad + yGrad) * eMag)
                    && tmp > Abs(yGrad * swMag - (xGrad + yGrad) * wMag)
                : (tmp = absyGrad * gradMag) >= Abs(xGrad * neMag - (yGrad + xGrad) * nMag)
                    && tmp > Abs(xGrad * swMag - (yGrad + xGrad) * sMag)
            : absxGrad >= absyGrad
                ? (tmp = absxGrad * gradMag) >= Abs(yGrad * seMag + (xGrad - yGrad) * eMag)
                    && tmp > Abs(yGrad * nwMag + (xGrad - yGrad) * wMag)
                : (tmp = absyGrad * gradMag) >= Abs(xGrad * seMag + (yGrad - xGrad) * sMag)
                    && tmp > Abs(xGrad * nwMag + (yGrad - xGrad) * nMag));
        g[i0] = gg ? (gradMag >= MAGNITUDE_LIMIT ? MAGNITUDE_MAX : Floor(MAGNITUDE_SCALE * gradMag)) : 0;
    }
    if ( sat )
    {
        // integral (canny) gradient
        // first row
        for(i=0,sum=0; i<w; i++) { sum += g[i]; g[i] = sum; }
        // other rows
        for(i=w,k=0,sum=0; i<count; i++,k++)
        {
            if(k>=w) { k=0; sum=0; }
            sum += g[i]; g[i] = g[i-w] + sum;
        }
        return g;
    }
    else
    {
        // full (canny) gradient
        // reset image
        if ( stride ) for (i=0; i<imSize; i+=4) { im[i] = im[i+1] = im[i+2] = 0; }
        else for (i=0; i<imSize; i++) { im[i] = 0; }

        //hysteresis and double-threshold, inlined
        for (i=0,j=0,index=0,k=0; index<count; index++,k=index<<stride,i++) 
        {
            if ( i >= w ){ i=0; j++; }
            if ( (0 !== im[k]) || (g[index] < high) ) continue;
            
            x0 = i; y0 = j; ii = k;
            do {
                // threshold here
                if ( stride ) { im[ii] = im[ii+1] = im[ii+2] = 255; }
                else { im[ii] = 255; }
                
                x1 = x0 === 0 ? x0 : x0-1;
                x2 = x0 === w_1 ? x0 : x0+1;
                y1 = y0 === 0 ? y0 : y0-1;
                y2 = y0 === h_1 ? y0 : y0+1;
                y0w = y1*w;
                x = x1; y = y1; yw = y0w; followedge = 0;
                while (x <= x2 && y <= y2)
                {
                    jj = x + yw; ii = jj << stride;
                    if ( (y !== y1 || x !== x1) && (0 === im[ii]) && (g[jj] >= low) ) 
                    {
                        x0 = x; y0 = y;
                        followedge = 1; break;
                    }
                    y++; yw+=w; if ( y>y2 ){y=y0; yw=y0w; x++;}
                }
            } while(followedge);
        }
        return im;
    }
}

// speed-up convolution for special kernels like moving-average
function integral_convolution( mode, im, w, h, stride, matrix, matrix2, dimX, dimY, coeff1, coeff2, numRepeats )
{
    //"use asm";
    var imLen=im.length, imArea=imLen>>>stride, integral, integralLen, colR, colG, colB,
        matRadiusX=dimX, matRadiusY=dimY, matHalfSideX, matHalfSideY, matArea,
        dst, rowLen, matOffsetLeft, matOffsetRight, matOffsetTop, matOffsetBottom,
        i, j, x, y, ty, wt, wtCenter, centerOffset, wt2, wtCenter2, centerOffset2,
        xOff1, yOff1, xOff2, yOff2, bx1, by1, bx2, by2, p1, p2, p3, p4, t0, t1, t2,
        r, g, b, r2, g2, b2, repeat, tmp, w4 = w<<stride, ii = 1<<stride;
    
    // convolution speed-up based on the integral image concept and symmetric / separable kernels
    
    // pre-compute indices, 
    // reduce redundant computations inside the main convolution loop (faster)
    matArea = matRadiusX*matRadiusY;
    matHalfSideX = matRadiusX>>>1;  matHalfSideY = w*(matRadiusY>>>1);
    // one additional offest needed due to integral computation
    matOffsetLeft = -matHalfSideX-1; matOffsetTop = -matHalfSideY-w;
    matOffsetRight = matHalfSideX; matOffsetBottom = matHalfSideY;
    bx1 = 0; bx2 = w-1; by1 = 0; by2 = imArea-w;
    
    dst = im; im = new IMG(imLen);
    numRepeats = numRepeats||1;
    
    if ( MODE.GRAY === mode )
    {
        integralLen = imArea;  rowLen = w;
        integral = new A32F(integralLen);
        
        if (matrix2) // allow to compute a second matrix in-parallel
        {
            wt = matrix[0]; wtCenter = matrix[matArea>>>1]; centerOffset = wtCenter-wt;
            wt2 = matrix2[0]; wtCenter2 = matrix2[matArea>>>1]; centerOffset2 = wtCenter2-wt2;
            
            // do this multiple times??
            for(repeat=0; repeat<numRepeats; repeat++)
            {
                //dst = new IMG(imLen); integral = new A32F(integralLen);
                tmp = im; im = dst; dst = tmp;

                // compute integral of image in one pass
                
                // first row
                i=0; j=0; colR=0;
                for (x=0; x<w; x++, i+=ii, j++)
                {
                    colR+=im[i]; integral[j]=colR;
                }
                // other rows
                j=0; x=0; colR=0;
                for (i=w4; i<imLen; i+=ii, j++, x++)
                {
                    if (x>=w) { x=0; colR=0; }
                    colR+=im[i]; integral[j+rowLen]=integral[j]+colR; 
                }
                
                
                // now can compute any symmetric convolution kernel in constant time 
                // depending only on image dimensions, regardless of matrix radius
                
                // do direct convolution
                x=0; y=0; ty=0;
                for (i=0; i<imLen; i+=ii, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; y++; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    xOff1=x + matOffsetLeft; yOff1=ty + matOffsetTop;
                    xOff2=x + matOffsetRight; yOff2=ty + matOffsetBottom;
                    
                    // fix borders
                    xOff1 = xOff1<bx1 ? bx1 : xOff1;
                    xOff2 = xOff2>bx2 ? bx2 : xOff2;
                    yOff1 = yOff1<by1 ? by1 : yOff1;
                    yOff2 = yOff2>by2 ? by2 : yOff2;
                    
                    // compute integral positions
                    p1=xOff1 + yOff1; p4=xOff2 + yOff2; p2=xOff2 + yOff1; p3=xOff1 + yOff2;
                    
                    // compute matrix sum of these elements (trying to avoid possible overflow in the process, order of summation can matter)
                    // also fix the center element (in case it is different)
                    r = wt * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset * im[i  ]);
                    r2 = wt2 * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset2 * im[i  ]);
                    
                    // output
                    t0 = coeff1*r + coeff2*r2;
                    dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
                // do another pass??
            }
        }
        else
        {
            wt = matrix[0]; wtCenter = matrix[matArea>>>1]; centerOffset = wtCenter-wt;
        
            // do this multiple times??
            for(repeat=0; repeat<numRepeats; repeat++)
            {
                //dst = new IMG(imLen); integral = new A32F(integralLen);
                tmp = im; im = dst; dst = tmp;
                
                // compute integral of image in one pass
                
                // first row
                i=0; j=0; colR=0;
                for (x=0; x<w; x++, i+=ii,j++)
                {
                    colR+=im[i]; integral[j]=colR;
                }
                // other rows
                j=0; x=0; colR=0;
                for (i=w4; i<imLen; i+=ii, j++, x++)
                {
                    if (x>=w) { x=0; colR=0; }
                    colR+=im[i]; integral[j+rowLen  ]=integral[j  ]+colR; 
                }
                
                // now can compute any symmetric convolution kernel in constant time 
                // depending only on image dimensions, regardless of matrix radius
                
                // do direct convolution
                x=0; y=0; ty=0;
                for (i=0; i<imLen; i+=ii, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; y++; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    xOff1=x + matOffsetLeft; yOff1=ty + matOffsetTop;
                    xOff2=x + matOffsetRight; yOff2=ty + matOffsetBottom;
                    
                    // fix borders
                    xOff1 = xOff1<bx1 ? bx1 : xOff1;
                    xOff2 = xOff2>bx2 ? bx2 : xOff2;
                    yOff1 = yOff1<by1 ? by1 : yOff1;
                    yOff2 = yOff2>by2 ? by2 : yOff2;
                    
                    // compute integral positions
                    p1=xOff1 + yOff1; p4=xOff2 + yOff2; p2=xOff2 + yOff1; p3=xOff1 + yOff2;
                    
                    // compute matrix sum of these elements (trying to avoid possible overflow in the process, order of summation can matter)
                    // also fix the center element (in case it is different)
                    r = wt * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset * im[i  ]);
                    
                    // output
                    t0 = coeff1*r + coeff2;
                    dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
                // do another pass??
            }
        }
    }
    else
    {
        integralLen = (imArea<<1)+imArea;  rowLen = (w<<1)+w;
        integral = new A32F(integralLen);
        
        if (matrix2) // allow to compute a second matrix in-parallel
        {
            wt = matrix[0]; wtCenter = matrix[matArea>>>1]; centerOffset = wtCenter-wt;
            wt2 = matrix2[0]; wtCenter2 = matrix2[matArea>>>1]; centerOffset2 = wtCenter2-wt2;
            
            // do this multiple times??
            for(repeat=0; repeat<numRepeats; repeat++)
            {
                //dst = new IMG(imLen); integral = new A32F(integralLen);
                tmp = im; im = dst; dst = tmp;

                // compute integral of image in one pass
                
                // first row
                i=0; j=0; colR=colG=colB=0;
                for (x=0; x<w; x++, i+=ii, j+=3)
                {
                    colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
                    integral[j]=colR; integral[j+1]=colG; integral[j+2]=colB;
                }
                // other rows
                j=0; x=0; colR=colG=colB=0;
                for (i=w4; i<imLen; i+=ii, j+=3, x++)
                {
                    if (x>=w) { x=0; colR=colG=colB=0; }
                    colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
                    integral[j+rowLen]=integral[j]+colR; 
                    integral[j+rowLen+1]=integral[j+1]+colG; 
                    integral[j+rowLen+2]=integral[j+2]+colB;
                }
                
                
                // now can compute any symmetric convolution kernel in constant time 
                // depending only on image dimensions, regardless of matrix radius
                
                // do direct convolution
                x=0; y=0; ty=0;
                for (i=0; i<imLen; i+=ii, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; y++; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    xOff1=x + matOffsetLeft; yOff1=ty + matOffsetTop;
                    xOff2=x + matOffsetRight; yOff2=ty + matOffsetBottom;
                    
                    // fix borders
                    xOff1 = xOff1<bx1 ? bx1 : xOff1;
                    xOff2 = xOff2>bx2 ? bx2 : xOff2;
                    yOff1 = yOff1<by1 ? by1 : yOff1;
                    yOff2 = yOff2>by2 ? by2 : yOff2;
                    
                    // compute integral positions
                    p1=xOff1 + yOff1; p4=xOff2 + yOff2; p2=xOff2 + yOff1; p3=xOff1 + yOff2;
                    // arguably faster way to write p1*=3; etc..
                    p1=(p1<<1) + p1; p2=(p2<<1) + p2; p3=(p3<<1) + p3; p4=(p4<<1) + p4;
                    
                    // compute matrix sum of these elements (trying to avoid possible overflow in the process, order of summation can matter)
                    // also fix the center element (in case it is different)
                    r = wt * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset * im[i  ]);
                    g = wt * (integral[p4+1] - integral[p2+1] - integral[p3+1] + integral[p1+1])  +  (centerOffset * im[i+1]);
                    b = wt * (integral[p4+2] - integral[p2+2] - integral[p3+2] + integral[p1+2])  +  (centerOffset * im[i+2]);
                    
                    r2 = wt2 * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset2 * im[i  ]);
                    g2 = wt2 * (integral[p4+1] - integral[p2+1] - integral[p3+1] + integral[p1+1])  +  (centerOffset2 * im[i+1]);
                    b2 = wt2 * (integral[p4+2] - integral[p2+2] - integral[p3+2] + integral[p1+2])  +  (centerOffset2 * im[i+2]);
                    
                    // output
                    t0 = coeff1*r + coeff2*r2; t1 = coeff1*g + coeff2*g2; t2 = coeff1*b + coeff2*b2;
                    dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
                
                // do another pass??
            }
        }
        else
        {
            wt = matrix[0]; wtCenter = matrix[matArea>>>1]; centerOffset = wtCenter-wt;
        
            // do this multiple times??
            for(repeat=0; repeat<numRepeats; repeat++)
            {
                //dst = new IMG(imLen); integral = new A32F(integralLen);
                tmp = im; im = dst; dst = tmp;
                
                // compute integral of image in one pass
                
                // first row
                i=0; j=0; colR=colG=colB=0;
                for (x=0; x<w; x++, i+=ii, j+=3)
                {
                    colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
                    integral[j]=colR; integral[j+1]=colG; integral[j+2]=colB;
                }
                // other rows
                j=0; x=0; colR=colG=colB=0;
                for (i=w4; i<imLen; i+=ii, j+=3, x++)
                {
                    if (x>=w) { x=0; colR=colG=colB=0; }
                    colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
                    integral[j+rowLen  ]=integral[j  ]+colR; 
                    integral[j+rowLen+1]=integral[j+1]+colG; 
                    integral[j+rowLen+2]=integral[j+2]+colB;
                }
                
                // now can compute any symmetric convolution kernel in constant time 
                // depending only on image dimensions, regardless of matrix radius
                
                // do direct convolution
                x=0; y=0; ty=0;
                for (i=0; i<imLen; i+=ii, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; y++; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    xOff1=x + matOffsetLeft; yOff1=ty + matOffsetTop;
                    xOff2=x + matOffsetRight; yOff2=ty + matOffsetBottom;
                    
                    // fix borders
                    xOff1 = xOff1<bx1 ? bx1 : xOff1;
                    xOff2 = xOff2>bx2 ? bx2 : xOff2;
                    yOff1 = yOff1<by1 ? by1 : yOff1;
                    yOff2 = yOff2>by2 ? by2 : yOff2;
                    
                    // compute integral positions
                    p1=xOff1 + yOff1; p4=xOff2 + yOff2; p2=xOff2 + yOff1; p3=xOff1 + yOff2;
                    // arguably faster way to write p1*=3; etc..
                    p1=(p1<<1) + p1; p2=(p2<<1) + p2; p3=(p3<<1) + p3; p4=(p4<<1) + p4;
                    
                    // compute matrix sum of these elements (trying to avoid possible overflow in the process, order of summation can matter)
                    // also fix the center element (in case it is different)
                    r = wt * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset * im[i  ]);
                    g = wt * (integral[p4+1] - integral[p2+1] - integral[p3+1] + integral[p1+1])  +  (centerOffset * im[i+1]);
                    b = wt * (integral[p4+2] - integral[p2+2] - integral[p3+2] + integral[p1+2])  +  (centerOffset * im[i+2]);
                    
                    // output
                    t0 = coeff1*r + coeff2; t1 = coeff1*g + coeff2; t2 = coeff1*b + coeff2;
                    dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
                // do another pass??
            }
        }
    }
    return dst;
}
function integral_convolution_clamp( mode, im, w, h, stride, matrix, matrix2, dimX, dimY, coeff1, coeff2, numRepeats )
{
    //"use asm";
    var imLen=im.length, imArea=imLen>>>stride, integral, integralLen, colR, colG, colB,
        matRadiusX=dimX, matRadiusY=dimY, matHalfSideX, matHalfSideY, matArea,
        dst, rowLen, matOffsetLeft, matOffsetRight, matOffsetTop, matOffsetBottom,
        i, j, x, y, ty, wt, wtCenter, centerOffset, wt2, wtCenter2, centerOffset2,
        xOff1, yOff1, xOff2, yOff2, bx1, by1, bx2, by2, p1, p2, p3, p4, t0, t1, t2,
        r, g, b, r2, g2, b2, repeat, tmp, w4 = w<<stride, ii = 1<<stride;
    
    // convolution speed-up based on the integral image concept and symmetric / separable kernels
    
    // pre-compute indices, 
    // reduce redundant computations inside the main convolution loop (faster)
    matArea = matRadiusX*matRadiusY;
    matHalfSideX = matRadiusX>>>1;  matHalfSideY = w*(matRadiusY>>>1);
    // one additional offest needed due to integral computation
    matOffsetLeft = -matHalfSideX-1; matOffsetTop = -matHalfSideY-w;
    matOffsetRight = matHalfSideX; matOffsetBottom = matHalfSideY;
    bx1 = 0; bx2 = w-1; by1 = 0; by2 = imArea-w;
    
    dst = im; im = new IMG(imLen);
    numRepeats = numRepeats||1;
    
    if ( MODE.GRAY === mode )
    {
        integralLen = imArea;  rowLen = w;
        integral = new A32F(integralLen);
        
        if (matrix2) // allow to compute a second matrix in-parallel
        {
            wt = matrix[0]; wtCenter = matrix[matArea>>>1]; centerOffset = wtCenter-wt;
            wt2 = matrix2[0]; wtCenter2 = matrix2[matArea>>>1]; centerOffset2 = wtCenter2-wt2;
            
            // do this multiple times??
            for(repeat=0; repeat<numRepeats; repeat++)
            {
                //dst = new IMG(imLen); integral = new A32F(integralLen);
                tmp = im; im = dst; dst = tmp;

                // compute integral of image in one pass
                
                // first row
                i=0; j=0; colR=0;
                for (x=0; x<w; x++, i+=ii, j++)
                {
                    colR+=im[i]; integral[j]=colR;
                }
                // other rows
                j=0; x=0; colR=0;
                for (i=w4; i<imLen; i+=ii, j++, x++)
                {
                    if (x>=w) { x=0; colR=0; }
                    colR+=im[i]; integral[j+rowLen]=integral[j]+colR; 
                }
                
                
                // now can compute any symmetric convolution kernel in constant time 
                // depending only on image dimensions, regardless of matrix radius
                
                // do direct convolution
                x=0; y=0; ty=0;
                for (i=0; i<imLen; i+=ii, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; y++; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    xOff1=x + matOffsetLeft; yOff1=ty + matOffsetTop;
                    xOff2=x + matOffsetRight; yOff2=ty + matOffsetBottom;
                    
                    // fix borders
                     xOff1 = xOff1<bx1 ? bx1 : xOff1;
                     xOff2 = xOff2>bx2 ? bx2 : xOff2;
                     yOff1 = yOff1<by1 ? by1 : yOff1;
                     yOff2 = yOff2>by2 ? by2 : yOff2;
                    
                    // compute integral positions
                    p1=xOff1 + yOff1; p4=xOff2 + yOff2; p2=xOff2 + yOff1; p3=xOff1 + yOff2;
                    
                    // compute matrix sum of these elements (trying to avoid possible overflow in the process, order of summation can matter)
                    // also fix the center element (in case it is different)
                    r = wt * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset * im[i  ]);
                    r2 = wt2 * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset2 * im[i  ]);
                    
                    // output
                    t0 = coeff1*r + coeff2*r2;
                    // clamp them manually
                    t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                    dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
                // do another pass??
            }
        }
        else
        {
            wt = matrix[0]; wtCenter = matrix[matArea>>>1]; centerOffset = wtCenter-wt;
        
            // do this multiple times??
            for(repeat=0; repeat<numRepeats; repeat++)
            {
                //dst = new IMG(imLen); integral = new A32F(integralLen);
                tmp = im; im = dst; dst = tmp;
                
                // compute integral of image in one pass
                
                // first row
                i=0; j=0; colR=0;
                for (x=0; x<w; x++, i+=ii,j++)
                {
                    colR+=im[i]; integral[j]=colR;
                }
                // other rows
                j=0; x=0; colR=0;
                for (i=w4; i<imLen; i+=ii, j++, x++)
                {
                    if (x>=w) { x=0; colR=0; }
                    colR+=im[i]; integral[j+rowLen  ]=integral[j  ]+colR; 
                }
                
                // now can compute any symmetric convolution kernel in constant time 
                // depending only on image dimensions, regardless of matrix radius
                
                // do direct convolution
                x=0; y=0; ty=0;
                for (i=0; i<imLen; i+=ii, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; y++; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    xOff1=x + matOffsetLeft; yOff1=ty + matOffsetTop;
                    xOff2=x + matOffsetRight; yOff2=ty + matOffsetBottom;
                    
                    // fix borders
                     xOff1 = xOff1<bx1 ? bx1 : xOff1;
                     xOff2 = xOff2>bx2 ? bx2 : xOff2;
                     yOff1 = yOff1<by1 ? by1 : yOff1;
                     yOff2 = yOff2>by2 ? by2 : yOff2;
                    
                    // compute integral positions
                    p1=xOff1 + yOff1; p4=xOff2 + yOff2; p2=xOff2 + yOff1; p3=xOff1 + yOff2;
                    
                    // compute matrix sum of these elements (trying to avoid possible overflow in the process, order of summation can matter)
                    // also fix the center element (in case it is different)
                    r = wt * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset * im[i  ]);
                    
                    // output
                    t0 = coeff1*r + coeff2;
                    // clamp them manually
                    t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                    dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
                // do another pass??
            }
        }
    }
    else
    {
        integralLen = (imArea<<1)+imArea;  rowLen = (w<<1)+w;
        integral = new A32F(integralLen);
        
        if (matrix2) // allow to compute a second matrix in-parallel
        {
            wt = matrix[0]; wtCenter = matrix[matArea>>>1]; centerOffset = wtCenter-wt;
            wt2 = matrix2[0]; wtCenter2 = matrix2[matArea>>>1]; centerOffset2 = wtCenter2-wt2;
            
            // do this multiple times??
            for(repeat=0; repeat<numRepeats; repeat++)
            {
                //dst = new IMG(imLen); integral = new A32F(integralLen);
                tmp = im; im = dst; dst = tmp;

                // compute integral of image in one pass
                
                // first row
                i=0; j=0; colR=colG=colB=0;
                for (x=0; x<w; x++, i+=ii, j+=3)
                {
                    colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
                    integral[j]=colR; integral[j+1]=colG; integral[j+2]=colB;
                }
                // other rows
                j=0; x=0; colR=colG=colB=0;
                for (i=w4; i<imLen; i+=ii, j+=3, x++)
                {
                    if (x>=w) { x=0; colR=colG=colB=0; }
                    colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
                    integral[j+rowLen]=integral[j]+colR; 
                    integral[j+rowLen+1]=integral[j+1]+colG; 
                    integral[j+rowLen+2]=integral[j+2]+colB;
                }
                
                
                // now can compute any symmetric convolution kernel in constant time 
                // depending only on image dimensions, regardless of matrix radius
                
                // do direct convolution
                x=0; y=0; ty=0;
                for (i=0; i<imLen; i+=ii, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; y++; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    xOff1=x + matOffsetLeft; yOff1=ty + matOffsetTop;
                    xOff2=x + matOffsetRight; yOff2=ty + matOffsetBottom;
                    
                    // fix borders
                    xOff1 = xOff1<bx1 ? bx1 : xOff1;
                    xOff2 = xOff2>bx2 ? bx2 : xOff2;
                    yOff1 = yOff1<by1 ? by1 : yOff1;
                    yOff2 = yOff2>by2 ? by2 : yOff2;
                    
                    // compute integral positions
                    p1=xOff1 + yOff1; p4=xOff2 + yOff2; p2=xOff2 + yOff1; p3=xOff1 + yOff2;
                    // arguably faster way to write p1*=3; etc..
                    p1=(p1<<1) + p1; p2=(p2<<1) + p2; p3=(p3<<1) + p3; p4=(p4<<1) + p4;
                    
                    // compute matrix sum of these elements (trying to avoid possible overflow in the process, order of summation can matter)
                    // also fix the center element (in case it is different)
                    r = wt * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset * im[i  ]);
                    g = wt * (integral[p4+1] - integral[p2+1] - integral[p3+1] + integral[p1+1])  +  (centerOffset * im[i+1]);
                    b = wt * (integral[p4+2] - integral[p2+2] - integral[p3+2] + integral[p1+2])  +  (centerOffset * im[i+2]);
                    
                    r2 = wt2 * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset2 * im[i  ]);
                    g2 = wt2 * (integral[p4+1] - integral[p2+1] - integral[p3+1] + integral[p1+1])  +  (centerOffset2 * im[i+1]);
                    b2 = wt2 * (integral[p4+2] - integral[p2+2] - integral[p3+2] + integral[p1+2])  +  (centerOffset2 * im[i+2]);
                    
                    // output
                    t0 = coeff1*r + coeff2*r2; t1 = coeff1*g + coeff2*g2; t2 = coeff1*b + coeff2*b2;
                    // clamp them manually
                    t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                    t1 = t1<0 ? 0 : (t1>255 ? 255 : t1);
                    t2 = t2<0 ? 0 : (t2>255 ? 255 : t2);
                    dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
                
                // do another pass??
            }
        }
        else
        {
            wt = matrix[0]; wtCenter = matrix[matArea>>>1]; centerOffset = wtCenter-wt;
        
            // do this multiple times??
            for(repeat=0; repeat<numRepeats; repeat++)
            {
                //dst = new IMG(imLen); integral = new A32F(integralLen);
                tmp = im; im = dst; dst = tmp;
                
                // compute integral of image in one pass
                
                // first row
                i=0; j=0; colR=colG=colB=0;
                for (x=0; x<w; x++, i+=ii, j+=3)
                {
                    colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
                    integral[j]=colR; integral[j+1]=colG; integral[j+2]=colB;
                }
                // other rows
                j=0; x=0; colR=colG=colB=0;
                for (i=w4; i<imLen; i+=ii, j+=3, x++)
                {
                    if (x>=w) { x=0; colR=colG=colB=0; }
                    colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
                    integral[j+rowLen  ]=integral[j  ]+colR; 
                    integral[j+rowLen+1]=integral[j+1]+colG; 
                    integral[j+rowLen+2]=integral[j+2]+colB;
                }
                
                // now can compute any symmetric convolution kernel in constant time 
                // depending only on image dimensions, regardless of matrix radius
                
                // do direct convolution
                x=0; y=0; ty=0;
                for (i=0; i<imLen; i+=ii, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; y++; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    xOff1=x + matOffsetLeft; yOff1=ty + matOffsetTop;
                    xOff2=x + matOffsetRight; yOff2=ty + matOffsetBottom;
                    
                    // fix borders
                    xOff1 = xOff1<bx1 ? bx1 : xOff1;
                    xOff2 = xOff2>bx2 ? bx2 : xOff2;
                    yOff1 = yOff1<by1 ? by1 : yOff1;
                    yOff2 = yOff2>by2 ? by2 : yOff2;
                    
                    // compute integral positions
                    p1=xOff1 + yOff1; p4=xOff2 + yOff2; p2=xOff2 + yOff1; p3=xOff1 + yOff2;
                    // arguably faster way to write p1*=3; etc..
                    p1=(p1<<1) + p1; p2=(p2<<1) + p2; p3=(p3<<1) + p3; p4=(p4<<1) + p4;
                    
                    // compute matrix sum of these elements (trying to avoid possible overflow in the process, order of summation can matter)
                    // also fix the center element (in case it is different)
                    r = wt * (integral[p4  ] - integral[p2  ] - integral[p3  ] + integral[p1  ])  +  (centerOffset * im[i  ]);
                    g = wt * (integral[p4+1] - integral[p2+1] - integral[p3+1] + integral[p1+1])  +  (centerOffset * im[i+1]);
                    b = wt * (integral[p4+2] - integral[p2+2] - integral[p3+2] + integral[p1+2])  +  (centerOffset * im[i+2]);
                    
                    // output
                    t0 = coeff1*r + coeff2; t1 = coeff1*g + coeff2; t2 = coeff1*b + coeff2;
                    // clamp them manually
                    t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                    t1 = t1<0 ? 0 : (t1>255 ? 255 : t1);
                    t2 = t2<0 ? 0 : (t2>255 ? 255 : t2);
                    dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
                
                // do another pass??
            }
        }
    }
    return dst;
}
// speed-up convolution for separable kernels
function separable_convolution( mode, im, w, h, stride, matrix, matrix2, ind1, ind2, coeff1, coeff2 )
{
    //"use asm";
    var imLen=im.length, imArea=imLen>>>stride,
        matArea, mat, indices, matArea2,
        dst, imageIndices, imageIndices1, imageIndices2,
        i, j, k, x, ty, ty2, ii = 1<<stride,
        xOff, yOff, bx, by, t0, t1, t2, t3, wt,
        r, g, b, a, coeff, numPasses, tmp;
    
    // pre-compute indices, 
    // reduce redundant computations inside the main convolution loop (faster)
    bx = w-1; by = imArea-w;
    // pre-compute indices, 
    // reduce redundant computations inside the main convolution loop (faster)
    imageIndices1 = new A16I(ind1);
    for (k=0,matArea2=ind1.length; k<matArea2; k+=2) imageIndices1[k+1] *= w;
    imageIndices2 = new A16I(ind2);
    for (k=0,matArea2=ind2.length; k<matArea2; k+=2) imageIndices2[k+1] *= w;

    // one horizontal and one vertical pass
    numPasses = 2;
    mat = matrix;
    indices = ind1;
    coeff = coeff1;
    imageIndices = imageIndices1;
    dst = im; im = new IMG(imLen);
    
    if ( MODE.GRAY === mode )
    {
        while (numPasses--)
        {
            tmp = im; im = dst; dst = tmp;
            matArea = mat.length;
            matArea2 = indices.length;
            
            // do direct convolution
            x=0; ty=0;
            for (i=0; i<imLen; i+=ii, x++)
            {
                // update image coordinates
                if (x>=w) { x=0; ty+=w; }
                
                // calculate the weighed sum of the source image pixels that
                // fall under the convolution matrix
                r=g=b=a=0;
                for (k=0, j=0; k<matArea; k++, j+=2)
                {
                    xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                    if (xOff>=0 && xOff<=bx && yOff>=0 && yOff<=by)
                    {
                        srcOff = (xOff + yOff)<<2; wt = mat[k];
                        r += im[srcOff] * wt;
                    }
                }
                
                // output
                t0 = coeff * r;
                dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                // alpha channel is not transformed
                dst[i+3] = im[i+3];
            }
            // do another pass??
            mat = matrix2;
            indices = ind2;
            coeff = coeff2;
            imageIndices = imageIndices2;
        }
    }
    else
    {
        while (numPasses--)
        {
            tmp = im; im = dst; dst = tmp;
            matArea = mat.length;
            matArea2 = indices.length;
            
            // do direct convolution
            x=0; ty=0;
            for (i=0; i<imLen; i+=ii, x++)
            {
                // update image coordinates
                if (x>=w) { x=0; ty+=w; }
                
                // calculate the weighed sum of the source image pixels that
                // fall under the convolution matrix
                r=g=b=a=0;
                for (k=0, j=0; k<matArea; k++, j+=2)
                {
                    xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                    if (xOff>=0 && xOff<=bx && yOff>=0 && yOff<=by)
                    {
                        srcOff = (xOff + yOff)<<2; wt = mat[k];
                        r += im[srcOff] * wt; g += im[srcOff+1] * wt;  b += im[srcOff+2] * wt;
                        //a += im[srcOff+3] * wt;
                    }
                }
                
                // output
                t0 = coeff * r;  t1 = coeff * g;  t2 = coeff * b;
                dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                // alpha channel is not transformed
                dst[i+3] = im[i+3];
            }
            // do another pass??
            mat = matrix2;
            indices = ind2;
            coeff = coeff2;
            imageIndices = imageIndices2;
        }
    }
    return dst;
}
function separable_convolution_clamp( mode, im, w, h, stride, matrix, matrix2, ind1, ind2, coeff1, coeff2 )
{
    //"use asm";
    var imLen=im.length, imArea=imLen>>>stride,
        matArea, mat, indices, matArea2,
        dst, imageIndices, imageIndices1, imageIndices2,
        i, j, k, x, ty, ty2, ii = 1<<stride,
        xOff, yOff, bx, by, t0, t1, t2, t3, wt,
        r, g, b, a, coeff, numPasses, tmp;
    
    // pre-compute indices, 
    // reduce redundant computations inside the main convolution loop (faster)
    bx = w-1; by = imArea-w;
    // pre-compute indices, 
    // reduce redundant computations inside the main convolution loop (faster)
    imageIndices1 = new A16I(ind1);
    for (k=0,matArea2=ind1.length; k<matArea2; k+=2) imageIndices1[k+1] *= w;
    imageIndices2 = new A16I(ind2);
    for (k=0,matArea2=ind2.length; k<matArea2; k+=2) imageIndices2[k+1] *= w;

    // one horizontal and one vertical pass
    numPasses = 2;
    mat = matrix;
    indices = ind1;
    coeff = coeff1;
    imageIndices = imageIndices1;
    dst = im; im = new IMG(imLen);
    
    if ( MODE.GRAY === mode )
    {
        while (numPasses--)
        {
            tmp = im; im = dst; dst = tmp;
            matArea = mat.length;
            matArea2 = indices.length;
            
            // do direct convolution
            x=0; ty=0;
            for (i=0; i<imLen; i+=ii, x++)
            {
                // update image coordinates
                if (x>=w) { x=0; ty+=w; }
                
                // calculate the weighed sum of the source image pixels that
                // fall under the convolution matrix
                r=g=b=a=0;
                for (k=0, j=0; k<matArea; k++, j+=2)
                {
                    xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                    if (xOff>=0 && xOff<=bx && yOff>=0 && yOff<=by)
                    {
                        srcOff = (xOff + yOff)<<2; wt = mat[k];
                        r += im[srcOff] * wt;
                    }
                }
                
                // output
                t0 = coeff * r;
                // clamp them manually
                t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                // alpha channel is not transformed
                dst[i+3] = im[i+3];
            }
            // do another pass??
            mat = matrix2;
            indices = ind2;
            coeff = coeff2;
            imageIndices = imageIndices2;
        }
    }
    else
    {
        while (numPasses--)
        {
            tmp = im; im = dst; dst = tmp;
            matArea = mat.length;
            matArea2 = indices.length;
            
            // do direct convolution
            x=0; ty=0;
            for (i=0; i<imLen; i+=ii, x++)
            {
                // update image coordinates
                if (x>=w) { x=0; ty+=w; }
                
                // calculate the weighed sum of the source image pixels that
                // fall under the convolution matrix
                r=g=b=a=0;
                for (k=0, j=0; k<matArea; k++, j+=2)
                {
                    xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                    if (xOff>=0 && xOff<=bx && yOff>=0 && yOff<=by)
                    {
                        srcOff = (xOff + yOff)<<2; wt = mat[k];
                        r += im[srcOff] * wt; g += im[srcOff+1] * wt;  b += im[srcOff+2] * wt;
                        //a += im[srcOff+3] * wt;
                    }
                }
                
                // output
                t0 = coeff * r;  t1 = coeff * g;  t2 = coeff * b;
                // clamp them manually
                t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                t1 = t1<0 ? 0 : (t1>255 ? 255 : t1);
                t2 = t2<0 ? 0 : (t2>255 ? 255 : t2);
                dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                // alpha channel is not transformed
                dst[i+3] = im[i+3];
            }
            // do another pass??
            mat = matrix2;
            indices = ind2;
            coeff = coeff2;
            imageIndices = imageIndices2;
        }
    }
    return dst;
}
/*
function algebraic_combination( /*c, f1, im1, f2, im2, ..* / )
{
    var args = arguments, argslen = args.length, c = args[0],
        f = args[1], im = args[2], imLen = im.length, res = new IMG(imLen), r, g, b, a, i, k = 0;
    while ( k+2 < argslen )
    {
        f = args[++k]; im = args[++k];
        for(i=0; i<imLen; i+=4)
        {
            r = f*im[i  ] + c;
            g = f*im[i+1] + c;
            b = f*im[i+2] + c;
            a = f*im[i+3] + c;
            res[i  ] = r|0;
            res[i+1] = g|0;
            res[i+2] = b|0;
            res[i+3] = a|0;
        }
        c = 0;
    }
    return res;
}*/
function ct_eye( c1, c0 )
{
    if ( null == c0 ) c0 = 0;
    if ( null == c1 ) c1 = 1;
    var i, t = new ColorTable(256);
    if ( "function" === typeof c1 )
    {
        for(i=0; i<256; i+=32)
        {
            t[i   ] = clamp(c1(i   ),0,255)|0;
            t[i+1 ] = clamp(c1(i+1 ),0,255)|0;
            t[i+2 ] = clamp(c1(i+2 ),0,255)|0;
            t[i+3 ] = clamp(c1(i+3 ),0,255)|0;
            t[i+4 ] = clamp(c1(i+4 ),0,255)|0;
            t[i+5 ] = clamp(c1(i+5 ),0,255)|0;
            t[i+6 ] = clamp(c1(i+6 ),0,255)|0;
            t[i+7 ] = clamp(c1(i+7 ),0,255)|0;
            t[i+8 ] = clamp(c1(i+8 ),0,255)|0;
            t[i+9 ] = clamp(c1(i+9 ),0,255)|0;
            t[i+10] = clamp(c1(i+10),0,255)|0;
            t[i+11] = clamp(c1(i+11),0,255)|0;
            t[i+12] = clamp(c1(i+12),0,255)|0;
            t[i+13] = clamp(c1(i+13),0,255)|0;
            t[i+14] = clamp(c1(i+14),0,255)|0;
            t[i+15] = clamp(c1(i+15),0,255)|0;
            t[i+16] = clamp(c1(i+16),0,255)|0;
            t[i+17] = clamp(c1(i+17),0,255)|0;
            t[i+18] = clamp(c1(i+18),0,255)|0;
            t[i+19] = clamp(c1(i+19),0,255)|0;
            t[i+20] = clamp(c1(i+20),0,255)|0;
            t[i+21] = clamp(c1(i+21),0,255)|0;
            t[i+22] = clamp(c1(i+22),0,255)|0;
            t[i+23] = clamp(c1(i+23),0,255)|0;
            t[i+24] = clamp(c1(i+24),0,255)|0;
            t[i+25] = clamp(c1(i+25),0,255)|0;
            t[i+26] = clamp(c1(i+26),0,255)|0;
            t[i+27] = clamp(c1(i+27),0,255)|0;
            t[i+28] = clamp(c1(i+28),0,255)|0;
            t[i+29] = clamp(c1(i+29),0,255)|0;
            t[i+30] = clamp(c1(i+30),0,255)|0;
            t[i+31] = clamp(c1(i+31),0,255)|0;
        }
    }
    else
    {
        for(i=0; i<256; i+=32)
        {
            t[i   ] = clamp(c0 + c1*(i   ),0,255)|0;
            t[i+1 ] = clamp(c0 + c1*(i+1 ),0,255)|0;
            t[i+2 ] = clamp(c0 + c1*(i+2 ),0,255)|0;
            t[i+3 ] = clamp(c0 + c1*(i+3 ),0,255)|0;
            t[i+4 ] = clamp(c0 + c1*(i+4 ),0,255)|0;
            t[i+5 ] = clamp(c0 + c1*(i+5 ),0,255)|0;
            t[i+6 ] = clamp(c0 + c1*(i+6 ),0,255)|0;
            t[i+7 ] = clamp(c0 + c1*(i+7 ),0,255)|0;
            t[i+8 ] = clamp(c0 + c1*(i+8 ),0,255)|0;
            t[i+9 ] = clamp(c0 + c1*(i+9 ),0,255)|0;
            t[i+10] = clamp(c0 + c1*(i+10),0,255)|0;
            t[i+11] = clamp(c0 + c1*(i+11),0,255)|0;
            t[i+12] = clamp(c0 + c1*(i+12),0,255)|0;
            t[i+13] = clamp(c0 + c1*(i+13),0,255)|0;
            t[i+14] = clamp(c0 + c1*(i+14),0,255)|0;
            t[i+15] = clamp(c0 + c1*(i+15),0,255)|0;
            t[i+16] = clamp(c0 + c1*(i+16),0,255)|0;
            t[i+17] = clamp(c0 + c1*(i+17),0,255)|0;
            t[i+18] = clamp(c0 + c1*(i+18),0,255)|0;
            t[i+19] = clamp(c0 + c1*(i+19),0,255)|0;
            t[i+20] = clamp(c0 + c1*(i+20),0,255)|0;
            t[i+21] = clamp(c0 + c1*(i+21),0,255)|0;
            t[i+22] = clamp(c0 + c1*(i+22),0,255)|0;
            t[i+23] = clamp(c0 + c1*(i+23),0,255)|0;
            t[i+24] = clamp(c0 + c1*(i+24),0,255)|0;
            t[i+25] = clamp(c0 + c1*(i+25),0,255)|0;
            t[i+26] = clamp(c0 + c1*(i+26),0,255)|0;
            t[i+27] = clamp(c0 + c1*(i+27),0,255)|0;
            t[i+28] = clamp(c0 + c1*(i+28),0,255)|0;
            t[i+29] = clamp(c0 + c1*(i+29),0,255)|0;
            t[i+30] = clamp(c0 + c1*(i+30),0,255)|0;
            t[i+31] = clamp(c0 + c1*(i+31),0,255)|0;
        }
    }
    return t;
}
// multiply (functionaly compose) 2 Color Tables
function ct_multiply( ct2, ct1 )
{
    var i, ct12 = new ColorTable(256);
    for(i=0; i<256; i+=64)
    { 
        ct12[i   ] = clamp(ct2[ clamp(ct1[i   ],0,255) ],0,255); 
        ct12[i+1 ] = clamp(ct2[ clamp(ct1[i+1 ],0,255) ],0,255); 
        ct12[i+2 ] = clamp(ct2[ clamp(ct1[i+2 ],0,255) ],0,255); 
        ct12[i+3 ] = clamp(ct2[ clamp(ct1[i+3 ],0,255) ],0,255); 
        ct12[i+4 ] = clamp(ct2[ clamp(ct1[i+4 ],0,255) ],0,255); 
        ct12[i+5 ] = clamp(ct2[ clamp(ct1[i+5 ],0,255) ],0,255); 
        ct12[i+6 ] = clamp(ct2[ clamp(ct1[i+6 ],0,255) ],0,255); 
        ct12[i+7 ] = clamp(ct2[ clamp(ct1[i+7 ],0,255) ],0,255); 
        ct12[i+8 ] = clamp(ct2[ clamp(ct1[i+8 ],0,255) ],0,255); 
        ct12[i+9 ] = clamp(ct2[ clamp(ct1[i+9 ],0,255) ],0,255); 
        ct12[i+10] = clamp(ct2[ clamp(ct1[i+10],0,255) ],0,255); 
        ct12[i+11] = clamp(ct2[ clamp(ct1[i+11],0,255) ],0,255); 
        ct12[i+12] = clamp(ct2[ clamp(ct1[i+12],0,255) ],0,255); 
        ct12[i+13] = clamp(ct2[ clamp(ct1[i+13],0,255) ],0,255); 
        ct12[i+14] = clamp(ct2[ clamp(ct1[i+14],0,255) ],0,255); 
        ct12[i+15] = clamp(ct2[ clamp(ct1[i+15],0,255) ],0,255); 
        ct12[i+16] = clamp(ct2[ clamp(ct1[i+16],0,255) ],0,255); 
        ct12[i+17] = clamp(ct2[ clamp(ct1[i+17],0,255) ],0,255); 
        ct12[i+18] = clamp(ct2[ clamp(ct1[i+18],0,255) ],0,255); 
        ct12[i+19] = clamp(ct2[ clamp(ct1[i+19],0,255) ],0,255); 
        ct12[i+20] = clamp(ct2[ clamp(ct1[i+20],0,255) ],0,255); 
        ct12[i+21] = clamp(ct2[ clamp(ct1[i+21],0,255) ],0,255); 
        ct12[i+22] = clamp(ct2[ clamp(ct1[i+22],0,255) ],0,255); 
        ct12[i+23] = clamp(ct2[ clamp(ct1[i+23],0,255) ],0,255); 
        ct12[i+24] = clamp(ct2[ clamp(ct1[i+24],0,255) ],0,255); 
        ct12[i+25] = clamp(ct2[ clamp(ct1[i+25],0,255) ],0,255); 
        ct12[i+26] = clamp(ct2[ clamp(ct1[i+26],0,255) ],0,255); 
        ct12[i+27] = clamp(ct2[ clamp(ct1[i+27],0,255) ],0,255); 
        ct12[i+28] = clamp(ct2[ clamp(ct1[i+28],0,255) ],0,255); 
        ct12[i+29] = clamp(ct2[ clamp(ct1[i+29],0,255) ],0,255); 
        ct12[i+30] = clamp(ct2[ clamp(ct1[i+30],0,255) ],0,255); 
        ct12[i+31] = clamp(ct2[ clamp(ct1[i+31],0,255) ],0,255); 
        ct12[i+32] = clamp(ct2[ clamp(ct1[i+32],0,255) ],0,255); 
        ct12[i+33] = clamp(ct2[ clamp(ct1[i+33],0,255) ],0,255); 
        ct12[i+34] = clamp(ct2[ clamp(ct1[i+34],0,255) ],0,255); 
        ct12[i+35] = clamp(ct2[ clamp(ct1[i+35],0,255) ],0,255); 
        ct12[i+36] = clamp(ct2[ clamp(ct1[i+36],0,255) ],0,255); 
        ct12[i+37] = clamp(ct2[ clamp(ct1[i+37],0,255) ],0,255); 
        ct12[i+38] = clamp(ct2[ clamp(ct1[i+38],0,255) ],0,255); 
        ct12[i+39] = clamp(ct2[ clamp(ct1[i+39],0,255) ],0,255); 
        ct12[i+40] = clamp(ct2[ clamp(ct1[i+40],0,255) ],0,255); 
        ct12[i+41] = clamp(ct2[ clamp(ct1[i+41],0,255) ],0,255); 
        ct12[i+42] = clamp(ct2[ clamp(ct1[i+42],0,255) ],0,255); 
        ct12[i+43] = clamp(ct2[ clamp(ct1[i+43],0,255) ],0,255); 
        ct12[i+44] = clamp(ct2[ clamp(ct1[i+44],0,255) ],0,255); 
        ct12[i+45] = clamp(ct2[ clamp(ct1[i+45],0,255) ],0,255); 
        ct12[i+46] = clamp(ct2[ clamp(ct1[i+46],0,255) ],0,255); 
        ct12[i+47] = clamp(ct2[ clamp(ct1[i+47],0,255) ],0,255); 
        ct12[i+48] = clamp(ct2[ clamp(ct1[i+48],0,255) ],0,255); 
        ct12[i+49] = clamp(ct2[ clamp(ct1[i+49],0,255) ],0,255); 
        ct12[i+50] = clamp(ct2[ clamp(ct1[i+50],0,255) ],0,255); 
        ct12[i+51] = clamp(ct2[ clamp(ct1[i+51],0,255) ],0,255); 
        ct12[i+52] = clamp(ct2[ clamp(ct1[i+52],0,255) ],0,255); 
        ct12[i+53] = clamp(ct2[ clamp(ct1[i+53],0,255) ],0,255); 
        ct12[i+54] = clamp(ct2[ clamp(ct1[i+54],0,255) ],0,255); 
        ct12[i+55] = clamp(ct2[ clamp(ct1[i+55],0,255) ],0,255); 
        ct12[i+56] = clamp(ct2[ clamp(ct1[i+56],0,255) ],0,255); 
        ct12[i+57] = clamp(ct2[ clamp(ct1[i+57],0,255) ],0,255); 
        ct12[i+58] = clamp(ct2[ clamp(ct1[i+58],0,255) ],0,255); 
        ct12[i+59] = clamp(ct2[ clamp(ct1[i+59],0,255) ],0,255); 
        ct12[i+60] = clamp(ct2[ clamp(ct1[i+60],0,255) ],0,255); 
        ct12[i+61] = clamp(ct2[ clamp(ct1[i+61],0,255) ],0,255); 
        ct12[i+62] = clamp(ct2[ clamp(ct1[i+62],0,255) ],0,255); 
        ct12[i+63] = clamp(ct2[ clamp(ct1[i+63],0,255) ],0,255); 
    }
    return ct12;
}
function cm_eye( )
{
    return new ColorMatrix([
    1,0,0,0,0,
    0,1,0,0,0,
    0,0,1,0,0,
    0,0,0,1,0
    ]);
}
// multiply (functionaly compose, matrix multiply) 2 Color Matrices
/*
[ rr rg rb ra roff
  gr gg gb ga goff
  br bg bb ba boff
  ar ag ab aa aoff
  0  0  0  0  1 ]
*/
function cm_multiply( cm1, cm2 )
{
    var cm12 = new ColorMatrix(20);

    // unroll the loop completely
    // i=0
    cm12[ 0 ] = cm2[0]*cm1[0] + cm2[1]*cm1[5] + cm2[2]*cm1[10] + cm2[3]*cm1[15];
    cm12[ 1 ] = cm2[0]*cm1[1] + cm2[1]*cm1[6] + cm2[2]*cm1[11] + cm2[3]*cm1[16];
    cm12[ 2 ] = cm2[0]*cm1[2] + cm2[1]*cm1[7] + cm2[2]*cm1[12] + cm2[3]*cm1[17];
    cm12[ 3 ] = cm2[0]*cm1[3] + cm2[1]*cm1[8] + cm2[2]*cm1[13] + cm2[3]*cm1[18];
    cm12[ 4 ] = cm2[0]*cm1[4] + cm2[1]*cm1[9] + cm2[2]*cm1[14] + cm2[3]*cm1[19] + cm2[4];

    // i=5
    cm12[ 5 ] = cm2[5]*cm1[0] + cm2[6]*cm1[5] + cm2[7]*cm1[10] + cm2[8]*cm1[15];
    cm12[ 6 ] = cm2[5]*cm1[1] + cm2[6]*cm1[6] + cm2[7]*cm1[11] + cm2[8]*cm1[16];
    cm12[ 7 ] = cm2[5]*cm1[2] + cm2[6]*cm1[7] + cm2[7]*cm1[12] + cm2[8]*cm1[17];
    cm12[ 8 ] = cm2[5]*cm1[3] + cm2[6]*cm1[8] + cm2[7]*cm1[13] + cm2[8]*cm1[18];
    cm12[ 9 ] = cm2[5]*cm1[4] + cm2[6]*cm1[9] + cm2[7]*cm1[14] + cm2[8]*cm1[19] + cm2[9];

    // i=10
    cm12[ 10 ] = cm2[10]*cm1[0] + cm2[11]*cm1[5] + cm2[12]*cm1[10] + cm2[13]*cm1[15];
    cm12[ 11 ] = cm2[10]*cm1[1] + cm2[11]*cm1[6] + cm2[12]*cm1[11] + cm2[13]*cm1[16];
    cm12[ 12 ] = cm2[10]*cm1[2] + cm2[11]*cm1[7] + cm2[12]*cm1[12] + cm2[13]*cm1[17];
    cm12[ 13 ] = cm2[10]*cm1[3] + cm2[11]*cm1[8] + cm2[12]*cm1[13] + cm2[13]*cm1[18];
    cm12[ 14 ] = cm2[10]*cm1[4] + cm2[11]*cm1[9] + cm2[12]*cm1[14] + cm2[13]*cm1[19] + cm2[14];

    // i=15
    cm12[ 15 ] = cm2[15]*cm1[0] + cm2[16]*cm1[5] + cm2[17]*cm1[10] + cm2[18]*cm1[15];
    cm12[ 16 ] = cm2[15]*cm1[1] + cm2[16]*cm1[6] + cm2[17]*cm1[11] + cm2[18]*cm1[16];
    cm12[ 17 ] = cm2[15]*cm1[2] + cm2[16]*cm1[7] + cm2[17]*cm1[12] + cm2[18]*cm1[17];
    cm12[ 18 ] = cm2[15]*cm1[3] + cm2[16]*cm1[8] + cm2[17]*cm1[13] + cm2[18]*cm1[18];
    cm12[ 19 ] = cm2[15]*cm1[4] + cm2[16]*cm1[9] + cm2[17]*cm1[14] + cm2[18]*cm1[19] + cm2[19];

    return cm12;
}
function cm_rechannel( m, Ri, Gi, Bi, Ai, Ro, Go, Bo, Ao )
{
    var cm = new ColorMatrix(20), RO = Ro*5, GO = Go*5, BO = Bo*5, AO = Ao*5;
    cm[RO+Ri] = m[0 ]; cm[RO+Gi] = m[1 ]; cm[RO+Bi] = m[2 ]; cm[RO+Ai] = m[3 ]; cm[RO+4] = m[4 ];
    cm[GO+Ri] = m[5 ]; cm[GO+Gi] = m[6 ]; cm[GO+Bi] = m[7 ]; cm[GO+Ai] = m[8 ]; cm[GO+4] = m[9 ];
    cm[BO+Ri] = m[10]; cm[BO+Gi] = m[11]; cm[BO+Bi] = m[12]; cm[BO+Ai] = m[13]; cm[BO+4] = m[14];
    cm[AO+Ri] = m[15]; cm[AO+Gi] = m[16]; cm[AO+Bi] = m[17]; cm[AO+Ai] = m[18]; cm[AO+4] = m[19];
    return cm;
}
/*
[ 0xx 1xy 2xo 3xor
  4yx 5yy 6yo 7yor
  0   0   1   0
  0   0   0   1 ]
*/
function am_multiply( am1, am2 )
{
    var am12 = new AffineMatrix(8);
    am12[0] = am1[0]*am2[0] + am1[1]*am2[4];
    am12[1] = am1[0]*am2[1] + am1[1]*am2[5];
    am12[2] = am1[0]*am2[2] + am1[1]*am2[6] + am1[2];
    am12[3] = am1[0]*am2[3] + am1[1]*am2[7] + am1[3];
    
    am12[4] = am1[4]*am2[0] + am1[5]*am2[4];
    am12[5] = am1[4]*am2[1] + am1[5]*am2[5];
    am12[6] = am1[4]*am2[2] + am1[5]*am2[6] + am1[6];
    am12[7] = am1[4]*am2[3] + am1[5]*am2[7] + am1[7];
    return am12;
}
function am_eye( )
{
    return new AffineMatrix([
    1,0,0,0,
    0,1,0,0
    ]);
}
function cm_combine( m1, m2, a1, a2, matrix )
{
    matrix = matrix || Array; a1 = a1 || 1; a2 = a2 || 1;
    for(var i=0,d=m1.length,m12=new matrix(d); i<d; i++) m12[i] = a1 * m1[i] + a2 * m2[i];
    return m12;
}
function cm_convolve( cm1, cm2, matrix )
{
    matrix = matrix || Array/*ConvolutionMatrix*/;
    if ( cm2 === +cm2 ) cm2 = [cm2];
    var i, j, p, d1 = cm1.length, d2 = cm2.length, cm12 = new matrix(d1*d2);
    for (i=0,j=0; i<d1; )
    {
        cm12[i*d2+j] = cm1[i]*cm2[j];
        if ( ++j >= d2 ){ j=0; i++; }
    }
    return cm12;
}

function morph_prim_op( mode, inp, out, w, h, stride, index, index2, op, op0, iter/*, fa, fb, fc*/ )
{
    //"use asm";
    var tmp, it, x, ty, i, j, k, imLen = inp.length, imArea = imLen>>>stride,
        rM, gM, bM, r, g, b, xOff, yOff, srcOff, bx=w-1, by=imArea-w, coverArea;
    
    tmp = inp; inp = out; out = tmp;
    /*if ( (0 === stride) || (FILTER.MODE.MONO === mode) )
    {
        coverArea = index.length;
        for (it=0; it<iter; it++)
        {
            tmp = inp; inp = out; out = tmp;
            for (x=0,ty=0,i=0; i<imLen; i++,x++)
            {
                // update image coordinates
                if (x>=w) { x=0; ty+=w; }
                
                // calculate the image pixels that
                // fall under the structure matrix
                for (rM=op0,j=0; j<coverArea; j+=2)
                {
                    xOff = x+index[j]; yOff = ty+index[j+1];
                    if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                    srcOff = (xOff + yOff);
                    r = inp[srcOff];
                    rM = op(r, rM);
                }
                // output
                //rM = (fa*out[i]+fb*rM+fc*inp[i])|0;
                out[i] = rM;
            }
        }
        
        if ( index2 )
        {
            index = index2; coverArea = index.length;
            for (it=0; it<iter; it++)
            {
                tmp = inp; inp = out; out = tmp;
                for (x=0,ty=0,i=0; i<imLen; i++,x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the image pixels that
                    // fall under the structure matrix
                    for (rM=op0,j=0; j<coverArea; j+=2)
                    {
                        xOff = x+index[j]; yOff = ty+index[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff);
                        r = inp[srcOff];
                        rM = op(r, rM);
                    }
                    // output
                    //rM = (fa*out[i]+fb*rM+fc*inp[i])|0;
                    out[i] = rM;
                }
            }
        }
    }
    else*/ if ( FILTER.MODE.GRAY === mode )
    {
        coverArea = index.length;
        for (it=0; it<iter; it++)
        {
            tmp = inp; inp = out; out = tmp;
            for (x=0,ty=0,i=0; i<imLen; i+=4,x++)
            {
                // update image coordinates
                if (x>=w) { x=0; ty+=w; }
                
                // calculate the image pixels that
                // fall under the structure matrix
                for (rM=op0,j=0; j<coverArea; j+=2)
                {
                    xOff = x+index[j]; yOff = ty+index[j+1];
                    if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                    srcOff = (xOff + yOff)<<2;
                    r = inp[srcOff];
                    rM = op(r, rM);
                }
                // output
                //rM = (fa*out[i]+fb*rM+fc*inp[i])|0;
                out[i] = rM; out[i+1] = rM; out[i+2] = rM; out[i+3] = inp[i+3];
            }
        }
        
        if ( index2 )
        {
            index = index2; coverArea = index.length;
            for (it=0; it<iter; it++)
            {
                tmp = inp; inp = out; out = tmp;
                for (x=0,ty=0,i=0; i<imLen; i+=4,x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the image pixels that
                    // fall under the structure matrix
                    for (rM=op0,j=0; j<coverArea; j+=2)
                    {
                        xOff = x+index[j]; yOff = ty+index[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2;
                        r = inp[srcOff];
                        rM = op(r, rM);
                    }
                    // output
                    //rM = (fa*out[i]+fb*rM+fc*inp[i])|0;
                    out[i] = rM; out[i+1] = rM; out[i+2] = rM; out[i+3] = inp[i+3];
                }
            }
        }
    }
    else
    {
        coverArea = index.length;
        for (it=0; it<iter; it++)
        {
            tmp = inp; inp = out; out = tmp;
            for (x=0,ty=0,i=0; i<imLen; i+=4,x++)
            {
                // update image coordinates
                if (x>=w) { x=0; ty+=w; }
                
                // calculate the image pixels that
                // fall under the structure matrix
                for (rM=gM=bM=op0,j=0; j<coverArea; j+=2)
                {
                    xOff = x+index[j]; yOff = ty+index[j+1];
                    if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                    srcOff = (xOff + yOff)<<2;
                    r = inp[srcOff]; g = inp[srcOff+1]; b = inp[srcOff+2];
                    rM = op(r, rM); gM = op(g, gM); bM = op(b, bM);
                }
                // output
                //rM = (fa*out[i]+fb*rM+fc*inp[i])|0; gM = (fa*out[i+1]+fb*gM+fc*inp[i+1])|0; bM = (fa*out[i+2]+fb*bM+fc*inp[i+2])|0;
                out[i] = rM; out[i+1] = gM; out[i+2] = bM; out[i+3] = inp[i+3];
            }
        }
        if ( index2 )
        {
            index = index2; coverArea = index.length;
            for (it=0; it<iter; it++)
            {
                tmp = inp; inp = out; out = tmp;
                for (x=0,ty=0,i=0; i<imLen; i+=4,x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the image pixels that
                    // fall under the structure matrix
                    for (rM=gM=bM=op0,j=0; j<coverArea; j+=2)
                    {
                        xOff = x+index[j]; yOff = ty+index[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2;
                        r = inp[srcOff]; g = inp[srcOff+1]; b = inp[srcOff+2];
                        rM = op(r, rM); gM = op(g, gM); bM = op(b, bM);
                    }
                    // output
                    //rM = (fa*out[i]+fb*rM+fc*inp[i])|0; gM = (fa*out[i+1]+fb*gM+fc*inp[i+1])|0; bM = (fa*out[i+2]+fb*bM+fc*inp[i+2])|0;
                    out[i] = rM; out[i+1] = gM; out[i+2] = bM; out[i+3] = inp[i+3];
                }
            }
        }
    }
}

// can be overriden
MathUtil.random = Math.random;
MathUtil.clamp = clamp;
MathUtil.sign = function sign( x ){ return 0 > x ? -1.0 : 1.0; };

ArrayUtil.typed = FILTER.Browser.isNode ? function( a, A ) {
    if ( (null == a) || (a instanceof A) ) return a;
    else if ( Array.isArray( a ) ) return Array === A ? a : new A( a );
    if ( null == a.length ) a.length = Object.keys( a ).length;
    return Array === A ? Array.prototype.slice.call( a ) : new A( Array.prototype.slice.call( a ) );
} : function( a, A ) { return a; };
ArrayUtil.typed_obj = FILTER.Browser.isNode ? function( o, unserialise ) {
    return null == o ? o : (unserialise ? JSON.parse( o ) : JSON.stringify( o ));
} : function( o ) { return o; };
ArrayUtil.arrayset_shim = arrayset_shim;
ArrayUtil.arrayset = ArrayUtil.hasArrayset ? function( a, b, offset ){ a.set(b, offset||0); } : arrayset_shim;
ArrayUtil.subarray = ArrayUtil.hasSubarray ? function( a, i1, i2 ){ return a.subarray(i1, i2); } : function( a, i1, i2 ){ return a.slice(i1, i2); };


StringUtil.esc = esc;
StringUtil.trim = String.prototype.trim 
? function( s ){ return s.trim(); }
: function( s ){ return s.replace(trim_re, ''); };
StringUtil.function_body = function_body;

CodecUtil.readBytes = function readBytes( numbytes, buf, pos ){
    var i, bytes = [];
    if ( 0 <= numbytes ) for(i=0; i<numbytes; ++i)  bytes.push( buf[pos.pos++] );
    else for(i=0; i>numbytes; --i) bytes.push( buf[pos.pos++] );
    return bytes;
};
CodecUtil.readUInt8 = function readUInt8( buf, pos ){
    return buf[pos.pos++];
};
CodecUtil.readUInt16LE = function readUInt16LE( buf, pos ){
    // big endian, the most significant byte is stored in the smallest address
    // little endian, the least significant byte is stored in the smallest address
    var b0, b1;
    b0 = buf[pos.pos++]; b1 = buf[pos.pos++];
    return b0 | (b1<<8);
};
CodecUtil.readUInt16BE = function readUInt16BE( buf, pos ){
    // big endian, the most significant byte is stored in the smallest address
    // little endian, the least significant byte is stored in the smallest address
    var b0, b1;
    b0 = buf[pos.pos++]; b1 = buf[pos.pos++];
    return b1 | (b0<<8);
};
CodecUtil.readUInt32LE = function readUInt32LE( buf, pos ){
    // big endian, the most significant byte is stored in the smallest address
    // little endian, the least significant byte is stored in the smallest address
    var b0, b1, b2, b3;
    b0 = buf[pos.pos++]; b1 = buf[pos.pos++]; b2 = buf[pos.pos++]; b3 = buf[pos.pos++];
    return b0 | (b1<<8) | (b2<<16) | (b3<<24);
};
CodecUtil.readUInt32BE = function readUInt32BE( buf, pos ){
    // big endian, the most significant byte is stored in the smallest address
    // little endian, the least significant byte is stored in the smallest address
    var b0, b1, b2, b3;
    b0 = buf[pos.pos++]; b1 = buf[pos.pos++]; b2 = buf[pos.pos++]; b3 = buf[pos.pos++];
    return b3 | (b2<<8) | (b1<<16) | (b0<<24);
};
CodecUtil.write = function write( buf, s ){
    for (var i=0,n=s.length; i<n; i++) buf.push( s.charCodeAt( i ) );
};
CodecUtil.writeUInt8 = function writeUInt8( buf, b ){
    buf.push( b&255 );
};
CodecUtil.writeUInt16LE = function writeUInt16LE( buf, b ){
    buf.push( b&255, (b>>>8)&255 );
};
CodecUtil.writeUInt16BE = function writeUInt16BE( buf, b ){
    buf.push( (b>>>8)&255, b&255 );
};
CodecUtil.writeUInt32LE = function writeUInt32LE( buf, b ){
    buf.push( b&255, (b>>>8)&255, (b>>>16)&255, (b>>>24)&255 );
};
CodecUtil.writeUInt32BE = function writeUInt32BE( buf, b ){
    buf.push( (b>>>24)&255, (b>>>16)&255, (b>>>8)&255, b&255 );
};
CodecUtil.fill = function fill( buf, b, start, end ){
    for (var i=start; i<end; i++) buf[i] = b;
};


ImageUtil.get_data = get_data;
ImageUtil.set_data = set_data;
ImageUtil.fill = fill_data;
ImageUtil.crop = FILTER.Interpolation.crop = ArrayUtil.hasArrayset ? crop : crop_shim;
ImageUtil.pad = FILTER.Interpolation.pad = ArrayUtil.hasArrayset ? pad : pad_shim;

FilterUtil.integral = integral;
FilterUtil.histogram = histogram;
FilterUtil.spectrum = spectrum;
FilterUtil.ct_eye = ct_eye;
FilterUtil.ct_multiply = ct_multiply;
FilterUtil.cm_eye = cm_eye;
FilterUtil.cm_multiply = cm_multiply;
FilterUtil.cm_rechannel = cm_rechannel;
FilterUtil.am_eye = am_eye;
FilterUtil.am_multiply = am_multiply;
FilterUtil.cm_combine = cm_combine;
FilterUtil.cm_convolve = cm_convolve;
FilterUtil.integral_convolution = notSupportClamp ? integral_convolution_clamp : integral_convolution;
FilterUtil.separable_convolution = notSupportClamp ? separable_convolution_clamp : separable_convolution;
//FilterUtil.algebraic_combination = algebraic_combination;
FilterUtil.gradient = gradient;
FilterUtil.optimum_gradient = optimum_gradient;
FilterUtil.sat = integral2;
FilterUtil.primitive_morphology_operator = morph_prim_op;

}(FILTER);/**
*
* Filter Interpolation methods
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var clamp = FILTER.Util.Math.clamp, IMG = FILTER.ImArray;

// http://pixinsight.com/doc/docs/InterpolationAlgorithms/InterpolationAlgorithms.html
// http://tech-algorithm.com/articles/bilinear-image-scaling/
FILTER.Interpolation.bilinear = function( im, w, h, nw, nh ) {
    var size = (nw*nh)<<2, interpolated = new IMG(size),
        rx = (w-1)/nw, ry = (h-1)/nh, 
        A, B, C, D, a, b, c, d, 
        i, j, x, y, xi, yi, pixel, index,
        yw, dx, dy, w4 = w<<2
    ;
    i=0; j=0; x=0; y=0; yi=0; yw=0; dy=0;
    for (index=0; index<size; index+=4,j++,x+=rx) 
    {
        if ( j >= nw ) { j=0; x=0; i++; y+=ry; yi=y|0; dy=y - yi; yw=yi*w; }
        
        xi = x|0; dx = x - xi;
        
        // Y = A(1-w)(1-h) + B(w)(1-h) + C(h)(1-w) + Dwh
        a = (1-dx)*(1-dy); b = dx*(1-dy);
        c = dy*(1-dx); d = dx*dy;
        
        pixel = (yw + xi)<<2;

        A = im[pixel]; B = im[pixel+4];
        C = im[pixel+w4]; D = im[pixel+w4+4];
        interpolated[index] = clamp(A*a +  B*b + C*c  +  D*d + 0.5, 0, 255)|0;
        
        A = im[pixel+1]; B = im[pixel+5];
        C = im[pixel+w4+1]; D = im[pixel+w4+5];
        interpolated[index+1] = clamp(A*a +  B*b + C*c  +  D*d + 0.5, 0, 255)|0;

        A = im[pixel+2]; B = im[pixel+6];
        C = im[pixel+w4+2]; D = im[pixel+w4+6];
        interpolated[index+2] = clamp(A*a +  B*b + C*c  +  D*d + 0.5, 0, 255)|0;

        A = im[pixel+3]; B = im[pixel+7];
        C = im[pixel+w4+3]; D = im[pixel+w4+7];
        interpolated[index+3] = clamp(A*a +  B*b + C*c  +  D*d + 0.5, 0, 255)|0;
    }
    return interpolated;
};

}(FILTER);/**
*
* Color Methods / Transforms
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

// adapted from https://github.com/foo123/css-color
var // utils
    sqrt = Math.sqrt, round = Math.round, floor = Math.floor, 
    min = Math.min, max = Math.max, abs = Math.abs,
    sin = Math.sin, cos = Math.cos,
    pi = Math.PI, pi2 = 2*pi, pi_2 = pi/2, pi_32 = 3*pi_2,
    //notSupportClamp = FILTER._notSupportClamp,
    clamp = FILTER.Util.Math.clamp,
    esc = FILTER.Util.String.esc,
    trim = FILTER.Util.String.trim,
    
    LUMA = FILTER.LUMA, CHANNEL = FILTER.CHANNEL,
    //RED = CHANNEL.RED, GREEN = CHANNEL.GREEN, BLUE = CHANNEL.BLUE, ALPHA = CHANNEL.ALPHA,
    C2F = 1/255, C2P = 100/255, P2C = 2.55,

    Keywords = {
        // http://www.w3.org/wiki/CSS/Properties/color/keywords
        // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
        /* extended */
         'transparent'         : [  0,0,0        ,0]
        ,'aliceblue'           : [  240,248,255  ,1]
        ,'antiquewhite'        : [  250,235,215  ,1]
        ,'aqua'                : [  0,255,255    ,1]
        ,'aquamarine'          : [  127,255,212  ,1]
        ,'azure'               : [  240,255,255  ,1]
        ,'beige'               : [  245,245,220  ,1]
        ,'bisque'              : [  255,228,196  ,1]
        ,'black'               : [  0,0,0    ,    1]
        ,'blanchedalmond'      : [  255,235,205  ,1]
        ,'blue'                : [  0,0,255  ,    1]
        ,'blueviolet'          : [  138,43,226   ,1]
        ,'brown'               : [  165,42,42    ,1]
        ,'burlywood'           : [  222,184,135  ,1]
        ,'cadetblue'           : [  95,158,160   ,1]
        ,'chartreuse'          : [  127,255,0    ,1]
        ,'chocolate'           : [  210,105,30   ,1]
        ,'coral'               : [  255,127,80   ,1]
        ,'cornflowerblue'      : [  100,149,237  ,1]
        ,'cornsilk'            : [  255,248,220  ,1]
        ,'crimson'             : [  220,20,60    ,1]
        ,'cyan'                : [  0,255,255    ,1]
        ,'darkblue'            : [  0,0,139  ,    1]
        ,'darkcyan'            : [  0,139,139    ,1]
        ,'darkgoldenrod'       : [  184,134,11   ,1]
        ,'darkgray'            : [  169,169,169  ,1]
        ,'darkgreen'           : [  0,100,0  ,    1]
        ,'darkgrey'            : [  169,169,169  ,1]
        ,'darkkhaki'           : [  189,183,107  ,1]
        ,'darkmagenta'         : [  139,0,139    ,1]
        ,'darkolivegreen'      : [  85,107,47    ,1]
        ,'darkorange'          : [  255,140,0    ,1]
        ,'darkorchid'          : [  153,50,204   ,1]
        ,'darkred'             : [  139,0,0  ,    1]
        ,'darksalmon'          : [  233,150,122  ,1]
        ,'darkseagreen'        : [  143,188,143  ,1]
        ,'darkslateblue'       : [  72,61,139    ,1]
        ,'darkslategray'       : [  47,79,79 ,    1]
        ,'darkslategrey'       : [  47,79,79 ,    1]
        ,'darkturquoise'       : [  0,206,209    ,1]
        ,'darkviolet'          : [  148,0,211    ,1]
        ,'deeppink'            : [  255,20,147   ,1]
        ,'deepskyblue'         : [  0,191,255    ,1]
        ,'dimgray'             : [  105,105,105  ,1]
        ,'dimgrey'             : [  105,105,105  ,1]
        ,'dodgerblue'          : [  30,144,255   ,1]
        ,'firebrick'           : [  178,34,34    ,1]
        ,'floralwhite'         : [  255,250,240  ,1]
        ,'forestgreen'         : [  34,139,34    ,1]
        ,'fuchsia'             : [  255,0,255    ,1]
        ,'gainsboro'           : [  220,220,220  ,1]
        ,'ghostwhite'          : [  248,248,255  ,1]
        ,'gold'                : [  255,215,0    ,1]
        ,'goldenrod'           : [  218,165,32   ,1]
        ,'gray'                : [  128,128,128  ,1]
        ,'green'               : [  0,128,0  ,    1]
        ,'greenyellow'         : [  173,255,47   ,1]
        ,'grey'                : [  128,128,128  ,1]
        ,'honeydew'            : [  240,255,240  ,1]
        ,'hotpink'             : [  255,105,180  ,1]
        ,'indianred'           : [  205,92,92    ,1]
        ,'indigo'              : [  75,0,130 ,    1]
        ,'ivory'               : [  255,255,240  ,1]
        ,'khaki'               : [  240,230,140  ,1]
        ,'lavender'            : [  230,230,250  ,1]
        ,'lavenderblush'       : [  255,240,245  ,1]
        ,'lawngreen'           : [  124,252,0    ,1]
        ,'lemonchiffon'        : [  255,250,205  ,1]
        ,'lightblue'           : [  173,216,230  ,1]
        ,'lightcoral'          : [  240,128,128  ,1]
        ,'lightcyan'           : [  224,255,255  ,1]
        ,'lightgoldenrodyellow': [  250,250,210  ,1]
        ,'lightgray'           : [  211,211,211  ,1]
        ,'lightgreen'          : [  144,238,144  ,1]
        ,'lightgrey'           : [  211,211,211  ,1]
        ,'lightpink'           : [  255,182,193  ,1]
        ,'lightsalmon'         : [  255,160,122  ,1]
        ,'lightseagreen'       : [  32,178,170   ,1]
        ,'lightskyblue'        : [  135,206,250  ,1]
        ,'lightslategray'      : [  119,136,153  ,1]
        ,'lightslategrey'      : [  119,136,153  ,1]
        ,'lightsteelblue'      : [  176,196,222  ,1]
        ,'lightyellow'         : [  255,255,224  ,1]
        ,'lime'                : [  0,255,0  ,    1]
        ,'limegreen'           : [  50,205,50    ,1]
        ,'linen'               : [  250,240,230  ,1]
        ,'magenta'             : [  255,0,255    ,1]
        ,'maroon'              : [  128,0,0  ,    1]
        ,'mediumaquamarine'    : [  102,205,170  ,1]
        ,'mediumblue'          : [  0,0,205  ,    1]
        ,'mediumorchid'        : [  186,85,211   ,1]
        ,'mediumpurple'        : [  147,112,219  ,1]
        ,'mediumseagreen'      : [  60,179,113   ,1]
        ,'mediumslateblue'     : [  123,104,238  ,1]
        ,'mediumspringgreen'   : [  0,250,154    ,1]
        ,'mediumturquoise'     : [  72,209,204   ,1]
        ,'mediumvioletred'     : [  199,21,133   ,1]
        ,'midnightblue'        : [  25,25,112    ,1]
        ,'mintcream'           : [  245,255,250  ,1]
        ,'mistyrose'           : [  255,228,225  ,1]
        ,'moccasin'            : [  255,228,181  ,1]
        ,'navajowhite'         : [  255,222,173  ,1]
        ,'navy'                : [  0,0,128  ,    1]
        ,'oldlace'             : [  253,245,230  ,1]
        ,'olive'               : [  128,128,0    ,1]
        ,'olivedrab'           : [  107,142,35   ,1]
        ,'orange'              : [  255,165,0    ,1]
        ,'orangered'           : [  255,69,0 ,    1]
        ,'orchid'              : [  218,112,214  ,1]
        ,'palegoldenrod'       : [  238,232,170  ,1]
        ,'palegreen'           : [  152,251,152  ,1]
        ,'paleturquoise'       : [  175,238,238  ,1]
        ,'palevioletred'       : [  219,112,147  ,1]
        ,'papayawhip'          : [  255,239,213  ,1]
        ,'peachpuff'           : [  255,218,185  ,1]
        ,'peru'                : [  205,133,63   ,1]
        ,'pink'                : [  255,192,203  ,1]
        ,'plum'                : [  221,160,221  ,1]
        ,'powderblue'          : [  176,224,230  ,1]
        ,'purple'              : [  128,0,128    ,1]
        ,'red'                 : [  255,0,0  ,    1]
        ,'rosybrown'           : [  188,143,143  ,1]
        ,'royalblue'           : [  65,105,225   ,1]
        ,'saddlebrown'         : [  139,69,19    ,1]
        ,'salmon'              : [  250,128,114  ,1]
        ,'sandybrown'          : [  244,164,96   ,1]
        ,'seagreen'            : [  46,139,87    ,1]
        ,'seashell'            : [  255,245,238  ,1]
        ,'sienna'              : [  160,82,45    ,1]
        ,'silver'              : [  192,192,192  ,1]
        ,'skyblue'             : [  135,206,235  ,1]
        ,'slateblue'           : [  106,90,205   ,1]
        ,'slategray'           : [  112,128,144  ,1]
        ,'slategrey'           : [  112,128,144  ,1]
        ,'snow'                : [  255,250,250  ,1]
        ,'springgreen'         : [  0,255,127    ,1]
        ,'steelblue'           : [  70,130,180   ,1]
        ,'tan'                 : [  210,180,140  ,1]
        ,'teal'                : [  0,128,128    ,1]
        ,'thistle'             : [  216,191,216  ,1]
        ,'tomato'              : [  255,99,71    ,1]
        ,'turquoise'           : [  64,224,208   ,1]
        ,'violet'              : [  238,130,238  ,1]
        ,'wheat'               : [  245,222,179  ,1]
        ,'white'               : [  255,255,255  ,1]
        ,'whitesmoke'          : [  245,245,245  ,1]
        ,'yellow'              : [  255,255,0    ,1]
        ,'yellowgreen'         : [  154,205,50   ,1]    
    }
;

// adapted from https://github.com/foo123/css-color

// static Color Methods and Transforms
// http://en.wikipedia.org/wiki/Color_space
// http://www.poynton.com/PDFs/coloureq.pdf
function lerp( data, index, c1, c2, t )
{
    data[index  ] = ((c1[0] + t*(c2[0]-c1[0]))|0) & 255;
    data[index+1] = ((c1[1] + t*(c2[1]-c1[1]))|0) & 255;
    data[index+2] = ((c1[2] + t*(c2[2]-c1[2]))|0) & 255;
    data[index+3] = ((c1[3] + t*(c2[3]-c1[3]))|0) & 255;
}

//
// Color Class and utils
var Color = FILTER.Color = FILTER.Class({
    
    //
    // static
    __static__: {
    
        clamp: clamp,
        
        clampPixel: function( v ) {
            return min(255, max(v, 0));
        },
        
        color24: function( r, g, b ) {
            return ((r&255) << 16) | ((g&255) << 8) | (b&255);
        }, 
        
        color32: function( r, g, b, a ) {
            return ((a&255) << 24) | ((r&255) << 16) | ((g&255) << 8) | (b&255);
        }, 
        
        rgb24: function( color ) {
            return [(color >>> 16)&255, (color >>> 8)&255, color&255];
        }, 
        
        rgba32: function( color ) {
            return [(color >>> 16)&255, (color >>> 8)&255, color&255, (color >>> 24)&255];
        }, 
        
        intensity: function( r, g, b ) {
            return ~~(LUMA[0]*r + LUMA[1]*g + LUMA[2]*b);
        }, 
        
        hue: function( r, g, b ) {
            var M = max( r, g, b );
            return r === g && g === b
            ? 0
            : (r === M
            ? 60 * abs( g - b ) / (M - min( r, g, b ))
            : (g === M
            ? 120 + 60 * abs( b - r ) / (M - min( r, g, b ))
            : 240 + 60 * abs( r - g ) / (M - min( r, g, b ))))
            ;
        },
        
        saturation: function( r, g, b ) {
            var M = max( r, g, b );
            return r === g && g === b ? 0 : 255 * (M-min( r, g, b )) / M;
        },
        
        dist: function( ccc1, ccc2, p1, p2 ) {
            //p1 = p1 || 0; p2 = p2 || 0;
            var d0 = ccc1[p1+0]-ccc2[p2+0], d1 = ccc1[p1+1]-ccc2[p2+1], d2 = ccc1[p1+2]-ccc2[p2+2];
            return sqrt(d0*d0 + d1*d1 + d2*d2);
        },
        
        RGB2Gray: function( rgb, p ) {
            //p = p || 0;
            var g = (LUMA[0]*rgb[p+0] + LUMA[1]*rgb[p+1] + LUMA[2]*rgb[p+2])|0;
            rgb[p+0] = g; rgb[p+1] = g; rgb[p+2] = g;
            return rgb;
        },
        
        RGB2Color: function( rgb, p ) {
            //p = p || 0;
            return ((rgb[p+0]&255) << 16) | ((rgb[p+1]&255) << 8) | (rgb[p+2]&255);
        },
        
        RGBA2Color: function( rgba, p ) {
            //p = p || 0;
            return ((rgba[p+3]&255) << 24) | ((rgba[p+0]&255) << 16) | ((rgba[p+1]&255) << 8) | (rgba[p+2]&255);
        },
        
        Color2RGBA: function( c, rgba, p ) {
            /*p = p || 0;*/ c = c|0;
            rgba[p+0] = (c >>> 16) & 255;
            rgba[p+1] = (c >>> 8) & 255;
            rgba[p+2] = (c & 255);
            rgba[p+3] = (c >>> 24) & 255;
            return rgba;
        },

        // https://www.cs.rit.edu/~ncs/color/t_convert.html#RGB%20to%20XYZ%20&%20XYZ%20to%20RGB
        RGB2XYZ: function( ccc, p ) {
            //p = p || 0;
            var r = ccc[p+0], g = ccc[p+1], b = ccc[p+2];
            // each take full range from 0-255
            ccc[p+0] = ( 0.412453*r + 0.357580*g + 0.180423*b )|0;
            ccc[p+1] = ( 0.212671*r + 0.715160*g + 0.072169*b )|0;
            ccc[p+2] = ( 0.019334*r + 0.119193*g + 0.950227*b )|0;
            return ccc;
        },
        
        // https://www.cs.rit.edu/~ncs/color/t_convert.html#RGB%20to%20XYZ%20&%20XYZ%20to%20RGB
        XYZ2RGB: function( ccc, p ) {
            //p = p || 0;
            var x = ccc[p+0], y = ccc[p+1], z = ccc[p+2];
            // each take full range from 0-255
            ccc[p+0] = ( 3.240479*x - 1.537150*y - 0.498535*z )|0;
            ccc[p+1] = (-0.969256*x + 1.875992*y + 0.041556*z )|0;
            ccc[p+2] = ( 0.055648*x - 0.204043*y + 1.057311*z )|0;
            return ccc;
        },
        
        // https://www.cs.harvard.edu/~sjg/papers/cspace.pdf
        RGB2ILL: function( ccc, p ) {
            //p = p || 0;
            var r = ccc[p+0]/255, g = ccc[p+1]/255, b = ccc[p+2]/255, x, y, z, xi, yi, zi, ln = Math.log;
            // RGB to XYZ
            // each take full range from 0-255
            x = ( 0.412453*r + 0.357580*g + 0.180423*b );
            y = ( 0.212671*r + 0.715160*g + 0.072169*b );
            z = ( 0.019334*r + 0.119193*g + 0.950227*b );
            // B matrix and logarithm transformation
            xi = ln( 0.9465229*x + 0.2946927*y - 0.1313419*z );
            yi = ln(-0.1179179*x + 0.9929960*y + 0.007371554*z );
            zi = ln( 0.09230461*x - 0.04645794*y + 0.9946464*z );
            // A matrix
            ccc[p+0] = ( 27.07439*xi - 22.80783*yi - 1.806681*zi );
            ccc[p+1] = (-5.646736*xi - 7.722125*yi + 12.86503*zi );
            ccc[p+2] = (-4.163133*xi - 4.579428*yi - 4.576049*zi );
            return ccc;
        },
        
        // https://www.cs.harvard.edu/~sjg/papers/cspace.pdf
        // http://matrix.reshish.com/inverCalculation.php
        ILL2RGB: function( ccc, p ) {
            //p = p || 0;
            var r = ccc[p+0], g = ccc[p+1], b = ccc[p+2], x, y, z, xi, yi, zi, exp = Math.exp;
            // inverse A matrix and inverse logarithm
            xi = exp( 0.021547742011105847*r - 0.021969518919866274*g - 0.07027206572176435*b );
            yi = exp(-0.018152109501074376*r - 0.03004415376911152*g - 0.07729896865586937*b );
            zi = exp(-0.0014378861182725712*r + 0.050053456205559545*g - 0.07724195758868482*b );
            // inverse B matrix
            x = ( 1.0068824301911365*xi - 0.2924918682640871*yi + 0.13512537828457516*zi );
            y = ( 0.12021888110585245*xi + 0.9717816461525606*yi + 0.008672665360769691*zi );
            z = (-0.08782494811157235*xi + 0.07253363731909634*yi + 0.9932476695469974*zi );
            // XYZ to RGB
            ccc[p+0] = ( 3.240479*x - 1.537150*y - 0.498535*z )|0;
            ccc[p+1] = (-0.969256*x + 1.875992*y + 0.041556*z )|0;
            ccc[p+2] = ( 0.055648*x - 0.204043*y + 1.057311*z )|0;
            return ccc;
        },
        
        // http://vision.ucsd.edu/sites/default/files/ColorSubspaces_IJCV_0.pdf
        /*
        RGB2SUV: function( ccc, p, rotS, thetaS ) {
            //p = p || 0;
            var r = ccc[p+0]/255, g = ccc[p+1]/255, b = ccc[p+2]/255, s, u, v, cos = Math.cos, sin = Math.sin;
            if ( null = rotS )
                rotS = [
                
                ];
            ccc[p+0] = ( 27.07439*xi - 22.80783*yi - 1.806681*zi );
            ccc[p+1] = (-5.646736*xi - 7.722125*yi + 12.86503*zi );
            ccc[p+2] = (-4.163133*xi - 4.579428*yi - 4.576049*zi );
            return ccc;
        },*/
        
        // http://en.wikipedia.org/wiki/YCbCr
        RGB2YCbCr: function( ccc, p ) {
            //p = p || 0;
            var r = ccc[p+0], g = ccc[p+1], b = ccc[p+2];
            // each take full range from 0-255
            ccc[p+0] = ( 0   + 0.299*r    + 0.587*g     + 0.114*b    )|0;
            ccc[p+1] = ( 128 - 0.168736*r - 0.331264*g  + 0.5*b      )|0;
            ccc[p+2] = ( 128 + 0.5*r      - 0.418688*g  - 0.081312*b )|0;
            return ccc;
        },
        
        // http://en.wikipedia.org/wiki/YCbCr
        YCbCr2RGB: function( ccc, p ) {
            //p = p || 0;
            var y = ccc[p+0], cb = ccc[p+1], cr = ccc[p+2];
            // each take full range from 0-255
            ccc[p+0] = ( y                      + 1.402   * (cr-128) )|0;
            ccc[p+1] = ( y - 0.34414 * (cb-128) - 0.71414 * (cr-128) )|0;
            ccc[p+2] = ( y + 1.772   * (cb-128) )|0;
            return ccc;
        },
        
        // http://en.wikipedia.org/wiki/HSL_color_space
        // adapted from http://www.cs.rit.edu/~ncs/colo
        RGB2HSV: function( ccc, p, unscaled )  {
            //p = p || 0;
            var m, M, delta, r = ccc[p+0], g = ccc[p+1], b = ccc[p+2], h, s, v;
            
            M = max( r, g, b ); m = min( r, g, b );
            v = M;                // v

            if ( 0 === M/*r === g && g === b*/ )
            {
                // r = g = b = 0        // s = 0, v is undefined
                s = 0; h = 0; //h = -1;
            }
            else
            {
                delta = M - m;
                s = delta / M;        // s

                if ( r === M )      h = 60 * abs( g - b ) / delta;        // between yellow & magenta
                else if ( g === M ) h = 120 + 60 * abs( b - r ) / delta;  // between cyan & yellow
                else                h = 240 + 60 * abs( r - g ) / delta;  // between magenta & cyan
                //h *= 60;                // degrees
                //if( h < 0 )  h += 360;
            }
            ccc[p+0] = unscaled ? h : h*0.70833333333333333333333333333333;
            ccc[p+1] = unscaled ? s : s*255;
            ccc[p+2] = v
            return ccc;
        },
        
        // http://en.wikipedia.org/wiki/HSL_color_space
        // adapted from http://www.cs.rit.edu/~ncs/color/t_convert.html
        HSV2RGB: function( ccc, p, unscaled ) {
            //p = p || 0;
            var i, f, o, q, t, r, g, b,
                h = unscaled ? ccc[p+0] : ccc[p+0]*1.4117647058823529411764705882353,
                s = unscaled ? ccc[p+1] : ccc[p+1]*0.0039215686274509803921568627451,
                v = ccc[p+2];
            
            if( 0 === s ) 
            {
                // achromatic (grey)
                r = g = b = v;
            }
            else
            {
                h /= 60;            // sector 0 to 5
                i = ~~h;
                f = h - i;          // fractional part of h
                o = v * ( 1 - s );
                q = v * ( 1 - s * f );
                t = v * ( 1 - s * ( 1 - f ) );

                if ( 0 === i )      { r = v; g = t; b = o; }
                else if ( 1 === i ) { r = q; g = v; b = o; }
                else if ( 2 === i ) { r = o; g = v; b = t; }
                else if ( 3 === i ) { r = o; g = q; b = v; }
                else if ( 4 === i ) { r = t; g = o; b = v; }
                else /* case 5: */  { r = v; g = o; b = q; }
            }
            ccc[p+0] = r; ccc[p+1] = g; ccc[p+2] = b;
            return ccc;
        },
        
        RGB2CMYK: function( ccc, p )  {
            //p = p || 0;
            var c = 0, m = 0, y = 0, k = 0, invCMY,
                r = ccc[p+0], g = ccc[p+1], b = ccc[p+2];

            // BLACK, k=255
            if ( 0===r && 0===g && 0===b ) return ccc;

            c = 255 - r;
            m = 255 - g;
            y = 255 - b;

            k = min( c, m, y );
            invCMY = 255 === k ? 0 : 255 / (255 - k);
            ccc[p+0] = (c - k) * invCMY;
            ccc[p+1] = (m - k) * invCMY;
            ccc[p+2] = (y - k) * invCMY;

            return ccc;
        },
        
        toString: function() {
            return "[" + "FILTER: " + this.name + "]";
        },
    
        C2F: C2F,
        C2P: C2P,
        P2C: P2C,
        
        Keywords: Keywords,
        
        // color format regexes
        hexieRE: /^#([0-9a-fA-F]{8})\b/,
        hexRE: /^#([0-9a-fA-F]{3,6})\b/,
        rgbRE: /^(rgba?)\b\s*\(([^\)]*)\)/i,
        hslRE: /^(hsla?)\b\s*\(([^\)]*)\)/i,
        keywordRE: new RegExp('^(' + Object.keys(Keywords).map(esc).join('|') + ')\\b', 'i'),
        colorstopRE: /^\s+(\d+(\.\d+)?%?)/,
        
        // color format conversions
        // http://www.rapidtables.com/convert/color/index.htm
        col2per: function( c, suffix ) {
            return (c*C2P)+(suffix||'');
        },
        per2col: function( c ) {
            return c*P2C;
        },
        
        // http://www.javascripter.net/faq/rgb2cmyk.htm
        rgb2cmyk: function( r, g, b, asPercent ) {
            var c = 0, m = 0, y = 0, k = 0, minCMY, invCMY;

            if ( asPercent )
            {
                r = clamp(round(r*P2C), 0, 255);
                g = clamp(round(g*P2C), 0, 255);
                b = clamp(round(b*P2C), 0, 255);
            }
            
            // BLACK, k=1
            if ( 0===r && 0===g && 0===b ) return [0, 0, 0, 1];

            c = 1 - (r*C2F);
            m = 1 - (g*C2F);
            y = 1 - (b*C2F);

            minCMY = min( c, m, y );
            invCMY = 1 / (1 - minCMY);
            c = (c - minCMY) * invCMY;
            m = (m - minCMY) * invCMY;
            y = (y - minCMY) * invCMY;
            k = minCMY;

            return [c, m, y, k];
        },
        cmyk2rgb: function( c, m, y, k ) {
            var r = 0, g = 0, b = 0, minCMY, invCMY;

            // BLACK
            if ( 0===c && 0===m && 0===y ) return [0, 0, 0];
            
            minCMY = k;
            invCMY = 1 - minCMY;
            c = c*invCMY + minCMY;
            m = m*invCMY + minCMY;
            y = y*invCMY + minCMY;
            
            r = (1 - c)*255;
            g = (1 - m)*255;
            b = (1 - y)*255;

            return [
                clamp(round(r), 0, 255),
                clamp(round(g), 0, 255),
                clamp(round(b), 0, 255)
            ];
        },
        rgb2hex: function( r, g, b, condenced, asPercent ) { 
            var hex;
            if ( asPercent )
            {
                r = clamp(round(r*P2C), 0, 255);
                g = clamp(round(g*P2C), 0, 255);
                b = clamp(round(b*P2C), 0, 255);
            }
            r = r < 16 ? '0'+r.toString(16) : r.toString(16);
            g = g < 16 ? '0'+g.toString(16) : g.toString(16);
            b = b < 16 ? '0'+b.toString(16) : b.toString(16);
            hex = condenced && (r[0]===r[1] && g[0]===g[1] && b[0]===b[1]) ? ('#'+r[0]+g[0]+b[0]) : ('#'+r+g+b);
            return hex;
        },
        rgb2hexIE: function( r, g, b, a, asPercent ) { 
            var hex;
            if ( asPercent )
            {
                r = clamp(round(r*P2C), 0, 255);
                g = clamp(round(g*P2C), 0, 255);
                b = clamp(round(b*P2C), 0, 255);
                a = clamp(round(a*P2C), 0, 255);
            }
            
            r = r < 16 ? '0'+r.toString(16) : r.toString(16);
            g = g < 16 ? '0'+g.toString(16) : g.toString(16);
            b = b < 16 ? '0'+b.toString(16) : b.toString(16);
            a = a < 16 ? '0'+a.toString(16) : a.toString(16);
            hex = '#' + a + r + g + b;
            
            return hex;
        },
        hex2rgb: function( h/*, asPercent*/ ) {  
            if ( !h || 3 > h.length ) return [0, 0, 0];
                
            return 6 > h.length ? [
                clamp( parseInt(h[0]+h[0], 16), 0, 255 ), 
                clamp( parseInt(h[1]+h[1], 16), 0, 255 ), 
                clamp( parseInt(h[2]+h[2], 16), 0, 255 )
            ] : [
                clamp( parseInt(h[0]+h[1], 16), 0, 255 ), 
                clamp( parseInt(h[2]+h[3], 16), 0, 255 ), 
                clamp( parseInt(h[4]+h[5], 16), 0, 255 )
            ];
            
            /*if ( asPercent )
                rgb = [
                    (rgb[0]*C2P)+'%', 
                    (rgb[1]*C2P)+'%', 
                    (rgb[2]*C2P)+'%'
                ];*/
        },
        // http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
        /**
         * Converts an HSL color value to RGB. Conversion formula
         * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
         * Assumes h, s, and l are contained in the set [0, 1] and
         * returns r, g, and b in the set [0, 255].
         */
        hue2rgb: function( p, q, t ) {
            if ( t < 0 ) t += 1;
            if ( t > 1 ) t -= 1;
            if ( t < 1/6 ) return p + (q - p) * 6 * t;
            if ( t < 1/2 ) return q;
            if ( t < 2/3 ) return p + (q - p) * (2/3 - t) * 6;
            return p;
        },
        hsl2rgb: function( h, s, l ) {
            var r, g, b, p, q, hue2rgb = Color.hue2rgb;

            // convert to [0, 1] range
            h = ((h + 360)%360)/360;
            s *= 0.01;
            l *= 0.01;
            
            if ( 0 === s )
            {
                // achromatic
                r = 1;
                g = 1;
                b = 1;
            }
            else
            {

                q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                p = 2 * l - q;
                r = hue2rgb(p, q, h + 1/3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1/3);
            }

            return [
                clamp( round(r * 255), 0, 255 ), 
                clamp( round(g * 255), 0, 255 ),  
                clamp( round(b * 255), 0, 255 )
            ];
        },
        /**
        * Converts an RGB color value to HSL. Conversion formula
        * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
        * Assumes r, g, and b are contained in the set [0, 255] and
        * returns h, s, and l in the set [0, 1].
        */
        rgb2hsl: function( r, g, b, asPercent ) {
            var m, M, h, s, l, d;
            
            if ( asPercent )
            {
                r *= 0.01;
                g *= 0.01;
                b *= 0.01;
            }
            else
            {
                r *= C2F; 
                g *= C2F; 
                b *= C2F;
            }
            M = max(r, g, b); 
            m = min(r, g, b);
            l = 0.5*(M + m);

            if ( M === m )
            {
                h = s = 0; // achromatic
            }
            else
            {
                d = M - m;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                
                if ( M == r )
                    h = (g - b) / d + (g < b ? 6 : 0);
                
                else if ( M == g )
                    h = (b - r) / d + 2;
                
                else
                    h = (r - g) / d + 4;
                
                h /= 6;
            }
            
            return [
                round( h*360 ) % 360, 
                clamp(s*100, 0, 100), 
                clamp(l*100, 0, 100)
            ];
        },
        
        parse: function( s, withColorStops, parsed, onlyColor ) {
            var m, m2, s2, end = 0, end2 = 0, c, hasOpacity;
            
            if ( 'hsl' === parsed || 
                ( !parsed && (m = s.match(Color.hslRE)) ) 
            )
            {
                // hsl(a)
                if ( 'hsl' === parsed )
                {
                    hasOpacity = 'hsla' === s[0].toLowerCase();
                    var col = s[1].split(',').map(trim);
                }
                else
                {
                    end = m[0].length;
                    end2 = 0;
                    hasOpacity = 'hsla' === m[1].toLowerCase();
                    var col = m[2].split(',').map(trim);
                }    
                
                var h = col[0] ? col[0] : '0';
                var s = col[1] ? col[1] : '0';
                var l = col[2] ? col[2] : '0';
                var a = hasOpacity && null!=col[3] ? col[3] : '1';
                
                h = parseFloat(h, 10);
                s = ('%'===s.slice(-1)) ? parseFloat(s, 10) : parseFloat(s, 10)*C2P;
                l = ('%'===l.slice(-1)) ? parseFloat(l, 10) : parseFloat(l, 10)*C2P;
                a = parseFloat(a, 10);
                
                c = new Color().fromHSL([h, s, l, a]);

                if ( withColorStops )
                {
                    s2 = s.substr( end );
                    if ( m2 = s2.match(Color.colorstopRE) )
                    {
                        c.colorStop( m2[1] );
                        end2 = m2[0].length;
                    }
                }
                return onlyColor ? c : [c, 0, end+end2];
            }
            if ( 'rgb' === parsed || 
                ( !parsed && (m = s.match(Color.rgbRE)) ) 
            )
            {
                // rgb(a)
                if ( 'rgb' === parsed )
                {
                    hasOpacity = 'rgba' === s[0].toLowerCase();
                    var col = s[1].split(',').map(trim);
                }
                else
                {
                    end = m[0].length;
                    end2 = 0;
                    hasOpacity = 'rgba' === m[1].toLowerCase();
                    var col = m[2].split(',').map(trim);
                }    
                    
                var r = col[0] ? col[0] : '0';
                var g = col[1] ? col[1] : '0';
                var b = col[2] ? col[2] : '0';
                var a = hasOpacity && null!=col[3] ? col[3] : '1';
                
                r = ('%'===r.slice(-1)) ? parseFloat(r, 10)*2.55 : parseFloat(r, 10);
                g = ('%'===g.slice(-1)) ? parseFloat(g, 10)*2.55 : parseFloat(g, 10);
                b = ('%'===b.slice(-1)) ? parseFloat(b, 10)*2.55 : parseFloat(b, 10);
                a = parseFloat(a, 10);
                
                c = new Color().fromRGB([r, g, b, a]);

                if ( withColorStops )
                {
                    s2 = s.substr( end );
                    if ( m2 = s2.match(Color.colorstopRE) )
                    {
                        c.colorStop( m2[1] );
                        end2 = m2[0].length;
                    }
                }
                return onlyColor ? c : [c, 0, end+end2];
            }
            if ( 'hex' === parsed || 
                ( !parsed && (m = s.match(Color.hexRE)) ) 
            )
            {
                // hex
                if ( 'hex' === parsed )
                {
                    var col = Color.hex2rgb( s[0] );
                }
                else
                {
                    end = m[0].length;
                    end2 = 0;
                    var col = Color.hex2rgb( m[1] );
                }    
                    
                var h1 = col[0] ? col[0] : 0x00;
                var h2 = col[1] ? col[1] : 0x00;
                var h3 = col[2] ? col[2] : 0x00;
                var a = null!=col[3] ? col[3] : 0xff;
                
                c = new Color().fromHEX([h1, h2, h3, a]);

                if ( withColorStops )
                {
                    s2 = s.substr( end );
                    if ( m2 = s2.match(Color.colorstopRE) )
                    {
                        c.colorStop( m2[1] );
                        end2 = m2[0].length;
                    }
                }
                return onlyColor ? c : [c, 0, end+end2];
            }
            if ( 'keyword' === parsed || 
                ( !parsed && (m = s.match(Color.keywordRE)) ) 
            )
            {
                // keyword
                if ( 'keyword' === parsed )
                {
                    var col = s[0];
                }
                else
                {
                    end = m[0].length;
                    end2 = 0;
                    var col = m[1];
                }    
                    
                c = new Color().fromKeyword(col);

                if ( withColorStops )
                {
                    s2 = s.substr( end );
                    if ( m2 = s2.match(Color.colorstopRE) )
                    {
                        c.colorStop( m2[1] );
                        end2 = m2[0].length;
                    }
                }
                return onlyColor ? c : [c, 0, end+end2];
            }
            return null;
        },
        fromString: function( s, withColorStops, parsed ) {
            return Color.parse(s, withColorStops, parsed, 1);
        },
        fromRGB: function( rgb ) {
            return new Color().fromRGB(rgb);
        },
        fromHSL: function( hsl ) {
            return new Color().fromHSL(hsl);
        },
        fromCMYK: function( cmyk ) {
            return new Color().fromCMYK(cmyk);
        },
        fromHEX: function( hex ) {
            return new Color().fromHEX(hex);
        },
        fromKeyword: function( keyword ) {
            return new Color().fromKeyword(keyword);
        },
        fromPixel: function(pixCol) {
            return new Color().fromPixel(pixCol);
        }
    },
    
    constructor: function Color( color, cstop ) {
        // constructor factory pattern used here also
        if ( this instanceof Color ) 
        {
            this.reset( );
            if ( color ) this.set( color, cstop );
        } 
        else 
        {
            return new Color( color, cstop );
        }
    },
    
    name: "Color",
    col: null,
    cstop: null,
    kword: null,
    
    clone: function( ) {
        var c = new Color();
        c.col = this.col.slice();
        c.cstop = this.cstop+'';
        c.kword = this.kword;
        return c;
    },
    
    reset: function( ) {
        this.col = [0, 0, 0, 1];
        this.cstop = '';
        this.kword = null;
        return this;
    },
    
    set: function( color, cstop ) {
        if ( color )
        {
            if ( undef !== color[0] )
                this.col[0] = clamp(color[0], 0, 255);
            if ( undef !== color[1] )
                this.col[1] = clamp(color[1], 0, 255);
            if ( undef !== color[2] )
                this.col[2] = clamp(color[2], 0, 255);
            if ( undef !== color[3] )
                this.col[3] = clamp(color[3], 0, 1);
            else
                this.col[3] = 1;
                
            if (cstop)
                this.cstop = cstop;
                
            this.kword = null;
        }
        return this;
    },
    
    colorStop: function( cstop ) {
        this.cstop = cstop;
        return this;
    },
    
    isTransparent: function( ) {
        return 1 > this.col[3];
    },
    
    isKeyword: function( ) {
        return this.kword ? true : false;
    },
    
    fromPixel: function( color ) {
        color = color || 0;
        this.col = [
            clamp((color>>16)&255, 0, 255),
            clamp((color>>8)&255, 0, 255),
            clamp((color)&255, 0, 255),
            clamp(((color>>24)&255)*C2F, 0, 1)
        ];
        this.kword = null;
        
        return this;
    },
    
    fromKeyword: function( kword ) {
        
        kword = kword.toLowerCase();
        if ( Color.Keywords[kword] )
        {
            this.col = Color.Keywords[kword].slice();
            this.kword = kword;
        }
        return this;
    },
    
    fromHEX: function( hex ) {
        
        this.col[0] = hex[0] ? clamp(parseInt(hex[0], 10), 0, 255) : 0;
        this.col[1] = hex[1] ? clamp(parseInt(hex[1], 10), 0, 255) : 0;
        this.col[2] = hex[2] ? clamp(parseInt(hex[2], 10), 0, 255) : 0;
        this.col[3] = undef!==hex[3] ? clamp(parseInt(hex[3], 10)*C2F, 0, 1) : 1;
        
        this.kword = null;
        
        return this;
    },
    
    fromRGB: function( rgb ) {
        
        this.col[0] = rgb[0] ? clamp(round(rgb[0]), 0, 255) : 0;
        this.col[1] = rgb[1] ? clamp(round(rgb[1]), 0, 255) : 0;
        this.col[2] = rgb[2] ? clamp(round(rgb[2]), 0, 255) : 0;
        this.col[3] = undef!==rgb[3] ? clamp(rgb[3], 0, 1) : 1;
        
        this.kword = null;
        
        return this;
    },
    
    fromCMYK: function( cmyk ) {
        var rgb = Color.cmyk2rgb(cmyk[0]||0, cmyk[1]||0, cmyk[2]||0, cmyk[3]||0);
        
        this.col[0] = rgb[0];
        this.col[1] = rgb[1];
        this.col[2] = rgb[2];
        this.col[3] = undef!==cmyk[4] ? clamp(cmyk[4], 0, 1) : 1;
        
        this.kword = null;
        
        return this;
    },
    
    fromHSL: function( hsl ) {
        var rgb = Color.hsl2rgb(hsl[0]||0, hsl[1]||0, hsl[2]||0);
        
        this.col[0] = rgb[0];
        this.col[1] = rgb[1];
        this.col[2] = rgb[2];
        this.col[3] = undef!==hsl[3] ? clamp(hsl[3], 0, 1) : 1;
        
        this.kword = null;
        
        return this;
    },
    
    toPixel: function( withTransparency ) {
        if ( withTransparency )
            return ((clamp(this.col[3]*255, 0, 255) << 24) | (this.col[0] << 16) | (this.col[1] << 8) | (this.col[2])&255);
        else
            return ((this.col[0] << 16) | (this.col[1] << 8) | (this.col[2])&255);
    },
    
    toCMYK: function( asString, condenced, noTransparency ) {
        var cmyk = Color.rgb2cmyk(this.col[0], this.col[1], this.col[2]);
        if (noTransparency)
            return cmyk;
        else
            return cmyk.concat(this.col[3]);
    },
    
    toKeyword: function( asString, condenced, withTransparency ) {
        if ( this.kword )
            return this.kword;
        else
            return this.toHEX(1, condenced, withTransparency);
    },
    
    toHEX: function( asString, condenced, withTransparency ) {
        if ( withTransparency )
            return Color.rgb2hexIE( this.col[0], this.col[1], this.col[2], clamp(round(255*this.col[3]), 0, 255) );
        else
            return Color.rgb2hex( this.col[0], this.col[1], this.col[2], condenced );
    },
    
    toRGB: function( asString, condenced, noTransparency ) {
        var opcty = this.col[3];
        if ( asString )
        {
            if ( condenced )
            {
                opcty =  ((1 > opcty && opcty > 0) ? opcty.toString().slice(1) : opcty );
            }
            
            if ( noTransparency || 1 == this.col[3] )
                return 'rgb(' + this.col.slice(0, 3).join(',') + ')';
            else
                return 'rgba(' + this.col.slice(0, 3).concat(opcty).join(',') + ')';
        }
        else
        {
            if ( noTransparency )
                return this.col.slice(0, 3);
            else
                return this.col.slice();
        }
    },
    
    toHSL: function( asString, condenced, noTransparency ) {
        var opcty = this.col[3];
        var hsl = Color.rgb2hsl(this.col[0], this.col[1], this.col[2]);
        
        if ( asString )
        {
            if ( condenced )
            {
                hsl[1] = (0==hsl[1] ? hsl[1] : (hsl[1]+'%'));
                hsl[2] = (0==hsl[2] ? hsl[2] : (hsl[2]+'%'));
                opcty =  ((1 > opcty && opcty > 0) ? opcty.toString().slice(1) : opcty );
            }
            
            if ( noTransparency || 1 == this.col[3] )
                return 'hsl(' + [hsl[0], hsl[1], hsl[2]].join(',') + ')';
            else
                return 'hsla(' + [hsl[0], hsl[1], hsl[2], opcty].join(',') + ')';
        }
        else
        {
            if ( noTransparency )
                return hsl;
            else
                return hsl.concat( this.col[3] );
        }
    },
    
    toColorStop: function( compatType ) {
        var cstop = this.cstop;
        if ( compatType )
        {
            cstop = cstop.length ? (cstop+',') : '';
            if ( 1 > this.col[3] )
                return 'color-stop(' + cstop + this.toRGB(1,1) + ')';
            else
                return 'color-stop(' + cstop + this.toHEX(1,1) + ')';
        }
        else
        {
            cstop = cstop.length ? (' '+cstop) : '';
            if ( 1 > this.col[3] )
                return this.toRGB(1,1) + cstop;
            else
                return this.toHEX(1,1) + cstop;
        }
    },
    
    toString: function( format, condenced ) {
        format = format ? format.toLowerCase() : 'hex';
        if ( 'rgb' == format || 'rgba' == format )
        {
            return this.toRGB(1, false!==condenced, 'rgb' == format);
        }
        else if ( 'hsl' == format || 'hsla' == format )
        {
            return this.toHSL(1, false!==condenced, 'hsl' == format);
        }
        else if ( 'keyword' == format )
        {
            return this.toKeyword(1);
        }
        return this.toHEX(1, false!==condenced, 'hexie' == format);
    }
});
// aliases and utilites
Color.toGray = Color.intensity;

// gradient, radial-gradient color generation and utilities
Color.Gradient = {
    
    interpolate: lerp,
    
    stops: function colors_stops( colors, stops ){
        stops = stops ? stops.slice() : stops;
        colors = colors ? colors.slice() : colors;
        var cl = colors.length, i;
        if ( !stops )
        {
            if ( 1 === cl )
            {
                stops = [1.0];
            }
            else
            {
                stops = new Array(cl);
                for(i=0; i<cl; i++) stops[i] = i+1 === cl ? 1.0 : i/(cl-1);
            }
        }
        else if ( stops.length < cl )
        {
            var cstoplen = stops.length, cstop = stops[cstoplen-1];
            for(i=cstoplen; i<cl; i++) stops.push( i+1 === cl ? 1.0 : cstop+(i-cstoplen+1)/(cl-1) );
        }
        if ( 1.0 != stops[stops.length-1] )
        {
            stops.push( 1.0 );
            colors.push( colors[colors.length-1] );
        }
        return [colors, stops];
    },
    
    linear: function gradient( g, w, h, colors, stops, angle, interpolate ){
        var i, x, y, size = g.length, t, px, py, stop1, stop2, s, c, r;
        //interpolate = interpolate || lerp;
        angle = angle || 0.0;
        if ( 0 > angle ) angle += pi2;
        if ( pi2 < angle ) angle -= pi2;
        s = abs(sin(angle)); c = abs(cos(angle));
        r = c*w + s*h; s /= r; c /= r;
        if ( (pi_2 < angle) && (angle <= pi) )
        {
            for(x=0,y=0,i=0; i<size; i+=4,x++)
            {
                if ( x >= w ) { x=0; y++; }
                px = w-1-x; py = y;
                t = min(1.0, c*px + s*py);
                stop2 = 0; while ( t > stops[stop2] ) ++stop2;
                stop1 = 0 === stop2 ? 0 : stop2-1;
                interpolate(
                    g, i,
                    colors[stop1], colors[stop2],
                    // warp the value if needed, between stop ranges
                    stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
                );
            }
        }
        else if ( (pi < angle) && (angle <= pi_32) )
        {
            for(x=0,y=0,i=0; i<size; i+=4,x++)
            {
                if ( x >= w ) { x=0; y++; }
                px = w-1-x; py = h-1-y;
                t = min(1.0, c*px + s*py);
                stop2 = 0; while ( t > stops[stop2] ) ++stop2;
                stop1 = 0 === stop2 ? 0 : stop2-1;
                interpolate(
                    g, i,
                    colors[stop1], colors[stop2],
                    // warp the value if needed, between stop ranges
                    stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
                );
            }
        }
        else if ( (pi_32 < angle) && (angle < pi2) )
        {
            for(x=0,y=0,i=0; i<size; i+=4,x++)
            {
                if ( x >= w ) { x=0; y++; }
                px = x; py = h-1-y;
                t = min(1.0, c*px + s*py);
                stop2 = 0; while ( t > stops[stop2] ) ++stop2;
                stop1 = 0 === stop2 ? 0 : stop2-1;
                interpolate(
                    g, i,
                    colors[stop1], colors[stop2],
                    // warp the value if needed, between stop ranges
                    stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
                );
            }
        }
        else //if ( (0 <= angle) && (angle <= pi_2) )
        {
            for(x=0,y=0,i=0; i<size; i+=4,x++)
            {
                if ( x >= w ) { x=0; y++; }
                px = x; py = y;
                t = min(1.0, c*px + s*py);
                stop2 = 0; while ( t > stops[stop2] ) ++stop2;
                stop1 = 0 === stop2 ? 0 : stop2-1;
                interpolate(
                    g, i,
                    colors[stop1], colors[stop2],
                    // warp the value if needed, between stop ranges
                    stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
                );
            }
        }
        return g;
    },
    
    linearPoint: function gradient_point( rgba, i, x, y, w, h, colors, stops, angle ){
        var px, py, stop1, stop2, s, c, r;
        s = abs(sin(angle)); c = abs(cos(angle));
        r = c*w + s*h; s /= r; c /= r;
        if ( (pi_2 < angle) && (angle <= pi) )
        {
            px = w-1-x; py = y;
            t = min(1.0, c*px + s*py);
            stop2 = 0; while ( t > stops[stop2] ) ++stop2;
            stop1 = 0 === stop2 ? 0 : stop2-1;
            lerp(
                rgba, i,
                colors[stop1], colors[stop2],
                // warp the value if needed, between stop ranges
                stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
            );
        }
        else if ( (pi < angle) && (angle <= pi_32) )
        {
            px = w-1-x; py = h-1-y;
            t = min(1.0, c*px + s*py);
            stop2 = 0; while ( t > stops[stop2] ) ++stop2;
            stop1 = 0 === stop2 ? 0 : stop2-1;
            lerp(
                rgba, i,
                colors[stop1], colors[stop2],
                // warp the value if needed, between stop ranges
                stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
            );
        }
        else if ( (pi_32 < angle) && (angle < pi2) )
        {
            px = x; py = h-1-y;
            t = min(1.0, c*px + s*py);
            stop2 = 0; while ( t > stops[stop2] ) ++stop2;
            stop1 = 0 === stop2 ? 0 : stop2-1;
            lerp(
                rgba, i,
                colors[stop1], colors[stop2],
                // warp the value if needed, between stop ranges
                stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
            );
        }
        else //if ( (0 <= angle) && (angle <= pi_2) )
        {
            px = x; py = y;
            t = min(1.0, c*px + s*py);
            stop2 = 0; while ( t > stops[stop2] ) ++stop2;
            stop1 = 0 === stop2 ? 0 : stop2-1;
            lerp(
                rgba, i,
                colors[stop1], colors[stop2],
                // warp the value if needed, between stop ranges
                stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
            );
        }
        return rgba;
    },
    
    radial: function radial_gradient( g, w, h, colors, stops, centerX, centerY, radiusX, radiusY, interpolate ){
        var i, x, y, size = g.length, t, px, py, stop1, stop2;
        //interpolate = interpolate || lerp;
        centerX = centerX || 0; centerY = centerY || 0;
        radiusX = radiusX || 1.0; radiusY = radiusY || 1.0;
        //relative radii to generate elliptical gradient instead of circular (rX=rY=1)
        if ( radiusY > radiusX )
        {
            radiusX = radiusX/radiusY;
            radiusY = 1.0;
        }
        else if ( radiusX > radiusY )
        {
            radiusY = radiusY/radiusX;
            radiusX = 1.0;
        }
        else
        {
            radiusY = 1.0;
            radiusX = 1.0;
        }
        for(x=0,y=0,i=0; i<size; i+=4,x++)
        {
            if ( x >= w ) { x=0; y++; }
            px = radiusX*(x-centerX)/(w-centerX); py = radiusY*(y-centerY)/(h-centerY);
            t = min(1.0, sqrt(px*px + py*py));
            stop2 = 0; while ( t > stops[stop2] ) ++stop2;
            stop1 = 0 === stop2 ? 0 : stop2-1;
            interpolate(
                g, i,
                colors[stop1], colors[stop2],
                // warp the value if needed, between stop ranges
                stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
            );
        }
        return g;
    },
    
    radialPoint: function radial_gradient_point( rgba, i, x, y, w, h, colors, stops, centerX, centerY, radiusX, radiusY ){
        var t, px, py, stop1, stop2;
        px = radiusX*(x-centerX)/(w-centerX); py = radiusY*(y-centerY)/(h-centerY);
        t = min(1.0, sqrt(px*px + py*py));
        stop2 = 0; while ( t > stops[stop2] ) ++stop2;
        stop1 = 0 === stop2 ? 0 : stop2-1;
        lerp(
            rgba, i,
            colors[stop1], colors[stop2],
            // warp the value if needed, between stop ranges
            stops[stop2] > stops[stop1] ? (t-stops[stop1]) / (stops[stop2]-stops[stop1]) : t
        );
        return rgba;
    }
};

// color blending utilties
// JavaScript implementations of common image blending modes, based on
// http://stackoverflow.com/questions/5919663/how-does-photoshop-blend-two-images-together
Color.Blend = {
    //p1 = p1 || 0; p2 = p2 || 0;
    
    normal: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
        
        // normal mode
        rb = r2;  
        gb = g2;  
        bb = b2;
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    lighten: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
        
        // lighten mode
        rb = r > r2 ? r : r2; 
        gb = g > g2 ? g : g2; 
        bb = b > b2 ? b : b2; 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    darken: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // darken mode
        rb = r > r2 ? r2 : r; 
        gb = g > g2 ? g2 : g; 
        bb = b > b2 ? b2 : b; 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    multiply: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // multiply mode
        rb = r * r2 * 0.003921568627451;
        gb = g * g2 * 0.003921568627451;
        bb = b * b2 * 0.003921568627451;
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    average: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // average mode
        rb = 0.5*(r + r2); 
        gb = 0.5*(g + g2); 
        bb = 0.5*(b + b2); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    add: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // add mode
        rb = r + r2; 
        gb = g + g2; 
        bb = b + b2; 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    subtract: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // subtract mode
        rb = r + r2 < 255 ? 0 : r + r2 - 255;  
        gb = g + g2 < 255 ? 0 : g + g2 - 255;  
        bb = b + b2 < 255 ? 0 : b + b2 - 255;  
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    difference: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // difference mode
        rb = abs(r2 - r); 
        gb = abs(g2 - g); 
        bb = abs(b2 - b); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    negation: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // negation mode
        rb = 255 - abs(255 - r2 - r);
        gb = 255 - abs(255 - g2 - g);
        bb = 255 - abs(255 - b2 - b);
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    screen: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // screen mode
        rb = 255 - (((255 - r2) * (255 - r)) >> 8); 
        gb = 255 - (((255 - g2) * (255 - g)) >> 8); 
        bb = 255 - (((255 - b2) * (255 - b)) >> 8); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    exclusion: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // exclusion mode
        rb = r2 + r - 2 * r2 * r * 0.003921568627451; 
        gb = g2 + g - 2 * g2 * g * 0.003921568627451; 
        bb = b2 + b - 2 * b2 * b * 0.003921568627451; 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    overlay: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // overlay mode
        rb = r < 128 ? (2 * r2 * r * 0.003921568627451) : (255 - 2 * (255 - r2) * (255 - r) * 0.003921568627451); 
        gb = g < 128 ? (2 * g2 * g * 0.003921568627451) : (255 - 2 * (255 - g2) * (255 - g) * 0.003921568627451); 
        rb = b < 128 ? (2 * b2 * b * 0.003921568627451) : (255 - 2 * (255 - b2) * (255 - b) * 0.003921568627451); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    softlight: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // softlight mode
        rb = r < 128 ? (2 * ((r2 >> 1) + 64)) * (r * 0.003921568627451) : 255 - (2 * (255 - (( r2 >> 1) + 64)) * (255 - r) * 0.003921568627451); 
        gb = g < 128 ? (2 * ((g2 >> 1) + 64)) * (g * 0.003921568627451) : 255 - (2 * (255 - (( g2 >> 1) + 64)) * (255 - g) * 0.003921568627451); 
        bb = b < 128 ? (2 * ((b2 >> 1) + 64)) * (b * 0.003921568627451) : 255 - (2 * (255 - (( b2 >> 1) + 64)) * (255 - b) * 0.003921568627451); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    // reverse of overlay
    hardlight: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // hardlight mode, reverse of overlay
        rb = r2 < 128 ? (2 * r * r2 * 0.003921568627451) : (255 - 2 * (255 - r) * (255 - r2) * 0.003921568627451); 
        gb = g2 < 128 ? (2 * g * g2 * 0.003921568627451) : (255 - 2 * (255 - g) * (255 - g2) * 0.003921568627451); 
        bb = b2 < 128 ? (2 * b * b2 * 0.003921568627451) : (255 - 2 * (255 - b) * (255 - b2) * 0.003921568627451); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    colordodge: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // colordodge mode
        rb = 255 === r ? r : min(255, ((r2 << 8 ) / (255 - r))); 
        gb = 255 === g ? g : min(255, ((g2 << 8 ) / (255 - g))); 
        bb = 255 === b ? b : min(255, ((b2 << 8 ) / (255 - b))); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    colorburn: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // colorburn mode
        rb = 0 === r ? r : max(0, (255 - ((255 - r2) << 8 ) / r)); 
        gb = 0 === g ? g : max(0, (255 - ((255 - g2) << 8 ) / g)); 
        bb = 0 === b ? b : max(0, (255 - ((255 - b2) << 8 ) / b)); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    linearlight: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb, tmp,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // linearlight mode
        if ( r < 128 )
        {
            tmp = r*2;
            rb = tmp + r2 < 255 ? 0 : tmp + r2 - 255; //linearBurn(a, 2 * b)
        }
        else
        {
            tmp = 2 * (r - 128);
            rb = tmp + r2; //linearDodge(a, (2 * (b - 128)))
        }
        if ( g < 128 )
        {
            tmp = g*2;
            gb = tmp + g2 < 255 ? 0 : tmp + g2 - 255; //linearBurn(a, 2 * b)
        }
        else
        {
            tmp = 2 * (g - 128);
            gb = tmp + g2; //linearDodge(a, (2 * (b - 128)))
        }
        if ( b < 128 )
        {
            tmp = b*2;
            bb = tmp + b2 < 255 ? 0 : tmp + b2 - 255; //linearBurn(a, 2 * b)
        }
        else
        {
            tmp = 2 * (b - 128);
            bb = tmp + b2; //linearDodge(a, (2 * (b - 128)))
        }
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    reflect: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // reflect mode
        rb = 255 === r ? r : min(255, (r2 * r2 / (255 - r))); 
        gb = 255 === g ? g : min(255, (g2 * g2 / (255 - g))); 
        bb = 255 === b ? b : min(255, (b2 * b2 / (255 - b))); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    // reverse of reflect
    glow: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // glow mode, reverse of reflect
        rb = 255 === r2 ? r2 : min(255, (r * r / (255 - r2))); 
        gb = 255 === g2 ? g2 : min(255, (g * g / (255 - g2))); 
        bb = 255 === b2 ? b2 : min(255, (b * b / (255 - b2))); 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    phoenix: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // phoenix mode
        rb = min(r2, r) - max(r2, r) + 255; 
        gb = min(g2, g) - max(g2, g) + 255; 
        bb = min(b2, b) - max(b2, b) + 255; 
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    vividlight: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb, tmp,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // vividlight mode
        if ( r < 128 )
        {
            tmp = 2*r;
            rb = 0 === tmp ? tmp : max(0, (255 - ((255 - r2) << 8 ) / tmp));  //colorBurn(a, 2 * b)
        }
        else
        {
            tmp = 2 * (r-128);
            rb = 255 === tmp ? tmp : min(255, ((r2 << 8 ) / (255 - tmp)));  // colorDodge(a, (2 * (b - 128)))
        }
        if ( g < 128 )
        {
            tmp = 2*g;
            gb = 0 === tmp ? tmp : max(0, (255 - ((255 - g2) << 8 ) / tmp));  //colorBurn(a, 2 * b)
        }
        else
        {
            tmp = 2 * (g-128);
            gb = 255 === tmp ? tmp : min(255, ((g2 << 8 ) / (255 - tmp)));  // colorDodge(a, (2 * (b - 128)))
        }
        if ( b < 128 )
        {
            tmp = 2*b;
            bb = 0 === tmp ? tmp : max(0, (255 - ((255 - b2) << 8 ) / tmp));  //colorBurn(a, 2 * b)
        }
        else
        {
            tmp = 2 * (g-128);
            bb = 255 === tmp ? tmp : min(255, ((b2 << 8 ) / (255 - tmp)));  // colorDodge(a, (2 * (b - 128)))
        }
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    pinlight: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb, tmp,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // pinlight mode
        if ( r < 128 )
        {
            tmp = 2*r;
            rb = tmp > r2 ? tmp : r2;  //darken(a, 2 * b)
        }
        else
        {
            tmp = 2 * (r-128);
            rb = tmp > r2 ? r2 : tmp;  // lighten(a, (2 * (b - 128)))
        }
        if ( g < 128 )
        {
            tmp = 2*g;
            gb = tmp > g2 ? tmp : g2;  //darken(a, 2 * b)
        }
        else
        {
            tmp = 2 * (r-128);
            gb = tmp > g2 ? g2 : tmp;  // lighten(a, (2 * (b - 128)))
        }
        if ( b < 128 )
        {
            tmp = 2*b;
            bb = tmp > b2 ? tmp : b2;  //darken(a, 2 * b)
        }
        else
        {
            tmp = 2 * (b-128);
            bb = tmp > b2 ? b2 : tmp;  // lighten(a, (2 * (b - 128)))
        }
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    },

    hardmix: function(rgba1, rgba2, p1, p2, alpha, do_clamp) { 
        var amount = alpha*rgba2[p2+3]*0.003921568627451,
            rb, gb, bb, tmp,
            r = rgba1[p1], g = rgba1[p1+1], b = rgba1[p1+2],
            r2 = rgba2[p2], g2 = rgba2[p2+1], b2 = rgba2[p2+2]
        ;
    
        // hardmix mode, blendModes.vividLight(a, b) < 128 ? 0 : 255;
        if ( r < 128 )
        {
            tmp = 2*r;
            rb = 0 === tmp ? tmp : max(0, (255 - ((255 - r2) << 8 ) / tmp));
        }
        else
        {
            tmp = 2 * (r-128);
            rb = 255 === tmp ? tmp : min(255, ((r2 << 8 ) / (255 - tmp)));
        }
        rb = rb < 128 ? 0 : 255;
        if ( g < 128 )
        {
            tmp = 2*g;
            gb = 0 === tmp ? tmp : max(0, (255 - ((255 - g2) << 8 ) / tmp));
        }
        else
        {
            tmp = 2 * (g-128);
            gb = 255 === tmp ? tmp : min(255, ((g2 << 8 ) / (255 - tmp)));
        }
        gb = gb < 128 ? 0 : 255;
        if ( b < 128 )
        {
            tmp = 2*b;
            bb = 0 === tmp ? tmp : max(0, (255 - ((255 - b2) << 8 ) / tmp));
        }
        else
        {
            tmp = 2 * (b-128);
            bb = 255 === tmp ? tmp : min(255, ((b2 << 8 ) / (255 - tmp)));
        }
        bb = bb < 128 ? 0 : 255;
        
        // amount compositing
        r = r + amount * (rb-r);
        g = g + amount * (gb-g);
        b = b + amount * (bb-b);
        
        if (do_clamp)
        {
            // clamp them manually
            r = r<0 ? 0 : (r>255 ? 255 : r);
            g = g<0 ? 0 : (g>255 ? 255 : g);
            b = b<0 ? 0 : (b>255 ? 255 : b);
        }
        
        // output
        rgba1[p1] = r|0; rgba1[p1+1] = g|0; rgba1[p1+2] = b|0;
    }
};
// aliases
Color.Blend.lineardodge = Color.Blend.add;
Color.Blend.linearburn = Color.Blend.subtract;
Color.Combine = Color.Blend;

}(FILTER);/**
*
* Filter Utils, Canvas Proxy Class
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

if ( FILTER.Util.LOADED_CANVAS ) return;
FILTER.Util.LOADED_CANVAS = true;

var CanvasProxy, CanvasProxyCtx, IMG = FILTER.ImArray, ImageUtil = FILTER.Util.Image,
    Color = FILTER.Color, Min = Math.min, Max = Math.max, resize = FILTER.Interpolation.bilinear,
    get = ImageUtil.get_data, set = ImageUtil.set_data, fill = ImageUtil.fill;

CanvasProxyCtx = FILTER.Class({
    constructor: function CanvasProxyCtx( canvas ) {
        var self = this;
        self._cnv = canvas;
        self._transform = {scale:[1,1], translate:[0,0], rotate:[0,0]};
        self._data = null;
    },
    
    _cnv: null,
    _w: 0, _h: 0,
    _transform: null,
    _data: null,
    fillStyle: null,
    
    dispose: function( ) {
        var self = this;
        self._cnv = null;
        self._data = null;
        self._transform = null;
        return self;
    },
    
    fillRect: function( x, y, w, h ) {
        var self = this, W = self._w, H = self._h, col, fillStyle = self.fillStyle;
        if ( null == x ) x = 0;
        if ( null == y ) y = 0;
        if ( null == w ) w = W;
        if ( null == h ) h = H;
        if ( fillStyle === +fillStyle )
        {
            col = Color.Color2RGBA( fillStyle, [0,0,0,0], 0 );
        }
        else if ( fillStyle && fillStyle.substr )
        {
            col = Color.fromString( fillStyle ).toRGB( false );
            col[3] = (255*col[3])|0;
        }
        else
        {
            col = fillStyle && (2 < fillStyle.length) ? fillStyle : [0,0,0,0];
        }
        fill( self._data, W, H, col, x, y, x+w-1, y+h-1 );
    },
    
    clearRect: function( x, y, w, h ) {
        var self = this, W = self._w, H = self._h;
        if ( null == x ) x = 0;
        if ( null == y ) y = 0;
        if ( null == w ) w = W;
        if ( null == h ) h = H;
        fill( self._data, W, H, [0,0,0,0], x, y, x+w-1, y+h-1 );
    },
    
    drawImage: function( canvas, sx, sy, sw, sh, dx, dy, dw, dh ) {
        var self = this, W = self._w, H = self._h,
            w = canvas._ctx._w, h = canvas._ctx._h,
            idata = canvas._ctx._data,
            argslen = arguments.length
        ;
        if ( 3 === argslen )
        {
            if ( !self._data )
            {
                W = self._w = w;
                H = self._h = h;
                self._data = new IMG((W*H)<<2);
            }
            dx = sx; dy = sy;
            set( self._data, W, H, idata, w, h, 0, 0, w-1, h-1, dx, dy );
        }
        else if ( 5 === argslen )
        {
            if ( !self._data )
            {
                W = self._w = sw;
                H = self._h = sh;
                self._data = new IMG((W*H)<<2);
            }
            dx = sx; dy = sy;
            dw = sw; dh = sh;
            if ( (w === dw) && (h === dh) )
                set( self._data, W, H, idata, dw, dh, 0, 0, dw-1, dh-1, dx, dy );
            else
                set( self._data, W, H, resize( idata, w, h, dw, dh ), dw, dh, 0, 0, dw-1, dh-1, dx, dy );
        }
        else
        {
            if ( !self._data )
            {
                W = self._w = dw;
                H = self._h = dh;
                self._data = new IMG((W*H)<<2);
            }
            if ( (sw === dw) && (sh === dh) )
                set( self._data, W, H, get( idata, w, h, sx, sy, sx+sw-1, sy+sh-1, true ), dw, dh, 0, 0, dw-1, dh-1, dx, dy );
            else
                set( self._data, W, H, resize( get( idata, w, h, sx, sy, sx+sw-1, sy+sh-1, true ), sw, sh, dw, dh ), dw, dh, 0, 0, dw-1, dh-1, dx, dy );
        }
    },
    
    createImageData: function( w, h ) {
        var self = this;
        self._data = new IMG((w*h)<<2);
        self._w = w; self._h = h;
        //fill( self._data, w, h, [0,0,0,0], 0, 0, w-1, h-1 );
        return self;
    },
    
    putImageData: function( data, x, y ) {
        var self = this, W = self._w, H = self._h, w = data.width, h = data.height;
        if ( null == x ) x = 0;
        if ( null == y ) y = 0;
        set( self._data, W, H, data.data, w, h, 0, 0, w-1, h-1, x, y );
    },
    
    getImageData: function( x, y, w, h ) {
        var self = this, W = self._w, H = self._h, x1, y1, x2, y2;
        if ( null == x ) x = 0;
        if ( null == y ) y = 0;
        if ( null == w ) w = W;
        if ( null == h ) h = H;
        x1 = Max(0, Min(x, w-1, W-1));
        y1 = Max(0, Min(y, h-1, H-1));
        x2 = Min(x1+w-1, w-1, W-1);
        y2 = Min(y1+h-1, h-1, H-1);
        return {data: get( self._data, W, H, x1, y1, x2, y2 ), width: x2-x1+1, height: y2-y1+1};
    },
    
    scale: function( sx, sy ) {
        var self = this;
        self._transform.scale[0] = sx;
        self._transform.scale[1] = sy;
        return self;
    },
    
    translate: function( tx, ty ) {
        var self = this;
        self._transform.translate[0] = tx;
        self._transform.translate[1] = ty;
        return self;
    }
});

CanvasProxy = FILTER.CanvasProxy = FILTER.Class({
    constructor: function CanvasProxy( w, h ) {
        var self = this;
        self.width = w || 0;
        self.height = h || 0;
        self.style = { };
        self._ctx = null;
    },
    
    _ctx: null,
    width: null,
    height: null,
    style: null,
    
    dispose: function( ) {
        var self = this;
        self.width = null;
        self.height = null;
        self.style = null;
        if ( self._ctx )
        {
            self._ctx.dispose( );
            self._ctx = null;
        }
        return self;
    },
    
    getContext: function( ctx, options ) {
        var self = this;
        if ( -1 < ctx.indexOf("webgl") ) return FILTER.GL ? FILTER.GL( self, options ) : null;
        if ( !self._ctx ) self._ctx = new CanvasProxyCtx( self );
        return self._ctx;
    },
    
    toDataURL: function( mime ) {
        return '';
    }
});

}(FILTER);/**
*
* Image Proxy Class
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var PROTO = 'prototype', devicePixelRatio = FILTER.devicePixelRatio,
    IMG = FILTER.ImArray, IMGcpy = FILTER.ImArrayCopy, A32F = FILTER.Array32F,
    CHANNEL = FILTER.CHANNEL, FORMAT = FILTER.FORMAT, MIME = FILTER.MIME, ID = 0,
    Color = FILTER.Color, Gradient = Color.Gradient,
    ImageUtil = FILTER.Util.Image, FilterUtil = FILTER.Util.Filter, Canvas,
    ArrayUtil = FILTER.Util.Array, arrayset = ArrayUtil.arrayset, subarray = ArrayUtil.subarray,
    Min = Math.min, Floor = Math.floor,

    RED = 1<<CHANNEL.R, GREEN = 1<<CHANNEL.G, BLUE = 1<<CHANNEL.B, ALPHA = 1<<CHANNEL.A,
    ALL_CHANNELS = RED|GREEN|BLUE|ALPHA,
    IDATA = 1, ODATA = 2, ISEL = 4, OSEL = 8, HIST = 16, SAT = 32, SPECTRUM = 64,
    WIDTH = 2, HEIGHT = 4, WIDTH_AND_HEIGHT = WIDTH | HEIGHT, SEL = ISEL|OSEL, DATA = IDATA|ODATA,
    CLEAR_DATA = ~DATA, CLEAR_SEL = ~SEL, CLEAR_HIST = ~HIST, CLEAR_SAT = ~SAT, CLEAR_SPECTRUM = ~SPECTRUM
;

Canvas = FILTER.Canvas = function( w, h ) {
    var canvas = FILTER.Browser.isNode ? new FILTER.CanvasProxy( ) : document.createElement( 'canvas' );
    w = w || 0; h = h || 0;
    
    // set the display size of the canvas.
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
     
    // set the size of the drawingBuffer
    canvas.width = w * FILTER.devicePixelRatio;
    canvas.height = h * FILTER.devicePixelRatio;
    
    return canvas;
};


// resize/scale/interpolate image data
ImageUtil.scale = ImageUtil.resize = FILTER.Interpolation.bilinear;

// Image (Proxy) Class
var FilterImage = FILTER.Image = FILTER.Class({
    name: "Image"
    
    ,constructor: function FilterImage( img ) {
        var self = this, w = 0, h = 0;
        // factory-constructor pattern
        if ( !(self instanceof FilterImage) ) return new FilterImage(img);
        self.id = ++ID;
        self.width = w; self.height = h;
        self.tmpCanvas = null;
        self.iCanvas = Canvas(w, h);
        self.oCanvas = Canvas(w, h);
        self.iData = null; self.iDataSel = null;
        self.oData = null; self.oDataSel = null;
        self.ictx = self.iCanvas.getContext('2d');
        self.octx = self.oCanvas.getContext('2d');
        self.domElement = self.oCanvas;
        self._gl = null;
        self._restorable = true;
        self.gray = false;
        self.selection = null;
        self._histogram = [null, null, null, null];
        self._integral = [null, null, null, null];
        self._spectrum = [null, null, null, null];
        // lazy
        self._refresh = 0;
        self._hstRefresh = 0;
        self._intRefresh = 0;
        self._spcRefresh = 0;
        self.nref = 0;
        if ( img ) self.image( img );
    }
    
    // properties
    ,id: null
    ,width: 0
    ,height: 0
    ,gray: false
    ,selection: null
    ,tmpCanvas: null
    ,iCanvas: null
    ,oCanvas: null
    ,ictx: null
    ,octx: null
    ,iData: null
    ,iDataSel: null
    ,oData: null
    ,oDataSel: null
    ,domElement: null
    ,_restorable: true
    ,_gl: undef
    ,_histogram: null
    ,_integral: null
    ,_spectrum: null
    ,_refresh: 0
    ,_hstRefresh: 0
    ,_intRefresh: 0
    ,_spcRefresh: 0
    ,nref: 0
    
    ,dispose: function( ) {
        var self = this;
        self.id = null;
        self.width = self.height = null;
        self.selection = self.gray = null;
        self.iData = self.iDataSel = self.oData = self.oDataSel = null;
        self.domElement = self.tmpCanvas = self.iCanvas = self.oCanvas = self.ictx = self.octx = null;
        self._restorable = self._gl = null;
        self._histogram = self._integral = self._spectrum = null;
        self._hstRefresh = self._intRefresh = self._spcRefresh = self._refresh = self.nref = null;
        return self;
    }
    
    ,clone: function( original ) {
        return new FilterImage(true === original ? this.iCanvas : this.oCanvas);
    }
    
    ,gl: function( options ) {
        if ( undef === this._gl ) this._gl = FILTER.GL( this.oCanvas, options );
        return this._gl;
    }
    
    ,grayscale: function( bool ) {
        var self = this;
        if ( !arguments.length )  return self.gray;
        self.gray = !!bool;
        return self;
    }
    
    ,restorable: function( enabled ) {
        var self = this;
        if ( !arguments.length ) enabled = true;
        self._restorable = !!enabled;
        return self;
    }
    
    // apply a filter (uses filter's own apply method)
    ,apply: function( filter, cb ) {
        filter.apply( this, this, cb || null );
        return this;
    }
    
    // apply2 a filter using another image as destination
    ,apply2: function( filter, destImg, cb ) {
        filter.apply( this, destImg, cb || null );
        return this;
    }
    
    ,select: function( x1, y1, x2, y2, absolute ) {
        var self = this, argslen = arguments.length;
        if ( false === x1 )
        {
            // deselect
            self.selection = null;
            self.iDataSel = null;
            self.oDataSel = null;
            self._refresh &= CLEAR_SEL;
        }
        else
        {
            // default
            if ( argslen < 1 ) x1 = 0;
            if ( argslen < 2 ) y1 = 0;
            if ( argslen < 3 ) x2 = 1;
            if ( argslen < 4 ) y2 = 1;
            // select
            self.selection = absolute ? [ 
                // clamp
                0 > x1 ? 0 : x1,
                0 > y1 ? 0 : y1,
                0 > x2 ? 0 : x2,
                0 > y2 ? 0 : y2,
                0
            ] : [
                // clamp
                0 > x1 ? 0 : (1 < x1 ? 1 : x1),
                0 > y1 ? 0 : (1 < y1 ? 1 : y1),
                0 > x2 ? 0 : (1 < x2 ? 1 : x2),
                0 > y2 ? 0 : (1 < y2 ? 1 : y2),
                1
            ];
            self._refresh |= SEL;
        }
        self.nref++;
        return self;
    }
    
    ,deselect: function( ) {
        return this.select( false );
    }
    
    // store the processed/filtered image as the original image
    // make the processed image the original image
    ,store: function( ) {
        var self = this;
        if ( self._restorable )
        {
            self.ictx.drawImage(self.oCanvas, 0, 0); 
            self._refresh |= IDATA;
            if (self.selection) self._refresh |= ISEL;
            self.nref++;
        }
        return self;
    }
    
    // restore the original image
    // remove any filters applied to original image
    ,restore: function( ) {
        var self = this;
        if ( self._restorable )
        {
            self.octx.drawImage(self.iCanvas, 0, 0); 
            self._refresh |= ODATA | HIST | SAT | SPECTRUM;
            self._hstRefresh = ALL_CHANNELS;
            self._intRefresh = ALL_CHANNELS;
            self._spcRefresh = ALL_CHANNELS;
            if (self.selection) self._refresh |= OSEL;
            self.nref++;
        }
        return self;
    }
    
    ,dimensions: function( w, h, refresh ) {
        var self = this;
        self._refresh |= DATA | HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= SEL;
        self.nref++;
        set_dimensions(self, w, h, WIDTH_AND_HEIGHT);
        return self;
    }
    ,setDimensions: null
    
    ,scale: function( sx, sy ) {
        var self = this;
        sx = sx||1; sy = sy||sx;
        if ( (1===sx) && (1===sy) ) return self;
        
        // lazy
        self.tmpCanvas = self.tmpCanvas || Canvas( self.width, self.height );
        var ctx = self.tmpCanvas.getContext('2d'), w = self.width, h = self.height;
        
        //ctx.save();
        ctx.scale(sx, sy);
        w = self.width = (sx*w+0.5)|0;
        h = self.height = (sy*h+0.5)|0;
        
        ctx.drawImage(self.oCanvas, 0, 0);
        self.oCanvas.style.width = w + 'px';
        self.oCanvas.style.height = h + 'px';
        self.oCanvas.width = w * devicePixelRatio;
        self.oCanvas.height = h * devicePixelRatio;
        self.octx.drawImage(self.tmpCanvas, 0, 0);
        
        if ( self._restorable )
        {
        ctx.drawImage(self.iCanvas, 0, 0);
        self.iCanvas.style.width = self.oCanvas.style.width;
        self.iCanvas.style.height = self.oCanvas.style.height;
        self.iCanvas.width = self.oCanvas.width;
        self.iCanvas.height = self.oCanvas.height;
        self.ictx.drawImage(self.tmpCanvas, 0, 0);
        }
        
        self.tmpCanvas.width = self.oCanvas.width;
        self.tmpCanvas.height = self.oCanvas.height;
        //ctx.restore();
        
        self._refresh |= DATA | HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= SEL;
        self.nref++;
        return self;
    }
    
    ,flipHorizontal: function( ) {
        var self = this;
        // lazy
        self.tmpCanvas = self.tmpCanvas || Canvas( self.width, self.height );
        var ctx = self.tmpCanvas.getContext('2d');
        
        ctx.translate(self.width, 0); 
        ctx.scale(-1, 1);
        
        ctx.drawImage(self.oCanvas, 0, 0);
        self.octx.drawImage(self.tmpCanvas, 0, 0);
        
        if ( self._restorable )
        {
        ctx.drawImage(self.iCanvas, 0, 0);
        self.ictx.drawImage(self.tmpCanvas, 0, 0);
        }
        
        self._refresh |= DATA | SAT | SPECTRUM;
        self._intRefresh = ALL_CHANNELS;
        //self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= SEL;
        self.nref++;
        return self;
    }
    
    ,flipVertical: function( ) {
        var self = this;
        // lazy
        self.tmpCanvas = self.tmpCanvas || Canvas( self.width, self.height );
        var ctx = self.tmpCanvas.getContext('2d');
        
        ctx.translate(0, self.height); 
        ctx.scale(1, -1);
        
        ctx.drawImage(self.oCanvas, 0, 0);
        self.octx.drawImage(self.tmpCanvas, 0, 0);
        
        if ( self._restorable )
        {
        ctx.drawImage(self.iCanvas, 0, 0);
        self.ictx.drawImage(self.tmpCanvas, 0, 0);
        }
        
        self._refresh |= DATA | SAT | SPECTRUM;
        self._intRefresh = ALL_CHANNELS;
        //self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= SEL;
        self.nref++;
        return self;
    }
    
    // clear the image contents
    ,clear: function( ) {
        var self = this, w = self.width, h = self.height;
        if ( w && h )
        {
            if ( self._restorable ) self.ictx.clearRect(0, 0, w, h);
            self.octx.clearRect(0, 0, w, h);
            self._refresh |= DATA | HIST | SAT | SPECTRUM;
            self._hstRefresh = ALL_CHANNELS;
            self._intRefresh = ALL_CHANNELS;
            self._spcRefresh = ALL_CHANNELS;
            if (self.selection) self._refresh |= SEL;
            self.nref++;
        }
        return self;
    }
    
    // crop image region
    ,crop: function( x1, y1, x2, y2 ) {
        var self = this, sel = self.selection, 
            W = self.width, H = self.height, xs, ys, ws, hs, x, y, w, h;
        if ( !arguments.length )
        {
            if (sel)
            {
                xs = Floor(sel[0]*(W-1)); ys = Floor(sel[1]*(H-1));
                ws = Floor(sel[2]*(W-1))-xs+1; hs = Floor(sel[3]*(H-1))-ys+1;
                x = xs; y = ys;
                w = ws; h = hs;
                sel[0] = 0; sel[1] = 0;
                sel[2] = 1; sel[3] = 1;
            }
            else
            {
                return self;
            }
        }
        else
        {
            x = x1; y = y1;
            w = x2-x1+1; h = y2-y1+1;
        }
        
        // lazy
        self.tmpCanvas = self.tmpCanvas || Canvas( self.width, self.height );
        var ctx = self.tmpCanvas.getContext('2d');
        
        ctx.drawImage(self.oCanvas, 0, 0, W, H, x, y, w, h);
        self.oCanvas.style.width = w + 'px';
        self.oCanvas.style.height = h + 'px';
        self.oCanvas.width = w * devicePixelRatio;
        self.oCanvas.height = h * devicePixelRatio;
        self.octx.drawImage(self.tmpCanvas, 0, 0);
        
        if ( self._restorable )
        {
        ctx.drawImage(self.iCanvas, 0, 0, W, H, x, y, w, h);
        self.iCanvas.style.width = self.oCanvas.style.width;
        self.iCanvas.style.height = self.oCanvas.style.height;
        self.iCanvas.width = self.oCanvas.width;
        self.iCanvas.height = self.oCanvas.height;
        self.ictx.drawImage(self.tmpCanvas, 0, 0);
        }
        
        self.tmpCanvas.width = self.oCanvas.width;
        self.tmpCanvas.height = self.oCanvas.height;
        
        self._refresh |= DATA | HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (sel) self._refresh |= SEL;
        self.nref++;
        return self;
    }
        
    // fill image region with a specific (background) color
    ,fill: function( color, x, y, w, h ) {
        var self = this, sel = self.selection, 
            W = self.width, H = self.height, xs, ys, ws, hs,
            isVideo, isCanvas, isImage;
        if (sel)
        {
            xs = Floor(sel[0]*(W-1)); ys = Floor(sel[1]*(H-1));
            ws = Floor(sel[2]*(W-1))-xs+1; hs = Floor(sel[3]*(H-1))-ys+1;
        }
        else
        {
            xs = 0; ys = 0;
            ws = W; hs = H;
        }
        if ( undef === x ) x = xs;
        if ( undef === y ) y = ys;
        if ( undef === w ) w = ws;
        if ( undef === h ) h = hs;
        
        // create the image data if needed
        if (w && !W && h && !H) self.createImageData(w, h);
        
        var ictx = self.ictx, octx = self.octx;
        color = color||0; 
        /*x = x||0; y = y||0; 
        w = w||W; h = h||H;*/
        
        if ( self._restorable )
        {
        ictx.fillStyle = color;  
        ictx.fillRect(x, y, w, h);
        }
        
        octx.fillStyle = color;  
        octx.fillRect(x, y, w, h);
        
        self._refresh |= DATA | HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (sel) self._refresh |= SEL;
        self.nref++;
        return self;
    }
    
    ,paste: function( img, x, y/*, blendMode*/ ) {
        if ( !img ) return this;
        var self = this, isVideo, isCanvas, isImage, ictx, octx;
        
        if ( img instanceof FilterImage ) img = img.oCanvas;
        isVideo = ("undefined" !== typeof HTMLVideoElement) && (img instanceof HTMLVideoElement);
        isCanvas = (("undefined" !== typeof HTMLCanvasElement) && (img instanceof HTMLCanvasElement)) || (FILTER.CanvasProxy && img instanceof FILTER.CanvasProxy);
        isImage = ("undefined" !== typeof Image) && (img instanceof Image);
        if ( !isImage && !isCanvas && !isVideo ) return self;
        
        if ( self._restorable ) 
        {
        ictx = self.ictx = self.iCanvas.getContext('2d');
        ictx.drawImage(img, x|0, y|0);
        }
        octx = self.octx = self.oCanvas.getContext('2d');
        octx.drawImage(img, x|0, y|0);
        self._refresh |= DATA;
        self._refresh |= HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= SEL;
        self.nref++;
        return self;
    }
    /*,draw: function( drawable, x, y, blendMode ) {
        return this;
    }*/
    ,draw: null
    
    // get direct data array
    ,getData: function( processed ) {
        var self = this, Data;
        if ( self._restorable && !processed )
        {
        if (self._refresh & IDATA) refresh_data( self, IDATA );
        Data = self.iData;
        }
        else
        {
        if (self._refresh & ODATA) refresh_data( self, ODATA );
        Data = self.oData;
        }
        // clone it
        return new IMGcpy( Data.data );
    }
    
    // get direct data array of selected part
    ,getSelectedData: function( processed ) {
        var self = this, sel;
        
        if (self.selection)  
        {
            if ( self._restorable && !processed )
            {
            if (self._refresh & ISEL) refresh_selected_data( self, ISEL );
            sel = self.iDataSel;
            }
            else
            {
            if (self._refresh & OSEL) refresh_selected_data( self, OSEL );
            sel = self.oDataSel;
            }
        }
        else
        {
            if ( self._restorable && !processed )
            {
            if (self._refresh & IDATA) refresh_data( self, IDATA );
            sel = self.iData;
            }
            else
            {
            if (self._refresh & ODATA) refresh_data( self, ODATA );
            sel = self.oData;
            }
        }
        // clone it
        return [new IMGcpy( sel.data ), sel.width, sel.height, 2];
    }
    
    // set direct data array
    ,setData: ArrayUtil.hasArrayset ? function( a ) {
        var self = this;
        if (self._refresh & ODATA) refresh_data( self, ODATA );
        self.oData.data.set(a);
        self.octx.putImageData(self.oData, 0, 0); 
        self._refresh |= HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= OSEL;
        self.nref++;
        return self;
    } : function( a ) {
        var self = this;
        if (self._refresh & ODATA) refresh_data( self, ODATA );
        arrayset(self.oData.data, a); // not supported in Opera, IE, Safari
        self.octx.putImageData(self.oData, 0, 0); 
        self._refresh |= HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= OSEL;
        self.nref++;
        return self;
    }
    
    // set direct data array of selected part
    ,setSelectedData: ArrayUtil.hasArrayset ? function( a ) {
        var self = this, sel = self.selection;
        if ( sel )
        {
            var xs = sel[0], ys = sel[1];
            if ( sel[4] )
            {
                // relative
                xs = Floor(xs*(self.width-1));
                ys = Floor(ys*(self.height-1));
            }
            if (self._refresh & OSEL) refresh_selected_data( self, OSEL );
            self.oDataSel.data.set(a);
            self.octx.putImageData(self.oDataSel, xs, ys); 
            self._refresh |= ODATA;
        }
        else
        {
            if (self._refresh & ODATA) refresh_data( self, ODATA );
            self.oData.data.set(a);
            self.octx.putImageData(self.oData, 0, 0); 
        }
        self._refresh |= HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        self.nref++;
        return self;
    } : function( a ) {
        var self = this, sel = self.selection;
        if ( sel )
        {
            var xs = sel[0], ys = sel[1];
            if ( sel[4] )
            {
                // relative
                xs = Floor(xs*(self.width-1));
                ys = Floor(ys*(self.height-1));
            }
            if (self._refresh & OSEL) refresh_selected_data( self, OSEL );
            arrayset(self.oDataSel.data, a); // not supported in Opera, IE, Safari
            self.octx.putImageData(self.oDataSel, xs, ys); 
            self._refresh |= ODATA;
        }
        else
        {
            if (self._refresh & ODATA) refresh_data( self, ODATA );
            arrayset(self.oData.data, a); // not supported in Opera, IE, Safari
            self.octx.putImageData(self.oData, 0, 0); 
        }
        self._refresh |= HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        self.nref++;
        return self;
    }
    
    
    ,createImageData: function( w, h ) {
        var self = this, ictx, octx;
        set_dimensions(self, w, h, WIDTH_AND_HEIGHT);
        if ( self._restorable ) 
        {
        ictx = self.ictx = self.iCanvas.getContext('2d');
        ictx.createImageData(w, h);
        }
        octx = self.octx = self.oCanvas.getContext('2d');
        octx.createImageData(w, h);
        self._refresh |= DATA;
        if (self.selection) self._refresh |= SEL;
        self.nref++;
        return self;
    }
    
    ,image: ArrayUtil.hasArrayset ? function( img ) {
        if ( !img ) return this;
        
        var self = this, ictx, octx, w, h, 
            isVideo, isCanvas, isImage//, isImageData
        ;
        
        if ( img instanceof FilterImage ) img = img.oCanvas;
        isVideo = ("undefined" !== typeof HTMLVideoElement) && (img instanceof HTMLVideoElement);
        isCanvas = (("undefined" !== typeof HTMLCanvasElement) && (img instanceof HTMLCanvasElement)) || (FILTER.CanvasProxy && img instanceof FILTER.CanvasProxy);
        isImage = ("undefined" !== typeof Image) && (img instanceof Image);
        //isImageData = img instanceof Object || "object" === typeof img;
        
        if ( isVideo )
        {
            w = img.videoWidth;
            h = img.videoHeight;
        }
        else
        {
            w = img.width;
            h = img.height;
        }
        
        if ( isImage || isCanvas || isVideo ) 
        {
            set_dimensions(self, w, h, WIDTH_AND_HEIGHT);
            if ( self._restorable ) 
            {
            ictx = self.ictx = self.iCanvas.getContext('2d');
            ictx.drawImage(img, 0, 0);
            }
            octx = self.octx = self.oCanvas.getContext('2d');
            octx.drawImage(img, 0, 0);
            self._refresh |= DATA;
        }
        else
        {
            if ( !self.oData ) 
            {
                self.createImageData(w, h);
                refresh_data(self, DATA);
            }
            
            if ( self._restorable )
            {
            ictx = self.ictx = self.iCanvas.getContext('2d');
            self.iData.data.set(img.data);
            ictx.putImageData(self.iData, 0, 0); 
            }
            
            octx = self.octx = self.oCanvas.getContext('2d');
            self.oData.data.set(img.data);
            octx.putImageData(self.oData, 0, 0); 
            //self._refresh &= CLEAR_DATA;
        }
        self._refresh |= HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= SEL;
        self.nref++;
        return self;
    } : function( img ) {
        if ( !img ) return this;
        
        var self = this, ictx, octx, w, h, 
            isVideo, isCanvas, isImage//, isImageData
        ;
        
        if ( img instanceof FilterImage ) img = img.oCanvas;
        isVideo = ("undefined" !== typeof HTMLVideoElement) && (img instanceof HTMLVideoElement);
        isCanvas = (("undefined" !== typeof HTMLCanvasElement) && (img instanceof HTMLCanvasElement)) || (FILTER.CanvasProxy && img instanceof FILTER.CanvasProxy);
        isImage = ("undefined" !== typeof Image) && (img instanceof Image);
        //isImageData = img instanceof Object || "object" === typeof img;
        
        if ( isVideo )
        {
            w = img.videoWidth;
            h = img.videoHeight;
        }
        else
        {
            w = img.width;
            h = img.height;
        }
        
        if ( isImage || isCanvas || isVideo ) 
        {
            set_dimensions(self, w, h, WIDTH_AND_HEIGHT);
            if ( self._restorable ) 
            {
            ictx = self.ictx = self.iCanvas.getContext('2d');
            ictx.drawImage(img, 0, 0);
            }
            octx = self.octx = self.oCanvas.getContext('2d');
            octx.drawImage(img, 0, 0);
            //self._refresh |= DATA;
        }
        else
        {
            if ( !self.oData ) 
            {
                self.createImageData(w, h);
                refresh_data(self, DATA);
            }
            
            if ( self._restorable )
            {
            ictx = self.ictx = self.iCanvas.getContext('2d');
            arrayset(self.iData.data, img.data); // not supported in Opera, IE, Safari
            ictx.putImageData(self.iData, 0, 0); 
            }
            
            octx = self.octx = self.oCanvas.getContext('2d');
            arrayset(self.oData.data, img.data); // not supported in Opera, IE, Safari
            octx.putImageData(self.oData, 0, 0); 
            //self._refresh &= CLEAR_DATA;
        }
        self._refresh |= HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= SEL;
        self.nref++;
        return self;
    }
    ,setImage: null
    
    ,getPixel: function( x, y ) {
        var self = this, w = self.width, h = self.height, offset;
        if ( 0 > x || x >= w || 0 > y || y >= h ) return null;
        if (self._refresh & ODATA) refresh_data( self, ODATA );
        offset = ((y*w+x)|0)<<2;
        return subarray(self.oData.data, offset, offset+4);
    }
    
    ,setPixel: function( x, y, rgba ) {
        var self = this, w = self.width, h = self.height;
        if ( 0 > x || x >= w || 0 > y || y >= h ) return self;
        //p = new IMG(4); p[0] = r&255; p[1] = g&255; p[2] = b&255; p[3] = a&255;
        self.octx.putImageData(rgba, x, y); 
        self._refresh |= ODATA | HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= OSEL;
        self.nref++;
        return self;
    }
    
    // get the imageData object
    ,getPixelData: function( ) {
        if (this._refresh & ODATA) refresh_data( this, ODATA );
        return this.oData;
    }
    
    // set the imageData object
    ,setPixelData: function( data ) {
        var self = this;
        self.octx.putImageData(data, 0, 0); 
        self._refresh |= ODATA | HIST | SAT | SPECTRUM;
        self._hstRefresh = ALL_CHANNELS;
        self._intRefresh = ALL_CHANNELS;
        self._spcRefresh = ALL_CHANNELS;
        if (self.selection) self._refresh |= OSEL;
        self.nref++;
        return self;
    }
    
    ,integral: function( channel ) {
        var self = this, gray = self.gray, CHANNEL,
            I = FilterUtil.integral, integral = self._integral;
        if ( null == channel )
        {
            if ( self._refresh & SAT )
            {
                var data = self.getPixelData().data, w = self.width, h = self.height, i0;
                integral[0] = i0 = I(data, w, h, 2, 0);
                integral[1] = gray ? i0 : I(data, w, h, 2, 1);
                integral[2] = gray ? i0 : I(data, w, h, 2, 2);
                integral[3] = null;
                self._intRefresh = 0; self._refresh &= CLEAR_SAT;
            }
        }
        else
        {
            channel = channel || 0; CHANNEL = 1 << channel;
            if ( (self._refresh & SAT) || (self._intRefresh & CHANNEL) )
            {
                if ( gray && !(self._intRefresh & RED) )
                    integral[channel] = integral[0];
                else if ( gray && !(self._intRefresh & GREEN) )
                    integral[channel] = integral[1];
                else if ( gray && !(self._intRefresh & BLUE) )
                    integral[channel] = integral[2];
                else
                    integral[channel] = I(self.getPixelData().data, self.width, self.height, 2, channel);
                self._intRefresh &= ~CHANNEL; self._refresh &= CLEAR_SAT;
            }
        }
        return null == channel ? integral : integral[channel||0];
    }
    ,sat: null
    
    ,histogram: function( channel, pdf ) {
        var self = this, gray = self.gray, CHANNEL,
            H = FilterUtil.histogram, histogram = self._histogram;
        if ( null == channel )
        {
            if ( self._refresh & HIST )
            {
                var data = self.getPixelData().data, w = self.width, h = self.height, h0;
                histogram[0] = h0 = H(data, w, h, 2, 0, pdf);
                histogram[1] = gray ? h0 : H(data, w, h, 2, 1, pdf);
                histogram[2] = gray ? h0 : H(data, w, h, 2, 2, pdf);
                histogram[3] = null;
                self._hstRefresh = 0; self._refresh &= CLEAR_HIST;
            }
        }
        else
        {
            channel = channel || 0; CHANNEL = 1 << channel;
            if ( (self._refresh & HIST) || (self._hstRefresh & CHANNEL) )
            {
                if ( gray && !(self._hstRefresh & RED) )
                    histogram[channel] = histogram[0];
                else if ( gray && !(self._hstRefresh & GREEN) )
                    histogram[channel] = histogram[1];
                else if ( gray && !(self._hstRefresh & BLUE) )
                    histogram[channel] = histogram[2];
                else
                    histogram[channel] = H(self.getPixelData().data, self.width, self.height, 2, channel, pdf);
                self._hstRefresh &= ~CHANNEL; self._refresh &= CLEAR_HIST;
            }
        }
        return null == channel ? histogram : histogram[channel||0];
    }
    
    // TODO
    ,spectrum: function( channel ) {
        var self = this, /*F = FilterUtil.spectrum,*/ spectrum = self._spectrum;
        return null == channel ? spectrum : spectrum[channel||0];
    }
    ,fft: null
    
    ,linearGradient: function( colors, stops, angle, interpolate ) {
        var self = this, w = self.width, h = self.height, c = Gradient.stops( colors, stops );
        if ( ("native" === interpolate) && !FILTER.Browser.isNode )
        {
            var t = Math.tan(angle), ctx = self.octx, grd = ctx.createLinearGradient(0, 0, (1-t)*(w-1), t*(h-1));
            for(var i=0,l=c[0].length; i<l; i++) grd.addColorStop(c[1][i], "rgba("+c[0][i].join(",")+")");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, w, h);
        }
        else
        {
            self.setData( Gradient.linear( new IMG((w*h)<<2), w, h, c[0], c[1], angle, interpolate||Gradient.interpolate ) );
        }
        return self;
    }
    
    ,radialGradient: function( colors, stops, centerX, centerY, radiusX, radiusY, interpolate ) {
        var self = this, w = self.width, h = self.height, c = Gradient.stops( colors, stops );
        if ( ("native" === interpolate) && !FILTER.Browser.isNode )
        {
            var ctx = self.octx, grd = ctx.createRadialGradient(centerX, centerY, radiusX*w, centerX, centerY, radiusY*h);
            for(var i=0,l=c[0].length; i<l; i++) grd.addColorStop(c[1][i], "rgba("+c[0][i].join(",")+")");
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radiusX*w, 0, Math.PI*2, true);
            ctx.fill();
        }
        else
        {
            self.setData( Gradient.radial( new IMG((w*h)<<2), w, h, c[0], c[1], centerX, centerY, radiusX, radiusY, interpolate||Gradient.interpolate ) );
        }
        return self;
    }
    
    ,perlinNoise: function( seed, seamless, grayscale, baseX, baseY, octaves, offsets, scale, roughness, use_perlin ) {
        var self = this, w = self.width, h = self.height;
        if ( ImageUtil.perlin )
        {
            if ( seed ) ImageUtil.perlin.seed( seed );
            self.setData( ImageUtil.perlin(new IMG((w*h)<<2), w, h, seamless, grayscale, baseX, baseY, octaves, offsets, scale, roughness, use_perlin) );
            self.gray = !!grayscale;
        }
        return self;
    }
    
    ,toImage: function( format, quality ) {
        format = format || 0; quality = quality || 1;
        var canvas = this.oCanvas, uri = null, CODEC = format & 16;
        if ( FORMAT.JPG === CODEC )         uri = canvas.toDataURL( MIME.JPG, quality );
        else if ( FORMAT.GIF === CODEC )    uri = canvas.toDataURL( MIME.GIF, quality );
        else/* if( FORMAT.PNG === CODEC )*/ uri = canvas.toDataURL( MIME.PNG, quality );
        if ( format & FORMAT.IMAGE )
        {
            var img = new Image( );
            img.src = uri;
            return img;
        }
        return uri;
    }
    
    ,toString: function( ) {
        return "[" + "FILTER Image: " + this.name + "]";
    }
});
// aliases
FilterImage[PROTO].setImage = FilterImage[PROTO].image;
FilterImage[PROTO].setDimensions = FilterImage[PROTO].dimensions;
FilterImage[PROTO].draw = FilterImage[PROTO].paste;
FilterImage[PROTO].sat = FilterImage[PROTO].integral;
FilterImage[PROTO].fft = FilterImage[PROTO].spectrum;
// static
FilterImage.LinearGradient = FilterImage.Gradient = function LinearGradient( w, h, colors, stops, angle, interpolate ) {
    return new FilterImage().restorable(false).createImageData(w, h).linearGradient(colors, stops, angle, interpolate||Gradient.interpolate);
};
FilterImage.RadialGradient = function RadialGradient( w, h, colors, stops, centerX, centerY, radiusX, radiusY, interpolate ) {
    return new FilterImage().restorable(false).createImageData(w, h).radialGradient(colors, stops, centerX, centerY, radiusX, radiusY, interpolate||Gradient.interpolate);
};
FilterImage.PerlinNoise = function PerlinNoise( w, h, seed, seamless, grayscale, baseX, baseY, octaves, offsets, scale, roughness, use_perlin ) {
    return new FilterImage().restorable(false).createImageData(w, h).perlinNoise(seed, seamless, grayscale, baseX, baseY, octaves, offsets, scale, roughness, use_perlin);
};

// Scaled Image (Proxy) Class
var FilterScaledImage = FILTER.ScaledImage = FILTER.Class( FilterImage, {
    name: "ScaledImage"
    
    ,constructor: function FilterScaledImage( scalex, scaley, img ) {
        var self = this;
        // factory-constructor pattern
        if ( !(self instanceof FilterScaledImage) ) return new FilterScaledImage(scalex, scaley, img);
        self.scaleX = scalex || 1;
        self.scaleY = scaley || self.scaleX;
        self.$super('constructor', img);
    }
    
    ,scaleX: 1
    ,scaleY: 1
    
    ,dispose: function( ) {
        var self = this;
        self.scaleX = null;
        self.scaleY = null;
        self.$super('dispose');
        return self;
    }
    
    ,clone: function( original ) {
        var self = this;
        return new FilterScaledImage(self.scaleX, self.scaleY, true === original ? self.iCanvas : self.oCanvas);
    }
    
    ,setScale: function( sx, sy ) {
        var self = this, argslen = arguments.length;
        if (argslen > 0 && null != sx) 
        {
            self.scaleX = sx;
            self.scaleY = sx;
        }
        if (argslen > 1 && null != sy) 
            self.scaleY = sy;
        return self;
    }
    
    ,image: function( img ) {
        if ( !img ) return this;
        
        var self = this, ictx, octx, w, h, 
            sw, sh, sx = self.scaleX, sy = self.scaleY,
            isVideo, isCanvas, isImage//, isImageData
        ;
        
        if ( img instanceof FilterImage ) img = img.oCanvas;
        isVideo = ("undefined" !== typeof HTMLVideoElement) && (img instanceof HTMLVideoElement);
        isCanvas = (("undefined" !== typeof HTMLCanvasElement) && (img instanceof HTMLCanvasElement)) || (FILTER.CanvasProxy && img instanceof FILTER.CanvasProxy);
        isImage = ("undefined" !== typeof Image) && (img instanceof Image);
        //isImageData = img instanceof Object || "object" === typeof img;
        
        if ( isVideo )
        {
            w = img.videoWidth;
            h = img.videoHeight;
        }
        else
        {
            w = img.width;
            h = img.height;
        }
        
        if ( isImage || isCanvas || isVideo ) 
        {
            sw = (sx*w + 0.5)|0;
            sh = (sy*h + 0.5)|0;
            set_dimensions(self, sw, sh, WIDTH_AND_HEIGHT);
            if ( self._restorable ) 
            {
            ictx = self.ictx = self.iCanvas.getContext('2d');
            ictx.drawImage(img, 0, 0, w, h, 0, 0, sw, sh);
            }
            octx = self.octx = self.oCanvas.getContext('2d');
            octx.drawImage(img, 0, 0, w, h, 0, 0, sw, sh);
            self._refresh |= DATA | HIST | SAT | SPECTRUM;
            self._hstRefresh = ALL_CHANNELS;
            self._intRefresh = ALL_CHANNELS;
            self._spcRefresh = ALL_CHANNELS;
            if (self.selection) self._refresh |= SEL;
            self.nref++;
        }
        return self;
    }
});
// aliases
FilterScaledImage[PROTO].setImage = FilterScaledImage[PROTO].image;

// auxilliary (private) methods
function set_dimensions( scope, w, h, what ) 
{
    what = what || WIDTH_AND_HEIGHT;
    if ( what & WIDTH )
    {
        scope.width = w;
        scope.oCanvas.style.width = w + 'px';
        scope.oCanvas.width = w * devicePixelRatio;
        if ( scope._restorable ) 
        {
        scope.iCanvas.style.width = scope.oCanvas.style.width;
        scope.iCanvas.width = scope.oCanvas.width;
        }
        if ( scope.tmpCanvas )
        {
            scope.tmpCanvas.style.width = scope.oCanvas.style.width;
            scope.tmpCanvas.width = scope.oCanvas.width;
        }
    }
    if ( what & HEIGHT )
    {
        scope.height = h;
        scope.oCanvas.style.height = h + 'px';
        scope.oCanvas.height = h * devicePixelRatio;
        if ( scope._restorable ) 
        {
        scope.iCanvas.style.height = scope.oCanvas.style.height;
        scope.iCanvas.height = scope.oCanvas.height;
        }
        if ( scope.tmpCanvas )
        {
            scope.tmpCanvas.style.height = scope.oCanvas.style.height;
            scope.tmpCanvas.height = scope.oCanvas.height;
        }
    }
    /*if ( false !== refresh )
    {
        refresh_data( scope, DATA );
        if (scope.selection) refresh_selected_data( scope, SEL );
    }*/
    return scope;
}
function refresh_data( scope, what ) 
{
    var w = scope.width, h = scope.height;
    what = what || 255;
    if ( scope._restorable && (what & IDATA) && (scope._refresh & IDATA) )
    {
        scope.iData = scope.ictx.getImageData(0, 0, w, h);
        //scope.iData.cpy = new IMGcpy( scope.iData.data );
        scope._refresh &= ~IDATA;
    }
    if ( (what & ODATA) && (scope._refresh & ODATA) )
    {
        scope.oData = scope.octx.getImageData(0, 0, w, h);
        //scope.oData.cpy = new IMGcpy( scope.oData.data );
        scope._refresh &= ~ODATA;
    }
    //scope._refresh &= CLEAR_DATA;
    return scope;
}
function refresh_selected_data( scope, what ) 
{
    if ( scope.selection )
    {
        var sel = scope.selection, ow = scope.width-1, oh = scope.height-1,
            xs = sel[0], ys = sel[1], xf = sel[2], yf = sel[3], ws, hs;
        if ( sel[4] )
        {
            // relative
            xs = Floor(xs*ow); ys = Floor(ys*oh);
            xf = Floor(xf*ow); yf = Floor(sel[3]*oh);
        }
        ws = xf-xs+1; hs = yf-ys+1;
        what = what || 255;
        if ( scope._restorable && (what & ISEL) && (scope._refresh & ISEL) )
        {
            scope.iDataSel = scope.ictx.getImageData(xs, ys, ws, hs);
            //scope.iDataSel.cpy = new IMGcpy( scope.iDataSel.data );
            scope._refresh &= ~ISEL;
        }
        if ( (what & OSEL) && (scope._refresh & OSEL) )
        {
            scope.oDataSel = scope.octx.getImageData(xs, ys, ws, hs);
            //scope.oDataSel.cpy = new IMGcpy( scope.oDataSel.data );
            scope._refresh &= ~OSEL;
        }
    }
    //scope._refresh &= CLEAR_SEL;
    return scope;
}

}(FILTER);/**
*
* Filter Fx, perlin/simplex noise
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

if ( FILTER.Util.LOADED_PERLIN ) return;
FILTER.Util.LOADED_PERLIN = true;


var ImageUtil = FILTER.Util.Image, Image = FILTER.Image, FLOOR = Math.floor,
    sin = Math.sin, cos = Math.cos, PI2 = FILTER.CONST.PI2, Array8U = FILTER.Array8U;
 
// adapted from:

// https://github.com/kev009/craftd/blob/master/plugins/survival/mapgen/noise/simplexnoise1234.c
/* SimplexNoise1234, Simplex noise with true analytic
 * derivative in 1D to 4D.
 *
 * Author: Stefan Gustavson, 2003-2005
 * Contact: stegu@itn.liu.se
 *
 * This code was GPL licensed until February 2011.
 * As the original author of this code, I hereby
 * release it into the public domain.
 * Please feel free to use it for whatever you want.
 * Credit is appreciated where appropriate, and I also
 * appreciate being told where this code finds any use,
 * but you may do as you like.
 */

 // https://github.com/kev009/craftd/blob/master/plugins/survival/mapgen/noise/noise1234.c
/* noise1234
 *
 * Author: Stefan Gustavson, 2003-2005
 * Contact: stegu@itn.liu.se
 *
 * This code was GPL licensed until February 2011.
 * As the original author of this code, I hereby
 * release it into the public domain.
 * Please feel free to use it for whatever you want.
 * Credit is appreciated where appropriate, and I also
 * appreciate being told where this code finds any use,
 * but you may do as you like.
 */

/*
 * Permutation table. This is just a random jumble of all numbers 0-255,
 * repeated twice to avoid wrapping the index at 255 for each lookup.
 * This needs to be exactly the same for all instances on all platforms,
 * so it's easiest to just keep it as static explicit data.
 * This also removes the need for any initialisation of this class.
 *
 * Note that making this an int[] instead of a char[] might make the
 * code run faster on platforms with a high penalty for unaligned single
 * byte addressing. Intel x86 is generally single-byte-friendly, but
 * some other CPUs are faster with 4-aligned reads.
 * However, a char[] is smaller, which avoids cache trashing, and that
 * is probably the most important aspect on most architectures.
 * This array is accessed a *lot* by the noise functions.
 * A vector-valued noise over 3D accesses it 96 times, and a
 * float-valued 4D noise 64 times. We want this to fit in the cache!
 */
var p = new Array8U([151,160,137,91,90,15,
  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,
  151,160,137,91,90,15,
  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180 
]), perm = new Array8U(p); // copy it initially

// This isn't a very good seeding function, but it works ok. It supports 2^16
// different seed values. Write something better if you need more seeds.
function seed( seed ) 
{
    var v, i;
    // Scale the seed out
    if ( seed > 0 && seed < 1 ) seed *= 65536;

    seed = FLOOR( seed );
    if ( seed < 256 ) seed |= seed << 8;
    for (i = 0; i < 256; i++) 
    {
        v = ( i & 1 ) ? (p[i] ^ (seed & 255)) : (p[i] ^ ((seed>>8) & 255));
        perm[i] = perm[i + 256] = v;
    }
}
//seed(0);

/*
 * Helper functions to compute gradients-dot-residualvectors (1D to 4D)
 * Note that these generate gradients of more than unit length. To make
 * a close match with the value range of classic Perlin noise, the final
 * noise values need to be rescaled to fit nicely within [-1,1].
 * (The simplex noise functions as such also have different scaling.)
 * Note also that these noise functions are the most practical and useful
 * signed version of Perlin noise. To return values according to the
 * RenderMan specification from the SL noise() and pnoise() functions,
 * the noise values need to be scaled and offset to [0,1], like this:
 * float SLnoise = (noise(x,y,z) + 1.0) * 0.5;
 */

function grad1( hash, x ) 
{
    var h = hash & 15;
    var grad = 1.0 + (h & 7);   // Gradient value 1.0, 2.0, ..., 8.0
    if (h&8) grad = -grad;         // Set a random sign for the gradient
    return ( grad * x );           // Multiply the gradient with the distance
}

function grad2( hash, x, y ) 
{
    var h = hash & 7;      // Convert low 3 bits of hash code
    var u = h<4 ? x : y;  // into 8 simple gradient directions,
    var v = h<4 ? y : x;  // and compute the dot product with (x,y).
    return ((h&1)? -u : u) + ((h&2)? -2.0*v : 2.0*v);
}

function grad3( hash, x, y, z ) 
{
    var h = hash & 15;     // Convert low 4 bits of hash code into 12 simple
    var u = h<8 ? x : y; // gradient directions, and compute dot product.
    var v = h<4 ? y : h==12||h==14 ? x : z; // Fix repeats at h = 12 to 15
    return ((h&1)? -u : u) + ((h&2)? -v : v);
}

function grad4( hash, x, y, z, t ) 
{
    var h = hash & 31;      // Convert low 5 bits of hash code into 32 simple
    var u = h<24 ? x : y; // gradient directions, and compute dot product.
    var v = h<16 ? y : z;
    var w = h<8 ? z : t;
    return ((h&1)? -u : u) + ((h&2)? -v : v) + ((h&4)? -w : w);
}

// A lookup table to traverse the simplex around a given point in 4D.
// Details can be found where this table is used, in the 4D noise method.
/* TODO: This should not be required, backport it from Bill's GLSL code! */
var simplex = [
[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],
[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],
[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],
[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],
[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],
[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]
];

// 2D simplex noise
function simplex2( x, y ) 
{
    var F2 = 0.366025403; // F2 = 0.5*(sqrt(3.0)-1.0)
    var G2 = 0.211324865; // G2 = (3.0-Math.sqrt(3.0))/6.0
    
    var n0, n1, n2; // Noise contributions from the three corners

    // Skew the input space to determine which simplex cell we're in
    var s = (x+y)*F2; // Hairy factor for 2D
    var xs = x + s;
    var ys = y + s;
    var i = FLOOR(xs);
    var j = FLOOR(ys);

    var t = (i+j)*G2;
    var X0 = i-t; // Unskew the cell origin back to (x,y) space
    var Y0 = j-t;
    var x0 = x-X0; // The x,y distances from the cell origin
    var y0 = y-Y0;

    // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if ( x0>y0 ) {i1=1; j1=0;} // lower triangle, XY order: (0,0)->(1,0)->(1,1)
    else {i1=0; j1=1;}      // upper triangle, YX order: (0,0)->(0,1)->(1,1)

    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6

    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1.0 + 2.0 * G2;

    // Wrap the integer indices at 256, to avoid indexing perm[] out of bounds
    var ii = i & 0xff;
    var jj = j & 0xff;

    // Calculate the contribution from the three corners
    var t0 = 0.5 - x0*x0-y0*y0;
    if ( t0 < 0.0 ) n0 = 0.0;
    else 
    {
        t0 *= t0;
        n0 = t0 * t0 * grad2(perm[ii+perm[jj]], x0, y0); 
    }

    var t1 = 0.5 - x1*x1-y1*y1;
    if (t1 < 0.0) n1 = 0.0;
    else 
    {
        t1 *= t1;
        n1 = t1 * t1 * grad2(perm[ii+i1+perm[jj+j1]], x1, y1);
    }

    var t2 = 0.5 - x2*x2-y2*y2;
    if(t2 < 0.0) n2 = 0.0;
    else 
    {
        t2 *= t2;
        n2 = t2 * t2 * grad2(perm[ii+1+perm[jj+1]], x2, y2);
    }

    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 40.0 * (n0 + n1 + n2); // TODO: The scale factor is preliminary!
}

// This is the new and improved, C(2) continuous interpolant
function FADE(t) { return t * t * t * ( t * ( t * 6 - 15 ) + 10 ); }
function LERP(t, a, b) { return a + t*(b-a); }

// 2D float Perlin noise.
function perlin2( x, y )
{
    var ix0, iy0, ix1, iy1;
    var fx0, fy0, fx1, fy1;
    var s, t, nx0, nx1, n0, n1;

    ix0 = FLOOR( x ); // Integer part of x
    iy0 = FLOOR( y ); // Integer part of y
    fx0 = x - ix0;        // Fractional part of x
    fy0 = y - iy0;        // Fractional part of y
    fx1 = fx0 - 1.0;
    fy1 = fy0 - 1.0;
    ix1 = (ix0 + 1) & 0xff;  // Wrap to 0..255
    iy1 = (iy0 + 1) & 0xff;
    ix0 = ix0 & 0xff;
    iy0 = iy0 & 0xff;
    
    t = FADE( fy0 );
    s = FADE( fx0 );

    nx0 = grad2(perm[ix0 + perm[iy0]], fx0, fy0);
    nx1 = grad2(perm[ix0 + perm[iy1]], fx0, fy1);
    n0 = LERP( t, nx0, nx1 );

    nx0 = grad2(perm[ix1 + perm[iy0]], fx1, fy0);
    nx1 = grad2(perm[ix1 + perm[iy1]], fx1, fy1);
    n1 = LERP(t, nx0, nx1);

    return 0.507 * ( LERP( s, n0, n1 ) );
}

// adapted from: http://www.java-gaming.org/index.php?topic=31637.0
/*function octaved(seamless, noise, x, y, w, h, ibx, iby, octaves, offsets, scale, roughness)
{
    var noiseSum = 0, layerFrequency = scale, layerWeight = 1, weightSum = 0, 
        octave, nx, ny, w2 = w>>>1, h2 = h>>>1;

    for (octave=0; octave<octaves; octave++) 
    {
        nx = (x + offsets[octave][0]) % w; ny = (y + offsets[octave][1]) % h;
        if ( seamless )
        {
            // simulate seamless stitching, i.e circular/tileable symmetry
            if ( nx > w2 ) nx = w-1-nx;
            if ( ny > h2 ) ny = h-1-ny;
        }
        noiseSum += noise( layerFrequency*nx*ibx, layerFrequency*ny*iby ) * layerWeight;
        layerFrequency *= 2;
        weightSum += layerWeight;
        layerWeight *= roughness;
    }
    return noiseSum / weightSum;
}*/
function octaved(data, index, noise, x, y, w, h, ibx, iby, octaves, offsets, scale, roughness)
{
    var noiseSum = 0, layerFrequency = scale, layerWeight = 1, weightSum = 0, 
        octave, nx, ny, w2 = w>>>1, h2 = h>>>1, v;

    for (octave=0; octave<octaves; octave++) 
    {
        nx = (x + offsets[octave][0]) % w; ny = (y + offsets[octave][1]) % h;
        noiseSum += noise( layerFrequency*nx*ibx, layerFrequency*ny*iby ) * layerWeight;
        layerFrequency *= 2;
        weightSum += layerWeight;
        layerWeight *= roughness;
    }
    v = ~~(0xff*(0.5*noiseSum/weightSum+0.5));
    data[index  ] = v;
    data[index+1] = v;
    data[index+2] = v;
    data[index+3] = 255;
}
function octaved_rgb(data, index, noise, x, y, w, h, ibx, iby, octaves, offsets, scale, roughness)
{
    var noiseSum = 0, layerFrequency = scale, layerWeight = 1, weightSum = 0, 
        octave, nx, ny, w2 = w>>>1, h2 = h>>>1, v;

    for (octave=0; octave<octaves; octave++) 
    {
        nx = (x + offsets[octave][0]) % w; ny = (y + offsets[octave][1]) % h;
        noiseSum += noise( layerFrequency*nx*ibx, layerFrequency*ny*iby ) * layerWeight;
        layerFrequency *= 2;
        weightSum += layerWeight;
        layerWeight *= roughness;
    }
    v = ~~(0xffffff*(0.5*noiseSum/weightSum+0.5));
    data[index  ] = (v >>> 16) & 255;
    data[index+1] = (v >>> 8) & 255;
    data[index+2] = (v) & 255;
    data[index+3] = 255;
}

/*function turbulence()
{
}*/

ImageUtil.perlin = function perlin( n, w, h, seamless, grayscale, baseX, baseY, octaves, offsets, scale, roughness, use_perlin ) {
    var invBaseX = 1.0/baseX, invBaseY = 1.0/baseY,
        noise = use_perlin ? perlin2 : simplex2,
        generate = grayscale ? octaved : octaved_rgb,
        x, y, nx, ny, i, j, size = n.length, w2 = w>>>1, h2 = h>>>1;
    scale = scale || 1.0; roughness = roughness || 0.5;
    octaves = octaves || 1; offsets = offsets || [[0,0]];
    if ( seamless )
    {
        for(x=0,y=0,i=0; i<size; i+=4,x++)
        {
            if ( x >= w ) { x=0; y++; }
            // simulate seamless stitching, i.e circular/tileable symmetry
            nx = x > w2 ? w-1-x : x;
            ny = y > h2 ? h-1-y : y;
            if ( (nx < x) || (ny < y) )
            {
                j = (ny*w + nx) << 2;
                n[ i   ] = n[ j   ];
                n[ i+1 ] = n[ j+1 ];
                n[ i+2 ] = n[ j+2 ];
                n[ i+3 ] = 255;
            }
            else
            {
                generate(n, i, noise, nx, ny, w, h, invBaseX, invBaseY, octaves, offsets, scale, roughness);
            }
        }
    }
    else
    {
        for(x=0,y=0,i=0; i<size; i+=4,x++)
        {
            if ( x >= w ) { x=0; y++; }
            generate(n, i, noise, x, y, w, h, invBaseX, invBaseY, octaves, offsets, scale, roughness);
        }
    }
    return n;
};
ImageUtil.perlin.seed = seed;

}(FILTER);
/* main code ends here */
/* export the module */
return FILTER;
});
/**
*
*   FILTER.js MachineLearning Routines
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (Machine Learning Routines)
*   https://github.com/foo123/FILTER.js
*
**/!function( root, factory ){
"use strict";
if ( ('object'===typeof module) && module.exports ) /* CommonJS */
    module.exports = factory.call(root,(module.$deps && module.$deps["FILTER"]) || require("./FILTER".toLowerCase()));
else if ( ("function"===typeof define) && define.amd && ("function"===typeof require) && ("function"===typeof require.specified) && require.specified("FILTER_ML") /*&& !require.defined("FILTER_ML")*/ ) 
    define("FILTER_ML",['module',"FILTER"],function(mod,module){factory.moduleUri = mod.uri; factory.call(root,module); return module;});
else /* Browser/WebWorker/.. */
    (factory.call(root,root["FILTER"])||1)&&('function'===typeof define)&&define.amd&&define(function(){return root["FILTER"];} );
}(  /* current root */          this, 
    /* module factory */        function ModuleFactory__FILTER_ML( FILTER ){
/* main code starts here */

/**
*
*   FILTER.js MachineLearning Routines
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (Machine Learning Routines)
*   https://github.com/foo123/FILTER.js
*
**/

/**
*
* Filter Machine Learning Connected Components
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var A32I = FILTER.Array32I, A32U = FILTER.Array32U, A32F = FILTER.Array32F, A8U = FILTER.Array8U,
    ceil = Math.ceil, min = Math.min, max = Math.max, abs = Math.abs;

function dissimilarity_rgb( r, g, b, O, I, delta )
{
    //"use asm";
    O = O|0; I = I|0; delta = delta|0;
    // a fast rgb (dis-)similarity matrix
    var D = new A8U(256), c = 0;
    // full loop unrolling
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    D[c] = ((abs(b-c)<=delta?O:I)<<2)|((abs(g-c)<=delta?O:I)<<1)|((abs(r-c)<=delta?O:I)<<0); ++c;
    return D;
}
function dissimilarity_rgb_2( im, w, h, stride, D, delta, mode )
{
    var MODE = FILTER.MODE, HUE = FILTER.Color.hue, INTENSITY = FILTER.Color.intensity,
        cos = Math.cos, toRad = FILTER.CONST.toRad, i, j, imLen = im.length, dLen = D.length;
        
    if ( 0 < stride )
    {
        if ( MODE.HUE === mode )
        {
            //if ( null != color ) color = cos(toRad*color);
            for(i=0,j=0; j<dLen; i+=4,j++)
                D[j] = 0 === im[i+3] ? 10000 : cos(toRad*HUE(im[i],im[i+1],im[i+2]));
        }
        else if ( MODE.INTENSITY === mode )
        {
            delta *= 255;
            for(i=0,j=0; j<dLen; i+=4,j++)
                D[j] = 0 === im[i+3] ? 10000 : INTENSITY(im[i],im[i+1],im[i+2]);
        }
        else if ( MODE.GRAY === mode )
        {
            delta *= 255;
            for(i=0,j=0; j<dLen; i+=4,j++)
                D[j] = 0 === im[i+3] ? 10000 : im[i];
        }
        else //if ( MODE.COLOR === mode )
        {
            delta = 10000*delta + 1000*delta + 100*delta + 10*delta + delta;
            for(i=0,j=0; j<dLen; i+=4,j++)
                D[j] = 0 === im[i+3] ? 100000 : 10000*(im[i]+im[i+1]+im[i+2])/3/255 + 1000*(im[i]+im[i+1])/2/255 + 100*(im[i+1]+im[i+2])/2/255 + 10*(im[i]+im[i+2])/2/255 + im[i]/255;
        }
    }
    else
    {
        if ( MODE.HUE === mode )
        {
            //if ( null != color ) color = cos(toRad*color);
            for(i=0,j=0; j<dLen; i++,j++)
                D[j] = cos(toRad*im[i]);
        }
        else //if ( (MODE.INTENSITY === mode) || (MODE.GRAY === mode) || (MODE.COLOR === mode) )
        {
            delta *= 255;
            for(i=0,j=0; j<dLen; i++,j++)
                D[j] = im[i];
        }
    }
    return delta;
}

// adapted from http://xenia.media.mit.edu/~rahimi/connected/
function Label( x, y, root )
{
    var self = this;
    self.id = -1;
    self.root = root||self;
    /*self.x1 = x;
    self.y1 = y;
    self.x2 = x;
    self.y2 = y;*/
}
function root_of( label )
{
    while( label !== label.root )
    {
        /*label.root.x1 = min(label.root.x1, label.x1);
        label.root.y1 = min(label.root.y1, label.y1);
        label.root.x2 = max(label.root.x2, label.x2);
        label.root.y2 = max(label.root.y2, label.y2);*/
        label = label.root;
    }
    return label;
}
function merge( l1, l2 )
{
    l1 = root_of( l1 ); l2 = root_of( l2 );
    if ( l1 !== l2 )
    {
        l1.root = l2;
        /*l2.x1 = min(l2.x1, l1.x1);
        l2.y1 = min(l2.y1, l1.y1);
        l2.x2 = max(l2.x2, l1.x2);
        l2.y2 = max(l2.y2, l1.y2);*/
    }
}

// TODO: add bounding boxes, so it can be used as connected color/hue detector/tracker as well efficiently
function connected_components( output, w, h, stride, D, K, delta, V0, invert )
{
    stride = stride|0;
    var i, j, k, len = output.length, size = len>>>stride, K8_CONNECTIVITY = 8 === K,
        mylab, c, r, d, row, numlabels, label, background_label = null,
        need_match = null != V0, color, a, b, delta2 = 2*delta;
    
    label = new Array(size);
    background_label = need_match ? new Label(0,0) : null;

    label[0] = need_match && (abs(delta+D[0]-V0)>delta2) ? background_label : new Label(0,0);

    // label the first row.
    for(c=1; c<w; c++)
        label[c] = need_match && (abs(delta+D[c]-V0)>delta2) ? background_label : (abs(delta+D[c]-D[c-1])<=delta2 ? label[c-1] : new Label(c,0));

    // label subsequent rows.
    for(r=1,row=w; r<h; r++,row+=w)
    {
        // label the first pixel on this row.
        label[row] = need_match && (abs(delta+D[row]-V0)>delta2) ? background_label : (abs(delta+D[row]-D[row-w])<=delta2 ? label[row-w] : new Label(0,r));

        // label subsequent pixels on this row.
        for(c=1; c<w; c++)
        {
            if ( need_match && (abs(delta+D[row+c]-V0)>delta2) )
            {
                label[row+c] = background_label;
                continue;
            }
            // inherit label from pixel on the left if we're in the same blob.
            mylab = background_label === label[row+c-1] ? null : (abs(delta+D[row+c]-D[row+c-1])<=delta2 ? label[row+c-1] : null);

            //for(d=d0; d<1; d++)
            // full loop unrolling
            // if we're in the same blob, inherit value from above pixel.
            // if we've already been assigned, merge its label with ours.
            if( K8_CONNECTIVITY )
            {
                //d = -1;
                if( (background_label !== label[row-w+c-1/*+d*/]) && (abs(delta+D[row+c]-D[row-w+c-1/*+d*/])<=delta2) )
                {
                    if( null !== mylab ) merge(mylab, label[row-w+c-1/*+d*/]);
                    else mylab = label[row-w+c-1/*+d*/];
                }
            }
            //d = 0;
            if( (background_label !== label[row-w+c/*+d*/]) && (abs(delta+D[row+c]-D[row-w+c/*+d*/])<=delta2) )
            {
                if( null !== mylab ) merge(mylab, label[row-w+c/*+d*/]);
                else mylab = label[row-w+c/*+d*/];
            }
            
            if ( null !== mylab )
            {
                label[row+c] = mylab;
                /*mylab.root.x2 = max(mylab.root.x2,c);
                mylab.root.y2 = max(mylab.root.y2,r);*/
            }
            else
            {
                label[row+c] = new Label(c,r);
            }

            if( K8_CONNECTIVITY &&
                (background_label !== label[row+c-1]) && (background_label !== label[row-w+c]) && 
                (abs(delta+D[row+c-1]-D[row-w+c])<=delta2) )
                merge(label[row+c-1], label[row-w+c]);
        }
    }

    if ( invert ) { a = -255; b = 255; }
    else { a = 255; b = 0; }
    // compute num of distinct labels and assign ids
    if ( null !== background_label ) { background_label.id = 0; numlabels = 1; }
    else { numlabels = 0; }
    for(c=0; c<size; c++)
    {
        label[c] = root_of(label[c]);
        if ( 0 > label[c].id ) label[c].id = numlabels++;
    }
    // relabel output
    if ( stride )
    {
        for(c=0,i=0; i<len; i+=4,c++)
        {
            color = (b+a*label[c].id/numlabels)|0;
            output[i] = output[i+1] = output[i+2] = color;
            //output[i+3] = output[i+3];
        }
    }
    else
    {
        for(c=0; c<len; c++)
        {
            color = (b+a*label[c].id/numlabels)|0;
            output[c] = color;
        }
    }
    return output;
}


// adapted from: A Seed Fill Algorithm, by Paul Heckbert from "Graphics Gems", Academic Press, 1990
// http://www.codeproject.com/Articles/6017/QuickFill-An-efficient-flood-fill-algorithm
// http://www.codeproject.com/Articles/16405/Queue-Linear-Flood-Fill-A-Fast-Flood-Fill-Algorith
function flood_region( im, w, h, stride, D, K, x0, y0 )
{
    stride = stride|0;
    var imLen = im.length, imSize = imLen>>>stride, xm, ym, xM, yM,
        y, yy, dx = 1<<stride, dy = w<<stride,
        ymin = 0, ymax = imLen-dy, xmin = 0, xmax = (w-1)<<stride,
        l, i, k, x, x1, x2, yw, stack, slen, notdone, labeled, diff;
        
    xm = x0; ym = y0; xM = x0; yM = y0;
    // mask is a packed bit array for efficiency
    labeled = new A32U(ceil(imSize/32));
    stack = new A32I(imSize<<2); slen = 0; // pre-allocate and soft push/pop for speed
    
    k = (x0+y0)>>>stride; labeled[k>>>5] |= 1<<(k&31);
    if ( y0+dy >= ymin && y0+dy <= ymax )
    {
        /* needed in some cases */
        stack[slen  ]=y0;
        stack[slen+1]=x0;
        stack[slen+2]=x0;
        stack[slen+3]=dy;
        slen += 4;
    }
    /*if ( y0 >= ymin && y0 <= ymax)*/
    /* seed segment (popped 1st) */
    stack[slen  ]=y0+dy;
    stack[slen+1]=x0;
    stack[slen+2]=x0;
    stack[slen+3]=-dy;
    slen += 4;
    
    if ( stride )
    {
        while ( 0 < slen ) 
        {
            /* pop segment off stack and fill a neighboring scan line */
            slen -= 4;
            dy = stack[slen+3];
            yw = stack[slen  ]+dy;
            x1 = stack[slen+1];
            x2 = stack[slen+2];
            ym = min(ym, yw); yM = max(yM, yw);
            xm = min(xm, x1); xM = max(xM, x2);
            
            /*
             * segment of scan line y-dy for x1<=x<=x2 was previously filled,
             * now explore adjacent pixels in scan line y
             */
            for (x=x1; x>=xmin; x-=dx)
            {
                i = x+yw; k = i>>>stride;
                diff = (D[im[i  ]] & 1) | (D[im[i+1]] & 2) | (D[im[i+2]] & 4);
                if ( !diff && !(labeled[k>>>5]&(1<<(k&31))) )
                {
                    labeled[k>>>5] |= 1<<(k&31);
                    xm = min(xm, x);
                }
                else break;
            }
            
            if ( x >= x1 ) 
            {
                // goto skip:
                i = x+yw; k = i>>>stride;
                diff = (D[im[i  ]] & 1) | (D[im[i+1]] & 2) | (D[im[i+2]] & 4);
                while ( x<=x2 && (diff || (labeled[k>>>5]&(1<<(k&31)))) )
                {
                    x+=dx;
                    i = x+yw; k = i>>>stride;
                    diff = (D[im[i  ]] & 1) | (D[im[i+1]] & 2) | (D[im[i+2]] & 4);
                }
                l = x;
                notdone = (x <= x2);
            }
            else
            {
                l = x+dx;
                if ( l < x1 ) 
                {
                    if ( yw >= ymin+dy && yw <= ymax+dy )
                    {
                        //stack[slen++]=[yw, l, x1-4, -dy];  /* leak on left? */
                        stack[slen  ]=yw;
                        stack[slen+1]=l;
                        stack[slen+2]=x1-dx;
                        stack[slen+3]=-dy;
                        slen += 4;
                    }
                }
                x = x1+dx;
                notdone = true;
            }
            
            while ( notdone ) 
            {
                i = x+yw; k = i>>>stride;
                diff = (D[im[i  ]] & 1) | (D[im[i+1]] & 2) | (D[im[i+2]] & 4);
                while ( x<=xmax && !diff && !(labeled[k>>>5]&(1<<(k&31))) )
                {
                    labeled[k>>>5] |= 1<<(k&31);
                    xM = max(xM, x);
                    x+=dx; i = x+yw; k = i>>>stride;
                    diff = (D[im[i  ]] & 1) | (D[im[i+1]] & 2) | (D[im[i+2]] & 4);
                }
                if ( yw+dy >= ymin && yw+dy <= ymax)
                {
                    //stack[slen++]=[yw, l, x-4, dy];
                    stack[slen  ]=yw;
                    stack[slen+1]=l;
                    stack[slen+2]=x-dx;
                    stack[slen+3]=dy;
                    slen += 4;
                }
                if ( x > x2+dx ) 
                {
                    if ( yw-dy >= ymin && yw-dy <= ymax)
                    {
                        //stack[slen++]=[yw, x2+4, x-4, -dy];	/* leak on right? */
                        stack[slen  ]=yw;
                        stack[slen+1]=x2+dx;
                        stack[slen+2]=x-dx;
                        stack[slen+3]=-dy;
                        slen += 4;
                    }
                }
        /*skip:*/
                i = x+yw; k = i>>>stride;
                diff = (D[im[i  ]] & 1) | (D[im[i+1]] & 2) | (D[im[i+2]] & 4);
                while ( x<=x2 && (diff || (labeled[k>>>5]&(1<<(k&31)))) ) 
                {
                    x+=dx;
                    i = x+yw; k = i>>>stride;
                    diff = (D[im[i  ]] & 1) | (D[im[i+1]] & 2) | (D[im[i+2]] & 4);
                }
                l = x;
                notdone = (x <= x2);
            }
        }
    }
    else
    {
        while ( 0 < slen ) 
        {
            /* pop segment off stack and fill a neighboring scan line */
            slen -= 4;
            dy = stack[slen+3];
            yw = stack[slen  ]+dy;
            x1 = stack[slen+1];
            x2 = stack[slen+2];
            ym = min(ym, yw); yM = max(yM, yw);
            xm = min(xm, x1); xM = max(xM, x2);
            
            /*
             * segment of scan line y-dy for x1<=x<=x2 was previously filled,
             * now explore adjacent pixels in scan line y
             */
            for (x=x1; x>=xmin; x-=dx)
            {
                i = x+yw; k = i;
                if ( !(D[im[i]] & 1) && !(labeled[k>>>5]&(1<<(k&31))) )
                {
                    labeled[k>>>5] |= 1<<(k&31);
                    xm = min(xm, x);
                }
                else break;
            }
            
            if ( x >= x1 ) 
            {
                // goto skip:
                i = x+yw; k = i;
                while ( x<=x2 && ((D[im[i]] & 1) || (labeled[k>>>5]&(1<<(k&31)))) )
                {
                    x+=dx;
                    i = x+yw; k = i;
                }
                l = x;
                notdone = (x <= x2);
            }
            else
            {
                l = x+dx;
                if ( l < x1 ) 
                {
                    if ( yw >= ymin+dy && yw <= ymax+dy )
                    {
                        //stack[slen++]=[yw, l, x1-4, -dy];  /* leak on left? */
                        stack[slen  ]=yw;
                        stack[slen+1]=l;
                        stack[slen+2]=x1-dx;
                        stack[slen+3]=-dy;
                        slen += 4;
                    }
                }
                x = x1+dx;
                notdone = true;
            }
            
            while ( notdone ) 
            {
                i = x+yw; k = i;
                while ( x<=xmax && !(D[im[i]] & 1) && !(labeled[k>>>5]&(1<<(k&31))) )
                {
                    labeled[k>>>5] |= 1<<(k&31);
                    xM = max(xM, x);
                    x+=dx; i = x+yw; k = i;
                }
                if ( yw+dy >= ymin && yw+dy <= ymax)
                {
                    //stack[slen++]=[yw, l, x-4, dy];
                    stack[slen  ]=yw;
                    stack[slen+1]=l;
                    stack[slen+2]=x-dx;
                    stack[slen+3]=dy;
                    slen += 4;
                }
                if ( x > x2+dx ) 
                {
                    if ( yw-dy >= ymin && yw-dy <= ymax)
                    {
                        //stack[slen++]=[yw, x2+4, x-4, -dy];	/* leak on right? */
                        stack[slen  ]=yw;
                        stack[slen+1]=x2+dx;
                        stack[slen+2]=x-dx;
                        stack[slen+3]=-dy;
                        slen += 4;
                    }
                }
        /*skip:*/
                i = x+yw; k = i;
                while ( x<=x2 && ((D[im[i]] & 1) || (labeled[k>>>5]&(1<<(k&31)))) ) 
                {
                    x+=dx;
                    i = x+yw; k = i;
                }
                l = x;
                notdone = (x <= x2);
            }
        }
    }
    return { mask: labeled, box: [xm, ym, xM, yM] };
}

FILTER.MachineLearning.dissimilarity_rgb = dissimilarity_rgb;
FILTER.MachineLearning.dissimilarity_rgb_2 = dissimilarity_rgb_2;
FILTER.MachineLearning.connected_components = connected_components;
FILTER.MachineLearning.connected_region = FILTER.MachineLearning.flood_region = flood_region;

}(FILTER);
/* main code ends here */
/* export the module */
return FILTER;
});
/**
*
*   FILTER.js I/O Classes
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (I/O Loaders)
*   https://github.com/foo123/FILTER.js
*
**/!function( root, factory ){
"use strict";
if ( ('object'===typeof module) && module.exports ) /* CommonJS */
    module.exports = factory.call(root,(module.$deps && module.$deps["FILTER"]) || require("./FILTER".toLowerCase()));
else if ( ("function"===typeof define) && define.amd && ("function"===typeof require) && ("function"===typeof require.specified) && require.specified("FILTER_IO") /*&& !require.defined("FILTER_IO")*/ ) 
    define("FILTER_IO",['module',"FILTER"],function(mod,module){factory.moduleUri = mod.uri; factory.call(root,module); return module;});
else /* Browser/WebWorker/.. */
    (factory.call(root,root["FILTER"])||1)&&('function'===typeof define)&&define.amd&&define(function(){return root["FILTER"];} );
}(  /* current root */          this, 
    /* module factory */        function ModuleFactory__FILTER_IO( FILTER ){
/* main code starts here */

/**
*
*   FILTER.js I/O Classes
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (I/O Loaders)
*   https://github.com/foo123/FILTER.js
*
**/
"use strict";
var FILTER_IO_PATH = FILTER.getPath( ModuleFactory__FILTER_IO.moduleUri );
/**
*
* Filter (HTML)ImageLoader Class
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

FILTER.IO.HTMLImageManager = FILTER.Class(FILTER.IO.Manager, {
    name: "IO.HTMLImageManager",
    
    constructor: function HTMLImageManager( ){
        if ( !(this instanceof HTMLImageManager) ) return new HTMLImageManager();
        this.$super('constructor');
    },
    
    read: function( url, onComplete, onError, image ){
        var scope = this, loader = new Image( );
        
        if ( onComplete instanceof FILTER.Image )
        {
            image = onComplete;
            onComplete = onError;
        }
        else
        {
            image = image || new FILTER.Image( );
        }
        
        loader.onload = function( event ){
            image.image( loader );
            if ( 'function' === typeof onComplete ) onComplete(image, loader);
        };
        loader.onerror = function( event ){
            if ( 'function' === typeof onError ) onError(event, image, loader);
        };
        loader.crossOrigin = scope._crossOrigin || "";
        loader.src = url;
        
        return image;
    }
});
FILTER.IO.HTMLImageLoader = FILTER.IO.HTMLImageManager;

}(FILTER);/**
*
* Filter Utils, cross-platform XmlHttpRequest (XHR)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

if ( FILTER.Util.LOADED_XHR ) return;
FILTER.Util.LOADED_XHR = true;

var HAS = 'hasOwnProperty', toString = Object.prototype.toString,
    KEYS = Object.keys, CRLF = "\r\n", trim = FILTER.Util.String.trim,
    isNode = FILTER.Browser.isNode;

// adapted from https://github.com/foo123/RT
function header_encode( headers, xmlHttpRequest, httpRequestResponse )
{
    var header = '';
    if ( !headers ) return xhr ? xhr : header;
    var keys = KEYS(headers), key, i, l, k, kl;
    if ( httpRequestResponse )
    {
        for(i=0,l=keys.length; i<l; i++)
        {
            key = keys[i];
            // both single value and array
            httpRequestResponse.setHeader(key, headers[key]);
        }
        return httpRequestResponse;
    }
    else if ( xmlHttpRequest )
    {
        for(i=0,l=keys.length; i<l; i++)
        {
            key = keys[i];
            if ( '[object Array]' === toString.call(headers[key]) )
            {
                for(k=0,kl=headers[key].length; k<kl; k++)
                    xmlHttpRequest.setRequestHeader(key, String(headers[key][k]));
            }
            else
            {
                xmlHttpRequest.setRequestHeader(key, String(headers[key]));
            }
        }
        return xmlHttpRequest;
    }
    else
    {
        for(i=0,l=keys.length; i<l; i++)
        {
            key = keys[i];
            if ( '[object Array]' === toString.call(headers[key]) )
            {
                if ( header.length ) header += CRLF;
                header += key + ': ' + String(headers[key][0]);
                for(k=1,kl=headers[key].length; k<kl; k++)
                    header += CRLF + String(headers[key][k]);
            }
            else
            {
                if ( header.length ) header += CRLF;
                header += key + ': ' + String(headers[key]);
            }
        }
        return header;
    }
}

function header_decode( headers, lowercase )
{
    var header = { }, key = null, parts, i, l, line;
    if ( !!headers )
    {
        lowercase = true === lowercase;
        headers = headers.split( CRLF );
        for (i=0,l=headers.length; i<l; i++)
        {
            line = headers[i];
            parts = line.split(':');
            if ( parts.length > 1 )
            {
                key = trim(parts.shift());
                if ( lowercase ) key = key.toLowerCase();
                if ( header[HAS](key) )
                {
                    if ( 'string' === typeof header[key] ) header[key] = [header[key]];
                    header[key].push( trim(parts.join(':')) );
                }
                else
                {
                    header[key] = trim(parts.join(':'));
                }
            }
            else if ( parts[0].length && key )
            {
                header[key] = CRLF + parts[0];
            }
        }
    }
    return header;
}

FILTER.Util.Http = {
    Header: {
        encode: header_encode,
        decode: header_decode
    }
};

var XHR = FILTER.Util.XHR = function XHR( send, abort ){
    var xhr = this, aborted = false;
    xhr.readyState = XHR.UNSENT;
    xhr.status = null;
    xhr.statusText = null;
    xhr.responseType = 'text';
    xhr.responseURL = null;
    xhr.response = null;
    xhr.responseText = null;
    xhr.responseXml = null;
    xhr._rawHeaders = null;
    xhr._headers = null;
    xhr.send = function( payload ) {
        if ( aborted || (XHR.UNSENT !== xhr.readyState) ) return xhr;
        if ( send ) send( payload );
        xhr.readyState = XHR.OPENED;
        return xhr;
    };
    xhr.abort = function( ){
        if ( aborted ) return xhr;
        aborted = true;
        if ( abort ) abort( );
        return xhr;
    };
    xhr.getAllResponseHeaders = function( decoded ) {
        if ( XHR.DONE !== xhr.readyState ) return null;
        return true===decoded ? xhr._headers : xhr._rawHeaders;
    };
    xhr.getResponseHeader = function( key, lowercased ) {
        if ( (null == key) || (XHR.DONE !== xhr.readyState) ) return null;
        var headers = xhr._headers || {};
        if ( false !== lowercased ) key = key.toLowerCase( );
        return headers[HAS](key) ? headers[key] : null;
    };
    xhr.dispose = function( ) {
        xhr.readyState = null;
        xhr.status = null;
        xhr.statusText = null;
        xhr.responseType = null;
        xhr.responseURL = null;
        xhr.response = null;
        xhr.responseText = null;
        xhr.responseXml = null;
        xhr._rawHeaders = null;
        xhr._headers = null;
        xhr.getAllResponseHeaders = null;
        xhr.getResponseHeader = null;
        xhr.send = null;
        xhr.abort = null;
        return xhr;
    };
};

XHR.UNSENT = 0;
XHR.OPENED = 1;
XHR.HEADERS_RECEIVED = 2;
XHR.LOADING = 3;
XHR.DONE = 4;

XHR.create = isNode ? function( o, payload ) {
        o = o || {};
        if ( !o.url ) return null;
        var url = '[object Object]' === toString.call(o.url) ? o.url : require('url').parse( o.url ),
            $hr$, xhr,
            options = {
                method      : o.method || 'GET',
                agent       : false,
                protocol    : url.protocol,
                host        : url.hostname,
                hostname    : url.hostname,
                port        : url.port || 80,
                path        : (url.pathname||'/')+(url.query?('?'+url.query):'')
            }
        ;
        
        if ( 'file:' === options.protocol )
        {
            xhr = new XHR(
            function( payload ) {
                // https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback
                xhr.readyState = XHR.OPENED;
                require('fs').readFile(options.path, {
                    // return raw buffer
                    encoding: 'arraybuffer' === xhr.responseType ? null : xhr.responseType,
                    flag: 'r'
                }, function( err, data ) {
                    xhr.readyState = XHR.DONE;
                    xhr.responseUrl = options.path;
                    if ( o.onLoadStart ) o.onLoadStart( xhr );
                    if ( o.onLoadEnd ) o.onLoadEnd( xhr );
                    if ( err )
                    {
                        xhr.status = 500;
                        xhr.statusText = err.toString();
                        if ( o.onRequestError ) o.onRequestError( xhr );
                        else if ( o.onError ) o.onError( xhr );
                    }
                    else
                    {
                        xhr.status = 200;
                        xhr.statusText = null;
                        xhr.response = data;
                        if ( 'arraybuffer' !== xhr.responseType )
                        {
                            xhr.responseText = data;
                            xhr.responseXml = null;
                        }
                        else
                        {
                            xhr.responseText = null;
                            xhr.responseXml = null;
                        }
                        if ( o.onComplete ) o.onComplete( xhr );
                    }
                });
            },
            function( ) { });
            xhr.responseType = o.responseType || 'text';
            if ( arguments.length > 1 ) xhr.send( payload );
            return xhr;
        }
        
        xhr = new XHR(
        function( payload ) {
            if ( null != payload )
            {
                payload = String( payload );
                $hr$.setHeader( 'Content-Length', String(payload.length) );
                $hr$.write( payload );
            }
            /*else
            {
                $hr$.setHeader( 'Content-Length', '0' );
                $hr$.write( '' );
            }*/
            $hr$.end( );
        },
        function( ) {
            $hr$.abort( );
        });
        $hr$ = ('https:'===options.protocol?require('https').request:require('http').request)(options, function( response ) {
            var xdata = '', data_sent = 0;
            
            xhr.readyState = XHR.OPENED;
            if ( o.onStateChange ) o.onStateChange( xhr );
            
            xhr.readyState = XHR.HEADERS_RECEIVED;
            xhr._rawHeaders = response.rawHeaders.join("\r\n");
            xhr._headers = response.headers;
            xhr.responseURL = response.url || null;
            xhr.status = response.statusCode || null;
            xhr.statusText = response.statusMessage || null;
            if ( o.onStateChange ) o.onStateChange( xhr );
            
            response.on('data', function( chunk ){
                if ( !data_sent )
                {
                    data_sent = 1;
                    xhr.readyState = XHR.LOADING;
                    if ( o.onStateChange ) o.onStateChange( xhr );
                    if ( o.onLoadStart ) o.onLoadStart( xhr );
                }
                xdata += chunk.toString( );
                if ( o.onProgress ) o.onProgress( xhr );
            });
            
            response.on('end', function( ){
                xhr.readyState = XHR.DONE;
                xhr.responseType = 'text';
                xhr.response = xhr.responseText = xdata;
                
                if ( o.onStateChange ) o.onStateChange( xhr );
                if ( o.onLoadEnd ) o.onLoadEnd( xhr );
                
                if ( XHR.DONE === xhr.readyState )
                {
                    if ( 200 === xhr.status )
                    {
                        if ( o.onComplete ) o.onComplete( xhr );
                    }
                    else
                    {
                        if ( o.onRequestError ) o.onRequestError( xhr );
                        else if ( o.onError ) o.onError( xhr );
                    }
                }
            });
            
            response.on('error', function( ee ){
                xhr.statusText = ee.toString( );
                if ( o.onError ) o.onError( xhr );
            });
        });
        
        $hr$.setTimeout(o.timeout || 30000, function( e ){
            if ( o.onTimeout ) o.onTimeout( xhr );
        });
        $hr$.on('abort', function( ee ){
            if ( o.onAbort ) o.onAbort( xhr );
        });
        $hr$.on('error', function( ee ){
            xhr.statusText = ee.toString( );
            if ( o.onError ) o.onError( xhr );
        });
        
        if ( o.headers ) header_encode( o.headers, null, $hr$ );
        //if ( o.mimeType ) $hr$.overrideMimeType( o.mimeType );
        if ( arguments.length > 1 ) xhr.send( payload );
        return xhr;
    } : function( o, payload ) {
        o = o || {};
        if ( !o.url ) return null;
        var $xhr$ = 'undefined' !== typeof XMLHttpRequest
            ? new XMLHttpRequest( )
            : new ActiveXObject( 'Microsoft.XMLHTTP' ) /* or ActiveXObject( 'Msxml2.XMLHTTP' ); ??*/,
            
            xhr = new XHR(
            function( payload ){
                $xhr$.send( payload );
            },
            function( ){
                $xhr$.abort( );
            }),
            
            update = function( xhr, $xhr$ ) {
                //xhr.responseType = $xhr$.responseType;
                xhr.readyState = $xhr$.readyState;
                xhr.status = $xhr$.status;
                xhr.statusText = $xhr$.statusText;
                xhr.responseURL = $xhr$.responseURL;
                xhr.response = $xhr$.response;
                if ( 'arraybuffer' !== $xhr$.responseType )
                {
                    xhr.responseText = $xhr$.responseText;
                    xhr.responseXml = $xhr$.responseXml;
                }
                else
                {
                    xhr.responseText = null;
                    xhr.responseXml = null;
                }
                return xhr;
            }
        ;
        xhr.getAllResponseHeaders = function( decoded ){
            var headers = $xhr$.getAllResponseHeaders( );
            return true===decoded ? header_decode( headers ) : headers;
        };
        xhr.getResponseHeader = function( key ){
            return $xhr$.getResponseHeader( key );
        };
        
        $xhr$.open( o.method||'GET', o.url, !o.sync );
        xhr.responseType = $xhr$.responseType = o.responseType || 'text';
        $xhr$.timeout = o.timeout || 30000; // 30 secs default timeout
        
        if ( o.onProgress )
        {
            $xhr$.onprogress = function( ) {
                o.onProgress( update( xhr, $xhr$ ) );
            };
        }
        if ( o.onLoadStart )
        {
            $xhr$.onloadstart = function( ) {
                o.onLoadStart( update( xhr, $xhr$ ) );
            };
        }
        if ( o.onLoadEnd )
        {
            $xhr$.onloadend = function( ) {
                o.onLoadEnd( update( xhr, $xhr$ ) );
            };
        }
        if ( !o.sync && o.onStateChange )
        {
            $xhr$.onreadystatechange = function( ) {
                o.onStateChange( update( xhr, $xhr$ ) );
            };
        }
        $xhr$.onload = function( ) {
            update( xhr, $xhr$ );
            if ( XHR.DONE === $xhr$.readyState )
            {
                if ( 200 === $xhr$.status )
                {
                    if ( o.onComplete ) o.onComplete( xhr );
                }
                else
                {
                    if ( o.onRequestError ) o.onRequestError( xhr );
                    else if ( o.onError ) o.onError( xhr );
                }
            }
        };
        $xhr$.onabort = function( ) {
            if ( o.onAbort ) o.onAbort( update( xhr, $xhr$ ) );
        };
        $xhr$.onerror = function( ) {
            if ( o.onError ) o.onError( update( xhr, $xhr$ ) );
        };
        $xhr$.ontimeout = function( ) {
            if ( o.onTimeout ) o.onTimeout( update( xhr, $xhr$ ) );
        };
        
        if ( o.headers ) header_encode( o.headers, $xhr$ );
        if ( o.mimeType ) $xhr$.overrideMimeType( o.mimeType );
        if ( arguments.length > 1 ) xhr.send( payload );
        return xhr;
    }
;

}(FILTER);/**
*
* Filter File / Binary IO Manager Class(es)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var Class = FILTER.Class;

var FileManager = FILTER.IO.FileManager = Class(FILTER.IO.Manager, {
    name: "IO.FileManager",
    
    constructor: function FileManager( ) {
        var self = this;
        if ( !(self instanceof FileManager) ) return new FileManager( );
        self.$super("constructor");
    },
    
    read: function ( path, onComplete, onError ) {
        var self = this;
        if ( FILTER.Browser.isNode )
        {
            if ( 'http://' === path.slice(0,7) || 'https://' === path.slice(0,8) )
            {
                FILTER.Util.XHR.create({
                    url: path,
                    responseType: self._responseType,
                    onComplete: function( xhr ) {
                        if ( 'function' === typeof onComplete ) onComplete( xhr.response );
                    },
                    onError: function( xhr ) {
                        if ( 'function' === typeof onError ) onError( xhr.statusText );
                    }
                }, null);
            }
            else
            {
                // https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback
                require('fs').readFile('file://' === path.slice(0,7) ? path.slice(7) : path, {
                    // return raw buffer
                    encoding: 'arraybuffer' === self._responseType ? null : self._responseType,
                    flag: 'r'
                }, function( err, data ) {
                  if ( err )
                  {
                      if ( 'function' === typeof onError ) onError( err.toString() );
                  }
                  else
                  {
                      if ( 'function' === typeof onComplete ) onComplete( data );
                  }
                });
            }
        }
        else
        {
            if ( ("undefined" !== typeof File) && (path instanceof File) )
            {
                // handle local file File input using FileReader API
                if ( "undefined" !== typeof FileReader )
                {
                    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
                    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsArrayBuffer
                    var fileReader = new FileReader( );
                    fileReader.addEventListener('load', function( evt ) {
                        if ( (/*DONE*/2 === fileReader.readyState) && ('function' === typeof onComplete) )
                            onComplete( fileReader.result );
                    });
                    fileReader.addEventListener('error', function( evt ) {
                        if ( 'function' === typeof onError )
                            onError( fileReader.error/*, evt*/ );
                    });
                    if ( 'arraybuffer' === self._responseType ) fileReader.readAsArrayBuffer( path );
                    else fileReader.readAsText( path );
                }
            }
            else
            {
                // handle local/remote file input using XmlHttpRequest API
                FILTER.Util.XHR.create({
                    url: path,
                    responseType: self._responseType,
                    onComplete: function( xhr ) {
                        if ( 'function' === typeof onComplete ) onComplete( xhr.response );
                    },
                    onError: function( xhr ) {
                        if ( 'function' === typeof onError ) onError( xhr.statusText );
                    }
                }, null);
            }
        }
        return self;
    },
    
    write: function ( path, data, onComplete, onError ){
        var self = this;
        if ( FILTER.Browser.isNode )
        {
            // https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback
            require('fs').writeFile('file://' === path.slice(0,7) ? path.slice(7) : path, data, {
                // return raw buffer
                encoding: 'arraybuffer' === self._encoding ? null : self._encoding,
                flag: 'w'
            }, function( err ) {
              if ( err )
              {
                  if ( 'function' === typeof onError ) onError( err.toString() );
              }
              else
              {
                  if ( 'function' === typeof onComplete ) onComplete( path );
              }
            });
        }
        else
        {
            // use blobs to write data and return download links
            if ( "undefined" !== typeof Blob )
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Blob
                // https://developer.mozilla.org/en-US/docs/Web/API/File
                if ( 'function' === typeof onComplete )
                    onComplete(new Blob([ data ], {
                        type : 'arraybuffer' === self._encoding ? 'application/octet-binary' : (null != self._encoding ? self._encoding : 'text')
                    }), path);
            }
        }
        return self;
    }
});
FILTER.IO.FileLoader = FILTER.IO.FileReader = FILTER.IO.FileWriter = FileManager;

FILTER.IO.BinaryManager = Class(FileManager, {
    name: "IO.BinaryManager",
    
    constructor: function BinaryManager( codec, opts ) {
        var self = this;
        if ( !(self instanceof BinaryManager) ) return new BinaryManager( codec, opts );
        self._codec = "object" === typeof codec ? codec : null;
        self._opts = opts || null;
        self.$super("constructor");
    },
    
    _codec: null,
    _opts: null,
    
    dispose: function( ) {
        var self = this;
        self._opts = null;
        self._codec = null;
        self.$super("dispose");
        return self;
    },
    
    codec: function( codec, options ) {
        var self = this;
        if ( arguments.length )
        {
            self._codec = "object" === typeof codec ? codec : null;
            if ( arguments.length > 1 ) self._opts = "object" === typeof options ? options : null;
            return self;
        }
        else
        {
            return self._codec;
        }
    },
    
    options: function( options ) {
        var self = this;
        if ( arguments.length )
        {
            self._opts = "object" === typeof options ? options : null;
            return self;
        }
        else
        {
            return self._opts;
        }
    },
    
    read: function( path, onComplete, onError, image ){
        var self = this, decoder = self._codec ? self._codec.decoder : null;
        if ( 'function' === typeof decoder )
        {
            if ( onComplete instanceof FILTER.Image )
            {
                image = onComplete;
                onComplete = onError;
            }
            else
            {
                image = image || new FILTER.Image( );
            }
        
            self.responseType( 'arraybuffer' ).$super( 'read', path, function( buffer ){
                var exc = null, metaData = {}, imData;
                try {
                    imData = decoder( buffer, metaData );
                } catch ( e ) {
                    exc = e;
                    imData = null;
                    //throw e;
                }
                if ( exc || !imData )
                {
                    if ( 'function' === typeof onError ) onError( exc, buffer, image, metaData );
                }
                else
                {
                    image.image( imData );
                    if ( 'function' === typeof onComplete ) onComplete( image, metaData );
                }
            }, onError );
        }
        return image;
    },
    
    write: function( path, image, onComplete, onError ){
        var exc = null, self = this, buffer, encoder = self._codec ? self._codec.encoder : null;
        if ( image && ('function' === typeof encoder) )
        {
            try {
                buffer = encoder( image.getPixelData( ), self._opts||{} );
            } catch ( e ) {
                exc = e;
                buffer = null;
                //throw e;
            }
            if ( exc || !buffer )
            {
                if ( 'function' === typeof onError ) onError( exc, image );
            }
            else
            {
                self.encoding( 'arraybuffer' ).$super( 'write', path, buffer, onComplete, onError );
            }
        }
        return self;
    }
});
FILTER.IO.BinaryLoader = FILTER.IO.BinaryReader = FILTER.IO.BinaryWriter = FILTER.IO.BinaryManager;

}(FILTER);
/* main code ends here */
/* export the module */
return FILTER;
});
/**
*
*   FILTER.js Codecs
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (Image Codecs)
*   https://github.com/foo123/FILTER.js
*
**/!function( root, factory ){
"use strict";
if ( ('object'===typeof module) && module.exports ) /* CommonJS */
    module.exports = factory.call(root,(module.$deps && module.$deps["FILTER"]) || require("./FILTER".toLowerCase()));
else if ( ("function"===typeof define) && define.amd && ("function"===typeof require) && ("function"===typeof require.specified) && require.specified("FILTER_CODECS") /*&& !require.defined("FILTER_CODECS")*/ ) 
    define("FILTER_CODECS",['module',"FILTER"],function(mod,module){factory.moduleUri = mod.uri; factory.call(root,module); return module;});
else /* Browser/WebWorker/.. */
    (factory.call(root,root["FILTER"])||1)&&('function'===typeof define)&&define.amd&&define(function(){return root["FILTER"];} );
}(  /* current root */          this, 
    /* module factory */        function ModuleFactory__FILTER_CODECS( FILTER ){
/* main code starts here */

/**
*
*   FILTER.js Codecs
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (Image Codecs)
*   https://github.com/foo123/FILTER.js
*
**/
"use strict";
var FILTER_CODECS_PATH = FILTER.getPath( ModuleFactory__FILTER_CODECS.moduleUri );
/**
*
* Filter Utils, zlib (asm.js emscripten version)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

if ( FILTER.Util.LOADED_ZLIB ) return;
FILTER.Util.LOADED_ZLIB = true;

// http://www.zlib.net/
// adapted from emscripten version at https://github.com/ukyo/zlib-asm
var Module = {ENVIRONMENT: FILTER.Browser.isNode ? "NODE" : (FILTER.Browser.isInsideWorker ? "WORKER" : "WEB")};

var b=Module,f={},k;for(k in b)b.hasOwnProperty(k)&&(f[k]=b[k]);var n=!1,q=!1,r=!1,t=!1;
if(b.ENVIRONMENT)if("WEB"===b.ENVIRONMENT)n=!0;else if("WORKER"===b.ENVIRONMENT)q=!0;else if("NODE"===b.ENVIRONMENT)r=!0;else if("SHELL"===b.ENVIRONMENT)t=!0;else throw Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");else n="object"===typeof window,q="function"===typeof importScripts,r="object"===typeof process&&"function"===typeof require&&!n&&!q,t=!n&&!r&&!q;
if(r){b.print||(b.print=console.log);b.printErr||(b.printErr=console.warn);var u,v;b.read=function(a,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);var d=u.readFileSync(a);d||a==v.resolve(a)||(a=path.join(__dirname,"..","src",a),d=u.readFileSync(a));d&&!c&&(d=d.toString());return d};b.readBinary=function(a){a=b.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};b.load=function(a){w(read(a))};b.thisProgram||(b.thisProgram=1<process.argv.length?process.argv[1].replace(/\\/g,
"/"):"unknown-program");b.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=b);process.on("uncaughtException",function(a){if(!(a instanceof y))throw a;});b.inspect=function(){return"[Emscripten Module object]"}}else if(t)b.print||(b.print=print),"undefined"!=typeof printErr&&(b.printErr=printErr),b.read="undefined"!=typeof read?read:function(){throw"no read() available (jsc?)";},b.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));
a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?b.arguments=scriptArgs:"undefined"!=typeof arguments&&(b.arguments=arguments),eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");else if(n||q)b.read=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},b.readAsync=function(a,c,d){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==
e.status||0==e.status&&e.response?c(e.response):d()};e.onerror=d;e.send(null)},"undefined"!=typeof arguments&&(b.arguments=arguments),"undefined"!==typeof console?(b.print||(b.print=function(a){console.log(a)}),b.printErr||(b.printErr=function(a){console.warn(a)})):b.print||(b.print=function(){}),q&&(b.load=importScripts),"undefined"===typeof b.setWindowTitle&&(b.setWindowTitle=function(a){document.title=a});else throw"Unknown runtime environment. Where are we?";function w(a){eval.call(null,a)}
!b.load&&b.read&&(b.load=function(a){w(b.read(a))});b.print||(b.print=function(){});b.printErr||(b.printErr=b.print);b.arguments||(b.arguments=[]);b.thisProgram||(b.thisProgram="./this.program");b.print=b.print;b.h=b.printErr;b.preRun=[];b.postRun=[];for(k in f)f.hasOwnProperty(k)&&(b[k]=f[k]);
var f=void 0,B={w:function(a){tempRet0=a},u:function(){return tempRet0},B:function(){return z},A:function(a){z=a},l:function(a){switch(a){case "i1":case "i8":return 1;case "i16":return 2;case "i32":return 4;case "i64":return 8;case "float":return 4;case "double":return 8;default:return"*"===a[a.length-1]?B.d:"i"===a[0]?(a=parseInt(a.substr(1)),assert(0===a%8),a/8):0}},t:function(a){return Math.max(B.l(a),B.d)},C:16,P:function(a,c){"double"===c||"i64"===c?a&7&&(assert(4===(a&7)),a+=4):assert(0===(a&
3));return a},J:function(a,c,d){return d||"i64"!=a&&"double"!=a?a?Math.min(c||(a?B.t(a):0),B.d):Math.min(c,8):8},f:function(a,c,d){return d&&d.length?(d.splice||(d=Array.prototype.slice.call(d)),d.splice(0,0,c),b["dynCall_"+a].apply(null,d)):b["dynCall_"+a].call(null,c)},c:[],p:function(a){for(var c=0;c<B.c.length;c++)if(!B.c[c])return B.c[c]=a,2*(1+c);throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";},v:function(a){B.c[(a-2)/2]=null},a:function(a){B.a.i||
(B.a.i={});B.a.i[a]||(B.a.i[a]=1,b.h(a))},g:{},L:function(a,c){assert(c);B.g[c]||(B.g[c]={});var d=B.g[c];d[a]||(d[a]=function(){return B.f(c,a,arguments)});return d[a]},K:function(){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";},m:function(a){var c=z;z=z+a|0;z=z+15&-16;return c},n:function(a){var c=C;C=C+a|0;C=C+15&-16;return c},b:function(a){var c=D;D=D+a|0;D=D+15&-16;if(a=D>=E)F("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+
E+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 "),a=!0;return a?(D=c,0):c},k:function(a,c){return Math.ceil(a/(c?c:16))*(c?c:16)},O:function(a,c,d){return d?+(a>>>0)+4294967296*+(c>>>0):+(a>>>0)+4294967296*+(c|0)},j:8,d:4,D:0};B.addFunction=B.p;
B.removeFunction=B.v;var G=!1;function assert(a,c){a||F("Assertion failed: "+c)}function aa(a){var c;c="i32";"*"===c.charAt(c.length-1)&&(c="i32");switch(c){case "i1":return H[a>>0];case "i8":return H[a>>0];case "i16":return I[a>>1];case "i32":return J[a>>2];case "i64":return J[a>>2];case "float":return K[a>>2];case "double":return L[a>>3];default:F("invalid type for setValue: "+c)}return null}
function M(a,c,d,e){var g,l;"number"===typeof a?(g=!0,l=a):(g=!1,l=a.length);var m="string"===typeof c?c:null;d=4==d?e:["function"===typeof N?N:B.n,B.m,B.n,B.b][void 0===d?2:d](Math.max(l,m?1:c.length));if(g){e=d;assert(0==(d&3));for(a=d+(l&-4);e<a;e+=4)J[e>>2]=0;for(a=d+l;e<a;)H[e++>>0]=0;return d}if("i8"===m)return a.subarray||a.slice?O.set(a,d):O.set(new Uint8Array(a),d),d;e=0;for(var h,T;e<l;){var p=a[e];"function"===typeof p&&(p=B.M(p));g=m||c[e];if(0===g)e++;else{"i64"==g&&(g="i32");var x=d+
e,A=g,A=A||"i8";"*"===A.charAt(A.length-1)&&(A="i32");switch(A){case "i1":H[x>>0]=p;break;case "i8":H[x>>0]=p;break;case "i16":I[x>>1]=p;break;case "i32":J[x>>2]=p;break;case "i64":tempI64=[p>>>0,(tempDouble=p,1<=+ba(tempDouble)?0<tempDouble?(ca(+da(tempDouble/4294967296),4294967295)|0)>>>0:~~+ea((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)];J[x>>2]=tempI64[0];J[x+4>>2]=tempI64[1];break;case "float":K[x>>2]=p;break;case "double":L[x>>3]=p;break;default:F("invalid type for setValue: "+A)}T!==
g&&(h=B.l(g),T=g);e+=h}}return d}function fa(a){var c;if(0===c||!a)return"";for(var d=0,e,g=0;;){e=O[a+g>>0];d|=e;if(0==e&&!c)break;g++;if(c&&g==c)break}c||(c=g);e="";if(128>d){for(;0<c;)d=String.fromCharCode.apply(String,O.subarray(a,a+Math.min(c,1024))),e=e?e+d:d,a+=1024,c-=1024;return e}return b.UTF8ToString(a)}
function ga(){return ha().replace(/__Z[\w\d_]+/g,function(a){var c;a:{if(b.___cxa_demangle)try{for(var d=N(a.length),e=d,g=P(a.substr(1),void 0),l=0;l<g.length;)H[e+l>>0]=g[l],l+=1;var m=N(4),h=b.___cxa_demangle(d,0,0,m);if(0===aa(m)&&h){c=fa(h);break a}}catch(T){c=a;break a}finally{d&&Q(d),m&&Q(m),h&&Q(h)}B.a("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");c=a}return a===c?a:a+" ["+c+"]"})}
function ha(){var a=Error();if(!a.stack){try{throw Error(0);}catch(c){a=c}if(!a.stack)return"(no stack trace available)"}return a.stack.toString()}function ia(){var a=D;0<a%4096&&(a+=4096-a%4096);return a}for(var buffer,H,O,I,R,J,ja,K,L,ka=0,C=0,la=0,z=0,S=0,D=0,ma=b.TOTAL_STACK||5242880,E=b.TOTAL_MEMORY||16777216,U=65536;U<E||U<2*ma;)U=16777216>U?2*U:U+16777216;U!==E&&(E=U);b.buffer?buffer=b.buffer:buffer=new ArrayBuffer(E);b.HEAP8=H=new Int8Array(buffer);b.HEAP16=I=new Int16Array(buffer);
b.HEAP32=J=new Int32Array(buffer);b.HEAPU8=O=new Uint8Array(buffer);b.HEAPU16=R=new Uint16Array(buffer);b.HEAPU32=ja=new Uint32Array(buffer);b.HEAPF32=K=new Float32Array(buffer);b.HEAPF64=L=new Float64Array(buffer);J[0]=255;if(255!==O[0]||0!==O[3])throw"Typed arrays 2 must be run on a little-endian system";b.HEAP=void 0;b.buffer=buffer;b.HEAP8=H;b.HEAP16=I;b.HEAP32=J;b.HEAPU8=O;b.HEAPU16=R;b.HEAPU32=ja;b.HEAPF32=K;b.HEAPF64=L;
function V(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.I;"number"===typeof d?void 0===c.e?B.f("v",d):B.f("vi",d,[c.e]):d(void 0===c.e?null:c.e)}}}var na=[],W=[],oa=[],pa=[],qa=[],X=!1;function ra(){var a=b.preRun.shift();na.unshift(a)}
function P(a,c){for(var d=0,e=0;e<a.length;++e){var g=a.charCodeAt(e);55296<=g&&57343>=g&&(g=65536+((g&1023)<<10)|a.charCodeAt(++e)&1023);127>=g?++d:d=2047>=g?d+2:65535>=g?d+3:2097151>=g?d+4:67108863>=g?d+5:d+6}d=Array(d+1);var l=d.length,e=0;if(0<l){for(var g=e,l=e+l-1,m=0;m<a.length;++m){var h=a.charCodeAt(m);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++m)&1023);if(127>=h){if(e>=l)break;d[e++]=h}else{if(2047>=h){if(e+1>=l)break;d[e++]=192|h>>6}else{if(65535>=h){if(e+2>=l)break;d[e++]=
224|h>>12}else{if(2097151>=h){if(e+3>=l)break;d[e++]=240|h>>18}else{if(67108863>=h){if(e+4>=l)break;d[e++]=248|h>>24}else{if(e+5>=l)break;d[e++]=252|h>>30;d[e++]=128|h>>24&63}d[e++]=128|h>>18&63}d[e++]=128|h>>12&63}d[e++]=128|h>>6&63}d[e++]=128|h&63}}d[e]=0;e=e-g}else e=0;c&&(d.length=e);return d}Math.imul&&-5===Math.imul(4294967295,5)||(Math.imul=function(a,c){var d=a&65535,e=c&65535;return d*e+((a>>>16)*e+d*(c>>>16)<<16)|0});Math.N=Math.imul;
Math.clz32||(Math.clz32=function(a){a=a>>>0;for(var c=0;32>c;c++)if(a&1<<31-c)return c;return 32});Math.G=Math.clz32;Math.trunc||(Math.trunc=function(a){return 0>a?Math.ceil(a):Math.floor(a)});Math.trunc=Math.trunc;var ba=Math.abs,ea=Math.ceil,da=Math.floor,ca=Math.min;b.preloadedImages={};b.preloadedAudios={};var ta=[function(a,c,d){return sa[a].$read(c,d)},function(a,c,d){sa[a].$write(c,d)}],ka=8,C=ka+14592;W.push();
M([0,0,0,0,0,0,0,0,1,0,0,0,4,0,4,0,8,0,4,0,2,0,0,0,4,0,5,0,16,0,8,0,2,0,0,0,4,0,6,0,32,0,32,0,2,0,0,0,4,0,4,0,16,0,16,0,3,0,0,0,8,0,16,0,32,0,32,0,3,0,0,0,8,0,16,0,128,0,128,0,3,0,0,0,8,0,32,0,128,0,0,1,3,0,0,0,32,0,128,0,2,1,0,4,3,0,0,0,32,0,2,1,2,1,0,16,3,0,0,0,130,44,0,0,148,0,0,0,1,1,0,0,30,1,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,
0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,0,0,0,0,2,49,0,0,28,1,0,0,0,0,0,0,30,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,3,0,0,0,3,0,0,0,4,0,0,0,4,0,0,0,5,0,0,0,5,0,0,0,6,0,0,0,6,0,0,0,7,0,0,0,7,0,0,0,8,0,0,0,8,0,0,0,9,0,0,0,9,0,0,0,10,0,0,0,10,0,0,0,11,0,0,0,11,0,0,0,12,0,0,0,12,0,0,0,13,0,0,0,13,0,0,0,0,0,0,0,168,1,0,0,0,0,0,0,19,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,2,0,0,0,3,0,0,0,7,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,6,0,0,0,7,0,0,0,8,0,0,0,10,0,0,0,12,0,0,0,14,0,0,0,16,0,0,0,20,0,0,0,24,0,0,0,28,0,0,0,32,0,0,0,40,0,0,0,48,0,0,0,56,0,0,0,64,0,0,0,80,0,0,0,96,0,0,0,112,0,0,0,128,0,0,0,160,0,0,0,192,0,0,0,224,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,6,0,0,0,8,0,0,0,12,0,0,0,16,0,0,0,24,0,0,0,32,0,0,0,48,0,0,0,64,0,0,0,96,0,0,0,128,0,0,0,192,0,0,0,0,1,0,0,128,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,6,0,0,0,8,0,0,0,12,0,0,0,16,0,0,0,
24,0,0,0,32,0,0,0,48,0,0,0,64,0,0,0,96,0,0,0,0,0,0,150,48,7,119,44,97,14,238,186,81,9,153,25,196,109,7,143,244,106,112,53,165,99,233,163,149,100,158,50,136,219,14,164,184,220,121,30,233,213,224,136,217,210,151,43,76,182,9,189,124,177,126,7,45,184,231,145,29,191,144,100,16,183,29,242,32,176,106,72,113,185,243,222,65,190,132,125,212,218,26,235,228,221,109,81,181,212,244,199,133,211,131,86,152,108,19,192,168,107,100,122,249,98,253,236,201,101,138,79,92,1,20,217,108,6,99,99,61,15,250,245,13,8,141,200,
32,110,59,94,16,105,76,228,65,96,213,114,113,103,162,209,228,3,60,71,212,4,75,253,133,13,210,107,181,10,165,250,168,181,53,108,152,178,66,214,201,187,219,64,249,188,172,227,108,216,50,117,92,223,69,207,13,214,220,89,61,209,171,172,48,217,38,58,0,222,81,128,81,215,200,22,97,208,191,181,244,180,33,35,196,179,86,153,149,186,207,15,165,189,184,158,184,2,40,8,136,5,95,178,217,12,198,36,233,11,177,135,124,111,47,17,76,104,88,171,29,97,193,61,45,102,182,144,65,220,118,6,113,219,1,188,32,210,152,42,16,213,
239,137,133,177,113,31,181,182,6,165,228,191,159,51,212,184,232,162,201,7,120,52,249,0,15,142,168,9,150,24,152,14,225,187,13,106,127,45,61,109,8,151,108,100,145,1,92,99,230,244,81,107,107,98,97,108,28,216,48,101,133,78,0,98,242,237,149,6,108,123,165,1,27,193,244,8,130,87,196,15,245,198,217,176,101,80,233,183,18,234,184,190,139,124,136,185,252,223,29,221,98,73,45,218,21,243,124,211,140,101,76,212,251,88,97,178,77,206,81,181,58,116,0,188,163,226,48,187,212,65,165,223,74,215,149,216,61,109,196,209,164,
251,244,214,211,106,233,105,67,252,217,110,52,70,136,103,173,208,184,96,218,115,45,4,68,229,29,3,51,95,76,10,170,201,124,13,221,60,113,5,80,170,65,2,39,16,16,11,190,134,32,12,201,37,181,104,87,179,133,111,32,9,212,102,185,159,228,97,206,14,249,222,94,152,201,217,41,34,152,208,176,180,168,215,199,23,61,179,89,129,13,180,46,59,92,189,183,173,108,186,192,32,131,184,237,182,179,191,154,12,226,182,3,154,210,177,116,57,71,213,234,175,119,210,157,21,38,219,4,131,22,220,115,18,11,99,227,132,59,100,148,62,
106,109,13,168,90,106,122,11,207,14,228,157,255,9,147,39,174,0,10,177,158,7,125,68,147,15,240,210,163,8,135,104,242,1,30,254,194,6,105,93,87,98,247,203,103,101,128,113,54,108,25,231,6,107,110,118,27,212,254,224,43,211,137,90,122,218,16,204,74,221,103,111,223,185,249,249,239,190,142,67,190,183,23,213,142,176,96,232,163,214,214,126,147,209,161,196,194,216,56,82,242,223,79,241,103,187,209,103,87,188,166,221,6,181,63,75,54,178,72,218,43,13,216,76,27,10,175,246,74,3,54,96,122,4,65,195,239,96,223,85,223,
103,168,239,142,110,49,121,190,105,70,140,179,97,203,26,131,102,188,160,210,111,37,54,226,104,82,149,119,12,204,3,71,11,187,185,22,2,34,47,38,5,85,190,59,186,197,40,11,189,178,146,90,180,43,4,106,179,92,167,255,215,194,49,207,208,181,139,158,217,44,29,174,222,91,176,194,100,155,38,242,99,236,156,163,106,117,10,147,109,2,169,6,9,156,63,54,14,235,133,103,7,114,19,87,0,5,130,74,191,149,20,122,184,226,174,43,177,123,56,27,182,12,155,142,210,146,13,190,213,229,183,239,220,124,33,223,219,11,212,210,211,
134,66,226,212,241,248,179,221,104,110,131,218,31,205,22,190,129,91,38,185,246,225,119,176,111,119,71,183,24,230,90,8,136,112,106,15,255,202,59,6,102,92,11,1,17,255,158,101,143,105,174,98,248,211,255,107,97,69,207,108,22,120,226,10,160,238,210,13,215,84,131,4,78,194,179,3,57,97,38,103,167,247,22,96,208,77,71,105,73,219,119,110,62,74,106,209,174,220,90,214,217,102,11,223,64,240,59,216,55,83,174,188,169,197,158,187,222,127,207,178,71,233,255,181,48,28,242,189,189,138,194,186,202,48,147,179,83,166,163,
180,36,5,54,208,186,147,6,215,205,41,87,222,84,191,103,217,35,46,122,102,179,184,74,97,196,2,27,104,93,148,43,111,42,55,190,11,180,161,142,12,195,27,223,5,90,141,239,2,45,0,0,0,0,65,49,27,25,130,98,54,50,195,83,45,43,4,197,108,100,69,244,119,125,134,167,90,86,199,150,65,79,8,138,217,200,73,187,194,209,138,232,239,250,203,217,244,227,12,79,181,172,77,126,174,181,142,45,131,158,207,28,152,135,81,18,194,74,16,35,217,83,211,112,244,120,146,65,239,97,85,215,174,46,20,230,181,55,215,181,152,28,150,132,
131,5,89,152,27,130,24,169,0,155,219,250,45,176,154,203,54,169,93,93,119,230,28,108,108,255,223,63,65,212,158,14,90,205,162,36,132,149,227,21,159,140,32,70,178,167,97,119,169,190,166,225,232,241,231,208,243,232,36,131,222,195,101,178,197,218,170,174,93,93,235,159,70,68,40,204,107,111,105,253,112,118,174,107,49,57,239,90,42,32,44,9,7,11,109,56,28,18,243,54,70,223,178,7,93,198,113,84,112,237,48,101,107,244,247,243,42,187,182,194,49,162,117,145,28,137,52,160,7,144,251,188,159,23,186,141,132,14,121,222,
169,37,56,239,178,60,255,121,243,115,190,72,232,106,125,27,197,65,60,42,222,88,5,79,121,240,68,126,98,233,135,45,79,194,198,28,84,219,1,138,21,148,64,187,14,141,131,232,35,166,194,217,56,191,13,197,160,56,76,244,187,33,143,167,150,10,206,150,141,19,9,0,204,92,72,49,215,69,139,98,250,110,202,83,225,119,84,93,187,186,21,108,160,163,214,63,141,136,151,14,150,145,80,152,215,222,17,169,204,199,210,250,225,236,147,203,250,245,92,215,98,114,29,230,121,107,222,181,84,64,159,132,79,89,88,18,14,22,25,35,21,
15,218,112,56,36,155,65,35,61,167,107,253,101,230,90,230,124,37,9,203,87,100,56,208,78,163,174,145,1,226,159,138,24,33,204,167,51,96,253,188,42,175,225,36,173,238,208,63,180,45,131,18,159,108,178,9,134,171,36,72,201,234,21,83,208,41,70,126,251,104,119,101,226,246,121,63,47,183,72,36,54,116,27,9,29,53,42,18,4,242,188,83,75,179,141,72,82,112,222,101,121,49,239,126,96,254,243,230,231,191,194,253,254,124,145,208,213,61,160,203,204,250,54,138,131,187,7,145,154,120,84,188,177,57,101,167,168,75,152,131,
59,10,169,152,34,201,250,181,9,136,203,174,16,79,93,239,95,14,108,244,70,205,63,217,109,140,14,194,116,67,18,90,243,2,35,65,234,193,112,108,193,128,65,119,216,71,215,54,151,6,230,45,142,197,181,0,165,132,132,27,188,26,138,65,113,91,187,90,104,152,232,119,67,217,217,108,90,30,79,45,21,95,126,54,12,156,45,27,39,221,28,0,62,18,0,152,185,83,49,131,160,144,98,174,139,209,83,181,146,22,197,244,221,87,244,239,196,148,167,194,239,213,150,217,246,233,188,7,174,168,141,28,183,107,222,49,156,42,239,42,133,237,
121,107,202,172,72,112,211,111,27,93,248,46,42,70,225,225,54,222,102,160,7,197,127,99,84,232,84,34,101,243,77,229,243,178,2,164,194,169,27,103,145,132,48,38,160,159,41,184,174,197,228,249,159,222,253,58,204,243,214,123,253,232,207,188,107,169,128,253,90,178,153,62,9,159,178,127,56,132,171,176,36,28,44,241,21,7,53,50,70,42,30,115,119,49,7,180,225,112,72,245,208,107,81,54,131,70,122,119,178,93,99,78,215,250,203,15,230,225,210,204,181,204,249,141,132,215,224,74,18,150,175,11,35,141,182,200,112,160,157,
137,65,187,132,70,93,35,3,7,108,56,26,196,63,21,49,133,14,14,40,66,152,79,103,3,169,84,126,192,250,121,85,129,203,98,76,31,197,56,129,94,244,35,152,157,167,14,179,220,150,21,170,27,0,84,229,90,49,79,252,153,98,98,215,216,83,121,206,23,79,225,73,86,126,250,80,149,45,215,123,212,28,204,98,19,138,141,45,82,187,150,52,145,232,187,31,208,217,160,6,236,243,126,94,173,194,101,71,110,145,72,108,47,160,83,117,232,54,18,58,169,7,9,35,106,84,36,8,43,101,63,17,228,121,167,150,165,72,188,143,102,27,145,164,39,
42,138,189,224,188,203,242,161,141,208,235,98,222,253,192,35,239,230,217,189,225,188,20,252,208,167,13,63,131,138,38,126,178,145,63,185,36,208,112,248,21,203,105,59,70,230,66,122,119,253,91,181,107,101,220,244,90,126,197,55,9,83,238,118,56,72,247,177,174,9,184,240,159,18,161,51,204,63,138,114,253,36,147,0,0,0,0,55,106,194,1,110,212,132,3,89,190,70,2,220,168,9,7,235,194,203,6,178,124,141,4,133,22,79,5,184,81,19,14,143,59,209,15,214,133,151,13,225,239,85,12,100,249,26,9,83,147,216,8,10,45,158,10,61,
71,92,11,112,163,38,28,71,201,228,29,30,119,162,31,41,29,96,30,172,11,47,27,155,97,237,26,194,223,171,24,245,181,105,25,200,242,53,18,255,152,247,19,166,38,177,17,145,76,115,16,20,90,60,21,35,48,254,20,122,142,184,22,77,228,122,23,224,70,77,56,215,44,143,57,142,146,201,59,185,248,11,58,60,238,68,63,11,132,134,62,82,58,192,60,101,80,2,61,88,23,94,54,111,125,156,55,54,195,218,53,1,169,24,52,132,191,87,49,179,213,149,48,234,107,211,50,221,1,17,51,144,229,107,36,167,143,169,37,254,49,239,39,201,91,45,
38,76,77,98,35,123,39,160,34,34,153,230,32,21,243,36,33,40,180,120,42,31,222,186,43,70,96,252,41,113,10,62,40,244,28,113,45,195,118,179,44,154,200,245,46,173,162,55,47,192,141,154,112,247,231,88,113,174,89,30,115,153,51,220,114,28,37,147,119,43,79,81,118,114,241,23,116,69,155,213,117,120,220,137,126,79,182,75,127,22,8,13,125,33,98,207,124,164,116,128,121,147,30,66,120,202,160,4,122,253,202,198,123,176,46,188,108,135,68,126,109,222,250,56,111,233,144,250,110,108,134,181,107,91,236,119,106,2,82,49,
104,53,56,243,105,8,127,175,98,63,21,109,99,102,171,43,97,81,193,233,96,212,215,166,101,227,189,100,100,186,3,34,102,141,105,224,103,32,203,215,72,23,161,21,73,78,31,83,75,121,117,145,74,252,99,222,79,203,9,28,78,146,183,90,76,165,221,152,77,152,154,196,70,175,240,6,71,246,78,64,69,193,36,130,68,68,50,205,65,115,88,15,64,42,230,73,66,29,140,139,67,80,104,241,84,103,2,51,85,62,188,117,87,9,214,183,86,140,192,248,83,187,170,58,82,226,20,124,80,213,126,190,81,232,57,226,90,223,83,32,91,134,237,102,89,
177,135,164,88,52,145,235,93,3,251,41,92,90,69,111,94,109,47,173,95,128,27,53,225,183,113,247,224,238,207,177,226,217,165,115,227,92,179,60,230,107,217,254,231,50,103,184,229,5,13,122,228,56,74,38,239,15,32,228,238,86,158,162,236,97,244,96,237,228,226,47,232,211,136,237,233,138,54,171,235,189,92,105,234,240,184,19,253,199,210,209,252,158,108,151,254,169,6,85,255,44,16,26,250,27,122,216,251,66,196,158,249,117,174,92,248,72,233,0,243,127,131,194,242,38,61,132,240,17,87,70,241,148,65,9,244,163,43,203,
245,250,149,141,247,205,255,79,246,96,93,120,217,87,55,186,216,14,137,252,218,57,227,62,219,188,245,113,222,139,159,179,223,210,33,245,221,229,75,55,220,216,12,107,215,239,102,169,214,182,216,239,212,129,178,45,213,4,164,98,208,51,206,160,209,106,112,230,211,93,26,36,210,16,254,94,197,39,148,156,196,126,42,218,198,73,64,24,199,204,86,87,194,251,60,149,195,162,130,211,193,149,232,17,192,168,175,77,203,159,197,143,202,198,123,201,200,241,17,11,201,116,7,68,204,67,109,134,205,26,211,192,207,45,185,2,
206,64,150,175,145,119,252,109,144,46,66,43,146,25,40,233,147,156,62,166,150,171,84,100,151,242,234,34,149,197,128,224,148,248,199,188,159,207,173,126,158,150,19,56,156,161,121,250,157,36,111,181,152,19,5,119,153,74,187,49,155,125,209,243,154,48,53,137,141,7,95,75,140,94,225,13,142,105,139,207,143,236,157,128,138,219,247,66,139,130,73,4,137,181,35,198,136,136,100,154,131,191,14,88,130,230,176,30,128,209,218,220,129,84,204,147,132,99,166,81,133,58,24,23,135,13,114,213,134,160,208,226,169,151,186,32,
168,206,4,102,170,249,110,164,171,124,120,235,174,75,18,41,175,18,172,111,173,37,198,173,172,24,129,241,167,47,235,51,166,118,85,117,164,65,63,183,165,196,41,248,160,243,67,58,161,170,253,124,163,157,151,190,162,208,115,196,181,231,25,6,180,190,167,64,182,137,205,130,183,12,219,205,178,59,177,15,179,98,15,73,177,85,101,139,176,104,34,215,187,95,72,21,186,6,246,83,184,49,156,145,185,180,138,222,188,131,224,28,189,218,94,90,191,237,52,152,190,0,0,0,0,101,103,188,184,139,200,9,170,238,175,181,18,87,
151,98,143,50,240,222,55,220,95,107,37,185,56,215,157,239,40,180,197,138,79,8,125,100,224,189,111,1,135,1,215,184,191,214,74,221,216,106,242,51,119,223,224,86,16,99,88,159,87,25,80,250,48,165,232,20,159,16,250,113,248,172,66,200,192,123,223,173,167,199,103,67,8,114,117,38,111,206,205,112,127,173,149,21,24,17,45,251,183,164,63,158,208,24,135,39,232,207,26,66,143,115,162,172,32,198,176,201,71,122,8,62,175,50,160,91,200,142,24,181,103,59,10,208,0,135,178,105,56,80,47,12,95,236,151,226,240,89,133,135,
151,229,61,209,135,134,101,180,224,58,221,90,79,143,207,63,40,51,119,134,16,228,234,227,119,88,82,13,216,237,64,104,191,81,248,161,248,43,240,196,159,151,72,42,48,34,90,79,87,158,226,246,111,73,127,147,8,245,199,125,167,64,213,24,192,252,109,78,208,159,53,43,183,35,141,197,24,150,159,160,127,42,39,25,71,253,186,124,32,65,2,146,143,244,16,247,232,72,168,61,88,20,155,88,63,168,35,182,144,29,49,211,247,161,137,106,207,118,20,15,168,202,172,225,7,127,190,132,96,195,6,210,112,160,94,183,23,28,230,89,184,
169,244,60,223,21,76,133,231,194,209,224,128,126,105,14,47,203,123,107,72,119,195,162,15,13,203,199,104,177,115,41,199,4,97,76,160,184,217,245,152,111,68,144,255,211,252,126,80,102,238,27,55,218,86,77,39,185,14,40,64,5,182,198,239,176,164,163,136,12,28,26,176,219,129,127,215,103,57,145,120,210,43,244,31,110,147,3,247,38,59,102,144,154,131,136,63,47,145,237,88,147,41,84,96,68,180,49,7,248,12,223,168,77,30,186,207,241,166,236,223,146,254,137,184,46,70,103,23,155,84,2,112,39,236,187,72,240,113,222,47,
76,201,48,128,249,219,85,231,69,99,156,160,63,107,249,199,131,211,23,104,54,193,114,15,138,121,203,55,93,228,174,80,225,92,64,255,84,78,37,152,232,246,115,136,139,174,22,239,55,22,248,64,130,4,157,39,62,188,36,31,233,33,65,120,85,153,175,215,224,139,202,176,92,51,59,182,89,237,94,209,229,85,176,126,80,71,213,25,236,255,108,33,59,98,9,70,135,218,231,233,50,200,130,142,142,112,212,158,237,40,177,249,81,144,95,86,228,130,58,49,88,58,131,9,143,167,230,110,51,31,8,193,134,13,109,166,58,181,164,225,64,
189,193,134,252,5,47,41,73,23,74,78,245,175,243,118,34,50,150,17,158,138,120,190,43,152,29,217,151,32,75,201,244,120,46,174,72,192,192,1,253,210,165,102,65,106,28,94,150,247,121,57,42,79,151,150,159,93,242,241,35,229,5,25,107,77,96,126,215,245,142,209,98,231,235,182,222,95,82,142,9,194,55,233,181,122,217,70,0,104,188,33,188,208,234,49,223,136,143,86,99,48,97,249,214,34,4,158,106,154,189,166,189,7,216,193,1,191,54,110,180,173,83,9,8,21,154,78,114,29,255,41,206,165,17,134,123,183,116,225,199,15,205,
217,16,146,168,190,172,42,70,17,25,56,35,118,165,128,117,102,198,216,16,1,122,96,254,174,207,114,155,201,115,202,34,241,164,87,71,150,24,239,169,57,173,253,204,94,17,69,6,238,77,118,99,137,241,206,141,38,68,220,232,65,248,100,81,121,47,249,52,30,147,65,218,177,38,83,191,214,154,235,233,198,249,179,140,161,69,11,98,14,240,25,7,105,76,161,190,81,155,60,219,54,39,132,53,153,146,150,80,254,46,46,153,185,84,38,252,222,232,158,18,113,93,140,119,22,225,52,206,46,54,169,171,73,138,17,69,230,63,3,32,129,131,
187,118,145,224,227,19,246,92,91,253,89,233,73,152,62,85,241,33,6,130,108,68,97,62,212,170,206,139,198,207,169,55,126,56,65,127,214,93,38,195,110,179,137,118,124,214,238,202,196,111,214,29,89,10,177,161,225,228,30,20,243,129,121,168,75,215,105,203,19,178,14,119,171,92,161,194,185,57,198,126,1,128,254,169,156,229,153,21,36,11,54,160,54,110,81,28,142,167,22,102,134,194,113,218,62,44,222,111,44,73,185,211,148,240,129,4,9,149,230,184,177,123,73,13,163,30,46,177,27,72,62,210,67,45,89,110,251,195,246,219,
233,166,145,103,81,31,169,176,204,122,206,12,116,148,97,185,102,241,6,5,222,0,0,0,0,119,7,48,150,238,14,97,44,153,9,81,186,7,109,196,25,112,106,244,143,233,99,165,53,158,100,149,163,14,219,136,50,121,220,184,164,224,213,233,30,151,210,217,136,9,182,76,43,126,177,124,189,231,184,45,7,144,191,29,145,29,183,16,100,106,176,32,242,243,185,113,72,132,190,65,222,26,218,212,125,109,221,228,235,244,212,181,81,131,211,133,199,19,108,152,86,100,107,168,192,253,98,249,122,138,101,201,236,20,1,92,79,99,6,108,
217,250,15,61,99,141,8,13,245,59,110,32,200,76,105,16,94,213,96,65,228,162,103,113,114,60,3,228,209,75,4,212,71,210,13,133,253,165,10,181,107,53,181,168,250,66,178,152,108,219,187,201,214,172,188,249,64,50,216,108,227,69,223,92,117,220,214,13,207,171,209,61,89,38,217,48,172,81,222,0,58,200,215,81,128,191,208,97,22,33,180,244,181,86,179,196,35,207,186,149,153,184,189,165,15,40,2,184,158,95,5,136,8,198,12,217,178,177,11,233,36,47,111,124,135,88,104,76,17,193,97,29,171,182,102,45,61,118,220,65,144,1,
219,113,6,152,210,32,188,239,213,16,42,113,177,133,137,6,182,181,31,159,191,228,165,232,184,212,51,120,7,201,162,15,0,249,52,150,9,168,142,225,14,152,24,127,106,13,187,8,109,61,45,145,100,108,151,230,99,92,1,107,107,81,244,28,108,97,98,133,101,48,216,242,98,0,78,108,6,149,237,27,1,165,123,130,8,244,193,245,15,196,87,101,176,217,198,18,183,233,80,139,190,184,234,252,185,136,124,98,221,29,223,21,218,45,73,140,211,124,243,251,212,76,101,77,178,97,88,58,181,81,206,163,188,0,116,212,187,48,226,74,223,
165,65,61,216,149,215,164,209,196,109,211,214,244,251,67,105,233,106,52,110,217,252,173,103,136,70,218,96,184,208,68,4,45,115,51,3,29,229,170,10,76,95,221,13,124,201,80,5,113,60,39,2,65,170,190,11,16,16,201,12,32,134,87,104,181,37,32,111,133,179,185,102,212,9,206,97,228,159,94,222,249,14,41,217,201,152,176,208,152,34,199,215,168,180,89,179,61,23,46,180,13,129,183,189,92,59,192,186,108,173,237,184,131,32,154,191,179,182,3,182,226,12,116,177,210,154,234,213,71,57,157,210,119,175,4,219,38,21,115,220,
22,131,227,99,11,18,148,100,59,132,13,109,106,62,122,106,90,168,228,14,207,11,147,9,255,157,10,0,174,39,125,7,158,177,240,15,147,68,135,8,163,210,30,1,242,104,105,6,194,254,247,98,87,93,128,101,103,203,25,108,54,113,110,107,6,231,254,212,27,118,137,211,43,224,16,218,122,90,103,221,74,204,249,185,223,111,142,190,239,249,23,183,190,67,96,176,142,213,214,214,163,232,161,209,147,126,56,216,194,196,79,223,242,82,209,187,103,241,166,188,87,103,63,181,6,221,72,178,54,75,216,13,43,218,175,10,27,76,54,3,74,
246,65,4,122,96,223,96,239,195,168,103,223,85,49,110,142,239,70,105,190,121,203,97,179,140,188,102,131,26,37,111,210,160,82,104,226,54,204,12,119,149,187,11,71,3,34,2,22,185,85,5,38,47,197,186,59,190,178,189,11,40,43,180,90,146,92,179,106,4,194,215,255,167,181,208,207,49,44,217,158,139,91,222,174,29,155,100,194,176,236,99,242,38,117,106,163,156,2,109,147,10,156,9,6,169,235,14,54,63,114,7,103,133,5,0,87,19,149,191,74,130,226,184,122,20,123,177,43,174,12,182,27,56,146,210,142,155,229,213,190,13,124,
220,239,183,11,219,223,33,134,211,210,212,241,212,226,66,104,221,179,248,31,218,131,110,129,190,22,205,246,185,38,91,111,176,119,225,24,183,71,119,136,8,90,230,255,15,106,112,102,6,59,202,17,1,11,92,143,101,158,255,248,98,174,105,97,107,255,211,22,108,207,69,160,10,226,120,215,13,210,238,78,4,131,84,57,3,179,194,167,103,38,97,208,96,22,247,73,105,71,77,62,110,119,219,174,209,106,74,217,214,90,220,64,223,11,102,55,216,59,240,169,188,174,83,222,187,158,197,71,178,207,127,48,181,255,233,189,189,242,
28,202,186,194,138,83,179,147,48,36,180,163,166,186,208,54,5,205,215,6,147,84,222,87,41,35,217,103,191,179,102,122,46,196,97,74,184,93,104,27,2,42,111,43,148,180,11,190,55,195,12,142,161,90,5,223,27,45,2,239,141,0,0,0,0,25,27,49,65,50,54,98,130,43,45,83,195,100,108,197,4,125,119,244,69,86,90,167,134,79,65,150,199,200,217,138,8,209,194,187,73,250,239,232,138,227,244,217,203,172,181,79,12,181,174,126,77,158,131,45,142,135,152,28,207,74,194,18,81,83,217,35,16,120,244,112,211,97,239,65,146,46,174,215,
85,55,181,230,20,28,152,181,215,5,131,132,150,130,27,152,89,155,0,169,24,176,45,250,219,169,54,203,154,230,119,93,93,255,108,108,28,212,65,63,223,205,90,14,158,149,132,36,162,140,159,21,227,167,178,70,32,190,169,119,97,241,232,225,166,232,243,208,231,195,222,131,36,218,197,178,101,93,93,174,170,68,70,159,235,111,107,204,40,118,112,253,105,57,49,107,174,32,42,90,239,11,7,9,44,18,28,56,109,223,70,54,243,198,93,7,178,237,112,84,113,244,107,101,48,187,42,243,247,162,49,194,182,137,28,145,117,144,7,160,
52,23,159,188,251,14,132,141,186,37,169,222,121,60,178,239,56,115,243,121,255,106,232,72,190,65,197,27,125,88,222,42,60,240,121,79,5,233,98,126,68,194,79,45,135,219,84,28,198,148,21,138,1,141,14,187,64,166,35,232,131,191,56,217,194,56,160,197,13,33,187,244,76,10,150,167,143,19,141,150,206,92,204,0,9,69,215,49,72,110,250,98,139,119,225,83,202,186,187,93,84,163,160,108,21,136,141,63,214,145,150,14,151,222,215,152,80,199,204,169,17,236,225,250,210,245,250,203,147,114,98,215,92,107,121,230,29,64,84,181,
222,89,79,132,159,22,14,18,88,15,21,35,25,36,56,112,218,61,35,65,155,101,253,107,167,124,230,90,230,87,203,9,37,78,208,56,100,1,145,174,163,24,138,159,226,51,167,204,33,42,188,253,96,173,36,225,175,180,63,208,238,159,18,131,45,134,9,178,108,201,72,36,171,208,83,21,234,251,126,70,41,226,101,119,104,47,63,121,246,54,36,72,183,29,9,27,116,4,18,42,53,75,83,188,242,82,72,141,179,121,101,222,112,96,126,239,49,231,230,243,254,254,253,194,191,213,208,145,124,204,203,160,61,131,138,54,250,154,145,7,187,177,
188,84,120,168,167,101,57,59,131,152,75,34,152,169,10,9,181,250,201,16,174,203,136,95,239,93,79,70,244,108,14,109,217,63,205,116,194,14,140,243,90,18,67,234,65,35,2,193,108,112,193,216,119,65,128,151,54,215,71,142,45,230,6,165,0,181,197,188,27,132,132,113,65,138,26,104,90,187,91,67,119,232,152,90,108,217,217,21,45,79,30,12,54,126,95,39,27,45,156,62,0,28,221,185,152,0,18,160,131,49,83,139,174,98,144,146,181,83,209,221,244,197,22,196,239,244,87,239,194,167,148,246,217,150,213,174,7,188,233,183,28,141,
168,156,49,222,107,133,42,239,42,202,107,121,237,211,112,72,172,248,93,27,111,225,70,42,46,102,222,54,225,127,197,7,160,84,232,84,99,77,243,101,34,2,178,243,229,27,169,194,164,48,132,145,103,41,159,160,38,228,197,174,184,253,222,159,249,214,243,204,58,207,232,253,123,128,169,107,188,153,178,90,253,178,159,9,62,171,132,56,127,44,28,36,176,53,7,21,241,30,42,70,50,7,49,119,115,72,112,225,180,81,107,208,245,122,70,131,54,99,93,178,119,203,250,215,78,210,225,230,15,249,204,181,204,224,215,132,141,175,
150,18,74,182,141,35,11,157,160,112,200,132,187,65,137,3,35,93,70,26,56,108,7,49,21,63,196,40,14,14,133,103,79,152,66,126,84,169,3,85,121,250,192,76,98,203,129,129,56,197,31,152,35,244,94,179,14,167,157,170,21,150,220,229,84,0,27,252,79,49,90,215,98,98,153,206,121,83,216,73,225,79,23,80,250,126,86,123,215,45,149,98,204,28,212,45,141,138,19,52,150,187,82,31,187,232,145,6,160,217,208,94,126,243,236,71,101,194,173,108,72,145,110,117,83,160,47,58,18,54,232,35,9,7,169,8,36,84,106,17,63,101,43,150,167,
121,228,143,188,72,165,164,145,27,102,189,138,42,39,242,203,188,224,235,208,141,161,192,253,222,98,217,230,239,35,20,188,225,189,13,167,208,252,38,138,131,63,63,145,178,126,112,208,36,185,105,203,21,248,66,230,70,59,91,253,119,122,220,101,107,181,197,126,90,244,238,83,9,55,247,72,56,118,184,9,174,177,161,18,159,240,138,63,204,51,147,36,253,114,0,0,0,0,1,194,106,55,3,132,212,110,2,70,190,89,7,9,168,220,6,203,194,235,4,141,124,178,5,79,22,133,14,19,81,184,15,209,59,143,13,151,133,214,12,85,239,225,
9,26,249,100,8,216,147,83,10,158,45,10,11,92,71,61,28,38,163,112,29,228,201,71,31,162,119,30,30,96,29,41,27,47,11,172,26,237,97,155,24,171,223,194,25,105,181,245,18,53,242,200,19,247,152,255,17,177,38,166,16,115,76,145,21,60,90,20,20,254,48,35,22,184,142,122,23,122,228,77,56,77,70,224,57,143,44,215,59,201,146,142,58,11,248,185,63,68,238,60,62,134,132,11,60,192,58,82,61,2,80,101,54,94,23,88,55,156,125,111,53,218,195,54,52,24,169,1,49,87,191,132,48,149,213,179,50,211,107,234,51,17,1,221,36,107,229,
144,37,169,143,167,39,239,49,254,38,45,91,201,35,98,77,76,34,160,39,123,32,230,153,34,33,36,243,21,42,120,180,40,43,186,222,31,41,252,96,70,40,62,10,113,45,113,28,244,44,179,118,195,46,245,200,154,47,55,162,173,112,154,141,192,113,88,231,247,115,30,89,174,114,220,51,153,119,147,37,28,118,81,79,43,116,23,241,114,117,213,155,69,126,137,220,120,127,75,182,79,125,13,8,22,124,207,98,33,121,128,116,164,120,66,30,147,122,4,160,202,123,198,202,253,108,188,46,176,109,126,68,135,111,56,250,222,110,250,144,
233,107,181,134,108,106,119,236,91,104,49,82,2,105,243,56,53,98,175,127,8,99,109,21,63,97,43,171,102,96,233,193,81,101,166,215,212,100,100,189,227,102,34,3,186,103,224,105,141,72,215,203,32,73,21,161,23,75,83,31,78,74,145,117,121,79,222,99,252,78,28,9,203,76,90,183,146,77,152,221,165,70,196,154,152,71,6,240,175,69,64,78,246,68,130,36,193,65,205,50,68,64,15,88,115,66,73,230,42,67,139,140,29,84,241,104,80,85,51,2,103,87,117,188,62,86,183,214,9,83,248,192,140,82,58,170,187,80,124,20,226,81,190,126,213,
90,226,57,232,91,32,83,223,89,102,237,134,88,164,135,177,93,235,145,52,92,41,251,3,94,111,69,90,95,173,47,109,225,53,27,128,224,247,113,183,226,177,207,238,227,115,165,217,230,60,179,92,231,254,217,107,229,184,103,50,228,122,13,5,239,38,74,56,238,228,32,15,236,162,158,86,237,96,244,97,232,47,226,228,233,237,136,211,235,171,54,138,234,105,92,189,253,19,184,240,252,209,210,199,254,151,108,158,255,85,6,169,250,26,16,44,251,216,122,27,249,158,196,66,248,92,174,117,243,0,233,72,242,194,131,127,240,132,
61,38,241,70,87,17,244,9,65,148,245,203,43,163,247,141,149,250,246,79,255,205,217,120,93,96,216,186,55,87,218,252,137,14,219,62,227,57,222,113,245,188,223,179,159,139,221,245,33,210,220,55,75,229,215,107,12,216,214,169,102,239,212,239,216,182,213,45,178,129,208,98,164,4,209,160,206,51,211,230,112,106,210,36,26,93,197,94,254,16,196,156,148,39,198,218,42,126,199,24,64,73,194,87,86,204,195,149,60,251,193,211,130,162,192,17,232,149,203,77,175,168,202,143,197,159,200,201,123,198,201,11,17,241,204,68,7,
116,205,134,109,67,207,192,211,26,206,2,185,45,145,175,150,64,144,109,252,119,146,43,66,46,147,233,40,25,150,166,62,156,151,100,84,171,149,34,234,242,148,224,128,197,159,188,199,248,158,126,173,207,156,56,19,150,157,250,121,161,152,181,111,36,153,119,5,19,155,49,187,74,154,243,209,125,141,137,53,48,140,75,95,7,142,13,225,94,143,207,139,105,138,128,157,236,139,66,247,219,137,4,73,130,136,198,35,181,131,154,100,136,130,88,14,191,128,30,176,230,129,220,218,209,132,147,204,84,133,81,166,99,135,23,24,
58,134,213,114,13,169,226,208,160,168,32,186,151,170,102,4,206,171,164,110,249,174,235,120,124,175,41,18,75,173,111,172,18,172,173,198,37,167,241,129,24,166,51,235,47,164,117,85,118,165,183,63,65,160,248,41,196,161,58,67,243,163,124,253,170,162,190,151,157,181,196,115,208,180,6,25,231,182,64,167,190,183,130,205,137,178,205,219,12,179,15,177,59,177,73,15,98,176,139,101,85,187,215,34,104,186,21,72,95,184,83,246,6,185,145,156,49,188,222,138,180,189,28,224,131,191,90,94,218,190,152,52,237,0,0,0,0,184,
188,103,101,170,9,200,139,18,181,175,238,143,98,151,87,55,222,240,50,37,107,95,220,157,215,56,185,197,180,40,239,125,8,79,138,111,189,224,100,215,1,135,1,74,214,191,184,242,106,216,221,224,223,119,51,88,99,16,86,80,25,87,159,232,165,48,250,250,16,159,20,66,172,248,113,223,123,192,200,103,199,167,173,117,114,8,67,205,206,111,38,149,173,127,112,45,17,24,21,63,164,183,251,135,24,208,158,26,207,232,39,162,115,143,66,176,198,32,172,8,122,71,201,160,50,175,62,24,142,200,91,10,59,103,181,178,135,0,208,47,
80,56,105,151,236,95,12,133,89,240,226,61,229,151,135,101,134,135,209,221,58,224,180,207,143,79,90,119,51,40,63,234,228,16,134,82,88,119,227,64,237,216,13,248,81,191,104,240,43,248,161,72,151,159,196,90,34,48,42,226,158,87,79,127,73,111,246,199,245,8,147,213,64,167,125,109,252,192,24,53,159,208,78,141,35,183,43,159,150,24,197,39,42,127,160,186,253,71,25,2,65,32,124,16,244,143,146,168,72,232,247,155,20,88,61,35,168,63,88,49,29,144,182,137,161,247,211,20,118,207,106,172,202,168,15,190,127,7,225,6,195,
96,132,94,160,112,210,230,28,23,183,244,169,184,89,76,21,223,60,209,194,231,133,105,126,128,224,123,203,47,14,195,119,72,107,203,13,15,162,115,177,104,199,97,4,199,41,217,184,160,76,68,111,152,245,252,211,255,144,238,102,80,126,86,218,55,27,14,185,39,77,182,5,64,40,164,176,239,198,28,12,136,163,129,219,176,26,57,103,215,127,43,210,120,145,147,110,31,244,59,38,247,3,131,154,144,102,145,47,63,136,41,147,88,237,180,68,96,84,12,248,7,49,30,77,168,223,166,241,207,186,254,146,223,236,70,46,184,137,84,155,
23,103,236,39,112,2,113,240,72,187,201,76,47,222,219,249,128,48,99,69,231,85,107,63,160,156,211,131,199,249,193,54,104,23,121,138,15,114,228,93,55,203,92,225,80,174,78,84,255,64,246,232,152,37,174,139,136,115,22,55,239,22,4,130,64,248,188,62,39,157,33,233,31,36,153,85,120,65,139,224,215,175,51,92,176,202,237,89,182,59,85,229,209,94,71,80,126,176,255,236,25,213,98,59,33,108,218,135,70,9,200,50,233,231,112,142,142,130,40,237,158,212,144,81,249,177,130,228,86,95,58,88,49,58,167,143,9,131,31,51,110,230,
13,134,193,8,181,58,166,109,189,64,225,164,5,252,134,193,23,73,41,47,175,245,78,74,50,34,118,243,138,158,17,150,152,43,190,120,32,151,217,29,120,244,201,75,192,72,174,46,210,253,1,192,106,65,102,165,247,150,94,28,79,42,57,121,93,159,150,151,229,35,241,242,77,107,25,5,245,215,126,96,231,98,209,142,95,222,182,235,194,9,142,82,122,181,233,55,104,0,70,217,208,188,33,188,136,223,49,234,48,99,86,143,34,214,249,97,154,106,158,4,7,189,166,189,191,1,193,216,173,180,110,54,21,8,9,83,29,114,78,154,165,206,41,
255,183,123,134,17,15,199,225,116,146,16,217,205,42,172,190,168,56,25,17,70,128,165,118,35,216,198,102,117,96,122,1,16,114,207,174,254,202,115,201,155,87,164,241,34,239,24,150,71,253,173,57,169,69,17,94,204,118,77,238,6,206,241,137,99,220,68,38,141,100,248,65,232,249,47,121,81,65,147,30,52,83,38,177,218,235,154,214,191,179,249,198,233,11,69,161,140,25,240,14,98,161,76,105,7,60,155,81,190,132,39,54,219,150,146,153,53,46,46,254,80,38,84,185,153,158,232,222,252,140,93,113,18,52,225,22,119,169,54,46,
206,17,138,73,171,3,63,230,69,187,131,129,32,227,224,145,118,91,92,246,19,73,233,89,253,241,85,62,152,108,130,6,33,212,62,97,68,198,139,206,170,126,55,169,207,214,127,65,56,110,195,38,93,124,118,137,179,196,202,238,214,89,29,214,111,225,161,177,10,243,20,30,228,75,168,121,129,19,203,105,215,171,119,14,178,185,194,161,92,1,126,198,57,156,169,254,128,36,21,153,229,54,160,54,11,142,28,81,110,134,102,22,167,62,218,113,194,44,111,222,44,148,211,185,73,9,4,129,240,177,184,230,149,163,13,73,123,27,177,46,
30,67,210,62,72,251,110,89,45,233,219,246,195,81,103,145,166,204,176,169,31,116,12,206,122,102,185,97,148,222,5,6,241,96,7,0,0,0,8,80,0,0,8,16,0,20,8,115,0,18,7,31,0,0,8,112,0,0,8,48,0,0,9,192,0,16,7,10,0,0,8,96,0,0,8,32,0,0,9,160,0,0,8,0,0,0,8,128,0,0,8,64,0,0,9,224,0,16,7,6,0,0,8,88,0,0,8,24,0,0,9,144,0,19,7,59,0,0,8,120,0,0,8,56,0,0,9,208,0,17,7,17,0,0,8,104,0,0,8,40,0,0,9,176,0,0,8,8,0,0,8,136,0,0,8,72,0,0,9,240,0,16,7,4,0,0,8,84,0,0,8,20,0,21,8,227,0,19,7,43,0,0,8,116,0,0,8,52,0,0,9,200,0,17,
7,13,0,0,8,100,0,0,8,36,0,0,9,168,0,0,8,4,0,0,8,132,0,0,8,68,0,0,9,232,0,16,7,8,0,0,8,92,0,0,8,28,0,0,9,152,0,20,7,83,0,0,8,124,0,0,8,60,0,0,9,216,0,18,7,23,0,0,8,108,0,0,8,44,0,0,9,184,0,0,8,12,0,0,8,140,0,0,8,76,0,0,9,248,0,16,7,3,0,0,8,82,0,0,8,18,0,21,8,163,0,19,7,35,0,0,8,114,0,0,8,50,0,0,9,196,0,17,7,11,0,0,8,98,0,0,8,34,0,0,9,164,0,0,8,2,0,0,8,130,0,0,8,66,0,0,9,228,0,16,7,7,0,0,8,90,0,0,8,26,0,0,9,148,0,20,7,67,0,0,8,122,0,0,8,58,0,0,9,212,0,18,7,19,0,0,8,106,0,0,8,42,0,0,9,180,0,0,8,10,0,
0,8,138,0,0,8,74,0,0,9,244,0,16,7,5,0,0,8,86,0,0,8,22,0,64,8,0,0,19,7,51,0,0,8,118,0,0,8,54,0,0,9,204,0,17,7,15,0,0,8,102,0,0,8,38,0,0,9,172,0,0,8,6,0,0,8,134,0,0,8,70,0,0,9,236,0,16,7,9,0,0,8,94,0,0,8,30,0,0,9,156,0,20,7,99,0,0,8,126,0,0,8,62,0,0,9,220,0,18,7,27,0,0,8,110,0,0,8,46,0,0,9,188,0,0,8,14,0,0,8,142,0,0,8,78,0,0,9,252,0,96,7,0,0,0,8,81,0,0,8,17,0,21,8,131,0,18,7,31,0,0,8,113,0,0,8,49,0,0,9,194,0,16,7,10,0,0,8,97,0,0,8,33,0,0,9,162,0,0,8,1,0,0,8,129,0,0,8,65,0,0,9,226,0,16,7,6,0,0,8,89,
0,0,8,25,0,0,9,146,0,19,7,59,0,0,8,121,0,0,8,57,0,0,9,210,0,17,7,17,0,0,8,105,0,0,8,41,0,0,9,178,0,0,8,9,0,0,8,137,0,0,8,73,0,0,9,242,0,16,7,4,0,0,8,85,0,0,8,21,0,16,8,2,1,19,7,43,0,0,8,117,0,0,8,53,0,0,9,202,0,17,7,13,0,0,8,101,0,0,8,37,0,0,9,170,0,0,8,5,0,0,8,133,0,0,8,69,0,0,9,234,0,16,7,8,0,0,8,93,0,0,8,29,0,0,9,154,0,20,7,83,0,0,8,125,0,0,8,61,0,0,9,218,0,18,7,23,0,0,8,109,0,0,8,45,0,0,9,186,0,0,8,13,0,0,8,141,0,0,8,77,0,0,9,250,0,16,7,3,0,0,8,83,0,0,8,19,0,21,8,195,0,19,7,35,0,0,8,115,0,0,8,
51,0,0,9,198,0,17,7,11,0,0,8,99,0,0,8,35,0,0,9,166,0,0,8,3,0,0,8,131,0,0,8,67,0,0,9,230,0,16,7,7,0,0,8,91,0,0,8,27,0,0,9,150,0,20,7,67,0,0,8,123,0,0,8,59,0,0,9,214,0,18,7,19,0,0,8,107,0,0,8,43,0,0,9,182,0,0,8,11,0,0,8,139,0,0,8,75,0,0,9,246,0,16,7,5,0,0,8,87,0,0,8,23,0,64,8,0,0,19,7,51,0,0,8,119,0,0,8,55,0,0,9,206,0,17,7,15,0,0,8,103,0,0,8,39,0,0,9,174,0,0,8,7,0,0,8,135,0,0,8,71,0,0,9,238,0,16,7,9,0,0,8,95,0,0,8,31,0,0,9,158,0,20,7,99,0,0,8,127,0,0,8,63,0,0,9,222,0,18,7,27,0,0,8,111,0,0,8,47,0,0,
9,190,0,0,8,15,0,0,8,143,0,0,8,79,0,0,9,254,0,96,7,0,0,0,8,80,0,0,8,16,0,20,8,115,0,18,7,31,0,0,8,112,0,0,8,48,0,0,9,193,0,16,7,10,0,0,8,96,0,0,8,32,0,0,9,161,0,0,8,0,0,0,8,128,0,0,8,64,0,0,9,225,0,16,7,6,0,0,8,88,0,0,8,24,0,0,9,145,0,19,7,59,0,0,8,120,0,0,8,56,0,0,9,209,0,17,7,17,0,0,8,104,0,0,8,40,0,0,9,177,0,0,8,8,0,0,8,136,0,0,8,72,0,0,9,241,0,16,7,4,0,0,8,84,0,0,8,20,0,21,8,227,0,19,7,43,0,0,8,116,0,0,8,52,0,0,9,201,0,17,7,13,0,0,8,100,0,0,8,36,0,0,9,169,0,0,8,4,0,0,8,132,0,0,8,68,0,0,9,233,
0,16,7,8,0,0,8,92,0,0,8,28,0,0,9,153,0,20,7,83,0,0,8,124,0,0,8,60,0,0,9,217,0,18,7,23,0,0,8,108,0,0,8,44,0,0,9,185,0,0,8,12,0,0,8,140,0,0,8,76,0,0,9,249,0,16,7,3,0,0,8,82,0,0,8,18,0,21,8,163,0,19,7,35,0,0,8,114,0,0,8,50,0,0,9,197,0,17,7,11,0,0,8,98],"i8",4,B.j);
M([8,34,0,0,9,165,0,0,8,2,0,0,8,130,0,0,8,66,0,0,9,229,0,16,7,7,0,0,8,90,0,0,8,26,0,0,9,149,0,20,7,67,0,0,8,122,0,0,8,58,0,0,9,213,0,18,7,19,0,0,8,106,0,0,8,42,0,0,9,181,0,0,8,10,0,0,8,138,0,0,8,74,0,0,9,245,0,16,7,5,0,0,8,86,0,0,8,22,0,64,8,0,0,19,7,51,0,0,8,118,0,0,8,54,0,0,9,205,0,17,7,15,0,0,8,102,0,0,8,38,0,0,9,173,0,0,8,6,0,0,8,134,0,0,8,70,0,0,9,237,0,16,7,9,0,0,8,94,0,0,8,30,0,0,9,157,0,20,7,99,0,0,8,126,0,0,8,62,0,0,9,221,0,18,7,27,0,0,8,110,0,0,8,46,0,0,9,189,0,0,8,14,0,0,8,142,0,0,8,78,
0,0,9,253,0,96,7,0,0,0,8,81,0,0,8,17,0,21,8,131,0,18,7,31,0,0,8,113,0,0,8,49,0,0,9,195,0,16,7,10,0,0,8,97,0,0,8,33,0,0,9,163,0,0,8,1,0,0,8,129,0,0,8,65,0,0,9,227,0,16,7,6,0,0,8,89,0,0,8,25,0,0,9,147,0,19,7,59,0,0,8,121,0,0,8,57,0,0,9,211,0,17,7,17,0,0,8,105,0,0,8,41,0,0,9,179,0,0,8,9,0,0,8,137,0,0,8,73,0,0,9,243,0,16,7,4,0,0,8,85,0,0,8,21,0,16,8,2,1,19,7,43,0,0,8,117,0,0,8,53,0,0,9,203,0,17,7,13,0,0,8,101,0,0,8,37,0,0,9,171,0,0,8,5,0,0,8,133,0,0,8,69,0,0,9,235,0,16,7,8,0,0,8,93,0,0,8,29,0,0,9,155,
0,20,7,83,0,0,8,125,0,0,8,61,0,0,9,219,0,18,7,23,0,0,8,109,0,0,8,45,0,0,9,187,0,0,8,13,0,0,8,141,0,0,8,77,0,0,9,251,0,16,7,3,0,0,8,83,0,0,8,19,0,21,8,195,0,19,7,35,0,0,8,115,0,0,8,51,0,0,9,199,0,17,7,11,0,0,8,99,0,0,8,35,0,0,9,167,0,0,8,3,0,0,8,131,0,0,8,67,0,0,9,231,0,16,7,7,0,0,8,91,0,0,8,27,0,0,9,151,0,20,7,67,0,0,8,123,0,0,8,59,0,0,9,215,0,18,7,19,0,0,8,107,0,0,8,43,0,0,9,183,0,0,8,11,0,0,8,139,0,0,8,75,0,0,9,247,0,16,7,5,0,0,8,87,0,0,8,23,0,64,8,0,0,19,7,51,0,0,8,119,0,0,8,55,0,0,9,207,0,17,
7,15,0,0,8,103,0,0,8,39,0,0,9,175,0,0,8,7,0,0,8,135,0,0,8,71,0,0,9,239,0,16,7,9,0,0,8,95,0,0,8,31,0,0,9,159,0,20,7,99,0,0,8,127,0,0,8,63,0,0,9,223,0,18,7,27,0,0,8,111,0,0,8,47,0,0,9,191,0,0,8,15,0,0,8,143,0,0,8,79,0,0,9,255,0,16,5,1,0,23,5,1,1,19,5,17,0,27,5,1,16,17,5,5,0,25,5,1,4,21,5,65,0,29,5,1,64,16,5,3,0,24,5,1,2,20,5,33,0,28,5,1,32,18,5,9,0,26,5,1,8,22,5,129,0,64,5,0,0,16,5,2,0,23,5,129,1,19,5,25,0,27,5,1,24,17,5,7,0,25,5,1,6,21,5,97,0,29,5,1,96,16,5,4,0,24,5,1,3,20,5,49,0,28,5,1,48,18,5,13,
0,26,5,1,12,22,5,193,0,64,5,0,0,16,0,17,0,18,0,0,0,8,0,7,0,9,0,6,0,10,0,5,0,11,0,4,0,12,0,3,0,13,0,2,0,14,0,1,0,15,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,13,0,15,0,17,0,19,0,23,0,27,0,31,0,35,0,43,0,51,0,59,0,67,0,83,0,99,0,115,0,131,0,163,0,195,0,227,0,2,1,0,0,0,0,16,0,16,0,16,0,16,0,16,0,16,0,16,0,16,0,17,0,17,0,17,0,17,0,18,0,18,0,18,0,18,0,19,0,19,0,19,0,19,0,20,0,20,0,20,0,20,0,21,0,21,0,21,0,21,0,16,0,72,0,78,0,1,0,2,0,3,0,4,0,5,0,7,0,9,0,13,0,17,0,25,0,33,0,49,0,65,0,97,0,129,0,193,0,1,1,
129,1,1,2,1,3,1,4,1,6,1,8,1,12,1,16,1,24,1,32,1,48,1,64,1,96,0,0,0,0,16,0,16,0,16,0,16,0,17,0,17,0,18,0,18,0,19,0,19,0,20,0,20,0,21,0,21,0,22,0,22,0,23,0,23,0,24,0,24,0,25,0,25,0,26,0,26,0,27,0,27,0,28,0,28,0,29,0,29,0,64,0,64,0,12,0,8,0,140,0,8,0,76,0,8,0,204,0,8,0,44,0,8,0,172,0,8,0,108,0,8,0,236,0,8,0,28,0,8,0,156,0,8,0,92,0,8,0,220,0,8,0,60,0,8,0,188,0,8,0,124,0,8,0,252,0,8,0,2,0,8,0,130,0,8,0,66,0,8,0,194,0,8,0,34,0,8,0,162,0,8,0,98,0,8,0,226,0,8,0,18,0,8,0,146,0,8,0,82,0,8,0,210,0,8,0,50,0,
8,0,178,0,8,0,114,0,8,0,242,0,8,0,10,0,8,0,138,0,8,0,74,0,8,0,202,0,8,0,42,0,8,0,170,0,8,0,106,0,8,0,234,0,8,0,26,0,8,0,154,0,8,0,90,0,8,0,218,0,8,0,58,0,8,0,186,0,8,0,122,0,8,0,250,0,8,0,6,0,8,0,134,0,8,0,70,0,8,0,198,0,8,0,38,0,8,0,166,0,8,0,102,0,8,0,230,0,8,0,22,0,8,0,150,0,8,0,86,0,8,0,214,0,8,0,54,0,8,0,182,0,8,0,118,0,8,0,246,0,8,0,14,0,8,0,142,0,8,0,78,0,8,0,206,0,8,0,46,0,8,0,174,0,8,0,110,0,8,0,238,0,8,0,30,0,8,0,158,0,8,0,94,0,8,0,222,0,8,0,62,0,8,0,190,0,8,0,126,0,8,0,254,0,8,0,1,0,8,
0,129,0,8,0,65,0,8,0,193,0,8,0,33,0,8,0,161,0,8,0,97,0,8,0,225,0,8,0,17,0,8,0,145,0,8,0,81,0,8,0,209,0,8,0,49,0,8,0,177,0,8,0,113,0,8,0,241,0,8,0,9,0,8,0,137,0,8,0,73,0,8,0,201,0,8,0,41,0,8,0,169,0,8,0,105,0,8,0,233,0,8,0,25,0,8,0,153,0,8,0,89,0,8,0,217,0,8,0,57,0,8,0,185,0,8,0,121,0,8,0,249,0,8,0,5,0,8,0,133,0,8,0,69,0,8,0,197,0,8,0,37,0,8,0,165,0,8,0,101,0,8,0,229,0,8,0,21,0,8,0,149,0,8,0,85,0,8,0,213,0,8,0,53,0,8,0,181,0,8,0,117,0,8,0,245,0,8,0,13,0,8,0,141,0,8,0,77,0,8,0,205,0,8,0,45,0,8,0,173,
0,8,0,109,0,8,0,237,0,8,0,29,0,8,0,157,0,8,0,93,0,8,0,221,0,8,0,61,0,8,0,189,0,8,0,125,0,8,0,253,0,8,0,19,0,9,0,19,1,9,0,147,0,9,0,147,1,9,0,83,0,9,0,83,1,9,0,211,0,9,0,211,1,9,0,51,0,9,0,51,1,9,0,179,0,9,0,179,1,9,0,115,0,9,0,115,1,9,0,243,0,9,0,243,1,9,0,11,0,9,0,11,1,9,0,139,0,9,0,139,1,9,0,75,0,9,0,75,1,9,0,203,0,9,0,203,1,9,0,43,0,9,0,43,1,9,0,171,0,9,0,171,1,9,0,107,0,9,0,107,1,9,0,235,0,9,0,235,1,9,0,27,0,9,0,27,1,9,0,155,0,9,0,155,1,9,0,91,0,9,0,91,1,9,0,219,0,9,0,219,1,9,0,59,0,9,0,59,1,
9,0,187,0,9,0,187,1,9,0,123,0,9,0,123,1,9,0,251,0,9,0,251,1,9,0,7,0,9,0,7,1,9,0,135,0,9,0,135,1,9,0,71,0,9,0,71,1,9,0,199,0,9,0,199,1,9,0,39,0,9,0,39,1,9,0,167,0,9,0,167,1,9,0,103,0,9,0,103,1,9,0,231,0,9,0,231,1,9,0,23,0,9,0,23,1,9,0,151,0,9,0,151,1,9,0,87,0,9,0,87,1,9,0,215,0,9,0,215,1,9,0,55,0,9,0,55,1,9,0,183,0,9,0,183,1,9,0,119,0,9,0,119,1,9,0,247,0,9,0,247,1,9,0,15,0,9,0,15,1,9,0,143,0,9,0,143,1,9,0,79,0,9,0,79,1,9,0,207,0,9,0,207,1,9,0,47,0,9,0,47,1,9,0,175,0,9,0,175,1,9,0,111,0,9,0,111,1,9,
0,239,0,9,0,239,1,9,0,31,0,9,0,31,1,9,0,159,0,9,0,159,1,9,0,95,0,9,0,95,1,9,0,223,0,9,0,223,1,9,0,63,0,9,0,63,1,9,0,191,0,9,0,191,1,9,0,127,0,9,0,127,1,9,0,255,0,9,0,255,1,9,0,0,0,7,0,64,0,7,0,32,0,7,0,96,0,7,0,16,0,7,0,80,0,7,0,48,0,7,0,112,0,7,0,8,0,7,0,72,0,7,0,40,0,7,0,104,0,7,0,24,0,7,0,88,0,7,0,56,0,7,0,120,0,7,0,4,0,7,0,68,0,7,0,36,0,7,0,100,0,7,0,20,0,7,0,84,0,7,0,52,0,7,0,116,0,7,0,3,0,8,0,131,0,8,0,67,0,8,0,195,0,8,0,35,0,8,0,163,0,8,0,99,0,8,0,227,0,8,0,0,0,5,0,16,0,5,0,8,0,5,0,24,0,5,
0,4,0,5,0,20,0,5,0,12,0,5,0,28,0,5,0,2,0,5,0,18,0,5,0,10,0,5,0,26,0,5,0,6,0,5,0,22,0,5,0,14,0,5,0,30,0,5,0,1,0,5,0,17,0,5,0,9,0,5,0,25,0,5,0,5,0,5,0,21,0,5,0,13,0,5,0,29,0,5,0,3,0,5,0,19,0,5,0,11,0,5,0,27,0,5,0,7,0,5,0,23,0,5,0,123,114,101,116,117,114,110,32,90,76,73,66,74,83,95,114,101,97,100,40,36,48,44,32,36,49,44,32,36,50,41,125,0,123,90,76,73,66,74,83,95,119,114,105,116,101,40,36,48,44,32,36,49,44,32,36,50,41,125,0,49,46,50,46,56,0,105,110,99,111,114,114,101,99,116,32,104,101,97,100,101,114,
32,99,104,101,99,107,0,117,110,107,110,111,119,110,32,99,111,109,112,114,101,115,115,105,111,110,32,109,101,116,104,111,100,0,105,110,118,97,108,105,100,32,119,105,110,100,111,119,32,115,105,122,101,0,117,110,107,110,111,119,110,32,104,101,97,100,101,114,32,102,108,97,103,115,32,115,101,116,0,104,101,97,100,101,114,32,99,114,99,32,109,105,115,109,97,116,99,104,0,105,110,118,97,108,105,100,32,98,108,111,99,107,32,116,121,112,101,0,105,110,118,97,108,105,100,32,115,116,111,114,101,100,32,98,108,111,
99,107,32,108,101,110,103,116,104,115,0,116,111,111,32,109,97,110,121,32,108,101,110,103,116,104,32,111,114,32,100,105,115,116,97,110,99,101,32,115,121,109,98,111,108,115,0,105,110,118,97,108,105,100,32,99,111,100,101,32,108,101,110,103,116,104,115,32,115,101,116,0,105,110,118,97,108,105,100,32,98,105,116,32,108,101,110,103,116,104,32,114,101,112,101,97,116,0,105,110,118,97,108,105,100,32,99,111,100,101,32,45,45,32,109,105,115,115,105,110,103,32,101,110,100,45,111,102,45,98,108,111,99,107,0,105,110,
118,97,108,105,100,32,108,105,116,101,114,97,108,47,108,101,110,103,116,104,115,32,115,101,116,0,105,110,118,97,108,105,100,32,100,105,115,116,97,110,99,101,115,32,115,101,116,0,105,110,99,111,114,114,101,99,116,32,100,97,116,97,32,99,104,101,99,107,0,105,110,99,111,114,114,101,99,116,32,108,101,110,103,116,104,32,99,104,101,99,107,0,0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,
12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,
15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,
28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,
19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,
27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15,115,116,114,101,97,109,32,101,114,114,111,114,0,105,110,115,117,102,102,105,99,105,101,110,116,32,109,101,109,111,114,121,0,98,117,102,102,101,114,32,101,114,114,111,114,0,105,110,118,97,108,105,100,32,100,105,115,116,97,110,99,101,32,116,111,111,32,102,97,114,32,98,97,99,107,0,105,110,118,97,108,105,100,32,100,105,115,116,97,110,99,101,32,99,111,100,101,0,105,110,
118,97,108,105,100,32,108,105,116,101,114,97,108,47,108,101,110,103,116,104,32,99,111,100,101,0],"i8",4,B.j+10241);var ua=C,C=C+16;function Y(a){Y.s||(D=ia(),Y.s=!0,assert(B.b),Y.o=B.b,B.b=function(){F("cannot dynamically allocate, sbrk now has control")});var c=D;return 0==a||Y.o(a)?c:4294967295}b._memset=va;b._llvm_bswap_i32=wa;b._pthread_self=xa;b._memcpy=ya;la=z=B.k(C);S=la+ma;D=B.k(S);
b.q={Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,NaN:NaN,Infinity:Infinity};
b.r={abort:F,assert:assert,invoke_iiii:function(a,c,d,e){try{return b.dynCall_iiii(a,c,d,e)}catch(g){if("number"!==typeof g&&"longjmp"!==g)throw g;Z.setThrew(1,0)}},invoke_vii:function(a,c,d){try{b.dynCall_vii(a,c,d)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;Z.setThrew(1,0)}},invoke_iii:function(a,c,d){try{return b.dynCall_iii(a,c,d)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;Z.setThrew(1,0)}},_sbrk:Y,_emscripten_memcpy_big:function(a,c,d){O.set(O.subarray(c,c+d),a);return a},
_abort:function(){b.abort()},_emscripten_asm_const_iiii:function(a,c,d,e){return ta[a](c,d,e)},STACKTOP:z,STACK_MAX:S,tempDoublePtr:ua,ABORT:G};// EMSCRIPTEN_START_ASM
var Z=(function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=0;var n=0;var o=0;var p=0;var q=global.NaN,r=global.Infinity;var s=0,t=0,u=0,v=0,w=0.0,x=0,y=0,z=0,A=0.0;var B=0;var C=0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=global.Math.floor;var M=global.Math.abs;var N=global.Math.sqrt;var O=global.Math.pow;var P=global.Math.cos;var Q=global.Math.sin;var R=global.Math.tan;var S=global.Math.acos;var T=global.Math.asin;var U=global.Math.atan;var V=global.Math.atan2;var W=global.Math.exp;var X=global.Math.log;var Y=global.Math.ceil;var Z=global.Math.imul;var _=global.Math.min;var $=global.Math.clz32;var aa=env.abort;var ba=env.assert;var ca=env.invoke_iiii;var da=env.invoke_vii;var ea=env.invoke_iii;var fa=env._sbrk;var ga=env._emscripten_memcpy_big;var ha=env._abort;var ia=env._emscripten_asm_const_iiii;var ja=0.0;
// EMSCRIPTEN_START_FUNCS
function na(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+15&-16;return b|0}function oa(){return i|0}function pa(a){a=a|0;i=a}function qa(a,b){a=a|0;b=b|0;i=a;j=b}function ra(a,b){a=a|0;b=b|0;if(!m){m=a;n=b}}function sa(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0]}function ta(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0];a[k+4>>0]=a[b+4>>0];a[k+5>>0]=a[b+5>>0];a[k+6>>0]=a[b+6>>0];a[k+7>>0]=a[b+7>>0]}function ua(a){a=a|0;B=a}function va(){return B|0}function wa(a){a=a|0;if((c[3507]|0)>>>0>=a>>>0)return;c[3507]=a;Za(c[3508]|0);Za(c[3509]|0);a=c[3507]|0;c[3508]=Ya(a)|0;c[3509]=Ya(a)|0;return}function xa(a,b){a=a|0;b=b|0;var d=0;d=Ya(56)|0;c[d+32>>2]=0;c[d+36>>2]=0;c[d+40>>2]=0;if(!(Da(d,a,8,b*15|0,9,0,12726,56)|0)){b=d;return b|0}Ea(d)|0;b=0;return b|0}function ya(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;c[a+4>>2]=ia(0,a|0,c[3508]|0,b|0)|0;c[a>>2]=c[3508];f=a+16|0;g=a+12|0;e=d|0?4:0;while(1){c[f>>2]=b;c[g>>2]=c[3509];d=Ka(a,e)|0;if((d|0)==-2){d=-2;e=4;break}ia(1,a|0,c[3509]|0,b-(c[f>>2]|0)|0)|0;if(c[f>>2]|0){e=4;break}}if((e|0)==4)return d|0;return 0}function za(a){a=a|0;Ea(a)|0;return}function Aa(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;k=Ya(56)|0;b=k+32|0;c[b>>2]=0;l=k+36|0;c[l>>2]=0;n=k+40|0;c[n>>2]=0;c[k+4>>2]=0;c[k>>2]=0;d=a*15|0;if(!k){n=0;return n|0}i=k+24|0;c[i>>2]=0;c[b>>2]=1;c[n>>2]=0;c[l>>2]=1;h=Ua(0,1,7116)|0;m=k+28|0;if(!h){b=c[m>>2]|0;if(!b){n=0;return n|0}a=c[l>>2]|0;if(!a){n=0;return n|0}d=c[b+52>>2]|0;if(d){la[a&1](c[n>>2]|0,d);a=c[l>>2]|0;b=c[m>>2]|0}la[a&1](c[n>>2]|0,b);c[m>>2]=0;n=0;return n|0}c[m>>2]=h;c[h+52>>2]=0;g=c[m>>2]|0;do if(g|0){if((a|0)<0){b=0-d|0;f=0}else{if((d|0)>=48)break;b=d&15;f=(d>>4)+1|0}if(b){if((b&-8|0)!=8)break}else b=0;a=g+52|0;d=c[a>>2]|0;e=g+36|0;if(d|0?(c[e>>2]|0)!=(b|0):0){la[c[l>>2]&1](c[n>>2]|0,d);c[a>>2]=0}c[g+8>>2]=f;c[e>>2]=b;b=c[m>>2]|0;if(b|0?(c[b+40>>2]=0,c[b+44>>2]=0,c[b+48>>2]=0,j=c[m>>2]|0,j|0):0){c[j+28>>2]=0;c[k+20>>2]=0;c[k+8>>2]=0;c[i>>2]=0;b=c[j+8>>2]|0;if(b|0)c[k+48>>2]=b&1;c[j>>2]=0;c[j+4>>2]=0;c[j+12>>2]=0;c[j+20>>2]=32768;c[j+32>>2]=0;c[j+56>>2]=0;c[j+60>>2]=0;n=j+1328|0;c[j+108>>2]=n;c[j+80>>2]=n;c[j+76>>2]=n;c[j+7104>>2]=1;c[j+7108>>2]=-1;n=k;return n|0}}while(0);la[c[l>>2]&1](c[n>>2]|0,h);c[m>>2]=0;n=0;return n|0}function Ba(f,g){f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ja=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Ya=0;Ya=i;i=i+16|0;Ua=Ya;Sa=f+4|0;c[Sa>>2]=ia(0,f|0,c[3508]|0,g|0)|0;c[f>>2]=c[3508];Ta=f+16|0;Va=f+12|0;Ea=f+28|0;Ka=f+24|0;Ma=f+48|0;Na=Ua+1|0;Oa=f+20|0;Pa=Ua+2|0;Qa=Ua+3|0;Ra=f+8|0;Ba=f+44|0;Ca=f+32|0;Da=f+40|0;a:while(1){c[Ta>>2]=g;za=c[3509]|0;c[Va>>2]=za;Aa=c[Ea>>2]|0;j=za;b:do if(!((Aa|0)==0|(za|0)==0)){k=c[f>>2]|0;if((k|0)==0?c[Sa>>2]|0:0){h=-2;P=368;break}h=c[Aa>>2]|0;if((h|0)==11){c[Aa>>2]=12;h=12;j=c[Va>>2]|0;k=c[f>>2]|0;p=c[Ta>>2]|0}else p=g;wa=c[Sa>>2]|0;xa=Aa+60|0;ra=Aa+56|0;ta=Aa+8|0;va=Aa+16|0;R=Aa+32|0;S=Aa+36|0;T=Aa+20|0;ya=Aa+24|0;U=Aa+64|0;V=Aa+12|0;za=Aa+4|0;W=Aa+76|0;X=Aa+84|0;Y=Aa+80|0;Z=Aa+88|0;_=Aa+104|0;$=Aa+96|0;aa=Aa+100|0;ba=Aa+624|0;ca=Aa+1328|0;da=Aa+108|0;Q=ca;ea=Aa+112|0;fa=Aa+752|0;ga=Aa+7108|0;ha=Aa+72|0;ja=Aa+7112|0;la=Aa+68|0;ma=Aa+44|0;na=Aa+7104|0;oa=Aa+48|0;pa=Aa+52|0;sa=Aa+40|0;ua=Aa+28|0;qa=Aa+92|0;q=h;m=c[xa>>2]|0;o=wa;l=c[ra>>2]|0;n=p;r=p;h=0;c:while(1){d:do switch(q|0){case 30:break a;case 28:{h=1;P=347;break c}case 29:{h=-3;break c}case 0:{p=c[ta>>2]|0;if(!p){c[Aa>>2]=12;s=n;break d}while(1){if(m>>>0>=16)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}if((p&2|0)!=0&(l|0)==35615){c[ya>>2]=0;a[Ua>>0]=31;a[Na>>0]=-117;c[ya>>2]=Xa(c[ya>>2]|0,Ua,2)|0;c[Aa>>2]=1;m=0;l=0;s=n;break d}c[va>>2]=0;q=c[R>>2]|0;if(q){c[q+48>>2]=-1;p=c[ta>>2]|0}if(p&1|0?((((l<<8&65280)+(l>>>8)|0)>>>0)%31|0|0)==0:0){if((l&15|0)!=8){c[Ka>>2]=12755;c[Aa>>2]=29;s=n;break d}s=l>>>4;m=m+-4|0;p=(s&15)+8|0;q=c[S>>2]|0;if(q){if(p>>>0>q>>>0){c[Ka>>2]=12782;c[Aa>>2]=29;l=s;s=n;break d}}else c[S>>2]=p;c[T>>2]=1<<p;c[ya>>2]=1;c[Ma>>2]=1;c[Aa>>2]=l>>>12&2^11;m=0;l=0;s=n;break d}c[Ka>>2]=12732;c[Aa>>2]=29;s=n;break}case 1:{while(1){if(m>>>0>=16)break;if(!o){o=0;break c}l=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;k=k+1|0}c[va>>2]=l;if((l&255|0)!=8){c[Ka>>2]=12755;c[Aa>>2]=29;s=n;break d}if(l&57344|0){c[Ka>>2]=12802;c[Aa>>2]=29;s=n;break d}m=c[R>>2]|0;if(!m)m=l;else{c[m>>2]=l>>>8&1;m=c[va>>2]|0}if(m&512|0){a[Ua>>0]=l;a[Na>>0]=l>>>8;c[ya>>2]=Xa(c[ya>>2]|0,Ua,2)|0}c[Aa>>2]=2;m=0;l=0;P=44;break}case 2:{P=44;break}case 3:{P=52;break}case 4:{P=60;break}case 5:{P=71;break}case 6:{p=c[va>>2]|0;P=81;break}case 7:{P=94;break}case 8:{P=107;break}case 9:{while(1){if(m>>>0>=32)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}m=ab(l|0)|0;c[ya>>2]=m;c[Ma>>2]=m;c[Aa>>2]=10;m=0;l=0;P=120;break}case 10:{P=120;break}case 12:case 11:{p=m;P=123;break}case 13:{p=m&-8;l=l>>>(m&7);while(1){if(p>>>0>=32)break;if(!o){m=p;o=0;break c}O=l+(d[k>>0]<<p)|0;p=p+8|0;o=o+-1|0;l=O;k=k+1|0}m=l&65535;if((m|0)==(l>>>16^65535|0)){c[U>>2]=m;c[Aa>>2]=14;m=0;l=0;P=142;break d}else{c[Ka>>2]=12866;c[Aa>>2]=29;m=p;s=n;break d}}case 14:{P=142;break}case 15:{P=143;break}case 16:{while(1){if(m>>>0>=14)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}N=(l&31)+257|0;c[$>>2]=N;O=(l>>>5&31)+1|0;c[aa>>2]=O;p=(l>>>10&15)+4|0;c[qa>>2]=p;l=l>>>14;m=m+-14|0;if(N>>>0>286|O>>>0>30){c[Ka>>2]=12895;c[Aa>>2]=29;s=n;break d}else{c[_>>2]=0;c[Aa>>2]=17;q=0;P=153;break d}}case 17:{q=c[_>>2]|0;p=c[qa>>2]|0;P=153;break}case 18:{P=164;break}case 19:{P=203;break}case 20:{P=204;break}case 21:{q=c[ha>>2]|0;P=283;break}case 22:{P=290;break}case 23:{p=c[ha>>2]|0;P=304;break}case 24:{P=310;break}case 25:{if(!n){n=0;P=347;break c}a[j>>0]=c[U>>2];c[Aa>>2]=20;s=n+-1|0;j=j+1|0;break}case 26:{if(c[ta>>2]|0){while(1){if(m>>>0>=32)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}s=r-n|0;c[Oa>>2]=(c[Oa>>2]|0)+s;c[ua>>2]=(c[ua>>2]|0)+s;if((r|0)!=(n|0)){p=c[ya>>2]|0;q=j+(0-s)|0;if(!(c[va>>2]|0))p=Wa(p,q,s)|0;else p=Xa(p,q,s)|0;c[ya>>2]=p;c[Ma>>2]=p}N=(c[va>>2]|0)==0;O=ab(l|0)|0;if(((N?O:l)|0)==(c[ya>>2]|0)){m=0;l=0;r=n}else{c[Ka>>2]=13069;c[Aa>>2]=29;s=n;r=n;break d}}c[Aa>>2]=27;P=339;break}case 27:{P=339;break}default:{h=-2;P=368;break b}}while(0);do if((P|0)==44){while(1){P=0;if(m>>>0>=32)break;if(!o){o=0;break c}P=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=P;k=k+1|0;P=44}m=c[R>>2]|0;if(m|0)c[m+4>>2]=l;if(c[va>>2]&512|0){a[Ua>>0]=l;a[Na>>0]=l>>>8;a[Pa>>0]=l>>>16;a[Qa>>0]=l>>>24;c[ya>>2]=Xa(c[ya>>2]|0,Ua,4)|0}c[Aa>>2]=3;m=0;l=0;P=52}else if((P|0)==120){if(!(c[V>>2]|0)){P=121;break a}c[ya>>2]=1;c[Ma>>2]=1;c[Aa>>2]=11;p=m;P=123}else if((P|0)==142){c[Aa>>2]=15;P=143}else if((P|0)==153){P=0;while(1){if(q>>>0>=p>>>0){h=q;break}while(1){if(m>>>0>=3)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}O=q+1|0;c[_>>2]=O;b[Aa+112+(e[11104+(q<<1)>>1]<<1)>>1]=l&7;q=O;m=m+-3|0;l=l>>>3}while(1){if(h>>>0>=19)break;O=h+1|0;c[_>>2]=O;b[Aa+112+(e[11104+(h<<1)>>1]<<1)>>1]=0;h=O}c[da>>2]=ca;c[W>>2]=Q;c[X>>2]=7;h=La(0,ea,19,da,X,fa)|0;if(!h){c[_>>2]=0;c[Aa>>2]=18;h=0;P=164;break}else{c[Ka>>2]=12931;c[Aa>>2]=29;s=n;break}}else if((P|0)==339){P=0;if(!(c[ta>>2]|0)){h=o;P=346;break c}if(!(c[va>>2]|0)){h=o;P=346;break c}while(1){if(m>>>0>=32)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}if((l|0)==(c[ua>>2]|0)){m=0;h=o;l=0;P=346;break c}c[Ka>>2]=13090;c[Aa>>2]=29;s=n}while(0);do if((P|0)==52){while(1){P=0;if(m>>>0>=16)break;if(!o){o=0;break c}P=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=P;k=k+1|0;P=52}m=c[R>>2]|0;if(m|0){c[m+8>>2]=l&255;c[(c[R>>2]|0)+12>>2]=l>>>8}if(c[va>>2]&512|0){a[Ua>>0]=l;a[Na>>0]=l>>>8;c[ya>>2]=Xa(c[ya>>2]|0,Ua,2)|0}c[Aa>>2]=4;m=0;l=0;P=60}else if((P|0)==123){P=0;if(!(c[za>>2]|0))m=p;else{c[Aa>>2]=26;m=p&-8;l=l>>>(p&7);s=n;break}while(1){if(m>>>0>=3)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}c[za>>2]=l&1;switch(l>>>1&3|0){case 0:{c[Aa>>2]=13;break}case 1:{c[W>>2]=8928;c[X>>2]=9;c[Y>>2]=10976;c[Z>>2]=5;c[Aa>>2]=19;break}case 2:{c[Aa>>2]=16;break}case 3:{c[Ka>>2]=12847;c[Aa>>2]=29;break}default:{P=133;break a}}m=m+-3|0;l=l>>>3;s=n}else if((P|0)==143){P=0;p=c[U>>2]|0;if(!p){c[Aa>>2]=11;s=n;break}p=p>>>0>o>>>0?o:p;p=p>>>0>n>>>0?n:p;if(!p){P=347;break c}cb(j|0,k|0,p|0)|0;c[U>>2]=(c[U>>2]|0)-p;o=o-p|0;s=n-p|0;k=k+p|0;j=j+p|0}else if((P|0)==164){P=0;e:while(1){u=c[_>>2]|0;v=(c[$>>2]|0)+(c[aa>>2]|0)|0;if(u>>>0>=v>>>0){P=195;break}q=(1<<c[X>>2])+-1|0;s=c[W>>2]|0;while(1){p=s+((l&q)<<2)|0;p=e[p>>1]|e[p+2>>1]<<16;t=p>>>8&255;if(m>>>0>=t>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}p=p>>>16&65535;if((p&65535)<16){c[_>>2]=u+1;b[Aa+112+(u<<1)>>1]=p;m=m-t|0;l=l>>>t;continue}switch(p<<16>>16){case 16:{p=t+2|0;while(1){if(m>>>0>=p>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}l=l>>>t;m=m-t|0;if(!u){P=178;break e}m=m+-2|0;p=(l&3)+3|0;l=l>>>2;q=e[Aa+112+(u+-1<<1)>>1]|0;break}case 17:{p=t+3|0;while(1){if(m>>>0>=p>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}l=l>>>t;m=m-t+-3|0;p=(l&7)+3|0;l=l>>>3;q=0;break}default:{p=t+7|0;while(1){if(m>>>0>=p>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}l=l>>>t;m=m-t+-7|0;p=(l&127)+11|0;l=l>>>7;q=0}}if((u+p|0)>>>0>v>>>0){P=192;break}q=q&65535;while(1){if(!p)continue e;O=c[_>>2]|0;c[_>>2]=O+1;b[Aa+112+(O<<1)>>1]=q;p=p+-1|0}}if((P|0)==178){P=0;c[Ka>>2]=12956;c[Aa>>2]=29;s=n;break}else if((P|0)==192){P=0;c[Ka>>2]=12956;c[Aa>>2]=29;s=n;break}else if((P|0)==195){P=0;if((c[Aa>>2]|0)==29){s=n;break}if(!(b[ba>>1]|0)){c[Ka>>2]=12982;c[Aa>>2]=29;s=n;break}c[da>>2]=ca;c[W>>2]=Q;c[X>>2]=9;h=La(1,ea,c[$>>2]|0,da,X,fa)|0;if(h|0){c[Ka>>2]=13019;c[Aa>>2]=29;s=n;break}c[Y>>2]=c[da>>2];c[Z>>2]=6;h=La(2,Aa+112+(c[$>>2]<<1)|0,c[aa>>2]|0,da,Z,fa)|0;if(!h){c[Aa>>2]=19;h=0;P=203;break}else{c[Ka>>2]=13047;c[Aa>>2]=29;s=n;break}}}while(0);if((P|0)==60){P=0;p=c[va>>2]|0;if(!(p&1024)){p=c[R>>2]|0;if(p)c[p+16>>2]=0}else{while(1){if(m>>>0>=16)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}c[U>>2]=l;m=c[R>>2]|0;if(!m)m=p;else{c[m+20>>2]=l;m=c[va>>2]|0}if(!(m&512)){m=0;l=0}else{a[Ua>>0]=l;a[Na>>0]=l>>>8;c[ya>>2]=Xa(c[ya>>2]|0,Ua,2)|0;m=0;l=0}}c[Aa>>2]=5;P=71}else if((P|0)==203){c[Aa>>2]=20;P=204}do if((P|0)==71){p=c[va>>2]|0;if(p&1024){s=c[U>>2]|0;t=s>>>0>o>>>0?o:s;if(t){q=c[R>>2]|0;if((q|0)!=0?(Fa=c[q+16>>2]|0,(Fa|0)!=0):0){p=(c[q+20>>2]|0)-s|0;P=c[q+24>>2]|0;cb(Fa+p|0,k|0,((p+t|0)>>>0>P>>>0?P-p|0:t)|0)|0;p=c[va>>2]|0}if(p&512|0)c[ya>>2]=Xa(c[ya>>2]|0,k,t)|0;s=(c[U>>2]|0)-t|0;c[U>>2]=s;o=o-t|0;k=k+t|0}if(s){P=347;break c}}c[U>>2]=0;c[Aa>>2]=6;P=81}else if((P|0)==204){P=0;if(!(o>>>0>5&n>>>0>257)){c[ga>>2]=0;q=(1<<c[X>>2])+-1|0;u=c[W>>2]|0;while(1){p=u+((l&q)<<2)|0;p=e[p>>1]|e[p+2>>1]<<16;s=p>>>8;v=s&255;if(v>>>0<=m>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}q=p&255;t=p>>>16;if(q<<24>>24)if((q&255)<16){q=p>>>16;p=(1<<v+(p&255))+-1|0;while(1){t=u+(q+((l&p)>>>v)<<2)|0;t=e[t>>1]|e[t+2>>1]<<16;s=t>>>8;if((v+(s&255)|0)>>>0<=m>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}c[ga>>2]=v;u=v;m=m-v|0;q=t&255;p=t>>>16;l=l>>>v}else{u=0;p=t}else{u=0;q=0;p=t}O=s&255;l=l>>>O;m=m-O|0;c[ga>>2]=u+O;c[U>>2]=p;if(!(q<<24>>24)){c[Aa>>2]=25;s=n;break}if(q&32){c[ga>>2]=-1;c[Aa>>2]=11;s=n;break}if(!(q&64)){q=q&15;c[ha>>2]=q;c[Aa>>2]=21;P=283;break}else{c[Ka>>2]=13998;c[Aa>>2]=29;s=n;break}}c[Va>>2]=j;c[Ta>>2]=n;c[f>>2]=k;c[Sa>>2]=o;c[ra>>2]=l;c[xa>>2]=m;x=c[Ea>>2]|0;k=(c[f>>2]|0)+-1|0;L=k+((c[Sa>>2]|0)+-5)|0;j=(c[Va>>2]|0)+-1|0;F=c[Ta>>2]|0;M=j+(F+-257)|0;y=c[x+40>>2]|0;z=c[x+44>>2]|0;A=c[x+48>>2]|0;N=x+56|0;O=x+60|0;B=c[x+76>>2]|0;C=c[x+80>>2]|0;D=(1<<c[x+84>>2])+-1|0;E=(1<<c[x+88>>2])+-1|0;F=j+(F-r)|0;G=x+7104|0;H=(c[x+52>>2]|0)+-1|0;I=(A|0)==0;J=y+A|0;K=F-A|0;n=c[O>>2]|0;l=c[N>>2]|0;f:while(1){if(n>>>0<15){P=k+2|0;m=n+16|0;l=l+(d[k+1>>0]<<n)+(d[P>>0]<<n+8)|0;k=P}else m=n;n=l&D;while(1){n=B+(n<<2)|0;n=e[n>>1]|e[n+2>>1]<<16;p=n>>>16;P=n>>>8&255;l=l>>>P;m=m-P|0;if(!((n&255)<<24>>24)){P=210;break}if(n&16|0){P=212;break}if(n&64|0){P=259;break f}n=p+(l&(1<<(n&255))+-1)|0}do if((P|0)==210){P=0;j=j+1|0;a[j>>0]=p}else if((P|0)==212){P=0;q=n&15;if(!q)o=l;else{if(m>>>0<q>>>0){k=k+1|0;n=m+8|0;l=l+(d[k>>0]<<m)|0}else n=m;m=n-q|0;o=l>>>q;p=p+(l&(1<<q)+-1)|0}if(m>>>0<15){q=k+2|0;n=m+16|0;l=o+(d[k+1>>0]<<m)+(d[q>>0]<<m+8)|0}else{n=m;l=o;q=k}k=l&E;m=n;while(1){k=C+(k<<2)|0;k=e[k>>1]|e[k+2>>1]<<16;v=k>>>16;w=k>>>8&255;l=l>>>w;m=m-w|0;if(k&16|0)break;if(k&64|0){P=256;break f}k=v+(l&(1<<(k&255))+-1)|0}o=k&15;if(m>>>0<o>>>0){k=q+1|0;l=l+(d[k>>0]<<m)|0;n=m+8|0;if(n>>>0<o>>>0){k=q+2|0;m=m+16|0;l=l+(d[k>>0]<<n)|0}else m=n}else k=q;u=l&(1<<o)+-1;w=v+u|0;l=l>>>o;m=m-o|0;t=j;n=t-F|0;if(w>>>0<=n>>>0){q=j+(0-w)|0;o=j;while(1){a[o+1>>0]=a[q+1>>0]|0;a[o+2>>0]=a[q+2>>0]|0;n=q+3|0;j=o+3|0;a[j>>0]=a[n>>0]|0;p=p+-3|0;if(p>>>0<=2)break;else{q=n;o=j}}if(!p)break;j=o+4|0;a[j>>0]=a[q+4>>0]|0;if(p>>>0<=1)break;j=o+5|0;a[j>>0]=a[q+5>>0]|0;break}o=w-n|0;if(o>>>0>z>>>0?c[G>>2]|0:0){P=226;break f}do if(I){q=H+(y-o)|0;if(p>>>0>o>>>0){n=p-o|0;s=u+v-t|0;p=j;do{q=q+1|0;p=p+1|0;a[p>>0]=a[q>>0]|0;o=o+-1|0}while((o|0)!=0);j=j+F+s|0;q=j+(0-w)|0}else n=p}else{if(A>>>0>=o>>>0){q=H+(A-o)|0;if(p>>>0<=o>>>0){n=p;break}n=p-o|0;s=u+v-t|0;p=j;do{q=q+1|0;p=p+1|0;a[p>>0]=a[q>>0]|0;o=o+-1|0}while((o|0)!=0);j=j+F+s|0;q=j+(0-w)|0;break}q=H+(J-o)|0;o=o-A|0;if(p>>>0>o>>>0){n=p-o|0;s=u+v-t|0;p=j;do{q=q+1|0;p=p+1|0;a[p>>0]=a[q>>0]|0;o=o+-1|0}while((o|0)!=0);o=j+K+s|0;if(n>>>0<=A>>>0){q=H;j=o;break}n=n-A|0;p=u+v-t|0;q=H;s=A;do{q=q+1|0;o=o+1|0;a[o>>0]=a[q>>0]|0;s=s+-1|0}while((s|0)!=0);j=j+F+p|0;q=j+(0-w)|0}else n=p}while(0);while(1){if(n>>>0<=2)break;a[j+1>>0]=a[q+1>>0]|0;a[j+2>>0]=a[q+2>>0]|0;v=q+3|0;w=j+3|0;a[w>>0]=a[v>>0]|0;q=v;n=n+-3|0;j=w}if(n){o=j+1|0;a[o>>0]=a[q+1>>0]|0;if(n>>>0>1){j=j+2|0;a[j>>0]=a[q+2>>0]|0}else j=o}}while(0);if(k>>>0<L>>>0&j>>>0<M>>>0)n=m;else break}do if((P|0)==226){P=0;c[Ka>>2]=13946;c[x>>2]=29}else if((P|0)==256){P=0;c[Ka>>2]=13976;c[x>>2]=29;k=q}else if((P|0)==259){P=0;if(!(n&32)){c[Ka>>2]=13998;c[x>>2]=29;break}else{c[x>>2]=11;break}}while(0);n=m>>>3;k=k+(0-n)|0;n=m-(n<<3)|0;c[f>>2]=k+1;c[Va>>2]=j+1;c[Sa>>2]=(k>>>0<L>>>0?L-k|0:L-k|0)+5;c[Ta>>2]=(j>>>0<M>>>0?M-j|0:M-j|0)+257;c[N>>2]=l&(1<<n)+-1;c[O>>2]=n;j=c[Va>>2]|0;n=c[Ta>>2]|0;k=c[f>>2]|0;o=c[Sa>>2]|0;l=c[ra>>2]|0;m=c[xa>>2]|0;if((c[Aa>>2]|0)==11){c[ga>>2]=-1;s=n}else s=n}while(0);if((P|0)==81){if(!(p&2048)){p=c[R>>2]|0;if(p)c[p+28>>2]=0}else{if(!o){o=0;P=347;break}else q=0;do{s=q;q=q+1|0;s=a[k+s>>0]|0;p=c[R>>2]|0;if((p|0?(Ga=p+28|0,c[Ga>>2]|0):0)?(Ha=c[U>>2]|0,Ha>>>0<(c[p+32>>2]|0)>>>0):0){c[U>>2]=Ha+1;a[(c[Ga>>2]|0)+Ha>>0]=s}}while(s<<24>>24!=0&o>>>0>q>>>0);if(c[va>>2]&512|0)c[ya>>2]=Xa(c[ya>>2]|0,k,q)|0;o=o-q|0;k=k+q|0;if(s<<24>>24){P=347;break}}c[U>>2]=0;c[Aa>>2]=7;P=94}else if((P|0)==283){P=0;if(!q)p=c[U>>2]|0;else{while(1){if(m>>>0>=q>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}p=(c[U>>2]|0)+(l&(1<<q)+-1)|0;c[U>>2]=p;c[ga>>2]=(c[ga>>2]|0)+q;m=m-q|0;l=l>>>q}c[ja>>2]=p;c[Aa>>2]=22;P=290}do if((P|0)==94){if(!(c[va>>2]&4096)){p=c[R>>2]|0;if(p)c[p+36>>2]=0}else{if(!o){o=0;P=347;break c}else q=0;do{s=q;q=q+1|0;s=a[k+s>>0]|0;p=c[R>>2]|0;if((p|0?(Ia=p+36|0,c[Ia>>2]|0):0)?(Ja=c[U>>2]|0,Ja>>>0<(c[p+40>>2]|0)>>>0):0){c[U>>2]=Ja+1;a[(c[Ia>>2]|0)+Ja>>0]=s}}while(s<<24>>24!=0&o>>>0>q>>>0);if(c[va>>2]&512|0)c[ya>>2]=Xa(c[ya>>2]|0,k,q)|0;o=o-q|0;k=k+q|0;if(s<<24>>24){P=347;break c}}c[Aa>>2]=8;P=107}else if((P|0)==290){P=0;p=(1<<c[Z>>2])+-1|0;u=c[Y>>2]|0;while(1){s=u+((l&p)<<2)|0;s=e[s>>1]|e[s+2>>1]<<16;q=s>>>8;v=q&255;if(v>>>0<=m>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}p=s&255;if((p&255)<16){t=s>>>16;p=(1<<v+(s&255))+-1|0;while(1){s=u+(t+((l&p)>>>v)<<2)|0;s=e[s>>1]|e[s+2>>1]<<16;q=s>>>8;if((v+(q&255)|0)>>>0<=m>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}t=(c[ga>>2]|0)+v|0;c[ga>>2]=t;m=m-v|0;p=s&255;l=l>>>v}else t=c[ga>>2]|0;O=q&255;l=l>>>O;m=m-O|0;c[ga>>2]=t+O;if(!(p&64)){c[la>>2]=s>>>16;p=p&15;c[ha>>2]=p;c[Aa>>2]=23;P=304;break}else{c[Ka>>2]=13976;c[Aa>>2]=29;s=n;break}}while(0);do if((P|0)==107){P=0;q=c[va>>2]|0;if(q&512){while(1){if(m>>>0>=16)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}if((l|0)==(c[ya>>2]&65535|0)){m=0;l=0}else{c[Ka>>2]=12827;c[Aa>>2]=29;s=n;break}}p=c[R>>2]|0;if(p|0){c[p+44>>2]=q>>>9&1;c[(c[R>>2]|0)+48>>2]=1}c[ya>>2]=0;c[Ma>>2]=0;c[Aa>>2]=11;s=n}else if((P|0)==304){P=0;if(p){while(1){if(m>>>0>=p>>>0)break;if(!o){o=0;break c}O=l+(d[k>>0]<<m)|0;m=m+8|0;o=o+-1|0;l=O;k=k+1|0}c[la>>2]=(c[la>>2]|0)+(l&(1<<p)+-1);c[ga>>2]=(c[ga>>2]|0)+p;m=m-p|0;l=l>>>p}c[Aa>>2]=24;P=310}while(0);do if((P|0)==310){P=0;if(!n){n=0;P=347;break c}p=r-n|0;q=c[la>>2]|0;if(q>>>0>p>>>0){p=q-p|0;if(p>>>0>(c[ma>>2]|0)>>>0?c[na>>2]|0:0){c[Ka>>2]=13946;c[Aa>>2]=29;s=n;break}q=c[oa>>2]|0;if(p>>>0>q>>>0){p=p-q|0;s=p;p=(c[pa>>2]|0)+((c[sa>>2]|0)-p)|0}else{s=p;p=(c[pa>>2]|0)+(q-p)|0}O=c[U>>2]|0;t=O;s=s>>>0>O>>>0?O:s}else{s=c[U>>2]|0;t=s;p=j+(0-q)|0}s=s>>>0>n>>>0?n:s;c[U>>2]=t-s;q=s;while(1){O=j;j=j+1|0;a[O>>0]=a[p>>0]|0;q=q+-1|0;if(!q)break;else p=p+1|0}n=n-s|0;if(!(c[U>>2]|0)){c[Aa>>2]=20;s=n}else s=n}while(0);q=c[Aa>>2]|0;n=s}if((P|0)==346){P=0;c[Aa>>2]=28;o=h;h=1}else if((P|0)==347)P=0;c[Va>>2]=j;c[Ta>>2]=n;c[f>>2]=k;c[Sa>>2]=o;c[ra>>2]=l;c[xa>>2]=m;j=c[Ta>>2]|0;if(!(c[sa>>2]|0)){if((r|0)!=(j|0)?(c[Aa>>2]|0)>>>0<29:0)P=351}else P=351;do if((P|0)==351){P=0;p=c[Va>>2]|0;q=r-j|0;n=c[Ea>>2]|0;o=n+52|0;j=c[o>>2]|0;if(!j){j=ka[c[Ca>>2]&1](c[Da>>2]|0,1<<c[n+36>>2],1)|0;c[o>>2]=j;if(!j){P=361;break a}}m=n+40|0;k=c[m>>2]|0;if(!k){k=1<<c[n+36>>2];c[m>>2]=k;c[n+48>>2]=0;c[n+44>>2]=0}if(k>>>0<=q>>>0){cb(j|0,p+(0-k)|0,k|0)|0;c[n+48>>2]=0;c[n+44>>2]=c[m>>2];break}l=n+48|0;ra=c[l>>2]|0;sa=k-ra|0;sa=sa>>>0>q>>>0?q:sa;cb(j+ra|0,p+(0-q)|0,sa|0)|0;j=q-sa|0;if((q|0)!=(sa|0)){cb(c[o>>2]|0,p+(0-j)|0,j|0)|0;c[l>>2]=j;c[n+44>>2]=c[m>>2];break}j=(c[l>>2]|0)+q|0;c[l>>2]=j;sa=c[m>>2]|0;c[l>>2]=(j|0)==(sa|0)?0:j;j=n+44|0;k=c[j>>2]|0;if(k>>>0<sa>>>0)c[j>>2]=k+q}while(0);m=c[Sa>>2]|0;n=c[Ta>>2]|0;l=r-n|0;c[Ra>>2]=(c[Ra>>2]|0)+(wa-m);c[Oa>>2]=(c[Oa>>2]|0)+l;c[ua>>2]=(c[ua>>2]|0)+l;if(!((c[ta>>2]|0)==0|(r|0)==(n|0))){j=c[ya>>2]|0;k=(c[Va>>2]|0)+(0-l)|0;if(!(c[va>>2]|0))j=Wa(j,k,l)|0;else j=Xa(j,k,l)|0;c[ya>>2]=j;c[Ma>>2]=j}Aa=c[Aa>>2]|0;c[Ba>>2]=(c[xa>>2]|0)+(c[za>>2]|0?64:0)+((Aa|0)==11?128:0)+((Aa|0)==19|(Aa|0)==14?256:0);if((wa|0)==(m|0)&(r|0)==(n|0)&(h|0)==0){h=-5;P=368}else switch(h|0){case 2:{P=372;break a}case -4:case -3:{P=373;break a}default:{}}}else{h=-2;P=368}while(0);if((P|0)==368)P=0;ia(1,f|0,c[3509]|0,g-(c[Ta>>2]|0)|0)|0;if(c[Ta>>2]|0){P=373;break}}if((P|0)==121){c[Va>>2]=j;c[Ta>>2]=n;c[f>>2]=k;c[Sa>>2]=o;c[ra>>2]=l;c[xa>>2]=m;f=-3;i=Ya;return f|0}else if((P|0)!=133)if((P|0)==361)c[Aa>>2]=30;else if((P|0)==372){f=-3;i=Ya;return f|0}else if((P|0)==373){i=Ya;return h|0}f=-4;i=Ya;return f|0}function Ca(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;if(!a)return;g=a+28|0;b=c[g>>2]|0;if(!b)return;e=a+36|0;d=c[e>>2]|0;if(!d)return;f=c[b+52>>2]|0;a=a+40|0;if(f){la[d&1](c[a>>2]|0,f);d=c[e>>2]|0;b=c[g>>2]|0}la[d&1](c[a>>2]|0,b);c[g>>2]=0;return}function Da(d,f,g,h,i,j,k,l){d=d|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;var m=0,n=0,o=0,p=0,q=0,r=0,s=0;if(!k){d=-6;return d|0}if(!((a[k>>0]|0)==49&(l|0)==56)){d=-6;return d|0}if(!d){d=-2;return d|0}p=d+24|0;c[p>>2]=0;q=d+32|0;l=c[q>>2]|0;if(!l){c[q>>2]=1;c[d+40>>2]=0;l=1}o=d+36|0;if(!(c[o>>2]|0))c[o>>2]=1;n=(f|0)==-1?6:f;if((h|0)<0){k=0-h|0;m=0}else{m=(h|0)>15;k=m?h+-16|0:h;m=m?2:1}if(j>>>0>4|(n>>>0>9|((k&-8|0)!=8|((g|0)!=8|(i+-1|0)>>>0>8)))){d=-2;return d|0}k=(k|0)==8?9:k;f=d+40|0;h=ka[l&1](c[f>>2]|0,1,5828)|0;if(!h){d=-4;return d|0}g=d+28|0;c[g>>2]=h;c[h>>2]=d;c[h+24>>2]=m;c[h+28>>2]=0;c[h+48>>2]=k;r=1<<k;m=h+44|0;c[m>>2]=r;c[h+52>>2]=r+-1;s=i+7|0;c[h+80>>2]=s;s=1<<s;l=h+76|0;c[l>>2]=s;c[h+84>>2]=s+-1;c[h+88>>2]=((i+9|0)>>>0)/3|0;s=h+56|0;c[s>>2]=ka[c[q>>2]&1](c[f>>2]|0,r,2)|0;r=h+64|0;c[r>>2]=ka[c[q>>2]&1](c[f>>2]|0,c[m>>2]|0,2)|0;m=h+68|0;c[m>>2]=ka[c[q>>2]&1](c[f>>2]|0,c[l>>2]|0,2)|0;c[h+5824>>2]=0;l=1<<i+6;k=h+5788|0;c[k>>2]=l;l=ka[c[q>>2]&1](c[f>>2]|0,l,4)|0;c[h+8>>2]=l;k=c[k>>2]|0;c[h+12>>2]=k<<2;if((c[s>>2]|0?c[r>>2]|0:0)?!((c[m>>2]|0)==0|(l|0)==0):0){c[h+5796>>2]=l+(k>>>1<<1);c[h+5784>>2]=l+(k*3|0);c[h+132>>2]=n;c[h+136>>2]=j;a[h+36>>0]=8;f=c[g>>2]|0;if(!f){s=-2;return s|0}if(!(c[q>>2]|0)){s=-2;return s|0}if(!(c[o>>2]|0)){s=-2;return s|0}c[d+20>>2]=0;c[d+8>>2]=0;c[p>>2]=0;c[d+44>>2]=2;c[f+20>>2]=0;c[f+16>>2]=c[f+8>>2];k=f+24|0;l=c[k>>2]|0;if((l|0)<0){l=0-l|0;c[k>>2]=l}c[f+4>>2]=l|0?42:113;c[d+48>>2]=(l|0)!=2&1;c[f+40>>2]=0;c[f+2840>>2]=f+148;c[f+2848>>2]=128;c[f+2852>>2]=f+2440;c[f+2860>>2]=264;c[f+2864>>2]=f+2684;c[f+2872>>2]=404;b[f+5816>>1]=0;c[f+5820>>2]=0;l=0;while(1){if((l|0)==286){l=0;break}b[f+148+(l<<2)>>1]=0;l=l+1|0}while(1){if((l|0)==30){l=0;break}b[f+2440+(l<<2)>>1]=0;l=l+1|0}while(1){if((l|0)==19)break;b[f+2684+(l<<2)>>1]=0;l=l+1|0}b[f+1172>>1]=1;c[f+5804>>2]=0;c[f+5800>>2]=0;c[f+5808>>2]=0;c[f+5792>>2]=0;s=c[g>>2]|0;c[s+60>>2]=c[s+44>>2]<<1;r=s+76|0;d=s+68|0;b[(c[d>>2]|0)+((c[r>>2]|0)+-1<<1)>>1]=0;$a(c[d>>2]|0,0,(c[r>>2]<<1)+-2|0)|0;r=c[s+132>>2]|0;c[s+128>>2]=e[8+(r*12|0)+2>>1];c[s+140>>2]=e[8+(r*12|0)>>1];c[s+144>>2]=e[8+(r*12|0)+4>>1];c[s+124>>2]=e[8+(r*12|0)+6>>1];c[s+108>>2]=0;c[s+92>>2]=0;c[s+116>>2]=0;c[s+5812>>2]=0;c[s+120>>2]=2;c[s+96>>2]=2;c[s+104>>2]=0;c[s+72>>2]=0;s=0;return s|0}c[h+4>>2]=666;c[p>>2]=13913;Ea(d)|0;s=-4;return s|0}function Ea(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;if(!a){g=-2;return g|0}f=a+28|0;b=c[f>>2]|0;if(!b){g=-2;return g|0}g=c[b+4>>2]|0;switch(g|0){case 666:case 113:case 103:case 91:case 73:case 69:case 42:break;default:{g=-2;return g|0}}d=c[b+8>>2]|0;if(d){la[c[a+36>>2]&1](c[a+40>>2]|0,d);b=c[f>>2]|0}d=c[b+68>>2]|0;if(d){la[c[a+36>>2]&1](c[a+40>>2]|0,d);b=c[f>>2]|0}d=c[b+64>>2]|0;if(d){la[c[a+36>>2]&1](c[a+40>>2]|0,d);b=c[f>>2]|0}d=c[b+56>>2]|0;if(!d){e=a+40|0;d=a+36|0}else{b=a+36|0;e=a+40|0;la[c[b>>2]&1](c[e>>2]|0,d);d=b;b=c[f>>2]|0}la[c[d>>2]&1](c[e>>2]|0,b);c[f>>2]=0;g=(g|0)==113?-3:0;return g|0}function Fa(d,f){d=d|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;l=(c[d+12>>2]|0)+-5|0;l=l>>>0<65535?l:65535;n=d+116|0;r=d+108|0;s=d+92|0;q=d+56|0;p=d+44|0;while(1){g=c[n>>2]|0;if(g>>>0<2){Ga(d);g=c[n>>2]|0;h=(g|0)==0;if(!((f|0)!=0|h^1)){g=0;h=55;break}if(h){h=30;break}}g=(c[r>>2]|0)+g|0;c[r>>2]=g;c[n>>2]=0;i=c[s>>2]|0;h=i+l|0;if(!((g|0)!=0&g>>>0<h>>>0)){c[n>>2]=g-h;c[r>>2]=h;if((i|0)>-1)g=(c[q>>2]|0)+i|0;else g=0;Oa(d,g,l,0);c[s>>2]=c[r>>2];j=c[d>>2]|0;k=c[j+28>>2]|0;g=k+5820|0;h=c[g>>2]|0;do if((h|0)!=16)if((h|0)>7){i=k+5816|0;v=b[i>>1]&255;h=k+20|0;u=c[h>>2]|0;c[h>>2]=u+1;a[(c[k+8>>2]|0)+u>>0]=v;b[i>>1]=(e[i>>1]|0)>>>8;c[g>>2]=(c[g>>2]|0)+-8;break}else{h=k+20|0;break}else{v=k+5816|0;u=b[v>>1]&255;h=k+20|0;w=c[h>>2]|0;c[h>>2]=w+1;i=k+8|0;a[(c[i>>2]|0)+w>>0]=u;w=(e[v>>1]|0)>>>8&255;u=c[h>>2]|0;c[h>>2]=u+1;a[(c[i>>2]|0)+u>>0]=w;b[v>>1]=0;c[g>>2]=0}while(0);g=c[h>>2]|0;i=j+16|0;w=c[i>>2]|0;g=g>>>0>w>>>0?w:g;if(g|0?(w=j+12|0,o=k+16|0,cb(c[w>>2]|0,c[o>>2]|0,g|0)|0,c[w>>2]=(c[w>>2]|0)+g,c[o>>2]=(c[o>>2]|0)+g,w=j+20|0,c[w>>2]=(c[w>>2]|0)+g,c[i>>2]=(c[i>>2]|0)-g,w=c[h>>2]|0,c[h>>2]=w-g,(w|0)==(g|0)):0)c[o>>2]=c[k+8>>2];if(!(c[(c[d>>2]|0)+16>>2]|0)){g=0;h=55;break}g=c[r>>2]|0;i=c[s>>2]|0}h=g-i|0;if(h>>>0<((c[p>>2]|0)+-262|0)>>>0)continue;if((i|0)>-1)g=(c[q>>2]|0)+i|0;else g=0;Oa(d,g,h,0);c[s>>2]=c[r>>2];j=c[d>>2]|0;k=c[j+28>>2]|0;g=k+5820|0;h=c[g>>2]|0;do if((h|0)!=16)if((h|0)>7){w=k+5816|0;u=b[w>>1]&255;h=k+20|0;v=c[h>>2]|0;c[h>>2]=v+1;a[(c[k+8>>2]|0)+v>>0]=u;b[w>>1]=(e[w>>1]|0)>>>8;c[g>>2]=(c[g>>2]|0)+-8;break}else{h=k+20|0;break}else{w=k+5816|0;v=b[w>>1]&255;h=k+20|0;i=c[h>>2]|0;c[h>>2]=i+1;u=k+8|0;a[(c[u>>2]|0)+i>>0]=v;i=(e[w>>1]|0)>>>8&255;v=c[h>>2]|0;c[h>>2]=v+1;a[(c[u>>2]|0)+v>>0]=i;b[w>>1]=0;c[g>>2]=0}while(0);g=c[h>>2]|0;i=j+16|0;w=c[i>>2]|0;g=g>>>0>w>>>0?w:g;if(g|0?(w=j+12|0,m=k+16|0,cb(c[w>>2]|0,c[m>>2]|0,g|0)|0,c[w>>2]=(c[w>>2]|0)+g,c[m>>2]=(c[m>>2]|0)+g,w=j+20|0,c[w>>2]=(c[w>>2]|0)+g,c[i>>2]=(c[i>>2]|0)-g,w=c[h>>2]|0,c[h>>2]=w-g,(w|0)==(g|0)):0)c[m>>2]=c[k+8>>2];if(!(c[(c[d>>2]|0)+16>>2]|0)){g=0;h=55;break}}if((h|0)==30){c[d+5812>>2]=0;if((f|0)==4){h=c[s>>2]|0;if((h|0)>-1)g=(c[q>>2]|0)+h|0;else g=0;Oa(d,g,(c[r>>2]|0)-h|0,1);c[s>>2]=c[r>>2];k=c[d>>2]|0;l=c[k+28>>2]|0;g=l+5820|0;h=c[g>>2]|0;do if((h|0)!=16)if((h|0)>7){w=l+5816|0;u=b[w>>1]&255;h=l+20|0;v=c[h>>2]|0;c[h>>2]=v+1;a[(c[l+8>>2]|0)+v>>0]=u;b[w>>1]=(e[w>>1]|0)>>>8;c[g>>2]=(c[g>>2]|0)+-8;break}else{h=l+20|0;break}else{w=l+5816|0;v=b[w>>1]&255;h=l+20|0;t=c[h>>2]|0;c[h>>2]=t+1;u=l+8|0;a[(c[u>>2]|0)+t>>0]=v;t=(e[w>>1]|0)>>>8&255;v=c[h>>2]|0;c[h>>2]=v+1;a[(c[u>>2]|0)+v>>0]=t;b[w>>1]=0;c[g>>2]=0}while(0);g=c[h>>2]|0;i=k+16|0;w=c[i>>2]|0;g=g>>>0>w>>>0?w:g;if(!g){w=c[d>>2]|0;w=w+16|0;w=c[w>>2]|0;w=(w|0)==0;w=w?2:3;return w|0}w=k+12|0;j=l+16|0;cb(c[w>>2]|0,c[j>>2]|0,g|0)|0;c[w>>2]=(c[w>>2]|0)+g;c[j>>2]=(c[j>>2]|0)+g;w=k+20|0;c[w>>2]=(c[w>>2]|0)+g;c[i>>2]=(c[i>>2]|0)-g;w=c[h>>2]|0;c[h>>2]=w-g;if((w|0)!=(g|0)){w=c[d>>2]|0;w=w+16|0;w=c[w>>2]|0;w=(w|0)==0;w=w?2:3;return w|0}c[j>>2]=c[l+8>>2];w=c[d>>2]|0;w=w+16|0;w=c[w>>2]|0;w=(w|0)==0;w=w?2:3;return w|0}h=c[r>>2]|0;i=c[s>>2]|0;if((h|0)>(i|0)){if((i|0)>-1)g=(c[q>>2]|0)+i|0;else g=0;Oa(d,g,h-i|0,0);c[s>>2]=c[r>>2];j=c[d>>2]|0;k=c[j+28>>2]|0;g=k+5820|0;h=c[g>>2]|0;do if((h|0)!=16)if((h|0)>7){w=k+5816|0;u=b[w>>1]&255;h=k+20|0;v=c[h>>2]|0;c[h>>2]=v+1;a[(c[k+8>>2]|0)+v>>0]=u;b[w>>1]=(e[w>>1]|0)>>>8;c[g>>2]=(c[g>>2]|0)+-8;break}else{h=k+20|0;break}else{w=k+5816|0;v=b[w>>1]&255;h=k+20|0;s=c[h>>2]|0;c[h>>2]=s+1;u=k+8|0;a[(c[u>>2]|0)+s>>0]=v;s=(e[w>>1]|0)>>>8&255;v=c[h>>2]|0;c[h>>2]=v+1;a[(c[u>>2]|0)+v>>0]=s;b[w>>1]=0;c[g>>2]=0}while(0);g=c[h>>2]|0;i=j+16|0;w=c[i>>2]|0;g=g>>>0>w>>>0?w:g;if(g|0?(w=j+12|0,t=k+16|0,cb(c[w>>2]|0,c[t>>2]|0,g|0)|0,c[w>>2]=(c[w>>2]|0)+g,c[t>>2]=(c[t>>2]|0)+g,w=j+20|0,c[w>>2]=(c[w>>2]|0)+g,c[i>>2]=(c[i>>2]|0)-g,w=c[h>>2]|0,c[h>>2]=w-g,(w|0)==(g|0)):0)c[t>>2]=c[k+8>>2];if(!(c[(c[d>>2]|0)+16>>2]|0)){w=0;return w|0}}w=1;return w|0}else if((h|0)==55)return g|0;return 0}function Ga(a){a=a|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0;m=a+44|0;n=c[m>>2]|0;y=a+60|0;z=a+116|0;A=a+108|0;B=a+56|0;u=a+5812|0;v=a+72|0;w=a+88|0;x=a+84|0;o=a+68|0;p=a+52|0;q=a+64|0;r=a+112|0;s=a+92|0;t=a+76|0;f=c[z>>2]|0;g=n;while(1){l=c[A>>2]|0;h=(c[y>>2]|0)-f-l|0;if(l>>>0>=(n+(g+-262)|0)>>>0){g=c[B>>2]|0;cb(g|0,g+n|0,n|0)|0;c[r>>2]=(c[r>>2]|0)-n;c[A>>2]=(c[A>>2]|0)-n;c[s>>2]=(c[s>>2]|0)-n;g=c[t>>2]|0;f=g;g=(c[o>>2]|0)+(g<<1)|0;do{g=g+-2|0;l=e[g>>1]|0;b[g>>1]=l>>>0<n>>>0?0:l-n&65535;f=f+-1|0}while((f|0)!=0);f=n;g=(c[q>>2]|0)+(n<<1)|0;do{g=g+-2|0;l=e[g>>1]|0;b[g>>1]=l>>>0<n>>>0?0:l-n&65535;f=f+-1|0}while((f|0)!=0);h=h+n|0}i=c[a>>2]|0;j=i+4|0;k=c[j>>2]|0;if(!k)break;f=c[z>>2]|0;l=(c[B>>2]|0)+(c[A>>2]|0)+f|0;g=k>>>0>h>>>0?h:k;if(!g)g=0;else{c[j>>2]=k-g;cb(l|0,c[i>>2]|0,g|0)|0;switch(c[(c[i+28>>2]|0)+24>>2]|0){case 1:{k=i+48|0;c[k>>2]=Wa(c[k>>2]|0,l,g)|0;break}case 2:{k=i+48|0;c[k>>2]=Xa(c[k>>2]|0,l,g)|0;break}default:{}}c[i>>2]=(c[i>>2]|0)+g;f=i+8|0;c[f>>2]=(c[f>>2]|0)+g;f=c[z>>2]|0}f=f+g|0;c[z>>2]=f;g=c[u>>2]|0;a:do if((f+g|0)>>>0>2){h=(c[A>>2]|0)-g|0;l=c[B>>2]|0;k=d[l+h>>0]|0;c[v>>2]=k;c[v>>2]=(k<<c[w>>2]^(d[l+(h+1)>>0]|0))&c[x>>2];while(1){if(!g)break a;g=(c[v>>2]<<c[w>>2]^(d[(c[B>>2]|0)+(h+2)>>0]|0))&c[x>>2];c[v>>2]=g;b[(c[q>>2]|0)+((h&c[p>>2])<<1)>>1]=b[(c[o>>2]|0)+(g<<1)>>1]|0;b[(c[o>>2]|0)+(c[v>>2]<<1)>>1]=h;g=(c[u>>2]|0)+-1|0;c[u>>2]=g;f=c[z>>2]|0;if((f+g|0)>>>0<3)break a;h=h+1|0}}while(0);if(f>>>0>=262)break;if(!(c[(c[a>>2]|0)+4>>2]|0))break;g=c[m>>2]|0}h=a+5824|0;i=c[h>>2]|0;g=c[y>>2]|0;if(g>>>0<=i>>>0)return;f=(c[A>>2]|0)+(c[z>>2]|0)|0;if(i>>>0<f>>>0){A=g-f|0;A=A>>>0>258?258:A;$a((c[B>>2]|0)+f|0,0,A|0)|0;c[h>>2]=f+A;return}f=f+258|0;if(f>>>0<=i>>>0)return;A=f-i|0;z=g-i|0;A=A>>>0>z>>>0?z:A;$a((c[B>>2]|0)+i|0,0,A|0)|0;c[h>>2]=(c[h>>2]|0)+A;return}function Ha(f,g){f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;m=f+116|0;n=f+72|0;u=f+88|0;E=f+108|0;C=f+56|0;w=f+84|0;x=f+68|0;y=f+52|0;z=f+64|0;A=f+44|0;o=f+96|0;p=f+112|0;B=f+5792|0;q=f+5796|0;r=f+5784|0;s=f+5788|0;t=f+128|0;D=f+92|0;while(1){if((c[m>>2]|0)>>>0<262){Ga(f);h=c[m>>2]|0;if(!(h>>>0>261|(g|0)!=0)){h=0;i=54;break}if(!h){i=29;break}if(h>>>0<=2)i=9;else i=6}else i=6;if((i|0)==6){i=0;h=c[E>>2]|0;l=(c[n>>2]<<c[u>>2]^(d[(c[C>>2]|0)+(h+2)>>0]|0))&c[w>>2];c[n>>2]=l;l=b[(c[x>>2]|0)+(l<<1)>>1]|0;b[(c[z>>2]|0)+((h&c[y>>2])<<1)>>1]=l;h=l&65535;b[(c[x>>2]|0)+(c[n>>2]<<1)>>1]=c[E>>2];if(l<<16>>16!=0?((c[E>>2]|0)-h|0)>>>0<=((c[A>>2]|0)+-262|0)>>>0:0){h=Ia(f,h)|0;c[o>>2]=h}else i=9}if((i|0)==9)h=c[o>>2]|0;do if(h>>>0>2){i=h+253|0;h=(c[E>>2]|0)-(c[p>>2]|0)&65535;b[(c[q>>2]|0)+(c[B>>2]<<1)>>1]=h;l=c[B>>2]|0;c[B>>2]=l+1;a[(c[r>>2]|0)+l>>0]=i;h=h+-1<<16>>16;i=f+148+((d[13625+(i&255)>>0]|0|256)+1<<2)|0;b[i>>1]=(b[i>>1]|0)+1<<16>>16;i=h&65535;i=f+2440+((d[13113+((h&65535)<256?i:(i>>>7)+256|0)>>0]|0)<<2)|0;b[i>>1]=(b[i>>1]|0)+1<<16>>16;i=(c[B>>2]|0)==((c[s>>2]|0)+-1|0)&1;h=c[o>>2]|0;l=(c[m>>2]|0)-h|0;c[m>>2]=l;if(!(l>>>0>2?h>>>0<=(c[t>>2]|0)>>>0:0)){j=(c[E>>2]|0)+h|0;c[E>>2]=j;c[o>>2]=0;h=c[C>>2]|0;l=d[h+j>>0]|0;c[n>>2]=l;c[n>>2]=(l<<c[u>>2]^(d[h+(j+1)>>0]|0))&c[w>>2];h=i;break}c[o>>2]=h+-1;do{k=c[E>>2]|0;l=k+1|0;c[E>>2]=l;k=(c[n>>2]<<c[u>>2]^(d[(c[C>>2]|0)+(k+3)>>0]|0))&c[w>>2];c[n>>2]=k;b[(c[z>>2]|0)+((l&c[y>>2])<<1)>>1]=b[(c[x>>2]|0)+(k<<1)>>1]|0;b[(c[x>>2]|0)+(c[n>>2]<<1)>>1]=c[E>>2];l=(c[o>>2]|0)+-1|0;c[o>>2]=l}while((l|0)!=0);j=(c[E>>2]|0)+1|0;c[E>>2]=j;h=i}else{h=a[(c[C>>2]|0)+(c[E>>2]|0)>>0]|0;b[(c[q>>2]|0)+(c[B>>2]<<1)>>1]=0;j=c[B>>2]|0;c[B>>2]=j+1;a[(c[r>>2]|0)+j>>0]=h;h=f+148+((h&255)<<2)|0;b[h>>1]=(b[h>>1]|0)+1<<16>>16;h=(c[B>>2]|0)==((c[s>>2]|0)+-1|0)&1;c[m>>2]=(c[m>>2]|0)+-1;j=(c[E>>2]|0)+1|0;c[E>>2]=j}while(0);if(!h)continue;h=c[D>>2]|0;if((h|0)>-1)i=(c[C>>2]|0)+h|0;else i=0;Oa(f,i,j-h|0,0);c[D>>2]=c[E>>2];k=c[f>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){j=l+5816|0;H=b[j>>1]&255;i=l+20|0;G=c[i>>2]|0;c[i>>2]=G+1;a[(c[l+8>>2]|0)+G>>0]=H;b[j>>1]=(e[j>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{H=l+5816|0;G=b[H>>1]&255;i=l+20|0;I=c[i>>2]|0;c[i>>2]=I+1;j=l+8|0;a[(c[j>>2]|0)+I>>0]=G;I=(e[H>>1]|0)>>>8&255;G=c[i>>2]|0;c[i>>2]=G+1;a[(c[j>>2]|0)+G>>0]=I;b[H>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;I=c[j>>2]|0;h=h>>>0>I>>>0?I:h;if(h|0?(I=k+12|0,v=l+16|0,cb(c[I>>2]|0,c[v>>2]|0,h|0)|0,c[I>>2]=(c[I>>2]|0)+h,c[v>>2]=(c[v>>2]|0)+h,I=k+20|0,c[I>>2]=(c[I>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,I=c[i>>2]|0,c[i>>2]=I-h,(I|0)==(h|0)):0)c[v>>2]=c[l+8>>2];if(!(c[(c[f>>2]|0)+16>>2]|0)){h=0;i=54;break}}if((i|0)==29){j=c[E>>2]|0;c[f+5812>>2]=j>>>0<2?j:2;if((g|0)==4){i=c[D>>2]|0;if((i|0)>-1)h=(c[C>>2]|0)+i|0;else h=0;Oa(f,h,j-i|0,1);c[D>>2]=c[E>>2];l=c[f>>2]|0;m=c[l+28>>2]|0;h=m+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){I=m+5816|0;G=b[I>>1]&255;i=m+20|0;H=c[i>>2]|0;c[i>>2]=H+1;a[(c[m+8>>2]|0)+H>>0]=G;b[I>>1]=(e[I>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=m+20|0;break}else{I=m+5816|0;H=b[I>>1]&255;i=m+20|0;F=c[i>>2]|0;c[i>>2]=F+1;G=m+8|0;a[(c[G>>2]|0)+F>>0]=H;F=(e[I>>1]|0)>>>8&255;H=c[i>>2]|0;c[i>>2]=H+1;a[(c[G>>2]|0)+H>>0]=F;b[I>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=l+16|0;I=c[j>>2]|0;h=h>>>0>I>>>0?I:h;if(!h){I=c[f>>2]|0;I=I+16|0;I=c[I>>2]|0;I=(I|0)==0;I=I?2:3;return I|0}I=l+12|0;k=m+16|0;cb(c[I>>2]|0,c[k>>2]|0,h|0)|0;c[I>>2]=(c[I>>2]|0)+h;c[k>>2]=(c[k>>2]|0)+h;I=l+20|0;c[I>>2]=(c[I>>2]|0)+h;c[j>>2]=(c[j>>2]|0)-h;I=c[i>>2]|0;c[i>>2]=I-h;if((I|0)!=(h|0)){I=c[f>>2]|0;I=I+16|0;I=c[I>>2]|0;I=(I|0)==0;I=I?2:3;return I|0}c[k>>2]=c[m+8>>2];I=c[f>>2]|0;I=I+16|0;I=c[I>>2]|0;I=(I|0)==0;I=I?2:3;return I|0}if(c[B>>2]|0){i=c[D>>2]|0;if((i|0)>-1)h=(c[C>>2]|0)+i|0;else h=0;Oa(f,h,j-i|0,0);c[D>>2]=c[E>>2];k=c[f>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){I=l+5816|0;G=b[I>>1]&255;i=l+20|0;H=c[i>>2]|0;c[i>>2]=H+1;a[(c[l+8>>2]|0)+H>>0]=G;b[I>>1]=(e[I>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{I=l+5816|0;H=b[I>>1]&255;i=l+20|0;E=c[i>>2]|0;c[i>>2]=E+1;G=l+8|0;a[(c[G>>2]|0)+E>>0]=H;E=(e[I>>1]|0)>>>8&255;H=c[i>>2]|0;c[i>>2]=H+1;a[(c[G>>2]|0)+H>>0]=E;b[I>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;I=c[j>>2]|0;h=h>>>0>I>>>0?I:h;if(h|0?(I=k+12|0,F=l+16|0,cb(c[I>>2]|0,c[F>>2]|0,h|0)|0,c[I>>2]=(c[I>>2]|0)+h,c[F>>2]=(c[F>>2]|0)+h,I=k+20|0,c[I>>2]=(c[I>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,I=c[i>>2]|0,c[i>>2]=I-h,(I|0)==(h|0)):0)c[F>>2]=c[l+8>>2];if(!(c[(c[f>>2]|0)+16>>2]|0)){I=0;return I|0}}I=1;return I|0}else if((i|0)==54)return h|0;return 0}function Ia(b,d){b=b|0;d=d|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;j=c[b+124>>2]|0;q=c[b+56>>2]|0;n=c[b+108>>2]|0;h=q+n|0;i=c[b+120>>2]|0;m=c[b+144>>2]|0;l=(c[b+44>>2]|0)+-262|0;l=n>>>0>l>>>0?n-l|0:0;n=c[b+64>>2]|0;o=c[b+52>>2]|0;p=h+258|0;v=c[b+116>>2]|0;m=m>>>0>v>>>0?v:m;r=b+112|0;s=p;t=p+-258|0;k=d;g=i;j=i>>>0<(c[b+140>>2]|0)>>>0?j:j>>>2;b=h;f=a[h+i>>0]|0;i=a[h+(i+-1)>>0]|0;while(1){d=q+k|0;if((((a[d+g>>0]|0)==f<<24>>24?(a[d+(g+-1)>>0]|0)==i<<24>>24:0)?(a[d>>0]|0)==(a[b>>0]|0):0)?(u=d+1|0,(a[u>>0]|0)==(a[b+1>>0]|0)):0){h=u+1|0;b=b+2|0;while(1){d=b+1|0;if((a[d>>0]|0)!=(a[h+1>>0]|0))break;d=b+2|0;if((a[d>>0]|0)!=(a[h+2>>0]|0))break;d=b+3|0;if((a[d>>0]|0)!=(a[h+3>>0]|0))break;d=b+4|0;if((a[d>>0]|0)!=(a[h+4>>0]|0))break;d=b+5|0;if((a[d>>0]|0)!=(a[h+5>>0]|0))break;d=b+6|0;if((a[d>>0]|0)!=(a[h+6>>0]|0))break;d=b+7|0;if((a[d>>0]|0)!=(a[h+7>>0]|0))break;d=b+8|0;h=h+8|0;if(!(d>>>0<p>>>0?(a[d>>0]|0)==(a[h>>0]|0):0))break;else b=d}b=d-s|0;d=b+258|0;if((d|0)>(g|0)){c[r>>2]=k;if((d|0)>=(m|0)){b=20;break}g=d;h=t;f=a[t+d>>0]|0;d=a[t+(b+257)>>0]|0}else{h=t;d=i}}else{h=b;d=i}k=e[n+((k&o)<<1)>>1]|0;if(k>>>0<=l>>>0){d=g;b=20;break}j=j+-1|0;if(!j){d=g;b=20;break}else{b=h;i=d}}if((b|0)==20)return (d>>>0>v>>>0?v:d)|0;return 0}function Ja(f,g){f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0;n=f+116|0;o=f+72|0;x=f+88|0;L=f+108|0;J=f+56|0;C=f+84|0;D=f+68|0;E=f+52|0;F=f+64|0;G=f+96|0;p=f+120|0;q=f+112|0;r=f+100|0;H=f+5792|0;s=f+5796|0;t=f+5784|0;u=f+5788|0;v=f+104|0;K=f+92|0;w=f+128|0;y=f+44|0;A=f+136|0;a:while(1){h=c[n>>2]|0;while(1){if(h>>>0<262){Ga(f);h=c[n>>2]|0;if(!(h>>>0>261|(g|0)!=0)){h=0;I=74;break a}if(!h){I=47;break a}if(h>>>0<=2){c[p>>2]=c[G>>2];c[r>>2]=c[q>>2];c[G>>2]=2;h=2}else I=8}else I=8;do if((I|0)==8){I=0;m=c[L>>2]|0;h=(c[o>>2]<<c[x>>2]^(d[(c[J>>2]|0)+(m+2)>>0]|0))&c[C>>2];c[o>>2]=h;h=b[(c[D>>2]|0)+(h<<1)>>1]|0;b[(c[F>>2]|0)+((m&c[E>>2])<<1)>>1]=h;h=h&65535;b[(c[D>>2]|0)+(c[o>>2]<<1)>>1]=c[L>>2];m=c[G>>2]|0;c[p>>2]=m;c[r>>2]=c[q>>2];c[G>>2]=2;if(((h|0)!=0?m>>>0<(c[w>>2]|0)>>>0:0)?((c[L>>2]|0)-h|0)>>>0<=((c[y>>2]|0)+-262|0)>>>0:0){h=Ia(f,h)|0;c[G>>2]=h;if(h>>>0<6){if((c[A>>2]|0)!=1){if((h|0)!=3)break;if(((c[L>>2]|0)-(c[q>>2]|0)|0)>>>0<=4096){h=3;break}}c[G>>2]=2;h=2}}else h=2}while(0);i=c[p>>2]|0;if(!(i>>>0<3|h>>>0>i>>>0))break;if(!(c[v>>2]|0)){c[v>>2]=1;c[L>>2]=(c[L>>2]|0)+1;h=(c[n>>2]|0)+-1|0;c[n>>2]=h;continue}m=a[(c[J>>2]|0)+((c[L>>2]|0)+-1)>>0]|0;b[(c[s>>2]|0)+(c[H>>2]<<1)>>1]=0;l=c[H>>2]|0;c[H>>2]=l+1;a[(c[t>>2]|0)+l>>0]=m;m=f+148+((m&255)<<2)|0;b[m>>1]=(b[m>>1]|0)+1<<16>>16;if((c[H>>2]|0)==((c[u>>2]|0)+-1|0)){h=c[K>>2]|0;if((h|0)>-1)i=(c[J>>2]|0)+h|0;else i=0;Oa(f,i,(c[L>>2]|0)-h|0,0);c[K>>2]=c[L>>2];k=c[f>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){m=l+5816|0;N=b[m>>1]&255;i=l+20|0;j=c[i>>2]|0;c[i>>2]=j+1;a[(c[l+8>>2]|0)+j>>0]=N;b[m>>1]=(e[m>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{N=l+5816|0;m=b[N>>1]&255;i=l+20|0;O=c[i>>2]|0;c[i>>2]=O+1;j=l+8|0;a[(c[j>>2]|0)+O>>0]=m;O=(e[N>>1]|0)>>>8&255;m=c[i>>2]|0;c[i>>2]=m+1;a[(c[j>>2]|0)+m>>0]=O;b[N>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;O=c[j>>2]|0;h=h>>>0>O>>>0?O:h;if(h|0?(O=k+12|0,B=l+16|0,cb(c[O>>2]|0,c[B>>2]|0,h|0)|0,c[O>>2]=(c[O>>2]|0)+h,c[B>>2]=(c[B>>2]|0)+h,O=k+20|0,c[O>>2]=(c[O>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,O=c[i>>2]|0,c[i>>2]=O-h,(O|0)==(h|0)):0)c[B>>2]=c[l+8>>2]}c[L>>2]=(c[L>>2]|0)+1;h=(c[n>>2]|0)+-1|0;c[n>>2]=h;if(!(c[(c[f>>2]|0)+16>>2]|0)){h=0;I=74;break a}}l=c[L>>2]|0;m=l+(c[n>>2]|0)+-3|0;k=i+253|0;l=l+65535-(c[r>>2]|0)&65535;b[(c[s>>2]|0)+(c[H>>2]<<1)>>1]=l;h=c[H>>2]|0;c[H>>2]=h+1;a[(c[t>>2]|0)+h>>0]=k;l=l+-1<<16>>16;k=f+148+((d[13625+(k&255)>>0]|0|256)+1<<2)|0;b[k>>1]=(b[k>>1]|0)+1<<16>>16;k=l&65535;k=f+2440+((d[13113+((l&65535)<256?k:(k>>>7)+256|0)>>0]|0)<<2)|0;b[k>>1]=(b[k>>1]|0)+1<<16>>16;k=c[H>>2]|0;l=(c[u>>2]|0)+-1|0;h=c[p>>2]|0;c[n>>2]=(c[n>>2]|0)-(h+-1);h=h+-2|0;c[p>>2]=h;do{i=c[L>>2]|0;j=i+1|0;c[L>>2]=j;if(j>>>0<=m>>>0){h=(c[o>>2]<<c[x>>2]^(d[(c[J>>2]|0)+(i+3)>>0]|0))&c[C>>2];c[o>>2]=h;b[(c[F>>2]|0)+((j&c[E>>2])<<1)>>1]=b[(c[D>>2]|0)+(h<<1)>>1]|0;b[(c[D>>2]|0)+(c[o>>2]<<1)>>1]=c[L>>2];h=c[p>>2]|0}h=h+-1|0;c[p>>2]=h}while((h|0)!=0);c[v>>2]=0;c[G>>2]=2;j=(c[L>>2]|0)+1|0;c[L>>2]=j;if((k|0)!=(l|0))continue;h=c[K>>2]|0;if((h|0)>-1)i=(c[J>>2]|0)+h|0;else i=0;Oa(f,i,j-h|0,0);c[K>>2]=c[L>>2];k=c[f>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){O=l+5816|0;m=b[O>>1]&255;i=l+20|0;N=c[i>>2]|0;c[i>>2]=N+1;a[(c[l+8>>2]|0)+N>>0]=m;b[O>>1]=(e[O>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{O=l+5816|0;N=b[O>>1]&255;i=l+20|0;j=c[i>>2]|0;c[i>>2]=j+1;m=l+8|0;a[(c[m>>2]|0)+j>>0]=N;j=(e[O>>1]|0)>>>8&255;N=c[i>>2]|0;c[i>>2]=N+1;a[(c[m>>2]|0)+N>>0]=j;b[O>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;O=c[j>>2]|0;h=h>>>0>O>>>0?O:h;if(h|0?(O=k+12|0,z=l+16|0,cb(c[O>>2]|0,c[z>>2]|0,h|0)|0,c[O>>2]=(c[O>>2]|0)+h,c[z>>2]=(c[z>>2]|0)+h,O=k+20|0,c[O>>2]=(c[O>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,O=c[i>>2]|0,c[i>>2]=O-h,(O|0)==(h|0)):0)c[z>>2]=c[l+8>>2];if(!(c[(c[f>>2]|0)+16>>2]|0)){h=0;I=74;break}}if((I|0)==47){if(c[v>>2]|0){O=a[(c[J>>2]|0)+((c[L>>2]|0)+-1)>>0]|0;b[(c[s>>2]|0)+(c[H>>2]<<1)>>1]=0;N=c[H>>2]|0;c[H>>2]=N+1;a[(c[t>>2]|0)+N>>0]=O;O=f+148+((O&255)<<2)|0;b[O>>1]=(b[O>>1]|0)+1<<16>>16;c[v>>2]=0}j=c[L>>2]|0;c[f+5812>>2]=j>>>0<2?j:2;if((g|0)==4){i=c[K>>2]|0;if((i|0)>-1)h=(c[J>>2]|0)+i|0;else h=0;Oa(f,h,j-i|0,1);c[K>>2]=c[L>>2];l=c[f>>2]|0;m=c[l+28>>2]|0;h=m+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){O=m+5816|0;M=b[O>>1]&255;i=m+20|0;N=c[i>>2]|0;c[i>>2]=N+1;a[(c[m+8>>2]|0)+N>>0]=M;b[O>>1]=(e[O>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=m+20|0;break}else{O=m+5816|0;N=b[O>>1]&255;i=m+20|0;L=c[i>>2]|0;c[i>>2]=L+1;M=m+8|0;a[(c[M>>2]|0)+L>>0]=N;L=(e[O>>1]|0)>>>8&255;N=c[i>>2]|0;c[i>>2]=N+1;a[(c[M>>2]|0)+N>>0]=L;b[O>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=l+16|0;O=c[j>>2]|0;h=h>>>0>O>>>0?O:h;if(!h){O=c[f>>2]|0;O=O+16|0;O=c[O>>2]|0;O=(O|0)==0;O=O?2:3;return O|0}O=l+12|0;k=m+16|0;cb(c[O>>2]|0,c[k>>2]|0,h|0)|0;c[O>>2]=(c[O>>2]|0)+h;c[k>>2]=(c[k>>2]|0)+h;O=l+20|0;c[O>>2]=(c[O>>2]|0)+h;c[j>>2]=(c[j>>2]|0)-h;O=c[i>>2]|0;c[i>>2]=O-h;if((O|0)!=(h|0)){O=c[f>>2]|0;O=O+16|0;O=c[O>>2]|0;O=(O|0)==0;O=O?2:3;return O|0}c[k>>2]=c[m+8>>2];O=c[f>>2]|0;O=O+16|0;O=c[O>>2]|0;O=(O|0)==0;O=O?2:3;return O|0}if(c[H>>2]|0){i=c[K>>2]|0;if((i|0)>-1)h=(c[J>>2]|0)+i|0;else h=0;Oa(f,h,j-i|0,0);c[K>>2]=c[L>>2];k=c[f>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){O=l+5816|0;L=b[O>>1]&255;i=l+20|0;N=c[i>>2]|0;c[i>>2]=N+1;a[(c[l+8>>2]|0)+N>>0]=L;b[O>>1]=(e[O>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{O=l+5816|0;N=b[O>>1]&255;i=l+20|0;K=c[i>>2]|0;c[i>>2]=K+1;L=l+8|0;a[(c[L>>2]|0)+K>>0]=N;K=(e[O>>1]|0)>>>8&255;N=c[i>>2]|0;c[i>>2]=N+1;a[(c[L>>2]|0)+N>>0]=K;b[O>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;O=c[j>>2]|0;h=h>>>0>O>>>0?O:h;if(h|0?(O=k+12|0,M=l+16|0,cb(c[O>>2]|0,c[M>>2]|0,h|0)|0,c[O>>2]=(c[O>>2]|0)+h,c[M>>2]=(c[M>>2]|0)+h,O=k+20|0,c[O>>2]=(c[O>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,O=c[i>>2]|0,c[i>>2]=O-h,(O|0)==(h|0)):0)c[M>>2]=c[l+8>>2];if(!(c[(c[f>>2]|0)+16>>2]|0)){O=0;return O|0}}O=1;return O|0}else if((I|0)==74)return h|0;return 0}function Ka(f,g){f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0;if(!f){f=-2;return f|0}O=f+28|0;P=c[O>>2]|0;if(g>>>0>5|(P|0)==0){f=-2;return f|0}S=f+12|0;do if(c[S>>2]|0){if((c[f>>2]|0)==0?c[f+4>>2]|0:0)break;M=P+4|0;h=c[M>>2]|0;if((h|0)!=666|(g|0)==4){R=f+16|0;if(!(c[R>>2]|0)){c[f+24>>2]=13933;f=-5;return f|0}c[P>>2]=f;N=P+40|0;z=c[N>>2]|0;c[N>>2]=g;do if((h|0)==42){if((c[P+24>>2]|0)!=2){i=(c[P+48>>2]<<12)+-30720|0;if((c[P+136>>2]|0)<=1?(j=c[P+132>>2]|0,(j|0)>=2):0)if((j|0)<6)h=64;else h=(j|0)==6?128:192;else h=0;r=i|h;A=P+108|0;r=(c[A>>2]|0)==0?r:r|32;c[M>>2]=113;i=P+20|0;h=c[i>>2]|0;c[i>>2]=h+1;j=P+8|0;a[(c[j>>2]|0)+h>>0]=r>>>8;h=c[i>>2]|0;c[i>>2]=h+1;a[(c[j>>2]|0)+h>>0]=((r>>>0)%31|0|r)^31;h=f+48|0;if(c[A>>2]|0){A=c[h>>2]|0;r=c[i>>2]|0;c[i>>2]=r+1;a[(c[j>>2]|0)+r>>0]=A>>>24;r=c[i>>2]|0;c[i>>2]=r+1;a[(c[j>>2]|0)+r>>0]=A>>>16;r=c[h>>2]|0;A=c[i>>2]|0;c[i>>2]=A+1;a[(c[j>>2]|0)+A>>0]=r>>>8;A=c[i>>2]|0;c[i>>2]=A+1;a[(c[j>>2]|0)+A>>0]=r}c[h>>2]=1;h=c[M>>2]|0;A=30;break}j=f+48|0;c[j>>2]=0;l=P+20|0;i=c[l>>2]|0;c[l>>2]=i+1;m=P+8|0;a[(c[m>>2]|0)+i>>0]=31;i=c[l>>2]|0;c[l>>2]=i+1;a[(c[m>>2]|0)+i>>0]=-117;i=c[l>>2]|0;c[l>>2]=i+1;a[(c[m>>2]|0)+i>>0]=8;i=P+28|0;h=c[i>>2]|0;if(!h){h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=0;h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=0;h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=0;h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=0;h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=0;h=c[P+132>>2]|0;if((h|0)==9)h=2;else h=((h|0)<2?1:(c[P+136>>2]|0)>1)?4:0;x=c[l>>2]|0;c[l>>2]=x+1;a[(c[m>>2]|0)+x>>0]=h;x=c[l>>2]|0;c[l>>2]=x+1;a[(c[m>>2]|0)+x>>0]=3;c[M>>2]=113;break}A=((c[h>>2]|0)!=0|(c[h+44>>2]|0?2:0)|((c[h+16>>2]|0)==0?0:4)|((c[h+28>>2]|0)==0?0:8)|((c[h+36>>2]|0)==0?0:16))&255;h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=A;h=c[(c[i>>2]|0)+4>>2]&255;A=c[l>>2]|0;c[l>>2]=A+1;a[(c[m>>2]|0)+A>>0]=h;A=(c[(c[i>>2]|0)+4>>2]|0)>>>8&255;h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=A;h=(c[(c[i>>2]|0)+4>>2]|0)>>>16&255;A=c[l>>2]|0;c[l>>2]=A+1;a[(c[m>>2]|0)+A>>0]=h;A=(c[(c[i>>2]|0)+4>>2]|0)>>>24&255;h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=A;h=c[P+132>>2]|0;if((h|0)==9)h=2;else h=((h|0)<2?1:(c[P+136>>2]|0)>1)?4:0;A=c[l>>2]|0;c[l>>2]=A+1;a[(c[m>>2]|0)+A>>0]=h;A=c[(c[i>>2]|0)+12>>2]&255;h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=A;h=c[i>>2]|0;if(c[h+16>>2]|0){h=c[h+20>>2]&255;A=c[l>>2]|0;c[l>>2]=A+1;a[(c[m>>2]|0)+A>>0]=h;A=(c[(c[i>>2]|0)+20>>2]|0)>>>8&255;h=c[l>>2]|0;c[l>>2]=h+1;a[(c[m>>2]|0)+h>>0]=A;h=c[i>>2]|0}if(c[h+44>>2]|0)c[j>>2]=Xa(c[j>>2]|0,c[m>>2]|0,c[l>>2]|0)|0;c[P+32>>2]=0;c[M>>2]=69;A=31}else A=30;while(0);if((A|0)==30)if((h|0)==69)A=31;else A=56;do if((A|0)==31){n=P+28|0;h=c[n>>2]|0;if(!(c[h+16>>2]|0)){c[M>>2]=73;A=57;break}o=P+20|0;r=P+32|0;l=P+12|0;m=f+20|0;p=f+48|0;q=P+8|0;j=c[r>>2]|0;i=c[o>>2]|0;while(1){if(j>>>0>=(c[h+20>>2]&65535)>>>0)break;k=c[o>>2]|0;if((k|0)==(c[l>>2]|0)){if((c[h+44>>2]|0)!=0&k>>>0>i>>>0)c[p>>2]=Xa(c[p>>2]|0,(c[q>>2]|0)+i|0,k-i|0)|0;j=c[O>>2]|0;h=j+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){k=j+5816|0;U=b[k>>1]&255;i=j+20|0;T=c[i>>2]|0;c[i>>2]=T+1;a[(c[j+8>>2]|0)+T>>0]=U;b[k>>1]=(e[k>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=j+20|0;break}else{U=j+5816|0;T=b[U>>1]&255;i=j+20|0;V=c[i>>2]|0;c[i>>2]=V+1;k=j+8|0;a[(c[k>>2]|0)+V>>0]=T;V=(e[U>>1]|0)>>>8&255;T=c[i>>2]|0;c[i>>2]=T+1;a[(c[k>>2]|0)+T>>0]=V;b[U>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;V=c[R>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(s=j+16|0,cb(c[S>>2]|0,c[s>>2]|0,h|0)|0,c[S>>2]=(c[S>>2]|0)+h,c[s>>2]=(c[s>>2]|0)+h,c[m>>2]=(c[m>>2]|0)+h,c[R>>2]=(c[R>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[s>>2]=c[j+8>>2];i=c[o>>2]|0;if((i|0)==(c[l>>2]|0)){A=46;break}h=c[n>>2]|0;j=c[r>>2]|0;k=i}j=a[(c[h+16>>2]|0)+j>>0]|0;c[o>>2]=k+1;a[(c[q>>2]|0)+k>>0]=j;j=(c[r>>2]|0)+1|0;c[r>>2]=j;h=c[n>>2]|0}if((A|0)==46)h=c[n>>2]|0;if((c[h+44>>2]|0)!=0?(t=c[o>>2]|0,t>>>0>i>>>0):0){c[p>>2]=Xa(c[p>>2]|0,(c[q>>2]|0)+i|0,t-i|0)|0;h=c[n>>2]|0}if((c[r>>2]|0)==(c[h+20>>2]|0)){c[r>>2]=0;c[M>>2]=73;A=57;break}else{h=c[M>>2]|0;A=56;break}}while(0);if((A|0)==56)if((h|0)==73)A=57;else A=80;do if((A|0)==57){m=P+28|0;if(!(c[(c[m>>2]|0)+28>>2]|0)){c[M>>2]=91;A=81;break}n=P+20|0;i=c[n>>2]|0;k=P+12|0;l=f+20|0;o=f+48|0;p=P+8|0;q=P+32|0;h=i;while(1){if((h|0)==(c[k>>2]|0)){if(h>>>0>i>>>0?(c[(c[m>>2]|0)+44>>2]|0)!=0:0)c[o>>2]=Xa(c[o>>2]|0,(c[p>>2]|0)+i|0,h-i|0)|0;j=c[O>>2]|0;h=j+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=j+5816|0;T=b[V>>1]&255;i=j+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[j+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=j+20|0;break}else{V=j+5816|0;U=b[V>>1]&255;i=j+20|0;A=c[i>>2]|0;c[i>>2]=A+1;T=j+8|0;a[(c[T>>2]|0)+A>>0]=U;A=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=A;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;V=c[R>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(u=j+16|0,cb(c[S>>2]|0,c[u>>2]|0,h|0)|0,c[S>>2]=(c[S>>2]|0)+h,c[u>>2]=(c[u>>2]|0)+h,c[l>>2]=(c[l>>2]|0)+h,c[R>>2]=(c[R>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[u>>2]=c[j+8>>2];i=c[n>>2]|0;if((i|0)==(c[k>>2]|0)){h=1;break}else h=i}j=c[q>>2]|0;c[q>>2]=j+1;j=a[(c[(c[m>>2]|0)+28>>2]|0)+j>>0]|0;c[n>>2]=h+1;a[(c[p>>2]|0)+h>>0]=j;if(!(j<<24>>24)){h=j&255;break}h=c[n>>2]|0}if(c[(c[m>>2]|0)+44>>2]|0?(v=c[n>>2]|0,v>>>0>i>>>0):0)c[o>>2]=Xa(c[o>>2]|0,(c[p>>2]|0)+i|0,v-i|0)|0;if(!h){c[q>>2]=0;c[M>>2]=91;A=81;break}else{h=c[M>>2]|0;A=80;break}}while(0);if((A|0)==80)if((h|0)==91)A=81;else{k=h;A=104}do if((A|0)==81){n=P+28|0;if(!(c[(c[n>>2]|0)+36>>2]|0)){c[M>>2]=103;A=105;break}o=P+20|0;i=c[o>>2]|0;k=P+12|0;l=f+20|0;p=f+48|0;q=P+8|0;m=P+32|0;h=i;while(1){if((h|0)==(c[k>>2]|0)){if(h>>>0>i>>>0?(c[(c[n>>2]|0)+44>>2]|0)!=0:0)c[p>>2]=Xa(c[p>>2]|0,(c[q>>2]|0)+i|0,h-i|0)|0;j=c[O>>2]|0;h=j+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=j+5816|0;T=b[V>>1]&255;i=j+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[j+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=j+20|0;break}else{V=j+5816|0;U=b[V>>1]&255;i=j+20|0;A=c[i>>2]|0;c[i>>2]=A+1;T=j+8|0;a[(c[T>>2]|0)+A>>0]=U;A=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=A;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;V=c[R>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(w=j+16|0,cb(c[S>>2]|0,c[w>>2]|0,h|0)|0,c[S>>2]=(c[S>>2]|0)+h,c[w>>2]=(c[w>>2]|0)+h,c[l>>2]=(c[l>>2]|0)+h,c[R>>2]=(c[R>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[w>>2]=c[j+8>>2];i=c[o>>2]|0;if((i|0)==(c[k>>2]|0)){h=1;break}else h=i}j=c[m>>2]|0;c[m>>2]=j+1;j=a[(c[(c[n>>2]|0)+36>>2]|0)+j>>0]|0;c[o>>2]=h+1;a[(c[q>>2]|0)+h>>0]=j;if(!(j<<24>>24)){h=j&255;break}h=c[o>>2]|0}if(c[(c[n>>2]|0)+44>>2]|0?(x=c[o>>2]|0,x>>>0>i>>>0):0)c[p>>2]=Xa(c[p>>2]|0,(c[q>>2]|0)+i|0,x-i|0)|0;if(!h){c[M>>2]=103;A=105;break}else{k=c[M>>2]|0;A=104;break}}while(0);if((A|0)==104?(k|0)==103:0)A=105;do if((A|0)==105){if(!(c[(c[P+28>>2]|0)+44>>2]|0)){c[M>>2]=113;break}k=P+20|0;l=P+12|0;if(((c[k>>2]|0)+2|0)>>>0>(c[l>>2]|0)>>>0){j=c[O>>2]|0;h=j+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=j+5816|0;T=b[V>>1]&255;i=j+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[j+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=j+20|0;break}else{V=j+5816|0;U=b[V>>1]&255;i=j+20|0;A=c[i>>2]|0;c[i>>2]=A+1;T=j+8|0;a[(c[T>>2]|0)+A>>0]=U;A=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=A;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;V=c[R>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(y=j+16|0,cb(c[S>>2]|0,c[y>>2]|0,h|0)|0,c[S>>2]=(c[S>>2]|0)+h,c[y>>2]=(c[y>>2]|0)+h,V=f+20|0,c[V>>2]=(c[V>>2]|0)+h,c[R>>2]=(c[R>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[y>>2]=c[j+8>>2]}h=c[k>>2]|0;if((h+2|0)>>>0<=(c[l>>2]|0)>>>0){V=f+48|0;A=c[V>>2]&255;c[k>>2]=h+1;T=P+8|0;a[(c[T>>2]|0)+h>>0]=A;A=(c[V>>2]|0)>>>8&255;U=c[k>>2]|0;c[k>>2]=U+1;a[(c[T>>2]|0)+U>>0]=A;c[V>>2]=0;c[M>>2]=113}}while(0);w=P+20|0;if(!(c[w>>2]|0)){if((c[f+4>>2]|0)==0?!((g|0)==4?1:((g<<1)-((g|0)>4?9:0)|0)>((z<<1)-((z|0)>4?9:0)|0)):0){c[f+24>>2]=13933;V=-5;return V|0}}else{k=c[O>>2]|0;h=k+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=k+5816|0;T=b[V>>1]&255;j=k+20|0;U=c[j>>2]|0;c[j>>2]=U+1;a[(c[k+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{j=k+20|0;break}else{V=k+5816|0;U=b[V>>1]&255;j=k+20|0;A=c[j>>2]|0;c[j>>2]=A+1;T=k+8|0;a[(c[T>>2]|0)+A>>0]=U;A=(e[V>>1]|0)>>>8&255;U=c[j>>2]|0;c[j>>2]=U+1;a[(c[T>>2]|0)+U>>0]=A;b[V>>1]=0;c[h>>2]=0}while(0);i=c[j>>2]|0;h=c[R>>2]|0;i=i>>>0>h>>>0?h:i;if(i){h=k+16|0;cb(c[S>>2]|0,c[h>>2]|0,i|0)|0;c[S>>2]=(c[S>>2]|0)+i;c[h>>2]=(c[h>>2]|0)+i;V=f+20|0;c[V>>2]=(c[V>>2]|0)+i;c[R>>2]=(c[R>>2]|0)-i;V=c[j>>2]|0;c[j>>2]=V-i;if((V|0)==(i|0))c[h>>2]=c[k+8>>2];h=c[R>>2]|0}if(!h){c[N>>2]=-1;V=0;return V|0}}i=(c[M>>2]|0)==666;h=c[f+4>>2]|0;if(i)if(!h)A=137;else{c[f+24>>2]=13933;V=-5;return V|0}else if(!h)A=137;else A=140;do if((A|0)==137)if(!(c[P+116>>2]|0))if(g)if(i)break;else{A=140;break}else{V=0;return V|0}else A=140;while(0);a:do if((A|0)==140){b:do switch(c[P+136>>2]|0){case 2:{m=P+116|0;n=P+96|0;t=P+108|0;s=P+56|0;o=P+5792|0;p=P+5796|0;q=P+5784|0;r=P+5788|0;u=P+92|0;while(1){if((c[m>>2]|0)==0?(Ga(P),(c[m>>2]|0)==0):0)break;c[n>>2]=0;V=a[(c[s>>2]|0)+(c[t>>2]|0)>>0]|0;b[(c[p>>2]|0)+(c[o>>2]<<1)>>1]=0;h=c[o>>2]|0;c[o>>2]=h+1;a[(c[q>>2]|0)+h>>0]=V;V=P+148+((V&255)<<2)|0;b[V>>1]=(b[V>>1]|0)+1<<16>>16;V=(c[o>>2]|0)==((c[r>>2]|0)+-1|0);c[m>>2]=(c[m>>2]|0)+-1;h=(c[t>>2]|0)+1|0;c[t>>2]=h;if(!V)continue;i=c[u>>2]|0;if((i|0)>-1)j=(c[s>>2]|0)+i|0;else j=0;Oa(P,j,h-i|0,0);c[u>>2]=c[t>>2];k=c[P>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=l+5816|0;T=b[V>>1]&255;i=l+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[l+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{V=l+5816|0;U=b[V>>1]&255;i=l+20|0;L=c[i>>2]|0;c[i>>2]=L+1;T=l+8|0;a[(c[T>>2]|0)+L>>0]=U;L=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=L;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;V=c[j>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(V=k+12|0,B=l+16|0,cb(c[V>>2]|0,c[B>>2]|0,h|0)|0,c[V>>2]=(c[V>>2]|0)+h,c[B>>2]=(c[B>>2]|0)+h,V=k+20|0,c[V>>2]=(c[V>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[B>>2]=c[l+8>>2];if(!(c[(c[P>>2]|0)+16>>2]|0)){A=244;break b}}if(g){c[P+5812>>2]=0;if((g|0)==4){i=c[u>>2]|0;if((i|0)>-1)h=(c[s>>2]|0)+i|0;else h=0;Oa(P,h,(c[t>>2]|0)-i|0,1);c[u>>2]=c[t>>2];k=c[P>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=l+5816|0;T=b[V>>1]&255;i=l+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[l+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{V=l+5816|0;U=b[V>>1]&255;i=l+20|0;L=c[i>>2]|0;c[i>>2]=L+1;T=l+8|0;a[(c[T>>2]|0)+L>>0]=U;L=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=L;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;V=c[j>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(V=k+12|0,C=l+16|0,cb(c[V>>2]|0,c[C>>2]|0,h|0)|0,c[V>>2]=(c[V>>2]|0)+h,c[C>>2]=(c[C>>2]|0)+h,V=k+20|0,c[V>>2]=(c[V>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[C>>2]=c[l+8>>2];if(!(c[(c[P>>2]|0)+16>>2]|0)){h=2;A=242;break b}else{A=240;break b}}if(c[o>>2]|0){i=c[u>>2]|0;if((i|0)>-1)h=(c[s>>2]|0)+i|0;else h=0;Oa(P,h,(c[t>>2]|0)-i|0,0);c[u>>2]=c[t>>2];k=c[P>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=l+5816|0;T=b[V>>1]&255;i=l+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[l+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{V=l+5816|0;U=b[V>>1]&255;i=l+20|0;M=c[i>>2]|0;c[i>>2]=M+1;T=l+8|0;a[(c[T>>2]|0)+M>>0]=U;M=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=M;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;V=c[j>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(V=k+12|0,D=l+16|0,cb(c[V>>2]|0,c[D>>2]|0,h|0)|0,c[V>>2]=(c[V>>2]|0)+h,c[D>>2]=(c[D>>2]|0)+h,V=k+20|0,c[V>>2]=(c[V>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[D>>2]=c[l+8>>2];if(!(c[(c[P>>2]|0)+16>>2]|0))A=244}}else A=244;break}case 3:{m=P+116|0;n=P+96|0;u=P+108|0;t=P+56|0;o=P+5792|0;p=P+5796|0;q=P+5784|0;r=P+2440|0;s=P+5788|0;v=P+92|0;while(1){h=c[m>>2]|0;if(h>>>0<259){Ga(P);h=c[m>>2]|0;if(!(h>>>0>258|(g|0)!=0)){A=244;break b}if(!h)break;c[n>>2]=0;if(h>>>0>2)A=188;else A=203}else{c[n>>2]=0;A=188}if((A|0)==188){A=0;i=c[u>>2]|0;if((((i|0)!=0?(E=(c[t>>2]|0)+i|0,G=E+-1|0,F=a[G>>0]|0,G=G+1|0,F<<24>>24==(a[G>>0]|0)):0)?(H=G+1|0,F<<24>>24==(a[H>>0]|0)):0)?(I=H+1|0,F<<24>>24==(a[I>>0]|0)):0){k=E+258|0;i=I;do{j=i+1|0;if(F<<24>>24!=(a[j>>0]|0)){i=j;break}j=i+2|0;if(F<<24>>24!=(a[j>>0]|0)){i=j;break}j=i+3|0;if(F<<24>>24!=(a[j>>0]|0)){i=j;break}j=i+4|0;if(F<<24>>24!=(a[j>>0]|0)){i=j;break}j=i+5|0;if(F<<24>>24!=(a[j>>0]|0)){i=j;break}j=i+6|0;if(F<<24>>24!=(a[j>>0]|0)){i=j;break}j=i+7|0;if(F<<24>>24!=(a[j>>0]|0)){i=j;break}i=i+8|0}while(i>>>0<k>>>0?F<<24>>24==(a[i>>0]|0):0);V=i-k+258|0;U=V>>>0>h>>>0;c[n>>2]=U?h:V;h=U?h:V;if(h>>>0>2){h=h+253|0;b[(c[p>>2]|0)+(c[o>>2]<<1)>>1]=1;j=c[o>>2]|0;c[o>>2]=j+1;a[(c[q>>2]|0)+j>>0]=h;h=P+148+((d[13625+(h&255)>>0]|256)+1<<2)|0;b[h>>1]=(b[h>>1]|0)+1<<16>>16;b[r>>1]=(b[r>>1]|0)+1<<16>>16;h=(c[o>>2]|0)==((c[s>>2]|0)+-1|0)&1;j=c[n>>2]|0;c[m>>2]=(c[m>>2]|0)-j;j=(c[u>>2]|0)+j|0;c[u>>2]=j;c[n>>2]=0}else A=203}else A=203}if((A|0)==203){A=0;h=a[(c[t>>2]|0)+(c[u>>2]|0)>>0]|0;b[(c[p>>2]|0)+(c[o>>2]<<1)>>1]=0;j=c[o>>2]|0;c[o>>2]=j+1;a[(c[q>>2]|0)+j>>0]=h;h=P+148+((h&255)<<2)|0;b[h>>1]=(b[h>>1]|0)+1<<16>>16;h=(c[o>>2]|0)==((c[s>>2]|0)+-1|0)&1;c[m>>2]=(c[m>>2]|0)+-1;j=(c[u>>2]|0)+1|0;c[u>>2]=j}if(!h)continue;h=c[v>>2]|0;if((h|0)>-1)i=(c[t>>2]|0)+h|0;else i=0;Oa(P,i,j-h|0,0);c[v>>2]=c[u>>2];k=c[P>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=l+5816|0;T=b[V>>1]&255;i=l+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[l+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{V=l+5816|0;U=b[V>>1]&255;i=l+20|0;D=c[i>>2]|0;c[i>>2]=D+1;T=l+8|0;a[(c[T>>2]|0)+D>>0]=U;D=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=D;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;V=c[j>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(V=k+12|0,J=l+16|0,cb(c[V>>2]|0,c[J>>2]|0,h|0)|0,c[V>>2]=(c[V>>2]|0)+h,c[J>>2]=(c[J>>2]|0)+h,V=k+20|0,c[V>>2]=(c[V>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[J>>2]=c[l+8>>2];if(!(c[(c[P>>2]|0)+16>>2]|0)){A=244;break b}}c[P+5812>>2]=0;if((g|0)==4){i=c[v>>2]|0;if((i|0)>-1)h=(c[t>>2]|0)+i|0;else h=0;Oa(P,h,(c[u>>2]|0)-i|0,1);c[v>>2]=c[u>>2];k=c[P>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=l+5816|0;T=b[V>>1]&255;i=l+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[l+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{V=l+5816|0;U=b[V>>1]&255;i=l+20|0;L=c[i>>2]|0;c[i>>2]=L+1;T=l+8|0;a[(c[T>>2]|0)+L>>0]=U;L=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=L;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;V=c[j>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(V=k+12|0,K=l+16|0,cb(c[V>>2]|0,c[K>>2]|0,h|0)|0,c[V>>2]=(c[V>>2]|0)+h,c[K>>2]=(c[K>>2]|0)+h,V=k+20|0,c[V>>2]=(c[V>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[K>>2]=c[l+8>>2];if(!(c[(c[P>>2]|0)+16>>2]|0)){h=2;A=242;break b}else{A=240;break b}}if(c[o>>2]|0){i=c[v>>2]|0;if((i|0)>-1)h=(c[t>>2]|0)+i|0;else h=0;Oa(P,h,(c[u>>2]|0)-i|0,0);c[v>>2]=c[u>>2];k=c[P>>2]|0;l=c[k+28>>2]|0;h=l+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=l+5816|0;T=b[V>>1]&255;i=l+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[l+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=l+20|0;break}else{V=l+5816|0;U=b[V>>1]&255;i=l+20|0;M=c[i>>2]|0;c[i>>2]=M+1;T=l+8|0;a[(c[T>>2]|0)+M>>0]=U;M=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=M;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;j=k+16|0;V=c[j>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(V=k+12|0,L=l+16|0,cb(c[V>>2]|0,c[L>>2]|0,h|0)|0,c[V>>2]=(c[V>>2]|0)+h,c[L>>2]=(c[L>>2]|0)+h,V=k+20|0,c[V>>2]=(c[V>>2]|0)+h,c[j>>2]=(c[j>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[L>>2]=c[l+8>>2];if(!(c[(c[P>>2]|0)+16>>2]|0))A=244}break}default:{h=ma[c[8+((c[P+132>>2]|0)*12|0)+8>>2]&3](P,g)|0;if((h|0)==2){h=2;A=242}else switch(h|0){case 3:{h=3;A=242;break}case 0:{A=244;break}default:A=243}}}while(0);if((A|0)==240){h=3;A=242}if((A|0)==242){c[M>>2]=666;A=243}if((A|0)==243)switch(h|0){case 2:{A=244;break}case 1:break;default:break a}if((A|0)==244){if(c[R>>2]|0){V=0;return V|0}c[N>>2]=-1;V=0;return V|0}switch(g|0){case 1:{Na(P);break}case 5:break;default:{Ma(P,0,0,0);if((g|0)==3?(V=P+76|0,U=P+68|0,b[(c[U>>2]|0)+((c[V>>2]|0)+-1<<1)>>1]=0,$a(c[U>>2]|0,0,(c[V>>2]<<1)+-2|0)|0,(c[P+116>>2]|0)==0):0){c[P+108>>2]=0;c[P+92>>2]=0;c[P+5812>>2]=0}}}k=c[O>>2]|0;h=k+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=k+5816|0;T=b[V>>1]&255;j=k+20|0;U=c[j>>2]|0;c[j>>2]=U+1;a[(c[k+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{j=k+20|0;break}else{V=k+5816|0;U=b[V>>1]&255;j=k+20|0;M=c[j>>2]|0;c[j>>2]=M+1;T=k+8|0;a[(c[T>>2]|0)+M>>0]=U;M=(e[V>>1]|0)>>>8&255;U=c[j>>2]|0;c[j>>2]=U+1;a[(c[T>>2]|0)+U>>0]=M;b[V>>1]=0;c[h>>2]=0}while(0);i=c[j>>2]|0;h=c[R>>2]|0;i=i>>>0>h>>>0?h:i;if(i){h=k+16|0;cb(c[S>>2]|0,c[h>>2]|0,i|0)|0;c[S>>2]=(c[S>>2]|0)+i;c[h>>2]=(c[h>>2]|0)+i;V=f+20|0;c[V>>2]=(c[V>>2]|0)+i;c[R>>2]=(c[R>>2]|0)-i;V=c[j>>2]|0;c[j>>2]=V-i;if((V|0)==(i|0))c[h>>2]=c[k+8>>2];h=c[R>>2]|0}if(!h){c[N>>2]=-1;V=0;return V|0}}while(0);if((g|0)!=4){V=0;return V|0}k=P+24|0;h=c[k>>2]|0;if((h|0)<1){V=1;return V|0}i=f+48|0;j=c[i>>2]|0;if((h|0)==2){T=c[w>>2]|0;c[w>>2]=T+1;U=P+8|0;a[(c[U>>2]|0)+T>>0]=j;P=(c[i>>2]|0)>>>8&255;T=c[w>>2]|0;c[w>>2]=T+1;a[(c[U>>2]|0)+T>>0]=P;T=(c[i>>2]|0)>>>16&255;P=c[w>>2]|0;c[w>>2]=P+1;a[(c[U>>2]|0)+P>>0]=T;P=(c[i>>2]|0)>>>24&255;T=c[w>>2]|0;c[w>>2]=T+1;a[(c[U>>2]|0)+T>>0]=P;T=f+8|0;P=c[T>>2]&255;V=c[w>>2]|0;c[w>>2]=V+1;a[(c[U>>2]|0)+V>>0]=P;V=(c[T>>2]|0)>>>8&255;P=c[w>>2]|0;c[w>>2]=P+1;a[(c[U>>2]|0)+P>>0]=V;P=(c[T>>2]|0)>>>16&255;V=c[w>>2]|0;c[w>>2]=V+1;a[(c[U>>2]|0)+V>>0]=P;T=(c[T>>2]|0)>>>24&255;V=c[w>>2]|0;c[w>>2]=V+1;a[(c[U>>2]|0)+V>>0]=T}else{T=c[w>>2]|0;c[w>>2]=T+1;U=P+8|0;a[(c[U>>2]|0)+T>>0]=j>>>24;T=c[w>>2]|0;c[w>>2]=T+1;a[(c[U>>2]|0)+T>>0]=j>>>16;T=c[i>>2]|0;V=c[w>>2]|0;c[w>>2]=V+1;a[(c[U>>2]|0)+V>>0]=T>>>8;V=c[w>>2]|0;c[w>>2]=V+1;a[(c[U>>2]|0)+V>>0]=T}j=c[O>>2]|0;h=j+5820|0;i=c[h>>2]|0;do if((i|0)!=16)if((i|0)>7){V=j+5816|0;T=b[V>>1]&255;i=j+20|0;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[j+8>>2]|0)+U>>0]=T;b[V>>1]=(e[V>>1]|0)>>>8;c[h>>2]=(c[h>>2]|0)+-8;break}else{i=j+20|0;break}else{V=j+5816|0;U=b[V>>1]&255;i=j+20|0;P=c[i>>2]|0;c[i>>2]=P+1;T=j+8|0;a[(c[T>>2]|0)+P>>0]=U;P=(e[V>>1]|0)>>>8&255;U=c[i>>2]|0;c[i>>2]=U+1;a[(c[T>>2]|0)+U>>0]=P;b[V>>1]=0;c[h>>2]=0}while(0);h=c[i>>2]|0;V=c[R>>2]|0;h=h>>>0>V>>>0?V:h;if(h|0?(Q=j+16|0,cb(c[S>>2]|0,c[Q>>2]|0,h|0)|0,c[S>>2]=(c[S>>2]|0)+h,c[Q>>2]=(c[Q>>2]|0)+h,V=f+20|0,c[V>>2]=(c[V>>2]|0)+h,c[R>>2]=(c[R>>2]|0)-h,V=c[i>>2]|0,c[i>>2]=V-h,(V|0)==(h|0)):0)c[Q>>2]=c[j+8>>2];h=c[k>>2]|0;if((h|0)>0)c[k>>2]=0-h;V=(c[w>>2]|0)==0&1;return V|0}}while(0);c[f+24>>2]=13900;V=-2;return V|0}function La(d,f,g,h,j,k){d=d|0;f=f|0;g=g|0;h=h|0;j=j|0;k=k|0;var l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;I=i;i=i+64|0;G=I+32|0;o=I;l=0;while(1){if((l|0)==16){l=0;break}b[G+(l<<1)>>1]=0;l=l+1|0}while(1){if((l|0)==(g|0))break;E=G+(e[f+(l<<1)>>1]<<1)|0;b[E>>1]=(b[E>>1]|0)+1<<16>>16;l=l+1|0}l=c[j>>2]|0;m=15;while(1){if(!m){p=11;break}if(b[G+(m<<1)>>1]|0){H=m;break}m=m+-1|0}if((p|0)==11){k=c[h>>2]|0;c[h>>2]=k+4;b[k>>1]=320;b[k+2>>1]=320>>>16;k=c[h>>2]|0;c[h>>2]=k+4;b[k>>1]=320;b[k+2>>1]=320>>>16;c[j>>2]=1;k=0;i=I;return k|0}l=l>>>0>H>>>0?H:l;q=1;while(1){if(q>>>0>=H>>>0)break;if(b[G+(q<<1)>>1]|0)break;q=q+1|0}E=l>>>0<q>>>0?q:l;m=1;n=1;while(1){if(n>>>0>=16)break;l=(m<<1)-(e[G+(n<<1)>>1]|0)|0;if((l|0)<0){F=-1;p=60;break}m=l;n=n+1|0}if((p|0)==60){i=I;return F|0}if((m|0)>0?!((d|0)!=0&(H|0)==1):0){k=-1;i=I;return k|0}b[o+2>>1]=0;l=0;m=1;while(1){if((m|0)==15){m=0;break}C=(l&65535)+(e[G+(m<<1)>>1]|0)|0;D=m+1|0;b[o+(D<<1)>>1]=C;l=C;m=D}while(1){if((m|0)==(g|0))break;l=b[f+(m<<1)>>1]|0;if(l<<16>>16){C=o+((l&65535)<<1)|0;D=b[C>>1]|0;b[C>>1]=D+1<<16>>16;b[k+((D&65535)<<1)>>1]=m}m=m+1|0}switch(d|0){case 0:{l=1<<E;z=k;A=19;B=k;break}case 1:{if(E>>>0>9){k=1;i=I;return k|0}else{l=1<<E;z=10628;A=256;B=10690}break}default:if((d|0)==2&E>>>0>9){k=1;i=I;return k|0}else{l=1<<E;z=11266;A=-1;B=11330}}x=l+-1|0;y=E&255;g=E;D=0;p=0;n=q;v=-1;C=c[h>>2]|0;m=0;a:while(1){u=1<<g;s=p;t=n;w=m;while(1){g=t-D|0;m=b[k+(w<<1)>>1]|0;n=m&65535;if((n|0)>=(A|0))if((n|0)>(A|0)){q=e[B+(n<<1)>>1]|0;m=b[z+(n<<1)>>1]|0}else{q=96;m=0}else q=0;o=1<<g;p=s>>>D;n=(m&65535)<<16|g<<8&65280|q&255;m=u;do{r=m;m=m-o|0;q=C+(p+m<<2)|0;b[q>>1]=n;b[q+2>>1]=n>>>16}while((r|0)!=(o|0));m=1<<t+-1;while(1){if(!(s&m))break;m=m>>>1}if(!m)s=0;else s=(s&m+-1)+m|0;w=w+1|0;q=G+(t<<1)|0;r=(b[q>>1]|0)+-1<<16>>16;b[q>>1]=r;if(!(r<<16>>16)){if((t|0)==(H|0)){p=57;break a}t=e[f+(e[k+(w<<1)>>1]<<1)>>1]|0}if(t>>>0<=E>>>0)continue;r=s&x;if((r|0)!=(v|0))break}p=(D|0)==0?E:D;q=C+(u<<2)|0;n=t-p|0;g=n;n=1<<n;while(1){m=g+p|0;if(m>>>0>=H>>>0)break;m=n-(e[G+(m<<1)>>1]|0)|0;if((m|0)<1)break;g=g+1|0;n=m<<1}o=l+(1<<g)|0;switch(d|0){case 1:{if(o>>>0>852){F=1;p=60;break a}break}case 2:{if(o>>>0>592){F=1;p=60;break a}break}default:{}}a[(c[h>>2]|0)+(r<<2)>>0]=g;a[(c[h>>2]|0)+(r<<2)+1>>0]=y;D=c[h>>2]|0;b[D+(r<<2)+2>>1]=(q-D|0)>>>2;D=p;p=s;n=t;v=r;C=q;m=w;l=o}if((p|0)==57){if(s|0){k=C+(s<<2)|0;d=H-D<<8&65280|64;b[k>>1]=d;b[k+2>>1]=d>>>16}c[h>>2]=(c[h>>2]|0)+(l<<2);c[j>>2]=E;k=0;i=I;return k|0}else if((p|0)==60){i=I;return F|0}return 0}function Ma(d,f,g,h){d=d|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0;l=d+5820|0;k=c[l>>2]|0;i=h&65535;j=d+5816|0;h=e[j>>1]|0|i<<k;b[j>>1]=h;if((k|0)>13){n=d+20|0;k=c[n>>2]|0;c[n>>2]=k+1;m=d+8|0;a[(c[m>>2]|0)+k>>0]=h;h=(e[j>>1]|0)>>>8&255;k=c[n>>2]|0;c[n>>2]=k+1;a[(c[m>>2]|0)+k>>0]=h;k=c[l>>2]|0;h=i>>>(16-k|0);b[j>>1]=h;k=k+-13|0}else k=k+3|0;i=h&255;c[l>>2]=k;do if((k|0)<=8){h=d+5816|0;j=d+20|0;if((k|0)>0){m=c[j>>2]|0;c[j>>2]=m+1;n=d+8|0;a[(c[n>>2]|0)+m>>0]=i;i=n;break}else{i=d+8|0;break}}else{h=d+5816|0;j=d+20|0;m=c[j>>2]|0;c[j>>2]=m+1;n=d+8|0;a[(c[n>>2]|0)+m>>0]=i;m=(e[h>>1]|0)>>>8&255;i=c[j>>2]|0;c[j>>2]=i+1;a[(c[n>>2]|0)+i>>0]=m;i=n}while(0);b[h>>1]=0;c[l>>2]=0;m=c[j>>2]|0;c[j>>2]=m+1;a[(c[i>>2]|0)+m>>0]=g;m=g>>>8;n=c[j>>2]|0;c[j>>2]=n+1;a[(c[i>>2]|0)+n>>0]=m;n=c[j>>2]|0;c[j>>2]=n+1;a[(c[i>>2]|0)+n>>0]=g^255;n=c[j>>2]|0;c[j>>2]=n+1;a[(c[i>>2]|0)+n>>0]=m^255;while(1){if(!g)break;m=a[f>>0]|0;n=c[j>>2]|0;c[j>>2]=n+1;a[(c[i>>2]|0)+n>>0]=m;g=g+-1|0;f=f+1|0}return}function Na(d){d=d|0;var f=0,g=0,h=0,i=0,j=0,k=0;i=d+5820|0;h=c[i>>2]|0;g=d+5816|0;f=e[g>>1]|0|2<<h;b[g>>1]=f;if((h|0)>13){k=d+20|0;h=c[k>>2]|0;c[k>>2]=h+1;j=d+8|0;a[(c[j>>2]|0)+h>>0]=f;f=(e[g>>1]|0)>>>8&255;h=c[k>>2]|0;c[k>>2]=h+1;a[(c[j>>2]|0)+h>>0]=f;h=c[i>>2]|0;f=2>>>(16-h|0);b[g>>1]=f;g=h+-13|0}else g=h+3|0;f=f&255;c[i>>2]=g;if((g|0)>9){g=d+5816|0;h=d+20|0;j=c[h>>2]|0;c[h>>2]=j+1;k=d+8|0;a[(c[k>>2]|0)+j>>0]=f;j=(e[g>>1]|0)>>>8&255;f=c[h>>2]|0;c[h>>2]=f+1;a[(c[k>>2]|0)+f>>0]=j;b[g>>1]=0;f=0;g=(c[i>>2]|0)+-9|0}else g=g+7|0;c[i>>2]=g;if((g|0)==16){k=d+5816|0;g=d+20|0;h=c[g>>2]|0;c[g>>2]=h+1;d=d+8|0;a[(c[d>>2]|0)+h>>0]=f;h=(e[k>>1]|0)>>>8&255;j=c[g>>2]|0;c[g>>2]=j+1;a[(c[d>>2]|0)+j>>0]=h;b[k>>1]=0;c[i>>2]=0;return}if((g|0)<=7)return;k=d+5816|0;h=d+20|0;j=c[h>>2]|0;c[h>>2]=j+1;a[(c[d+8>>2]|0)+j>>0]=f;b[k>>1]=(e[k>>1]|0)>>>8;c[i>>2]=(c[i>>2]|0)+-8;return}function Oa(f,g,h,i){f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;if((c[f+132>>2]|0)>0){m=(c[f>>2]|0)+44|0;if((c[m>>2]|0)==2){j=-201342849;k=0;while(1){if((k|0)>=32){l=7;break}if(j&1|0?b[f+148+(k<<2)>>1]|0:0){j=0;break}j=j>>>1;k=k+1|0}a:do if((l|0)==7)if(((b[f+184>>1]|0)==0?(b[f+188>>1]|0)==0:0)?(b[f+200>>1]|0)==0:0){j=32;while(1){if((j|0)>=256){j=0;break a}if(b[f+148+(j<<2)>>1]|0){j=1;break a}j=j+1|0}}else j=1;while(0);c[m>>2]=j}Pa(f,f+2840|0);Pa(f,f+2852|0);Ra(f,f+148|0,c[f+2844>>2]|0);Ra(f,f+2440|0,c[f+2856>>2]|0);Pa(f,f+2864|0);j=18;while(1){if((j|0)<=2)break;if(b[f+2684+(d[13881+j>>0]<<2)+2>>1]|0)break;j=j+-1|0}k=f+5800|0;r=(c[k>>2]|0)+((j*3|0)+17)|0;c[k>>2]=r;r=(r+10|0)>>>3;k=((c[f+5804>>2]|0)+10|0)>>>3;q=j+1|0;j=k>>>0>r>>>0?r:k}else{k=h+5|0;q=1;j=k}do if((h+4|0)>>>0>j>>>0|(g|0)==0){r=f+5820|0;g=c[r>>2]|0;m=(g|0)>13;if((k|0)==(j|0)?1:(c[f+136>>2]|0)==4){j=i+2&65535;k=f+5816|0;l=e[k>>1]|j<<g;b[k>>1]=l;if(m){n=f+20|0;o=c[n>>2]|0;c[n>>2]=o+1;p=f+8|0;a[(c[p>>2]|0)+o>>0]=l;o=(e[k>>1]|0)>>>8&255;q=c[n>>2]|0;c[n>>2]=q+1;a[(c[p>>2]|0)+q>>0]=o;q=c[r>>2]|0;b[k>>1]=j>>>(16-q|0);j=q+-13|0}else j=g+3|0;c[r>>2]=j;Sa(f,11394,12546);j=0;break}l=i+4&65535;j=f+5816|0;k=e[j>>1]|l<<g;b[j>>1]=k;if(m){o=f+20|0;g=c[o>>2]|0;c[o>>2]=g+1;p=f+8|0;a[(c[p>>2]|0)+g>>0]=k;k=(e[j>>1]|0)>>>8&255;g=c[o>>2]|0;c[o>>2]=g+1;a[(c[p>>2]|0)+g>>0]=k;g=c[r>>2]|0;k=l>>>(16-g|0);b[j>>1]=k;g=g+-13|0}else g=g+3|0;c[r>>2]=g;o=c[f+2844>>2]|0;p=c[f+2856>>2]|0;l=o+65280&65535;m=f+5816|0;j=k&65535|l<<g;b[m>>1]=j;if((g|0)>11){g=f+20|0;n=c[g>>2]|0;c[g>>2]=n+1;h=f+8|0;a[(c[h>>2]|0)+n>>0]=j;j=(e[m>>1]|0)>>>8&255;n=c[g>>2]|0;c[g>>2]=n+1;a[(c[h>>2]|0)+n>>0]=j;n=c[r>>2]|0;j=l>>>(16-n|0);b[m>>1]=j;m=n+-11|0}else m=g+5|0;c[r>>2]=m;k=p&65535;l=f+5816|0;j=j&65535|k<<m;b[l>>1]=j;if((m|0)>11){g=f+20|0;n=c[g>>2]|0;c[g>>2]=n+1;h=f+8|0;a[(c[h>>2]|0)+n>>0]=j;j=(e[l>>1]|0)>>>8&255;n=c[g>>2]|0;c[g>>2]=n+1;a[(c[h>>2]|0)+n>>0]=j;n=c[r>>2]|0;j=k>>>(16-n|0);b[l>>1]=j;l=n+-11|0}else l=m+5|0;c[r>>2]=l;k=q+65532&65535;n=f+5816|0;j=j&65535|k<<l;b[n>>1]=j;if((l|0)>12){h=f+20|0;m=c[h>>2]|0;c[h>>2]=m+1;g=f+8|0;a[(c[g>>2]|0)+m>>0]=j;m=(e[n>>1]|0)>>>8&255;j=c[h>>2]|0;c[h>>2]=j+1;a[(c[g>>2]|0)+j>>0]=m;j=c[r>>2]|0;k=k>>>(16-j|0);b[n>>1]=k;j=j+-12|0;c[r>>2]=j}else{m=l+4|0;c[r>>2]=m;g=f+8|0;h=f+20|0;k=j;j=m}m=0;while(1){if((m|0)>=(q|0))break;l=e[f+2684+(d[13881+m>>0]<<2)+2>>1]|0;k=k&65535|l<<j;b[n>>1]=k;if((j|0)>13){j=c[h>>2]|0;c[h>>2]=j+1;a[(c[g>>2]|0)+j>>0]=k;k=(e[n>>1]|0)>>>8&255;j=c[h>>2]|0;c[h>>2]=j+1;a[(c[g>>2]|0)+j>>0]=k;j=c[r>>2]|0;k=l>>>(16-j|0);b[n>>1]=k;j=j+-13|0}else j=j+3|0;c[r>>2]=j;m=m+1|0}r=f+148|0;Ta(f,r,o);j=f+2440|0;Ta(f,j,p);Sa(f,r,j);j=0}else{Ma(f,g,h,i);j=0}while(0);while(1){if((j|0)==286){j=0;break}b[f+148+(j<<2)>>1]=0;j=j+1|0}while(1){if((j|0)==30){j=0;break}b[f+2440+(j<<2)>>1]=0;j=j+1|0}while(1){if((j|0)==19)break;b[f+2684+(j<<2)>>1]=0;j=j+1|0}b[f+1172>>1]=1;c[f+5804>>2]=0;c[f+5800>>2]=0;c[f+5808>>2]=0;c[f+5792>>2]=0;if(!i)return;l=f+5820|0;k=c[l>>2]|0;if((k|0)<=8){j=f+5816|0;if((k|0)>0){r=b[j>>1]&255;q=f+20|0;i=c[q>>2]|0;c[q>>2]=i+1;a[(c[f+8>>2]|0)+i>>0]=r}}else{j=f+5816|0;p=b[j>>1]&255;q=f+20|0;r=c[q>>2]|0;c[q>>2]=r+1;i=f+8|0;a[(c[i>>2]|0)+r>>0]=p;r=(e[j>>1]|0)>>>8&255;f=c[q>>2]|0;c[q>>2]=f+1;a[(c[i>>2]|0)+f>>0]=r}b[j>>1]=0;c[l>>2]=0;return}function Pa(d,f){d=d|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;z=i;i=i+32|0;y=z;x=c[f>>2]|0;o=f+8|0;m=c[o>>2]|0;l=c[m>>2]|0;m=c[m+12>>2]|0;n=d+5200|0;c[n>>2]=0;r=d+5204|0;c[r>>2]=573;g=-1;h=0;while(1){if((h|0)>=(m|0))break;if(!(b[x+(h<<2)>>1]|0))b[x+(h<<2)+2>>1]=0;else{g=(c[n>>2]|0)+1|0;c[n>>2]=g;c[d+2908+(g<<2)>>2]=h;a[d+5208+h>>0]=0;g=h}h=h+1|0}v=d+5800|0;k=(l|0)==0;s=d+5804|0;w=g;while(1){j=c[n>>2]|0;if((j|0)>=2)break;u=(w|0)<2;g=w+1|0;h=u?g:w;g=u?g:0;w=j+1|0;c[n>>2]=w;c[d+2908+(w<<2)>>2]=g;b[x+(g<<2)>>1]=1;a[d+5208+g>>0]=0;c[v>>2]=(c[v>>2]|0)+-1;if(k){w=h;continue}c[s>>2]=(c[s>>2]|0)-(e[l+(g<<2)+2>>1]|0);w=h}k=f+4|0;c[k>>2]=w;g=(c[n>>2]|0)/2|0;while(1){if((g|0)<=0)break;Qa(d,x,g);g=g+-1|0}h=d+2912|0;j=c[n>>2]|0;g=m;while(1){u=c[h>>2]|0;c[n>>2]=j+-1;c[h>>2]=c[d+2908+(j<<2)>>2];Qa(d,x,1);q=c[h>>2]|0;t=(c[r>>2]|0)+-1|0;c[r>>2]=t;c[d+2908+(t<<2)>>2]=u;t=(c[r>>2]|0)+-1|0;c[r>>2]=t;c[d+2908+(t<<2)>>2]=q;b[x+(g<<2)>>1]=(e[x+(u<<2)>>1]|0)+(e[x+(q<<2)>>1]|0);t=a[d+5208+u>>0]|0;p=a[d+5208+q>>0]|0;a[d+5208+g>>0]=(((t&255)<(p&255)?p:t)&255)+1;t=g&65535;b[x+(q<<2)+2>>1]=t;b[x+(u<<2)+2>>1]=t;c[h>>2]=g;Qa(d,x,1);j=c[n>>2]|0;if((j|0)<=1)break;else g=g+1|0}t=c[h>>2]|0;u=(c[r>>2]|0)+-1|0;c[r>>2]=u;c[d+2908+(u<<2)>>2]=t;u=c[f>>2]|0;t=c[k>>2]|0;q=c[o>>2]|0;f=c[q>>2]|0;o=c[q+4>>2]|0;p=c[q+8>>2]|0;q=c[q+16>>2]|0;g=0;while(1){if((g|0)==16)break;b[d+2876+(g<<1)>>1]=0;g=g+1|0}b[u+(c[d+2908+(c[r>>2]<<2)>>2]<<2)+2>>1]=0;n=(f|0)==0;g=c[r>>2]|0;m=0;while(1){g=g+1|0;if((g|0)>=573)break;l=c[d+2908+(g<<2)>>2]|0;r=u+(l<<2)+2|0;k=e[u+(e[r>>1]<<2)+2>>1]|0;j=(k|0)<(q|0);k=j?k+1|0:q;m=m+(j&1^1)|0;b[r>>1]=k;if((l|0)>(t|0))continue;r=d+2876+(k<<1)|0;b[r>>1]=(b[r>>1]|0)+1<<16>>16;if((l|0)<(p|0))j=0;else j=c[o+(l-p<<2)>>2]|0;h=e[u+(l<<2)>>1]|0;r=Z(h,k+j|0)|0;c[v>>2]=(c[v>>2]|0)+r;if(n)continue;r=Z(h,(e[f+(l<<2)+2>>1]|0)+j|0)|0;c[s>>2]=(c[s>>2]|0)+r}a:do if(m|0){n=d+2876+(q<<1)|0;while(1){l=q;while(1){k=l+-1|0;h=d+2876+(k<<1)|0;j=b[h>>1]|0;if(!(j<<16>>16))l=k;else break}b[h>>1]=j+-1<<16>>16;s=d+2876+(l<<1)|0;b[s>>1]=(e[s>>1]|0)+2;b[n>>1]=(b[n>>1]|0)+-1<<16>>16;if((m|0)>2)m=m+-2|0;else{n=q;break}}while(1){if(!n)break a;m=n&65535;l=e[d+2876+(n<<1)>>1]|0;b:while(1){h=(l|0)==0;do{if(h)break b;g=g+-1|0;k=c[d+2908+(g<<2)>>2]|0}while((k|0)>(t|0));h=u+(k<<2)+2|0;j=e[h>>1]|0;if((n|0)!=(j|0)){s=Z(n-j|0,e[u+(k<<2)>>1]|0)|0;c[v>>2]=(c[v>>2]|0)+s;b[h>>1]=m}l=l+-1|0}n=n+-1|0}}while(0);g=1;h=0;while(1){if((g|0)==16){k=0;break}v=(h&65534)+(e[d+2876+(g+-1<<1)>>1]|0)<<1;b[y+(g<<1)>>1]=v;g=g+1|0;h=v}while(1){if((k|0)>(w|0))break;d=b[x+(k<<2)+2>>1]|0;g=d&65535;if(d<<16>>16){h=y+(g<<1)|0;j=b[h>>1]|0;b[h>>1]=j+1<<16>>16;j=j&65535;h=0;while(1){h=h|j&1;if((g|0)>1){j=j>>>1;g=g+-1|0;h=h<<1}else break}b[x+(k<<2)>>1]=h}k=k+1|0}i=z;return}function Qa(a,e,f){a=a|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;p=c[a+2908+(f<<2)>>2]|0;m=a+5208+p|0;n=a+5200|0;o=e+(p<<2)|0;l=f;while(1){k=l<<1;f=c[n>>2]|0;if((k|0)>(f|0)){f=12;break}do if((k|0)<(f|0)){i=k|1;f=c[a+2908+(i<<2)>>2]|0;g=b[e+(f<<2)>>1]|0;h=c[a+2908+(k<<2)>>2]|0;j=b[e+(h<<2)>>1]|0;if((g&65535)>=(j&65535)){if(g<<16>>16!=j<<16>>16){i=k;break}if((d[a+5208+f>>0]|0)>(d[a+5208+h>>0]|0)){i=k;break}}}else i=k;while(0);f=b[o>>1]|0;g=c[a+2908+(i<<2)>>2]|0;h=b[e+(g<<2)>>1]|0;if((f&65535)<(h&65535)){f=12;break}if(f<<16>>16==h<<16>>16?(d[m>>0]|0)<=(d[a+5208+g>>0]|0):0){f=12;break}c[a+2908+(l<<2)>>2]=g;l=i}if((f|0)==12){c[a+2908+(l<<2)>>2]=p;return}}function Ra(a,c,d){a=a|0;c=c|0;d=d|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;o=b[c+2>>1]|0;n=o<<16>>16==0;b[c+(d+1<<2)+2>>1]=-1;j=a+2752|0;k=a+2756|0;l=a+2748|0;g=0;m=n?138:7;n=n?3:4;f=0;o=o&65535;p=-1;while(1){if((f|0)>(d|0))break;f=f+1|0;h=b[c+(f<<2)+2>>1]|0;i=h&65535;g=g+1|0;if((g|0)<(m|0)&(o|0)==(i|0)){h=p;o=i;p=h;continue}do if((g|0)>=(n|0))if(!o)if((g|0)<11){b[j>>1]=(b[j>>1]|0)+1<<16>>16;break}else{b[k>>1]=(b[k>>1]|0)+1<<16>>16;break}else{if((o|0)!=(p|0)){p=a+2684+(o<<2)|0;b[p>>1]=(b[p>>1]|0)+1<<16>>16}b[l>>1]=(b[l>>1]|0)+1<<16>>16;break}else{p=a+2684+(o<<2)|0;b[p>>1]=(e[p>>1]|0)+g}while(0);if(!(h<<16>>16)){p=o;g=0;m=138;n=3;o=i;continue}n=(o|0)==(i|0);p=o;g=0;m=n?6:7;n=n?3:4;o=i}return}function Sa(f,g,h){f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;r=f+5792|0;if(!(c[r>>2]|0)){m=f+5820|0;n=m;m=c[m>>2]|0}else{s=f+5796|0;t=f+5784|0;n=f+5820|0;u=f+5816|0;v=f+20|0;w=f+8|0;x=0;do{o=b[(c[s>>2]|0)+(x<<1)>>1]|0;q=o&65535;p=d[(c[t>>2]|0)+x>>0]|0;x=x+1|0;do if(!(o<<16>>16)){k=e[g+(p<<2)+2>>1]|0;l=c[n>>2]|0;i=e[g+(p<<2)>>1]|0;j=e[u>>1]|0|i<<l;b[u>>1]=j;if((l|0)>(16-k|0)){q=c[v>>2]|0;c[v>>2]=q+1;a[(c[w>>2]|0)+q>>0]=j;q=(e[u>>1]|0)>>>8&255;m=c[v>>2]|0;c[v>>2]=m+1;a[(c[w>>2]|0)+m>>0]=q;m=c[n>>2]|0;b[u>>1]=i>>>(16-m|0);m=m+(k+-16)|0;c[n>>2]=m;break}else{m=l+k|0;c[n>>2]=m;break}}else{o=d[13625+p>>0]|0;i=(o|256)+1|0;l=e[g+(i<<2)+2>>1]|0;m=c[n>>2]|0;i=e[g+(i<<2)>>1]|0;k=e[u>>1]|0|i<<m;j=k&65535;b[u>>1]=j;if((m|0)>(16-l|0)){j=c[v>>2]|0;c[v>>2]=j+1;a[(c[w>>2]|0)+j>>0]=k;j=(e[u>>1]|0)>>>8&255;m=c[v>>2]|0;c[v>>2]=m+1;a[(c[w>>2]|0)+m>>0]=j;m=c[n>>2]|0;j=i>>>(16-m|0)&65535;b[u>>1]=j;m=m+(l+-16)|0}else m=m+l|0;c[n>>2]=m;l=c[148+(o<<2)>>2]|0;do if((o+-8|0)>>>0<20){k=p-(c[500+(o<<2)>>2]|0)&65535;i=j&65535|k<<m;j=i&65535;b[u>>1]=j;if((m|0)>(16-l|0)){j=c[v>>2]|0;c[v>>2]=j+1;a[(c[w>>2]|0)+j>>0]=i;j=(e[u>>1]|0)>>>8&255;m=c[v>>2]|0;c[v>>2]=m+1;a[(c[w>>2]|0)+m>>0]=j;m=c[n>>2]|0;j=k>>>(16-m|0)&65535;b[u>>1]=j;m=m+(l+-16)|0;c[n>>2]=m;break}else{m=m+l|0;c[n>>2]=m;break}}while(0);o=q+-1|0;p=d[13113+(o>>>0<256?o:(o>>>7)+256|0)>>0]|0;l=e[h+(p<<2)+2>>1]|0;k=e[h+(p<<2)>>1]|0;i=j&65535|k<<m;b[u>>1]=i;if((m|0)>(16-l|0)){m=c[v>>2]|0;c[v>>2]=m+1;a[(c[w>>2]|0)+m>>0]=i;i=(e[u>>1]|0)>>>8&255;m=c[v>>2]|0;c[v>>2]=m+1;a[(c[w>>2]|0)+m>>0]=i;m=c[n>>2]|0;i=k>>>(16-m|0);b[u>>1]=i;m=m+(l+-16)|0}else m=m+l|0;c[n>>2]=m;k=c[284+(p<<2)>>2]|0;if((p+-4|0)>>>0<26){j=o-(c[616+(p<<2)>>2]|0)&65535;i=i&65535|j<<m;b[u>>1]=i;if((m|0)>(16-k|0)){q=c[v>>2]|0;c[v>>2]=q+1;a[(c[w>>2]|0)+q>>0]=i;q=(e[u>>1]|0)>>>8&255;m=c[v>>2]|0;c[v>>2]=m+1;a[(c[w>>2]|0)+m>>0]=q;m=c[n>>2]|0;b[u>>1]=j>>>(16-m|0);m=m+(k+-16)|0;c[n>>2]=m;break}else{m=m+k|0;c[n>>2]=m;break}}}while(0)}while(x>>>0<(c[r>>2]|0)>>>0)}l=e[g+1026>>1]|0;i=e[g+1024>>1]|0;j=f+5816|0;k=e[j>>1]|0|i<<m;b[j>>1]=k;if((m|0)>(16-l|0)){h=f+20|0;x=c[h>>2]|0;c[h>>2]=x+1;g=f+8|0;a[(c[g>>2]|0)+x>>0]=k;x=(e[j>>1]|0)>>>8&255;f=c[h>>2]|0;c[h>>2]=f+1;a[(c[g>>2]|0)+f>>0]=x;f=c[n>>2]|0;b[j>>1]=i>>>(16-f|0);f=f+(l+-16)|0;c[n>>2]=f;return}else{f=m+l|0;c[n>>2]=f;return}}function Ta(d,f,g){d=d|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0;C=b[f+2>>1]|0;j=C<<16>>16==0;w=d+2754|0;x=d+5820|0;y=d+2752|0;z=d+5816|0;A=d+20|0;B=d+8|0;r=d+2758|0;s=d+2756|0;t=d+2750|0;u=d+2748|0;n=0;i=j?138:7;j=j?3:4;h=0;C=C&65535;k=-1;while(1){if((h|0)>(g|0))break;p=h+1|0;q=b[f+(p<<2)+2>>1]|0;v=q&65535;m=n+1|0;if((m|0)<(i|0)&(C|0)==(v|0)){q=k;n=m;h=p;C=v;k=q;continue}do if((m|0)>=(j|0)){if(C|0){do if((C|0)!=(k|0)){h=e[d+2684+(C<<2)+2>>1]|0;i=c[x>>2]|0;j=e[d+2684+(C<<2)>>1]|0;k=e[z>>1]|0|j<<i;b[z>>1]=k;if((i|0)>(16-h|0)){l=c[A>>2]|0;c[A>>2]=l+1;a[(c[B>>2]|0)+l>>0]=k;k=(e[z>>1]|0)>>>8&255;l=c[A>>2]|0;c[A>>2]=l+1;a[(c[B>>2]|0)+l>>0]=k;l=c[x>>2]|0;b[z>>1]=j>>>(16-l|0);l=l+(h+-16)|0;c[x>>2]=l;k=n;break}else{l=i+h|0;c[x>>2]=l;k=n;break}}else{l=c[x>>2]|0;k=m}while(0);j=e[t>>1]|0;i=e[u>>1]|0;h=e[z>>1]|0|i<<l;b[z>>1]=h;if((l|0)>(16-j|0)){o=c[A>>2]|0;c[A>>2]=o+1;a[(c[B>>2]|0)+o>>0]=h;h=(e[z>>1]|0)>>>8&255;o=c[A>>2]|0;c[A>>2]=o+1;a[(c[B>>2]|0)+o>>0]=h;o=c[x>>2]|0;h=i>>>(16-o|0);b[z>>1]=h;j=o+(j+-16)|0}else j=l+j|0;c[x>>2]=j;i=k+65533&65535;h=h&65535|i<<j;b[z>>1]=h;if((j|0)>14){n=c[A>>2]|0;c[A>>2]=n+1;a[(c[B>>2]|0)+n>>0]=h;n=(e[z>>1]|0)>>>8&255;o=c[A>>2]|0;c[A>>2]=o+1;a[(c[B>>2]|0)+o>>0]=n;o=c[x>>2]|0;b[z>>1]=i>>>(16-o|0);c[x>>2]=o+-14;break}else{c[x>>2]=j+2;break}}if((m|0)<11){j=e[w>>1]|0;k=c[x>>2]|0;h=e[y>>1]|0;i=e[z>>1]|0|h<<k;b[z>>1]=i;if((k|0)>(16-j|0)){m=c[A>>2]|0;c[A>>2]=m+1;a[(c[B>>2]|0)+m>>0]=i;m=(e[z>>1]|0)>>>8&255;o=c[A>>2]|0;c[A>>2]=o+1;a[(c[B>>2]|0)+o>>0]=m;o=c[x>>2]|0;h=h>>>(16-o|0);b[z>>1]=h;j=o+(j+-16)|0}else{h=i;j=k+j|0}c[x>>2]=j;i=n+65534&65535;h=h&65535|i<<j;b[z>>1]=h;if((j|0)>13){n=c[A>>2]|0;c[A>>2]=n+1;a[(c[B>>2]|0)+n>>0]=h;n=(e[z>>1]|0)>>>8&255;o=c[A>>2]|0;c[A>>2]=o+1;a[(c[B>>2]|0)+o>>0]=n;o=c[x>>2]|0;b[z>>1]=i>>>(16-o|0);c[x>>2]=o+-13;break}else{c[x>>2]=j+3;break}}else{j=e[r>>1]|0;k=c[x>>2]|0;h=e[s>>1]|0;i=e[z>>1]|0|h<<k;b[z>>1]=i;if((k|0)>(16-j|0)){m=c[A>>2]|0;c[A>>2]=m+1;a[(c[B>>2]|0)+m>>0]=i;m=(e[z>>1]|0)>>>8&255;o=c[A>>2]|0;c[A>>2]=o+1;a[(c[B>>2]|0)+o>>0]=m;o=c[x>>2]|0;h=h>>>(16-o|0);b[z>>1]=h;j=o+(j+-16)|0}else{h=i;j=k+j|0}c[x>>2]=j;i=n+65526&65535;h=h&65535|i<<j;b[z>>1]=h;if((j|0)>9){n=c[A>>2]|0;c[A>>2]=n+1;a[(c[B>>2]|0)+n>>0]=h;n=(e[z>>1]|0)>>>8&255;o=c[A>>2]|0;c[A>>2]=o+1;a[(c[B>>2]|0)+o>>0]=n;o=c[x>>2]|0;b[z>>1]=i>>>(16-o|0);c[x>>2]=o+-9;break}else{c[x>>2]=j+7;break}}}else{n=d+2684+(C<<2)+2|0;o=d+2684+(C<<2)|0;h=c[x>>2]|0;l=m;do{i=e[n>>1]|0;j=e[o>>1]|0;k=e[z>>1]|0|j<<h;b[z>>1]=k;if((h|0)>(16-i|0)){m=c[A>>2]|0;c[A>>2]=m+1;a[(c[B>>2]|0)+m>>0]=k;m=(e[z>>1]|0)>>>8&255;h=c[A>>2]|0;c[A>>2]=h+1;a[(c[B>>2]|0)+h>>0]=m;h=c[x>>2]|0;b[z>>1]=j>>>(16-h|0);h=h+(i+-16)|0}else h=h+i|0;c[x>>2]=h;l=l+-1|0}while((l|0)!=0)}while(0);if(!(q<<16>>16)){k=C;n=0;i=138;j=3;h=p;C=v;continue}j=(C|0)==(v|0);k=C;n=0;i=j?6:7;j=j?3:4;h=p;C=v}return}function Ua(a,b,c){a=a|0;b=b|0;c=c|0;return Ya(Z(b,c)|0)|0}function Va(a,b){a=a|0;b=b|0;Za(b);return}function Wa(a,b,c){a=a|0;b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;e=a>>>16;a=a&65535;if((c|0)==1){g=a+(d[b>>0]|0)|0;g=g>>>0>65520?g+-65521|0:g;h=e+g|0;h=g|(h>>>0>65520?h+15|0:h)<<16;return h|0}if(!b){h=1;return h|0}if(c>>>0<16){while(1){if(!c)break;h=a+(d[b>>0]|0)|0;b=b+1|0;c=c+-1|0;a=h;e=e+h|0}h=(a>>>0>65520?a+-65521|0:a)|((e>>>0)%65521|0)<<16;return h|0}while(1){if(c>>>0<=5551)break;c=c+-5552|0;g=b;f=347;while(1){v=a+(d[g>>0]|0)|0;u=v+(d[g+1>>0]|0)|0;t=u+(d[g+2>>0]|0)|0;s=t+(d[g+3>>0]|0)|0;r=s+(d[g+4>>0]|0)|0;q=r+(d[g+5>>0]|0)|0;p=q+(d[g+6>>0]|0)|0;o=p+(d[g+7>>0]|0)|0;n=o+(d[g+8>>0]|0)|0;m=n+(d[g+9>>0]|0)|0;l=m+(d[g+10>>0]|0)|0;k=l+(d[g+11>>0]|0)|0;j=k+(d[g+12>>0]|0)|0;i=j+(d[g+13>>0]|0)|0;h=i+(d[g+14>>0]|0)|0;a=h+(d[g+15>>0]|0)|0;e=e+v+u+t+s+r+q+p+o+n+m+l+k+j+i+h+a|0;f=f+-1|0;if(!f)break;else g=g+16|0}b=b+5552|0;a=(a>>>0)%65521|0;e=(e>>>0)%65521|0}if(c){g=c+~(c>>>0<15?c:15)+16&-16;h=b+g|0;f=c;while(1){if(f>>>0<=15)break;x=a+(d[b>>0]|0)|0;w=x+(d[b+1>>0]|0)|0;i=w+(d[b+2>>0]|0)|0;j=i+(d[b+3>>0]|0)|0;k=j+(d[b+4>>0]|0)|0;l=k+(d[b+5>>0]|0)|0;m=l+(d[b+6>>0]|0)|0;n=m+(d[b+7>>0]|0)|0;o=n+(d[b+8>>0]|0)|0;p=o+(d[b+9>>0]|0)|0;q=p+(d[b+10>>0]|0)|0;r=q+(d[b+11>>0]|0)|0;s=r+(d[b+12>>0]|0)|0;t=s+(d[b+13>>0]|0)|0;u=t+(d[b+14>>0]|0)|0;v=u+(d[b+15>>0]|0)|0;f=f+-16|0;b=b+16|0;a=v;e=e+x+w+i+j+k+l+m+n+o+p+q+r+s+t+u+v|0}c=c-g|0;b=h;while(1){if(!c)break;x=a+(d[b>>0]|0)|0;c=c+-1|0;b=b+1|0;a=x;e=e+x|0}a=(a>>>0)%65521|0;e=(e>>>0)%65521|0}x=a|e<<16;return x|0}function Xa(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;if(!b){i=0;return i|0}h=b;b=~a;while(1){if(!e){e=0;break}if(!(h&3))break;i=c[736+((b&255^(d[h>>0]|0))<<2)>>2]^b>>>8;h=h+1|0;e=e+-1|0;b=i}g=e+~(e>>>0<31?e:31)+32&-32;i=h+g|0;f=e;a=h;while(1){if(f>>>0<=31)break;h=b^c[a>>2];h=c[3808+((h&255)<<2)>>2]^c[2784+((h>>>8&255)<<2)>>2]^c[1760+((h>>>16&255)<<2)>>2]^c[736+(h>>>24<<2)>>2]^c[a+4>>2];h=c[3808+((h&255)<<2)>>2]^c[2784+((h>>>8&255)<<2)>>2]^c[1760+((h>>>16&255)<<2)>>2]^c[736+(h>>>24<<2)>>2]^c[a+8>>2];h=c[3808+((h&255)<<2)>>2]^c[2784+((h>>>8&255)<<2)>>2]^c[1760+((h>>>16&255)<<2)>>2]^c[736+(h>>>24<<2)>>2]^c[a+12>>2];h=c[3808+((h&255)<<2)>>2]^c[2784+((h>>>8&255)<<2)>>2]^c[1760+((h>>>16&255)<<2)>>2]^c[736+(h>>>24<<2)>>2]^c[a+16>>2];h=c[3808+((h&255)<<2)>>2]^c[2784+((h>>>8&255)<<2)>>2]^c[1760+((h>>>16&255)<<2)>>2]^c[736+(h>>>24<<2)>>2]^c[a+20>>2];h=c[3808+((h&255)<<2)>>2]^c[2784+((h>>>8&255)<<2)>>2]^c[1760+((h>>>16&255)<<2)>>2]^c[736+(h>>>24<<2)>>2]^c[a+24>>2];h=c[3808+((h&255)<<2)>>2]^c[2784+((h>>>8&255)<<2)>>2]^c[1760+((h>>>16&255)<<2)>>2]^c[736+(h>>>24<<2)>>2]^c[a+28>>2];f=f+-32|0;a=a+32|0;b=c[3808+((h&255)<<2)>>2]^c[2784+((h>>>8&255)<<2)>>2]^c[1760+((h>>>16&255)<<2)>>2]^c[736+(h>>>24<<2)>>2]}g=e-g|0;a=(g+~(g>>>0<3?g:3)+4|0)>>>2;h=a<<2;e=g;f=i;while(1){if(e>>>0<=3)break;j=b^c[f>>2];e=e+-4|0;f=f+4|0;b=c[3808+((j&255)<<2)>>2]^c[2784+((j>>>8&255)<<2)>>2]^c[1760+((j>>>16&255)<<2)>>2]^c[736+(j>>>24<<2)>>2]}if((g|0)!=(h|0)){a=i+(a<<2)|0;e=g-h|0;while(1){b=c[736+((b&255^(d[a>>0]|0))<<2)>>2]^b>>>8;e=e+-1|0;if(!e)break;else a=a+1|0}}j=~b;return j|0}function Ya(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0;K=i;i=i+16|0;q=K;do if(a>>>0<245){p=a>>>0<11?16:a+11&-8;a=p>>>3;k=c[3522]|0;b=k>>>a;if(b&3|0){f=(b&1^1)+a|0;g=14128+(f<<1<<2)|0;b=g+8|0;d=c[b>>2]|0;h=d+8|0;e=c[h>>2]|0;do if((g|0)!=(e|0)){if(e>>>0<(c[3526]|0)>>>0)ha();a=e+12|0;if((c[a>>2]|0)==(d|0)){c[a>>2]=g;c[b>>2]=e;break}else ha()}else c[3522]=k&~(1<<f);while(0);J=f<<3;c[d+4>>2]=J|3;J=d+J+4|0;c[J>>2]=c[J>>2]|1;J=h;i=K;return J|0}h=c[3524]|0;if(p>>>0>h>>>0){if(b|0){f=2<<a;f=b<<a&(f|0-f);f=(f&0-f)+-1|0;j=f>>>12&16;f=f>>>j;b=f>>>5&8;f=f>>>b;g=f>>>2&4;f=f>>>g;d=f>>>1&2;f=f>>>d;e=f>>>1&1;e=(b|j|g|d|e)+(f>>>e)|0;f=14128+(e<<1<<2)|0;d=f+8|0;g=c[d>>2]|0;j=g+8|0;b=c[j>>2]|0;do if((f|0)!=(b|0)){if(b>>>0<(c[3526]|0)>>>0)ha();a=b+12|0;if((c[a>>2]|0)==(g|0)){c[a>>2]=f;c[d>>2]=b;l=c[3524]|0;break}else ha()}else{c[3522]=k&~(1<<e);l=h}while(0);h=(e<<3)-p|0;c[g+4>>2]=p|3;f=g+p|0;c[f+4>>2]=h|1;c[f+h>>2]=h;if(l|0){e=c[3527]|0;b=l>>>3;d=14128+(b<<1<<2)|0;a=c[3522]|0;b=1<<b;if(a&b){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[3526]|0)>>>0)ha();else{m=a;n=b}}else{c[3522]=a|b;m=d+8|0;n=d}c[m>>2]=e;c[n+12>>2]=e;c[e+8>>2]=n;c[e+12>>2]=d}c[3524]=h;c[3527]=f;J=j;i=K;return J|0}a=c[3523]|0;if(a){j=(a&0-a)+-1|0;I=j>>>12&16;j=j>>>I;H=j>>>5&8;j=j>>>H;J=j>>>2&4;j=j>>>J;b=j>>>1&2;j=j>>>b;k=j>>>1&1;k=c[14392+((H|I|J|b|k)+(j>>>k)<<2)>>2]|0;j=(c[k+4>>2]&-8)-p|0;b=k;while(1){a=c[b+16>>2]|0;if(!a){a=c[b+20>>2]|0;if(!a)break}b=(c[a+4>>2]&-8)-p|0;J=b>>>0<j>>>0;j=J?b:j;b=a;k=J?a:k}f=c[3526]|0;if(k>>>0<f>>>0)ha();h=k+p|0;if(k>>>0>=h>>>0)ha();g=c[k+24>>2]|0;d=c[k+12>>2]|0;do if((d|0)==(k|0)){b=k+20|0;a=c[b>>2]|0;if(!a){b=k+16|0;a=c[b>>2]|0;if(!a){o=0;break}}while(1){e=a+20|0;d=c[e>>2]|0;if(d|0){a=d;b=e;continue}e=a+16|0;d=c[e>>2]|0;if(!d)break;else{a=d;b=e}}if(b>>>0<f>>>0)ha();else{c[b>>2]=0;o=a;break}}else{e=c[k+8>>2]|0;if(e>>>0<f>>>0)ha();a=e+12|0;if((c[a>>2]|0)!=(k|0))ha();b=d+8|0;if((c[b>>2]|0)==(k|0)){c[a>>2]=d;c[b>>2]=e;o=d;break}else ha()}while(0);do if(g|0){a=c[k+28>>2]|0;b=14392+(a<<2)|0;if((k|0)==(c[b>>2]|0)){c[b>>2]=o;if(!o){c[3523]=c[3523]&~(1<<a);break}}else{if(g>>>0<(c[3526]|0)>>>0)ha();a=g+16|0;if((c[a>>2]|0)==(k|0))c[a>>2]=o;else c[g+20>>2]=o;if(!o)break}b=c[3526]|0;if(o>>>0<b>>>0)ha();c[o+24>>2]=g;a=c[k+16>>2]|0;do if(a|0)if(a>>>0<b>>>0)ha();else{c[o+16>>2]=a;c[a+24>>2]=o;break}while(0);a=c[k+20>>2]|0;if(a|0)if(a>>>0<(c[3526]|0)>>>0)ha();else{c[o+20>>2]=a;c[a+24>>2]=o;break}}while(0);if(j>>>0<16){J=j+p|0;c[k+4>>2]=J|3;J=k+J+4|0;c[J>>2]=c[J>>2]|1}else{c[k+4>>2]=p|3;c[h+4>>2]=j|1;c[h+j>>2]=j;a=c[3524]|0;if(a|0){e=c[3527]|0;b=a>>>3;d=14128+(b<<1<<2)|0;a=c[3522]|0;b=1<<b;if(a&b){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[3526]|0)>>>0)ha();else{r=a;s=b}}else{c[3522]=a|b;r=d+8|0;s=d}c[r>>2]=e;c[s+12>>2]=e;c[e+8>>2]=s;c[e+12>>2]=d}c[3524]=j;c[3527]=h}J=k+8|0;i=K;return J|0}}}else if(a>>>0<=4294967231){a=a+11|0;p=a&-8;k=c[3523]|0;if(k){b=0-p|0;a=a>>>8;if(a)if(p>>>0>16777215)j=31;else{s=(a+1048320|0)>>>16&8;C=a<<s;r=(C+520192|0)>>>16&4;C=C<<r;j=(C+245760|0)>>>16&2;j=14-(r|s|j)+(C<<j>>>15)|0;j=p>>>(j+7|0)&1|j<<1}else j=0;d=c[14392+(j<<2)>>2]|0;a:do if(!d){e=b;a=0;b=0;C=86}else{e=b;a=0;h=p<<((j|0)==31?0:25-(j>>>1)|0);b=0;while(1){f=c[d+4>>2]&-8;g=f-p|0;if(g>>>0<e>>>0)if((f|0)==(p|0)){e=g;a=d;b=d;C=90;break a}else{e=g;b=d}f=c[d+20>>2]|0;d=c[d+16+(h>>>31<<2)>>2]|0;a=(f|0)==0|(f|0)==(d|0)?a:f;f=(d|0)==0;if(f){C=86;break}else h=h<<(f&1^1)}}while(0);if((C|0)==86){if((a|0)==0&(b|0)==0){a=2<<j;a=k&(a|0-a);if(!a)break;s=(a&0-a)+-1|0;n=s>>>12&16;s=s>>>n;m=s>>>5&8;s=s>>>m;o=s>>>2&4;s=s>>>o;r=s>>>1&2;s=s>>>r;a=s>>>1&1;a=c[14392+((m|n|o|r|a)+(s>>>a)<<2)>>2]|0}if(!a){j=e;k=b}else C=90}if((C|0)==90)while(1){C=0;s=(c[a+4>>2]&-8)-p|0;d=s>>>0<e>>>0;e=d?s:e;b=d?a:b;d=c[a+16>>2]|0;if(d|0){a=d;C=90;continue}a=c[a+20>>2]|0;if(!a){j=e;k=b;break}else C=90}if((k|0)!=0?j>>>0<((c[3524]|0)-p|0)>>>0:0){f=c[3526]|0;if(k>>>0<f>>>0)ha();h=k+p|0;if(k>>>0>=h>>>0)ha();g=c[k+24>>2]|0;d=c[k+12>>2]|0;do if((d|0)==(k|0)){b=k+20|0;a=c[b>>2]|0;if(!a){b=k+16|0;a=c[b>>2]|0;if(!a){u=0;break}}while(1){e=a+20|0;d=c[e>>2]|0;if(d|0){a=d;b=e;continue}e=a+16|0;d=c[e>>2]|0;if(!d)break;else{a=d;b=e}}if(b>>>0<f>>>0)ha();else{c[b>>2]=0;u=a;break}}else{e=c[k+8>>2]|0;if(e>>>0<f>>>0)ha();a=e+12|0;if((c[a>>2]|0)!=(k|0))ha();b=d+8|0;if((c[b>>2]|0)==(k|0)){c[a>>2]=d;c[b>>2]=e;u=d;break}else ha()}while(0);do if(g|0){a=c[k+28>>2]|0;b=14392+(a<<2)|0;if((k|0)==(c[b>>2]|0)){c[b>>2]=u;if(!u){c[3523]=c[3523]&~(1<<a);break}}else{if(g>>>0<(c[3526]|0)>>>0)ha();a=g+16|0;if((c[a>>2]|0)==(k|0))c[a>>2]=u;else c[g+20>>2]=u;if(!u)break}b=c[3526]|0;if(u>>>0<b>>>0)ha();c[u+24>>2]=g;a=c[k+16>>2]|0;do if(a|0)if(a>>>0<b>>>0)ha();else{c[u+16>>2]=a;c[a+24>>2]=u;break}while(0);a=c[k+20>>2]|0;if(a|0)if(a>>>0<(c[3526]|0)>>>0)ha();else{c[u+20>>2]=a;c[a+24>>2]=u;break}}while(0);do if(j>>>0>=16){c[k+4>>2]=p|3;c[h+4>>2]=j|1;c[h+j>>2]=j;a=j>>>3;if(j>>>0<256){d=14128+(a<<1<<2)|0;b=c[3522]|0;a=1<<a;if(b&a){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[3526]|0)>>>0)ha();else{w=a;x=b}}else{c[3522]=b|a;w=d+8|0;x=d}c[w>>2]=h;c[x+12>>2]=h;c[h+8>>2]=x;c[h+12>>2]=d;break}a=j>>>8;if(a)if(j>>>0>16777215)b=31;else{I=(a+1048320|0)>>>16&8;J=a<<I;H=(J+520192|0)>>>16&4;J=J<<H;b=(J+245760|0)>>>16&2;b=14-(H|I|b)+(J<<b>>>15)|0;b=j>>>(b+7|0)&1|b<<1}else b=0;e=14392+(b<<2)|0;c[h+28>>2]=b;a=h+16|0;c[a+4>>2]=0;c[a>>2]=0;a=c[3523]|0;d=1<<b;if(!(a&d)){c[3523]=a|d;c[e>>2]=h;c[h+24>>2]=e;c[h+12>>2]=h;c[h+8>>2]=h;break}b=j<<((b|0)==31?0:25-(b>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(j|0)){C=148;break}d=e+16+(b>>>31<<2)|0;a=c[d>>2]|0;if(!a){C=145;break}else{b=b<<1;e=a}}if((C|0)==145)if(d>>>0<(c[3526]|0)>>>0)ha();else{c[d>>2]=h;c[h+24>>2]=e;c[h+12>>2]=h;c[h+8>>2]=h;break}else if((C|0)==148){b=e+8|0;a=c[b>>2]|0;J=c[3526]|0;if(a>>>0>=J>>>0&e>>>0>=J>>>0){c[a+12>>2]=h;c[b>>2]=h;c[h+8>>2]=a;c[h+12>>2]=e;c[h+24>>2]=0;break}else ha()}}else{J=j+p|0;c[k+4>>2]=J|3;J=k+J+4|0;c[J>>2]=c[J>>2]|1}while(0);J=k+8|0;i=K;return J|0}}}else p=-1;while(0);d=c[3524]|0;if(d>>>0>=p>>>0){b=d-p|0;a=c[3527]|0;if(b>>>0>15){J=a+p|0;c[3527]=J;c[3524]=b;c[J+4>>2]=b|1;c[J+b>>2]=b;c[a+4>>2]=p|3}else{c[3524]=0;c[3527]=0;c[a+4>>2]=d|3;J=a+d+4|0;c[J>>2]=c[J>>2]|1}J=a+8|0;i=K;return J|0}a=c[3525]|0;if(a>>>0>p>>>0){H=a-p|0;c[3525]=H;J=c[3528]|0;I=J+p|0;c[3528]=I;c[I+4>>2]=H|1;c[J+4>>2]=p|3;J=J+8|0;i=K;return J|0}if(!(c[3640]|0)){c[3642]=4096;c[3641]=4096;c[3643]=-1;c[3644]=-1;c[3645]=0;c[3633]=0;x=q&-16^1431655768;c[q>>2]=x;c[3640]=x}g=p+48|0;e=c[3642]|0;h=p+47|0;d=e+h|0;e=0-e|0;j=d&e;if(j>>>0<=p>>>0){J=0;i=K;return J|0}a=c[3632]|0;if(a|0?(w=c[3630]|0,x=w+j|0,x>>>0<=w>>>0|x>>>0>a>>>0):0){J=0;i=K;return J|0}b:do if(!(c[3633]&4)){b=c[3528]|0;c:do if(b){f=14536;while(1){a=c[f>>2]|0;if(a>>>0<=b>>>0?(t=f+4|0,(a+(c[t>>2]|0)|0)>>>0>b>>>0):0)break;a=c[f+8>>2]|0;if(!a){C=171;break c}else f=a}a=d-(c[3525]|0)&e;if(a>>>0<2147483647){b=fa(a|0)|0;if((b|0)==((c[f>>2]|0)+(c[t>>2]|0)|0)){if((b|0)!=(-1|0)){h=b;g=a;C=191;break b}}else C=181}}else C=171;while(0);do if((C|0)==171?(v=fa(0)|0,(v|0)!=(-1|0)):0){a=v;b=c[3641]|0;d=b+-1|0;if(!(d&a))a=j;else a=j-a+(d+a&0-b)|0;b=c[3630]|0;d=b+a|0;if(a>>>0>p>>>0&a>>>0<2147483647){x=c[3632]|0;if(x|0?d>>>0<=b>>>0|d>>>0>x>>>0:0)break;b=fa(a|0)|0;if((b|0)==(v|0)){h=v;g=a;C=191;break b}else C=181}}while(0);d:do if((C|0)==181){d=0-a|0;do if(g>>>0>a>>>0&(a>>>0<2147483647&(b|0)!=(-1|0))?(y=c[3642]|0,y=h-a+y&0-y,y>>>0<2147483647):0)if((fa(y|0)|0)==(-1|0)){fa(d|0)|0;break d}else{a=y+a|0;break}while(0);if((b|0)!=(-1|0)){h=b;g=a;C=191;break b}}while(0);c[3633]=c[3633]|4;C=188}else C=188;while(0);if((((C|0)==188?j>>>0<2147483647:0)?(z=fa(j|0)|0,A=fa(0)|0,z>>>0<A>>>0&((z|0)!=(-1|0)&(A|0)!=(-1|0))):0)?(B=A-z|0,B>>>0>(p+40|0)>>>0):0){h=z;g=B;C=191}if((C|0)==191){a=(c[3630]|0)+g|0;c[3630]=a;if(a>>>0>(c[3631]|0)>>>0)c[3631]=a;l=c[3528]|0;do if(l){f=14536;while(1){a=c[f>>2]|0;e=f+4|0;b=c[e>>2]|0;if((h|0)==(a+b|0)){C=201;break}d=c[f+8>>2]|0;if(!d)break;else f=d}if(((C|0)==201?(c[f+12>>2]&8|0)==0:0)?l>>>0<h>>>0&l>>>0>=a>>>0:0){c[e>>2]=b+g;J=l+8|0;J=(J&7|0)==0?0:0-J&7;I=l+J|0;J=g-J+(c[3525]|0)|0;c[3528]=I;c[3525]=J;c[I+4>>2]=J|1;c[I+J+4>>2]=40;c[3529]=c[3644];break}a=c[3526]|0;if(h>>>0<a>>>0){c[3526]=h;j=h}else j=a;b=h+g|0;a=14536;while(1){if((c[a>>2]|0)==(b|0)){C=209;break}a=c[a+8>>2]|0;if(!a){b=14536;break}}if((C|0)==209)if(!(c[a+12>>2]&8)){c[a>>2]=h;n=a+4|0;c[n>>2]=(c[n>>2]|0)+g;n=h+8|0;n=h+((n&7|0)==0?0:0-n&7)|0;a=b+8|0;a=b+((a&7|0)==0?0:0-a&7)|0;m=n+p|0;k=a-n-p|0;c[n+4>>2]=p|3;do if((a|0)!=(l|0)){if((a|0)==(c[3527]|0)){J=(c[3524]|0)+k|0;c[3524]=J;c[3527]=m;c[m+4>>2]=J|1;c[m+J>>2]=J;break}b=c[a+4>>2]|0;if((b&3|0)==1){h=b&-8;f=b>>>3;e:do if(b>>>0>=256){g=c[a+24>>2]|0;e=c[a+12>>2]|0;do if((e|0)==(a|0)){e=a+16|0;d=e+4|0;b=c[d>>2]|0;if(!b){b=c[e>>2]|0;if(!b){H=0;break}else f=e}else f=d;while(1){e=b+20|0;d=c[e>>2]|0;if(d|0){b=d;f=e;continue}e=b+16|0;d=c[e>>2]|0;if(!d)break;else{b=d;f=e}}if(f>>>0<j>>>0)ha();else{c[f>>2]=0;H=b;break}}else{f=c[a+8>>2]|0;if(f>>>0<j>>>0)ha();b=f+12|0;if((c[b>>2]|0)!=(a|0))ha();d=e+8|0;if((c[d>>2]|0)==(a|0)){c[b>>2]=e;c[d>>2]=f;H=e;break}else ha()}while(0);if(!g)break;b=c[a+28>>2]|0;d=14392+(b<<2)|0;do if((a|0)!=(c[d>>2]|0)){if(g>>>0<(c[3526]|0)>>>0)ha();b=g+16|0;if((c[b>>2]|0)==(a|0))c[b>>2]=H;else c[g+20>>2]=H;if(!H)break e}else{c[d>>2]=H;if(H|0)break;c[3523]=c[3523]&~(1<<b);break e}while(0);e=c[3526]|0;if(H>>>0<e>>>0)ha();c[H+24>>2]=g;d=a+16|0;b=c[d>>2]|0;do if(b|0)if(b>>>0<e>>>0)ha();else{c[H+16>>2]=b;c[b+24>>2]=H;break}while(0);b=c[d+4>>2]|0;if(!b)break;if(b>>>0<(c[3526]|0)>>>0)ha();else{c[H+20>>2]=b;c[b+24>>2]=H;break}}else{d=c[a+8>>2]|0;e=c[a+12>>2]|0;b=14128+(f<<1<<2)|0;do if((d|0)!=(b|0)){if(d>>>0<j>>>0)ha();if((c[d+12>>2]|0)==(a|0))break;ha()}while(0);if((e|0)==(d|0)){c[3522]=c[3522]&~(1<<f);break}do if((e|0)==(b|0))E=e+8|0;else{if(e>>>0<j>>>0)ha();b=e+8|0;if((c[b>>2]|0)==(a|0)){E=b;break}ha()}while(0);c[d+12>>2]=e;c[E>>2]=d}while(0);a=a+h|0;f=h+k|0}else f=k;a=a+4|0;c[a>>2]=c[a>>2]&-2;c[m+4>>2]=f|1;c[m+f>>2]=f;a=f>>>3;if(f>>>0<256){d=14128+(a<<1<<2)|0;b=c[3522]|0;a=1<<a;do if(!(b&a)){c[3522]=b|a;I=d+8|0;J=d}else{a=d+8|0;b=c[a>>2]|0;if(b>>>0>=(c[3526]|0)>>>0){I=a;J=b;break}ha()}while(0);c[I>>2]=m;c[J+12>>2]=m;c[m+8>>2]=J;c[m+12>>2]=d;break}a=f>>>8;do if(!a)b=0;else{if(f>>>0>16777215){b=31;break}I=(a+1048320|0)>>>16&8;J=a<<I;H=(J+520192|0)>>>16&4;J=J<<H;b=(J+245760|0)>>>16&2;b=14-(H|I|b)+(J<<b>>>15)|0;b=f>>>(b+7|0)&1|b<<1}while(0);e=14392+(b<<2)|0;c[m+28>>2]=b;a=m+16|0;c[a+4>>2]=0;c[a>>2]=0;a=c[3523]|0;d=1<<b;if(!(a&d)){c[3523]=a|d;c[e>>2]=m;c[m+24>>2]=e;c[m+12>>2]=m;c[m+8>>2]=m;break}b=f<<((b|0)==31?0:25-(b>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(f|0)){C=279;break}d=e+16+(b>>>31<<2)|0;a=c[d>>2]|0;if(!a){C=276;break}else{b=b<<1;e=a}}if((C|0)==276)if(d>>>0<(c[3526]|0)>>>0)ha();else{c[d>>2]=m;c[m+24>>2]=e;c[m+12>>2]=m;c[m+8>>2]=m;break}else if((C|0)==279){b=e+8|0;a=c[b>>2]|0;J=c[3526]|0;if(a>>>0>=J>>>0&e>>>0>=J>>>0){c[a+12>>2]=m;c[b>>2]=m;c[m+8>>2]=a;c[m+12>>2]=e;c[m+24>>2]=0;break}else ha()}}else{J=(c[3525]|0)+k|0;c[3525]=J;c[3528]=m;c[m+4>>2]=J|1}while(0);J=n+8|0;i=K;return J|0}else b=14536;while(1){a=c[b>>2]|0;if(a>>>0<=l>>>0?(D=a+(c[b+4>>2]|0)|0,D>>>0>l>>>0):0)break;b=c[b+8>>2]|0}f=D+-47|0;b=f+8|0;b=f+((b&7|0)==0?0:0-b&7)|0;f=l+16|0;b=b>>>0<f>>>0?l:b;a=b+8|0;d=h+8|0;d=(d&7|0)==0?0:0-d&7;J=h+d|0;d=g+-40-d|0;c[3528]=J;c[3525]=d;c[J+4>>2]=d|1;c[J+d+4>>2]=40;c[3529]=c[3644];d=b+4|0;c[d>>2]=27;c[a>>2]=c[3634];c[a+4>>2]=c[3635];c[a+8>>2]=c[3636];c[a+12>>2]=c[3637];c[3634]=h;c[3635]=g;c[3637]=0;c[3636]=a;a=b+24|0;do{a=a+4|0;c[a>>2]=7}while((a+4|0)>>>0<D>>>0);if((b|0)!=(l|0)){g=b-l|0;c[d>>2]=c[d>>2]&-2;c[l+4>>2]=g|1;c[b>>2]=g;a=g>>>3;if(g>>>0<256){d=14128+(a<<1<<2)|0;b=c[3522]|0;a=1<<a;if(b&a){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[3526]|0)>>>0)ha();else{F=a;G=b}}else{c[3522]=b|a;F=d+8|0;G=d}c[F>>2]=l;c[G+12>>2]=l;c[l+8>>2]=G;c[l+12>>2]=d;break}a=g>>>8;if(a)if(g>>>0>16777215)d=31;else{I=(a+1048320|0)>>>16&8;J=a<<I;H=(J+520192|0)>>>16&4;J=J<<H;d=(J+245760|0)>>>16&2;d=14-(H|I|d)+(J<<d>>>15)|0;d=g>>>(d+7|0)&1|d<<1}else d=0;e=14392+(d<<2)|0;c[l+28>>2]=d;c[l+20>>2]=0;c[f>>2]=0;a=c[3523]|0;b=1<<d;if(!(a&b)){c[3523]=a|b;c[e>>2]=l;c[l+24>>2]=e;c[l+12>>2]=l;c[l+8>>2]=l;break}b=g<<((d|0)==31?0:25-(d>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(g|0)){C=305;break}d=e+16+(b>>>31<<2)|0;a=c[d>>2]|0;if(!a){C=302;break}else{b=b<<1;e=a}}if((C|0)==302)if(d>>>0<(c[3526]|0)>>>0)ha();else{c[d>>2]=l;c[l+24>>2]=e;c[l+12>>2]=l;c[l+8>>2]=l;break}else if((C|0)==305){b=e+8|0;a=c[b>>2]|0;J=c[3526]|0;if(a>>>0>=J>>>0&e>>>0>=J>>>0){c[a+12>>2]=l;c[b>>2]=l;c[l+8>>2]=a;c[l+12>>2]=e;c[l+24>>2]=0;break}else ha()}}}else{J=c[3526]|0;if((J|0)==0|h>>>0<J>>>0)c[3526]=h;c[3634]=h;c[3635]=g;c[3637]=0;c[3531]=c[3640];c[3530]=-1;a=0;do{J=14128+(a<<1<<2)|0;c[J+12>>2]=J;c[J+8>>2]=J;a=a+1|0}while((a|0)!=32);J=h+8|0;J=(J&7|0)==0?0:0-J&7;I=h+J|0;J=g+-40-J|0;c[3528]=I;c[3525]=J;c[I+4>>2]=J|1;c[I+J+4>>2]=40;c[3529]=c[3644]}while(0);a=c[3525]|0;if(a>>>0>p>>>0){H=a-p|0;c[3525]=H;J=c[3528]|0;I=J+p|0;c[3528]=I;c[I+4>>2]=H|1;c[J+4>>2]=p|3;J=J+8|0;i=K;return J|0}}if(!(c[3510]|0))a=14084;else a=c[(bb()|0)+64>>2]|0;c[a>>2]=12;J=0;i=K;return J|0}
function Za(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;if(!a)return;d=a+-8|0;h=c[3526]|0;if(d>>>0<h>>>0)ha();a=c[a+-4>>2]|0;b=a&3;if((b|0)==1)ha();e=a&-8;n=d+e|0;do if(!(a&1)){a=c[d>>2]|0;if(!b)return;k=d+(0-a)|0;j=a+e|0;if(k>>>0<h>>>0)ha();if((k|0)==(c[3527]|0)){b=n+4|0;a=c[b>>2]|0;if((a&3|0)!=3){q=k;f=j;break}c[3524]=j;c[b>>2]=a&-2;c[k+4>>2]=j|1;c[k+j>>2]=j;return}e=a>>>3;if(a>>>0<256){b=c[k+8>>2]|0;d=c[k+12>>2]|0;a=14128+(e<<1<<2)|0;if((b|0)!=(a|0)){if(b>>>0<h>>>0)ha();if((c[b+12>>2]|0)!=(k|0))ha()}if((d|0)==(b|0)){c[3522]=c[3522]&~(1<<e);q=k;f=j;break}if((d|0)!=(a|0)){if(d>>>0<h>>>0)ha();a=d+8|0;if((c[a>>2]|0)==(k|0))g=a;else ha()}else g=d+8|0;c[b+12>>2]=d;c[g>>2]=b;q=k;f=j;break}g=c[k+24>>2]|0;d=c[k+12>>2]|0;do if((d|0)==(k|0)){d=k+16|0;b=d+4|0;a=c[b>>2]|0;if(!a){a=c[d>>2]|0;if(!a){i=0;break}else e=d}else e=b;while(1){d=a+20|0;b=c[d>>2]|0;if(b|0){a=b;e=d;continue}d=a+16|0;b=c[d>>2]|0;if(!b)break;else{a=b;e=d}}if(e>>>0<h>>>0)ha();else{c[e>>2]=0;i=a;break}}else{e=c[k+8>>2]|0;if(e>>>0<h>>>0)ha();a=e+12|0;if((c[a>>2]|0)!=(k|0))ha();b=d+8|0;if((c[b>>2]|0)==(k|0)){c[a>>2]=d;c[b>>2]=e;i=d;break}else ha()}while(0);if(g){a=c[k+28>>2]|0;b=14392+(a<<2)|0;if((k|0)==(c[b>>2]|0)){c[b>>2]=i;if(!i){c[3523]=c[3523]&~(1<<a);q=k;f=j;break}}else{if(g>>>0<(c[3526]|0)>>>0)ha();a=g+16|0;if((c[a>>2]|0)==(k|0))c[a>>2]=i;else c[g+20>>2]=i;if(!i){q=k;f=j;break}}d=c[3526]|0;if(i>>>0<d>>>0)ha();c[i+24>>2]=g;b=k+16|0;a=c[b>>2]|0;do if(a|0)if(a>>>0<d>>>0)ha();else{c[i+16>>2]=a;c[a+24>>2]=i;break}while(0);a=c[b+4>>2]|0;if(a)if(a>>>0<(c[3526]|0)>>>0)ha();else{c[i+20>>2]=a;c[a+24>>2]=i;q=k;f=j;break}else{q=k;f=j}}else{q=k;f=j}}else{q=d;f=e}while(0);if(q>>>0>=n>>>0)ha();a=n+4|0;b=c[a>>2]|0;if(!(b&1))ha();if(!(b&2)){if((n|0)==(c[3528]|0)){p=(c[3525]|0)+f|0;c[3525]=p;c[3528]=q;c[q+4>>2]=p|1;if((q|0)!=(c[3527]|0))return;c[3527]=0;c[3524]=0;return}if((n|0)==(c[3527]|0)){p=(c[3524]|0)+f|0;c[3524]=p;c[3527]=q;c[q+4>>2]=p|1;c[q+p>>2]=p;return}f=(b&-8)+f|0;e=b>>>3;do if(b>>>0>=256){g=c[n+24>>2]|0;a=c[n+12>>2]|0;do if((a|0)==(n|0)){d=n+16|0;b=d+4|0;a=c[b>>2]|0;if(!a){a=c[d>>2]|0;if(!a){m=0;break}else e=d}else e=b;while(1){d=a+20|0;b=c[d>>2]|0;if(b|0){a=b;e=d;continue}d=a+16|0;b=c[d>>2]|0;if(!b)break;else{a=b;e=d}}if(e>>>0<(c[3526]|0)>>>0)ha();else{c[e>>2]=0;m=a;break}}else{b=c[n+8>>2]|0;if(b>>>0<(c[3526]|0)>>>0)ha();d=b+12|0;if((c[d>>2]|0)!=(n|0))ha();e=a+8|0;if((c[e>>2]|0)==(n|0)){c[d>>2]=a;c[e>>2]=b;m=a;break}else ha()}while(0);if(g|0){a=c[n+28>>2]|0;b=14392+(a<<2)|0;if((n|0)==(c[b>>2]|0)){c[b>>2]=m;if(!m){c[3523]=c[3523]&~(1<<a);break}}else{if(g>>>0<(c[3526]|0)>>>0)ha();a=g+16|0;if((c[a>>2]|0)==(n|0))c[a>>2]=m;else c[g+20>>2]=m;if(!m)break}d=c[3526]|0;if(m>>>0<d>>>0)ha();c[m+24>>2]=g;b=n+16|0;a=c[b>>2]|0;do if(a|0)if(a>>>0<d>>>0)ha();else{c[m+16>>2]=a;c[a+24>>2]=m;break}while(0);a=c[b+4>>2]|0;if(a|0)if(a>>>0<(c[3526]|0)>>>0)ha();else{c[m+20>>2]=a;c[a+24>>2]=m;break}}}else{b=c[n+8>>2]|0;d=c[n+12>>2]|0;a=14128+(e<<1<<2)|0;if((b|0)!=(a|0)){if(b>>>0<(c[3526]|0)>>>0)ha();if((c[b+12>>2]|0)!=(n|0))ha()}if((d|0)==(b|0)){c[3522]=c[3522]&~(1<<e);break}if((d|0)!=(a|0)){if(d>>>0<(c[3526]|0)>>>0)ha();a=d+8|0;if((c[a>>2]|0)==(n|0))l=a;else ha()}else l=d+8|0;c[b+12>>2]=d;c[l>>2]=b}while(0);c[q+4>>2]=f|1;c[q+f>>2]=f;if((q|0)==(c[3527]|0)){c[3524]=f;return}}else{c[a>>2]=b&-2;c[q+4>>2]=f|1;c[q+f>>2]=f}a=f>>>3;if(f>>>0<256){d=14128+(a<<1<<2)|0;b=c[3522]|0;a=1<<a;if(b&a){a=d+8|0;b=c[a>>2]|0;if(b>>>0<(c[3526]|0)>>>0)ha();else{o=a;p=b}}else{c[3522]=b|a;o=d+8|0;p=d}c[o>>2]=q;c[p+12>>2]=q;c[q+8>>2]=p;c[q+12>>2]=d;return}a=f>>>8;if(a)if(f>>>0>16777215)b=31;else{o=(a+1048320|0)>>>16&8;p=a<<o;n=(p+520192|0)>>>16&4;p=p<<n;b=(p+245760|0)>>>16&2;b=14-(n|o|b)+(p<<b>>>15)|0;b=f>>>(b+7|0)&1|b<<1}else b=0;e=14392+(b<<2)|0;c[q+28>>2]=b;c[q+20>>2]=0;c[q+16>>2]=0;a=c[3523]|0;d=1<<b;do if(a&d){b=f<<((b|0)==31?0:25-(b>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(f|0)){a=130;break}d=e+16+(b>>>31<<2)|0;a=c[d>>2]|0;if(!a){a=127;break}else{b=b<<1;e=a}}if((a|0)==127)if(d>>>0<(c[3526]|0)>>>0)ha();else{c[d>>2]=q;c[q+24>>2]=e;c[q+12>>2]=q;c[q+8>>2]=q;break}else if((a|0)==130){b=e+8|0;a=c[b>>2]|0;p=c[3526]|0;if(a>>>0>=p>>>0&e>>>0>=p>>>0){c[a+12>>2]=q;c[b>>2]=q;c[q+8>>2]=a;c[q+12>>2]=e;c[q+24>>2]=0;break}else ha()}}else{c[3523]=a|d;c[e>>2]=q;c[q+24>>2]=e;c[q+12>>2]=q;c[q+8>>2]=q}while(0);q=(c[3530]|0)+-1|0;c[3530]=q;if(!q)a=14544;else return;while(1){a=c[a>>2]|0;if(!a)break;else a=a+8|0}c[3530]=-1;return}function _a(){}function $a(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;h=b&3;i=d|d<<8|d<<16|d<<24;g=f&~3;if(h){h=b+4-h|0;while((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}}while((b|0)<(g|0)){c[b>>2]=i;b=b+4|0}}while((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}return b-e|0}function ab(a){a=a|0;return (a&255)<<24|(a>>8&255)<<16|(a>>16&255)<<8|a>>>24|0}function bb(){return 0}function cb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((e|0)>=4096)return ga(b|0,d|0,e|0)|0;f=b|0;if((b&3)==(d&3)){while(b&3){if(!e)return f|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function db(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return ka[a&1](b|0,c|0,d|0)|0}function eb(a,b,c){a=a|0;b=b|0;c=c|0;la[a&1](b|0,c|0)}function fb(a,b,c){a=a|0;b=b|0;c=c|0;return ma[a&3](b|0,c|0)|0}function gb(a,b,c){a=a|0;b=b|0;c=c|0;aa(0);return 0}function hb(a,b){a=a|0;b=b|0;aa(1)}function ib(a,b){a=a|0;b=b|0;aa(2);return 0}

// EMSCRIPTEN_END_FUNCS
var ka=[gb,Ua];var la=[hb,Va];var ma=[ib,Fa,Ha,Ja];return{_free:Za,_ZLIBJS_freeInflateContext:Ca,_ZLIBJS_createInflateContext:Aa,_pthread_self:bb,_memset:$a,_ZLIBJS_freeDeflateContext:za,_malloc:Ya,_ZLIBJS_deflate:ya,_memcpy:cb,_llvm_bswap_i32:ab,_ZLIBJS_inflate:Ba,_ZLIBJS_createDeflateContext:xa,_ZLIBJS_init:wa,runPostSets:_a,stackAlloc:na,stackSave:oa,stackRestore:pa,establishStackSpace:qa,setThrew:ra,setTempRet0:ua,getTempRet0:va,dynCall_iiii:db,dynCall_vii:eb,dynCall_iii:fb}})


// EMSCRIPTEN_END_ASM
(b.q,b.r,buffer),Q=b._free=Z._free;b._ZLIBJS_inflate=Z._ZLIBJS_inflate;b._ZLIBJS_createInflateContext=Z._ZLIBJS_createInflateContext;var xa=b._pthread_self=Z._pthread_self,va=b._memset=Z._memset;b._ZLIBJS_freeDeflateContext=Z._ZLIBJS_freeDeflateContext;var N=b._malloc=Z._malloc;
b._ZLIBJS_deflate=Z._ZLIBJS_deflate;var ya=b._memcpy=Z._memcpy;b._ZLIBJS_init=Z._ZLIBJS_init;b._ZLIBJS_freeInflateContext=Z._ZLIBJS_freeInflateContext;b._ZLIBJS_createDeflateContext=Z._ZLIBJS_createDeflateContext;var wa=b._llvm_bswap_i32=Z._llvm_bswap_i32;b.runPostSets=Z.runPostSets;b.dynCall_iiii=Z.dynCall_iiii;b.dynCall_vii=Z.dynCall_vii;b.dynCall_iii=Z.dynCall_iii;B.m=Z.stackAlloc;B.B=Z.stackSave;B.A=Z.stackRestore;B.H=Z.establishStackSpace;B.w=Z.setTempRet0;B.u=Z.getTempRet0;
function y(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}y.prototype=Error();y.prototype.constructor=y;var za=null;
b.callMain=b.F=function(a){function c(){for(var a=0;3>a;a++)e.push(0)}a=a||[];X||(X=!0,V(W));var d=a.length+1,e=[M(P(b.thisProgram),"i8",0)];c();for(var g=0;g<d-1;g+=1)e.push(M(P(a[g]),"i8",0)),c();e.push(0);e=M(e,"i32",0);try{var l=b._main(d,e,0);Aa(l,!0)}catch(m){if(!(m instanceof y))if("SimulateInfiniteLoop"==m)b.noExitRuntime=!0;else throw m&&"object"===typeof m&&m.stack&&b.h("exception thrown: "+[m,m.stack]),m;}finally{}};
function Ba(a){function c(){if(!b.calledRun&&(b.calledRun=!0,!G)){X||(X=!0,V(W));V(oa);if(b.onRuntimeInitialized)b.onRuntimeInitialized();b._main&&Ca&&b.callMain(a);if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var c=b.postRun.shift();qa.unshift(c)}V(qa)}}a=a||b.arguments;null===za&&(za=Date.now());if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)ra();V(na);b.calledRun||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},
1);c()},1)):c())}b.run=b.run=Ba;function Aa(a,c){if(!c||!b.noExitRuntime){if(!b.noExitRuntime&&(G=!0,z=void 0,V(pa),b.onExit))b.onExit(a);r?process.exit(a):t&&"function"===typeof quit&&quit(a);throw new y(a);}}b.exit=b.exit=Aa;var Da=[];function F(a){void 0!==a?(b.print(a),b.h(a),a=JSON.stringify(a)):a="";G=!0;var c="abort("+a+") at "+ga()+"\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";Da&&Da.forEach(function(d){c=d(c,a)});throw c;}b.abort=b.abort=F;
if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();var Ca=!0;b.noInitialRun&&(Ca=!1);Ba();var sa=b.ZLIBJS_instances={};


var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
var Z_MEM_ERROR = -4;
var Z_VERSION_ERROR = -6;
var ERROR_TABLE = {};
ERROR_TABLE[Z_STREAM_ERROR] = 'invalid compression level';
ERROR_TABLE[Z_DATA_ERROR] = 'invalid or incomplete deflate data';
ERROR_TABLE[Z_MEM_ERROR] = 'out of memory';
ERROR_TABLE[Z_VERSION_ERROR] = 'zlib version mismatch';
var defaultParams = {
    compressionLevel: 9,
    chunkSize: 16 * 1024,
    shareMemory: false,
    src: null,
    streamFn: function(){}
};

function assign( source )
{
    Array.prototype.slice.call(arguments, 1).forEach(function(o) {
        if (o == null || typeof o !== 'object') return;
        Object.keys(o).forEach(function(k) {
            var v = o[k];
            if (v == null) return;
            if (typeof v === 'object')
            {
                source[k] = source[k] || {};
                assign(source[k], v);
            }
            else
            {
                source[k] = v;
            }
        });
    });
    return source;
}

function concat( buffers )
{
    var n, ret, offset = 0;
    n = buffers.map(function(buffer) {
        return buffer.length;
    }).reduce(function(a, b) {
        return a + b;
    }, 0);
    ret = new Uint8Array(n);
    buffers.forEach(function(buffer) {
        ret.set(buffer, offset);
        offset += buffer.length;
    });
    return ret;
}

function zerror( message )
{
    return new Error('zlib-asm: ' + message);
}

function validate( state )
{
    return {
        valid: state >= 0,
        error: ERROR_TABLE[state]
    };
}

var common = {
    defaultParams: defaultParams,
    assign: assign,
    concat: concat,
    zerror: zerror,
    validate: validate
};

function BaseInflate( zlibHeader, params )
{
    params = common.assign({}, common.defaultParams, params);
    this.chunkSize = params.chunkSize;
    this.ctxPtr = Module._ZLIBJS_createInflateContext(zlibHeader);
    if (!this.ctxPtr) throw common.zerror('ZLIBJS_createInflateContext');
    Module.ZLIBJS_instances[this.ctxPtr] = this;
    Module._ZLIBJS_init(this.chunkSize);
}
BaseInflate.prototype['inflate'] = function( ){
    var v = common.validate(Module._ZLIBJS_inflate(this.ctxPtr, this.chunkSize));
    if (!v.valid)
    {
        this.cleanup();
        throw common.zerror(v.error);
    }
};
BaseInflate.prototype['cleanup'] = function( ){
    this.ctxPtr && Module._ZLIBJS_freeInflateContext(this.ctxPtr);
    delete Module.ZLIBJS_instances[this.ctxPtr];
};

function BaseDeflate( zlibHeader, params )
{
    params = common.assign({}, common.defaultParams, params);
    this.chunkSize = params.chunkSize;
    if (params.level) params.compressionLevel = params.level;
    this.compressionLevel = params.compressionLevel = Math.min(Math.max(params.compressionLevel, 0), 9);
    this.ctxPtr = Module._ZLIBJS_createDeflateContext(this.compressionLevel, zlibHeader);
    if (!this.ctxPtr) throw common.zerror('ZLIBJS_createDeflateContext');
    Module.ZLIBJS_instances[this.ctxPtr] = this;
    Module._ZLIBJS_init(this.chunkSize);
}
BaseDeflate.prototype['deflate'] = function( flush ) {
    var v = common.validate(Module._ZLIBJS_deflate(this.ctxPtr, this.chunkSize, +flush));
    if (!v.valid)
    {
        this.cleanup();
        throw common.zerror(v.error);
    }
};
BaseDeflate.prototype['cleanup'] = function( ){
    this.ctxPtr && Module._ZLIBJS_freeDeflateContext(this.ctxPtr);
    delete Module.ZLIBJS_instances[this.ctxPtr];
};

var ReaderWriterMixin = {
    $read: function( srcPtr, size ){
        Module.HEAPU8.set(this.src.subarray(this.offset, this.offset + this.srcSize), srcPtr);
        return this.srcSize;
    },
    $write: function( dstPtr, size ){
        var bytes = Module.HEAPU8.subarray(dstPtr, dstPtr + size)
        bytes = this.shareMemory ? bytes : new Uint8Array(bytes);
        this.streamFn(bytes);
    }
};
ReaderWriterMixin['$read'] = ReaderWriterMixin.$read;
ReaderWriterMixin['$write'] = ReaderWriterMixin.$write;

var StreamReaderWriterMixin = {
    $read: function( srcPtr, size ){
        Module.HEAPU8.set(new Uint8Array(this.src.buffer, this.src.byteOffset, this.srcSize), srcPtr);
        return this.srcSize;
    },
    $write: function( dstPtr, size ){
        this.dst = new Buffer(Module.HEAPU8.buffer).slice(dstPtr, dstPtr + size);
        this.push(new Buffer(this.dst));
    }
};
StreamReaderWriterMixin['$read'] = StreamReaderWriterMixin.$read;
StreamReaderWriterMixin['$write'] = StreamReaderWriterMixin.$write;

function Inflate( zlibHeader, params )
{
    BaseInflate.call(this, zlibHeader, params);
    this.src = params.input;
    this.streamFn = params.streamFn;
    this.shareMemory = params.shareMemory;
    this.offset = 0;
    this.srcSize = 0;
}
common.assign(Inflate.prototype, BaseInflate.prototype, ReaderWriterMixin);
Inflate.prototype.constructor = Inflate;

Inflate.prototype['inflateAll'] = function( ){
    for (; this.offset < this.src.length; this.offset += this.chunkSize)
    {
        this.srcSize = Math.min(this.src.length - this.offset, this.chunkSize);
        this.inflate();
    }
    this.cleanup();
};

function Deflate( zlibHeader, params )
{
    BaseDeflate.call(this, zlibHeader, params);
    this.src = params.input;
    this.streamFn = params.streamFn;
    this.shareMemory = params.shareMemory;
    this.offset = 0;
    this.srcSize = 0;
}
common.assign(Deflate.prototype, BaseDeflate.prototype, ReaderWriterMixin);
Deflate.prototype.constructor = Deflate;

Deflate.prototype['deflateAll'] = function( ){
    for (; this.offset < this.src.length; this.offset += this.chunkSize)
    {
        this.srcSize = Math.min(this.src.length - this.offset, this.chunkSize);
        this.deflate(this.src.length - this.offset <= this.chunkSize);
    }
    this.cleanup();
};

function zlibInflate( zlibHeader, input, chunkSize )
{
    var buffers = [];
    var inf = new Inflate(zlibHeader, {
        input: input,
        chunkSize: chunkSize,
        shareMemory: false,
        streamFn: function(bytes) {
            buffers.push(bytes);
        }
    });
    inf.inflateAll();
    return common.concat(buffers);
}

function zlibDeflate( zlibHeader, input, compressionLevel, chunkSize )
{
    var buffers = [];
    var def = new Deflate(zlibHeader, {
        input: input,
        compressionLevel: compressionLevel,
        chunkSize: chunkSize,
        shareMemory: false,
        streamFn: function(bytes) {
            buffers.push(bytes);
        }
    });
    def.deflateAll();
    return common.concat(buffers);
}

FILTER.Util.ZLib = {
    Module: Module,

    inflate: function( data, chunkSize ){
        return zlibInflate(1, data, chunkSize);
    },

    rawinflate: function( data, chunkSize ){
        return zlibInflate(-1, data, chunkSize);
    },

    deflate: function( data, compressionLevel, chunkSize ){
        return zlibDeflate(1, data, compressionLevel, chunkSize);
    },

    rawdeflate: function( data, compressionLevel, chunkSize ){
        return zlibDeflate(-1, data, compressionLevel, chunkSize);
    }
};

}(FILTER);/**
*
* Filter PNG Image Format CODEC
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

// @requires FILTER/util/zlib.js
// you may provide your own zlib implementation if needed by setting/overriding FILTER.Util.ZLib
function zlib_inflate( data, chuckSize )
{
    return FILTER.Util.ZLib.inflate( data, chuckSize );
}
function zlib_deflate( data, deflateLevel, chuckSize )
{
    return FILTER.Util.ZLib.deflate( data, deflateLevel, chuckSize );
}

var CodecUtil = FILTER.Util.Codec, readUInt16 = CodecUtil.readUInt16BE,
    readUInt32 = CodecUtil.readUInt32BE, readBytes = CodecUtil.readBytes;

// adapted from https://github.com/devongovett/png.js/
// and from https://github.com/lukeapage/pngjs
var
APNG_DISPOSE_OP_NONE = 0,
APNG_DISPOSE_OP_BACKGROUND = 1,
APNG_DISPOSE_OP_PREVIOUS = 2,
APNG_BLEND_OP_SOURCE = 0,
APNG_BLEND_OP_OVER = 1;

function PNG( ) { }
PNG.prototype = {
    constructor: PNG,
    
    data: null,
    pos: null,
    palette: null,
    imgData: null,
    transparency: null,
    animation: null,
    text: null,
    width: 0,
    height: 0,
    bits: null,
    colorType: null,
    compressionMethod: null,
    filterMethod: null,
    interlaceMethod: null,
    hasAlphaChannel: null,
    colors: null,
    colorSpace: null,
    pixelBitlength: null,
    
    readData: function( data ) {
        var self = this;
        var chunkSize, colors, delayDen, delayNum, frame, i, index, key, section, short, text, _i, _j, _ref;
        
        self.data = data;
        self.pos = 8;
        self.palette = [];
        self.imgData = [];
        self.transparency = {};
        self.animation = null;
        self.text = {};
        frame = null;
        while( true ) 
        {
            chunkSize = readUInt32( self.data, self );
            section = ((function() {
                var _i, _results;
                _results = [];
                for (i = _i = 0; _i < 4; i = ++_i) {
                _results.push(String.fromCharCode(this.data[this.pos++]));
                }
                return _results;
            }).call(self)).join('');
            
            switch (section) 
            {
                case 'IHDR':
                    self.width = readUInt32( self.data, self );
                    self.height = readUInt32( self.data, self );
                    self.bits = self.data[self.pos++];
                    self.colorType = self.data[self.pos++];
                    self.compressionMethod = self.data[self.pos++];
                    self.filterMethod = self.data[self.pos++];
                    self.interlaceMethod = self.data[self.pos++];
                    break;
                case 'acTL':
                    self.animation = {
                        numFrames: readUInt32( self.data, self ),
                        numPlays: readUInt32( self.data, self ) || Infinity,
                        frames: []
                    };
                    break;
                case 'PLTE':
                    self.palette = readBytes(chunkSize, self.data, self);
                    break;
                case 'fcTL':
                    if (frame) 
                    {
                        self.animation.frames.push(frame);
                    }
                    self.pos += 4;
                    frame = {
                        width: readUInt32( self.data, self ),
                        height: readUInt32( self.data, self ),
                        xOffset: readUInt32( self.data, self ),
                        yOffset: readUInt32( self.data, self )
                    };
                    delayNum = readUInt16( self.data, self );
                    delayDen = readUInt16( self.data, self ) || 100;
                    frame.delay = 1000 * delayNum / delayDen;
                    frame.disposeOp = self.data[self.pos++];
                    frame.blendOp = self.data[self.pos++];
                    frame.data = [];
                    break;
                case 'IDAT':
                case 'fdAT':
                    if (section === 'fdAT') 
                    {
                        self.pos += 4;
                        chunkSize -= 4;
                    }
                    data = (frame != null ? frame.data : void 0) || self.imgData;
                    for (i = _i = 0; 0 <= chunkSize ? _i < chunkSize : _i > chunkSize; i = 0 <= chunkSize ? ++_i : --_i) 
                    {
                        data.push(self.data[self.pos++]);
                    }
                    break;
                case 'tRNS':
                    self.transparency = {};
                    switch (self.colorType) 
                    {
                        case 3:
                            self.transparency.indexed = readBytes(chunkSize, self.data, self);
                            short = 255 - self.transparency.indexed.length;
                            if (short > 0) 
                            {
                                for (i = _j = 0; 0 <= short ? _j < short : _j > short; i = 0 <= short ? ++_j : --_j) 
                                {
                                    self.transparency.indexed.push(255);
                                }
                            }
                            break;
                        case 0:
                            self.transparency.grayscale = readBytes(chunkSize, self.data, self)[0];
                            break;
                        case 2:
                            self.transparency.rgb = readBytes(chunkSize, self.data, self);
                    }
                    break;
                case 'tEXt':
                    text = readBytes(chunkSize, self.data, self);
                    index = text.indexOf(0);
                    key = String.fromCharCode.apply(String, text.slice(0, index));
                    self.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
                    break;
                case 'IEND':
                    if (frame) 
                    {
                        self.animation.frames.push(frame);
                    }
                    self.colors = (function() {
                        switch (this.colorType) 
                        {
                            case 0:
                            case 3:
                            case 4:
                                return 1;
                            case 2:
                            case 6:
                                return 3;
                        }
                    }).call(self);
                    self.hasAlphaChannel = (_ref = self.colorType) === 4 || _ref === 6;
                    colors = self.colors + (self.hasAlphaChannel ? 1 : 0);
                    self.pixelBitlength = self.bits * colors;
                    self.colorSpace = (function() {
                        switch (this.colors) 
                        {
                            case 1:
                                return 'DeviceGray';
                            case 3:
                                return 'DeviceRGB';
                        }
                    }).call(self);
                    self.imgData = new Uint8Array(self.imgData);
                    return;
                default:
                    self.pos += chunkSize;
            }
            self.pos += 4;
            if (self.pos > self.data.length) 
            {
                throw new Error("Incomplete or corrupt PNG file");
            }
        }
    },
    
    decodePixels: function( data ) {
        var self = this, byte, c, col, i, left, length, 
            p, pa, paeth, pb, pc, pixelBytes, pixels, pos, row, 
            scanlineLength, upper, upperLeft, _i, _j, _k, _l, _m;
        if (data == null) 
        {
            data = self.imgData;
        }
        if (data.length === 0) 
        {
            return new Uint8Array(0);
        }
        data = zlib_inflate( data );
        pixelBytes = self.pixelBitlength / 8;
        scanlineLength = pixelBytes * self.width;
        pixels = new Uint8Array(scanlineLength * self.height);
        length = data.length;
        row = 0;
        pos = 0;
        c = 0;
        while (pos < length) 
        {
            switch (data[pos++]) 
            {
                case 0:
                    for (i = _i = 0; _i < scanlineLength; i = _i += 1) 
                    {
                        pixels[c++] = data[pos++];
                    }
                    break;
                case 1:
                    for (i = _j = 0; _j < scanlineLength; i = _j += 1) 
                    {
                        byte = data[pos++];
                        left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                        pixels[c++] = (byte + left) % 256;
                    }
                    break;
                case 2:
                    for (i = _k = 0; _k < scanlineLength; i = _k += 1) 
                    {
                        byte = data[pos++];
                        col = (i - (i % pixelBytes)) / pixelBytes;
                        upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                        pixels[c++] = (upper + byte) % 256;
                    }
                    break;
                case 3:
                    for (i = _l = 0; _l < scanlineLength; i = _l += 1) 
                    {
                        byte = data[pos++];
                        col = (i - (i % pixelBytes)) / pixelBytes;
                        left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                        upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                        pixels[c++] = (byte + Math.floor((left + upper) / 2)) % 256;
                    }
                    break;
                case 4:
                    for (i = _m = 0; _m < scanlineLength; i = _m += 1) 
                    {
                        byte = data[pos++];
                        col = (i - (i % pixelBytes)) / pixelBytes;
                        left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                        if (row === 0) 
                        {
                            upper = upperLeft = 0;
                        } 
                        else 
                        {
                            upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                            upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + (i % pixelBytes)];
                        }
                        p = left + upper - upperLeft;
                        pa = Math.abs(p - left);
                        pb = Math.abs(p - upper);
                        pc = Math.abs(p - upperLeft);
                        if (pa <= pb && pa <= pc) 
                        {
                            paeth = left;
                        } 
                        else if (pb <= pc) 
                        {
                            paeth = upper;
                        } 
                        else 
                        {
                            paeth = upperLeft;
                        }
                        pixels[c++] = (byte + paeth) % 256;
                    }
                    break;
                default:
                    throw new Error("Invalid filter algorithm: " + data[pos - 1]);
            }
            row++;
        }
        return pixels;
    },

    decodePalette: function( ) {
        var self = this, c, i, length, palette, pos, ret, 
            transparency, _i, _ref, _ref1;
        palette = self.palette;
        transparency = self.transparency.indexed || [];
        ret = new Uint8Array((transparency.length || 0) + palette.length);
        pos = 0;
        length = palette.length;
        c = 0;
        for (i = _i = 0, _ref = palette.length; _i < _ref; i = _i += 3) 
        {
            ret[pos++] = palette[i];
            ret[pos++] = palette[i + 1];
            ret[pos++] = palette[i + 2];
            ret[pos++] = (_ref1 = transparency[c++]) != null ? _ref1 : 255;
        }
        return ret;
    },

    copyToImageData: function( imageData, pixels ) {
        var self = this, alpha, colors, data, i, input, 
            j, k, length, palette, v, _ref;
        colors = self.colors;
        palette = null;
        alpha = self.hasAlphaChannel;
        if (self.palette.length) 
        {
            palette = (_ref = self._decodedPalette) != null ? _ref : self._decodedPalette = self.decodePalette();
            colors = 4;
            alpha = true;
        }
        data = imageData.data || imageData;
        length = data.length;
        input = palette || pixels;
        i = j = 0;
        if (colors === 1) 
        {
            while (i < length) 
            {
                k = palette ? pixels[i / 4] * 4 : j;
                v = input[k++];
                data[i++] = v;
                data[i++] = v;
                data[i++] = v;
                data[i++] = alpha ? input[k++] : 255;
                j = k;
            }
        } 
        else 
        {
            while (i < length) 
            {
                k = palette ? pixels[i / 4] * 4 : j;
                data[i++] = input[k++];
                data[i++] = input[k++];
                data[i++] = input[k++];
                data[i++] = alpha ? input[k++] : 255;
                j = k;
            }
        }
    },

    decode: function( ) {
        var self = this, ret;
        ret = new Uint8Array(self.width * self.height * 4);
        self.copyToImageData(ret, self.decodePixels());
        return ret;
    }
};


var constants = {

  PNG_SIGNATURE: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],

  TYPE_IHDR: 0x49484452,
  TYPE_IEND: 0x49454e44,
  TYPE_IDAT: 0x49444154,
  TYPE_PLTE: 0x504c5445,
  TYPE_tRNS: 0x74524e53, // eslint-disable-line camelcase
  TYPE_gAMA: 0x67414d41, // eslint-disable-line camelcase

  // color-type bits
  COLORTYPE_GRAYSCALE: 0,
  COLORTYPE_PALETTE: 1,
  COLORTYPE_COLOR: 2,
  COLORTYPE_ALPHA: 4, // e.g. grayscale and alpha

  // color-type combinations
  COLORTYPE_PALETTE_COLOR: 3,
  COLORTYPE_COLOR_ALPHA: 6,

  COLORTYPE_TO_BPP_MAP: {
    0: 1,
    2: 3,
    3: 1,
    4: 2,
    6: 4
  },

  GAMMA_DIVISION: 100000
};

var crcTable = null;
function computeCRCTable( )
{
  if ( null === crcTable )
  {
  crcTable = new Int32Array(256);
  for (var i = 0; i < 256; i++) {
    var currentCrc = i;
    for (var j = 0; j < 8; j++) {
      if (currentCrc & 1) {
        currentCrc = 0xedb88320 ^ (currentCrc >>> 1);
      }
      else {
        currentCrc = currentCrc >>> 1;
      }
    }
    crcTable[i] = currentCrc;
  }
  }
}

function CrcStream( )
{
  this._crc = -1;
}
CrcStream.prototype.write = function( data ){
  if ( null === crcTable ) computeCRCTable( );
  for (var i = 0; i < data.length; i++) {
    this._crc = crcTable[(this._crc ^ data[i]) & 0xff] ^ (this._crc >>> 8);
  }
  return true;
};
CrcStream.prototype.crc32 = function( ){
  return this._crc ^ -1;
};
CrcStream.crc32 = function( buf ){
  if ( null === crcTable ) computeCRCTable( );
  var crc = -1;
  for (var i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return crc ^ -1;
};

function bitPacker(data, width, height, options)
{
  var outHasAlpha = options.colorType === constants.COLORTYPE_COLOR_ALPHA;
  if (options.inputHasAlpha && outHasAlpha) {
    return data;
  }
  if (!options.inputHasAlpha && !outHasAlpha) {
    return data;
  }

  var outBpp = outHasAlpha ? 4 : 3;
  var outData = new Buffer(width * height * outBpp);
  var inBpp = options.inputHasAlpha ? 4 : 3;
  var inIndex = 0;
  var outIndex = 0;

  var bgColor = options.bgColor || {};
  if (bgColor.red === undefined) {
    bgColor.red = 255;
  }
  if (bgColor.green === undefined) {
    bgColor.green = 255;
  }
  if (bgColor.blue === undefined) {
    bgColor.blue = 255;
  }

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var red = data[inIndex];
      var green = data[inIndex + 1];
      var blue = data[inIndex + 2];

      var alpha;
      if (options.inputHasAlpha) {
        alpha = data[inIndex + 3];
        if (!outHasAlpha) {
          alpha /= 255;
          red = Math.min(Math.max(Math.round((1 - alpha) * bgColor.red + alpha * red), 0), 255);
          green = Math.min(Math.max(Math.round((1 - alpha) * bgColor.green + alpha * green), 0), 255);
          blue = Math.min(Math.max(Math.round((1 - alpha) * bgColor.blue + alpha * blue), 0), 255);
        }
      }
      else {
        alpha = 255;
      }

      outData[outIndex] = red;
      outData[outIndex + 1] = green;
      outData[outIndex + 2] = blue;
      if (outHasAlpha) {
        outData[outIndex + 3] = alpha;
      }

      inIndex += inBpp;
      outIndex += outBpp;
    }
  }

  return outData;
}

function paethPredictor(left, above, upLeft)
{

  var paeth = left + above - upLeft;
  var pLeft = Math.abs(paeth - left);
  var pAbove = Math.abs(paeth - above);
  var pUpLeft = Math.abs(paeth - upLeft);

  if (pLeft <= pAbove && pLeft <= pUpLeft) {
    return left;
  }
  if (pAbove <= pUpLeft) {
    return above;
  }
  return upLeft;
}

function filterNone(pxData, pxPos, byteWidth, rawData, rawPos) {
  pxData.copy(rawData, rawPos, pxPos, pxPos + byteWidth);
}

function filterSumNone(pxData, pxPos, byteWidth) {

  var sum = 0;
  var length = pxPos + byteWidth;

  for (var i = pxPos; i < length; i++) {
    sum += Math.abs(pxData[i]);
  }
  return sum;
}

function filterSub(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {

  for (var x = 0; x < byteWidth; x++) {

    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var val = pxData[pxPos + x] - left;

    rawData[rawPos + x] = val;
  }
}

function filterSumSub(pxData, pxPos, byteWidth, bpp) {

  var sum = 0;
  for (var x = 0; x < byteWidth; x++) {

    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var val = pxData[pxPos + x] - left;

    sum += Math.abs(val);
  }

  return sum;
}

function filterUp(pxData, pxPos, byteWidth, rawData, rawPos) {

  for (var x = 0; x < byteWidth; x++) {

    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var val = pxData[pxPos + x] - up;

    rawData[rawPos + x] = val;
  }
}

function filterSumUp(pxData, pxPos, byteWidth) {

  var sum = 0;
  var length = pxPos + byteWidth;
  for (var x = pxPos; x < length; x++) {

    var up = pxPos > 0 ? pxData[x - byteWidth] : 0;
    var val = pxData[x] - up;

    sum += Math.abs(val);
  }

  return sum;
}

function filterAvg(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {

  for (var x = 0; x < byteWidth; x++) {

    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var val = pxData[pxPos + x] - ((left + up) >> 1);

    rawData[rawPos + x] = val;
  }
}

function filterSumAvg(pxData, pxPos, byteWidth, bpp) {

  var sum = 0;
  for (var x = 0; x < byteWidth; x++) {

    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var val = pxData[pxPos + x] - ((left + up) >> 1);

    sum += Math.abs(val);
  }

  return sum;
}

function filterPaeth(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {

  for (var x = 0; x < byteWidth; x++) {

    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
    var val = pxData[pxPos + x] - paethPredictor(left, up, upleft);

    rawData[rawPos + x] = val;
  }
}

function filterSumPaeth(pxData, pxPos, byteWidth, bpp) {
  var sum = 0;
  for (var x = 0; x < byteWidth; x++) {

    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
    var val = pxData[pxPos + x] - paethPredictor(left, up, upleft);

    sum += Math.abs(val);
  }

  return sum;
}

var filters = {
  0: filterNone,
  1: filterSub,
  2: filterUp,
  3: filterAvg,
  4: filterPaeth
};

var filterSums = {
  0: filterSumNone,
  1: filterSumSub,
  2: filterSumUp,
  3: filterSumAvg,
  4: filterSumPaeth
};

function filter(pxData, width, height, options, bpp)
{
  var filterTypes;
  if (!('filterType' in options) || options.filterType === -1) {
    filterTypes = [0, 1, 2, 3, 4];
  }
  else if (typeof options.filterType === 'number') {
    filterTypes = [options.filterType];
  }
  else {
    throw new Error('unrecognised filter types');
  }

  var byteWidth = width * bpp;
  var rawPos = 0;
  var pxPos = 0;
  var rawData = new Buffer((byteWidth + 1) * height);
  var sel = filterTypes[0];

  for (var y = 0; y < height; y++) {

    if (filterTypes.length > 1) {
      // find best filter for this line (with lowest sum of values)
      var min = Infinity;

      for (var i = 0; i < filterTypes.length; i++) {
        var sum = filterSums[filterTypes[i]](pxData, pxPos, byteWidth, bpp);
        if (sum < min) {
          sel = filterTypes[i];
          min = sum;
        }
      }
    }

    rawData[rawPos] = sel;
    rawPos++;
    filters[sel](pxData, pxPos, byteWidth, rawData, rawPos, bpp);
    rawPos += byteWidth;
    pxPos += byteWidth;
  }
  return rawData;
}

var Packer = function(options) {
  this._options = options;

  options.deflateChunkSize = options.deflateChunkSize || 32 * 1024;
  options.deflateLevel = options.deflateLevel != null ? options.deflateLevel : 9;
  options.deflateStrategy = options.deflateStrategy != null ? options.deflateStrategy : 3;
  options.inputHasAlpha = options.inputHasAlpha != null ? options.inputHasAlpha : true;
  //options.deflateFactory = options.deflateFactory || FILTER.Util.ZLib.createDeflate;
  options.bitDepth = options.bitDepth || 8;
  options.colorType = (typeof options.colorType === 'number') ? options.colorType : constants.COLORTYPE_COLOR_ALPHA;

  if (options.colorType !== constants.COLORTYPE_COLOR && options.colorType !== constants.COLORTYPE_COLOR_ALPHA) {
    throw new Error('option color type:' + options.colorType + ' is not supported at present');
  }
  if (options.bitDepth !== 8) {
    throw new Error('option bit depth:' + options.bitDepth + ' is not supported at present');
  }
};

Packer.prototype.getDeflateOptions = function() {
  return {
    chunkSize: this._options.deflateChunkSize,
    level: this._options.deflateLevel,
    strategy: this._options.deflateStrategy
  };
};

Packer.prototype.createDeflate = function() {
  return this._options.deflateFactory(this.getDeflateOptions());
};

Packer.prototype.filterData = function(data, width, height) {
  // convert to correct format for filtering (e.g. right bpp and bit depth)
  var packedData = bitPacker(data, width, height, this._options);

  // filter pixel data
  var bpp = constants.COLORTYPE_TO_BPP_MAP[this._options.colorType];
  var filteredData = filter(packedData, width, height, this._options, bpp);
  return filteredData;
};

Packer.prototype._packChunk = function(type, data) {

  var len = (data ? data.length : 0);
  var buf = new Buffer(len + 12);

  buf.writeUInt32BE(len, 0);
  buf.writeUInt32BE(type, 4);

  if (data) {
    data.copy(buf, 8);
  }

  buf.writeInt32BE(CrcStream.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
  return buf;
};

Packer.prototype.packGAMA = function(gamma) {
  var buf = new Buffer(4);
  buf.writeUInt32BE(Math.floor(gamma * constants.GAMMA_DIVISION), 0);
  return this._packChunk(constants.TYPE_gAMA, buf);
};

Packer.prototype.packIHDR = function(width, height) {

  var buf = new Buffer(13);
  buf.writeUInt32BE(width, 0);
  buf.writeUInt32BE(height, 4);
  buf[8] = this._options.bitDepth;  // Bit depth
  buf[9] = this._options.colorType; // colorType
  buf[10] = 0; // compression
  buf[11] = 0; // filter
  buf[12] = 0; // interlace

  return this._packChunk(constants.TYPE_IHDR, buf);
};

Packer.prototype.packIDAT = function(data) {
  return this._packChunk(constants.TYPE_IDAT, data);
};

Packer.prototype.packIEND = function() {
  return this._packChunk(constants.TYPE_IEND, null);
};

FILTER.Codec.PNG = {

    encoder: function( imgData, metaData ) {
        metaData = metaData || {};
        //var quality = 'undefined' === typeof metaData.quality ? 100 : metaData.quality;
        var packer = new Packer(metaData);
        var chunks = [];
        
        // Signature
        chunks.push(new Buffer(constants.PNG_SIGNATURE));
        
        // Header
        chunks.push(packer.packIHDR(imgData.width, imgData.height));
        if (metaData.gamma) chunks.push(packer.packGAMA(metaData.gamma));

        var filteredData = packer.filterData(new Buffer(imgData.data), imgData.width, imgData.height);

        // compress it
        var deflateOpts = packer.getDeflateOptions();
        var compressedData = zlib_deflate(filteredData, deflateOpts.level, deflateOpts.chuckSize);
        filteredData = null;

        if (!compressedData || !compressedData.length) throw new Error('bad png - invalid compressed data response');
        chunks.push(packer.packIDAT(new Buffer(compressedData)));

        // End
        chunks.push(packer.packIEND());
        
        return Buffer.concat(chunks);
    },
    
    decoder: function( buffer, metaData ) {
        var png = new PNG( );
        png.readData( new Uint8Array( buffer ) );
        return {
            width: png.width,
            height: png.height,
            data: png.decode( )
        };
    }
};
}(FILTER);/**
*
* Filter JPG/JPEG Image Format CODEC
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

// adapted from https://github.com/eugeneware/jpeg-js

/*
   Copyright 2011 notmasteryet

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// - The JPEG specification can be found in the ITU CCITT Recommendation T.81
//   (www.w3.org/Graphics/JPEG/itu-t81.pdf)
// - The JFIF specification can be found in the JPEG File Interchange Format
//   (www.w3.org/Graphics/JPEG/jfif3.pdf)
// - The Adobe Application-Specific JPEG markers in the Supporting the DCT Filters
//   in PostScript Level 2, Technical Note #5116
//   (partners.adobe.com/public/developer/en/ps/sdk/5116.DCT_Filter.pdf)

var dctZigZag = new Int32Array([
 0,
 1,  8,
16,  9,  2,
 3, 10, 17, 24,
32, 25, 18, 11, 4,
 5, 12, 19, 26, 33, 40,
48, 41, 34, 27, 20, 13,  6,
 7, 14, 21, 28, 35, 42, 49, 56,
57, 50, 43, 36, 29, 22, 15,
23, 30, 37, 44, 51, 58,
59, 52, 45, 38, 31,
39, 46, 53, 60,
61, 54, 47,
55, 62,
63
]);

var dctCos1  =  4017   // cos(pi/16)
var dctSin1  =   799   // sin(pi/16)
var dctCos3  =  3406   // cos(3*pi/16)
var dctSin3  =  2276   // sin(3*pi/16)
var dctCos6  =  1567   // cos(6*pi/16)
var dctSin6  =  3784   // sin(6*pi/16)
var dctSqrt2 =  5793   // sqrt(2)
var dctSqrt1d2 = 2896  // sqrt(2) / 2

function JpegImage( ) { }

function buildHuffmanTable(codeLengths, values) 
{
    var k = 0, code = [], i, j, length = 16;
    while (length > 0 && !codeLengths[length - 1]) length--;
    code.push({children: [], index: 0});
    var p = code[0], q;
    for (i = 0; i < length; i++) 
    {
        for (j = 0; j < codeLengths[i]; j++) 
        {
            p = code.pop();
            p.children[p.index] = values[k];
            while (p.index > 0) 
            {
                p = code.pop();
            }
            p.index++;
            code.push(p);
            while (code.length <= i) 
            {
                code.push(q = {children: [], index: 0});
                p.children[p.index] = q.children;
                p = q;
            }
            k++;
        }
        if (i + 1 < length) 
        {
            // p here points to last code
            code.push(q = {children: [], index: 0});
            p.children[p.index] = q.children;
            p = q;
        }
    }
    return code[0].children;
}

function decodeScan(data, offset, frame, components, resetInterval, 
            spectralStart, spectralEnd, 
            successivePrev, successive) 
{
    var precision = frame.precision;
    var samplesPerLine = frame.samplesPerLine;
    var scanLines = frame.scanLines;
    var mcusPerLine = frame.mcusPerLine;
    var progressive = frame.progressive;
    var maxH = frame.maxH, maxV = frame.maxV;

    var startOffset = offset, bitsData = 0, bitsCount = 0;
    function readBit( ) 
    {
        if (bitsCount > 0) 
        {
            bitsCount--;
            return (bitsData >> bitsCount) & 1;
        }
        bitsData = data[offset++];
        if (bitsData == 0xFF) 
        {
            var nextByte = data[offset++];
            if (nextByte) 
            {
                throw "unexpected marker: " + ((bitsData << 8) | nextByte).toString(16);
            }
            // unstuff 0
        }
        bitsCount = 7;
        return bitsData >>> 7;
    }
    
    function decodeHuffman(tree) 
    {
        var node = tree, bit;
        while ((bit = readBit()) !== null) 
        {
            node = node[bit];
            if (typeof node === 'number')  return node;
            if (typeof node !== 'object') throw "invalid huffman sequence";
        }
        return null;
    }
    
    function receive(length) 
    {
        var n = 0;
        while (length > 0) 
        {
            var bit = readBit();
            if (bit === null) return;
            n = (n << 1) | bit;
            length--;
        }
        return n;
    }
    
    function receiveAndExtend(length) 
    {
        var n = receive(length);
        if (n >= 1 << (length - 1)) return n;
        return n + (-1 << length) + 1;
    }
    
    function decodeBaseline(component, zz) 
    {
        var t = decodeHuffman(component.huffmanTableDC);
        var diff = t === 0 ? 0 : receiveAndExtend(t);
        zz[0]= (component.pred += diff);
        var k = 1;
        while (k < 64) 
        {
            var rs = decodeHuffman(component.huffmanTableAC);
            var s = rs & 15, r = rs >> 4;
            if (s === 0) 
            {
                if (r < 15) break;
                k += 16;
                continue;
            }
            k += r;
            var z = dctZigZag[k];
            zz[z] = receiveAndExtend(s);
            k++;
        }
    }
    
    function decodeDCFirst(component, zz) 
    {
        var t = decodeHuffman(component.huffmanTableDC);
        var diff = t === 0 ? 0 : (receiveAndExtend(t) << successive);
        zz[0] = (component.pred += diff);
    }
    
    function decodeDCSuccessive(component, zz) 
    {
        zz[0] |= readBit() << successive;
    }
    
    var eobrun = 0;
    
    function decodeACFirst(component, zz) 
    {
        if (eobrun > 0) 
        {
            eobrun--;
            return;
        }
        var k = spectralStart, e = spectralEnd;
        while (k <= e) 
        {
            var rs = decodeHuffman(component.huffmanTableAC);
            var s = rs & 15, r = rs >> 4;
            if (s === 0) 
            {
                if (r < 15) 
                {
                    eobrun = receive(r) + (1 << r) - 1;
                    break;
                }
                k += 16;
                continue;
            }
            k += r;
            var z = dctZigZag[k];
            zz[z] = receiveAndExtend(s) * (1 << successive);
            k++;
        }
    }
    
    var successiveACState = 0, successiveACNextValue;
    
    function decodeACSuccessive(component, zz) 
    {
        var k = spectralStart, e = spectralEnd, r = 0;
        while (k <= e) 
        {
            var z = dctZigZag[k];
            switch (successiveACState) 
            {
                case 0: // initial state
                    var rs = decodeHuffman(component.huffmanTableAC);
                    var s = rs & 15, r = rs >> 4;
                    if (s === 0) 
                    {
                        if (r < 15) 
                        {
                            eobrun = receive(r) + (1 << r);
                            successiveACState = 4;
                        } 
                        else 
                        {
                            r = 16;
                            successiveACState = 1;
                        }
                    } 
                    else 
                    {
                        if (s !== 1) throw "invalid ACn encoding";
                        successiveACNextValue = receiveAndExtend(s);
                        successiveACState = r ? 2 : 3;
                    }
                    continue;
                case 1: // skipping r zero items
                case 2:
                    if (zz[z]) zz[z] += (readBit() << successive);
                    else 
                    {
                        r--;
                        if (r === 0) successiveACState = successiveACState == 2 ? 3 : 0;
                    }
                    break;
                case 3: // set value for a zero item
                    if (zz[z]) zz[z] += (readBit() << successive);
                    else 
                    {
                        zz[z] = successiveACNextValue << successive;
                        successiveACState = 0;
                    }
                    break;
                case 4: // eob
                    if (zz[z]) zz[z] += (readBit() << successive);
                    break;
            }
            k++;
        }
        if (successiveACState === 4) 
        {
            eobrun--;
            if (eobrun === 0) successiveACState = 0;
        }
    }
    
    function decodeMcu(component, decode, mcu, row, col) 
    {
        var mcuRow = (mcu / mcusPerLine) | 0;
        var mcuCol = mcu % mcusPerLine;
        var blockRow = mcuRow * component.v + row;
        var blockCol = mcuCol * component.h + col;
        decode(component, component.blocks[blockRow][blockCol]);
    }
    
    function decodeBlock(component, decode, mcu) 
    {
        var blockRow = (mcu / component.blocksPerLine) | 0;
        var blockCol = mcu % component.blocksPerLine;
        decode(component, component.blocks[blockRow][blockCol]);
    }

    var componentsLength = components.length;
    var component, i, j, k, n;
    var decodeFn;
    if (progressive) 
    {
        if (spectralStart === 0) decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
        else decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
    } 
    else 
    {
        decodeFn = decodeBaseline;
    }

    var mcu = 0, marker;
    var mcuExpected;
    if (componentsLength == 1) 
    {
        mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
    } 
    else 
    {
        mcuExpected = mcusPerLine * frame.mcusPerColumn;
    }
    if (!resetInterval) resetInterval = mcuExpected;

    var h, v;
    while (mcu < mcuExpected) 
    {
        // reset interval stuff
        for (i = 0; i < componentsLength; i++) components[i].pred = 0;
        eobrun = 0;

        if (componentsLength == 1) 
        {
            component = components[0];
            for (n = 0; n < resetInterval; n++) 
            {
                decodeBlock(component, decodeFn, mcu);
                mcu++;
            }
        } 
        else 
        {
            for (n = 0; n < resetInterval; n++) 
            {
                for (i = 0; i < componentsLength; i++) 
                {
                    component = components[i];
                    h = component.h;
                    v = component.v;
                    for (j = 0; j < v; j++) 
                    {
                        for (k = 0; k < h; k++) 
                        {
                            decodeMcu(component, decodeFn, mcu, j, k);
                        }
                    }
                }
                mcu++;

                // If we've reached our expected MCU's, stop decoding
                if (mcu === mcuExpected) break;
            }
        }

        // find marker
        bitsCount = 0;
        marker = (data[offset] << 8) | data[offset + 1];
        if (marker < 0xFF00) 
        {
            throw "marker was not found";
        }

        if (marker >= 0xFFD0 && marker <= 0xFFD7) 
        { 
            // RSTx
            offset += 2;
        }
        else break;
    }

    return offset - startOffset;
}

function buildComponentData(frame, component) 
{
    var lines = [];
    var blocksPerLine = component.blocksPerLine;
    var blocksPerColumn = component.blocksPerColumn;
    var samplesPerLine = blocksPerLine << 3;
    var R = new Int32Array(64), r = new Uint8Array(64);

    // A port of poppler's IDCT method which in turn is taken from:
    //   Christoph Loeffler, Adriaan Ligtenberg, George S. Moschytz,
    //   "Practical Fast 1-D DCT Algorithms with 11 Multiplications",
    //   IEEE Intl. Conf. on Acoustics, Speech & Signal Processing, 1989,
    //   988-991.
    function quantizeAndInverse(zz, dataOut, dataIn) 
    {
        var qt = component.quantizationTable;
        var v0, v1, v2, v3, v4, v5, v6, v7, t;
        var p = dataIn;
        var i;

        // dequant
        for (i = 0; i < 64; i++) p[i] = zz[i] * qt[i];

        // inverse DCT on rows
        for (i = 0; i < 8; ++i) 
        {
            var row = 8 * i;

            // check for all-zero AC coefficients
            if (p[1 + row] == 0 && p[2 + row] == 0 && p[3 + row] == 0 &&
            p[4 + row] == 0 && p[5 + row] == 0 && p[6 + row] == 0 &&
            p[7 + row] == 0) 
            {
                t = (dctSqrt2 * p[0 + row] + 512) >> 10;
                p[0 + row] = t;
                p[1 + row] = t;
                p[2 + row] = t;
                p[3 + row] = t;
                p[4 + row] = t;
                p[5 + row] = t;
                p[6 + row] = t;
                p[7 + row] = t;
                continue;
            }

            // stage 4
            v0 = (dctSqrt2 * p[0 + row] + 128) >> 8;
            v1 = (dctSqrt2 * p[4 + row] + 128) >> 8;
            v2 = p[2 + row];
            v3 = p[6 + row];
            v4 = (dctSqrt1d2 * (p[1 + row] - p[7 + row]) + 128) >> 8;
            v7 = (dctSqrt1d2 * (p[1 + row] + p[7 + row]) + 128) >> 8;
            v5 = p[3 + row] << 4;
            v6 = p[5 + row] << 4;

            // stage 3
            t = (v0 - v1+ 1) >> 1;
            v0 = (v0 + v1 + 1) >> 1;
            v1 = t;
            t = (v2 * dctSin6 + v3 * dctCos6 + 128) >> 8;
            v2 = (v2 * dctCos6 - v3 * dctSin6 + 128) >> 8;
            v3 = t;
            t = (v4 - v6 + 1) >> 1;
            v4 = (v4 + v6 + 1) >> 1;
            v6 = t;
            t = (v7 + v5 + 1) >> 1;
            v5 = (v7 - v5 + 1) >> 1;
            v7 = t;

            // stage 2
            t = (v0 - v3 + 1) >> 1;
            v0 = (v0 + v3 + 1) >> 1;
            v3 = t;
            t = (v1 - v2 + 1) >> 1;
            v1 = (v1 + v2 + 1) >> 1;
            v2 = t;
            t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
            v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
            v7 = t;
            t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
            v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
            v6 = t;

            // stage 1
            p[0 + row] = v0 + v7;
            p[7 + row] = v0 - v7;
            p[1 + row] = v1 + v6;
            p[6 + row] = v1 - v6;
            p[2 + row] = v2 + v5;
            p[5 + row] = v2 - v5;
            p[3 + row] = v3 + v4;
            p[4 + row] = v3 - v4;
        }

        // inverse DCT on columns
        for (i = 0; i < 8; ++i) 
        {
            var col = i;

            // check for all-zero AC coefficients
            if (p[1*8 + col] == 0 && p[2*8 + col] == 0 && p[3*8 + col] == 0 &&
            p[4*8 + col] == 0 && p[5*8 + col] == 0 && p[6*8 + col] == 0 &&
            p[7*8 + col] == 0) 
            {
                t = (dctSqrt2 * dataIn[i+0] + 8192) >> 14;
                p[0*8 + col] = t;
                p[1*8 + col] = t;
                p[2*8 + col] = t;
                p[3*8 + col] = t;
                p[4*8 + col] = t;
                p[5*8 + col] = t;
                p[6*8 + col] = t;
                p[7*8 + col] = t;
                continue;
            }

            // stage 4
            v0 = (dctSqrt2 * p[0*8 + col] + 2048) >> 12;
            v1 = (dctSqrt2 * p[4*8 + col] + 2048) >> 12;
            v2 = p[2*8 + col];
            v3 = p[6*8 + col];
            v4 = (dctSqrt1d2 * (p[1*8 + col] - p[7*8 + col]) + 2048) >> 12;
            v7 = (dctSqrt1d2 * (p[1*8 + col] + p[7*8 + col]) + 2048) >> 12;
            v5 = p[3*8 + col];
            v6 = p[5*8 + col];

            // stage 3
            t = (v0 - v1 + 1) >> 1;
            v0 = (v0 + v1 + 1) >> 1;
            v1 = t;
            t = (v2 * dctSin6 + v3 * dctCos6 + 2048) >> 12;
            v2 = (v2 * dctCos6 - v3 * dctSin6 + 2048) >> 12;
            v3 = t;
            t = (v4 - v6 + 1) >> 1;
            v4 = (v4 + v6 + 1) >> 1;
            v6 = t;
            t = (v7 + v5 + 1) >> 1;
            v5 = (v7 - v5 + 1) >> 1;
            v7 = t;

            // stage 2
            t = (v0 - v3 + 1) >> 1;
            v0 = (v0 + v3 + 1) >> 1;
            v3 = t;
            t = (v1 - v2 + 1) >> 1;
            v1 = (v1 + v2 + 1) >> 1;
            v2 = t;
            t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
            v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
            v7 = t;
            t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
            v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
            v6 = t;

            // stage 1
            p[0*8 + col] = v0 + v7;
            p[7*8 + col] = v0 - v7;
            p[1*8 + col] = v1 + v6;
            p[6*8 + col] = v1 - v6;
            p[2*8 + col] = v2 + v5;
            p[5*8 + col] = v2 - v5;
            p[3*8 + col] = v3 + v4;
            p[4*8 + col] = v3 - v4;
        }

        // convert to 8-bit integers
        for (i = 0; i < 64; ++i) 
        {
            var sample = 128 + ((p[i] + 8) >> 4);
            dataOut[i] = sample < 0 ? 0 : sample > 0xFF ? 0xFF : sample;
        }
    }

    var i, j;
    for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) 
    {
        var scanLine = blockRow << 3;
        for (i = 0; i < 8; i++) lines.push(new Uint8Array(samplesPerLine));
        for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) 
        {
            quantizeAndInverse(component.blocks[blockRow][blockCol], r, R);

            var offset = 0, sample = blockCol << 3;
            for (j = 0; j < 8; j++) 
            {
                var line = lines[scanLine + j];
                for (i = 0; i < 8; i++) line[sample + i] = r[offset++];
            }
        }
    }
    return lines;
}

function clampTo8bit(a) 
{
    return a < 0 ? 0 : a > 255 ? 255 : a;
}

JpegImage.prototype = {
    constructor: JpegImage,

    parse: function parse(data) {
        var offset = 0, length = data.length;
        function readUint16() 
        {
            var value = (data[offset] << 8) | data[offset + 1];
            offset += 2;
            return value;
        }
        
        function readDataBlock() 
        {
            var length = readUint16();
            var array = data.subarray(offset, offset + length - 2);
            offset += array.length;
            return array;
        }
        
        function prepareComponents(frame) 
        {
            var maxH = 0, maxV = 0;
            var component, componentId;
            for (componentId in frame.components) 
            {
                if (frame.components.hasOwnProperty(componentId)) 
                {
                    component = frame.components[componentId];
                    if (maxH < component.h) maxH = component.h;
                    if (maxV < component.v) maxV = component.v;
                }
            }
            var mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / maxH);
            var mcusPerColumn = Math.ceil(frame.scanLines / 8 / maxV);
            for (componentId in frame.components) 
            {
                if (frame.components.hasOwnProperty(componentId)) 
                {
                    component = frame.components[componentId];
                    var blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / maxH);
                    var blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines  / 8) * component.v / maxV);
                    var blocksPerLineForMcu = mcusPerLine * component.h;
                    var blocksPerColumnForMcu = mcusPerColumn * component.v;
                    var blocks = [];
                    for (var i = 0; i < blocksPerColumnForMcu; i++) 
                    {
                        var row = [];
                        for (var j = 0; j < blocksPerLineForMcu; j++) row.push(new Int32Array(64));
                        blocks.push(row);
                    }
                    component.blocksPerLine = blocksPerLine;
                    component.blocksPerColumn = blocksPerColumn;
                    component.blocks = blocks;
                }
            }
            frame.maxH = maxH;
            frame.maxV = maxV;
            frame.mcusPerLine = mcusPerLine;
            frame.mcusPerColumn = mcusPerColumn;
        }
        
        var jfif = null;
        var adobe = null;
        var pixels = null;
        var frame, resetInterval;
        var quantizationTables = [], frames = [];
        var huffmanTablesAC = [], huffmanTablesDC = [];
        var fileMarker = readUint16();
        if (fileMarker != 0xFFD8) 
        { 
            // SOI (Start of Image)
            throw "SOI not found";
        }

        fileMarker = readUint16();
        while (fileMarker != 0xFFD9) 
        { 
            // EOI (End of image)
            var i, j, l;
            switch(fileMarker) 
            {
                case 0xFF00: 
                    break;
                case 0xFFE0: // APP0 (Application Specific)
                case 0xFFE1: // APP1
                case 0xFFE2: // APP2
                case 0xFFE3: // APP3
                case 0xFFE4: // APP4
                case 0xFFE5: // APP5
                case 0xFFE6: // APP6
                case 0xFFE7: // APP7
                case 0xFFE8: // APP8
                case 0xFFE9: // APP9
                case 0xFFEA: // APP10
                case 0xFFEB: // APP11
                case 0xFFEC: // APP12
                case 0xFFED: // APP13
                case 0xFFEE: // APP14
                case 0xFFEF: // APP15
                case 0xFFFE: // COM (Comment)
                    var appData = readDataBlock();

                    if (fileMarker === 0xFFE0) 
                    {
                        if (appData[0] === 0x4A && appData[1] === 0x46 && appData[2] === 0x49 &&
                        appData[3] === 0x46 && appData[4] === 0) 
                        { 
                            // 'JFIF\x00'
                            jfif = {
                                version: { major: appData[5], minor: appData[6] },
                                densityUnits: appData[7],
                                xDensity: (appData[8] << 8) | appData[9],
                                yDensity: (appData[10] << 8) | appData[11],
                                thumbWidth: appData[12],
                                thumbHeight: appData[13],
                                thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
                            };
                        }
                    }
                    // TODO APP1 - Exif
                    if (fileMarker === 0xFFEE) 
                    {
                        if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6F &&
                        appData[3] === 0x62 && appData[4] === 0x65 && appData[5] === 0) 
                        { 
                            // 'Adobe\x00'
                            adobe = {
                                version: appData[6],
                                flags0: (appData[7] << 8) | appData[8],
                                flags1: (appData[9] << 8) | appData[10],
                                transformCode: appData[11]
                            };
                        }
                    }
                    break;

                case 0xFFDB: // DQT (Define Quantization Tables)
                    var quantizationTablesLength = readUint16();
                    var quantizationTablesEnd = quantizationTablesLength + offset - 2;
                    while (offset < quantizationTablesEnd) 
                    {
                        var quantizationTableSpec = data[offset++];
                        var tableData = new Int32Array(64);
                        if ((quantizationTableSpec >> 4) === 0) 
                        { 
                            // 8 bit values
                            for (j = 0; j < 64; j++) 
                            {
                                var z = dctZigZag[j];
                                tableData[z] = data[offset++];
                            }
                        } 
                        else if ((quantizationTableSpec >> 4) === 1) 
                        {
                            //16 bit
                            for (j = 0; j < 64; j++) 
                            {
                                var z = dctZigZag[j];
                                tableData[z] = readUint16();
                            }
                        } 
                        else throw "DQT: invalid table spec";
                        quantizationTables[quantizationTableSpec & 15] = tableData;
                    }
                    break;

                case 0xFFC0: // SOF0 (Start of Frame, Baseline DCT)
                case 0xFFC1: // SOF1 (Start of Frame, Extended DCT)
                case 0xFFC2: // SOF2 (Start of Frame, Progressive DCT)
                    readUint16(); // skip data length
                    frame = {};
                    frame.extended = (fileMarker === 0xFFC1);
                    frame.progressive = (fileMarker === 0xFFC2);
                    frame.precision = data[offset++];
                    frame.scanLines = readUint16();
                    frame.samplesPerLine = readUint16();
                    frame.components = {};
                    frame.componentsOrder = [];
                    var componentsCount = data[offset++], componentId;
                    var maxH = 0, maxV = 0;
                    for (i = 0; i < componentsCount; i++) 
                    {
                        componentId = data[offset];
                        var h = data[offset + 1] >> 4;
                        var v = data[offset + 1] & 15;
                        var qId = data[offset + 2];
                        frame.componentsOrder.push(componentId);
                        frame.components[componentId] = {
                            h: h,
                            v: v,
                            quantizationIdx: qId
                        };
                        offset += 3;
                    }
                    prepareComponents(frame);
                    frames.push(frame);
                    break;

                case 0xFFC4: // DHT (Define Huffman Tables)
                    var huffmanLength = readUint16();
                    for (i = 2; i < huffmanLength;) 
                    {
                        var huffmanTableSpec = data[offset++];
                        var codeLengths = new Uint8Array(16);
                        var codeLengthSum = 0;
                        for (j = 0; j < 16; j++, offset++) codeLengthSum += (codeLengths[j] = data[offset]);
                        var huffmanValues = new Uint8Array(codeLengthSum);
                        for (j = 0; j < codeLengthSum; j++, offset++) huffmanValues[j] = data[offset];
                        i += 17 + codeLengthSum;

                        ((huffmanTableSpec >> 4) === 0 
                                    ? huffmanTablesDC 
                                    : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
                    }
                    break;

                case 0xFFDD: // DRI (Define Restart Interval)
                    readUint16(); // skip data length
                    resetInterval = readUint16();
                    break;

                case 0xFFDA: // SOS (Start of Scan)
                    var scanLength = readUint16();
                    var selectorsCount = data[offset++];
                    var components = [], component;
                    for (i = 0; i < selectorsCount; i++) 
                    {
                        component = frame.components[data[offset++]];
                        var tableSpec = data[offset++];
                        component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
                        component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
                        components.push(component);
                    }
                    var spectralStart = data[offset++];
                    var spectralEnd = data[offset++];
                    var successiveApproximation = data[offset++];
                    var processed = decodeScan(data, offset,
                    frame, components, resetInterval,
                    spectralStart, spectralEnd,
                    successiveApproximation >> 4, successiveApproximation & 15);
                    offset += processed;
                    break;
                
                default:
                    if (data[offset - 3] == 0xFF &&
                    data[offset - 2] >= 0xC0 && data[offset - 2] <= 0xFE) 
                    {
                        // could be incorrect encoding -- last 0xFF byte of the previous
                        // block was eaten by the encoder
                        offset -= 3;
                        break;
                    }
                throw "unknown JPEG marker " + fileMarker.toString(16);
            }
            fileMarker = readUint16();
        }
        
        if (frames.length != 1) throw "only single frame JPEGs supported";

        // set each frame's components quantization table
        for (var i = 0; i < frames.length; i++) 
        {
            var cp = frames[i].components;
            for (var j in cp) 
            {
                cp[j].quantizationTable = quantizationTables[cp[j].quantizationIdx];
                delete cp[j].quantizationIdx;
            }
        }

        this.width = frame.samplesPerLine;
        this.height = frame.scanLines;
        this.jfif = jfif;
        this.adobe = adobe;
        this.components = [];
        for (var i = 0; i < frame.componentsOrder.length; i++) 
        {
            var component = frame.components[frame.componentsOrder[i]];
            this.components.push({
                lines: buildComponentData(frame, component),
                scaleX: component.h / frame.maxH,
                scaleY: component.v / frame.maxV
            });
        }
    },
    
    getData: function getData(width, height) {
        var scaleX = this.width / width, scaleY = this.height / height;

        var component1, component2, component3, component4;
        var component1Line, component2Line, component3Line, component4Line;
        var x, y;
        var offset = 0;
        var Y, Cb, Cr, K, C, M, Ye, R, G, B;
        var colorTransform;
        var dataLength = width * height * this.components.length;
        var data = new Uint8Array(dataLength);
        switch (this.components.length) 
        {
            case 1:
                component1 = this.components[0];
                for (y = 0; y < height; y++) 
                {
                    component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
                    for (x = 0; x < width; x++) 
                    {
                        Y = component1Line[0 | (x * component1.scaleX * scaleX)];
                        data[offset++] = Y;
                    }
                }
                break;
            case 2:
                // PDF might compress two component data in custom colorspace
                component1 = this.components[0];
                component2 = this.components[1];
                for (y = 0; y < height; y++) 
                {
                    component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
                    component2Line = component2.lines[0 | (y * component2.scaleY * scaleY)];
                    for (x = 0; x < width; x++) 
                    {
                        Y = component1Line[0 | (x * component1.scaleX * scaleX)];
                        data[offset++] = Y;
                        Y = component2Line[0 | (x * component2.scaleX * scaleX)];
                        data[offset++] = Y;
                    }
                }
                break;
            case 3:
                // The default transform for three components is true
                colorTransform = true;
                // The adobe transform marker overrides any previous setting
                if (this.adobe && this.adobe.transformCode) colorTransform = true;
                else if (typeof this.colorTransform !== 'undefined') colorTransform = !!this.colorTransform;

                component1 = this.components[0];
                component2 = this.components[1];
                component3 = this.components[2];
                for (y = 0; y < height; y++) 
                {
                    component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
                    component2Line = component2.lines[0 | (y * component2.scaleY * scaleY)];
                    component3Line = component3.lines[0 | (y * component3.scaleY * scaleY)];
                    for (x = 0; x < width; x++) 
                    {
                        if (!colorTransform) 
                        {
                            R = component1Line[0 | (x * component1.scaleX * scaleX)];
                            G = component2Line[0 | (x * component2.scaleX * scaleX)];
                            B = component3Line[0 | (x * component3.scaleX * scaleX)];
                        } 
                        else 
                        {
                            Y = component1Line[0 | (x * component1.scaleX * scaleX)];
                            Cb = component2Line[0 | (x * component2.scaleX * scaleX)];
                            Cr = component3Line[0 | (x * component3.scaleX * scaleX)];

                            R = clampTo8bit(Y + 1.402 * (Cr - 128));
                            G = clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
                            B = clampTo8bit(Y + 1.772 * (Cb - 128));
                        }

                        data[offset++] = R;
                        data[offset++] = G;
                        data[offset++] = B;
                    }
                }
                break;
            case 4:
                if (!this.adobe) throw 'Unsupported color mode (4 components)';
                // The default transform for four components is false
                colorTransform = false;
                // The adobe transform marker overrides any previous setting
                if (this.adobe && this.adobe.transformCode) colorTransform = true;
                else if (typeof this.colorTransform !== 'undefined') colorTransform = !!this.colorTransform;

                component1 = this.components[0];
                component2 = this.components[1];
                component3 = this.components[2];
                component4 = this.components[3];
                for (y = 0; y < height; y++) 
                {
                    component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
                    component2Line = component2.lines[0 | (y * component2.scaleY * scaleY)];
                    component3Line = component3.lines[0 | (y * component3.scaleY * scaleY)];
                    component4Line = component4.lines[0 | (y * component4.scaleY * scaleY)];
                    for (x = 0; x < width; x++) 
                    {
                        if (!colorTransform) 
                        {
                            C = component1Line[0 | (x * component1.scaleX * scaleX)];
                            M = component2Line[0 | (x * component2.scaleX * scaleX)];
                            Ye = component3Line[0 | (x * component3.scaleX * scaleX)];
                            K = component4Line[0 | (x * component4.scaleX * scaleX)];
                        } 
                        else 
                        {
                            Y = component1Line[0 | (x * component1.scaleX * scaleX)];
                            Cb = component2Line[0 | (x * component2.scaleX * scaleX)];
                            Cr = component3Line[0 | (x * component3.scaleX * scaleX)];
                            K = component4Line[0 | (x * component4.scaleX * scaleX)];

                            C = 255 - clampTo8bit(Y + 1.402 * (Cr - 128));
                            M = 255 - clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
                            Ye = 255 - clampTo8bit(Y + 1.772 * (Cb - 128));
                        }
                        data[offset++] = C;
                        data[offset++] = M;
                        data[offset++] = Ye;
                        data[offset++] = K;
                    }
                }
                break;
            default:
                throw 'Unsupported color mode';
        }
        return data;
    },
    
    copyToImageData: function copyToImageData(imageData) {
        var width = imageData.width, height = imageData.height;
        var imageDataArray = imageData.data;
        var data = this.getData(width, height);
        var i = 0, j = 0, x, y;
        var Y, K, C, M, R, G, B;
        switch (this.components.length) 
        {
            case 1:
                for (y = 0; y < height; y++) 
                {
                    for (x = 0; x < width; x++) 
                    {
                        Y = data[i++];
                        imageDataArray[j++] = Y;
                        imageDataArray[j++] = Y;
                        imageDataArray[j++] = Y;
                        imageDataArray[j++] = 255;
                    }
                }
                break;
            case 3:
                for (y = 0; y < height; y++) 
                {
                    for (x = 0; x < width; x++) 
                    {
                        R = data[i++];
                        G = data[i++];
                        B = data[i++];

                        imageDataArray[j++] = R;
                        imageDataArray[j++] = G;
                        imageDataArray[j++] = B;
                        imageDataArray[j++] = 255;
                    }
                }
                break;
            case 4:
                for (y = 0; y < height; y++) 
                {
                    for (x = 0; x < width; x++) 
                    {
                        C = data[i++];
                        M = data[i++];
                        Y = data[i++];
                        K = data[i++];

                        R = 255 - clampTo8bit(C * (1 - K / 255) + K);
                        G = 255 - clampTo8bit(M * (1 - K / 255) + K);
                        B = 255 - clampTo8bit(Y * (1 - K / 255) + K);

                        imageDataArray[j++] = R;
                        imageDataArray[j++] = G;
                        imageDataArray[j++] = B;
                        imageDataArray[j++] = 255;
                    }
                }
                break;
            default:
                throw 'Unsupported color mode';
        }
    }
};

var btoa = btoa || function(buf) {
    return new Buffer(buf).toString('base64');
};

function JPEGEncoder( quality ) {
    var self = this;
    var fround = Math.round;
    var ffloor = Math.floor;
    var YTable = new Array(64);
    var UVTable = new Array(64);
    var fdtbl_Y = new Array(64);
    var fdtbl_UV = new Array(64);
    var YDC_HT;
    var UVDC_HT;
    var YAC_HT;
    var UVAC_HT;

    var bitcode = new Array(65535);
    var category = new Array(65535);
    var outputfDCTQuant = new Array(64);
    var DU = new Array(64);
    var byteout = [];
    var bytenew = 0;
    var bytepos = 7;

    var YDU = new Array(64);
    var UDU = new Array(64);
    var VDU = new Array(64);
    var clt = new Array(256);
    var RGB_YUV_TABLE = new Array(2048);
    var currentQuality;

    var ZigZag = [
    0, 1, 5, 6,14,15,27,28,
    2, 4, 7,13,16,26,29,42,
    3, 8,12,17,25,30,41,43,
    9,11,18,24,31,40,44,53,
    10,19,23,32,39,45,52,54,
    20,22,33,38,46,51,55,60,
    21,34,37,47,50,56,59,61,
    35,36,48,49,57,58,62,63
    ];

    var std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
    var std_dc_luminance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
    var std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];
    var std_ac_luminance_values = [
    0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,
    0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,
    0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,
    0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,
    0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,
    0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,
    0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,
    0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,
    0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,
    0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,
    0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,
    0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,
    0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,
    0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,
    0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,
    0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,
    0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,
    0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,
    0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,
    0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
    0xf9,0xfa
    ];

    var std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
    var std_dc_chrominance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
    var std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,0x77];
    var std_ac_chrominance_values = [
    0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21,
    0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71,
    0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91,
    0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0,
    0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,
    0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26,
    0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38,
    0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,
    0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,
    0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,
    0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,
    0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87,
    0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,
    0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,
    0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,
    0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,
    0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,
    0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,
    0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,
    0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
    0xf9,0xfa
    ];

    function initQuantTables(sf)
    {
        var YQT = [
        16, 11, 10, 16, 24, 40, 51, 61,
        12, 12, 14, 19, 26, 58, 60, 55,
        14, 13, 16, 24, 40, 57, 69, 56,
        14, 17, 22, 29, 51, 87, 80, 62,
        18, 22, 37, 56, 68,109,103, 77,
        24, 35, 55, 64, 81,104,113, 92,
        49, 64, 78, 87,103,121,120,101,
        72, 92, 95, 98,112,100,103, 99
        ];

        for (var i = 0; i < 64; i++) 
        {
            var t = ffloor((YQT[i]*sf+50)/100);
            if (t < 1) 
            {
                t = 1;
            } 
            else if (t > 255) 
            {
                t = 255;
            }
            YTable[ZigZag[i]] = t;
        }
        var UVQT = [
        17, 18, 24, 47, 99, 99, 99, 99,
        18, 21, 26, 66, 99, 99, 99, 99,
        24, 26, 56, 99, 99, 99, 99, 99,
        47, 66, 99, 99, 99, 99, 99, 99,
        99, 99, 99, 99, 99, 99, 99, 99,
        99, 99, 99, 99, 99, 99, 99, 99,
        99, 99, 99, 99, 99, 99, 99, 99,
        99, 99, 99, 99, 99, 99, 99, 99
        ];
        for (var j = 0; j < 64; j++) 
        {
            var u = ffloor((UVQT[j]*sf+50)/100);
            if (u < 1) 
            {
                u = 1;
            } 
            else if (u > 255) 
            {
                u = 255;
            }
            UVTable[ZigZag[j]] = u;
        }
        var aasf = [
        1.0, 1.387039845, 1.306562965, 1.175875602,
        1.0, 0.785694958, 0.541196100, 0.275899379
        ];
        var k = 0;
        for (var row = 0; row < 8; row++)
        {
            for (var col = 0; col < 8; col++)
            {
                fdtbl_Y[k]  = (1.0 / (YTable [ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                k++;
            }
        }
    }

    function computeHuffmanTbl(nrcodes, std_table)
    {
        var codevalue = 0;
        var pos_in_table = 0;
        var HT = new Array();
        for (var k = 1; k <= 16; k++) 
        {
            for (var j = 1; j <= nrcodes[k]; j++) 
            {
                HT[std_table[pos_in_table]] = [];
                HT[std_table[pos_in_table]][0] = codevalue;
                HT[std_table[pos_in_table]][1] = k;
                pos_in_table++;
                codevalue++;
            }
            codevalue*=2;
        }
        return HT;
    }

    function initHuffmanTbl()
    {
        YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes,std_dc_luminance_values);
        UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes,std_dc_chrominance_values);
        YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes,std_ac_luminance_values);
        UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes,std_ac_chrominance_values);
    }

    function initCategoryNumber()
    {
        var nrlower = 1;
        var nrupper = 2;
        for (var cat = 1; cat <= 15; cat++) 
        {
            //Positive numbers
            for (var nr = nrlower; nr<nrupper; nr++) 
            {
                category[32767+nr] = cat;
                bitcode[32767+nr] = [];
                bitcode[32767+nr][1] = cat;
                bitcode[32767+nr][0] = nr;
            }
            //Negative numbers
            for (var nrneg =-(nrupper-1); nrneg<=-nrlower; nrneg++) 
            {
                category[32767+nrneg] = cat;
                bitcode[32767+nrneg] = [];
                bitcode[32767+nrneg][1] = cat;
                bitcode[32767+nrneg][0] = nrupper-1+nrneg;
            }
            nrlower <<= 1;
            nrupper <<= 1;
        }
    }

    function initRGBYUVTable() 
    {
        for(var i = 0; i < 256;i++) 
        {
            RGB_YUV_TABLE[i]      		=  19595 * i;
            RGB_YUV_TABLE[(i+ 256)>>0] 	=  38470 * i;
            RGB_YUV_TABLE[(i+ 512)>>0] 	=   7471 * i + 0x8000;
            RGB_YUV_TABLE[(i+ 768)>>0] 	= -11059 * i;
            RGB_YUV_TABLE[(i+1024)>>0] 	= -21709 * i;
            RGB_YUV_TABLE[(i+1280)>>0] 	=  32768 * i + 0x807FFF;
            RGB_YUV_TABLE[(i+1536)>>0] 	= -27439 * i;
            RGB_YUV_TABLE[(i+1792)>>0] 	= - 5329 * i;
        }
    }

    // IO functions
    function writeBits(bs)
    {
        var value = bs[0];
        var posval = bs[1]-1;
        while ( posval >= 0 ) 
        {
            if (value & (1 << posval) ) 
            {
                bytenew |= (1 << bytepos);
            }
            posval--;
            bytepos--;
            if (bytepos < 0) 
            {
                if (bytenew == 0xFF) 
                {
                    writeByte(0xFF);
                    writeByte(0);
                }
                else 
                {
                    writeByte(bytenew);
                }
                bytepos=7;
                bytenew=0;
            }
        }
    }

    function writeByte(value)
    {
        //byteout.push(clt[value]); // write char directly instead of converting later
        byteout.push(value);
    }

    function writeWord(value)
    {
        writeByte((value>>8)&0xFF);
        writeByte((value   )&0xFF);
    }

    // DCT & quantization core
    function fDCTQuant(data, fdtbl)
    {
        var d0, d1, d2, d3, d4, d5, d6, d7;
        /* Pass 1: process rows. */
        var dataOff=0;
        var i;
        const I8 = 8;
        const I64 = 64;
        for (i=0; i<I8; ++i)
        {
            d0 = data[dataOff];
            d1 = data[dataOff+1];
            d2 = data[dataOff+2];
            d3 = data[dataOff+3];
            d4 = data[dataOff+4];
            d5 = data[dataOff+5];
            d6 = data[dataOff+6];
            d7 = data[dataOff+7];

            var tmp0 = d0 + d7;
            var tmp7 = d0 - d7;
            var tmp1 = d1 + d6;
            var tmp6 = d1 - d6;
            var tmp2 = d2 + d5;
            var tmp5 = d2 - d5;
            var tmp3 = d3 + d4;
            var tmp4 = d3 - d4;

            /* Even part */
            var tmp10 = tmp0 + tmp3;	/* phase 2 */
            var tmp13 = tmp0 - tmp3;
            var tmp11 = tmp1 + tmp2;
            var tmp12 = tmp1 - tmp2;

            data[dataOff] = tmp10 + tmp11; /* phase 3 */
            data[dataOff+4] = tmp10 - tmp11;

            var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
            data[dataOff+2] = tmp13 + z1; /* phase 5 */
            data[dataOff+6] = tmp13 - z1;

            /* Odd part */
            tmp10 = tmp4 + tmp5; /* phase 2 */
            tmp11 = tmp5 + tmp6;
            tmp12 = tmp6 + tmp7;

            /* The rotator is modified from fig 4-8 to avoid extra negations. */
            var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
            var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
            var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
            var z3 = tmp11 * 0.707106781; /* c4 */

            var z11 = tmp7 + z3;	/* phase 5 */
            var z13 = tmp7 - z3;

            data[dataOff+5] = z13 + z2;	/* phase 6 */
            data[dataOff+3] = z13 - z2;
            data[dataOff+1] = z11 + z4;
            data[dataOff+7] = z11 - z4;

            dataOff += 8; /* advance pointer to next row */
        }

        /* Pass 2: process columns. */
        dataOff = 0;
        for (i=0; i<I8; ++i)
        {
            d0 = data[dataOff];
            d1 = data[dataOff + 8];
            d2 = data[dataOff + 16];
            d3 = data[dataOff + 24];
            d4 = data[dataOff + 32];
            d5 = data[dataOff + 40];
            d6 = data[dataOff + 48];
            d7 = data[dataOff + 56];

            var tmp0p2 = d0 + d7;
            var tmp7p2 = d0 - d7;
            var tmp1p2 = d1 + d6;
            var tmp6p2 = d1 - d6;
            var tmp2p2 = d2 + d5;
            var tmp5p2 = d2 - d5;
            var tmp3p2 = d3 + d4;
            var tmp4p2 = d3 - d4;

            /* Even part */
            var tmp10p2 = tmp0p2 + tmp3p2;	/* phase 2 */
            var tmp13p2 = tmp0p2 - tmp3p2;
            var tmp11p2 = tmp1p2 + tmp2p2;
            var tmp12p2 = tmp1p2 - tmp2p2;

            data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
            data[dataOff+32] = tmp10p2 - tmp11p2;

            var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
            data[dataOff+16] = tmp13p2 + z1p2; /* phase 5 */
            data[dataOff+48] = tmp13p2 - z1p2;

            /* Odd part */
            tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
            tmp11p2 = tmp5p2 + tmp6p2;
            tmp12p2 = tmp6p2 + tmp7p2;

            /* The rotator is modified from fig 4-8 to avoid extra negations. */
            var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
            var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
            var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
            var z3p2 = tmp11p2 * 0.707106781; /* c4 */

            var z11p2 = tmp7p2 + z3p2;	/* phase 5 */
            var z13p2 = tmp7p2 - z3p2;

            data[dataOff+40] = z13p2 + z2p2; /* phase 6 */
            data[dataOff+24] = z13p2 - z2p2;
            data[dataOff+ 8] = z11p2 + z4p2;
            data[dataOff+56] = z11p2 - z4p2;

            dataOff++; /* advance pointer to next column */
        }

        // Quantize/descale the coefficients
        var fDCTQuant;
        for (i=0; i<I64; ++i)
        {
            // Apply the quantization and scaling factor & Round to nearest integer
            fDCTQuant = data[i]*fdtbl[i];
            outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5)|0) : ((fDCTQuant - 0.5)|0);
            //outputfDCTQuant[i] = fround(fDCTQuant);
        }
        return outputfDCTQuant;
    }

    function writeAPP0()
    {
        writeWord(0xFFE0); // marker
        writeWord(16); // length
        writeByte(0x4A); // J
        writeByte(0x46); // F
        writeByte(0x49); // I
        writeByte(0x46); // F
        writeByte(0); // = "JFIF",'\0'
        writeByte(1); // versionhi
        writeByte(1); // versionlo
        writeByte(0); // xyunits
        writeWord(1); // xdensity
        writeWord(1); // ydensity
        writeByte(0); // thumbnwidth
        writeByte(0); // thumbnheight
    }

    function writeSOF0(width, height)
    {
        writeWord(0xFFC0); // marker
        writeWord(17);   // length, truecolor YUV JPG
        writeByte(8);    // precision
        writeWord(height);
        writeWord(width);
        writeByte(3);    // nrofcomponents
        writeByte(1);    // IdY
        writeByte(0x11); // HVY
        writeByte(0);    // QTY
        writeByte(2);    // IdU
        writeByte(0x11); // HVU
        writeByte(1);    // QTU
        writeByte(3);    // IdV
        writeByte(0x11); // HVV
        writeByte(1);    // QTV
    }

    function writeDQT()
    {
        writeWord(0xFFDB); // marker
        writeWord(132);	   // length
        writeByte(0);
        for (var i=0; i<64; i++) 
        {
            writeByte(YTable[i]);
        }
        writeByte(1);
        for (var j=0; j<64; j++) 
        {
            writeByte(UVTable[j]);
        }
    }

    function writeDHT()
    {
        writeWord(0xFFC4); // marker
        writeWord(0x01A2); // length

        writeByte(0); // HTYDCinfo
        for (var i=0; i<16; i++) 
        {
            writeByte(std_dc_luminance_nrcodes[i+1]);
        }
        for (var j=0; j<=11; j++) 
        {
            writeByte(std_dc_luminance_values[j]);
        }

        writeByte(0x10); // HTYACinfo
        for (var k=0; k<16; k++) 
        {
            writeByte(std_ac_luminance_nrcodes[k+1]);
        }
        for (var l=0; l<=161; l++) 
        {
            writeByte(std_ac_luminance_values[l]);
        }

        writeByte(1); // HTUDCinfo
        for (var m=0; m<16; m++) {
        writeByte(std_dc_chrominance_nrcodes[m+1]);
        }
        for (var n=0; n<=11; n++) 
        {
            writeByte(std_dc_chrominance_values[n]);
        }

        writeByte(0x11); // HTUACinfo
        for (var o=0; o<16; o++) 
        {
            writeByte(std_ac_chrominance_nrcodes[o+1]);
        }
        for (var p=0; p<=161; p++) 
        {
            writeByte(std_ac_chrominance_values[p]);
        }
    }

    function writeSOS()
    {
        writeWord(0xFFDA); // marker
        writeWord(12); // length
        writeByte(3); // nrofcomponents
        writeByte(1); // IdY
        writeByte(0); // HTY
        writeByte(2); // IdU
        writeByte(0x11); // HTU
        writeByte(3); // IdV
        writeByte(0x11); // HTV
        writeByte(0); // Ss
        writeByte(0x3f); // Se
        writeByte(0); // Bf
    }

    function processDU(CDU, fdtbl, DC, HTDC, HTAC)
    {
        var EOB = HTAC[0x00];
        var M16zeroes = HTAC[0xF0];
        var pos;
        const I16 = 16;
        const I63 = 63;
        const I64 = 64;
        var DU_DCT = fDCTQuant(CDU, fdtbl);
        //ZigZag reorder
        for (var j=0;j<I64;++j) 
        {
            DU[ZigZag[j]]=DU_DCT[j];
        }
        var Diff = DU[0] - DC; DC = DU[0];
        //Encode DC
        if (Diff==0) 
        {
            writeBits(HTDC[0]); // Diff might be 0
        } 
        else 
        {
            pos = 32767+Diff;
            writeBits(HTDC[category[pos]]);
            writeBits(bitcode[pos]);
        }
        //Encode ACs
        var end0pos = 63; // was const... which is crazy
        for (; (end0pos>0)&&(DU[end0pos]==0); end0pos--) {};
        //end0pos = first element in reverse order !=0
        if ( end0pos == 0) 
        {
            writeBits(EOB);
            return DC;
        }
        var i = 1;
        var lng;
        while ( i <= end0pos ) 
        {
            var startpos = i;
            for (; (DU[i]==0) && (i<=end0pos); ++i) {}
            var nrzeroes = i-startpos;
            if ( nrzeroes >= I16 ) 
            {
                lng = nrzeroes>>4;
                for (var nrmarker=1; nrmarker <= lng; ++nrmarker) writeBits(M16zeroes);
                nrzeroes = nrzeroes&0xF;
            }
            pos = 32767+DU[i];
            writeBits(HTAC[(nrzeroes<<4)+category[pos]]);
            writeBits(bitcode[pos]);
            i++;
        }
        if ( end0pos != I63 ) 
        {
            writeBits(EOB);
        }
        return DC;
    }

    function initCharLookupTable()
    {
        var sfcc = String.fromCharCode;
        for(var i=0; i < 256; i++)
        { 
            ///// ACHTUNG // 255
            clt[i] = sfcc(i);
        }
    }

    function setQuality( quality )
    {
        if (quality <= 0) 
        {
            quality = 1;
        }
        if (quality > 100) 
        {
            quality = 100;
        }

        if (currentQuality === quality) return // don't recalc if unchanged

        var sf = 0;
        if (quality < 50) 
        {
            sf = Math.floor(5000 / quality);
        } 
        else 
        {
            sf = Math.floor(200 - quality*2);
        }

        initQuantTables(sf);
        currentQuality = quality;
        //console.log('Quality set to: '+quality +'%');
    }

    function init( )
    {
        //var time_start = new Date().getTime();
        if ( !quality ) quality = 50;
        // Create tables
        initCharLookupTable()
        initHuffmanTbl();
        initCategoryNumber();
        initRGBYUVTable();

        setQuality(quality);
        //var duration = new Date().getTime() - time_start;
        //console.log('Initialization '+ duration + 'ms');
    }

    // image data object
    this.encode = function( image, quality ) {
        //var time_start = new Date().getTime();

        if ( quality ) setQuality( quality );

        // Initialize bit writer
        byteout = new Array();
        bytenew=0;
        bytepos=7;

        // Add JPEG headers
        writeWord(0xFFD8); // SOI
        writeAPP0();
        writeDQT();
        writeSOF0(image.width,image.height);
        writeDHT();
        writeSOS();


        // Encode 8x8 macroblocks
        var DCY=0;
        var DCU=0;
        var DCV=0;

        bytenew=0;
        bytepos=7;


        this.encode.displayName = "_encode_";

        var imageData = image.data;
        var width = image.width;
        var height = image.height;

        var quadWidth = width*4;
        var tripleWidth = width*3;

        var x, y = 0;
        var r, g, b;
        var start,p, col,row,pos;
        while(y < height)
        {
            x = 0;
            while(x < quadWidth)
            {
                start = quadWidth * y + x;
                p = start;
                col = -1;
                row = 0;

                for(pos=0; pos < 64; pos++)
                {
                    row = pos >> 3;// /8
                    col = ( pos & 7 ) * 4; // %8
                    p = start + ( row * quadWidth ) + col;		

                    if(y+row >= height)
                    { 
                        // padding bottom
                        p-= (quadWidth*(y+1+row-height));
                    }

                    if(x+col >= quadWidth)
                    { 
                        // padding right	
                        p-= ((x+col) - quadWidth +4)
                    }

                    r = imageData[ p++ ];
                    g = imageData[ p++ ];
                    b = imageData[ p++ ];

                    /* // calculate YUV values dynamically
                    YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
                    UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
                    VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
                    */

                    // use lookup table (slightly faster)
                    YDU[pos] = ((RGB_YUV_TABLE[r]             + RGB_YUV_TABLE[(g +  256)>>0] + RGB_YUV_TABLE[(b +  512)>>0]) >> 16)-128;
                    UDU[pos] = ((RGB_YUV_TABLE[(r +  768)>>0] + RGB_YUV_TABLE[(g + 1024)>>0] + RGB_YUV_TABLE[(b + 1280)>>0]) >> 16)-128;
                    VDU[pos] = ((RGB_YUV_TABLE[(r + 1280)>>0] + RGB_YUV_TABLE[(g + 1536)>>0] + RGB_YUV_TABLE[(b + 1792)>>0]) >> 16)-128;
                }

                DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
                DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
                DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
                x+=32;
            }
            y+=8;
        }


        ////////////////////////////////////////////////////////////////

        // Do the bit alignment of the EOI marker
        if ( bytepos >= 0 ) 
        {
            var fillbits = [];
            fillbits[1] = bytepos+1;
            fillbits[0] = (1<<(bytepos+1))-1;
            writeBits(fillbits);
        }

        writeWord(0xFFD9); //EOI

        /*
        var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));

        byteout = [];

        // benchmarking
        var duration = new Date().getTime() - time_start;
        //console.log('Encoding time: '+ duration + 'ms');
        //

        return jpegDataUri			*/
        //return new Buffer( byteout );
        return new Uint8Array( byteout );
    };
    init( );
};


FILTER.Codec.JPEG = FILTER.Codec.JPG = {

    encoder: function( imgData, metaData ) {
        metaData = metaData || {};
        var quality = 'undefined' === typeof metaData.quality ? 100 : metaData.quality;
        var encoder = new JPEGEncoder( quality );
        return new Buffer( encoder.encode( imgData ) );
    },
    
    decoder: function( buffer, metaData ) {
        var jpg = new JpegImage( );
        jpg.parse( new Uint8Array( buffer ) );
        var data = {
            width: jpg.width,
            height: jpg.height,
            data: new Uint8Array(jpg.width * jpg.height * 4)
        };
        jpg.copyToImageData( data );
        return data;
    }
};

}(FILTER);/**
*
* Filter BMP Image Format CODEC
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var CodecUtil = FILTER.Util.Codec, readUInt8 = CodecUtil.readUInt8, readUInt16LE = CodecUtil.readUInt16LE,
    readUInt32LE = CodecUtil.readUInt32LE, write = CodecUtil.write, writeUInt8 = CodecUtil.writeUInt8,
    writeUInt16LE = CodecUtil.writeUInt16LE, writeUInt32LE = CodecUtil.writeUInt32LE, fill = CodecUtil.fill;

// adapted from https://github.com/shaozilee/bmp-js
function BmpDecoder( buffer ) 
{
    var self = this;
    self.pos = 0;
    self.buffer = buffer;
    self.flag = [
        String.fromCharCode(self.buffer[self.pos++]), 
        String.fromCharCode(self.buffer[self.pos++])
    ].join('');
    if ( self.flag !== "BM" ) throw new Error("Invalid BMP File");
    self.parseHeader( );
    self.parseBGR( );
}
BmpDecoder.prototype = {
    constructor: BmpDecoder,
    
    pos: 0,
    buffer: null,
    flag: null,
    fileSize: null,
    reserved: null,
    offset: null,
    headerSize: null,
    width: 0,
    height: 0,
    planes: null,
    bitPP: null,
    compress: null,
    rawSize: null,
    hr: null,
    vr: null,
    colors: null,
    importantColors: null,
    palette: null,
    data: null,
    
    parseHeader: function( ) {
        var self = this, buf = self.buffer;
        self.fileSize = readUInt32LE( buf, self );
        self.reserved = readUInt32LE( buf, self );
        self.offset = readUInt32LE( buf, self );
        self.headerSize = readUInt32LE( buf, self );
        self.width = readUInt32LE( buf, self );
        self.height = readUInt32LE( buf, self );
        self.planes = readUInt16LE( buf, self );
        self.bitPP = readUInt16LE( buf, self );
        self.compress = readUInt32LE( buf, self );
        self.rawSize = readUInt32LE( buf, self );
        self.hr = readUInt32LE( buf, self );
        self.vr = readUInt32LE( buf, self );
        self.colors = readUInt32LE( buf, self );
        self.importantColors = readUInt32LE( buf, self );

        if ( self.bitPP < 24 ) 
        {
            var len = self.colors === 0 ? 1 << self.bitPP : self.colors;
            self.palette = new Array(len);
            for (var i = 0; i < len; i++) 
            {
                var blue = readUInt8( buf, self );
                var green = readUInt8( buf, self );
                var red = readUInt8( buf, self );
                var quad = readUInt8( buf, self );
                self.palette[i] = {
                    red: red,
                    green: green,
                    blue: blue,
                    quad: quad
                };
            }
        }
    },

    parseBGR: function( ) {
        var self = this;
        self.pos = self.offset;
        var bitn = "bit" + self.bitPP;
        var len = self.width * self.height * 4;
        try {
            self.data = new Uint8Array( len );
            self[bitn]( );
        } catch (e) {
            console.log("bit decode error:" + e);
        }
    },

    bit1: function( ) {
        var self = this, buf = self.buffer, palette = self.palette, w = self.width, h = self.height,
            xlen = Math.ceil(w / 8), mode = xlen&3,
            y, x, b, location, i, rgb;
        for (y = h - 1; y >= 0; y--) 
        {
            for (x = 0; x < xlen; x++) 
            {
                b = readUInt8( buf, self );
                location = y * w * 4 + x*8*4;
                for (i = 0; i < 8; i++) 
                {
                    if( x*8+i<w )
                    {
                        rgb = palette[ ((b>>(7-i))&0x1) ];
                        self.data[location+i*4] = rgb.blue;
                        self.data[location+i*4 + 1] = rgb.green;
                        self.data[location+i*4 + 2] = rgb.red;
                        self.data[location+i*4 + 3] = 0xFF;
                    }
                    else
                    {
                        break;
                    }
                }
            }

            if ( mode != 0 )
            {
                self.pos += (4 - mode);
            }
        }
    },

    bit4: function( ) {
        var self = this, buf = self.buffer, palette = self.palette, w = self.width, h = self.height,
            xlen = Math.ceil(w / 2), mode = xlen&3,
            y, x, b, location, before, after, rgb;
        for (y = h - 1; y >= 0; y--) 
        {
            for (x = 0; x < xlen; x++) 
            {
                b = readUInt8( buf, self );
                location = y * w * 4 + x*2*4;

                before = b>>4;
                after = b&0x0F;

                rgb = palette[ before ];
                self.data[location] = rgb.blue;
                self.data[location + 1] = rgb.green;
                self.data[location + 2] = rgb.red;
                self.data[location + 3] = 0xFF;

                if( x*2+1>=w ) break;

                rgb = palette[after];
                self.data[location+4] = rgb.blue;
                self.data[location+4 + 1] = rgb.green;
                self.data[location+4 + 2] = rgb.red;
                self.data[location+4 + 3] = 0xFF;
            }

            if ( mode != 0 )
            {
                self.pos+=(4 - mode);
            }
        }
    },

    bit8: function( ) {
        var self = this, buf = self.buffer, palette = self.palette, w = self.width, h = self.height,
            mode = w&3, y, x, b, location, rgb;
        for (y = h - 1; y >= 0; y--) 
        {
            for (x = 0; x < w; x++) 
            {
                b = readUInt8( buf, self );
                location = y * w * 4 + x*4;
                if ( b < palette.length ) 
                {
                    rgb = palette[b];
                    self.data[location] = rgb.blue;
                    self.data[location + 1] = rgb.green;
                    self.data[location + 2] = rgb.red;
                    self.data[location + 3] = 0xFF;
                } 
                else 
                {
                    self.data[location] = 0xFF;
                    self.data[location + 1] = 0xFF;
                    self.data[location + 2] = 0xFF;
                    self.data[location + 3] = 0xFF;
                }
            }
            if ( mode != 0 )
            {
                self.pos += (4 - mode);
            }
        }
    },

    bit24: function( ) {
        var self = this, buf = self.buffer, palette = self.palette, w = self.width, h = self.height,
            mode = w&3, y, x, location, blue, green, red;
        //when height > 0
        for (y = h - 1; y >= 0; y--) 
        {
            for (x = 0; x < w; x++) 
            {
                blue = readUInt8( buf, self );
                green = readUInt8( buf, self );
                red = readUInt8( buf, self );
                location = y * w * 4 + x * 4;
                self.data[location] = red;
                self.data[location + 1] = green;
                self.data[location + 2] = blue;
                self.data[location + 3] = 0xFF;
            }
            //skip extra bytes
            self.pos += mode;
        }
    },

    getData: function( ) {
        return this.data;
    }
};

function BmpEncoder( imgData )
{
    var self = this;
    self.data = imgData.data;
    self.width = imgData.width;
    self.height = imgData.height;
    self.extraBytes = self.width&3/*%4*/;
    self.rgbSize = self.height*(3*self.width+self.extraBytes);
    self.headerInfoSize = 40;

    /******************header***********************/
    self.flag = "BM";
    self.reserved = 0;
    self.offset = 54;
    self.fileSize = self.rgbSize+self.offset;
    self.planes = 1;
    self.bitPP = 24;
    self.compress = 0;
    self.hr = 0;
    self.vr = 0;
    self.colors = 0;
    self.importantColors = 0;
}

BmpEncoder.prototype = {
    constructor: BmpEncoder,
    
    flag: null,
    fileSize: null,
    reserved: null,
    offset: null,
    headerSize: null,
    width: 0,
    height: 0,
    planes: null,
    bitPP: null,
    compress: null,
    rawSize: null,
    hr: null,
    vr: null,
    colors: null,
    importantColors: null,
    palette: null,
    extraBytes: null,
    rgbSize: null,
    headerInfoSize: null,
    data: null,
    
    encode: function( ) {
        var self = this, w = self.width, h = self.height, 
            header = [], buffer = new Array( self.offset+self.rgbSize );
        write( header, self.flag );
        writeUInt32LE( header, self.fileSize );
        writeUInt32LE( header, self.reserved );
        writeUInt32LE( header, self.offset );

        writeUInt32LE( header, self.headerInfoSize );
        writeUInt32LE( header, w );
        writeUInt32LE( header, h );
        writeUInt16LE( header, self.planes );
        writeUInt16LE( header, self.bitPP );
        writeUInt32LE( header, self.compress );
        writeUInt32LE( header, self.rgbSize );
        writeUInt32LE( header, self.hr );
        writeUInt32LE( header, self.vr );
        writeUInt32LE( header, self.colors );
        writeUInt32LE( header, self.importantColors );

        var i = 0, rowBytes = 3*w+self.extraBytes, y, x, p, r, g, b, fillOffset;

        for (y = h - 1; y >= 0; y--)
        {
            for (x = 0; x < w; x++)
            {
                p = y*rowBytes+x*3;
                r = self.data[i++];//r
                g = self.data[i++];//g
                b = self.data[i++];//b
                i++;
                buffer[p+2] = r;
                buffer[p+1] = g;
                buffer[p]   = b;
            }
            if ( self.extraBytes>0 )
            {
                fillOffset = y*rowBytes+w*3;
                fill( buffer, 0, fillOffset, fillOffset+self.extraBytes );
            }
        }
        return new Uint8Array( header.concat( buffer ) );
    }
};

FILTER.Codec.BMP = {

    encoder: function( imgData, metaData ) {
        var quality = 'undefined' === typeof metaData.quality ? 100 : metaData.quality;
        return new Buffer( new BmpEncoder( imgData ).encode( ) );
    },
    
    decoder: function( buffer, metaData ) {
        var bmp = new BmpDecoder( new Uint8Array(buffer) );
        return {
            data: bmp.data,
            width: bmp.width,
            height: bmp.height
        };
    }
};

}(FILTER);/**
*
* Filter GIF Image Format CODEC
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

// adapted from: https://github.com/buzzfeed/libgif-js
// Generic functions
function bitsToNum( ba ) 
{
    return ba.reduce(function (s, n) {
        return s * 2 + n;
    }, 0);
}

function byteToBitArr( bite ) 
{
    var a = [];
    for (var i = 7; i >= 0; i--) 
    {
        a.push( !! (bite & (1 << i)));
    }
    return a;
}

function lzwDecode( minCodeSize, data ) 
{
    // TODO: Now that the GIF parser is a bit different, maybe this should get an array of bytes instead of a String?
    var pos = 0; // Maybe this streaming thing should be merged with the Stream?
    var readCode = function( size ) {
        var code = 0;
        for (var i = 0; i < size; i++) 
        {
            if (data.charCodeAt(pos >> 3) & (1 << (pos & 7))) 
            {
                code |= 1 << i;
            }
            pos++;
        }
        return code;
    };

    var output = [];

    var clearCode = 1 << minCodeSize;
    var eoiCode = clearCode + 1;

    var codeSize = minCodeSize + 1;

    var dict = [];

    var clear = function( ) {
        dict = [];
        codeSize = minCodeSize + 1;
        for (var i = 0; i < clearCode; i++) 
        {
            dict[i] = [i];
        }
        dict[clearCode] = [];
        dict[eoiCode] = null;
    };

    var code;
    var last;

    while( true ) 
    {
        last = code;
        code = readCode(codeSize);

        if (code === clearCode) 
        {
            clear();
            continue;
        }
        if (code === eoiCode) break;

        if (code < dict.length) 
        {
            if (last !== clearCode) 
            {
                dict.push(dict[last].concat(dict[code][0]));
            }
        }
        else 
        {
            if (code !== dict.length) throw new Error('Invalid LZW code.');
            dict.push(dict[last].concat(dict[last][0]));
        }
        output.push.apply(output, dict[code]);

        if (dict.length === (1 << codeSize) && codeSize < 12) 
        {
            // If we're at the last code and codeSize is 12, the next code will be a clearCode, and it'll be 12 bits long.
            codeSize++;
        }
    }

    // I don't know if this is technically an error, but some GIFs do it.
    //if (Math.ceil(pos / 8) !== data.length) throw new Error('Extraneous LZW bytes.');
    return output;
}

// Stream
/**
* @constructor
*/
// Make compiler happy.
function Stream( data ) 
{
    var self = this;
    self.data = data;
    self.len = self.data.length;
    self.pos = 0;

    self.readByte = function( ) {
        var self = this;
        if (self.pos >= self.data.length) 
        {
            throw new Error('Attempted to read past end of stream.');
        }
        if ( data instanceof Uint8Array ) return data[self.pos++];
        else return data.charCodeAt(self.pos++) & 0xFF;
    };

    self.readBytes = function( n ) {
        var self = this, bytes = [];
        for (var i = 0; i < n; i++) 
        {
            bytes.push( self.readByte() );
        }
        return bytes;
    };

    self.read = function( n ) {
        var self = this, s = '';
        for (var i = 0; i < n; i++) 
        {
            s += String.fromCharCode(self.readByte());
        }
        return s;
    };

    self.readUnsigned = function( ) { // Little-endian.
        var self = this, a = self.readBytes(2);
        return (a[1] << 8) + a[0];
    };
}

// The actual parsing; returns an object with properties.
function parseGIF( st, handler ) 
{
    handler || (handler = {});

    // LZW (GIF-specific)
    var parseCT = function( entries ) { // Each entry is 3 bytes, for RGB.
        var ct = [];
        for (var i = 0; i < entries; i++) 
        {
            ct.push(st.readBytes(3));
        }
        return ct;
    };

    var readSubBlocks = function( ) {
        var size, data;
        data = '';
        do {
            size = st.readByte();
            data += st.read(size);
        } while (size !== 0);
        return data;
    };

    var parseHeader = function( ) {
        var hdr = {};
        hdr.sig = st.read(3);
        hdr.ver = st.read(3);
        if (hdr.sig !== 'GIF') throw new Error('Not a GIF file.'); // XXX: This should probably be handled more nicely.
        hdr.width = st.readUnsigned();
        hdr.height = st.readUnsigned();

        var bits = byteToBitArr(st.readByte());
        hdr.gctFlag = bits.shift();
        hdr.colorRes = bitsToNum(bits.splice(0, 3));
        hdr.sorted = bits.shift();
        hdr.gctSize = bitsToNum(bits.splice(0, 3));

        hdr.bgColor = st.readByte();
        hdr.pixelAspectRatio = st.readByte(); // if not 0, aspectRatio = (pixelAspectRatio + 15) / 64
        if (hdr.gctFlag) 
        {
            hdr.gct = parseCT(1 << (hdr.gctSize + 1));
        }
        handler.hdr && handler.hdr(hdr);
    };

    var parseExt = function( block ) {
        var parseGCExt = function( block ) {
            var blockSize = st.readByte(); // Always 4
            var bits = byteToBitArr(st.readByte());
            block.reserved = bits.splice(0, 3); // Reserved; should be 000.
            block.disposalMethod = bitsToNum(bits.splice(0, 3));
            block.userInput = bits.shift();
            block.transparencyGiven = bits.shift();
            block.delayTime = st.readUnsigned();
            block.transparencyIndex = st.readByte();
            block.terminator = st.readByte();
            handler.gce && handler.gce(block);
        };

        var parseComExt = function( block ) {
            block.comment = readSubBlocks();
            handler.com && handler.com(block);
        };

        var parsePTExt = function( block ) {
            // No one *ever* uses this. If you use it, deal with parsing it yourself.
            var blockSize = st.readByte(); // Always 12
            block.ptHeader = st.readBytes(12);
            block.ptData = readSubBlocks();
            handler.pte && handler.pte(block);
        };

        var parseAppExt = function( block ) {
            var parseNetscapeExt = function( block ) {
                var blockSize = st.readByte(); // Always 3
                block.unknown = st.readByte(); // ??? Always 1? What is this?
                block.iterations = st.readUnsigned();
                block.terminator = st.readByte();
                handler.app && handler.app.NETSCAPE && handler.app.NETSCAPE(block);
            };

            var parseUnknownAppExt = function( block ) {
                block.appData = readSubBlocks();
                // FIXME: This won't work if a handler wants to match on any identifier.
                handler.app && handler.app[block.identifier] && handler.app[block.identifier](block);
            };

            var blockSize = st.readByte(); // Always 11
            block.identifier = st.read(8);
            block.authCode = st.read(3);
            switch (block.identifier) 
            {
                case 'NETSCAPE':
                    parseNetscapeExt(block);
                    break;
                default:
                    parseUnknownAppExt(block);
                    break;
            }
        };

        var parseUnknownExt = function( block ) {
            block.data = readSubBlocks();
            handler.unknown && handler.unknown(block);
        };

        block.label = st.readByte();
        switch (block.label) 
        {
            case 0xF9:
                block.extType = 'gce';
                parseGCExt(block);
                break;
            case 0xFE:
                block.extType = 'com';
                parseComExt(block);
                break;
            case 0x01:
                block.extType = 'pte';
                parsePTExt(block);
                break;
            case 0xFF:
                block.extType = 'app';
                parseAppExt(block);
                break;
            default:
                block.extType = 'unknown';
                parseUnknownExt(block);
                break;
        }
    };

    var parseImg = function( img ) {
        var deinterlace = function( pixels, width ) {
            // Of course this defeats the purpose of interlacing. And it's *probably*
            // the least efficient way it's ever been implemented. But nevertheless...
            var newPixels = new Array(pixels.length);
            var rows = pixels.length / width;
            var cpRow = function (toRow, fromRow) {
                var fromPixels = pixels.slice(fromRow * width, (fromRow + 1) * width);
                newPixels.splice.apply(newPixels, [toRow * width, width].concat(fromPixels));
            };

            // See appendix E.
            var offsets = [0, 4, 2, 1];
            var steps = [8, 8, 4, 2];

            var fromRow = 0;
            for (var pass = 0; pass < 4; pass++) 
            {
                for (var toRow = offsets[pass]; toRow < rows; toRow += steps[pass]) 
                {
                    cpRow(toRow, fromRow)
                    fromRow++;
                }
            }
            return newPixels;
        };

        img.leftPos = st.readUnsigned();
        img.topPos = st.readUnsigned();
        img.width = st.readUnsigned();
        img.height = st.readUnsigned();

        var bits = byteToBitArr(st.readByte());
        img.lctFlag = bits.shift();
        img.interlaced = bits.shift();
        img.sorted = bits.shift();
        img.reserved = bits.splice(0, 2);
        img.lctSize = bitsToNum(bits.splice(0, 3));

        if (img.lctFlag) 
        {
            img.lct = parseCT(1 << (img.lctSize + 1));
        }

        img.lzwMinCodeSize = st.readByte();

        var lzwData = readSubBlocks();

        img.pixels = lzwDecode(img.lzwMinCodeSize, lzwData);

        if (img.interlaced) 
        { 
            // Move
            img.pixels = deinterlace(img.pixels, img.width);
        }
        handler.img && handler.img(img);
    };

    var parseBlock = function( ) {
        var block = {};
        block.sentinel = st.readByte();

        // For ease of matching
        switch (String.fromCharCode(block.sentinel)) 
        { 
            case '!':
                block.type = 'ext';
                parseExt(block);
                break;
            case ',':
                block.type = 'img';
                parseImg(block);
                break;
            case ';':
                block.type = 'eof';
                handler.eof && handler.eof(block);
                break;
            default:
                throw new Error('Unknown block: 0x' + block.sentinel.toString(16)); // TODO: Pad this with a 0.
        }

        if (block.type !== 'eof') parseBlock( );
    };

    var parse = function( ) {
        parseHeader();
        parseBlock();
    };
    parse( );
};

FILTER.Codec.GIF = {

    encoder: FILTER.NotImplemented('GIF.encoder'),
    
    decoder: function ( buffer, metaData ) {
        var hdr, transparency = null,
            image = {width: 0, height: 0, data: null};
        // animated GIFs are not handled at this moment, needed??
        parseGIF(new Stream(new Uint8Array( buffer )), {
            hdr: function (_hdr) { hdr = _hdr; },
            gce: function (gce) { transparency = gce.transparencyGiven ? gce.transparencyIndex : null; },
            img: function (img) {
                //ct = color table, gct = global color table
                var ct = img.lctFlag ? img.lct : hdr.gct; // TODO: What if neither exists?
                var cdd = new FILTER.ImArray(img.width * img.height * 4);
                //apply color table colors
                img.pixels.forEach(function (pixel, i) {
                    // imgData.data === [R,G,B,A,R,G,B,A,...]
                    var index = i << 2;
                    if (pixel !== transparency) 
                    {
                        cdd[index + 0] = ct[pixel][0];
                        cdd[index + 1] = ct[pixel][1];
                        cdd[index + 2] = ct[pixel][2];
                        cdd[index + 3] = 255; // Opaque.
                    }
                });
                image.width = img.width;
                image.height = img.height;
                image.data = cdd;
            }
        });
        return image;
    }
};
}(FILTER);/**
*
* Filter TGA Image Format CODEC
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var error = function( err ){ FILTER.error(err, true); };

// adapted from: Three.js
// adapted from: https://github.com/vthibault/roBrowser/blob/master/src/Loaders/Targa.js

// TGA Constants
var TGA_TYPE_NO_DATA = 0,
TGA_TYPE_INDEXED = 1,
TGA_TYPE_RGB = 2,
TGA_TYPE_GREY = 3,
TGA_TYPE_RLE_INDEXED = 9,
TGA_TYPE_RLE_RGB = 10,
TGA_TYPE_RLE_GREY = 11,

TGA_ORIGIN_MASK = 0x30,
TGA_ORIGIN_SHIFT = 0x04,
TGA_ORIGIN_BL = 0x00,
TGA_ORIGIN_BR = 0x01,
TGA_ORIGIN_UL = 0x02,
TGA_ORIGIN_UR = 0x03;

function tgaCheckHeader( header ) 
{
    switch( header.image_type ) 
    {
        // Check indexed type
        case TGA_TYPE_INDEXED:
        case TGA_TYPE_RLE_INDEXED:
            if ( header.colormap_length > 256 || header.colormap_size !== 24 || header.colormap_type !== 1) 
            {
                error('TGA.tgaCheckHeader: Invalid type colormap data for indexed type');
            }
            break;

        // Check colormap type
        case TGA_TYPE_RGB:
        case TGA_TYPE_GREY:
        case TGA_TYPE_RLE_RGB:
        case TGA_TYPE_RLE_GREY:
            if (header.colormap_type) 
            {
                error('TGA.tgaCheckHeader: Invalid type colormap data for colormap type');
            }
            break;

        // What the need of a file without data ?
        case TGA_TYPE_NO_DATA:
            error('TGA.tgaCheckHeader: No data');

        // Invalid type ?
        default:
            error('TGA.tgaCheckHeader: Invalid type " '+ header.image_type + '"');
    }

    // Check image width and height
    if ( header.width <= 0 || header.height <=0 ) 
    {
        error( 'TGA.tgaCheckHeader: Invalid image size' );
    }

    // Check image pixel size
    if (header.pixel_size !== 8  &&
    header.pixel_size !== 16 &&
    header.pixel_size !== 24 &&
    header.pixel_size !== 32) 
    {
        error('TGA.tgaCheckHeader: Invalid pixel size "' + header.pixel_size + '"');
    }
}

// Parse tga image buffer
function tgaParse( use_rle, use_pal, header, offset, data ) 
{
    var pixel_data,
    pixel_size,
    pixel_total,
    palettes;

    pixel_size = header.pixel_size >> 3;
    pixel_total = header.width * header.height * pixel_size;

    // Read palettes
    if ( use_pal ) 
    {
        palettes = data.subarray( offset, offset += header.colormap_length * ( header.colormap_size >> 3 ) );
    }

    // Read RLE
    if ( use_rle ) 
    {
        pixel_data = new Uint8Array(pixel_total);

        var c, count, i;
        var shift = 0;
        var pixels = new Uint8Array(pixel_size);

        while (shift < pixel_total) 
        {
            c     = data[offset++];
            count = (c & 0x7f) + 1;

            // RLE pixels.
            if (c & 0x80) 
            {
                // Bind pixel tmp array
                for (i = 0; i < pixel_size; ++i) 
                {
                    pixels[i] = data[offset++];
                }

                // Copy pixel array
                for (i = 0; i < count; ++i) 
                {
                    pixel_data.set(pixels, shift + i * pixel_size);
                }

                shift += pixel_size * count;
            } 
            else 
            {
                // Raw pixels.
                count *= pixel_size;
                for (i = 0; i < count; ++i) 
                {
                    pixel_data[shift + i] = data[offset++];
                }
                shift += count;
            }
        }
    } 
    else 
    {
        // RAW Pixels
        pixel_data = data.subarray(
            offset, offset += (use_pal ? header.width * header.height : pixel_total)
        );
    }

    return {
        pixel_data: pixel_data,
        palettes: palettes
    };
}

function tgaGetImageData8bits( header, imageData, y_start, y_step, y_end, x_start, x_step, x_end, image, palettes ) 
{
    var colormap = palettes;
    var color, i = 0, x, y;
    var width = header.width;

    for (y = y_start; y !== y_end; y += y_step) 
    {
        for (x = x_start; x !== x_end; x += x_step, i++) 
        {
            color = image[i];
            imageData[(x + width * y) * 4 + 3] = 255;
            imageData[(x + width * y) * 4 + 2] = colormap[(color * 3) + 0];
            imageData[(x + width * y) * 4 + 1] = colormap[(color * 3) + 1];
            imageData[(x + width * y) * 4 + 0] = colormap[(color * 3) + 2];
        }
    }
    return imageData;
}

function tgaGetImageData16bits( header, imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) 
{
    var color, i = 0, x, y;
    var width = header.width;

    for (y = y_start; y !== y_end; y += y_step) 
    {
        for (x = x_start; x !== x_end; x += x_step, i += 2) 
        {
            color = image[i + 0] + (image[i + 1] << 8); // Inversed ?
            imageData[(x + width * y) * 4 + 0] = (color & 0x7C00) >> 7;
            imageData[(x + width * y) * 4 + 1] = (color & 0x03E0) >> 2;
            imageData[(x + width * y) * 4 + 2] = (color & 0x001F) >> 3;
            imageData[(x + width * y) * 4 + 3] = (color & 0x8000) ? 0 : 255;
        }
    }
    return imageData;
}

function tgaGetImageData24bits( header, imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) 
{
    var i = 0, x, y;
    var width = header.width;

    for (y = y_start; y !== y_end; y += y_step) 
    {
        for (x = x_start; x !== x_end; x += x_step, i += 3) 
        {
            imageData[(x + width * y) * 4 + 3] = 255;
            imageData[(x + width * y) * 4 + 2] = image[i + 0];
            imageData[(x + width * y) * 4 + 1] = image[i + 1];
            imageData[(x + width * y) * 4 + 0] = image[i + 2];
        }
    }
    return imageData;
}

function tgaGetImageData32bits( header, imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) 
{
    var i = 0, x, y;
    var width = header.width;

    for (y = y_start; y !== y_end; y += y_step) 
    {
        for (x = x_start; x !== x_end; x += x_step, i += 4) 
        {
            imageData[(x + width * y) * 4 + 2] = image[i + 0];
            imageData[(x + width * y) * 4 + 1] = image[i + 1];
            imageData[(x + width * y) * 4 + 0] = image[i + 2];
            imageData[(x + width * y) * 4 + 3] = image[i + 3];
        }
    }
    return imageData;
}

function tgaGetImageDataGrey8bits( header, imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) 
{
    var color, i = 0, x, y;
    var width = header.width;

    for (y = y_start; y !== y_end; y += y_step) 
    {
        for (x = x_start; x !== x_end; x += x_step, i++) 
        {
            color = image[i];
            imageData[(x + width * y) * 4 + 0] = color;
            imageData[(x + width * y) * 4 + 1] = color;
            imageData[(x + width * y) * 4 + 2] = color;
            imageData[(x + width * y) * 4 + 3] = 255;
        }
    }
    return imageData;
}

function tgaGetImageDataGrey16bits( header, imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) 
{
    var i = 0, x, y;
    var width = header.width;

    for (y = y_start; y !== y_end; y += y_step) 
    {
        for (x = x_start; x !== x_end; x += x_step, i += 2) 
        {
            imageData[(x + width * y) * 4 + 0] = image[i + 0];
            imageData[(x + width * y) * 4 + 1] = image[i + 0];
            imageData[(x + width * y) * 4 + 2] = image[i + 0];
            imageData[(x + width * y) * 4 + 3] = image[i + 1];
        }
    }
    return imageData;
}

function getTgaRGBA( header, width, height, image, palette, use_grey ) 
{
    var x_start,
    y_start,
    x_step,
    y_step,
    x_end,
    y_end,
    data = new Uint8Array(width * height * 4);

    switch( (header.flags & TGA_ORIGIN_MASK) >> TGA_ORIGIN_SHIFT ) 
    {
        default:
        case TGA_ORIGIN_UL:
            x_start = 0;
            x_step = 1;
            x_end = width;
            y_start = 0;
            y_step = 1;
            y_end = height;
            break;

        case TGA_ORIGIN_BL:
            x_start = 0;
            x_step = 1;
            x_end = width;
            y_start = height - 1;
            y_step = -1;
            y_end = -1;
            break;

        case TGA_ORIGIN_UR:
            x_start = width - 1;
            x_step = -1;
            x_end = -1;
            y_start = 0;
            y_step = 1;
            y_end = height;
            break;

        case TGA_ORIGIN_BR:
            x_start = width - 1;
            x_step = -1;
            x_end = -1;
            y_start = height - 1;
            y_step = -1;
            y_end = -1;
            break;
    }

    if ( use_grey ) 
    {
        switch( header.pixel_size ) 
        {
            case 8:
                tgaGetImageDataGrey8bits( header, data, y_start, y_step, y_end, x_start, x_step, x_end, image );
                break;
            case 16:
                tgaGetImageDataGrey16bits( header, data, y_start, y_step, y_end, x_start, x_step, x_end, image );
                break;
            default:
                error( 'TGA.getTgaRGBA: not support this format' );
                break;
        }
    } 
    else 
    {
        switch( header.pixel_size ) 
        {
            case 8:
                tgaGetImageData8bits( header, data, y_start, y_step, y_end, x_start, x_step, x_end, image, palette );
                break;

            case 16:
                tgaGetImageData16bits( header, data, y_start, y_step, y_end, x_start, x_step, x_end, image );
                break;

            case 24:
                tgaGetImageData24bits( header, data, y_start, y_step, y_end, x_start, x_step, x_end, image );
                break;

            case 32:
                tgaGetImageData32bits( header, data, y_start, y_step, y_end, x_start, x_step, x_end, image );
                break;

            default:
                error( 'TGA.getTgaRGBA: not support this format' );
                break;
        }
    }

    // Load image data according to specific method
    // var func = 'tgaGetImageData' + (use_grey ? 'Grey' : '') + (header.pixel_size) + 'bits';
    // func(data, y_start, y_step, y_end, x_start, x_step, x_end, width, image, palette );
    return data;
}

FILTER.Codec.TGA = {

    encoder: FILTER.NotImplemented('TGA.encoder'),
    
    decoder: function ( buffer, metaData ) {

        if ( buffer.length < 19 ) error( 'TGA: Not enough data to contain header.' );

        var content = new Uint8Array( buffer ),
            offset = 0,
            header = {
                id_length:       content[ offset ++ ],
                colormap_type:   content[ offset ++ ],
                image_type:      content[ offset ++ ],
                colormap_index:  content[ offset ++ ] | content[ offset ++ ] << 8,
                colormap_length: content[ offset ++ ] | content[ offset ++ ] << 8,
                colormap_size:   content[ offset ++ ],

                origin: [
                    content[ offset ++ ] | content[ offset ++ ] << 8,
                    content[ offset ++ ] | content[ offset ++ ] << 8
                ],
                width:      content[ offset ++ ] | content[ offset ++ ] << 8,
                height:     content[ offset ++ ] | content[ offset ++ ] << 8,
                pixel_size: content[ offset ++ ],
                flags:      content[ offset ++ ]
            };

        // Check tga if it is valid format
        tgaCheckHeader( header );

        if ( header.id_length + offset > buffer.length ) error('TGA: No data');

        // Skip the needn't data
        offset += header.id_length;

        // Get targa information about RLE compression and palette
        var use_rle = false,
            use_pal = false,
            use_grey = false;

        switch ( header.image_type ) 
        {
            case TGA_TYPE_RLE_INDEXED:
                use_rle = true;
                use_pal = true;
                break;

            case TGA_TYPE_INDEXED:
                use_pal = true;
                break;

            case TGA_TYPE_RLE_RGB:
                use_rle = true;
                break;

            case TGA_TYPE_RGB:
                break;

            case TGA_TYPE_RLE_GREY:
                use_rle = true;
                use_grey = true;
                break;

            case TGA_TYPE_GREY:
                use_grey = true;
                break;
        }

        var result = tgaParse( use_rle, use_pal, header, offset, content );
        var rgbaData = getTgaRGBA( header, header.width, header.height, result.pixel_data, result.palettes, use_grey );

        return {
            width: header.width,
            height: header.height,
            data: rgbaData
        };
    }
};

}(FILTER);/**
*
* Filter RGBE/HDR Image Format CODEC
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var error = function( err ){ FILTER.error(err, true); };
// adapted from: http://www.graphics.cornell.edu/~bjw/rgbe.html
// http://en.wikipedia.org/wiki/RGBE_image_format

var HAS = 'hasOwnproperty', APPEND = Array.prototype.push, TOARRAY = Array.prototype.slice,
/* return codes for rgbe routines */
RGBE_RETURN_SUCCESS =  0,
RGBE_RETURN_FAILURE = -1,

/* default error routine.  change this to change error handling */
rgbe_read_error     = 1,
rgbe_write_error    = 2,
rgbe_format_error   = 3,
rgbe_memory_error   = 4,
rgbe_error = function(rgbe_error_code, msg) {
    switch (rgbe_error_code) 
    {
        case rgbe_read_error: 
            error("RGBE Read Error: " + (msg||''));
            break;
        case rgbe_write_error: 
            error("RGBE Write Error: " + (msg||''));
            break;
        case rgbe_format_error:  
            error("RGBE Bad File Format: " + (msg||''));
            break;
        case rgbe_memory_error:  
        default:
            error("RGBE: Error: " + (msg||''));
    }
    return RGBE_RETURN_FAILURE;
},

/* offsets to red, green, and blue components in a data (float) pixel */
RGBE_DATA_RED      = 0,
RGBE_DATA_GREEN    = 1,
RGBE_DATA_BLUE     = 2,

/* number of floats per pixel, use 4 since stored in rgba image format */
RGBE_DATA_SIZE     = 4,

/* flags indicating which fields in an rgbe_header_info are valid */
RGBE_VALID_PROGRAMTYPE      = 1,
RGBE_VALID_FORMAT           = 2,
RGBE_VALID_DIMENSIONS       = 4,

NEWLINE = "\n",

fgets = function( buffer, lineLimit, consume ) {
    lineLimit = !lineLimit ? 1024 : lineLimit;
    var p = buffer.pos,
        i = -1, len = 0, s = '', chunkSize = 128,
        chunk = String.fromCharCode.apply(null, new Uint16Array( buffer.subarray( p, p+chunkSize ) ) )
    ;
    while ( (0 > (i=chunk.indexOf( NEWLINE ))) && (len < lineLimit) && (p < buffer.byteLength) ) 
    {
        s += chunk; len += chunk.length;
        p += chunkSize;
        chunk += String.fromCharCode.apply(null, new Uint16Array( buffer.subarray( p, p+chunkSize ) ) );
    }

    if ( -1 < i ) 
    {
        /*for (i=l-1; i>=0; i--) {
            byteCode = m.charCodeAt(i);
            if (byteCode > 0x7f && byteCode <= 0x7ff) byteLen++;
            else if (byteCode > 0x7ff && byteCode <= 0xffff) byteLen += 2;
            if (byteCode >= 0xDC00 && byteCode <= 0xDFFF) i--; //trail surrogate
        }*/
        if ( false !== consume ) buffer.pos += len+i+1;
        return s + chunk.slice(0, i);

    }
    return false;
},

fputs = function( buffer, s ) {
    var i, l = s.length, c, b2
        b = new Uint16Array( l ); // 2 bytes for each char
    for (i=0; i<l; i++) 
    {
        // char >>> 8, char & 0xFF
        c = s.charCodeAt( i );
        b[ i ] = c;
    }
    APPEND.apply(buffer, TOARRAY.call(new Uint8Array(b)));
},

fputb = function( buffer, b ) {
    APPEND.apply(buffer, TOARRAY.call(b));
},

// regexes to parse header info fields
magic_token_re = /^#\?(\S+)$/,
gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
format_re = /^\s*FORMAT=(\S+)\s*$/,
dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,

/* minimal header reading.  modify if you want to parse more information */
RGBE_ReadHeader = function( buffer ) {
    var line, match,

        // RGBE format header struct
        header = {

          valid: 0,                         /* indicate which fields are valid */

          string: '',                       /* the actual header string */

          comments: '',                     /* comments found in header */

          programtype: 'RGBE',              /* listed at beginning of file to identify it
                                            * after "#?".  defaults to "RGBE" */

          format: '',                       /* RGBE format, default 32-bit_rle_rgbe */

          gamma: 1.0,                       /* image has already been gamma corrected with
                                            * given gamma.  defaults to 1.0 (no correction) */

          exposure: 1.0,                    /* a value of 1.0 in an image corresponds to
                                            * <exposure> watts/steradian/m^2.
                                            * defaults to 1.0 */

          width: 0, height: 0               /* image dimensions, width/height */

        }
    ;

    if ( buffer.pos >= buffer.byteLength || !( line=fgets( buffer ) ) ) 
    {
        return rgbe_error( rgbe_read_error, "no header found" );
    }
    
    /* if you want to require the magic token then uncomment the next line */
    if ( !(match=line.match(magic_token_re)) ) 
    {
        return rgbe_error( rgbe_format_error, "bad initial token" );
    }
    header.valid |= RGBE_VALID_PROGRAMTYPE;
    header.programtype = match[1];
    header.string += line + "\n";

    while ( true ) 
    {
        line = fgets( buffer );
        if ( false === line ) break;
        header.string += line + "\n";

        if ( '#' === line.charAt(0) ) 
        {
            header.comments += line + "\n";
            continue; // comment line
        }

        if ( match=line.match(gamma_re) ) 
        {
            header.gamma = parseFloat(match[1], 10);
        }
        if ( match=line.match(exposure_re) ) 
        {
            header.exposure = parseFloat(match[1], 10);
        }
        if ( match=line.match(format_re) ) 
        {
            header.valid |= RGBE_VALID_FORMAT;
            header.format = match[1];//'32-bit_rle_rgbe';
        }
        if ( match=line.match(dimensions_re) ) 
        {
            header.valid |= RGBE_VALID_DIMENSIONS;
            header.height = parseInt(match[1], 10);
            header.width = parseInt(match[2], 10);
        }

        if ( (header.valid&RGBE_VALID_FORMAT) && (header.valid&RGBE_VALID_DIMENSIONS) ) break;
    }

    if ( !(header.valid&RGBE_VALID_FORMAT) ) 
    {
        return rgbe_error( rgbe_format_error, "missing format specifier" );
    }
    if ( !(header.valid&RGBE_VALID_DIMENSIONS) ) 
    {
        return rgbe_error( rgbe_format_error, "missing image size specifier" );
    }
    return header;
},

/* default minimal header. modify if you want more information in header */
RGBE_WriteHeader = function( buffer, width, height, header ) {
    var programtype = "RGBE";
    header = header || { };
    
    if ( header[HAS]('programtype') ) programtype = header.programtype;
    
    fputs( buffer, "#?"+programtype+"\n" );
    
    if ( header[HAS]('gamma') ) 
        fputs( buffer, "GAMMA="+header.gamma+"\n" );
    
    if ( header[HAS]('exposure') ) 
        fputs( buffer, "EXPOSURE="+header.exposure+"\n" );
    
    fputs( buffer, "FORMAT=32-bit_rle_rgbe\n\n" );
    
    fputs( buffer, "-Y "+(~~height)+" +X "+(~~width)+"\n" );
},

RGBE_ReadPixels_RLE = function( buffer, w, h ) {
    var data_rgba, offset, pos, count, byteValue,
        scanline_buffer, ptr, ptr_end, i, l, off, isEncodedRun,
        scanline_width = w, num_scanlines = h, rgbeStart
    ;

    if (
        // run length encoding is not allowed so read flat
        ((scanline_width < 8) || (scanline_width > 0x7fff)) ||
        // this file is not run length encoded
        ((2 !== buffer[0]) || (2 !== buffer[1]) || (buffer[2] & 0x80))
    ) 
    {
        // return the flat buffer
        return new Uint8Array( buffer );
    }

    if ( scanline_width !== ((buffer[2]<<8) | buffer[3]) ) 
    {
        return rgbe_error(rgbe_format_error, "wrong scanline width");
    }

    data_rgba = new Uint8Array( 4*w*h );

    if ( !data_rgba || !data_rgba.length ) 
    {
        return rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
    }

    offset = 0; pos = 0; ptr_end = 4*scanline_width;
    rgbeStart = new Uint8Array( 4 );
    scanline_buffer = new Uint8Array( ptr_end );

    // read in each successive scanline
    while( (num_scanlines > 0) && (pos < buffer.byteLength) ) 
    {
        if ( pos+4 > buffer.byteLength ) 
        {
            return rgbe_error( rgbe_read_error );
        }

        rgbeStart[0] = buffer[pos++];
        rgbeStart[1] = buffer[pos++];
        rgbeStart[2] = buffer[pos++];
        rgbeStart[3] = buffer[pos++];

        if ( (2 != rgbeStart[0]) || (2 != rgbeStart[1]) || (((rgbeStart[2]<<8) | rgbeStart[3]) != scanline_width) ) 
        {
            return rgbe_error(rgbe_format_error, "bad rgbe scanline format");
        }

        // read each of the four channels for the scanline into the buffer
        // first red, then green, then blue, then exponent
        ptr = 0;
        while ( (ptr < ptr_end) && (pos < buffer.byteLength) ) 
        {
            count = buffer[ pos++ ];
            isEncodedRun = count > 128;
            if ( isEncodedRun ) count -= 128;

            if ( (0 === count) || (ptr+count > ptr_end) ) 
            {
                return rgbe_error(rgbe_format_error, "bad scanline data");
            }

            if ( isEncodedRun ) 
            {
                // a (encoded) run of the same value
                byteValue = buffer[ pos++ ];
                for (i=0; i<count; i++) 
                {
                    scanline_buffer[ ptr++ ] = byteValue;
                }
                //ptr += count;

            } 
            else 
            {
                // a literal-run
                scanline_buffer.set( buffer.subarray(pos, pos+count), ptr );
                ptr += count; pos += count;
            }
        }


        // now convert data from buffer into rgba
        // first red, then green, then blue, then exponent (alpha)
        l = scanline_width; //scanline_buffer.byteLength;
        for (i=0; i<l; i++) 
        {
            off = 0;
            data_rgba[offset] = scanline_buffer[i+off];
            off += scanline_width; //1;
            data_rgba[offset+1] = scanline_buffer[i+off];
            off += scanline_width; //1;
            data_rgba[offset+2] = scanline_buffer[i+off];
            off += scanline_width; //1;
            data_rgba[offset+3] = scanline_buffer[i+off];
            offset += 4;
        }
        num_scanlines--;
    }
    return data_rgba;
},

RGBE_WriteBytes_RLE = function( buffer, data, numbytes ) {
    var MINRUNLENGTH = 4;
    var cur, beg_run, run_count, old_run_count, nonrun_count;
    var buf = new Uint8Array(2);

    cur = 0;
    while( cur < numbytes ) 
    {
        beg_run = cur;
        /* find next run of length at least 4 if one exists */
        run_count = old_run_count = 0;
        while( (run_count < MINRUNLENGTH) && (beg_run < numbytes) ) 
        {
            beg_run += run_count;
            old_run_count = run_count;
            run_count = 1;
            while( (beg_run + run_count < numbytes) && (run_count < 127)
            && (data[beg_run] == data[beg_run + run_count]) )
                run_count++;
        }
        /* if data before next big run is a short run then write it as such */
        if ( (old_run_count > 1)&&(old_run_count == beg_run - cur) ) 
        {
            buf[0] = 128 + old_run_count;   /*write short run*/
            buf[1] = data[cur];
            
            fputb( buffer, buf );
            cur = beg_run;
        }
        /* write out bytes until we reach the start of the next run */
        while ( cur < beg_run ) 
        {
            nonrun_count = beg_run - cur;
            if ( nonrun_count > 128 ) nonrun_count = 128;
            buf[0] = nonrun_count;
            fputb( buffer, buf );
            fputb( buffer, data.subarray(cur, nonrun_count) );
            cur += nonrun_count;
        }
        /* write out next run if one was found */
        if ( run_count >= MINRUNLENGTH ) 
        {
            buf[0] = 128 + run_count;
            buf[1] = data[beg_run];
            fputb( buffer, buf );
            cur += run_count;
        }
    }
},
RGBE_WritePixels = function( buffer, data, numpixels ) {
    var rgbe = new Uint8Array(4);

    while ( numpixels-- > 0 ) 
    {
        rgbe[0] = 
        float2rgbe(rgbe,data[RGBE_DATA_RED],
        data[RGBE_DATA_GREEN],data[RGBE_DATA_BLUE]);
        data += RGBE_DATA_SIZE;
        fputb( buffer, rgbe );
    }
    return buffer;
},
RGBE_WritePixels_RLE = function( buffer, data, scanline_width, num_scanlines ) {
    var rgbe = new Uint8Array(4), buf, i, err, pos;

    if ( (scanline_width < 8)||(scanline_width > 0x7fff) )
    {
        /* run length encoding is not allowed so write flat*/
        //return RGBE_WritePixels( buffer,data,scanline_width*num_scanlines );
        fputb( buffer, data );
        return;
    }
    
    buf = new Uint8Array( scanline_width*4 );
    pos = 0;
    while(num_scanlines-- > 0) 
    {
        rgbe[0] = 2;
        rgbe[1] = 2;
        rgbe[2] = scanline_width >> 8;
        rgbe[3] = scanline_width & 0xFF;
        fputb( buffer, rgbe );
        
        for(i=0;i<scanline_width;i++) 
        {
            rgbe[0] = data[datapos + 0];
            rgbe[1] = data[datapos + 1];
            rgbe[2] = data[datapos + 2];
            rgbe[3] = data[datapos + 3];
            buf[i] = rgbe[0];
            buf[i+scanline_width] = rgbe[1];
            buf[i+2*scanline_width] = rgbe[2];
            buf[i+3*scanline_width] = rgbe[3];
            pos += RGBE_DATA_SIZE;
        }
        /* write out each of the four channels separately run length encoded */
        /* first red, then green, then blue, then exponent */
        for(i=0;i<4;i++) 
        {
            RGBE_WriteBytes_RLE( buffer, buf[i*scanline_width], scanline_width )
        }
    }
}
;

FILTER.Codec.HDR = FILTER.Codec.RGBE = {

    encoder: function( imgData, metaData ) {
        metaData = metaData || {};
        var buffer = [ ];
        RGBE_WriteHeader( buffer, imgData.width, imgData.height, metaData );
        RGBE_WritePixels_RLE( buffer, imgData.data, metaData.scanline_width||0, metaData.num_scanlines||0 );
        return new Buffer( new Uint8Array( buffer ) );
    },
    
    decoder: function( buffer, metaData ) {
        var byteArray = new Uint8Array( buffer ), byteLength = byteArray.byteLength;
        byteArray.pos = 0;
        var rgbe_header_info = RGBE_ReadHeader( byteArray );

        if ( RGBE_RETURN_FAILURE !== rgbe_header_info ) 
        {
            var w = rgbe_header_info.width, h = rgbe_header_info.height,
                image_rgba_data = RGBE_ReadPixels_RLE( byteArray.subarray(byteArray.pos), w, h );
            
            if ( RGBE_RETURN_FAILURE !== image_rgba_data ) 
            {
                if ( metaData ) 
                {
                    //metaData.header = rgbe_header_info.string;
                    metaData.gamma = rgbe_header_info.gamma;
                    metaData.exposure = rgbe_header_info.exposure;
                }
                
                return {
                    width: w, 
                    height: h,
                    data: image_rgba_data
                };
            }
        }
        return null;
    }
};
}(FILTER);
/* main code ends here */
/* export the module */
return FILTER;
});
/**
*
*   FILTER.js Generic Filters
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (Generic Filters)
*   https://github.com/foo123/FILTER.js
*
**/!function( root, factory ){
"use strict";
if ( ('object'===typeof module) && module.exports ) /* CommonJS */
    module.exports = factory.call(root,(module.$deps && module.$deps["FILTER"]) || require("./FILTER".toLowerCase()));
else if ( ("function"===typeof define) && define.amd && ("function"===typeof require) && ("function"===typeof require.specified) && require.specified("FILTER_FILTERS") /*&& !require.defined("FILTER_FILTERS")*/ ) 
    define("FILTER_FILTERS",['module',"FILTER"],function(mod,module){factory.moduleUri = mod.uri; factory.call(root,module); return module;});
else /* Browser/WebWorker/.. */
    (factory.call(root,root["FILTER"])||1)&&('function'===typeof define)&&define.amd&&define(function(){return root["FILTER"];} );
}(  /* current root */          this, 
    /* module factory */        function ModuleFactory__FILTER_FILTERS( FILTER ){
/* main code starts here */

/**
*
*   FILTER.js Generic Filters
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (Generic Filters)
*   https://github.com/foo123/FILTER.js
*
**/
"use strict";
var FILTER_FILTERS_PATH = FILTER.getPath( ModuleFactory__FILTER_FILTERS.moduleUri );
/**
*
* Composite Filter Class
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var OP = Object.prototype, FP = Function.prototype, AP = Array.prototype,
    slice = AP.slice, splice = AP.splice, concat = AP.push;

// Composite Filter Stack  (a variation of Composite Design Pattern)
var CompositeFilter = FILTER.Create({
    name: "CompositeFilter"
    
    ,init: function CompositeFilter( filters ) { 
        var self = this;
        self.filters = filters && filters.length ? filters : [ ];
    }
    
    ,path: FILTER_FILTERS_PATH
    ,filters: null
    ,hasInputs: true
    ,_stable: true
    
    ,dispose: function( withFilters ) {
        var self = this, i, stack = self.filters;
        
        if ( true === withFilters )
        {
            for (i=0; i<stack.length; i++)
            {
                stack[ i ] && stack[ i ].dispose( withFilters );
                stack[ i ] = null;
            }
        }
        self.filters = null;
        self.$super('dispose');
        return self;
    }
    
    ,serializeInputs: function( curIm ) {
        var self = this, i, stack = self.filters, l, inputs = [ ], hasInputs = false, input;
        for (i=0,l=stack.length; i<l; i++)
        {
            inputs.push( input=stack[ i ].serializeInputs( curIm ) );
            if ( input ) hasInputs = true;
        }
        return hasInputs ? inputs : null;
    }
    
    ,unserializeInputs: function( inputs, curImData ) {
        var self = this;
        if ( !inputs ) return self;
        var i, stack = self.filters, l;
        for (i=0,l=stack.length; i<l; i++) if ( inputs[ i ] ) stack[ i ].unserializeInputs( inputs[ i ], curImData );
        return self;
    }
    
    ,serialize: function( ) {
        var self = this, i, stack = self.filters, l, filters = [ ];
        for (i=0,l=stack.length; i<l; i++) filters.push( stack[ i ].serializeFilter( ) );
        return {_stable: self._stable, filters: filters};
    }
    
    ,unserialize: function( params ) {
        var self = this, i, l, ls, filters, filter, stack = self.filters;
        
        self._stable = params._stable;
        filters = params.filters || [ ];
        l = filters.length; ls = stack.length;
        
        if ( (l !== ls) || (!self._stable) )
        {
            // dispose any prev filters
            for (i=0; i<ls; i++)
            {
                stack[ i ] && stack[ i ].dispose( true );
                stack[ i ] = null;
            }
            stack = [ ];
            
            for (i=0; i<l; i++)
            {
                filter = filters[ i ] && filters[ i ].filter ? FILTER.Filter.get( filters[ i ].filter ) : null;
                if ( filter )
                {
                    stack.push( new filter( ).unserializeFilter( filters[ i ] ) );
                }
                else
                {
                    throw new Error('Filter "' + filters[ i ].filter + '" could not be created');
                    return;
                }
            }
            self.filters = stack;
        }
        else
        {
            for (i=0; i<l; i++) stack[ i ].unserializeFilter( filters[ i ] );
        }
        return self;
    }
    
    ,setMetaData: function( meta, serialisation ) {
        var self = this, stack = self.filters, i, l;
        if ( meta && meta.filters && (l=meta.filters.length) && stack.length )
            for (i=0; i<l; i++) stack[ meta.filters[i][0] ].setMetaData( meta.filters[i][1], serialisation );
        if ( meta && (null != meta._IMG_WIDTH) )
        {
            self.meta = {_IMG_WIDTH: meta._IMG_WIDTH, _IMG_HEIGHT: meta._IMG_HEIGHT};
            self.hasMeta = true;
        }
        return self;
    }
    
    ,stable: function( bool ) {
        if ( !arguments.length ) bool = true;
        this._stable = !!bool;
        return this;
    }
    
    // manipulate the filter chain, methods
    ,set: function( filters ) {
        if ( filters && filters.length ) this.filters = filters;
        return this;
    }
    
    ,filter: function( i, filter ) {
        if ( arguments.length > 1 )
        {
            if ( this.filters.length > i ) this.filters[ i ] = filter;
            else this.filters.push( filter );
            return this;
        }
        else
        {
            return this.filters.length > i ? this.filters[ i ] : null;
        }
    }
    ,get: null
    
    ,push: function(/* variable args here.. */) {
        if ( arguments.length ) concat.apply(this.filters, arguments);
        return this;
    }
    ,concat: null
    
    ,pop: function( ) {
        return this.filters.pop( );
    }
    
    ,shift: function( ) {
        return this.filters.shift( );
    }
    
    ,unshift: function(/* variable args here.. */) {
        if ( arguments.length ) splice.apply(this.filters, concat.apply([0, 0], arguments));
        return this;
    }
    
    ,insertAt: function( i /*, filter1, filter2, filter3..*/) {
        var args = slice.call(arguments), arglen = args.length;
        if ( argslen > 1 )
        {
            args.shift( );
            splice.apply( this.filters, [i, 0].concat( args ) );
        }
        return this;
    }
    
    ,removeAt: function( i ) {
        return this.filters.splice( i, 1 );
    }
    
    ,remove: function( filter ) {
        var i = this.filters.length;
        while ( --i >= 0 ) 
        { 
            if ( filter === this.filters[i] ) 
                this.filters.splice( i, 1 ); 
        }
        return this;
    }
    
    ,reset: function( ) {
        this.filters.length = 0;  
        return this;
    }
    ,empty: null
    
    // used for internal purposes
    ,_apply: function( im, w, h, metaData ) {
        var self = this, meta, filtermeta = null, metalen = 0, IMGW = null, IMGH = null;
        if ( self.filters.length )
        {
            metaData = metaData || {};
            var filterstack = self.filters, stacklength = filterstack.length, fi, filter;
            filtermeta = new Array(stacklength);
            for (fi=0; fi<stacklength; fi++)
            {
                filter = filterstack[fi]; 
                if ( filter && filter._isOn ) 
                {
                    metaData.container = self;  metaData.index = fi;
                    im = filter._apply(im, w, h, metaData);
                    if ( filter.hasMeta )
                    {
                        filtermeta[metalen++] = [fi, meta=filter.metaData()];
                        if ( null != meta._IMG_WIDTH )
                        {
                            // width/height changed during process, update and pass on
                            IMGW = w = meta._IMG_WIDTH;
                            IMGH = h = meta._IMG_HEIGHT;
                        }
                    }
                }
            }
        }
        if ( metalen > 0 )
        {
            if ( filtermeta.length > metalen ) filtermeta.length = metalen;
            self.hasMeta = true;
            self.meta = {filters: filtermeta};
            if ( null != IMGW ) { self.meta._IMG_WIDTH = IMGW; self.meta._IMG_HEIGHT = IMGH; }
        }
        else
        {
            self.hasMeta = false;
            self.meta = null;
        }
        return im;
    }
        
    ,canRun: function( ) {
        return this._isOn && this.filters.length;
    }
    
    ,toString: function( ) {
        var tab = "\t", s = this.filters, out = [], i, l = s.length;
        for (i=0; i<l; i++) out.push( tab + s[i].toString( ).split("\n").join("\n"+tab) );
        return [
             "[FILTER: " + this.name + "]"
             ,"[",out.join( "\n" ),"]",""
         ].join("\n");
    }
});
// aliases
CompositeFilter.prototype.get = CompositeFilter.prototype.filter;
CompositeFilter.prototype.empty = CompositeFilter.prototype.reset;
CompositeFilter.prototype.concat = CompositeFilter.prototype.push;
FILTER.CompositionFilter = FILTER.CompositeFilter;

}(FILTER);/**
*
* Algebraic Filter
*
* Algebraicaly combines input images
*
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var min = Math.min, max = Math.max, floor = Math.floor,
    A32F = FILTER.Array32F, notSupportClamp = FILTER._notSupportClamp;

// Algebraic Filter
FILTER.Create({
    name: "AlgebraicFilter"
    
    ,init: function AlgebraicFilter( matrix ) {
        var self = this;
        self.set( matrix );
    }
    
    ,path: FILTER_FILTERS_PATH
    ,matrix: null
    ,raw: false
    ,hasInputs: true
    
    ,dispose: function( ) {
        var self = this;
        self.matrix = null;
        self.raw = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
            matrix: self.matrix
           ,raw: self.raw
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.matrix = params.matrix;
        self.raw = params.raw;
        return self;
    }
    
    ,fastGradient: function( d ) {
        return this;
    }
    
    ,set: function( matrix ) {
        var self = this;
        if ( matrix && matrix.length /*&& (matrix.length%7 === 0)*//*7N*/ )
        {
            //self.resetInputs( );
            /*for(var i=0,l=matrix; i<l; i++)
                if ( matrix[i][0] ) self.setInput(String(i+1), matrix[i][0]);*/
            self.matrix = matrix;
        }
        return self;
    }
    
    ,setInputValues: function( inputIndex, values ) {
        var self = this, index, matrix = self.matrix;
        if ( values )
        {
            if ( !matrix ) matrix = self.matrix = [1, 0, 0, 0, 0, null, null];
            index = (inputIndex-1)*7;
            if ( null != values.a ) matrix[index] = +values.a;
            if ( null != values.b ) matrix[index+1] = +values.b;
            if ( null != values.c ) matrix[index+2] = +values.c;
            if ( null != values.tx ) matrix[index+3] = +values.tx;
            if ( null != values.ty ) matrix[index+4] = +values.ty;
            if ( undef !== values.co ) matrix[index+5] = values.co;
            if ( undef !== values.ci ) matrix[index+6] = values.ci;
        }
        return self;
    }
    
    ,reset: function( ) {
        var self = this;
        self.matrix = null;
        //self.resetInputs( );
        return self;
    }
    
    ,_apply: function( im, w, h ) {
        //"use asm";
        var self = this, matrix = self.matrix;
        if ( !matrix || !matrix.length ) return im;
        var i, j, k, ii, kk, x1, y1, x2, y2, tx, ty, c, a, b, ci, co, im2, w2, h2, wm, hm,
            ra, ga, ba, aa, rb, gb, bb, ab, v, applyArea,
            l = matrix.length, imLen = im.length, imArea = imLen>>>2, res = new A32F(imLen);
        
        k = 0; w2 = w; h2 = h; im2 = im;
        for(j=0; j<l; j+=7)
        {
            wm = min(w, w2); hm = min(h, h2); applyArea = wm*hm;
            
            c = matrix[j+0]; a = matrix[j+1]; b = matrix[j+2]||0;
            // make them relative
            tx = ((matrix[j+3]||0)*(w-1))|0; ty = ((matrix[j+4]||0)*(h-1)*w)|0;
            // specific channels, leave null for all channels
            co = matrix[j+5]; ci = matrix[j+6];
            
            if ( null !== ci && null !== co )
            {
                for(x2=0,y1=ty,y2=0,i=0; i<applyArea; i++,x2++)
                {
                    if ( x2 >= wm ) { x2=0; y1+=w; y2+=w2; }
                    x1 = x2+tx;
                    if ( 0 > x1 || x1 >= w || 0 > y1 || y1 >= imArea ) continue;
                    ii = (x1+y1)<<2; kk = (x2+y2)<<2;
                    res[ii+co] = c*res[ii+co] + a*im2[kk+ci] + b;
                }
            }
            else if ( null !== ci )
            {
                for(x2=0,y1=ty,y2=0,i=0; i<applyArea; i++,x2++)
                {
                    if ( x2 >= wm ) { x2=0; y1+=w; y2+=w2; }
                    x1 = x2+tx;
                    if ( 0 > x1 || x1 >= w || 0 > y1 || y1 >= imArea ) continue;
                    ii = (x1+y1)<<2; kk = (x2+y2)<<2;
                    v = a*im2[kk+ci] + b;
                    res[ii  ] = c*res[ii  ] + v;
                    res[ii+1] = c*res[ii+1] + v;
                    res[ii+2] = c*res[ii+2] + v;
                    res[ii+3] = c*res[ii+3] + v;
                }
            }
            else if ( null !== co )
            {
                ra = ((a>>>16)&255)/255; ga = ((a>>>8)&255)/255; ba = ((a)&255)/255; aa = ((a>>>24)&255)/255;
                rb = (b>>>16)&255; gb = (b>>>8)&255; bb = (b)&255; ab = (b>>>24)&255;
                for(x2=0,y1=ty,y2=0,i=0; i<applyArea; i++,x2++)
                {
                    if ( x2 >= wm ) { x2=0; y1+=w; y2+=w2; }
                    x1 = x2+tx;
                    if ( 0 > x1 || x1 >= w || 0 > y1 || y1 >= imArea ) continue;
                    ii = (x1+y1)<<2; kk = (x2+y2)<<2;
                    res[ii+co] = c*res[ii+co] + ra*im2[kk  ]+rb + ga*im2[kk+1]+gb + ba*im2[kk+2]+bb + aa*im2[kk+3]+ab;
                }
            }
            else //if ( null === ci && null === co )
            {
                for(x2=0,y1=ty,y2=0,i=0; i<applyArea; i++,x2++)
                {
                    if ( x2 >= wm ) { x2=0; y1+=w; y2+=w2; }
                    x1 = x2+tx;
                    if ( 0 > x1 || x1 >= w || 0 > y1 || y1 >= imArea ) continue;
                    ii = (x1+y1)<<2; kk = (x2+y2)<<2;
                    res[ii  ] = c*res[ii  ] + a*im2[kk  ] + b;
                    res[ii+1] = c*res[ii+1] + a*im2[kk+1] + b;
                    res[ii+2] = c*res[ii+2] + a*im2[kk+2] + b;
                    res[ii+3] = c*res[ii+3] + a*im2[kk+3] + b;
                }
            }
            
            im2 = self.input(++k);
            w2 = im2[1]; h2 = im2[2]; im2 = im2[0];
        }
        //if ( self.raw ) return res;
        
        if ( notSupportClamp )
        {
            for(i=0; i<imLen; i+=4)
            {
                im[i  ] = min(255,max(0,res[i  ]|0));
                im[i+1] = min(255,max(0,res[i+1]|0));
                im[i+2] = min(255,max(0,res[i+2]|0));
                im[i+3] = min(255,max(0,res[i+3]|0));
            }
        }
        else
        {
            for(i=0; i<imLen; i+=4)
            {
                im[i  ] = res[i  ]|0;
                im[i+1] = res[i+1]|0;
                im[i+2] = res[i+2]|0;
                im[i+3] = res[i+3]|0;
            }
        }
        return im;
    }
});

}(FILTER);/**
*
* Blend Filter
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var HAS = 'hasOwnProperty', IMG = FILTER.ImArray, IMGcpy = FILTER.ImArrayCopy,
    Min = Math.min, Round = Math.round, hasArraySet = FILTER.Util.Array.hasArrayset,
    arrayset = FILTER.Util.Array.arrayset, notSupportClamp = FILTER._notSupportClamp;

// Blend Filter, photoshop-like image blending
FILTER.Create({
    name: "BlendFilter"
    
    ,init: function BlendFilter( matrix ) { 
        var self = this;
        self.set( matrix );
    }
    
    ,path: FILTER_FILTERS_PATH
    // parameters
    ,matrix: null
    ,hasInputs: true
    
    ,dispose: function( ) {
        var self = this;
        self.matrix = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
            matrix: self.matrix
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.matrix = params.matrix;
        return self;
    }
    
    ,set: function( matrix ) {
        var self = this;
        if ( matrix && matrix.length /*&& (matrix.length&3 === 0)*//*4N*/ )
        {
            //self.resetInputs( );
            self.matrix = matrix;
        }
        return self;
    }
    
    ,setInputValues: function( inputIndex, values ) {
        var self = this, index, matrix = self.matrix;
        if ( values )
        {
            if ( !matrix ) matrix = self.matrix = ["normal", 0, 0, 1, 1];
            index = (inputIndex-1)*5;
            if ( undef !== values.mode )    matrix[index  ] =  values.mode||"normal";
            if ( null != values.startX )    matrix[index+1] = +values.startX;
            if ( null != values.startY )    matrix[index+2] = +values.startY;
            if ( null != values.alpha )     matrix[index+3] = +values.alpha;
            if ( null != values.enabled )   matrix[index+4] = !!values.enabled;
        }
        return self;
    }
    
    ,reset: function( ) {
        var self = this;
        self.matrix = null;
        self.resetInputs( );
        return self;
    }
    
    ,_apply: function(im, w, h) {
        //"use asm";
        var self = this, matrix = self.matrix;
        if ( !matrix || !matrix.length ) return im;
        
        var i, k, l = matrix.length, imLen = im.length, input,
            alpha, startX, startY, startX2, startY2, W, H, im2, w2, h2, 
            W1, W2, start, end, x, y, x2, y2, pix2, blend, mode, blended,
            BLEND = FILTER.Color.Blend;
        
        //blended = im;
        // clone original image since same image may also blend with itself
        blended = new IMG(imLen); if ( hasArraySet ) blended.set( im ); else arrayset(blended, im);
        
        for(i=0,k=1; i<l; i+=5,k++)
        {
            if ( !matrix[i+4] ) continue; // not enabled, skip
            alpha = matrix[i+3]||0; if ( 0 === alpha ) continue; // 0 alpha, skip
            mode = matrix[i]||"normal"; blend = BLEND[HAS](mode)?BLEND[mode]:null; if ( !blend ) continue;
            
            input = self.input(k); if ( !input ) continue; // no input, skip
            im2 = input[0]; w2 = input[1]; h2 = input[2];
            
            startX = matrix[i+1]||0; startY = matrix[i+2]||0;
            startX2 = 0; startY2 = 0;
            if ( startX < 0 ) { startX2 = -startX; startX = 0; }
            if ( startY < 0 ) { startY2 = -startY; startY = 0; }
            if ( startX >= w || startY >= h || startX2 >= w2 || startY2 >= h2 ) continue;
            
            startX = Round(startX); startY = Round(startY);
            startX2 = Round(startX2); startY2 = Round(startY2);
            W = Min(w-startX, w2-startX2); H = Min(h-startY, h2-startY2);
            if ( W <= 0 || H <= 0 ) continue;
            
            // blend images
            x = startX; y = startY*w; x2 = startX2; y2 = startY2*w2; W1 = startX+W; W2 = startX2+W;
            for(start=0,end=H*W; start<end; start++)
            {
                pix2 = (x2 + y2)<<2;
                // blend only if im2 has opacity in this point
                if ( 0 < im2[pix2+3] ) blend(blended, im2, (x + y)<<2, pix2, alpha, notSupportClamp);
                // next pixels
                if ( ++x >= W1 ) { x = startX; y += w; }
                if ( ++x2 >= W2 ) { x2 = startX2; y2 += w2; }
            }
        }
        return blended; 
    }
});
// aliases
FILTER.CombineFilter = FILTER.BlendFilter;

}(FILTER);/**
*
* Table Lookup Filter
*
* Changes target image colors according to color lookup tables for each channel
*
* @param tableR Optional (a lookup table of 256 color values for red channel)
* @param tableG Optional (a lookup table of 256 color values for green channel)
* @param tableB Optional (a lookup table of 256 color values for blue channel)
* @param tableA Optional (a lookup table of 256 color values for alpha channel, NOT USED YET)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

// color table
var CHANNEL = FILTER.CHANNEL, CT = FILTER.ColorTable, clamp = FILTER.Color.clampPixel,
    Floor = Math.floor, Power = Math.pow, Exponential = Math.exp, nF = 1.0/255,
    TypedArray = FILTER.Util.Array.typed;

// ColorTableFilter
var ColorTableFilter = FILTER.Create({
    name: "ColorTableFilter"
    
    ,init: function ColorTableFilter( tR, tG, tB, tA ) {
        var self = this;
        self.table = [null, null, null, null];
        tR = tR || null;
        tG = tG || tR;
        tB = tB || tG;
        tA = tA || null;
        self.table[CHANNEL.R] = tR;
        self.table[CHANNEL.G] = tG;
        self.table[CHANNEL.B] = tB;
        self.table[CHANNEL.A] = tA;
    }
    
    ,path: FILTER_FILTERS_PATH
    // parameters
    ,table: null
    
    ,dispose: function( ) {
        var self = this;
        self.table = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             tableR: self.table[CHANNEL.R]
            ,tableG: self.table[CHANNEL.G]
            ,tableB: self.table[CHANNEL.B]
            ,tableA: self.table[CHANNEL.A]
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.table[CHANNEL.R] = TypedArray(params.tableR, CT);
        self.table[CHANNEL.G] = TypedArray(params.tableG, CT);
        self.table[CHANNEL.B] = TypedArray(params.tableB, CT);
        self.table[CHANNEL.A] = TypedArray(params.tableA, CT);
        return self;
    }
    
    ,functional: function( fR, fG, fB ) {
        if ( "function" !== typeof fR ) return this;
        var eye = FILTER.Util.Filter.ct_eye,
            tR = eye(fR), tG = fG ? eye(fG) : tR, tB = fB ? eye(fB) : tG;
        return this.set(tR, tG, tB);
    }
    
    ,channel: function( channel ) {
        if ( null == channel ) return this;
        var eye = FILTER.Util.Filter.ct_eye, tR, tG, tB;
        switch(channel || CHANNEL.R)
        {
            case CHANNEL.B: 
                tR = eye(0,0); tG = eye(0,0); tB = eye(); 
                break;
            
            case CHANNEL.G: 
                tR = eye(0,0); tG = eye(); tB = eye(0,0); 
                break;
            
            case CHANNEL.R: 
            default:
                tR = eye(); tG = eye(0,0); tB = eye(0,0); 
                break;
            
        }
        return this.set(tR, tG, tB);
    }
    
    ,redChannel: function( ) {
        return this.channel( CHANNEL.R );
    }
    
    ,greenChannel: function( ) {
        return this.channel( CHANNEL.G );
    }
    
    ,blueChannel: function( ) {
        return this.channel( CHANNEL.B );
    }
    
    ,channelInvert: function( channel ) {
        if ( null == channel ) return this;
        var eye = FILTER.Util.Filter.ct_eye, tR, tG, tB;
        switch(channel || CHANNEL.R)
        {
            case CHANNEL.B: 
                tR = eye(); tG = eye(); tB = eye(-1,255); 
                break;
            
            case CHANNEL.G: 
                tR = eye(); tG = eye(-1,255); tB = eye(); 
                break;
            
            case CHANNEL.R: 
            default:
                tR = eye(-1,255); tG = eye(); tB = eye(); 
                break;
            
        }
        return this.set(tR, tG, tB);
    }
    
    ,redInvert: function( ) {
        return this.channelInvert( CHANNEL.R );
    }
    
    ,greenInvert: function( ) {
        return this.channelInvert( CHANNEL.G );
    }
    
    ,blueInvert: function( ) {
        return this.channelInvert( CHANNEL.B );
    }
    
    /*,alphaInvert: function( ) {
        return this.channelInvert( CHANNEL.A );
    }*/
    
    ,invert: function( ) {
        return this.set(FILTER.Util.Filter.ct_eye(-1,255));
    }
    
    ,thresholds: function( thresholdsR, thresholdsG, thresholdsB ) {
        // assume thresholds are given in pointwise scheme as pointcuts
        // not in cumulative scheme
        // [ 0.5 ] => [0, 1]
        // [ 0.3, 0.3, 0.3 ] => [0, 0.3, 0.6, 1]
        if (!thresholdsR.length) thresholdsR=[thresholdsR];
        if (!thresholdsG) thresholdsG=thresholdsR;
        if (!thresholdsB) thresholdsB=thresholdsG;

        var tLR = thresholdsR.length, numLevelsR = tLR+1, 
            tLG = thresholdsG.length, numLevelsG = tLG+1, 
            tLB = thresholdsB.length, numLevelsB = tLB+1, 
            tR = new CT(256), qR = new CT(numLevelsR), 
            tG = new CT(256), qG = new CT(numLevelsG), 
            tB = new CT(256), qB = new CT(numLevelsB), 
            i, j, nLR=255/(numLevelsR-1), nLG=255/(numLevelsG-1), nLB=255/(numLevelsB-1);
        for(i=0; i<numLevelsR; i++) qR[i] = (nLR * i)|0;
        thresholdsR[0] = (255*thresholdsR[0])|0;
        for(i=1; i<tLR; i++) thresholdsR[i] = thresholdsR[i-1] + (255*thresholdsR[i])|0;
        for(i=0; i<numLevelsG; i++) qG[i] = (nLG * i)|0;
        thresholdsG[0] = (255*thresholdsG[0])|0;
        for(i=1; i<tLG; i++) thresholdsG[i] = thresholdsG[i-1] + (255*thresholdsG[i])|0;
        for(i=0; i<numLevelsB; i++) qB[i] = (nLB * i)|0;
        thresholdsB[0] = (255*thresholdsB[0])|0;
        for(i=1; i<tLB; i++) thresholdsB[i] = thresholdsB[i-1] + (255*thresholdsB[i])|0;
        for(i=0; i<256; i++)
        { 
            // the non-linear mapping is here
            j=0; while (j<tLR && i>thresholdsR[j]) j++;
            tR[ i ] = clamp(qR[ j ]); 
            j=0; while (j<tLG && i>thresholdsG[j]) j++;
            tG[ i ] = clamp(qG[ j ]); 
            j=0; while (j<tLB && i>thresholdsB[j]) j++;
            tB[ i ] = clamp(qB[ j ]); 
        }
        return this.set(tR, tG, tB);
    }
    
    ,threshold: function( thresholdR, thresholdG, thresholdB ) {
        thresholdR = null == thresholdR ? 0.5 : thresholdR;
        thresholdG = null == thresholdG ? thresholdR : thresholdG;
        thresholdB = null == thresholdB ? thresholdG : thresholdB;
        return this.thresholds([thresholdR], [thresholdG], [thresholdB]);
    }
    
    ,quantize: function( numLevels ) {
        if ( null == numLevels ) numLevels = 64;
        if ( numLevels < 2 ) numLevels = 2;
        var j, q=new CT(numLevels), nL=255/(numLevels-1), nR=numLevels/256;
        for(j=0; j<numLevels; j++) q[j] = clamp(nL * j)|0;
        return this.set(FILTER.Util.Filter.ct_eye(function( i ){ return q[ (nR * i)|0 ]; }));
    }
    ,posterize: null
    
    ,binarize: function( ) {
        return this.quantize(2);
    }
    
    // adapted from http://www.jhlabs.com/ip/filters/
    ,solarize: function( threshold, type ) {
        if ( null == type ) type = 1;
        if ( null == threshold ) threshold=0.5;
        
        var solar;
        if ( -1 === type ) // inverse
        {
            threshold *= 256; 
            solar = function( i ){ return i>threshold ? 255-i : i; };
        }
        else if ( 2 === type ) // variation
        {
            threshold = 1-threshold;
            solar = function( i ){
                var q = 2*i/255; 
                return q<threshold ? 255-255*q : 255*q-255;
            };
        }
        else
        {
            solar = function( i ){
                var q = 2*i/255; 
                return q>threshold ? 255-255*q : 255*q-255;
            };
        }
        return this.set(FILTER.Util.Filter.ct_eye(solar));
    }
    
    ,solarize2: function( threshold ) {
        return this.solarize( threshold, 2 );
    }
    
    ,solarizeInverse: function( threshold ) {
        return this.solarize( threshold, -1 );
    }
    
    // apply a binary mask to the image color channels
    ,mask: function( mask ) {
        var eye = FILTER.Util.Filter.ct_eye,
            maskR = (mask>>>16)&255, maskG = (mask>>>8)&255, maskB = mask&255;
        return this.set(eye(function( i ){ return i & maskR; }), eye(function( i ){ return i & maskG; }), eye(function( i ){ return i & maskB; }));
    }
    
    // replace a color with another
    ,replace: function( color, replacecolor ) {
        if (color == replacecolor) return this;
        var eye = FILTER.Util.Filter.ct_eye,
            tR = eye(), tG = eye(), tB = eye();
        tR[(color>>>16)&255] = (replacecolor>>>16)&255;
        tG[(color>>>8)&255] = (replacecolor>>>8)&255;
        tB[(color)&255] = (replacecolor)&255;
        return this.set(tR, tG, tB);
    }
    
    // extract a range of color values from a specific color channel and set the rest to background color
    ,extract: function( channel, range, background ) {
        if (!range || !range.length) return this;
        background = background||0;
        var eye = FILTER.Util.Filter.ct_eye, s, f,
            tR = eye(0,(background>>>16)&255), tG = eye(0,(background>>>8)&255), tB = eye(0,background&255);
        switch(channel || CHANNEL.R)
        {
            case CHANNEL.B:
                for(s=range[0],f=range[1]; s<=f; s++) tB[s] = clamp(s);
                break;
            
            case CHANNEL.G:
                for(s=range[0],f=range[1]; s<=f; s++) tG[s] = clamp(s);
                break;
            
            case CHANNEL.R:
            default:
                for(s=range[0],f=range[1]; s<=f; s++) tR[s] = clamp(s);
                break;
        }
        return this.set(tR, tG, tB);
    }
    
    // adapted from http://www.jhlabs.com/ip/filters/
    ,gammaCorrection: function( gammaR, gammaG, gammaB ) {
        gammaR = gammaR || 1;
        gammaG = gammaG || gammaR;
        gammaB = gammaB || gammaG;
        // gamma correction uses inverse gamma
        gammaR = 1.0/gammaR; gammaG = 1.0/gammaG; gammaB = 1.0/gammaB;
        var eye = FILTER.Util.Filter.ct_eye;
        return this.set(eye(function( i ){ return 255*Power(nF*i, gammaR); }), eye(function( i ){ return 255*Power(nF*i, gammaG); }), eye(function( i ){ return 255*Power(nF*i, gammaB); }));
    }
    
    // adapted from http://www.jhlabs.com/ip/filters/
    ,exposure: function( exposure ) {
        if ( null == exposure ) exposure = 1;
        return this.set(FILTER.Util.Filter.ct_eye(function( i ){ return 255 * (1 - Exponential(-exposure * i *nF)); }));
    }
    
    ,contrast: function( r, g, b ) {
        if ( null == g ) g = r;
        if ( null == b ) b = r;
        r += 1.0; g += 1.0; b += 1.0;
        var eye = FILTER.Util.Filter.ct_eye;
        return this.set(eye(r,128*(1 - r)), eye(g,128*(1 - g)), eye(b,128*(1 - b)));
    }
    
    ,brightness: function( r, g, b ) {
        if ( null == g ) g = r;
        if ( null == b ) b = r;
        var eye = FILTER.Util.Filter.ct_eye;
        return this.set(eye(1,r), eye(1,g), eye(1,b));
    }
    
    ,quickContrastCorrection: function( contrast ) {
        return this.set(FILTER.Util.Filter.ct_eye(null == contrast ? 1.2 : +contrast));
    }
    
    ,set: function( tR, tG, tB, tA ) {
        if ( !tR ) return this;
        
        var eye = FILTER.Util.Filter.ct_eye, ct_mult = FILTER.Util.Filter.ct_multiply,
            i, T = this.table, R = T[CHANNEL.R] || eye( ), G, B, A;
        
        if ( tG || tB )
        {
            tG = tG || tR; tB = tB || tG;
            G = T[CHANNEL.G] || R; B = T[CHANNEL.B] || G;
            T[CHANNEL.R] = ct_mult( tR, R );
            T[CHANNEL.G] = ct_mult( tG, G );
            T[CHANNEL.B] = ct_mult( tB, B );
        }
        else
        {
            T[CHANNEL.R] = ct_mult( tR, R );
            T[CHANNEL.G] = T[CHANNEL.R];
            T[CHANNEL.B] = T[CHANNEL.R];
        }
        return this;
    }
    
    ,reset: function( ) {
        this.table = [null, null, null, null]; 
        return this;
    }
    
    ,combineWith: function( filt ) {
        return this.set(filt.getTable(CHANNEL.R), filt.getTable(CHANNEL.G), filt.getTable(CHANNEL.B));
    }
    
    ,getTable: function ( channel ) {
        return this.table[channel || CHANNEL.R] || null;
    }
    
    ,setTable: function ( table, channel ) {
        this.table[channel || CHANNEL.R] = table || null;
        return this;
    }
    
    // used for internal purposes
    ,_apply: function( im, w, h ) {
        //"use asm";
        var self = this, T = self.table;
        if ( !T || !T[CHANNEL.R] ) return im;
        
        var i, j, l=im.length, l2=l>>>2, rem=(l2&15)<<2, R = T[0], G = T[1], B = T[2], A = T[3];
        
        // apply filter (algorithm implemented directly based on filter definition)
        if ( A )
        {
            // array linearization
            for (i=0; i<rem; i+=4)
            {
                im[i   ] = R[im[i   ]]; im[i+1] = G[im[i+1]]; im[i+2] = B[im[i+2]]; im[i+3] = A[im[i+3]];
            }
            // partial loop unrolling (4 iterations)
            for (j=rem; j<l; j+=64)
            {
                i = j;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; im[i] = A[im[i++]];
            }
        }
        else
        {
            // array linearization
            for (i=0; i<rem; i+=4)
            {
                im[i   ] = R[im[i   ]]; im[i+1] = G[im[i+1]]; im[i+2] = B[im[i+2]];
            }
            // partial loop unrolling (4 iterations)
            for (j=rem; j<l; j+=64)
            {
                i = j;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
                im[i] = R[im[i++]]; im[i] = G[im[i++]]; im[i] = B[im[i++]]; ++i;
            }
        }
        return im;
    }
        
    ,canRun: function( ) {
        return this._isOn && this.table && this.table[CHANNEL.R];
    }
});
// aliases
ColorTableFilter.prototype.posterize = ColorTableFilter.prototype.levels = ColorTableFilter.prototype.quantize;
FILTER.TableLookupFilter = FILTER.ColorTableFilter;

}(FILTER);/**
*
* Color Matrix Filter(s)
*
* Changes target coloring combining current pixel color values according to Matrix
*
* (matrix is 4x5 array of values which are (eg for row 1: Red value): 
* New red Value=Multiplier for red value, multiplier for Green value, multiplier for Blue Value, Multiplier for Alpha Value,constant  bias term
* other rows are similar but for new Green, Blue and Alpha values respectively) 
*
* @param colorMatrix Optional (a color matrix as an array of values)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var CHANNEL = FILTER.CHANNEL, CM = FILTER.ColorMatrix, A8U = FILTER.Array8U,
    Sin = Math.sin, Cos = Math.cos, toRad = FILTER.CONST.toRad, toDeg = FILTER.CONST.toDeg,
    TypedArray = FILTER.Util.Array.typed, notSupportClamp = FILTER._notSupportClamp;

// ColorMatrixFilter
var ColorMatrixFilter = FILTER.Create({
    name: "ColorMatrixFilter"
    
    ,init: function ColorMatrixFilter( matrix ) {
        var self = this;
        self.matrix = matrix && matrix.length ? new CM(matrix) : null;
    }
    
    ,path: FILTER_FILTERS_PATH
    ,matrix: null
    
    ,dispose: function( ) {
        var self = this;
        self.matrix = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
            matrix: self.matrix
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.matrix = TypedArray( params.matrix, CM );
        return self;
    }
    
    // get the image color channel as a new image
    ,channel: function( channel, grayscale ) {
        channel = channel || 0;
        var m = [
            0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 
            0, 0, 0, 0, 255
        ], f = (CHANNEL.A === channel) || grayscale ? 1 : 0;
        m[CHANNEL.R*5+channel] = CHANNEL.R === channel ? 1 : f;
        m[CHANNEL.G*5+channel] = CHANNEL.G === channel ? 1 : f;
        m[CHANNEL.B*5+channel] = CHANNEL.B === channel ? 1 : f;
        return this.set(m);
    }
    
    // aliases
    // get the image red channel as a new image
    ,redChannel: function( grayscale ) {
        return this.channel(CHANNEL.R, grayscale);
    }
    
    // get the image green channel as a new image
    ,greenChannel: function( grayscale ) {
        return this.channel(CHANNEL.G, grayscale);
    }
    
    // get the image blue channel as a new image
    ,blueChannel: function( grayscale ) {
        return this.channel(CHANNEL.B, grayscale);
    }
    
    // get the image alpha channel as a new image
    ,alphaChannel: function( grayscale ) {
        return this.channel(CHANNEL.A, true);
    }
    
    ,maskChannel: function( channel ) {
        channel = channel || 0;
        if ( CHANNEL.A === channel ) return this;
        var m = [
            1, 0, 0, 0, 0, 
            0, 1, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 0, 1, 0
        ];
        m[channel*5+channel] = 0;
        return this.set(m);
    }
    
    ,swapChannels: function( channel1, channel2 ) {
        if ( channel1 === channel2 ) return this;
        var m = [
            1, 0, 0, 0, 0, 
            0, 1, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 0, 1, 0
        ];
        m[channel1*5+channel1] = 0;
        m[channel2*5+channel2] = 0;
        m[channel1*5+channel2] = 1;
        m[channel2*5+channel1] = 1;
        return this.set(m);
    }
    
    ,invertChannel: function( channel ) {
        channel = channel || 0;
        if ( CHANNEL.A === channel ) return this;
        var m = [
            1, 0, 0, 0, 0, 
            0, 1, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 0, 1, 0
        ];
        m[channel*5+channel] = -1;
        m[channel*5+4] = 255;
        return this.set(m);
    }
    
    ,invertRed: function( ) {
        return this.invertChannel(CHANNEL.R);
    }
    
    ,invertGreen: function( ) {
        return this.invertChannel(CHANNEL.G);
    }
    
    ,invertBlue: function( ) {
        return this.invertChannel(CHANNEL.B);
    }
    
    ,invertAlpha: function( ) {
        return this.invertChannel(CHANNEL.A);
    }
    
    // adapted from http://gskinner.com/blog/archives/2007/12/colormatrix_cla.html
    ,invert: function( ) {
        return this.set(FILTER.Util.Filter.cm_rechannel([
            -1, 0,  0, 0, 255,
            0, -1,  0, 0, 255,
            0,  0, -1, 0, 255,
            0,  0,  0, 1,   0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // adapted from http://gskinner.com/blog/archives/2007/12/colormatrix_cla.html
    ,desaturate: function( LUMA ) {
        var L = LUMA || FILTER.LUMA;
        return this.set(FILTER.Util.Filter.cm_rechannel([
            L[0], L[1], L[2], 0, 0, 
            L[0], L[1], L[2], 0, 0, 
            L[0], L[1], L[2], 0, 0, 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    ,grayscale: null
    
    // adapted from http://gskinner.com/blog/archives/2007/12/colormatrix_cla.html
    ,saturate: function( s, LUMA ) {
        var sInv, irlum, iglum, iblum, L = LUMA || FILTER.LUMA;
        sInv = 1 - s;  irlum = sInv * L[0];
        iglum = sInv * L[1];  iblum = sInv * L[2];
        return this.set(FILTER.Util.Filter.cm_rechannel([
            (irlum + s), iglum, iblum, 0, 0, 
            irlum, (iglum + s), iblum, 0, 0, 
            irlum, iglum, (iblum + s), 0, 0, 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // adapted from http://gskinner.com/blog/archives/2007/12/colormatrix_cla.html
    ,colorize: function( rgb, amount, LUMA ) {
        var r, g, b, inv_amount, L = LUMA || FILTER.LUMA;
        if ( null == amount ) amount = 1;
        r = ((rgb >> 16) & 255) / 255;
        g = ((rgb >> 8) & 255) / 255;
        b = (rgb & 255) / 255;
        inv_amount = 1 - amount;
        return this.set(FILTER.Util.Filter.cm_rechannel([
            (inv_amount + ((amount * r) * L[0])), ((amount * r) * L[1]), ((amount * r) * L[2]), 0, 0, 
            ((amount * g) * L[0]), (inv_amount + ((amount * g) * L[1])), ((amount * g) * L[2]), 0, 0, 
            ((amount * b) * L[0]), ((amount * b) * L[1]), (inv_amount + ((amount * b) * L[2])), 0, 0, 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // adapted from http://gskinner.com/blog/archives/2007/12/colormatrix_cla.html
    ,contrast: function( r, g, b ) {
        if ( null == g ) g = r;
        if ( null == b ) b = r;
        r += 1.0; g += 1.0; b += 1.0;
        return this.set(FILTER.Util.Filter.cm_rechannel([
            r, 0, 0, 0, (128 * (1 - r)), 
            0, g, 0, 0, (128 * (1 - g)), 
            0, 0, b, 0, (128 * (1 - b)), 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // adapted from http://gskinner.com/blog/archives/2007/12/colormatrix_cla.html
    ,brightness: function( r, g, b ) {
        if ( null == g ) g = r;
        if ( null == b ) b = r;
        return this.set(FILTER.Util.Filter.cm_rechannel([
            1, 0, 0, 0, r, 
            0, 1, 0, 0, g, 
            0, 0, 1, 0, b, 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // adapted from http://gskinner.com/blog/archives/2007/12/colormatrix_cla.html
    ,adjustHue: function( degrees, LUMA ) {
        degrees *= toRad;
        var cos = Cos(degrees), sin = Sin(degrees), L = LUMA || FILTER.LUMA;
        return this.set(FILTER.Util.Filter.cm_rechannel([
            ((L[0] + (cos * (1 - L[0]))) + (sin * -(L[0]))), ((L[1] + (cos * -(L[1]))) + (sin * -(L[1]))), ((L[2] + (cos * -(L[2]))) + (sin * (1 - L[2]))), 0, 0, 
            ((L[0] + (cos * -(L[0]))) + (sin * 0.143)), ((L[1] + (cos * (1 - L[1]))) + (sin * 0.14)), ((L[2] + (cos * -(L[2]))) + (sin * -0.283)), 0, 0, 
            ((L[0] + (cos * -(L[0]))) + (sin * -((1 - L[0])))), ((L[1] + (cos * -(L[1]))) + (sin * L[1])), ((L[2] + (cos * (1 - L[2]))) + (sin * L[2])), 0, 0, 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    ,rotateHue: null
    
    // adapted from http://gskinner.com/blog/archives/2007/12/colormatrix_cla.html
    ,average: function( r, g, b ) {
        if ( null == r ) r = 0.3333;
        if ( null == g ) g = 0.3333;
        if ( null == b ) b = 0.3333;
        return this.set(FILTER.Util.Filter.cm_rechannel([
            r, g, b, 0, 0, 
            r, g, b, 0, 0, 
            r, g, b, 0, 0, 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    ,quickContrastCorrection: function( contrast ) {
        if ( null == contrast ) contrast = 1.2;
        return this.set(FILTER.Util.Filter.cm_rechannel([
            contrast, 0, 0, 0, 0, 
            0, contrast, 0, 0, 0, 
            0, 0, contrast, 0, 0, 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // adapted from glfx.js
    // Gives the image a reddish-brown monochrome tint that imitates an old photograph.
    // 0 to 1 (0 for no effect, 1 for full sepia coloring)
    ,sepia: function( amount ) {
        if ( null == amount ) amount = 0.5;
        if ( amount > 1 ) amount = 1;
        else if ( amount < 0 ) amount = 0;
        return this.set(FILTER.Util.Filter.cm_rechannel([
            1.0 - (0.607 * amount), 0.769 * amount, 0.189 * amount, 0, 0, 
            0.349 * amount, 1.0 - (0.314 * amount), 0.168 * amount, 0, 0, 
            0.272 * amount, 0.534 * amount, 1.0 - (0.869 * amount), 0, 0, 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    ,sepia2: function( amount, LUMA ) {
        if ( null == amount ) amount = 10;
        if ( amount > 100 ) amount = 100;
        amount *= 2.55;
        var L = LUMA || FILTER.LUMA;
        return this.set(FILTER.Util.Filter.cm_rechannel([
            L[0], L[1], L[2], 0, 40, 
            L[0], L[1], L[2], 0, 20, 
            L[0], L[1], L[2], 0, -amount, 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // adapted from http://gskinner.com/blog/archives/2007/12/colormatrix_cla.html
    ,threshold: function( threshold, factor, LUMA ) {
        if ( null == factor ) factor = 256;
        var L = LUMA || FILTER.LUMA;
        return this.set(FILTER.Util.Filter.cm_rechannel(false !== LUMA
        ? [
            L[0] * factor, L[1] * factor, L[2] * factor, 0, (-(factor-1) * threshold), 
            L[0] * factor, L[1] * factor, L[2] * factor, 0, (-(factor-1) * threshold), 
            L[0] * factor, L[1] * factor, L[2] * factor, 0, (-(factor-1) * threshold), 
            0, 0, 0, 1, 0
        ]
        : [
            factor, 0, 0, 0, (-(factor-1) * threshold), 
            0, factor, 0, 0, (-(factor-1) * threshold), 
            0,  0, factor, 0, (-(factor-1) * threshold), 
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    ,thresholdRGB: function( threshold, factor ) {
        return this.threshold(threshold, factor, false);
    }
    ,threshold_rgb: null
    
    ,thresholdChannel: function( channel, threshold, factor, LUMA ) {
        if ( null == factor ) factor = 256;
        var m = [
            1, 0, 0, 0, 0, 
            0, 1, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 0, 1, 0
        ], L = LUMA || FILTER.LUMA;
        if ( CHANNEL.A === channel )
        {
            m[channel*5+channel] = factor;
            m[channel*5+4] = -factor * threshold;
        }
        else if ( false !== LUMA )
        {
            m[channel*5+CHANNEL.R] = L[0] * factor;
            m[channel*5+CHANNEL.G] = L[1] * factor;
            m[channel*5+CHANNEL.B] = L[2] * factor;
            m[channel*5+4] = -(factor-1) * threshold;
        }
        else
        {
            m[channel*5+CHANNEL.R] = factor;
            m[channel*5+CHANNEL.G] = factor;
            m[channel*5+CHANNEL.B] = factor;
            m[channel*5+4] = -(factor-1) * threshold;
        }
        return this.set(m);
    }
    
    ,thresholdRed: function( threshold, factor, lumia ) {
        return this.thresholdChannel(CHANNEL.R, threshold, factor, lumia);
    }
    
    ,thresholdGreen: function( threshold, factor, lumia ) {
        return this.thresholdChannel(CHANNEL.G, threshold, factor, lumia);
    }
    
    ,thresholdBlue: function( threshold, factor, lumia ) {
        return this.thresholdChannel(CHANNEL.B, threshold, factor, lumia);
    }
    
    ,thresholdAlpha: function( threshold, factor, lumia ) {
        return this.thresholdChannel(CHANNEL.A, threshold, factor, lumia);
    }
    ,threshold_alpha: null
    
    // RGB to XYZ
    ,RGB2XYZ: function( ) {
        return this.set(FILTER.Util.Filter.cm_rechannel([
            0.412453, 0.357580, 0.180423, 0, 0,
            0.212671, 0.715160, 0.072169, 0, 0,
            0.019334, 0.119193, 0.950227, 0, 0,
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.XX, CHANNEL.YY, CHANNEL.ZZ, CHANNEL.A
        ));
    }
    
    // XYZ to RGB
    ,XYZ2RGB: function( ) {
        return this.set(FILTER.Util.Filter.cm_rechannel([
            3.240479, -1.537150, -0.498535, 0, 0,
            -0.969256, 1.875992, 0.041556, 0, 0,
            0.055648, -0.204043, 1.057311, 0, 0,
            0, 0, 0, 1, 0
        ],
            CHANNEL.XX, CHANNEL.YY, CHANNEL.ZZ, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // RGB to YCbCr
    ,RGB2YCbCr: function( ) {
        return this.set(FILTER.Util.Filter.cm_rechannel([
            0.299, 0.587, 0.114, 0, 0,
            -0.168736, -0.331264, 0.5, 0, 128,
            0.5, -0.418688, -0.081312, 0, 128,
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.Y, CHANNEL.CB, CHANNEL.CR, CHANNEL.A
        ));
    }
    
    // YCbCr to RGB
    ,YCbCr2RGB: function( ) {
        return this.set(FILTER.Util.Filter.cm_rechannel([
            1, 0, 1.402, 0, -179.456,
            1, -0.34414, -0.71414, 0, 135.45984,
            1, 1.772, 0, 0, -226.816,
            0, 0, 0, 1, 0
        ],
            CHANNEL.Y, CHANNEL.CB, CHANNEL.CR, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // RGB to YIQ
    ,RGB2YIQ: function( ) {
        return this.set(FILTER.Util.Filter.cm_rechannel([
            0.299, 0.587, 0.114, 0, 0,
            0.701, -0.587, -0.114, 0, 0,
            -0.299, -0.587, 0.886, 0, 0,
            0, 0, 0, 1, 0
        ],
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A,
            CHANNEL.Y, CHANNEL.IP, CHANNEL.Q, CHANNEL.A
        ));
    }
    
    // YIQ to RGB
    ,YIQ2RGB: function( ) {
        return this.set(FILTER.Util.Filter.cm_rechannel([
            1, 1, 0, 0, 0,
            1, -0.509, -0.194, 0, 0,
            1, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ],
            CHANNEL.Y, CHANNEL.IP, CHANNEL.Q, CHANNEL.A,
            CHANNEL.R, CHANNEL.G, CHANNEL.B, CHANNEL.A
        ));
    }
    
    // blend with another filter
    ,blend: function( filt, amount ) {
        var self = this;
        self.matrix = self.matrix ? FILTER.Util.Filter.cm_combine(self.matrix, filt.matrix, 1-amount, amount, CM) : new CM(filt.matrix);
        return self;
    }
    
    ,set: function( matrix ) {
        var self = this;
        self.matrix = self.matrix ? FILTER.Util.Filter.cm_multiply(self.matrix, matrix) : new CM(matrix); 
        return self;
    }
    
    ,reset: function( ) {
        this.matrix = null; 
        return this;
    }
    
    ,combineWith: function( filt ) {
        return this.set( filt.matrix );
    }
    
    // used for internal purposes
    ,_apply: notSupportClamp ? function( im, w, h ) {
        //"use asm";
        var self = this, M = self.matrix;
        if ( !M ) return im;
        
        var imLen = im.length, i, imArea = imLen>>>2, rem = (imArea&7)<<2,
            p = new CM(32), t = new A8U(4), pr = new CM(4);

        // apply filter (algorithm implemented directly based on filter definition, with some optimizations)
        // linearize array
        for (i=0; i<rem; i+=4)
        {
            t[0]   =  im[i]; t[1] = im[i+1]; t[2] = im[i+2]; t[3] = im[i+3];
            pr[0]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4];
            pr[1]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9];
            pr[2]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            pr[3]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];
            
            // clamp them manually
            pr[0] = pr[0]<0 ? 0 : (pr[0]>255 ? 255 : pr[0]);
            pr[1] = pr[1]<0 ? 0 : (pr[1]>255 ? 255 : pr[1]);
            pr[2] = pr[2]<0 ? 0 : (pr[2]>255 ? 255 : pr[2]);
            pr[3] = pr[3]<0 ? 0 : (pr[3]>255 ? 255 : pr[3]);
            
            im[i  ] = pr[0]|0; im[i+1] = pr[1]|0; im[i+2] = pr[2]|0; im[i+3] = pr[3]|0;
        }
        // partial loop unrolling (1/8 iterations)
        for (i=rem; i<imLen; i+=32)
        {
            t[0]   =  im[i  ]; t[1] = im[i+1]; t[2] = im[i+2]; t[3] = im[i+3];
            p[0 ]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[1 ]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[2 ]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[3 ]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+4]; t[1] = im[i+5]; t[2] = im[i+6]; t[3] = im[i+7];
            p[4 ]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[5 ]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[6 ]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[7 ]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+8]; t[1] = im[i+9]; t[2] = im[i+10]; t[3] = im[i+11];
            p[8 ]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[9 ]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[10]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[11]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+12]; t[1] = im[i+13]; t[2] = im[i+14]; t[3] = im[i+15];
            p[12]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[13]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[14]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[15]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];
            
            t[0]   =  im[i+16]; t[1] = im[i+17]; t[2] = im[i+18]; t[3] = im[i+19];
            p[16]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[17]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[18]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[19]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+20]; t[1] = im[i+21]; t[2] = im[i+22]; t[3] = im[i+23];
            p[20]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[21]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[22]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[23]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+24]; t[1] = im[i+25]; t[2] = im[i+26]; t[3] = im[i+27];
            p[24]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[25]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[26]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[27]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+28]; t[1] = im[i+29]; t[2] = im[i+30]; t[3] = im[i+31];
            p[28]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[29]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[30]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[31]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];
            
            // clamp them manually
            p[0 ] = p[0 ]<0 ? 0 : (p[0 ]>255 ? 255 : p[0 ]);
            p[1 ] = p[1 ]<0 ? 0 : (p[1 ]>255 ? 255 : p[1 ]);
            p[2 ] = p[2 ]<0 ? 0 : (p[2 ]>255 ? 255 : p[2 ]);
            p[3 ] = p[3 ]<0 ? 0 : (p[3 ]>255 ? 255 : p[3 ]);
            p[4 ] = p[4 ]<0 ? 0 : (p[4 ]>255 ? 255 : p[4 ]);
            p[5 ] = p[5 ]<0 ? 0 : (p[5 ]>255 ? 255 : p[5 ]);
            p[6 ] = p[6 ]<0 ? 0 : (p[6 ]>255 ? 255 : p[6 ]);
            p[7 ] = p[7 ]<0 ? 0 : (p[7 ]>255 ? 255 : p[7 ]);
            p[8 ] = p[8 ]<0 ? 0 : (p[8 ]>255 ? 255 : p[8 ]);
            p[9 ] = p[9 ]<0 ? 0 : (p[9 ]>255 ? 255 : p[9 ]);
            p[10] = p[10]<0 ? 0 : (p[10]>255 ? 255 : p[10]);
            p[11] = p[11]<0 ? 0 : (p[11]>255 ? 255 : p[11]);
            p[12] = p[12]<0 ? 0 : (p[12]>255 ? 255 : p[12]);
            p[13] = p[13]<0 ? 0 : (p[13]>255 ? 255 : p[13]);
            p[14] = p[14]<0 ? 0 : (p[14]>255 ? 255 : p[14]);
            p[15] = p[15]<0 ? 0 : (p[15]>255 ? 255 : p[15]);
            p[16] = p[16]<0 ? 0 : (p[16]>255 ? 255 : p[16]);
            p[17] = p[17]<0 ? 0 : (p[17]>255 ? 255 : p[17]);
            p[18] = p[18]<0 ? 0 : (p[18]>255 ? 255 : p[18]);
            p[19] = p[19]<0 ? 0 : (p[19]>255 ? 255 : p[19]);
            p[20] = p[20]<0 ? 0 : (p[20]>255 ? 255 : p[20]);
            p[21] = p[21]<0 ? 0 : (p[21]>255 ? 255 : p[21]);
            p[22] = p[22]<0 ? 0 : (p[22]>255 ? 255 : p[22]);
            p[23] = p[23]<0 ? 0 : (p[23]>255 ? 255 : p[23]);
            p[24] = p[24]<0 ? 0 : (p[24]>255 ? 255 : p[24]);
            p[25] = p[25]<0 ? 0 : (p[25]>255 ? 255 : p[25]);
            p[26] = p[26]<0 ? 0 : (p[26]>255 ? 255 : p[26]);
            p[27] = p[27]<0 ? 0 : (p[27]>255 ? 255 : p[27]);
            p[28] = p[28]<0 ? 0 : (p[28]>255 ? 255 : p[28]);
            p[29] = p[29]<0 ? 0 : (p[29]>255 ? 255 : p[29]);
            p[30] = p[30]<0 ? 0 : (p[30]>255 ? 255 : p[30]);
            p[31] = p[31]<0 ? 0 : (p[31]>255 ? 255 : p[31]);
            
            im[i   ] = p[0 ]|0; im[i+1 ] = p[1 ]|0; im[i+2 ] = p[2 ]|0; im[i+3 ] = p[3 ]|0;
            im[i+4 ] = p[4 ]|0; im[i+5 ] = p[5 ]|0; im[i+6 ] = p[6 ]|0; im[i+7 ] = p[7 ]|0;
            im[i+8 ] = p[8 ]|0; im[i+9 ] = p[9 ]|0; im[i+10] = p[10]|0; im[i+11] = p[11]|0;
            im[i+12] = p[12]|0; im[i+13] = p[13]|0; im[i+14] = p[14]|0; im[i+15] = p[15]|0;
            im[i+16] = p[16]|0; im[i+17] = p[17]|0; im[i+18] = p[18]|0; im[i+19] = p[19]|0;
            im[i+20] = p[20]|0; im[i+21] = p[21]|0; im[i+22] = p[22]|0; im[i+23] = p[23]|0;
            im[i+24] = p[24]|0; im[i+25] = p[25]|0; im[i+26] = p[26]|0; im[i+27] = p[27]|0;
            im[i+28] = p[28]|0; im[i+29] = p[29]|0; im[i+30] = p[30]|0; im[i+31] = p[31]|0;
        }
        return im;
    } : function( im, w, h ) {
        //"use asm";
        var self = this, M = self.matrix;
        if ( !M ) return im;
        
        var imLen = im.length, i, imArea = imLen>>>2, rem = (imArea&7)<<2,
            p = new CM(32), t = new A8U(4), pr = new CM(4);

        // apply filter (algorithm implemented directly based on filter definition, with some optimizations)
        // linearize array
        for (i=0; i<rem; i+=4)
        {
            t[0]   =  im[i]; t[1] = im[i+1]; t[2] = im[i+2]; t[3] = im[i+3];
            pr[0]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4];
            pr[1]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9];
            pr[2]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            pr[3]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];
            
            im[i  ] = pr[0]|0; im[i+1] = pr[1]|0; im[i+2] = pr[2]|0; im[i+3] = pr[3]|0;
        }
        // partial loop unrolling (1/8 iterations)
        for (i=rem; i<imLen; i+=32)
        {
            t[0]   =  im[i  ]; t[1] = im[i+1]; t[2] = im[i+2]; t[3] = im[i+3];
            p[0 ]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[1 ]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[2 ]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[3 ]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+4]; t[1] = im[i+5]; t[2] = im[i+6]; t[3] = im[i+7];
            p[4 ]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[5 ]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[6 ]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[7 ]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+8]; t[1] = im[i+9]; t[2] = im[i+10]; t[3] = im[i+11];
            p[8 ]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[9 ]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[10]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[11]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+12]; t[1] = im[i+13]; t[2] = im[i+14]; t[3] = im[i+15];
            p[12]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[13]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[14]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[15]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];
            
            t[0]   =  im[i+16]; t[1] = im[i+17]; t[2] = im[i+18]; t[3] = im[i+19];
            p[16]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[17]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[18]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[19]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+20]; t[1] = im[i+21]; t[2] = im[i+22]; t[3] = im[i+23];
            p[20]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[21]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[22]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[23]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+24]; t[1] = im[i+25]; t[2] = im[i+26]; t[3] = im[i+27];
            p[24]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[25]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[26]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[27]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];

            t[0]   =  im[i+28]; t[1] = im[i+29]; t[2] = im[i+30]; t[3] = im[i+31];
            p[28]  =  M[0 ]*t[0] +  M[1 ]*t[1] +  M[2 ]*t[2] +  M[3 ]*t[3] +  M[4 ];
            p[29]  =  M[5 ]*t[0] +  M[6 ]*t[1] +  M[7 ]*t[2] +  M[8 ]*t[3] +  M[9 ];
            p[30]  =  M[10]*t[0] +  M[11]*t[1] +  M[12]*t[2] +  M[13]*t[3] +  M[14];
            p[31]  =  M[15]*t[0] +  M[16]*t[1] +  M[17]*t[2] +  M[18]*t[3] +  M[19];
            
            im[i   ] = p[0 ]|0; im[i+1 ] = p[1 ]|0; im[i+2 ] = p[2 ]|0; im[i+3 ] = p[3 ]|0;
            im[i+4 ] = p[4 ]|0; im[i+5 ] = p[5 ]|0; im[i+6 ] = p[6 ]|0; im[i+7 ] = p[7 ]|0;
            im[i+8 ] = p[8 ]|0; im[i+9 ] = p[9 ]|0; im[i+10] = p[10]|0; im[i+11] = p[11]|0;
            im[i+12] = p[12]|0; im[i+13] = p[13]|0; im[i+14] = p[14]|0; im[i+15] = p[15]|0;
            im[i+16] = p[16]|0; im[i+17] = p[17]|0; im[i+18] = p[18]|0; im[i+19] = p[19]|0;
            im[i+20] = p[20]|0; im[i+21] = p[21]|0; im[i+22] = p[22]|0; im[i+23] = p[23]|0;
            im[i+24] = p[24]|0; im[i+25] = p[25]|0; im[i+26] = p[26]|0; im[i+27] = p[27]|0;
            im[i+28] = p[28]|0; im[i+29] = p[29]|0; im[i+30] = p[30]|0; im[i+31] = p[31]|0;
        }
        return im;
    }
        
    ,canRun: function( ) {
        return this._isOn && this.matrix;
    }
});
// aliases
ColorMatrixFilter.prototype.grayscale = ColorMatrixFilter.prototype.desaturate;
ColorMatrixFilter.prototype.rotateHue = ColorMatrixFilter.prototype.adjustHue;
ColorMatrixFilter.prototype.threshold_rgb = ColorMatrixFilter.prototype.thresholdRGB;
ColorMatrixFilter.prototype.threshold_alpha = ColorMatrixFilter.prototype.thresholdAlpha;

}(FILTER);/**
*
* Color Map Filter(s)
*
* Changes target coloring combining current pixel color values according to non-linear color map
*
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var MAP, CHANNEL = FILTER.CHANNEL, MODE = FILTER.MODE, Color = FILTER.Color, CM = FILTER.ColorMatrix,
    TypedArray = FILTER.Util.Array.typed, notSupportClamp = FILTER._notSupportClamp, function_body = FILTER.Util.String.function_body;

// ColorMapFilter
var ColorMapFilter = FILTER.Create({
    name: "ColorMapFilter"
    
    ,init: function ColorMapFilter( M, init ) {
        var self = this;
        if ( M ) self.set( M, init );
    }
    
    ,path: FILTER_FILTERS_PATH
    ,_map: null
    ,_mapInit: null
    ,_mapName: null
    ,_mapChanged: false
    // parameters
    ,thresholds: null
    // NOTE: quantizedColors should contain 1 more element than thresholds
    ,quantizedColors: null
    ,mode: MODE.COLOR
    
    ,dispose: function( ) {
        var self = this;
        self._map = null;
        self._mapInit = null;
        self._mapName = null;
        self._mapChanged = null;
        self.thresholds = null;
        self.quantizedColors = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this, json;
        json = {
            _mapName: self._mapName || null
            ,_map: ("generic" === self._mapName) && self._map && self._mapChanged ? self._map.toString( ) : null
            ,_mapInit: ("generic" === self._mapName) && self._mapInit && self._mapChanged ? self._mapInit.toString( ) : null
            ,thresholds: self.thresholds
            ,quantizedColors: self.quantizedColors
        };
        self._mapChanged = false;
        return json;
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.thresholds = TypedArray( params.thresholds, Array );
        self.quantizedColors = TypedArray( params.quantizedColors, Array );
        
        //self._mapName = params._mapName;
        //self._map = params._map;
        if ( !params._map && params._mapName && MAP.hasOwnProperty(params._mapName) )
        {
            self.set(params._mapName);
        }
        else if ( params._map && ("generic" === params._mapName) )
        {
            // using bind makes the code become [native code] and thus unserializable
            /*self._map = new Function("FILTER", '"use strict"; return ' + params._map)( FILTER );
            if ( params._mapInit )
                self._mapInit = new Function("FILTER", '"use strict"; return ' + params._mapInit)( FILTER );*/
            self.set(params._map, params._mapInit||null);
        }
        /*else
        {
            self._map = null;
        }*/
        return self;
    }
    
    ,RGB2HSV: function( ) {
        return this.set("rgb2hsv");
    }
    
    ,HSV2RGB: function( ) {
        return this.set("hsv2rgb");
    }
    
    ,RGB2CMYK: function( ) {
        return this.set("rgb2cmyk");
    }
    
    ,RGB2ILL: function( ) {
        return this.set("rgb2ill");
    }
    
    ,hue: function( ) {
        return this.set("hue");
    }
    
    ,saturation: function( ) {
        return this.set("saturation");
    }
    
    ,quantize: function( thresholds, quantizedColors ) {
        var self = this;
        self.thresholds = thresholds;
        self.quantizedColors = quantizedColors;
        return self.set("quantize");
    }
    ,threshold: null
    
    ,mask: function( min, max, background ) {
        var self = this;
        self.thresholds = [min, max];
        self.quantizedColors = [background || 0];
        return self.set("mask");
    }
    ,extract: null
    
    ,set: function( M, preample ) {
        var self = this;
        if ( M && MAP.hasOwnProperty(String(M)) )
        {
            if ( self._mapName !== String(M) )
            {
                self._mapName = String(M);
                self._map = MAP[self._mapName];
                self._mapInit = MAP["init__"+self._mapName];
                self._apply = apply__( self._map, self._mapInit );
            }
            self._mapChanged = false;
        }
        else if ( M )
        {
            self._mapName = "generic"; 
            self._map = T;
            self._mapInit = preample || null;
            self._apply = apply__( self._map, self._mapInit );
            self._mapChanged = true;
        }
        return self;
    }
    
    ,reset: function( ) {
        var self = this;
        self._mapName = null; 
        self._map = null; 
        self._mapInit = null; 
        self._mapChanged = false;
        return self;
    }
    
    // used for internal purposes
    /*,_apply: apply*/
        
    ,canRun: function( ) {
        return this._isOn && this._map;
    }
});
// aliases
ColorMapFilter.prototype.threshold = ColorMapFilter.prototype.quantize;
ColorMapFilter.prototype.extract = ColorMapFilter.prototype.mask;

function apply__( map, preample )
{
    var __INIT__ = preample ? function_body(preample) : '', __APPLY__ = function_body(map),
        __CLAMP__ = notSupportClamp ? "c[0] = 0>c[0] ? 0 : (255<c[0] ? 255: c[0]); c[1] = 0>c[1] ? 0 : (255<c[1] ? 255: c[1]); c[2] = 0>c[2] ? 0 : (255<c[2] ? 255: c[2]); c[3] = 0>c[3] ? 0 : (255<c[3] ? 255: c[3]);" : '';
        //"use asm";
    return new Function("FILTER", "\"use strict\"; return function( im, w, h ){\
    var self = this;\
    if ( !self._map ) return im;\
    var x, y, i, i0, imLen = im.length, imArea = imLen>>>2, rem = (imArea&7)<<2, c = new FILTER.ColorMatrix(4);\
\
    "+__INIT__+";\
    \
    x=0;y=0;\
    for(i=0; i<rem; i+=4)\
    {\
        c[0] = im[i]; c[1] = im[i+1]; c[2] = im[i+2]; c[3] = im[i+3];\
        "+__APPLY__+";\
        "+__CLAMP__+";\
        im[i] = c[0]|0; im[i+1] = c[1]|0; im[i+2] = c[2]|0; im[i+3] = c[3]|0;\
        if (++x>=w) {x=0; y++;}\
    }\
    for(i0=rem; i0<imLen; i0+=32)\
    {\
        i=i0; c[0] = im[i]; c[1] = im[i+1]; c[2] = im[i+2]; c[3] = im[i+3];\
        "+__APPLY__+";\
        "+__CLAMP__+";\
        im[i] = c[0]|0; im[i+1] = c[1]|0; im[i+2] = c[2]|0; im[i+3] = c[3]|0;\
        \
        if (++x>=w) {x=0; y++;}\
        i+=4; c[0] = im[i]; c[1] = im[i+1]; c[2] = im[i+2]; c[3] = im[i+3];\
        "+__APPLY__+";\
        "+__CLAMP__+";\
        im[i] = c[0]|0; im[i+1] = c[1]|0; im[i+2] = c[2]|0; im[i+3] = c[3]|0;\
        \
        if (++x>=w) {x=0; y++;}\
        i+=4; c[0] = im[i]; c[1] = im[i+1]; c[2] = im[i+2]; c[3] = im[i+3];\
        "+__APPLY__+";\
        "+__CLAMP__+";\
        im[i] = c[0]|0; im[i+1] = c[1]|0; im[i+2] = c[2]|0; im[i+3] = c[3]|0;\
        \
        if (++x>=w) {x=0; y++;}\
        i+=4; c[0] = im[i]; c[1] = im[i+1]; c[2] = im[i+2]; c[3] = im[i+3];\
        "+__APPLY__+";\
        "+__CLAMP__+";\
        im[i] = c[0]|0; im[i+1] = c[1]|0; im[i+2] = c[2]|0; im[i+3] = c[3]|0;\
        \
        if (++x>=w) {x=0; y++;}\
        i+=4; c[0] = im[i]; c[1] = im[i+1]; c[2] = im[i+2]; c[3] = im[i+3];\
        "+__APPLY__+";\
        "+__CLAMP__+";\
        im[i] = c[0]|0; im[i+1] = c[1]|0; im[i+2] = c[2]|0; im[i+3] = c[3]|0;\
        \
        if (++x>=w) {x=0; y++;}\
        i+=4; c[0] = im[i]; c[1] = im[i+1]; c[2] = im[i+2]; c[3] = im[i+3];\
        "+__APPLY__+";\
        "+__CLAMP__+";\
        im[i] = c[0]|0; im[i+1] = c[1]|0; im[i+2] = c[2]|0; im[i+3] = c[3]|0;\
        \
        if (++x>=w) {x=0; y++;}\
        i+=4; c[0] = im[i]; c[1] = im[i+1]; c[2] = im[i+2]; c[3] = im[i+3];\
        "+__APPLY__+";\
        "+__CLAMP__+";\
        im[i] = c[0]|0; im[i+1] = c[1]|0; im[i+2] = c[2]|0; im[i+3] = c[3]|0;\
        \
        if (++x>=w) {x=0; y++;}\
        i+=4; c[0] = im[i]; c[1] = im[i+1]; c[2] = im[i+2]; c[3] = im[i+3];\
        "+__APPLY__+";\
        "+__CLAMP__+";\
        im[i] = c[0]|0; im[i+1] = c[1]|0; im[i+2] = c[2]|0; im[i+3] = c[3]|0;\
        \
        if (++x>=w) {x=0; y++;}\
    }\
    return im;\
};")( FILTER );
}


//
// private color maps
MAP = {
    
    "rgb2hsv": "function( ){\
        if ( 0 !== c[3] )\
        {\
            RGB2HSV(c, 0);\
            C0 = c[0]; C1 = c[1]; C2 = c[2];\
            c[CH] = C0; c[CS] = C1; c[CV] = C2;\
        }\
    }"
    ,"init__rgb2hsv": "function( ){\
        var C0, C1, C2, CH = FILTER.CHANNEL.H, CS = FILTER.CHANNEL.S, CV = FILTER.CHANNEL.V, RGB2HSV = FILTER.Color.RGB2HSV;\
    }"
    
    ,"hsv2rgb": "function( ){\
        if ( 0 !== c[3] )\
        {\
            C0 = c[CH]; C1 = c[CS]; C2 = c[CV];\
            c[0] = C0; c[1] = C1; c[2] = C2;\
            HSV2RGB(c, 0);\
        }\
    }"
    ,"init__hsv2rgb": "function( ){\
        var C0, C1, C2, CH = FILTER.CHANNEL.H, CS = FILTER.CHANNEL.S, CV = FILTER.CHANNEL.V, HSV2RGB = FILTER.Color.HSV2RGB;\
    }"
    
    ,"rgb2cmyk": "function( ){\
        if ( 0 !== c[3] )\
        {\
            RGB2CMYK(c, 0);\
            C0 = c[0]; C1 = c[1]; C2 = c[2];\
            c[CY] = C0; c[MA] = C1; c[YE] = C2;\
        }\
    }"
    ,"init__rgb2cmyk": "function( ){\
        var C0, C1, C2, CY = FILTER.CHANNEL.CY, MA = FILTER.CHANNEL.MA, YE = FILTER.CHANNEL.YE, RGB2CMYK = FILTER.Color.RGB2CMYK;\
    }"
    
    ,"rgb2ill": "function( ){\
        if ( 0 !== c[3] )\
        {\
            RGB2ILL(c, 0);\
            C0 = c[0]; C1 = c[1]; C2 = c[2];\
            c[ILL1] = min(255, max(0, 255-127*C0)); c[ILL2] = min(255, max(0, 255-127*C1)); c[ILL3] = min(255, max(0, 255-127*C2));\
        }\
    }"
    ,"init__rgb2ill": "function( ){\
        var C0, C1, C2, ILL1 = FILTER.CHANNEL.ILL1, ILL2 = FILTER.CHANNEL.ILL2, ILL3 = FILTER.CHANNEL.ILL3, RGB2ILL = FILTER.Color.RGB2ILL, min = Math.min, max = Math.max;\
    }"
    
    ,"hue": "function( ){\
        if ( 0 !== c[3] )\
        {\
            HHH = HUE(c[0], c[1], c[2])*0.70833333333333333333333333333333;\
            c[0] = HHH; c[1] = HHH; c[2] = HHH;\
        }\
    }"
    ,"init__hue": "function( ){\
        var HUE = FILTER.Color.hue, HHH;\
    }"
    
    ,"saturation": "function( ){\
        if ( 0 !== c[3] )\
        {\
            SSS = SATURATION(c[0], c[1], c[2]);\
            c[0] = SSS; c[1] = SSS; c[2] = SSS;\
        }\
    }"
    ,"init__saturation": "function( ){\
        var SATURATION = FILTER.Color.saturation, SSS;\
    }"
    
    ,"quantize": "function( ){\
        if ( 0 !== c[3] )\
        {\
            J = 0; V = VALUE(c[0], c[1], c[2]);\
            while (J<THRESH_LEN && V>THRESH[J]) J++;\
            COLVAL = J < COLORS_LEN ? COLORS[j] : 0xffffff;\
            c[0] = (COLVAL >>> 16) & 255; c[1] = (COLVAL >>> 8) & 255; c[2] = COLVAL & 255;\
        }\
    }"
    ,"init__quantize": "function( ){\
        var VALUE = FILTER.MODE.HUE === self.mode ? FILTER.Color.hue : (FILTER.MODE.SATURATION === self.mode ? FILTER.Color.saturation : (FILTER.MODE.INTENSITY === self.mode ? FILTER.Color.intensity : FILTER.Color.color24)),\
            THRESH = self.thresholds, THRESH_LEN = THRESH.length,\
            COLORS = self.quantizedColors, COLORS_LEN = COLORS.length, J, COLVAL, V;\
    }"
    
    ,"mask": "function( ){\
        if ( 0 !== c[3] )\
        {\
            V = VALUE(c[0], c[1], c[2]);\
            if ( (V < MIN_VALUE) || (V > MAX_VALUE) )\
            {\
                c[0] = COLVAL[0];\
                c[1] = COLVAL[1];\
                c[2] = COLVAL[2];\
                c[3] = COLVAL[3];\
            }\
        }\
    }"
    ,"init__mask": "function( ){\
        var VALUE = FILTER.MODE.HUE === self.mode ? FILTER.Color.hue : (FILTER.MODE.SATURATION === self.mode ? FILTER.Color.saturation : (FILTER.MODE.INTENSITY === self.mode ? FILTER.Color.intensity : FILTER.Color.color24)),\
            MIN_VALUE = self.thresholds[0], MAX_VALUE = self.thresholds[self.thresholds.length-1],\
            COLVAL = [(self.quantizedColors[0] >>> 16) & 255, (self.quantizedColors[0] >>> 8) & 255, self.quantizedColors[0] & 255, (self.quantizedColors[0] >>> 24) & 255], V;\
    }"
};

}(FILTER);/**
*
* Affine Matrix Filter
*
* Distorts the target image according to an linear affine matrix mapping function
*
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var IMG = FILTER.ImArray, AM = FILTER.AffineMatrix, TypedArray = FILTER.Util.Array.typed,
    MODE = FILTER.MODE, toRad = FILTER.CONST.toRad, Sin = Math.sin, Cos = Math.cos, Tan = Math.tan;

// AffineMatrixFilter
var AffineMatrixFilter = FILTER.Create({
    name: "AffineMatrixFilter"
    
    ,init: function AffineMatrixFilter( matrix ) {
        var self = this;
        self.matrix = matrix && matrix.length ? new AM(matrix) : null;
    }
    
    ,path: FILTER_FILTERS_PATH
    // parameters
    ,matrix: null
    ,mode: MODE.CLAMP
    ,color: 0
    
    ,dispose: function( ) {
        var self = this;
        self.matrix = null;
        self.color = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             matrix: self.matrix
            ,color: self.color
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.matrix = TypedArray( params.matrix, AM );
        self.color = params.color;
        return self;
    }
    
    ,flipX: function( ) {
        return this.set([
            -1, 0, 0, 1,
            0, 1, 0, 0
        ]);
    }
    
    ,flipY: function( ) {
        return this.set([
            1, 0, 0, 0,
            0, -1, 0, 1
        ]);
    }
    
    ,flipXY: function( ) {
        return this.set([
            -1, 0, 0, 1,
            0, -1, 0, 1
        ]);
    }
    
    ,translate: function( tx, ty, rel ) {
        return this.set(rel
        ? [
            1, 0, 0, tx,
            0, 1, 0, ty
        ]
        : [
            1, 0, tx, 0,
            0, 1, ty, 0
        ]);
    }
    ,shift: null
    
    ,rotate: function( theta ) {
        var s = Sin(theta), c = Cos(theta);
        return this.set([
            c, -s, 0, 0,
            s, c, 0, 0
        ]);
    }
    
    ,scale: function( sx, sy ) {
        return this.set([
            sx, 0, 0, 0,
            0, sy, 0, 0
        ]);
    }
    
    ,skew: function( thetax, thetay ) {
        return this.set([
            1, thetax ? Tan(thetax) : 0, 0, 0,
            thetay ? Tan(thetay) : 0, 1, 0, 0
        ]);
    }
    
    ,set: function( matrix ) {
        var self = this;
        self.matrix = self.matrix ? FILTER.Util.Filter.am_multiply(self.matrix, matrix) : new AM(matrix); 
        return self;
    }
    
    ,reset: function( ) {
        this.matrix = null; 
        return this;
    }
    
    ,combineWith: function( filt ) {
        return this.set( filt.matrix );
    }
    
    // used for internal purposes
    ,_apply: function( im, w, h ) {
        //"use asm";
        var self = this, T = self.matrix;
        if ( !T ) return im;
        var x, y, yw, nx, ny, i, j, imLen = im.length,
            imArea = imLen>>>2, bx = w-1, by = imArea-w,
            dst = new IMG(imLen), color = self.color||0, r, g, b, a,
            COLOR = MODE.COLOR, CLAMP = MODE.CLAMP, WRAP = MODE.WRAP, IGNORE = MODE.IGNORE,
            Ta = T[0], Tb = T[1], Tx = T[2]+T[3]*bx,
            Tcw = T[4]*w, Td = T[5], Tyw = T[6]*w+T[7]*by,
            mode = self.mode || IGNORE
        ;
        
        if ( COLOR === mode )
        {
            a = (color >>> 24)&255;
            r = (color >>> 16)&255;
            g = (color >>> 8)&255;
            b = (color)&255;
            
            for (x=0,y=0,yw=0,i=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; y++; yw+=w; }
                
                nx = Ta*x + Tb*y + Tx; ny = Tcw*x + Td*yw + Tyw;
                if ( 0>nx || nx>bx || 0>ny || ny>by )
                {
                    // color
                    dst[i] = r;   dst[i+1] = g;
                    dst[i+2] = b;  dst[i+3] = a;
                    continue;
                }
                j = ((nx|0) + (ny|0)) << 2;
                dst[i] = im[j];   dst[i+1] = im[j+1];
                dst[i+2] = im[j+2];  dst[i+3] = im[j+3];
            }
        }
        else if ( IGNORE === mode )
        {
            for (x=0,y=0,yw=0,i=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; y++; yw+=w; }
                
                nx = Ta*x + Tb*y + Tx; ny = Tcw*x + Td*yw + Tyw;
                
                // ignore
                ny = ny > by || ny < 0 ? yw : ny;
                nx = nx > bx || nx < 0 ? x : nx;
                
                j = ((nx|0) + (ny|0)) << 2;
                dst[i] = im[j];   dst[i+1] = im[j+1];
                dst[i+2] = im[j+2];  dst[i+3] = im[j+3];
            }
        }
        else if ( WRAP === mode )
        {
            for (x=0,y=0,yw=0,i=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; y++; yw+=w; }
                
                nx = Ta*x + Tb*y + Tx; ny = Tcw*x + Td*yw + Tyw;
                
                // wrap
                ny = ny > by ? ny-imArea : (ny < 0 ? ny+imArea : ny);
                nx = nx > bx ? nx-w : (nx < 0 ? nx+w : nx);
                
                j = ((nx|0) + (ny|0)) << 2;
                dst[i] = im[j];   dst[i+1] = im[j+1];
                dst[i+2] = im[j+2];  dst[i+3] = im[j+3];
            }
        }
        else //if ( CLAMP === mode )
        {
            for (x=0,y=0,yw=0,i=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; y++; yw+=w; }
                
                nx = Ta*x + Tb*y + Tx; ny = Tcw*x + Td*yw + Tyw;
                
                // clamp
                ny = ny > by ? by : (ny < 0 ? 0 : ny);
                nx = nx > bx ? bx : (nx < 0 ? 0 : nx);
                
                j = ((nx|0) + (ny|0)) << 2;
                dst[i] = im[j];   dst[i+1] = im[j+1];
                dst[i+2] = im[j+2];  dst[i+3] = im[j+3];
            }
        }
        return dst;
    }
        
    ,canRun: function( ) {
        return this._isOn && this.matrix;
    }
});
// aliases
AffineMatrixFilter.prototype.shift = AffineMatrixFilter.prototype.translate;

}(FILTER);/**
*
* Displacement Map Filter
*
* Displaces/Distorts the target image according to displace map
*
* @param displaceMap Optional (an Image used as a  dimaplcement map)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var MODE = FILTER.MODE, TypedArray = FILTER.Util.Array.typed,
    Min = Math.min, Max = Math.max, Floor = Math.floor;

// DisplacementMap Filter
FILTER.Create({
    name: "DisplacementMapFilter"
    
    ,init: function DisplacementMapFilter( displacemap ) {
        var self = this;
        if ( displacemap ) self.setInput( "map", displacemap );
    }
    
    ,path: FILTER_FILTERS_PATH
    // parameters
    ,scaleX: 1
    ,scaleY: 1
    ,startX: 0
    ,startY: 0
    ,componentX: 0
    ,componentY: 0
    ,color: 0
    ,mode: MODE.CLAMP
    ,hasInputs: true
    
    ,dispose: function( ) {
        var self = this;
        self.scaleX = null;
        self.scaleY = null;
        self.startX = null;
        self.startY = null;
        self.componentX = null;
        self.componentY = null;
        self.color = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             scaleX: self.scaleX
            ,scaleY: self.scaleY
            ,startX: self.startX
            ,startY: self.startY
            ,componentX: self.componentX
            ,componentY: self.componentY
            ,color: self.color
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.scaleX = params.scaleX;
        self.scaleY = params.scaleY;
        self.startX = params.startX;
        self.startY = params.startY;
        self.componentX = params.componentX;
        self.componentY = params.componentY;
        self.color = params.color;
        return self;
    }
    
    ,reset: function( ) {
        this.unsetInput("map"); 
        return this;
    }
    
    // used for internal purposes
    ,_apply: function( im, w, h ) {
        //"use asm";
        var self = this, Map;
        
        Map = self.input("map"); if ( !Map ) return im;
        
        var map, mapW, mapH, mapArea, displace, ww, hh,
            color = self.color||0, alpha, red, green, blue,
            sty, stx, styw, bx0, by0, bx, by, bxx = w-1, byy = h-1, rem,
            i, j, k, x, y, ty, ty2, yy, xx, mapOff, dstOff, srcOff,
            SX = self.scaleX*0.00390625, SY = self.scaleY*0.00390625, X = self.componentX, Y = self.componentY, 
            applyArea, imArea, imLen, mapLen, imcpy, srcx, srcy,
            IGNORE = MODE.IGNORE, CLAMP = MODE.CLAMP, COLOR = MODE.COLOR, WRAP = MODE.WRAP,
            mode = self.mode||IGNORE, IMG = FILTER.ImArray, IMGcopy = FILTER.ImArrayCopy,
            A16I = FILTER.Array16I;
        
        map = Map[0]; mapW = Map[1]; mapH = Map[2]; 
        mapLen = map.length; mapArea = mapLen>>>2;
        ww = Min(mapW, w); hh = Min(mapH, h);
        imLen = im.length; applyArea = (ww*hh)<<2; imArea = imLen>>>2;
        
        // make start relative
        //bxx = w-1; byy = h-1;
        stx = Floor(self.startX*bxx);
        sty = Floor(self.startY*byy);
        styw = sty*w;
        bx0 = -stx; by0 = -sty;
        bx = bxx-stx; by = byy-sty;
        
        displace = new A16I(mapArea<<1);
        imcpy = new IMGcopy(im);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main application loop (faster)
        // this is faster if mapArea <= imArea, else a reverse algorithm may be needed (todo)
        rem = (mapArea&15)<<2; j=0;
        for(i=0; i<rem; i+=4)
        { 
            displace[j++] = Floor( ( map[i   +X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i   +Y] - 128 ) * SY );
        }
        for(i=rem; i<mapLen; i+=64)
        { 
            displace[j++] = Floor( ( map[i   +X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i   +Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+4 +X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+4 +Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+8 +X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+8 +Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+12+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+12+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+16+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+16+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+20+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+20+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+24+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+24+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+28+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+28+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+32+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+32+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+36+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+36+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+40+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+40+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+44+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+44+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+48+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+48+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+52+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+52+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+56+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+56+Y] - 128 ) * SY );
            displace[j++] = Floor( ( map[i+60+X] - 128 ) * SX );
            displace[j++] = Floor( ( map[i+60+Y] - 128 ) * SY );
        }
        
        // apply filter (algorithm implemented directly based on filter definition, with some optimizations)
        if ( COLOR === mode )
        {
            alpha = (color >>> 24) & 255; 
            red = (color >>> 16) & 255; 
            green = (color >>> 8) & 255; 
            blue = color & 255;
            for (x=0,y=0,ty=0,ty2=0,i=0; i<applyArea; i+=4,x++)
            {
                // update image coordinates
                if (x>=ww) { x=0; y++; ty+=w; ty2+=mapW; }
                
                // if inside the application area
                if (y<by0 || y>by || x<bx0 || x>bx) continue;
                
                xx = x + stx; yy = y + sty; dstOff = (xx + ty + styw)<<2;  
                
                j = (x + ty2)<<1; srcx = xx + displace[j];  srcy = yy + displace[j+1];
                
                // color
                if (srcy>byy || srcy<0 || srcx>bxx || srcx<0)
                {
                    im[dstOff] = red;  im[dstOff+1] = green;
                    im[dstOff+2] = blue;  im[dstOff+3] = alpha;
                    continue;
                }
                
                srcOff = (srcx + srcy*w)<<2;
                // new pixel values
                im[dstOff] = imcpy[srcOff];   im[dstOff+1] = imcpy[srcOff+1];
                im[dstOff+2] = imcpy[srcOff+2];  im[dstOff+3] = imcpy[srcOff+3];
            }
        }
        else if ( IGNORE === mode )
        {
            for (x=0,y=0,ty=0,ty2=0,i=0; i<applyArea; i+=4,x++)
            {
                // update image coordinates
                if (x>=ww) { x=0; y++; ty+=w; ty2+=mapW; }
                
                // if inside the application area
                if (y<by0 || y>by || x<bx0 || x>bx) continue;
                
                xx = x + stx; yy = y + sty; dstOff = (xx + ty + styw)<<2;  
                
                j = (x + ty2)<<1; srcx = xx + displace[j];  srcy = yy + displace[j+1];
                
                // ignore
                if (srcy>byy || srcy<0 || srcx>bxx || srcx<0) continue;
                
                srcOff = (srcx + srcy*w)<<2;
                // new pixel values
                im[dstOff] = imcpy[srcOff];   im[dstOff+1] = imcpy[srcOff+1];
                im[dstOff+2] = imcpy[srcOff+2];  im[dstOff+3] = imcpy[srcOff+3];
            }
        }
        else if ( WRAP === mode )
        {
            for (x=0,y=0,ty=0,ty2=0,i=0; i<applyArea; i+=4,x++)
            {
                // update image coordinates
                if (x>=ww) { x=0; y++; ty+=w; ty2+=mapW; }
                
                // if inside the application area
                if (y<by0 || y>by || x<bx0 || x>bx) continue;
                
                xx = x + stx; yy = y + sty; dstOff = (xx + ty + styw)<<2;  
                
                j = (x + ty2)<<1; srcx = xx + displace[j];  srcy = yy + displace[j+1];
                
                // wrap
                srcy = srcy>byy ? srcy-h : (srcy<0 ? srcy+h : srcy);
                srcx = srcx>bxx ? srcx-w : (srcx<0 ? srcx+w : srcx);
                
                srcOff = (srcx + srcy*w)<<2;
                // new pixel values
                im[dstOff] = imcpy[srcOff];   im[dstOff+1] = imcpy[srcOff+1];
                im[dstOff+2] = imcpy[srcOff+2];  im[dstOff+3] = imcpy[srcOff+3];
            }
        }
        else //if ( CLAMP === mode )
        {
            for (x=0,y=0,ty=0,ty2=0,i=0; i<applyArea; i+=4,x++)
            {
                // update image coordinates
                if (x>=ww) { x=0; y++; ty+=w; ty2+=mapW; }
                
                // if inside the application area
                if (y<by0 || y>by || x<bx0 || x>bx) continue;
                
                xx = x + stx; yy = y + sty; dstOff = (xx + ty + styw)<<2;  
                
                j = (x + ty2)<<1; srcx = xx + displace[j];  srcy = yy + displace[j+1];
                
                // clamp
                srcy = srcy>byy ? byy : (srcy<0 ? 0 : srcy);
                srcx = srcx>bxx ? bxx : (srcx<0 ? 0 : srcx);
                
                srcOff = (srcx + srcy*w)<<2;
                // new pixel values
                im[dstOff] = imcpy[srcOff];   im[dstOff+1] = imcpy[srcOff+1];
                im[dstOff+2] = imcpy[srcOff+2];  im[dstOff+3] = imcpy[srcOff+3];
            }
        }
        return im;
    }
});

}(FILTER);/**
*
* Geometric Map Filter
*
* Distorts the target image according to a geometric mapping function
*
* @param geoMap Optional (the geometric mapping function)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var MAP, MODE = FILTER.MODE, function_body = FILTER.Util.String.function_body;

// GeometricMapFilter
FILTER.Create({
    name: "GeometricMapFilter"
    
    ,init: function GeometricMapFilter( T, init ) {
        var self = this;
        if ( T ) self.set( T, init );
    }
    
    ,path: FILTER_FILTERS_PATH
    ,_map: null
    ,_mapInit: null
    ,_mapName: null
    ,_mapChanged: false
    // parameters
    ,color: 0
    ,centerX: 0
    ,centerY: 0
    ,angle: 0
    ,radius: 0
    //,wavelength: 0
    //,amplitude: 0
    //,phase: 0
    ,mode: MODE.CLAMP
    
    ,dispose: function( ) {
        var self = this;
        
        self._map = null;
        self._mapInit = null;
        self._mapName = null;
        self._mapChanged = null;
        
        self.color = 0;
        self.centerX = null;
        self.centerY = null;
        self.angle = null;
        self.radius = null;
        //self.wavelength = null;
        //self.amplitude = null;
        //self.phase = null;
        self.$super('dispose');
        
        return self;
    }
    
    ,serialize: function( ) {
        var self = this, json;
        json = {
            _mapName: self._mapName || null
            ,_map: ("generic" === self._mapName) && self._map && self._mapChanged ? self._map.toString( ) : null
            ,_mapInit: ("generic" === self._mapName) && self._mapInit && self._mapChanged ? self._mapInit.toString( ) : null
            ,color: self.color
            ,centerX: self.centerX
            ,centerY: self.centerY
            ,angle: self.angle
            ,radius: self.radius
            //,wavelength: self.wavelength
            //,amplitude: self.amplitude
            //,phase: self.phase
        };
        self._mapChanged = false;
        return json;
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.color = params.color;
        self.centerX = params.centerX;
        self.centerY = params.centerY;
        self.angle = params.angle;
        self.radius = params.radius;
        //self.wavelength = params.wavelength;
        //self.amplitude = params.amplitude;
        //self.phase = params.phase;
        
        //self._mapName = params._mapName;
        //self._map = params._map;
        if ( !params._map && params._mapName && MAP.hasOwnProperty(params._mapName) )
        {
            self.set(params._mapName);
        }
        else if ( params._map && ("generic" === params._mapName) )
        {
            // using bind makes the code become [native code] and thus unserializable
            /*self._map = new Function("FILTER", '"use strict"; return ' + params._map)( FILTER );
            if ( params._mapInit )
            self._mapInit = new Function("FILTER", '"use strict"; return ' + params._mapInit)( FILTER );*/
            self.set(params._map, params._mapInit||null);
        }
        /*else
        {
            self._map = null;
        }*/
        return self;
    }
    
    ,polar: function( centerX, centerY ) {
        return this;
    }
    
    ,cartesian: function( centerX, centerY ) {
        return this;
    }
    
    ,twirl: function( angle, radius, centerX, centerY ) {
        var self = this;
        self.angle = angle||0; self.radius = radius||0;
        self.centerX = centerX||0; self.centerY = centerY||0;
        return self.set("twirl");
    }
    
    ,sphere: function( radius, centerX, centerY ) {
        var self = this;
        self.radius = radius||0; self.centerX = centerX||0; self.centerY = centerY||0;
        return self.set("sphere");
    }
    
    /*,ripple: function( radius, wavelength, amplitude, phase, centerX, centerY ) {
        var self = this;
        self.radius = radius!==undef ? radius : 50; 
        self.centerX = centerX||0; 
        self.centerY = centerY||0;
        self.wavelength = wavelength!==undef ? wavelength : 16; 
        self.amplitude = amplitude!==undef ? amplitude : 10; 
        self.phase = phase||0;
        return self.set("ripple");
    }*/
    
    ,set: function( T, preample ) {
        var self = this;
        if ( T && MAP.hasOwnProperty(String(T)) )
        {
            if ( self._mapName !== String(T) )
            {
                self._mapName = String(T);
                self._map = MAP[self._mapName];
                self._mapInit = MAP["init__"+self._mapName];
                self._apply = apply__( self._map, self._mapInit );
            }
            self._mapChanged = false;
        }
        else if ( T )
        {
            self._mapName = "generic"; 
            self._map = T;
            self._mapInit = preample || null;
            self._apply = apply__( self._map, self._mapInit );
            self._mapChanged = true;
        }
        return self;
    }
    
    ,reset: function( ) {
        var self = this;
        self._mapName = null; 
        self._map = null; 
        self._mapInit = null; 
        self._mapChanged = false;
        return self;
    }
    
    ,canRun: function( ) {
        return this._isOn && this._map;
    }
});

function apply__( map, preample )
{
    var __INIT__ = preample ? function_body(preample) : '', __APPLY__ = function_body(map);
        //"use asm";
    return new Function("FILTER", "\"use strict\"; return function( im, w, h ){\
    var self = this;\
    if ( !self._map ) return im;\
    var x, y, i, j, imLen = im.length, dst = new FILTER.ImArray(imLen), t = new FILTER.Array32F(2),\
        COLOR = FILTER.MODE.COLOR, CLAMP = FILTER.MODE.CLAMP, WRAP = FILTER.MODE.WRAP, IGNORE = FILTER.MODE.IGNORE,\
        mode = self.mode||IGNORE, color = self.color||0, r, g, b, a, bx = w-1, by = h-1;\
\
    "+__INIT__+";\
    \
    if ( COLOR === mode )\
    {\
        a = (color >>> 24)&255;\
        r = (color >>> 16)&255;\
        g = (color >>> 8)&255;\
        b = (color)&255;\
    \
        for (x=0,y=0,i=0; i<imLen; i+=4,x++)\
        {\
            if (x>=w) { x=0; y++; }\
            \
            t[0] = x; t[1] = y;\
            \
            "+__APPLY__+";\
            \
            if ( 0>t[0] || t[0]>bx || 0>t[1] || t[1]>by )\
            {\
                /* color */\
                dst[i] = r;   dst[i+1] = g;\
                dst[i+2] = b;  dst[i+3] = a;\
                continue;\
            }\
            \
            j = ((t[0]|0) + (t[1]|0)*w) << 2;\
            dst[i] = im[j];   dst[i+1] = im[j+1];\
            dst[i+2] = im[j+2];  dst[i+3] = im[j+3];\
        }\
    }\
    else if ( IGNORE === mode )\
    {\
        for (x=0,y=0,i=0; i<imLen; i+=4,x++)\
        {\
            if (x>=w) { x=0; y++; }\
            \
            t[0] = x; t[1] = y;\
            \
            "+__APPLY__+";\
            \
            /* ignore */\
            t[1] = t[1] > by || t[1] < 0 ? y : t[1];\
            t[0] = t[0] > bx || t[0] < 0 ? x : t[0];\
            \
            j = ((t[0]|0) + (t[1]|0)*w) << 2;\
            dst[i] = im[j];   dst[i+1] = im[j+1];\
            dst[i+2] = im[j+2];  dst[i+3] = im[j+3];\
        }\
    }\
    else if ( WRAP === mode )\
    {\
        for (x=0,y=0,i=0; i<imLen; i+=4,x++)\
        {\
            if (x>=w) { x=0; y++; }\
            \
            t[0] = x; t[1] = y;\
            \
            "+__APPLY__+";\
            \
            /* wrap */\
            t[1] = t[1] > by ? t[1]-h : (t[1] < 0 ? t[1]+h : t[1]);\
            t[0] = t[0] > bx ? t[0]-w : (t[0] < 0 ? t[0]+w : t[0]);\
            \
            j = ((t[0]|0) + (t[1]|0)*w) << 2;\
            dst[i] = im[j];   dst[i+1] = im[j+1];\
            dst[i+2] = im[j+2];  dst[i+3] = im[j+3];\
        }\
    }\
    else /*if ( CLAMP === mode )*/\
    {\
        for (x=0,y=0,i=0; i<imLen; i+=4,x++)\
        {\
            if (x>=w) { x=0; y++; }\
            \
            t[0] = x; t[1] = y;\
            \
            "+__APPLY__+";\
            \
            /* clamp */\
            t[1] = t[1] > by ? by : (t[1] < 0 ? 0 : t[1]);\
            t[0] = t[0] > bx ? bx : (t[0] < 0 ? 0 : t[0]);\
            \
            j = ((t[0]|0) + (t[1]|0)*w) << 2;\
            dst[i] = im[j];   dst[i+1] = im[j+1];\
            dst[i+2] = im[j+2];  dst[i+3] = im[j+3];\
        }\
    }\
    return dst;\
};")( FILTER );
}

//
// private geometric maps
MAP = {
    // adapted from http://je2050.de/imageprocessing/ TwirlMap
     "twirl": "function( ){\
        TX = t[0]-CX; TY = t[1]-CY;\
        D = Sqrt(TX*TX + TY*TY);\
        if ( D < R )\
        {\
            theta = Atan2(TY, TX) + fact*(R-D);\
            t[0] = CX + D*Cos(theta);  t[1] = CY + D*Sin(theta);\
        }\
    }"
    ,"init__twirl": "function( ){\
        var Sqrt = Math.sqrt, Atan2 = Math.atan2, Sin = Math.sin, Cos = Math.cos,\
            CX = self.centerX*(w-1), CY = self.centerY*(h-1),\
            angle = self.angle, R = self.radius, fact = angle/R,\
            D, TX, TY, theta;\
    }"
    
    // adapted from http://je2050.de/imageprocessing/ SphereMap
    ,"sphere": "function( ){\
        TX = t[0]-CX;  TY = t[1]-CY;\
        TX2 = TX*TX; TY2 = TY*TY;\
        D2 = TX2 + TY2;\
        if ( D2 < R2 )\
        {\
            D2 = R2 - D2; D = Sqrt(D2);\
            thetax = Asin(TX / Sqrt(TX2 + D2)) * invrefraction;\
            thetay = Asin(TY / Sqrt(TY2 + D2)) * invrefraction;\
            t[0] = t[0] - D * Tan(thetax);  t[1] = t[1] - D * Tan(thetay);\
        }\
    }"
    ,"init__sphere": "function( ){\
        var Sqrt = Math.sqrt, Asin = Math.asin, Tan = Math.tan,\
            CX = self.centerX*(w-1), CY = self.centerY*(h-1),\
            invrefraction = 1-0.555556,\
            R = self.radius, R2 = R*R,\
            D, TX, TY, TX2, TY2, R2, D2, thetax, thetay;\
    }"
    /*
    // adapted from https://github.com/JoelBesada/JSManipulate
    ,"ripple": function( t ) {
        TX = t[0]-CX;  TY = t[1]-CY;
        TX2 = TX*TX; TY2 = TY*TY;
        D2 = TX2 + TY2;
        if ( D2 < R2 )
        {
            D = Sqrt(D2);
            amount = amplitude * Sin(D/wavelength * twoPI - phase);
            amount *= (R-D)/R;
            if ( D )  amount *= wavelength/D;
            t[0] = t[0] + TX*amount;  t[1] = t[1] + TY*amount;
        }
    }
    ,"init__ripple": function( )  {
        var Sqrt = Math.sqrt, Sin = Math.asin, twoPI = 2*Math.PI,
            CX = self.centerX*(w-1), CY = self.centerY*(h-1),
            invrefraction = 1-0.555556,
            R = self.radius, R2 = R*R, amount,
            wavelength = self.wavelength, amplitude = self.amplitude, phase = self.phase,
            D, TX, TY, TX2, TY2, D2;
    }*/
};

}(FILTER);/**
*
* Convolution Matrix Filter(s)
*
* Convolves the target image with a matrix filter
*
* @param weights Optional (a convolution matrix as an array of values)
* @param factor Optional (filter normalizer factor)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var MODE = FILTER.MODE, CM = FILTER.ConvolutionMatrix, IMG = FILTER.ImArray, //IMGcopy = FILTER.ImArrayCopy,
    A32F = FILTER.Array32F, A16I = FILTER.Array16I, A8U = FILTER.Array8U,
    convolve = FILTER.Util.Filter.cm_convolve,
    TypedArray = FILTER.Util.Array.typed, notSupportClamp = FILTER._notSupportClamp,
    
    sqrt2 = Math.SQRT2, toRad = FILTER.CONST.toRad, toDeg = FILTER.CONST.toDeg,
    Abs = Math.abs, Sqrt = Math.sqrt, Sin = Math.sin, Cos = Math.cos,
    
    // hardcode Pascal numbers, used for binomial kernels
    _pascal=[
        [1],
        [1, 1],
        [1, 2,  1],
        [1, 3,  3,  1],
        [1, 4,  6,  4,  1],
        [1, 5,  10, 10, 5,  1],
        [1, 6,  15, 20, 15, 6,  1],
        [1, 7,  21, 35, 35, 21, 7,  1],
        [1, 8,  28, 56, 70, 56, 28, 8,  1]
    ]
;

//
//  Convolution Matrix Filter
var ConvolutionMatrixFilter = FILTER.Create({
    name: "ConvolutionMatrixFilter"
    
    ,init: function ConvolutionMatrixFilter( weights, factor, bias, mode ) {
        var self = this;
        self._coeff = new CM([1.0, 0.0]);
        self.matrix2 = null;  self.dim2 = 0;
        self._isGrad = false; self._doIntegral = 0; self._doSeparable = false;
        if ( weights && weights.length)
        {
            self.set(weights, (Sqrt(weights.length)+0.5)|0, factor||1.0, bias||0.0);
        }
        else 
        {
            self.matrix = null; self.dim = 0;
        }
        self.mode = mode || MODE.RGB;
    }
    
    ,path: FILTER_FILTERS_PATH
    ,dim: 0
    ,dim2: 0
    ,matrix: null
    ,matrix2: null
    ,_mat: null
    ,_mat2: null
    ,_coeff: null
    ,_isGrad: false
    ,_doIntegral: 0
    ,_doSeparable: false
    ,_indices: null
    ,_indices2: null
    ,_indicesf: null
    ,_indicesf2: null
    ,mode: MODE.RGB
    
    ,dispose: function( ) {
        var self = this;
        self.dim = null;
        self.dim2 = null;
        self.matrix = null;
        self.matrix2 = null;
        self._mat = null;
        self._mat2 = null;
        self._coeff = null;
        self._isGrad = null;
        self._doIntegral = null;
        self._doSeparable = null;
        self._indices = null;
        self._indices2 = null;
        self._indicesf = null;
        self._indicesf2 = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             dim: self.dim
            ,dim2: self.dim2
            ,matrix: self.matrix
            ,matrix2: self.matrix2
            ,_mat: self._mat
            ,_mat2: self._mat2
            ,_coeff: self._coeff
            ,_isGrad: self._isGrad
            ,_doIntegral: self._doIntegral
            ,_doSeparable: self._doSeparable
            ,_indices: self._indices
            ,_indices2: self._indices2
            ,_indicesf: self._indicesf
            ,_indicesf2: self._indicesf2
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.dim = params.dim;
        self.dim2 = params.dim2;
        self.matrix = TypedArray( params.matrix, CM );
        self.matrix2 = TypedArray( params.matrix2, CM );
        self._mat = TypedArray( params._mat, CM );
        self._mat2 = TypedArray( params._mat2, CM );
        self._coeff = TypedArray( params._coeff, CM );
        self._isGrad = params._isGrad;
        self._doIntegral = params._doIntegral;
        self._doSeparable = params._doSeparable;
        self._indices = TypedArray( params._indices, A16I );
        self._indices2 = TypedArray( params._indices2, A16I );
        self._indicesf = TypedArray( params._indicesf, A16I );
        self._indicesf2 = TypedArray( params._indicesf2, A16I );
        return self;
    }
    
    // generic functional-based kernel filter
    ,functional: function( f, d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        var kernel = functional1(d, f), fact = 1.0/summa(kernel);
        // this can be separable
        this.set(kernel, d, fact, fact, d, kernel);
        this._doSeparable = true; return this;
    }
    
    // fast gauss filter
    ,fastGauss: function( quality, d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        quality = (quality||1)|0;
        if ( quality < 1 ) quality = 1;
        else if ( quality > 7 ) quality = 7;
        this.set(ones(d), d, 1/(d*d), 0.0);
        this._doIntegral = quality; return this;
    }
    
    // generic box low-pass filter
    ,lowPass: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        this.set(ones(d), d, 1/(d*d), 0.0);
        this._doIntegral = 1; return this;
    }
    ,boxBlur: null

    // generic box high-pass filter (I-LP)
    ,highPass: function( d, f ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        f = f === undef ? 1 : f;
        // HighPass Filter = I - (respective)LowPass Filter
        var fact = -f/(d*d);
        this.set(ones(d, fact, 1+fact), d, 1.0, 0.0);
        this._doIntegral = 1; return this;
    }

    ,glow: function( f, d ) { 
        f = f === undef ? 0.5 : f;  
        return this.highPass(d, -f); 
    }
    
    ,sharpen: function( f, d ) { 
        f = f === undef ? 0.5 : f;  
        return this.highPass(d, f); 
    }
    
    ,verticalBlur: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        this.set(average1(d), 1, 1/d, 0.0, d); 
        this._doIntegral = 1; return this;
    }
    
    ,horizontalBlur: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        this.set(average1(d), d, 1/d, 0.0, 1); 
        this._doIntegral = 1; return this;
    }
    
    // supports only vertical, horizontal, diagonal
    ,directionalBlur: function( theta, d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        theta *= toRad;
        return this.set(twos2(d, Cos(theta), -Sin(theta), 1/d), d, 1.0, 0.0);
    }
    
    // generic binomial(quasi-gaussian) low-pass filter
    ,binomialLowPass: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        /*var filt=binomial(d);
        return this.set(filt.kernel, d, 1/filt.sum); */
        var kernel = binomial1(d), fact = 1/(1<<(d-1));
        this.set(kernel, d, fact, fact, d, kernel);
        this._doSeparable = true; return this;
    }
    ,gaussBlur: null

    // generic binomial(quasi-gaussian) high-pass filter
    ,binomialHighPass: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        var kernel = binomial2(d);
        // HighPass Filter = I - (respective)LowPass Filter
        return this.set(FILTER.Util.Filter.cm_combine(ones(d), kernel, 1, -1/summa(kernel)), d, 1.0, 0.0); 
    }
    
    // X-gradient, partial X-derivative (Prewitt)
    ,prewittX: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        // this can be separable
        //return this.set(prewitt(d, 0), d, 1.0, 0.0);
        this.set(average1(d), d, 1.0, 0.0, d, derivative1(d,0));
        this._doSeparable = true; return this;
    }
    ,gradX: null
    
    // Y-gradient, partial Y-derivative (Prewitt)
    ,prewittY: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        // this can be separable
        //return this.set(prewitt(d, 1), d, 1.0, 0.0);
        this.set(derivative1(d,1), d, 1.0, 0.0, d, average1(d));
        this._doSeparable = true; return this;
    }
    ,gradY: null
    
    // directional gradient (Prewitt)
    ,prewittDirectional: function( theta, d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        theta *= toRad;
        return this.set(FILTER.Util.Filter.cm_combine(prewitt(d, 0), prewitt(d, 1), Cos(theta), Sin(theta)), d, 1.0, 0.0);
    }
    ,gradDirectional: null
    
    // gradient magnitude (Prewitt)
    ,prewitt: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        this.set(prewitt(d, 0), d, 1.0, 0.0, d, prewitt(d, 1));
        this._isGrad = true; return this;
    }
    ,grad: null
    
    // partial X-derivative (Sobel)
    ,sobelX: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        // this can be separable
        //return this.set(sobel(d, 0), d, 1.0, 0.0);
        this.set(binomial1(d), d, 1.0, 0.0, d, derivative1(d,0));
        this._doSeparable = true; return this;
    }
    
    // partial Y-derivative (Sobel)
    ,sobelY: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        // this can be separable
        //return this.set(sobel(d, 1), d, 1.0, 0.0);
        this.set(derivative1(d,1), d, 1.0, 0.0, d, binomial1(d));
        this._doSeparable = true; return this;
    }
    
    // directional gradient (Sobel)
    ,sobelDirectional: function( theta, d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        theta *= toRad;
        return this.set(FILTER.Util.Filter.cm_combine(sobel(d, 0), sobel(d, 1), Cos(theta), Sin(theta)), d, 1.0, 0.0);
    }
    
    // gradient magnitude (Sobel)
    ,sobel: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        this.set(sobel(d, 0), d, 1.0, 0.0, d, sobel(d, 1));
        this._isGrad = true; return this;
    }
    
    ,laplace: function( d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        this.set(ones(d, -1, d*d-1), d, 1.0, 0.0);
        this._doIntegral = 1; return this;
    }
    
    ,emboss: function( angle, amount, d ) {
        d = d === undef ? 3 : (d&1 ? d : d+1);
        angle = angle === undef ? -0.25*Math.PI : angle*toRad;
        amount = amount || 1;
        return this.set(twos(d, amount*Cos(angle), -amount*Sin(angle), 1), d, 1.0, 0.0);
    }
    ,bump: null
    
    ,edges: function( m ) {
        m = m || 1;
        return this.set([
            0,   m,   0,
            m,  -4*m, m,
            0,   m,   0
         ], 3, 1.0, 0.0);
    }
    
    ,set: function( m, d, f, b, d2, m2 ) {
        var self = this, tmp;
        
        self._isGrad = false; self._doIntegral = 0; self._doSeparable = false;
        self.matrix2 = null; self.dim2 = 0; self._indices2 = self._indicesf2 = null; self._mat2 = null;
        
        self.matrix = new CM(m); self.dim = d; self._coeff[0] = f||1; self._coeff[1] = b||0;
        tmp  = indices(self.matrix, self.dim);
        self._indices = tmp[0]; self._indicesf = tmp[1]; self._mat = tmp[2];
        
        if ( m2 )
        {
            self.matrix2 = new CM(m2); self.dim2 = d2;
            tmp  = indices(self.matrix2, self.dim2);
            self._indices2 = tmp[0]; self._indicesf2 = tmp[1]; self._mat2 = tmp[2];
        }
        else if ( d2 )
        {
            self.dim2 = d2;
        }
        
        return self;
    }
    
    ,reset: function( ) {
        var self = this;
        self.matrix = self.matrix2 = null; 
        self.dim = self.dim2 = 0;
        self._mat = self._mat2 = null; 
        self._indices = self._indices2 = self._indicesf = self._indicesf2 = null;
        self._isGrad = false; self._doIntegral = 0; self._doSeparable = false;
        return self;
    }
    
    ,combineWith: function( filt ) {
        var self = this;
        if ( !filt.matrix ) return self;
        return self.matrix ? self.set(convolve(self.matrix, filt.matrix), self.dim*filt.dim, self._coeff[0]*filt._coeff[0]) : self.set(filt.matrix, filt.dim, filt._coeff[0], filt._coeff[1]);
    }
    
    // used for internal purposes
    ,_apply: notSupportClamp ? function( im, w, h ) {
        //"use asm";
        var self = this, mode = self.mode;
        if ( !self.matrix ) return im;
        
        // do a faster convolution routine if possible
        if ( self._doIntegral ) 
        {
            return self.matrix2 ? FILTER.Util.Filter.integral_convolution(mode, im, w, h, 2, self.matrix, self.matrix2, self.dim, self.dim2, self._coeff[0], self._coeff[1], self._doIntegral) : FILTER.Util.Filter.integral_convolution(mode, im, w, h, 2, self.matrix, null, self.dim, self.dim, self._coeff[0], self._coeff[1], self._doIntegral);
        }
        else if ( self._doSeparable )
        {
            return FILTER.Util.Filter.separable_convolution(mode, im, w, h, 2, self._mat, self._mat2, self._indices, self._indices2, self._coeff[0], self._coeff[1]);
        }
        
        var imLen = im.length, imArea = imLen>>>2, dst = new IMG(imLen), 
            t0, t1, t2, t3, i, j, k, x, ty, ty2, 
            xOff, yOff, srcOff, r, g, b, a, r2, g2, b2, a2,
            bx = w-1, by = imArea-w, coeff1 = self._coeff[0], coeff2 = self._coeff[1],
            mat = self.matrix, mat2 = self.matrix2, wt, wt2, _isGrad = self._isGrad,
            mArea, matArea, imageIndices;
        
        // apply filter (algorithm direct implementation based on filter definition with some optimizations)
        if ( MODE.GRAY === mode )
        {
            if (mat2) // allow to compute a second matrix in-parallel in same pass
            {
                // pre-compute indices, 
                // reduce redundant computations inside the main convolution loop (faster)
                mArea = self._indicesf.length; 
                imageIndices = new A16I(self._indicesf);
                for (k=0; k<mArea; k+=2) imageIndices[k+1] *= w;
                matArea = mat.length;
                
                // do direct convolution
                x=0; ty=0;
                for (i=0; i<imLen; i+=4, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    r=g=b=a=r2=g2=b2=a2=0;
                    for (k=0, j=0; k<matArea; k++, j+=2)
                    {
                        xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2; 
                        wt = mat[k]; r += im[srcOff] * wt;
                        // allow to apply a second similar matrix in-parallel (eg for total gradients)
                        wt2 = mat2[k]; r2 += im[srcOff] * wt2;
                    }
                    
                    // output
                    if ( _isGrad )
                    {
                        t0 = Abs(r)+Abs(r2);
                    }
                    else
                    {
                        t0 = coeff1*r + coeff2*r2;
                    }
                    // clamp them manually
                    t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                    dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
            }
            else
            {
                // pre-compute indices, 
                // reduce redundant computations inside the main convolution loop (faster)
                mArea = self._indices.length; 
                imageIndices = new A16I(self._indices);
                for (k=0; k<mArea; k+=2) imageIndices[k+1] *= w;
                mat = self._mat;
                matArea = mat.length;
                
                // do direct convolution
                x=0; ty=0;
                for (i=0; i<imLen; i+=4, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    r=g=b=a=0;
                    for (k=0, j=0; k<matArea; k++, j+=2)
                    {
                        xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2; wt = mat[k];
                        r += im[srcOff] * wt;
                    }
                    
                    // output
                    t0 = coeff1*r+coeff2;
                    // clamp them manually
                    t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                    dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
            }
        }
        else
        {
            if (mat2) // allow to compute a second matrix in-parallel in same pass
            {
                // pre-compute indices, 
                // reduce redundant computations inside the main convolution loop (faster)
                mArea = self._indicesf.length; 
                imageIndices = new A16I(self._indicesf);
                for (k=0; k<mArea; k+=2) imageIndices[k+1] *= w;
                matArea = mat.length;
                
                // do direct convolution
                x=0; ty=0;
                for (i=0; i<imLen; i+=4, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    r=g=b=a=r2=g2=b2=a2=0;
                    for (k=0, j=0; k<matArea; k++, j+=2)
                    {
                        xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2; 
                        wt = mat[k]; r += im[srcOff] * wt; g += im[srcOff+1] * wt;  b += im[srcOff+2] * wt;
                        //a += im[srcOff+3] * wt;
                        // allow to apply a second similar matrix in-parallel (eg for total gradients)
                        wt2 = mat2[k]; r2 += im[srcOff] * wt2; g2 += im[srcOff+1] * wt2;  b2 += im[srcOff+2] * wt2;
                        //a2 += im[srcOff+3] * wt2;
                    }
                    
                    // output
                    if ( _isGrad )
                    {
                        t0 = Abs(r)+Abs(r2);  t1 = Abs(g)+Abs(g2);  t2 = Abs(b)+Abs(b2);
                    }
                    else
                    {
                        t0 = coeff1*r + coeff2*r2;  t1 = coeff1*g + coeff2*g2;  t2 = coeff1*b + coeff2*b2;
                    }
                    // clamp them manually
                    t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                    t1 = t1<0 ? 0 : (t1>255 ? 255 : t1);
                    t2 = t2<0 ? 0 : (t2>255 ? 255 : t2);
                    dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
            }
            else
            {
                // pre-compute indices, 
                // reduce redundant computations inside the main convolution loop (faster)
                mArea = self._indices.length; 
                imageIndices = new A16I(self._indices);
                for (k=0; k<mArea; k+=2) imageIndices[k+1] *= w;
                mat = self._mat;
                matArea = mat.length;
                
                // do direct convolution
                x=0; ty=0;
                for (i=0; i<imLen; i+=4, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    r=g=b=a=0;
                    for (k=0, j=0; k<matArea; k++, j+=2)
                    {
                        xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2; wt = mat[k];
                        r += im[srcOff] * wt; g += im[srcOff+1] * wt;  b += im[srcOff+2] * wt;
                        //a += im[srcOff+3] * wt;
                    }
                    
                    // output
                    t0 = coeff1*r+coeff2;  t1 = coeff1*g+coeff2;  t2 = coeff1*b+coeff2;
                    // clamp them manually
                    t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                    t1 = t1<0 ? 0 : (t1>255 ? 255 : t1);
                    t2 = t2<0 ? 0 : (t2>255 ? 255 : t2);
                    dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
            }
        }
        return dst;
    } : function( im, w, h ) {
        //"use asm";
        var self = this, mode = self.mode;
        if ( !self.matrix ) return im;
        
        // do a faster convolution routine if possible
        if ( self._doIntegral ) 
        {
            return self.matrix2 ? FILTER.Util.Filter.integral_convolution(mode, im, w, h, 2, self.matrix, self.matrix2, self.dim, self.dim2, self._coeff[0], self._coeff[1], self._doIntegral) : FILTER.Util.Filter.integral_convolution(mode, im, w, h, 2, self.matrix, null, self.dim, self.dim, self._coeff[0], self._coeff[1], self._doIntegral);
        }
        else if ( self._doSeparable )
        {
            return FILTER.Util.Filter.separable_convolution(mode, im, w, h, 2, self._mat, self._mat2, self._indices, self._indices2, self._coeff[0], self._coeff[1]);
        }
        
        var imLen = im.length, imArea = imLen>>>2, dst = new IMG(imLen), 
            t0, t1, t2, t3, i, j, k, x, ty, ty2, 
            xOff, yOff, srcOff, r, g, b, a, r2, g2, b2, a2,
            bx = w-1, by = imArea-w, coeff1 = self._coeff[0], coeff2 = self._coeff[1],
            mat = self.matrix, mat2 = self.matrix2, wt, wt2, _isGrad = self._isGrad,
            mArea, matArea, imageIndices;
        
        // apply filter (algorithm direct implementation based on filter definition with some optimizations)
        if ( MODE.GRAY === mode )
        {
            if (mat2) // allow to compute a second matrix in-parallel in same pass
            {
                // pre-compute indices, 
                // reduce redundant computations inside the main convolution loop (faster)
                mArea = self._indicesf.length; 
                imageIndices = new A16I(self._indicesf);
                for (k=0; k<mArea; k+=2) imageIndices[k+1] *= w;
                matArea = mat.length;
                
                // do direct convolution
                x=0; ty=0;
                for (i=0; i<imLen; i+=4, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    r=g=b=a=r2=g2=b2=a2=0;
                    for (k=0, j=0; k<matArea; k++, j+=2)
                    {
                        xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2; 
                        wt = mat[k]; r += im[srcOff] * wt;
                        // allow to apply a second similar matrix in-parallel (eg for total gradients)
                        wt2 = mat2[k]; r2 += im[srcOff] * wt2;
                    }
                    
                    // output
                    if ( _isGrad )
                    {
                        t0 = Abs(r)+Abs(r2);
                    }
                    else
                    {
                        t0 = coeff1*r + coeff2*r2;
                    }
                    dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
            }
            else
            {
                // pre-compute indices, 
                // reduce redundant computations inside the main convolution loop (faster)
                mArea = self._indices.length; 
                imageIndices = new A16I(self._indices);
                for (k=0; k<mArea; k+=2) imageIndices[k+1] *= w;
                mat = self._mat;
                matArea = mat.length;
                
                // do direct convolution
                x=0; ty=0;
                for (i=0; i<imLen; i+=4, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    r=g=b=a=0;
                    for (k=0, j=0; k<matArea; k++, j+=2)
                    {
                        xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2; wt = mat[k];
                        r += im[srcOff] * wt;
                    }
                    
                    // output
                    t0 = coeff1*r+coeff2;
                    dst[i] = t0|0;  dst[i+1] = t0|0;  dst[i+2] = t0|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
            }
        }
        else
        {
            if (mat2) // allow to compute a second matrix in-parallel in same pass
            {
                // pre-compute indices, 
                // reduce redundant computations inside the main convolution loop (faster)
                mArea = self._indicesf.length; 
                imageIndices = new A16I(self._indicesf);
                for (k=0; k<mArea; k+=2) imageIndices[k+1] *= w;
                matArea = mat.length;
                
                // do direct convolution
                x=0; ty=0;
                for (i=0; i<imLen; i+=4, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    r=g=b=a=r2=g2=b2=a2=0;
                    for (k=0, j=0; k<matArea; k++, j+=2)
                    {
                        xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2; 
                        wt = mat[k]; r += im[srcOff] * wt; g += im[srcOff+1] * wt;  b += im[srcOff+2] * wt;
                        //a += im[srcOff+3] * wt;
                        // allow to apply a second similar matrix in-parallel (eg for total gradients)
                        wt2 = mat2[k]; r2 += im[srcOff] * wt2; g2 += im[srcOff+1] * wt2;  b2 += im[srcOff+2] * wt2;
                        //a2 += im[srcOff+3] * wt2;
                    }
                    
                    // output
                    if ( _isGrad )
                    {
                        t0 = Abs(r)+Abs(r2);  t1 = Abs(g)+Abs(g2);  t2 = Abs(b)+Abs(b2);
                    }
                    else
                    {
                        t0 = coeff1*r + coeff2*r2;  t1 = coeff1*g + coeff2*g2;  t2 = coeff1*b + coeff2*b2;
                    }
                    dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
            }
            else
            {
                // pre-compute indices, 
                // reduce redundant computations inside the main convolution loop (faster)
                mArea = self._indices.length; 
                imageIndices = new A16I(self._indices);
                for (k=0; k<mArea; k+=2) imageIndices[k+1] *= w;
                mat = self._mat;
                matArea = mat.length;
                
                // do direct convolution
                x=0; ty=0;
                for (i=0; i<imLen; i+=4, x++)
                {
                    // update image coordinates
                    if (x>=w) { x=0; ty+=w; }
                    
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    r=g=b=a=0;
                    for (k=0, j=0; k<matArea; k++, j+=2)
                    {
                        xOff = x + imageIndices[j]; yOff = ty + imageIndices[j+1];
                        if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                        srcOff = (xOff + yOff)<<2; wt = mat[k];
                        r += im[srcOff] * wt; g += im[srcOff+1] * wt;  b += im[srcOff+2] * wt;
                        //a += im[srcOff+3] * wt;
                    }
                    
                    // output
                    t0 = coeff1*r+coeff2;  t1 = coeff1*g+coeff2;  t2 = coeff1*b+coeff2;
                    dst[i] = t0|0;  dst[i+1] = t1|0;  dst[i+2] = t2|0;
                    // alpha channel is not transformed
                    dst[i+3] = im[i+3];
                }
            }
        }
        return dst;
    }
        
    ,canRun: function( ) {
        return this._isOn && this.matrix;
    }
});
// aliases
ConvolutionMatrixFilter.prototype.gradX = ConvolutionMatrixFilter.prototype.prewittX;
ConvolutionMatrixFilter.prototype.gradY = ConvolutionMatrixFilter.prototype.prewittY;
ConvolutionMatrixFilter.prototype.gradDirectional = ConvolutionMatrixFilter.prototype.prewittDirectional;
ConvolutionMatrixFilter.prototype.grad = ConvolutionMatrixFilter.prototype.prewitt;
ConvolutionMatrixFilter.prototype.bump = ConvolutionMatrixFilter.prototype.emboss;
ConvolutionMatrixFilter.prototype.boxBlur = ConvolutionMatrixFilter.prototype.lowPass;
ConvolutionMatrixFilter.prototype.gaussBlur = ConvolutionMatrixFilter.prototype.binomialLowPass;


//
//  Private methods
function summa( kernel )
{
    for(var sum=0,i=0,l=kernel.length; i<l; i++) sum += kernel[i];
    return sum;
}
function indices( m, d )
{
    // pre-compute indices, 
    // reduce redundant computations inside the main convolution loop (faster)
    var indices = [], indices2 = [], mat = [], k, x, y,  matArea = m.length, matRadius = d, matHalfSide = matRadius>>>1;
    x=0; y=0; k=0;
    while (k<matArea)
    { 
        indices2.push(x-matHalfSide); 
        indices2.push(y-matHalfSide);
        if (m[k])
        {
            indices.push(x-matHalfSide); 
            indices.push(y-matHalfSide);
            mat.push(m[k]);
        }
        k++; x++; if (x>=matRadius) { x=0; y++; }
    }
    return [new A16I(indices), new A16I(indices2), new CM(mat)];
}

function functional1( d, f )
{
    var x, y, i, ker = new Array(d);
    for(x=0,y=0,i=0; i<d; i++,x++) ker[i] = f(x, y, d);
    return ker;
}
function identity1( d )
{
    var i, ker = new Array(d);
    for(i=0; i<d; i++) ker[i] = 0;
    ker[d>>>1] = 1;
    return ker;
}
function average1( d )
{
    var i, ker = new Array(d);
    for(i=0; i<d; i++) ker[i] = 1;
    return ker;
}
function derivative1( d, rev )
{
    var i, half = d>>>1, ker = new Array(d);
    if ( rev ) for(i=0; i<d; i++) ker[d-1-i] = i-half;
    else for(i=0; i<d; i++) ker[i] = i-half;
    return ker;
}

// pascal numbers (binomial coefficients) are used to get coefficients for filters that resemble gaussian distributions
// eg Sobel, Canny, gradients etc..
function binomial1( d )
{
    var l = _pascal.length, row, uprow, i, il;
    d--;
    if (d < l)
    {
        row = _pascal[d];
    }
    else
    {
        // else compute them iteratively
        row = _pascal[l-1];
        while ( l<=d )
        {
            uprow=row; row=new Array(uprow.length+1); row[0]=1;
            for(i=0,il=uprow.length-1; i<il; i++) row[i+1] = uprow[i]+uprow[i+1]; row[uprow.length]=1;
            if (l<20) _pascal.push(row); // save it for future dynamically
            l++;
        }
    }
    return row.slice();
}

//console.log( binomial1( 5 ) );
//console.log( derivative1( 5 ) );
//console.log( sobel( 5 ) );
//console.log( sobel( 5, 1 ) );
//console.log( binomial2( 5 ) );
//console.log( summa(binomial2( 5 )) );

function functional2( d, f )
{
    var functional = functional1(d, f);
    // convolve with itself
    return convolve(functional, functional);
}
function binomial2( d )
{
    var binomial = binomial1(d);
    // convolve with itself
    return convolve(binomial, binomial);
}
function vertical2( d )
{
    return convolve(average1(d), identity1(d));
}
function horizontal2( d )
{
    return convolve(identity1(d), average1(d));
}
function sobel( d, dir )
{
    return 1===dir ? /*y*/convolve(derivative1(d,1), binomial1(d)) : /*x*/convolve(binomial1(d), derivative1(d,0));
}
function prewitt( d, dir )
{
    return 1===dir ? /*y*/convolve(derivative1(d,1), average1(d)) : /*x*/convolve(average1(d), derivative1(d,0));
}
function ones( d, f, c )
{ 
    f = f||1; c = c||f;
    var l = d*d, i, o = new CM(l);
    for(i=0; i<d; i++) o[i] = f;
    o[l>>>1] = c;
    return o;
}
function twos( d, dx, dy, c )
{
    var l=d*d, half=d>>>1, center=l>>>1, i, k, j, o=new CM(l), tx, ty;
    for (tx=0,i=0; i<=half; i++,tx+=dx)
    {
        for (k=0,ty=0,j=0; j<=half; j++,k+=d,ty+=dy)
        {
            //tx=i*dx;  ty=j*dy;
            o[center + i + k]=   tx + ty;
            o[center - i - k]= - tx - ty;
            o[center - i + k]= - tx + ty;
            o[center + i - k]=   tx - ty;
        }
    }
    o[center] = c||1;
    return o;
}
function twos2( d, c, s, cf )
{
    var l=d*d, half=d>>1, center=l>>1, i, j, k, 
        o=new CM(l), T=new CM(l), 
        tx, ty, dx, dy, f=1/d, 
        delta=1e-8;
    
    if (Abs(c)>delta) { dx=1; dy=s/c; }
    else  { dx=c/s; dy=1; }
    
    i=0; tx=0; ty=0; k=dy*d;
    while (i<=half)
    {
        // compute the transformation of the (diagonal) line
        T[center + i]= (center + tx + ty + 0.5)|0;
        T[center - i]= (center - tx - ty + 0.5)|0;
        i++; tx+=dx; ty+=k;
    }
    i=0;
    while (i<=half)
    {
        // do the mapping of the base line to the transformed one
        o[T[center + i]]=o[T[center - i]]=f;
        // anti-aliasing ??..
        i++;
    }
    o[center] = cf||1;
    return o;
}

}(FILTER);/**
*
* Morphological Filter(s)
*
* Applies morphological processing to target image
*
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

// used for internal purposes
var MORPHO, MODE = FILTER.MODE, IMG = FILTER.ImArray, IMGcpy = FILTER.ImArrayCopy,
    STRUCT = FILTER.Array8U, A32I = FILTER.Array32I,
    Sqrt = Math.sqrt, TypedArray = FILTER.Util.Array.typed,
    primitive_morphology_operator = FILTER.Util.Filter.primitive_morphology_operator,
    // return a box structure element
    box = function( d ) {
        var i, size=d*d, ones = new STRUCT(size);
        for (i=0; i<size; i++) ones[i]=1;
        return ones;
    },
    box3 = box(3);

//  Morphological Filter
FILTER.Create({
    name: "MorphologicalFilter"
    
    ,init: function MorphologicalFilter( ) {
        var self = this;
        self._filterName = null;
        self._filter = null;
        self._dim = 0;
        self._dim2 = 0;
        self._iter = 1;
        self._structureElement = null;
        self._indices = null;
        self._structureElement2 = null;
        self._indices2 = null;
        self.mode = MODE.RGB;
    }
    
    ,path: FILTER_FILTERS_PATH
    ,_filterName: null
    ,_filter: null
    ,_dim: 0
    ,_dim2: 0
    ,_iter: 1
    ,_structureElement: null
    ,_indices: null
    ,_structureElement2: null
    ,_indices2: null
    ,mode: MODE.RGB
    
    ,dispose: function( ) {
        var self = this;
        self._filterName = null;
        self._filter = null;
        self._dim = null;
        self._dim2 = null;
        self._iter = null;
        self._structureElement = null;
        self._indices = null;
        self._structureElement2 = null;
        self._indices2 = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             _filterName: self._filterName
            ,_dim: self._dim
            ,_dim2: self._dim2
            ,_iter: self._iter
            ,_structureElement: self._structureElement
            ,_indices: self._indices
            ,_structureElement2: self._structureElement2
            ,_indices2: self._indices2
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self._dim = params._dim;
        self._dim2 = params._dim2;
        self._iter = params._iter;
        self._structureElement = TypedArray( params._structureElement, STRUCT );
        self._indices = TypedArray( params._indices, A32I );
        self._structureElement2 = TypedArray( params._structureElement2, STRUCT );
        self._indices2 = TypedArray( params._indices2, A32I );
        self._filterName = params._filterName;
        if ( self._filterName && MORPHO[ self._filterName ] )
            self._filter = MORPHO[ self._filterName ];
        return self;
    }
    
    ,erode: function( structureElement, structureElement2, iterations ) { 
        return this.set( "erode", structureElement, structureElement2||null, iterations );
    }
    
    ,dilate: function( structureElement, structureElement2, iterations ) { 
        return this.set( "dilate", structureElement, structureElement2||null, iterations );
    }
    
    ,opening: function( structureElement, structureElement2, iterations ) { 
        return this.set( "open", structureElement, structureElement2||null, iterations );
    }
    
    ,closing: function( structureElement, structureElement2, iterations ) { 
        return this.set( "close", structureElement, structureElement2||null, iterations );
    }
    
    ,gradient: function( structureElement ) { 
        return this.set( "gradient", structureElement );
    }
    
    ,laplacian: function( structureElement ) { 
        return this.set( "laplacian", structureElement );
    }
    
    /*,smoothing: function( structureElement ) { 
        // TODO
        return this.set( "smooth", structureElement );
    }*/
    
    ,set: function( filtName, structureElement, structureElement2, iterations ) {
        var self = this;
        self._dim2 = 0;
        self._structureElement2 = null;
        self._indices2 = null;
        self._iter = (iterations|0) || 1;
        self._filterName = filtName;
        self._filter = MORPHO[ filtName ];
        
        if ( structureElement && structureElement.length )
        {
            // structure Element given
            self._structureElement = new STRUCT( structureElement );
            self._dim = (Sqrt(self._structureElement.length)+0.5)|0;
        }
        else if (structureElement && (structureElement === +structureElement) )
        {
            // dimension given
            self._structureElement = box(structureElement);
            self._dim = structureElement;
        }
        else
        {
            // default
            self._structureElement = box3;
            self._dim = 3;
        }
        
        if ( structureElement2 && structureElement2.length )
        {
            // structure Element given
            self._structureElement2 = new STRUCT( structureElement2 );
            self._dim2 = (Sqrt(self._structureElement2.length)+0.5)|0;
        }
        else if (structureElement2 && (structureElement2 === +structureElement2) )
        {
            // dimension given
            self._structureElement2 = box(structureElement2);
            self._dim2 = structureElement2;
        }
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        var indices = [], i, x, y, structureElement = self._structureElement, 
            matArea = structureElement.length, matRadius = self._dim, matHalfSide = matRadius>>>1;
        for(x=0,y=0,i=0; i<matArea; i++,x++)
        { 
            if (x>=matRadius) { x=0; y++; }
            // allow a general structuring element instead of just a box
            if ( structureElement[i] )
            {
                indices.push(x-matHalfSide);
                indices.push(y-matHalfSide);
            }
        }
        self._indices = new A32I(indices);
        
        if ( self._structureElement2 )
        {
            var indices = [], i, x, y, structureElement = self._structureElement2, 
                matArea = structureElement.length, matRadius = self._dim2, matHalfSide = matRadius>>>1;
            for(x=0,y=0,i=0; i<matArea; i++,x++)
            { 
                if (x>=matRadius) { x=0; y++; }
                // allow a general structuring element instead of just a box
                if ( structureElement[i] )
                {
                    indices.push(x-matHalfSide);
                    indices.push(y-matHalfSide);
                }
            }
            self._indices2 = new A32I(indices);
        }
        return self;
    }
    
    ,reset: function( ) {
        var self = this;
        self._filterName = null; 
        self._filter = null; 
        self._dim = 0;
        self._dim2 = 0;
        self._iter = 1;
        self._structureElement = null; 
        self._indices = null;
        self._structureElement2 = null; 
        self._indices2 = null;
        return self;
    }
    
    ,_apply: function( im, w, h ) {
        var self = this;
        if ( !self._dim || !self._filter )  return im;
        return self._filter( self, im, w, h );
    }
        
    ,canRun: function( ) {
        return this._isOn && this._dim && this._filter;
    }
});

// private methods
MORPHO = {
    "dilate": function( self, im, w, h ) {
        var j, indices, coverArea, index, index2 = null, dst = new IMG(im.length);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        // translate to image dimensions the y coordinate
        indices = self._indices; coverArea = indices.length; index = new A32I(coverArea);
        for (j=0; j<coverArea; j+=2){ index[j]=indices[j]; index[j+1]=indices[j+1]*w; }
        if ( self._indices2 )
        {
            indices = self._indices2; coverArea = indices.length; index2 = new A32I(coverArea);
            for (j=0; j<coverArea; j+=2){ index2[j]=indices[j]; index2[j+1]=indices[j+1]*w; }
        }
        
        primitive_morphology_operator( self.mode, im, dst, w, h, 2, index, index2, Math.max, 0, self._iter );
        
        return dst;
    }
    ,"erode": function( self, im, w, h ) {
        var j, indices, coverArea, index, index2 = null, dst = new IMG(im.length);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        // translate to image dimensions the y coordinate
        indices = self._indices; coverArea = indices.length; index = new A32I(coverArea);
        for (j=0; j<coverArea; j+=2){ index[j]=indices[j]; index[j+1]=indices[j+1]*w; }
        if ( self._indices2 )
        {
            indices = self._indices2; coverArea = indices.length; index2 = new A32I(coverArea);
            for (j=0; j<coverArea; j+=2){ index2[j]=indices[j]; index2[j+1]=indices[j+1]*w; }
        }
        
        primitive_morphology_operator( self.mode, im, dst, w, h, 2, index, index2, Math.min, 255, self._iter );
        
        return dst;
    }
    // dilation of erotion
    ,"open": function( self, im, w, h ) {
        var j, indices, coverArea, index, index2 = null, dst = new IMG(im.length);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        // translate to image dimensions the y coordinate
        indices = self._indices; coverArea = indices.length; index = new A32I(coverArea);
        for (j=0; j<coverArea; j+=2){ index[j]=indices[j]; index[j+1]=indices[j+1]*w; }
        if ( self._indices2 )
        {
            indices = self._indices2; coverArea = indices.length; index2 = new A32I(coverArea);
            for (j=0; j<coverArea; j+=2){ index2[j]=indices[j]; index2[j+1]=indices[j+1]*w; }
        }
        
        // erode
        primitive_morphology_operator( self.mode, im, dst, w, h, 2, index, index2, Math.min, 255, self._iter );
        // dilate
        var tmp = im; im = dst; dst = tmp;
        primitive_morphology_operator( self.mode, im, dst, w, h, 2, index, index2, Math.max, 0, self._iter );
        
        return dst;
    }
    // erotion of dilation
    ,"close": function( self, im, w, h ) {
        var j, indices, coverArea, index, index2 = null, dst = new IMG(im.length);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        // translate to image dimensions the y coordinate
        indices = self._indices; coverArea = indices.length; index = new A32I(coverArea2);
        for (j=0; j<coverArea; j+=2){ index[j]=indices[j]; index[j+1]=indices[j+1]*w; }
        if ( self._indices2 )
        {
            indices = self._indices2; coverArea = indices.length; index2 = new A32I(coverArea);
            for (j=0; j<coverArea; j+=2){ index2[j]=indices[j]; index2[j+1]=indices[j+1]*w; }
        }
        
        // dilate
        primitive_morphology_operator( self.mode, im, dst, w, h, 2, index, index2, Math.max, 0, self._iter );
        // erode
        var tmp = im; im = dst; dst = tmp;
        primitive_morphology_operator( self.mode, im, dst, w, h, 2, index, index2, Math.min, 255, self._iter );
        
        return dst;
    }
    // 1/2 (dilation - erosion)
    ,"gradient": function( self, im, w, h ) {
        var j, indices, coverArea, index, index2 = null,
            imLen = im.length, imcpy, dst = new IMG(imLen);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        // translate to image dimensions the y coordinate
        indices = self._indices; coverArea = indices.length; index = new A32I(coverArea);
        for (j=0; j<coverArea; j+=2){ index[j]=indices[j]; index[j+1]=indices[j+1]*w; }
        if ( self._indices2 )
        {
            indices = self._indices2; coverArea = indices.length; index2 = new A32I(coverArea);
            for (j=0; j<coverArea; j+=2){ index2[j]=indices[j]; index2[j+1]=indices[j+1]*w; }
        }
        
        // dilate
        imcpy = new IMGcpy(im);
        primitive_morphology_operator( self.mode, imcpy, dst, w, h, 2, index, index2, Math.max, 0, self._iter );
        // erode
        primitive_morphology_operator( self.mode, im, imcpy, w, h, 2, index, index2, Math.min, 255, self._iter );
        for(j=0; j<imLen; j+=4)
        {
            dst[j  ] = (0.5*dst[j  ]-0.5*imcpy[j  ])|0;
            dst[j+1] = (0.5*dst[j+1]-0.5*imcpy[j+1])|0;
            dst[j+2] = (0.5*dst[j+2]-0.5*imcpy[j+2])|0;
        }
        return dst;
    }
    // 1/2 (dilation + erosion -2IM)
    ,"laplacian": function( self, im, w, h ) {
        var j, indices, coverArea, index, index2 = null,
            imLen = im.length, imcpy, dst = new IMG(imLen), dst2 = new IMG(imLen);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        // translate to image dimensions the y coordinate
        indices = self._indices; coverArea = indices.length; index = new A32I(coverArea);
        for (j=0; j<coverArea; j+=2){ index[j]=indices[j]; index[j+1]=indices[j+1]*w; }
        if ( self._indices2 )
        {
            indices = self._indices2; coverArea = indices.length; index2 = new A32I(coverArea);
            for (j=0; j<coverArea; j+=2){ index2[j]=indices[j]; index2[j+1]=indices[j+1]*w; }
        }
        
        // dilate
        imcpy = new IMGcpy(im);
        primitive_morphology_operator( self.mode, imcpy, dst2, w, h, 2, index, index2, Math.max, 0, self._iter );
        // erode
        imcpy = new IMGcpy(im);
        primitive_morphology_operator( self.mode, imcpy, dst, w, h, 2, index, index2, Math.min, 255, self._iter );
        for(j=0; j<imLen; j+=4)
        {
            dst[j  ] = (0.5*dst[j  ]+0.5*dst2[j  ]-im[j  ])|0;
            dst[j+1] = (0.5*dst[j+1]+0.5*dst2[j+1]-im[j+1])|0;
            dst[j+2] = (0.5*dst[j+2]+0.5*dst2[j+2]-im[j+2])|0;
        }
        return dst;
    }
};

}(FILTER);/**
*
* Statistical Filter(s)
*
* Applies statistical filtering/processing to target image
*
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

// used for internal purposes
var STAT, MODE = FILTER.MODE,IMG = FILTER.ImArray,
    A32I = FILTER.Array32I, A32U = FILTER.Array32U,
    TypedArray = FILTER.Util.Array.typed, Min = Math.min, Max = Math.max;
    
//  Statistical Filter
var StatisticalFilter = FILTER.Create({
    name: "StatisticalFilter"
    
    ,init: function StatisticalFilter( ) {
        var self = this;
        self.d = 0;
        self.k = 0;
        self._gray = false;
        self._filter = null;
        self._indices = null;
        self.mode = MODE.RGB;
    }
    
    ,path: FILTER_FILTERS_PATH
    ,d: 0
    ,k: 0
    ,_filter: null
    ,_indices: null
    ,mode: MODE.RGB
    
    ,dispose: function( ) {
        var self = this;
        self.d = null;
        self.k = null;
        self._filter = null;
        self._indices = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             d: self.d
            ,k: self.k
            ,_filter: self._filter
            ,_indices: self._indices
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.d = params.d;
        self.k = params.k;
        self._filter = params._filter;
        self._indices = TypedArray( params._indices, A32I );
        return self;
    }
    
    ,kth: function( k, d ) { 
        return this.set( null == d ? 3 : (d&1 ? d : d+1), k );
    }
    
    ,median: function( d ) { 
        // allow only odd dimensions for median
        return this.set( null == d ? 3 : (d&1 ? d : d+1), 0.5 );
    }
    
    ,minimum: function( d ) { 
        return this.set( null == d ? 3 : (d&1 ? d : d+1), 0 );
    }
    ,erode: null
    
    ,maximum: function( d ) { 
        return this.set( null == d ? 3 : (d&1 ? d : d+1), 1 );
    }
    ,dilate: null
    
    ,set: function( d, k ) {
        var self = this;
        self.d = d = d||3;
        self.k = k = Min(1, Max(0, k||0));
        self._filter = 0 === k ? "0th" : (1 === k ? "1th" : "kth"); 
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        var i, x, y, matArea2 = (d*d)<<1, dHalf = d>>>1, indices = new A32I(matArea2);
        for(x=0,y=0,i=0; i<matArea2; i+=2,x++)
        { 
            if ( x>=d ) { x=0; y++; }
            indices[i  ] = x-dHalf; indices[i+1] = y-dHalf;
        }
        self._indices = indices;
        return self;
    }
    
    ,reset: function( ) {
        var self = this;
        self.d = 0; 
        self.k = 0; 
        self._filter = null; 
        self._indices = null;
        return self;
    }
    
    // used for internal purposes
    ,_apply: function(im, w, h) {
        var self = this;
        if ( !self.d )  return im;
        return STAT[self._filter]( self, im, w, h );
    }
        
    ,canRun: function( ) {
        return this._isOn && this.d;
    }
});
// aliiases
StatisticalFilter.prototype.erode = StatisticalFilter.prototype.minimum;
StatisticalFilter.prototype.dilate = StatisticalFilter.prototype.maximum;

// private methods
STAT = {
     "1th": function( self, im, w, h ) {
        //"use asm";
        var matRadius = self.d, matHalfSide = matRadius>>1,
            imLen = im.length, imArea = imLen>>>2, dst = new IMG(imLen),
            i, j, x, ty, xOff, yOff, srcOff, r, g, b, rM, gM, bM, bx = w-1, by = imArea-w,
            indices = self._indices, matArea2 = indices.length,
            matArea = matArea2>>>1, imIndex = new A32I(matArea2);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        // translate to image dimensions the y coordinate
        for (j=0; j<matArea2; j+=2) { imIndex[j]=indices[j]; imIndex[j+1]=indices[j+1]*w; }
        
        if ( MODE.GRAY === self.mode )
        {
            for (i=0,x=0,ty=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; ty+=w; }
                for(gM=0,j=0; j<matArea2; j+=2)
                {
                    xOff = x+imIndex[j]; yOff = ty+imIndex[j+1];
                    if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                    srcOff = (xOff + yOff)<<2;
                    g = im[srcOff];
                    // get max
                    if ( g > gM ) gM = g;
                }
                // output
                dst[i] = gM; dst[i+1] = gM; dst[i+2] = gM; dst[i+3] = im[i+3];
            }
        }
        else
        {
            for (i=0,x=0,ty=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; ty+=w; }
                for(rM=gM=bM=0,j=0; j<matArea2; j+=2)
                {
                    xOff = x+imIndex[j]; yOff = ty+imIndex[j+1];
                    if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                    srcOff = (xOff + yOff)<<2;
                    r = im[srcOff]; g = im[srcOff+1]; b = im[srcOff+2];
                    // get max
                    if ( r > rM ) rM = r; if ( g > gM ) gM = g; if ( b > bM ) bM = b;
                }
                // output
                dst[i] = rM; dst[i+1] = gM; dst[i+2] = bM; dst[i+3] = im[i+3];
            }
        }
        return dst;
    }
    ,"0th": function( self, im, w, h ) {
        //"use asm";
        var matRadius = self.d, matHalfSide = matRadius>>1,
            imLen = im.length, imArea = imLen>>>2, dst = new IMG(imLen),
            i, j, x, ty, xOff, yOff, srcOff, r, g, b, rM, gM, bM, bx = w-1, by = imArea-w,
            indices = self._indices, matArea2 = indices.length,
            matArea = matArea2>>>1, imIndex = new A32I(matArea2);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        // translate to image dimensions the y coordinate
        for (j=0; j<matArea2; j+=2) { imIndex[j]=indices[j]; imIndex[j+1]=indices[j+1]*w; }
        
        if ( MODE.GRAY === self.mode )
        {
            for (i=0,x=0,ty=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; ty+=w; }
                for(gM=255,j=0; j<matArea2; j+=2)
                {
                    xOff = x+imIndex[j]; yOff = ty+imIndex[j+1];
                    if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                    srcOff = (xOff + yOff)<<2;
                    g = im[srcOff];
                    // get min
                    if ( g < gM ) gM = g;
                }
                // output
                dst[i] = gM; dst[i+1] = gM; dst[i+2] = gM; dst[i+3] = im[i+3];
            }
        }
        else
        {
            for (i=0,x=0,ty=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; ty+=w; }
                for(rM=gM=bM=255,j=0; j<matArea2; j+=2)
                {
                    xOff = x+imIndex[j]; yOff = ty+imIndex[j+1];
                    if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                    srcOff = (xOff + yOff)<<2;
                    r = im[srcOff]; g = im[srcOff+1]; b = im[srcOff+2];
                    // get min
                    if ( r < rM ) rM = r; if ( g < gM ) gM = g; if ( b < bM ) bM = b;
                }
                // output
                dst[i] = rM; dst[i+1] = gM; dst[i+2] = bM; dst[i+3] = im[i+3];
            }
        }
        return dst;
    }
    ,"kth": function( self, im, w, h ) {
        //"use asm";
        var matRadius = self.d, kth = self.k, matHalfSide = matRadius>>1,
            imLen = im.length, imArea = imLen>>>2, dst = new IMG(imLen),
            i, j, x, ty, xOff, yOff, srcOff, bx = w-1, by = imArea-w,
            r, g, b, rmin, gmin, bmin, rmax, gmax, bmax, kthR, kthG, kthB,
            rhist, ghist, bhist, tot, sum,
            indices = self._indices, matArea2 = indices.length,
            matArea = matArea2>>>1, imIndex = new A32I(matArea2);
        
        // pre-compute indices, 
        // reduce redundant computations inside the main convolution loop (faster)
        // translate to image dimensions the y coordinate
        for (j=0; j<matArea2; j+=2) { imIndex[j]=indices[j]; imIndex[j+1]=indices[j+1]*w; }
        
        if ( MODE.GRAY === self.mode )
        {
            ghist = new A32U(256/*268*/);
            for (i=0,x=0,ty=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; ty+=w; }

                tot=0; gmin=255; gmax=0;
                for(j=0; j<matArea2; j+=2)
                {
                    xOff = x+imIndex[j]; yOff = ty+imIndex[j+1];
                    if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                    srcOff = (xOff + yOff)<<2;
                    g = im[srcOff];
                    if ( g < gmin ) gmin = g; if ( g > gmax ) gmax = g;
                    // compute histogram, similar to counting sort
                    tot++; ghist[g]++;
                }
                
                // search histogram for kth statistic
                // and also reset histogram for next round
                // can it be made faster??
                tot *= kth;
                for(sum=0,kthG=-1,j=gmin; j<=gmax; j++)
                {
                    sum += ghist[j]; ghist[j] = 0;
                    if ( 0 > kthG && sum >= tot ) kthG = j;
                }
                
                // output
                dst[i] = kthG; dst[i+1] = kthG; dst[i+2] = kthG; dst[i+3] = im[i+3];
            }
        }
        else
        {
            rhist = new A32U(256/*268*/);
            ghist = new A32U(256/*268*/);
            bhist = new A32U(256/*268*/);
            for (i=0,x=0,ty=0; i<imLen; i+=4,x++)
            {
                if (x>=w) { x=0; ty+=w; }

                tot=0; rmin=gmin=bmin=255; rmax=gmax=bmax=0;
                for(j=0; j<matArea2; j+=2)
                {
                    xOff = x+imIndex[j]; yOff = ty+imIndex[j+1];
                    if (xOff<0 || xOff>bx || yOff<0 || yOff>by) continue;
                    srcOff = (xOff + yOff)<<2;
                    r = im[srcOff]; g = im[srcOff+1]; b = im[srcOff+2]; 
                    // compute histogram, similar to counting sort
                    //rhist[(r>>>6)&3]++; ghist[(g>>>6)&3]++; bhist[(b>>>6)&3]++;
                    //rhist[4+((r>>>4)&3)]++; ghist[4+((g>>>4)&3)]++; bhist[4+((b>>>4)&3)]++;
                    //rhist[8+((r>>>2)&3)]++; ghist[8+((g>>>2)&3)]++; bhist[8+((b>>>2)&3)]++;
                    rhist[/*12+*/r]++; ghist[/*12+*/g]++; bhist[/*12+*/b]++; tot++;
                    if ( r < rmin ) rmin = r; if ( g < gmin ) gmin = g; if ( b < bmin ) bmin = b;
                    if ( r > rmax ) rmax = r; if ( g > gmax ) gmax = g; if ( b > bmax ) bmax = b;
                }
                
                // search histogram for kth statistic
                // and also reset histogram for next round
                // can it be made faster??
                tot *= kth;
                for(sum=0,kthR=-1,j=rmin; j<=rmax; j++)
                {
                    sum += rhist[j]; rhist[j] = 0;
                    if ( 0 > kthR && sum >= tot ) kthR = j;
                }
                for(sum=0,kthG=-1,j=gmin; j<=gmax; j++)
                {
                    sum += ghist[j]; ghist[j] = 0;
                    if ( 0 > kthG && sum >= tot ) kthG = j;
                }
                for(sum=0,kthB=-1,j=bmin; j<=bmax; j++)
                {
                    sum += bhist[j]; bhist[j] = 0;
                    if ( 0 > kthB && sum >= tot ) kthB = j;
                }
                
                // output
                dst[i] = kthR; dst[i+1] = kthG; dst[i+2] = kthB; dst[i+3] = im[i+3];
            }
        }
        return dst;
    }
};

}(FILTER);/**
*
* Inline Filter(s)
*
* Allows to create an filter on-the-fly using an inline function
*
* @param handler Optional (the filter apply routine)
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var HAS = 'hasOwnProperty';

//
//  Inline Filter 
//  used as a placeholder for constructing filters inline with an anonymous function
FILTER.Create({
    name: "InlineFilter"
    
    ,init: function InlineFilter( filter, params ) {
        var self = this;
        self._params = {};
        self.set( filter, params );
    }
    
    ,path: FILTER_FILTERS_PATH
    ,_filter: null
    ,_params: null
    ,_changed: false
    
    ,dispose: function( ) {
        var self = this;
        self._filter = null;
        self._params = null;
        self._changed = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this, json;
        json = {
             _filter: false === self._filter ? false : (self._changed && self._filter ? self._filter.toString( ) : null)
            ,_params: self._params
        };
        self._changed = false;
        return json;
    }
    
    ,unserialize: function( params ) {
        var self = this;
        if ( null != params._filter )
            // using bind makes the code become [native code] and thus unserializable
            // make FILTER namespace accessible to the function code
            self._filter = false === params._filter ? null : new Function( "FILTER", '"use strict"; return ' + params._filter + ';')( FILTER );
        self._params = params._params || {};
        return self;
    }
    
    ,params: function( params ) {
        var self = this;
        if ( arguments.length )
        {
            for (var p in params) if ( params[HAS](p) ) self._params[p] = params[p];
            return self;
        }
        return self._params;
    }
    
    ,set: function( filter, params ) {
        var self = this;
        if ( false === filter )
        {
            self._filter = false;
            self._changed = true;
        }
        else
        {
            if ( "function" === typeof filter )
            {
                self._filter = filter;
                self._changed = true;
            }
            if ( params ) self.params( params );
        }
        return self;
    }
    
    ,_apply: function( im, w, h, metaData ) {
        var self = this;
        if ( !self._filter ) return im;
        return self._filter( self._params, im, w, h, metaData );
    }
        
    ,canRun: function( ) {
        return this._isOn && this._filter;
    }
});
FILTER.CustomFilter = FILTER.InlineFilter;

}(FILTER);/**
*
* Dimension Filter
*
* Filter that alters image dimensions by croping, sampling and padding or any combination thereof for further processing
*
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var max = Math.max, min = Math.min, round = Math.round;

//  Dimension (crop-sample-pad) Filter
FILTER.Create({
    name: "DimensionFilter"
    
    ,crop: null
    ,scale: null
    ,pad: null
    
    ,init: function DimensionFilter( crop, scale, pad ) {
        var self = this;
        self.crop = crop || null;
        self.scale = scale || null;
        self.pad = pad || null;
    }
    
    ,path: FILTER_FILTERS_PATH
    
    ,dispose: function( ) {
        var self = this;
        self.crop = null;
        self.scale = null;
        self.pad = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             crop: self.crop || null
            ,scale: self.scale || null
            ,pad: self.pad || null
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.crop = params.crop;
        self.scale = params.scale;
        self.pad = params.pad;
        return self;
    }
    
    ,_apply: function( im, w, h ) {
        var self = this, nw = w, nh = h,
            crop = null, scale = self.scale||null, pad = self.pad||null,
            sx, sy, sw, sh, interpolate, x1, y1, x2, y2,
            pad_right, pad_bot, pad_left, pad_top;
        
        if ( !self.crop && self.selection ) crop = self.selection;
        else if ( self.crop /*&& !self.selection*/ ) crop = self.crop;
        
        self.hasMeta = false; self.meta = null;
        if ( !crop && !scale && !pad ) return im;
        
        if ( crop )
        {
            if ( crop[4] )
            {
                // crop selection is relative, make absolute
                x1 = min(w-1,max(0, round( crop[0]*(w-1) )));
                y1 = min(h-1,max(0, round( crop[1]*(h-1) )));
                x2 = min(w-1,max(0, round( crop[2]*(w-1) )));
                y2 = min(h-1,max(0, round( crop[3]*(h-1) )));
            }
            else
            {
                // crop selection is absolute
                x1 = min(w-1,max(0, round( crop[0] )));
                y1 = min(h-1,max(0, round( crop[1] )));
                x2 = min(w-1,max(0, round( crop[2] )));
                y2 = min(h-1,max(0, round( crop[3] )));
            }
            if ( (0 === x1) && (0 === y1) && (nw === x2+1) && (nh === y2+1) )
            {
                /* nothing */
            }
            else
            {
                im = FILTER.Util.Image.get_data( im, nw, nh, x1, y1, x2, y2, true );
                nw = x2-x1+1; nh = y2-y1+1;
            }
        }
        if ( scale )
        {
            sx = scale[0];
            sy = scale[1];
            interpolate = FILTER.Interpolation[scale[2]||"bilinear"];
            
            if ( !interpolate || ((1 === sx) && (1 === sy)) )
            {
                /* nothing */
            }
            else
            {
                sw = round( sx*nw ); sh = round( sy*nh );
                im = interpolate( im, nw, nh, sw, sh );
                nw = sw; nh = sh;
            }
        }
        if ( pad )
        {
            pad_left  = round( pad[0]||0 );
            pad_right = round( pad[2]||0 );
            pad_top   = round( pad[1]||0 );
            pad_bot   = round( pad[3]||0 );
            
            if ( (0 === pad_left) && (0 === pad_right) && (0 === pad_top) && (0 === pad_bot) )
            {
                /* nothing */
            }
            else
            {
                im = FILTER.Util.Image.pad( im, nw, nh, pad_right, pad_bot, pad_left, pad_top );
                nw += pad_left+pad_right; nh += pad_bot+pad_top;
            }
        }
        if ( (nw !== w) || (nh !== h) )
        {
            self.hasMeta = true;
            self.meta = {_IMG_WIDTH: nw, _IMG_HEIGHT: nh};
        }
        return im;
    }
});
// aliases
FILTER.InterpolationFilter = FILTER.ResizeFilter = FILTER.RescaleFilter = FILTER.ResampleFilter = FILTER.PadFilter = FILTER.CropFilter = FILTER.SubSelectionFilter = FILTER.SelectionFilter = FILTER.SelectFilter = FILTER.DimensionFilter;

}(FILTER);
/* main code ends here */
/* export the module */
return FILTER;
});
/**
*
*   FILTER.js Plugins
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (Plugins)
*   https://github.com/foo123/FILTER.js
*
**/!function( root, factory ){
"use strict";
if ( ('object'===typeof module) && module.exports ) /* CommonJS */
    module.exports = factory.call(root,(module.$deps && module.$deps["FILTER"]) || require("./FILTER".toLowerCase()));
else if ( ("function"===typeof define) && define.amd && ("function"===typeof require) && ("function"===typeof require.specified) && require.specified("FILTER_PLUGINS") /*&& !require.defined("FILTER_PLUGINS")*/ ) 
    define("FILTER_PLUGINS",['module',"FILTER"],function(mod,module){factory.moduleUri = mod.uri; factory.call(root,module); return module;});
else /* Browser/WebWorker/.. */
    (factory.call(root,root["FILTER"])||1)&&('function'===typeof define)&&define.amd&&define(function(){return root["FILTER"];} );
}(  /* current root */          this, 
    /* module factory */        function ModuleFactory__FILTER_PLUGINS( FILTER ){
/* main code starts here */

/**
*
*   FILTER.js Plugins
*   @version: 0.9.7
*   @dependencies: Filter.js
*
*   JavaScript Image Processing Library (Plugins)
*   https://github.com/foo123/FILTER.js
*
**/
"use strict";
var FILTER_PLUGINS_PATH = FILTER.getPath( ModuleFactory__FILTER_PLUGINS.moduleUri );

/**
*
* Noise Plugin
* @package FILTER.js
*
**/
!function(FILTER){
"use strict";

var notSupportClamp = FILTER._notSupportClamp;

// a sample noise filter
// used for illustration purposes on how to create a plugin filter
FILTER.Create({
    name: "NoiseFilter"
    
    // parameters
    ,min: -127
    ,max: 127
    
    // this is the filter constructor
    ,init: function( min, max ) {
        var self = this;
        self.min = min||-127;
        self.max = max||127;
    }
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    ,serialize: function( ) {
        var self = this;
        return {
             min: self.min
            ,max: self.max
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.min = params.min;
        self.max = params.max;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function(im, w, h) {
        // im is a copy of the image data as an image array
        // w is image width, h is image height
        // image is the original image instance reference, generally not needed
        // for this filter, no need to clone the image data, operate in-place
        var self = this;
        var rand = FILTER.Util.Math.random, range = self.max-self.min,
            m = self.min, i, l = im.length, n, r, g, b, t0, t1, t2;
        
        // add noise
        if (notSupportClamp)
        {   
            for (i=0; i<l; i+=4)
            { 
                r = im[i]; g = im[i+1]; b = im[i+2];
                n = range*rand()+m;
                t0 = r+n; t1 = g+n; t2 = b+n; 
                // clamp them manually
                if (t0<0) t0=0;
                else if (t0>255) t0=255;
                if (t1<0) t1=0;
                else if (t1>255) t1=255;
                if (t2<0) t2=0;
                else if (t2>255) t2=255;
                im[i] = t0|0; im[i+1] = t1|0; im[i+2] = t2|0;
            }
        }
        else
        {
            for (i=0; i<l; i+=4)
            { 
                r = im[i]; g = im[i+1]; b = im[i+2];
                n = range*rand()+m;
                t0 = r+n; t1 = g+n; t2 = b+n; 
                im[i] = t0|0; im[i+1] = t1|0; im[i+2] = t2|0;
            }
        }
        
        // return the new image data
        return im;
    }
});

}(FILTER);/**
*
* Perlin Noise Plugin
* @package FILTER.js
*
**/
!function(FILTER){
"use strict";

var MODE = FILTER.MODE;

// an efficient perlin noise and simplex noise plugin
// http://en.wikipedia.org/wiki/Perlin_noise
FILTER.Create({
    name: "PerlinNoiseFilter"
    
    // parameters
    ,mode: MODE.GRAY
    ,_baseX: 1
    ,_baseY: 1
    ,_octaves: 1
    ,_offsets: null
    ,_seed: 0
    ,_stitch: false
    ,_fractal: true
    ,_perlin: false
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    // constructor
    ,init: function( baseX, baseY, octaves, stitch, fractal, offsets, seed, use_perlin ) {
        var self = this;
        self.mode = MODE.GRAY;
        self._baseX = baseX || 1;
        self._baseY = baseY || 1;
        self._seed = seed || 0;
        self._stitch = !!stitch;
        self._fractal = false !== fractal;
        self._perlin = !!use_perlin;
        self.octaves( octaves||1, offsets );
    }
    
    ,seed: function( randSeed ) {
        var self = this;
        self._seed = randSeed || 0;
        return self;
    }
    
    ,octaves: function( octaves, offsets ) {
        var self = this;
        self._octaves = octaves || 1;
        self._offsets = !offsets ? [] : offsets.slice(0);
        while (self._offsets.length < self._octaves) self._offsets.push([0,0]);
        return self;
    }
    
    ,seamless: function( enabled ) {
        if ( !arguments.length ) enabled = true;
        this._stitch = !!enabled;
        return this;
    }
    
    ,colors: function( enabled ) {
        if ( !arguments.length ) enabled = true;
        this.mode = !!enabled ? MODE.COLOR : MODE.GRAY;
        return this;
    }
    
    ,turbulence: function( enabled ) {
        if ( !arguments.length ) enabled = true;
        this._fractal = !enabled;
        return this;
    }
    
    ,simplex: function( ) {
        this._perlin = false;
        return this;
    }
    
    ,perlin: function( ) {
        this._perlin = true;
        return this;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             _baseX: self._baseX
            ,_baseY: self._baseY
            ,_octaves: self._octaves
            ,_offsets: self._offsets
            ,_seed: self._seed || 0
            ,_stitch: self._stitch
            ,_fractal: self._fractal
            ,_perlin: self._perlin
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self._baseX = params._baseX;
        self._baseY = params._baseY;
        self._octaves = params._octaves;
        self._offsets = params._offsets;
        self._seed = params._seed || 0;
        self._stitch = params._stitch;
        self._fractal = params._fractal;
        self._perlin = params._perlin;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function(im, w, h) {
        var self = this, perlin_noise = FILTER.Util.Image.perlin;
        if ( !perlin_noise ) return im;
        if ( self._seed )
        {
            perlin_noise.seed( self._seed );
            self._seed = 0;
        }
        return perlin_noise( im, w, h, self._stitch, MODE.COLOR !== self.mode, self._baseX, self._baseY, self._octaves, self._offsets, 1.0, 0.5, self._perlin );
    }
});

}(FILTER);/**
*
* Filter Linear-Gradient, Radial-Gradient plugins
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var MODE = FILTER.MODE, TypedArray = FILTER.Util.Array.typed, Floor = Math.floor;

FILTER.Create({
     name: "GradientFilter"
    
    // parameters
    ,colors: null
    ,stops: null
    ,angle: 0
    ,centerX: 0.0
    ,centerY: 0.0
    ,radiusX: 1.0
    ,radiusY: 1.0
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    ,dispose: function( ) {
        var self = this;
        self.colors = null;
        self.stops = null;
        self.angle = null;
        self.centerX = null;
        self.centerY = null;
        self.radiusX = null;
        self.radiusY = null;
        self.$super('dispose');
        return self;
    }
    
    ,setColors: function( colors, stops ) {
        var self = this;
        if ( colors && colors.length )
        {
            var c = FILTER.Color.Gradient.stops( colors, stops );
            self.colors = c[0]; self.stops = c[1];
        }
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             angle: self.angle
            ,centerX: self.centerX
            ,centerY: self.centerY
            ,radiusX: self.radiusX
            ,radiusY: self.radiusY
            ,colors: self.colors
            ,stops: self.stops
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.angle = params.angle || 0;
        self.centerX = params.centerX || 0.0;
        self.centerY = params.centerY || 0.0;
        self.radiusX = params.radiusX || 1.0;
        self.radiusY = params.radiusY || 1.0;
        self.colors = TypedArray( params.colors, Array );
        self.stops = TypedArray( params.stops, Array );
        return self;
    }
    
    ,linear: function( colors, stops, angle ) {
        var self = this;
        self.mode = MODE.LINEAR;
        self.setColors( colors, stops );
        self.angle = angle||0;
        return self;
    }
    
    ,radial: function( colors, stops, centerX, centerY, radiusX, radiusY ) {
        var self = this;
        self.mode = MODE.RADIAL;
        self.setColors( colors, stops );
        self.centerX = centerX||0.0;
        self.centerY = centerY||0.0;
        self.radiusX = radiusX||1.0;
        self.radiusY = radiusY||1.0;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function( im, w, h ) {
        var self = this;
        if ( !self.colors ) return im;
        return MODE.RADIAL === self.mode ? FILTER.Color.Gradient.radial( im, w, h, self.colors, self.stops, Floor((self.centerX||0.0)*(w-1)), Floor((self.centerY||0.0)*(h-1)), self.radiusX, self.radiusY, FILTER.Color.Gradient.interpolate ) : FILTER.Color.Gradient.linear( im, w, h, self.colors, self.stops, self.angle, FILTER.Color.Gradient.interpolate );
    }
});

}(FILTER);/**
*
* Channel Copy Plugin
* @package FILTER.js
*
**/
!function(FILTER){
"use strict";

var Min = Math.min, Floor = Math.floor, CHANNEL = FILTER.CHANNEL, MODE = FILTER.MODE;

// a plugin to copy a channel of an image to a channel of another image
FILTER.Create({
    name: "ChannelCopyFilter"
    
    // parameters
    ,srcChannel: CHANNEL.R
    ,dstChannel: CHANNEL.R
    ,centerX: 0
    ,centerY: 0
    ,color: 0
    ,hasInputs: true
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    // constructor
    ,init: function( srcChannel, dstChannel, centerX, centerY, color ) {
        var self = this;
        self.srcChannel = srcChannel || CHANNEL.R;
        self.dstChannel = dstChannel || CHANNEL.R;
        self.centerX = centerX || 0;
        self.centerY = centerY || 0;
        self.color = color || 0;
    }
    
    ,dispose: function( ) {
        var self = this;
        self.srcChannel = null;
        self.dstChannel = null;
        self.centerX = null;
        self.centerY = null;
        self.color = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             srcChannel: self.srcChannel
            ,dstChannel: self.dstChannel
            ,centerX: self.centerX
            ,centerY: self.centerY
            ,color: self.color
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.srcChannel = params.srcChannel;
        self.dstChannel = params.dstChannel;
        self.centerX = params.centerX;
        self.centerY = params.centerY;
        self.color = params.color;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function(im, w, h) {
        var self = this, Src;
        Src = self.input("source"); if ( !Src ) return im;
        
        var src = Src[0], w2 = Src[1], h2 = Src[2],
            i, l = im.length, l2 = src.length, 
            sC = self.srcChannel, tC = self.dstChannel,
            x, x2, y, y2, off, xc, yc,
            cX = self.centerX||0, cY = self.centerY||0, cX2 = w2>>>1, cY2 = h2>>>1,
            wm = Min(w,w2), hm = Min(h, h2),  
            color = self.color||0, r, g, b, a,
            mode = self.mode, COLOR32 = MODE.COLOR32, COLOR8 = MODE.COLOR8,
            MASK32 = MODE.COLORMASK32, MASK8 = MODE.COLORMASK8;
        
        if ( COLOR32 === mode || MASK32 === mode )
        {
            a = (color >>> 24)&255;
            r = (color >>> 16)&255;
            g = (color >>> 8)&255;
            b = (color)&255;
        }
        else if ( COLOR8 === mode || MASK8 === mode )
        {
            color &= 255;
        }
        
        // make center relative
        cX = Floor(cX*(w-1)) - cX2;
        cY = Floor(cY*(h-1)) - cY2;
        
        for (x=0,y=0,i=0; i<l; i+=4,x++)
        {
            if (x>=w) { x=0; y++; }
            
            xc = x - cX; yc = y - cY;
            if (xc<0 || xc>=wm || yc<0 || yc>=hm)
            {
                if ( COLOR32 === mode ) { im[i  ] = r; im[i+1] = g; im[i+2] = b; im[i+3] = a; }
                else if ( MASK32 === mode ) { im[i  ] = r & im[i  ]; im[i+1] = g & im[i+1]; im[i+2] = b & im[i+2]; im[i+3] = a & im[i+3]; }
                else if ( COLOR8 === mode ) im[i+tC] = color;
                else if ( MASK8 === mode ) im[i+tC] = color & im[i+sC];
                // else ignore
            }
            else
            {
                // copy channel
                off = (xc + yc*w2)<<2;
                im[i + tC] = src[off + sC];
            }
        }
        // return the new image data
        return im;
    }
});

}(FILTER);/**
*
* Histogram Equalize Plugin, Histogram Equalize for grayscale images Plugin, RGB Histogram Equalize Plugin
* @package FILTER.js
*
**/
!function(FILTER){
"use strict";

var notSupportClamp = FILTER._notSupportClamp, A32F = FILTER.Array32F,
    MODE = FILTER.MODE, Min = Math.min, Max = Math.max;

// a simple histogram equalizer filter  http://en.wikipedia.org/wiki/Histogram_equalization
FILTER.Create({
    name : "HistogramEqualizeFilter"
    
    ,path: FILTER_PLUGINS_PATH
    
    ,mode: MODE.INTENSITY
    
    ,init: function( mode ) {
        var self = this;
        self.mode = mode || MODE.INTENSITY;
    }
    
    ,_apply_rgb: function( im, w, h ) {
        var self = this,
            r,g,b, rangeR, rangeG, rangeB,
            maxR=0, maxG=0, maxB=0, minR=255, minG=255, minB=255,
            cdfR, cdfG, cdfB,
            accumR, accumG, accumB, t0, t1, t2,
            i, l=im.length, l2=l>>>2;
        
        // initialize the arrays
        cdfR=new A32F(256); cdfG=new A32F(256); cdfB=new A32F(256);
        // compute pdf and maxima/minima
        for (i=0; i<l; i+=4)
        {
            r = im[i]; g = im[i+1]; b = im[i+2];
            cdfR[r]++; cdfG[g]++; cdfB[b]++;
            maxR = Max(r, maxR);
            maxG = Max(g, maxG);
            maxB = Max(b, maxB);
            minR = Min(r, minR);
            minG = Min(g, minG);
            minB = Min(b, minB);
        }
        
        // compute cdf
        for (accumR=accumG=accumB=0,i=0; i<256; i+=32)
        { 
            // partial loop unrolling
            accumR += cdfR[i   ]; cdfR[i   ] = accumR;
            accumR += cdfR[i+1 ]; cdfR[i+1 ] = accumR;
            accumR += cdfR[i+2 ]; cdfR[i+2 ] = accumR;
            accumR += cdfR[i+3 ]; cdfR[i+3 ] = accumR;
            accumR += cdfR[i+4 ]; cdfR[i+4 ] = accumR;
            accumR += cdfR[i+5 ]; cdfR[i+5 ] = accumR;
            accumR += cdfR[i+6 ]; cdfR[i+6 ] = accumR;
            accumR += cdfR[i+7 ]; cdfR[i+7 ] = accumR;
            accumR += cdfR[i+8 ]; cdfR[i+8 ] = accumR;
            accumR += cdfR[i+9 ]; cdfR[i+9 ] = accumR;
            accumR += cdfR[i+10]; cdfR[i+10] = accumR;
            accumR += cdfR[i+11]; cdfR[i+11] = accumR;
            accumR += cdfR[i+12]; cdfR[i+12] = accumR;
            accumR += cdfR[i+13]; cdfR[i+13] = accumR;
            accumR += cdfR[i+14]; cdfR[i+14] = accumR;
            accumR += cdfR[i+15]; cdfR[i+15] = accumR;
            accumR += cdfR[i+16]; cdfR[i+16] = accumR;
            accumR += cdfR[i+17]; cdfR[i+17] = accumR;
            accumR += cdfR[i+18]; cdfR[i+18] = accumR;
            accumR += cdfR[i+19]; cdfR[i+19] = accumR;
            accumR += cdfR[i+20]; cdfR[i+20] = accumR;
            accumR += cdfR[i+21]; cdfR[i+21] = accumR;
            accumR += cdfR[i+22]; cdfR[i+22] = accumR;
            accumR += cdfR[i+23]; cdfR[i+23] = accumR;
            accumR += cdfR[i+24]; cdfR[i+24] = accumR;
            accumR += cdfR[i+25]; cdfR[i+25] = accumR;
            accumR += cdfR[i+26]; cdfR[i+26] = accumR;
            accumR += cdfR[i+27]; cdfR[i+27] = accumR;
            accumR += cdfR[i+28]; cdfR[i+28] = accumR;
            accumR += cdfR[i+29]; cdfR[i+29] = accumR;
            accumR += cdfR[i+30]; cdfR[i+30] = accumR;
            accumR += cdfR[i+31]; cdfR[i+31] = accumR;
        
            accumG += cdfG[i   ]; cdfG[i   ] = accumG;
            accumG += cdfG[i+1 ]; cdfG[i+1 ] = accumG;
            accumG += cdfG[i+2 ]; cdfG[i+2 ] = accumG;
            accumG += cdfG[i+3 ]; cdfG[i+3 ] = accumG;
            accumG += cdfG[i+4 ]; cdfG[i+4 ] = accumG;
            accumG += cdfG[i+5 ]; cdfG[i+5 ] = accumG;
            accumG += cdfG[i+6 ]; cdfG[i+6 ] = accumG;
            accumG += cdfG[i+7 ]; cdfG[i+7 ] = accumG;
            accumG += cdfG[i+8 ]; cdfG[i+8 ] = accumG;
            accumG += cdfG[i+9 ]; cdfG[i+9 ] = accumG;
            accumG += cdfG[i+10]; cdfG[i+10] = accumG;
            accumG += cdfG[i+11]; cdfG[i+11] = accumG;
            accumG += cdfG[i+12]; cdfG[i+12] = accumG;
            accumG += cdfG[i+13]; cdfG[i+13] = accumG;
            accumG += cdfG[i+14]; cdfG[i+14] = accumG;
            accumG += cdfG[i+15]; cdfG[i+15] = accumG;
            accumG += cdfG[i+16]; cdfG[i+16] = accumG;
            accumG += cdfG[i+17]; cdfG[i+17] = accumG;
            accumG += cdfG[i+18]; cdfG[i+18] = accumG;
            accumG += cdfG[i+19]; cdfG[i+19] = accumG;
            accumG += cdfG[i+20]; cdfG[i+20] = accumG;
            accumG += cdfG[i+21]; cdfG[i+21] = accumG;
            accumG += cdfG[i+22]; cdfG[i+22] = accumG;
            accumG += cdfG[i+23]; cdfG[i+23] = accumG;
            accumG += cdfG[i+24]; cdfG[i+24] = accumG;
            accumG += cdfG[i+25]; cdfG[i+25] = accumG;
            accumG += cdfG[i+26]; cdfG[i+26] = accumG;
            accumG += cdfG[i+27]; cdfG[i+27] = accumG;
            accumG += cdfG[i+28]; cdfG[i+28] = accumG;
            accumG += cdfG[i+29]; cdfG[i+29] = accumG;
            accumG += cdfG[i+30]; cdfG[i+30] = accumG;
            accumG += cdfG[i+31]; cdfG[i+31] = accumG;
        
            accumB += cdfB[i   ]; cdfB[i   ] = accumB;
            accumB += cdfB[i+1 ]; cdfB[i+1 ] = accumB;
            accumB += cdfB[i+2 ]; cdfB[i+2 ] = accumB;
            accumB += cdfB[i+3 ]; cdfB[i+3 ] = accumB;
            accumB += cdfB[i+4 ]; cdfB[i+4 ] = accumB;
            accumB += cdfB[i+5 ]; cdfB[i+5 ] = accumB;
            accumB += cdfB[i+6 ]; cdfB[i+6 ] = accumB;
            accumB += cdfB[i+7 ]; cdfB[i+7 ] = accumB;
            accumB += cdfB[i+8 ]; cdfB[i+8 ] = accumB;
            accumB += cdfB[i+9 ]; cdfB[i+9 ] = accumB;
            accumB += cdfB[i+10]; cdfB[i+10] = accumB;
            accumB += cdfB[i+11]; cdfB[i+11] = accumB;
            accumB += cdfB[i+12]; cdfB[i+12] = accumB;
            accumB += cdfB[i+13]; cdfB[i+13] = accumB;
            accumB += cdfB[i+14]; cdfB[i+14] = accumB;
            accumB += cdfB[i+15]; cdfB[i+15] = accumB;
            accumB += cdfB[i+16]; cdfB[i+16] = accumB;
            accumB += cdfB[i+17]; cdfB[i+17] = accumB;
            accumB += cdfB[i+18]; cdfB[i+18] = accumB;
            accumB += cdfB[i+19]; cdfB[i+19] = accumB;
            accumB += cdfB[i+20]; cdfB[i+20] = accumB;
            accumB += cdfB[i+21]; cdfB[i+21] = accumB;
            accumB += cdfB[i+22]; cdfB[i+22] = accumB;
            accumB += cdfB[i+23]; cdfB[i+23] = accumB;
            accumB += cdfB[i+24]; cdfB[i+24] = accumB;
            accumB += cdfB[i+25]; cdfB[i+25] = accumB;
            accumB += cdfB[i+26]; cdfB[i+26] = accumB;
            accumB += cdfB[i+27]; cdfB[i+27] = accumB;
            accumB += cdfB[i+28]; cdfB[i+28] = accumB;
            accumB += cdfB[i+29]; cdfB[i+29] = accumB;
            accumB += cdfB[i+30]; cdfB[i+30] = accumB;
            accumB += cdfB[i+31]; cdfB[i+31] = accumB;
        }
        
        // equalize each channel separately
        rangeR=(maxR-minR)/l2; rangeG=(maxG-minG)/l2; rangeB=(maxB-minB)/l2;
        if (notSupportClamp)
        {   
            for (i=0; i<l; i+=4)
            { 
                r = im[i]; g = im[i+1]; b = im[i+2]; 
                t0 = cdfR[r]*rangeR + minR; t1 = cdfG[g]*rangeG + minG; t2 = cdfB[b]*rangeB + minB; 
                // clamp them manually
                t0 = t0<0 ? 0 : (t0>255 ? 255 : t0);
                t1 = t1<0 ? 0 : (t1>255 ? 255 : t1);
                t2 = t2<0 ? 0 : (t2>255 ? 255 : t2);
                im[i] = ~~t0; im[i+1] = ~~t1; im[i+2] = ~~t2; 
            }
        }
        else
        {
            for (i=0; i<l; i+=4)
            { 
                r = im[i]; g = im[i+1]; b = im[i+2]; 
                t0 = cdfR[r]*rangeR + minR; t1 = cdfG[g]*rangeG + minG; t2 = cdfB[b]*rangeB + minB; 
                im[i] = ~~t0; im[i+1] = ~~t1; im[i+2] = ~~t2; 
            }
        }
        // return the new image data
        return im;
    }
    
    ,apply: function( im, w, h ) {
        var self = this;
        
        if ( MODE.RGB === self.mode ) return self._apply_rgb( im, w, h );
        
        var r, g, b, y, cb, cr, range, max = 0, min = 255,
            cdf, accum, i, l = im.length, l2 = l>>>2,
            is_grayscale = MODE.GRAY === self.mode;
        
        // initialize the arrays
        cdf = new A32F( 256 );
        // compute pdf and maxima/minima
        if ( is_grayscale )
        {
            for (i=0; i<l; i+=4)
            {
                r = im[i];
                cdf[ r ]++;
                max = Max(r, max);
                min = Min(r, min);
            }
        }
        else
        {
            for (i=0; i<l; i+=4)
            {
                r = im[i]; g = im[i+1]; b = im[i+2];
                y =  ~~(0   + 0.299*r    + 0.587*g     + 0.114*b);
                cb = ~~(128 - 0.168736*r - 0.331264*g  + 0.5*b);
                cr = ~~(128 + 0.5*r      - 0.418688*g  - 0.081312*b);
                // clamp them manually
                cr = cr<0 ? 0 : (cr>255 ? 255 : cr);
                y = y<0 ? 0 : (y>255 ? 255 : y);
                cb = cb<0 ? 0 : (cb>255 ? 255 : cb);
                im[i] = cr; im[i+1] = y; im[i+2] = cb;
                cdf[ y ]++;
                max = Max(y, max);
                min = Min(y, min);
            }
        }
        
        // compute cdf
        for (accum=0,i=0; i<256; i+=32)
        { 
            // partial loop unrolling
            accum += cdf[i   ]; cdf[i   ] = accum;
            accum += cdf[i+1 ]; cdf[i+1 ] = accum;
            accum += cdf[i+2 ]; cdf[i+2 ] = accum;
            accum += cdf[i+3 ]; cdf[i+3 ] = accum;
            accum += cdf[i+4 ]; cdf[i+4 ] = accum;
            accum += cdf[i+5 ]; cdf[i+5 ] = accum;
            accum += cdf[i+6 ]; cdf[i+6 ] = accum;
            accum += cdf[i+7 ]; cdf[i+7 ] = accum;
            accum += cdf[i+8 ]; cdf[i+8 ] = accum;
            accum += cdf[i+9 ]; cdf[i+9 ] = accum;
            accum += cdf[i+10]; cdf[i+10] = accum;
            accum += cdf[i+11]; cdf[i+11] = accum;
            accum += cdf[i+12]; cdf[i+12] = accum;
            accum += cdf[i+13]; cdf[i+13] = accum;
            accum += cdf[i+14]; cdf[i+14] = accum;
            accum += cdf[i+15]; cdf[i+15] = accum;
            accum += cdf[i+16]; cdf[i+16] = accum;
            accum += cdf[i+17]; cdf[i+17] = accum;
            accum += cdf[i+18]; cdf[i+18] = accum;
            accum += cdf[i+19]; cdf[i+19] = accum;
            accum += cdf[i+20]; cdf[i+20] = accum;
            accum += cdf[i+21]; cdf[i+21] = accum;
            accum += cdf[i+22]; cdf[i+22] = accum;
            accum += cdf[i+23]; cdf[i+23] = accum;
            accum += cdf[i+24]; cdf[i+24] = accum;
            accum += cdf[i+25]; cdf[i+25] = accum;
            accum += cdf[i+26]; cdf[i+26] = accum;
            accum += cdf[i+27]; cdf[i+27] = accum;
            accum += cdf[i+28]; cdf[i+28] = accum;
            accum += cdf[i+29]; cdf[i+29] = accum;
            accum += cdf[i+30]; cdf[i+30] = accum;
            accum += cdf[i+31]; cdf[i+31] = accum;
        }
        
        // equalize only the intesity channel
        range = (max-min)/l2;
        if (notSupportClamp)
        {   
            if ( is_grayscale )
            {
                for (i=0; i<l; i+=4)
                { 
                    r = ~~(cdf[im[i]]*range + min);
                    // clamp them manually
                    r = r<0 ? 0 : (r>255 ? 255 : r);
                    im[i] = r; im[i+1] = r; im[i+2] = r; 
                }
            }
            else
            {
                for (i=0; i<l; i+=4)
                { 
                    y = cdf[im[i+1]]*range + min; cb = im[i+2]; cr = im[i];
                    r = ~~( y                      + 1.402   * (cr-128) );
                    g = ~~( y - 0.34414 * (cb-128) - 0.71414 * (cr-128) );
                    b = ~~( y + 1.772   * (cb-128) );
                    // clamp them manually
                    r = r<0 ? 0 : (r>255 ? 255 : r);
                    g = g<0 ? 0 : (g>255 ? 255 : g);
                    b = b<0 ? 0 : (b>255 ? 255 : b);
                    im[i] = r; im[i+1] = g; im[i+2] = b; 
                }
            }
        }
        else
        {
            if ( is_grayscale )
            {
                for (i=0; i<l; i+=4)
                { 
                    r = ~~(cdf[im[i]]*range + min);
                    im[i] = r; im[i+1] = r; im[i+2] = r; 
                }
            }
            else
            {
                for (i=0; i<l; i+=4)
                { 
                    y = cdf[im[i+1]]*range + min; cb = im[i+2]; cr = im[i];
                    r = ~~( y                      + 1.402   * (cr-128) );
                    g = ~~( y - 0.34414 * (cb-128) - 0.71414 * (cr-128) );
                    b = ~~( y + 1.772   * (cb-128) );
                    im[i] = r; im[i+1] = g; im[i+2] = b; 
                }
            }
        }
        // return the new image data
        return im;
    }
});

}(FILTER);/**
*
* (Rectangular) Pixelate, Triangular Pixelate, Rhomboid Pixelate, Hexagonal Pixelate Filter Plugins
* @package FILTER.js
*
**/
!function(FILTER){
"use strict";

var PIXELATION, sqrt = Math.sqrt, min = Math.min, max = Math.max, SQRT_3 = sqrt(3);

// a simple and fast Pixelate filter for various patterns
// TODO: add some smoothing/dithering in patterns which have diagonal lines separating cells, e.g triangular,..
FILTER.Create({
    name: "PixelateFilter"
    
    // parameters
    ,scale: 1
    ,pattern: "rectangular"
    
    ,init: function( scale, pattern ) {
        var self = this;
        self.scale = scale || 1;
        self.pattern = pattern || "rectangular";
    }
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    ,serialize: function( ) {
        var self = this;
        return {
             scale: self.scale
            ,pattern: self.pattern
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.scale = params.scale;
        self.pattern = params.pattern;
        return self;
    }
    
    ,apply: function( im, w, h ) {
        var self = this, pattern = self.pattern;
        if ( self.scale <= 1  || !pattern || !PIXELATION[pattern] ) return im;
        if ( self.scale > 100 ) self.scale = 100;
        
        var output = new FILTER.ImArray(im.length);
        PIXELATION[pattern]( self.scale, output, im, w, h );
        return output;
    }
});
// aliases and compatibility to prev versions
FILTER.RectangularPixelateFilter = function( scale ){ return new FILTER.PixelateFilter( scale, 'rectangular'); };
FILTER.TriangularPixelateFilter = function( scale ){ return new FILTER.PixelateFilter( scale, 'triangular'); };
FILTER.RhomboidPixelateFilter = function( scale ){ return new FILTER.PixelateFilter( scale, 'rhomboidal'); };
FILTER.HexagonalPixelateFilter = function( scale ){ return new FILTER.PixelateFilter( scale, 'hexagonal'); };

FILTER.PixelateFilter.PATTERN = PIXELATION = {
    "rectangular": function rectangular( scale, output, input, w, h ){
        var imLen = input.length, imArea = imLen>>>2,
            step, step, step_2, stepw, stepw_2,
            bx = w-1, by = imArea-w, p0, p1, p2, p3, p4, r, g, b,
            i, x, yw, sx, sy, syw, pxa, pya, pxb, pyb, pxc, pyc;
        
        step = (sqrt(imArea)*scale*1e-2)|0;
        step_2 = (0.5*step)|0; stepw = step*w; stepw_2 = step_2*w;
        
        // do pixelation via interpolation on 5 points of a certain rectangle
        x=yw=sx=sy=syw=0;
        for (i=0; i<imLen; i+=4)
        {
            pxa = x-sx; pya = yw-syw;
            pxb = min(bx, pxa+step); pyb = min(by, pya+stepw);
            pxc = min(bx, pxa+step_2); pyc = min(by, pya+stepw_2);
            
            // these edge conditions create the rectangular pattern
            p0 = (pxc + pyc) << 2;
            p1 = (pxa + pya) << 2;
            p2 = (pxa + pyb) << 2;
            p3 = (pxb + pya) << 2;
            p4 = (pxb + pyb) << 2;
            
            // compute rectangular interpolation
            // base interpolated color on center pixel plus corner pixels
            r = 0.125*(input[p1  ]+input[p2  ]+input[p3  ]+input[p4  ]+4*input[p0  ]);
            g = 0.125*(input[p1+1]+input[p2+1]+input[p3+1]+input[p4+1]+4*input[p0+1]);
            b = 0.125*(input[p1+2]+input[p2+2]+input[p3+2]+input[p4+2]+4*input[p0+2]);
            output[i] = r|0; output[i+1] = g|0; output[i+2] = b|0; output[i+3] = input[i+3];
            
            // next pixel
            x++; sx++; 
            if ( x >= w ) 
            { 
                sx=0; x=0; sy++; syw+=w; yw+=w;
                if ( sy >= step ) { sy=0; syw=0; }
            }
            if ( sx >= step ) { sx=0; }
        }
        //return output;
    },
    "triangular": function triangular( scale, output, input, w, h ){
        var imLen = input.length, imArea = imLen>>>2,
            step, step_2, step1_3, step2_3, stepw, stepw_2,
            bx = w-1, by = imArea-w, p0, p1, p2, p3, r, g, b,
            i, x, yw, sx, sy, syw, pxa, pya, pxb, pyb, pxc, pyc;

        step = (sqrt(imArea)*scale*1.25e-2)|0;
        step_2 = (0.5*step)|0; step1_3 = (0.333*step)|0; step2_3 = (0.666*step)|0;
        stepw = step*w; stepw_2 = step_2*w;

        // do pixelation via interpolation on 4 points of a certain triangle
        x=yw=sx=sy=syw=0;
        for (i=0; i<imLen; i+=4)
        {
            pxa = x-sx; pya = yw-syw;
            pxb = min(bx, pxa+step); pyb = min(by, pya+stepw);
            
            // these edge conditions create the various triangular patterns
            if ( sx+sy > step ) 
            { 
                // second (right) triangle
                pxc = min(bx, pxa+step2_3); pyc = min(by, pya+stepw_2);
                p0 = (pxc + pyc) << 2;
                p1 = (pxb + pyb) << 2;
            }
            else
            {
                // first (left) triangle
                pxc = min(bx, pxa+step1_3); pyc = min(by, pya+stepw_2);
                p0 = (pxc + pyc) << 2;
                p1 = (pxa + pyb) << 2;
            }
            
            p2 = (pxa + pya) << 2;
            p3 = (pxb + pya) << 2;
            
            // compute triangular interpolation
            // base interpolated color on center pixel plus corner pixels
            r = 0.2*(input[p1  ]+input[p2  ]+input[p3  ]+2*input[p0  ]);
            g = 0.2*(input[p1+1]+input[p2+1]+input[p3+1]+2*input[p0+1]);
            b = 0.2*(input[p1+2]+input[p2+2]+input[p3+2]+2*input[p0+2]);
            output[i] = r|0; output[i+1] = g|0; output[i+2] = b|0; output[i+3] = input[i+3];
            
            // next pixel
            x++; sx++; 
            if ( x >= w ) 
            { 
                sx=0; x=0; sy++; syw+=w; yw+=w;
                if ( sy >= step ) { sy=0; syw=0; }
            }
            if ( sx >= step ) { sx=0; }
        }
        //return output;
    },
    "rhomboidal": function rhomboidal( scale, output, input, w, h ){
        var imLen = input.length, imArea = imLen>>>2,
            step, step2, stepw, stepw2, odd,
            bx = w-1, by = imArea-w, p0, p1, p2, p3, p4, r, g, b,
            i, x, yw, sx, sy, syw, pxa, pya, pxb, pyb, pxc, pyc;
        
        step = (sqrt(imArea)*scale*7e-3)|0;
        step2 = 2*step; stepw = step*w; stepw2 = step2*w;
         
        // do pixelation via interpolation on 5 points of a certain rhomboid
        x=yw=sx=sy=syw=0; odd = 0;
        for (i=0; i<imLen; i+=4)
        {
            // these edge conditions create the various rhomboid patterns
            if ( odd )
            {
                // second row, bottom half of rhombii
                if ( sx+sy > step2 ) 
                { 
                    // third triangle /\.
                    pxa = min(bx, x-sx+step); pya = yw-syw;
                }
                else if ( sx+step-sy > step ) 
                { 
                    // second triangle \/.
                    pxa = x-sx; pya = max(0, yw-syw-stepw);
                }
                else
                {
                    // first triangle /\.
                    pxa = max(0, x-sx-step); pya = yw-syw;
                }
            }
            else
            {
                // first row, top half of rhombii
                if ( sx+step-sy > step2 ) 
                { 
                    // third triangle \/.
                    pxa = min(bx, x-sx+step); pya = max(0, yw-syw-stepw);
                }
                else if ( sx+sy > step ) 
                { 
                    // second triangle /\.
                    pxa = x-sx; pya = yw-syw;
                }
                else
                {
                    // first triangle \/.
                    pxa = max(0, x-sx-step); pya = max(0, yw-syw-stepw);
                }
            }
            pxb = min(bx, pxa+step2); pyb = min(by, pya+stepw2);
            pxc = min(bx, pxa+step); pyc = min(by, pya+stepw);
            
            p0 = (pxc + pyc) << 2;
            p1 = (pxc + pya) << 2;
            p2 = (pxa + pyc) << 2;
            p3 = (pxb + pyc) << 2;
            p4 = (pxc + pyb) << 2;
            
            // compute rhomboidal interpolation
            // base interpolated color on center pixel plus corner pixels
            r = 0.125*(input[p1  ]+input[p2  ]+input[p3  ]+input[p4  ]+4*input[p0  ]);
            g = 0.125*(input[p1+1]+input[p2+1]+input[p3+1]+input[p4+1]+4*input[p0+1]);
            b = 0.125*(input[p1+2]+input[p2+2]+input[p3+2]+input[p4+2]+4*input[p0+2]);
            output[i] = r|0; output[i+1] = g|0; output[i+2] = b|0; output[i+3] = input[i+3];
            
            // next pixel
            x++; sx++; 
            if ( x >= w ) 
            { 
                sx=0; x=0; sy++; syw+=w; yw+=w;
                if ( sy >= step ) { sy=0; syw=0; odd = 1-odd; }
            }
            if ( sx >= step2 ) { sx=0; }
        }
        //return output;
    },
    "hexagonal": function hexagonal( scale, output, input, w, h ){
        var imLen = input.length, imArea = imLen>>>2,
            xstep, xstep2, xstep_2, xstep3_2, ystep, ystepw,
            bx = w-1, by = imArea-w, p0, p1, p2, p3, p4, p5, p6, r, g, b,
            i, x, yw, sx, sy, syw, pxa, pya, pxb, pyb, pxc, pyc, pxd, pyd, pxe,
            xparity, yparity;
        
        xstep2 = (SQRT_3*scale*sqrt(imArea)*1.2e-2)|0;
        xstep = (0.5*xstep2)|0; xstep_2 = (0.25*xstep2)|0; xstep3_2 = xstep2-xstep_2;
        ystep = (0.25*xstep2)|0; ystepw = ystep*w;
         
        // do pixelation via interpolation on 7 points of a certain hexagon
        x=yw=sx=sy=syw=0; xparity=yparity=1;
        for (i=0; i<imLen; i+=4)
        {
            // these edge conditions create the various hexagonal patterns
            if ( yparity )
            {
                if ( 2===xparity )
                {
                    // center hexagon bottom
                    pxa = max(0, x-sx-xstep_2); pya = yw-syw;
                }
                else if ( 1===xparity )
                {
                    if ( SQRT_3*sx+ystep-sy > xstep )
                    {
                        // top right hexagon
                        pxa = min(bx, x-sx+xstep_2); pya = yw-syw;
                    }
                    else
                    {
                        // center hexagon
                        pxa = max(0, x-sx-xstep); pya = min(by, yw-syw+ystepw);
                    }
                }
                else
                {
                    if ( SQRT_3*sx+sy < xstep )
                    {
                        // top left hexagon
                        pxa = max(0, x-sx-xstep3_2); pya = yw-syw;
                    }
                    else
                    {
                        // center hexagon
                        pxa = x-sx; pya = min(by, yw-syw+ystepw);
                    }
                }
            }
            else
            {
                if ( 2===xparity )
                {
                    // center hexagon top
                    pxa = max(0, x-sx-xstep_2); pya = min(by, yw-syw+ystepw);
                }
                else if ( 1===xparity )
                {
                    if ( SQRT_3*sx+sy > xstep )
                    {
                        // bottom right hexagon
                        pxa = min(bx, x-sx+xstep_2); pya = min(by, yw-syw+ystepw);
                    }
                    else
                    {
                        // center hexagon
                        pxa = max(0, x-sx-xstep); pya = yw-syw;
                    }
                }
                else
                {
                    if ( SQRT_3*sx+ystep-sy < xstep )
                    {
                        // bottom left hexagon
                        pxa = max(0, x-sx-xstep3_2); pya = min(by, yw-syw+ystepw);
                    }
                    else
                    {
                        // center hexagon
                        pxa = x-sx; pya = yw-syw;
                    }
                }
            }
            pxb = min(bx, pxa+xstep_2); pyb = max(0, pya-ystepw);
            pxc = min(bx, pxa+xstep); pyc = pya;
            pxd = min(bx, pxa+xstep2); pyd = min(by, pya+ystepw);
            pxe = min(bx, pxa+xstep3_2);
            
            p0 = (pxc + pyc) << 2;
            p1 = (pxa + pya) << 2;
            p2 = (pxb + pyb) << 2;
            p3 = (pxe + pyb) << 2;
            p4 = (pxd + pya) << 2;
            p5 = (pxe + pyd) << 2;
            p6 = (pxb + pyd) << 2;
            
            // compute hexagonal interpolation
            // base interpolated color on center pixel plus corner pixels
            r = 0.125*(input[p1  ]+input[p2  ]+input[p3  ]+input[p4  ]+input[p5  ]+input[p6  ]+2*input[p0  ]);
            g = 0.125*(input[p1+1]+input[p2+1]+input[p3+1]+input[p4+1]+input[p5+1]+input[p6+1]+2*input[p0+1]);
            b = 0.125*(input[p1+2]+input[p2+2]+input[p3+2]+input[p4+2]+input[p5+2]+input[p6+2]+2*input[p0+2]);
            output[i] = r|0; output[i+1] = g|0; output[i+2] = b|0; output[i+3] = input[i+3];
            
            // next pixel
            x++; sx++; 
            if ( x >= w ) 
            { 
                sx=0; x=0; sy++; syw+=w; yw+=w; xparity=0;
                if ( sy >= ystep ) { sy=0; syw=0; yparity=1-yparity; }
            }
            if ( sx >= xstep ) { sx=0; xparity=(xparity+1)%3; }
        }
        //return output;
    }
};

}(FILTER);/**
*
* Halftone Plugin
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var f1 = 7/16, f2 = 3/16, f3 = 5/16, f4 = 1/16, 
    MODE = FILTER.MODE, A32F = FILTER.Array32F, clamp = FILTER.Color.clamp,
    intensity = FILTER.Color.intensity;

// http://en.wikipedia.org/wiki/Halftone
// http://en.wikipedia.org/wiki/Error_diffusion
// http://www.visgraf.impa.br/Courses/ip00/proj/Dithering1/average_dithering.html
// http://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering
FILTER.Create({
    name: "HalftoneFilter"
    
    // parameters
    ,size: 1
    ,thresh: 0.4
    ,mode: MODE.GRAY
    //,inverse: false
    
    // this is the filter constructor
    ,init: function( size, threshold, mode/*, inverse*/ ) {
        var self = this;
        self.size = size || 1;
        self.thresh = clamp(null == threshold ? 0.4 : threshold,0,1);
        self.mode = mode || MODE.GRAY;
        //self.inverse = !!inverse
    }
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    ,threshold: function( t ) {
        this.thresh = clamp(t,0,1);
        return this;
    }
    
    /*,invert: function( bool ) {
        if ( !arguments.length ) bool = true;
        this.inverse = !!bool;
        return this;
    }*/
    
    ,serialize: function( ) {
        var self = this;
        return {
             size: self.size
            ,thresh: self.thresh
            //,inverse: self.inverse
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.size = params.size;
        self.thresh = params.thresh;
        //self.inverse = params.inverse;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function(im, w, h) {
        var self = this, l = im.length, imSize = l>>>2,
            err = new A32F(imSize*3), pixel, index, t, rgb, ycbcr,
            size = self.size, area = size*size, invarea = 1.0/area,
            threshold = 255*self.thresh, size2 = size2<<1,
            colored = MODE.RGB === self.mode, x, y, yw, sw = size*w, i, j, jw, 
            sum_r, sum_g, sum_b, r, g, b, qr, qg, qb, qrf, qgf, qbf
            //,inverse = self.inverse,one = inverse?0:255, zero = inverse?255:0
            ,f11 = /*area**/f1, f22 = /*area**/f2
            ,f33 = /*area**/f3, f44 = /*area**/f4
        ;
        
        for(y=0,yw=0,x=0; y<h; )
        {
            sum_r = sum_g = sum_b = 0;
            if ( colored )
            {
                for(i=0,j=0,jw=0; j<size; )
                {
                    pixel = (x+yw+i+jw)<<2; index = (x+yw+i+jw)*3;
                    sum_r += im[pixel  ] + err[index  ];
                    sum_g += im[pixel+1] + err[index+1];
                    sum_b += im[pixel+2] + err[index+2];
                    if ( ++i>=size ) {i=0; j++; jw+=w;}
                }
                sum_r *= invarea; sum_g *= invarea; sum_b *= invarea;
                t = intensity(sum_r, sum_g, sum_b);
                if ( t > threshold )
                {
                    r = sum_r|0; g = sum_g|0; b = sum_b|0;
                }
                else
                {                
                    r = 0; g = 0; b = 0;
                }
            }
            else
            {
                for(i=0,j=0,jw=0; j<size; )
                {
                    pixel = (x+yw+i+jw)<<2; index = (x+yw+i+jw)*3;
                    sum_r += im[pixel  ] + err[index  ];
                    if ( ++i>=size ) {i=0; j++; jw+=w;}
                }
                t = sum_r * invarea;
                if ( t > threshold )
                {
                    r = 255; g = 255; b = 255;
                }
                else
                {                
                    r = 0; g = 0; b = 0;
                }
            }
            
            pixel = (x+yw)<<2;
            qr = im[pixel  ] - r;
            qg = im[pixel+1] - g;
            qb = im[pixel+2] - b;
            
            if ( x+size<w )
            {                
                qrf = f11*qr; qgf = f11*qg; qbf = f11*qb;
                for(i=size,j=0,jw=0; j<size; )
                {
                    index = (x+yw+i+jw)*3;
                    err[index  ] += qrf;
                    err[index+1] += qgf;
                    err[index+2] += qbf;
                    if ( ++i>=size2 ) {i=size; j++; jw+=w;}
                }
            }
            if ( y+size<h && x>size) 
            {
                qrf = f22*qr; qgf = f22*qg; qbf = f22*qb;
                for(i=-size,j=size,jw=0; j<size2; )
                {
                    index = (x+yw+i+jw)*3;
                    err[index  ] += qrf;
                    err[index+1] += qgf;
                    err[index+2] += qbf;
                    if ( ++i>=0 ) {i=-size; j++; jw+=w;}
                }
            }
            if ( y+size<h ) 
            {
                qrf = f33*qr; qgf = f33*qg; qbf = f33*qb;
                for(i=0,j=size,jw=0; j<size2; )
                {
                    index = (x+yw+i+jw)*3;
                    err[index  ] += qrf;
                    err[index+1] += qgf;
                    err[index+2] += qbf;
                    if ( ++i>=size ) {i=0; j++; jw+=w;}
                }
            }
            if ( y+size<h && x+size<w )
            {
                qrf = f44*qr; qgf = f44*qg; qbf = f44*qb;
                for(i=size,j=size,jw=0; j<size2; )
                {
                    index = (x+yw+i+jw)*3;
                    err[index  ] += qrf;
                    err[index+1] += qgf;
                    err[index+2] += qbf;
                    if ( ++i>=size2 ) {i=size; j++; jw+=w;}
                }
            }
            
            for(i=0,j=0,jw=0; j<size; )
            {
                pixel = (x+yw+i+jw)<<2;
                im[pixel  ] = r;
                im[pixel+1] = g;
                im[pixel+2] = b;
                if ( ++i>=size ) {i=0; j++; jw+=w;}
            }
            
            x+=size; if ( x>=w ) {x=0; y+=size; yw+=sw;}
        }
        return im;
    }
});

}(FILTER);/**
*
* Drop Shadow Filter Plugin
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var MODE = FILTER.MODE,
    boxKernel_3x3 = new FILTER.ConvolutionMatrix([
    1/9,1/9,1/9,
    1/9,1/9,1/9,
    1/9,1/9,1/9
    ]);

// adapted from http://www.jhlabs.com/ip/filters/
// analogous to ActionScript filter
FILTER.Create({
     name: "DropShadowFilter"
    
    // parameters
    ,offsetX: null
    ,offsetY: null
    ,color: 0
    ,opacity: 1
    ,quality: 1
    ,pad: true
    ,onlyShadow: false
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    // constructor
    ,init: function( offsetX, offsetY, color, opacity, quality, pad, onlyShadow ) {
        var self = this;
        self.offsetX = offsetX || 0;
        self.offsetY = offsetY || 0;
        self.color = color || 0;
        self.opacity = null == opacity ? 1.0 : +opacity;
        self.quality = (quality || 1)|0;
        self.pad = null == pad ? true : !!pad;
        self.onlyShadow = !!onlyShadow;
    }
    
    ,dispose: function( ) {
        var self = this;
        self.offsetX = null;
        self.offsetY = null;
        self.color = null;
        self.opacity = null;
        self.quality = null;
        self.pad = null;
        self.onlyShadow = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             offsetX: self.offsetX
            ,offsetY: self.offsetY
            ,color: self.color
            ,opacity: self.opacity
            ,quality: self.quality
            ,pad: self.pad
            ,onlyShadow: self.onlyShadow
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.offsetX = params.offsetX;
        self.offsetY = params.offsetY;
        self.color = params.color;
        self.opacity = params.opacity;
        self.quality = params.quality;
        self.pad = params.pad;
        self.onlyShadow = params.onlyShadow;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function(im, w, h) {
        var self = this;
        self.hasMeta = false;
        if ( !self._isOn ) return im;
        var max = Math.max, color = self.color||0, a = self.opacity, quality = self.quality,
            pad = self.pad, onlyShadow = self.onlyShadow, offX = self.offsetX||0, offY = self.offsetY||0,
            r, g, b, imSize = im.length, imArea = imSize>>>2, shSize = imSize, i, x, y, sw = w, sh = h, sx, sy, si, ai, aa, shadow;
            
        if ( 0.0 > a ) a = 0.0;
        if ( 1.0 < a ) a = 1.0;
        if ( 0.0 === a ) return im;
        
        r = (color>>>16)&255; g = (color>>>8)&255; b = (color)&255;
        
        if ( 0 >= quality ) quality = 1;
        if ( 3 < quality ) quality = 3;
        
        shadow = new FILTER.ImArray(shSize);
        
        // generate shadow from image alpha channel
        var maxx = 0, maxy = 0;
        for(i=0,x=0,y=0; i<shSize; i+=4,x++)
        {
            if ( x >= sw ) { x=0; y++; }
            ai = im[i+3];
            if ( ai > 0 )
            {
                shadow[i  ] = r;
                shadow[i+1] = g;
                shadow[i+2] = b;
                shadow[i+3] = (a*ai)|0;
                maxx = max(maxx, x);
                maxy = max(maxy, y);
            }
            /*else
            {
                shadow[i  ] = 0;
                shadow[i+1] = 0;
                shadow[i+2] = 0;
                shadow[i+3] = 0;
            }*/
        }
        
        // blur shadow, quality is applied multiple times for smoother effect
        shadow = FILTER.Util.Filter.integral_convolution(r===g && g===b ? MODE.GRAY : MODE.RGB, shadow, w, h, 2, boxKernel_3x3, null, 3, 3, 1.0, 0.0, quality);
        
        // pad image to fit whole offseted shadow
        maxx += offX; maxy += offY;
        if ( pad && (maxx >= w || maxx < 0 || maxy >= h || maxy < 0) )
        {
            var pad_left = maxx < 0 ? -maxx : 0, pad_right = maxx >= w ? maxx-w : 0,
                pad_top = maxy < 0 ? -maxy : 0, pad_bot = maxy >= h ? maxy-h : 0;
            im = FILTER.Util.Image.pad(im, w, h, pad_right, pad_bot, pad_left, pad_top);
            w += pad_left + pad_right; h += pad_top + pad_bot;
            imArea = w * h; imSize = imArea << 2;
            self.hasMeta = true;
            self.meta = {_IMG_WIDTH: w, _IMG_HEIGHT: h};
        }
        // offset and combine with original image
        offY *= w;
        if ( onlyShadow )
        {
            // return only the shadow
            for(x=0,y=0,si=0; si<shSize; si+=4,x++)
            {
                if ( x >= sw ) {x=0; y+=w;}
                sx = x+offX; sy = y+offY;
                if ( 0 > sx || sx >= w || 0 > sy || sy >= imArea /*|| 0 === shadow[si+3]*/ ) continue;
                i = (sx + sy) << 2;
                im[i  ] = shadow[si  ]; im[i+1] = shadow[si+1]; im[i+2] = shadow[si+2]; im[i+3] = shadow[si+3];
            }
        }
        else
        {
            // return image with shadow
            for(x=0,y=0,si=0; si<shSize; si+=4,x++)
            {
                if ( x >= sw ) {x=0; y+=w;}
                sx = x+offX; sy = y+offY;
                if ( 0 > sx || sx >= w || 0 > sy || sy >= imArea ) continue;
                i = (sx + sy) << 2; ai = im[i+3]; a = shadow[si+3];
                if ( (255 === ai) || (0 === a) ) continue;
                a /= 255; //ai /= 255; //aa = ai + a*(1.0-ai);
                // src over composition
                // https://en.wikipedia.org/wiki/Alpha_compositing
                /*im[i  ] = (im[i  ]*ai + shadow[si  ]*a*(1.0-ai))/aa;
                im[i+1] = (im[i+1]*ai + shadow[si+1]*a*(1.0-ai))/aa;
                im[i+2] = (im[i+2]*ai + shadow[si+2]*a*(1.0-ai))/aa;*/
                //im[i+3] = aa*255;
                r = im[i  ] + (shadow[si  ]-im[i  ])*a;
                g = im[i+1] + (shadow[si+1]-im[i+1])*a;
                b = im[i+2] + (shadow[si+2]-im[i+2])*a;
                im[i  ] = r|0; im[i+1] = g|0; im[i+2] = b|0;
            }
        }
        return im;
    }
});

}(FILTER);/**
*
* Bokeh (Depth-of-Field) Plugin
* @package FILTER.js
*
**/
!function(FILTER){
"use strict";

var Sqrt = Math.sqrt, Exp = Math.exp, Log = Math.log, 
    Abs = Math.abs, Floor = Math.floor,
    notSupportClamp = FILTER._notSupportClamp, A32F = FILTER.Array32F;

// a simple bokeh (depth-of-field) filter
FILTER.Create({
    name: "BokehFilter"
    
    // parameters
    ,centerX: 0.0
    ,centerY: 0.0
    ,radius: 10
    ,amount: 10
    
    // this is the filter constructor
    ,init: function( centerX, centerY, radius, amount ) {
        var self = this;
        self.centerX = centerX || 0.0;
        self.centerY = centerY || 0.0;
        self.radius = radius || 10;
        self.amount = amount || 10;
    }
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    ,serialize: function( ) {
        var self = this;
        return {
             centerX: self.centerX
            ,centerY: self.centerY
            ,radius: self.radius
            ,amount: self.amount
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.centerX = params.centerX;
        self.centerY = params.centerY;
        self.radius = params.radius;
        self.amount = params.amount;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function(im, w, h) {
        var self = this;
        if ( !self._isOn ) return im;
        var imLen = im.length, imArea, 
            integral, integralLen, colR, colG, colB,
            rowLen, i, j, x , y, ty, 
            cX = self.centerX||0, cY = self.centerY||0, 
            r = self.radius, m = self.amount,
            d, dx, dy, blur, blurw, wt,
            xOff1, yOff1, xOff2, yOff2,
            p1, p2, p3, p4, t0, t1, t2,
            bx1, bx2, by1, by2;
        
        if ( m<=0 ) return im;
        
        imArea = (imLen>>>2);
        bx1=0; bx2=w-1; by1=0; by2=imArea-w;
        
        // make center relative
        cX = Floor(cX*(w-1));
        cY = Floor(cY*(h-1));
        
        integralLen = (imArea<<1)+imArea;  rowLen = (w<<1)+w;
        integral = new FILTER.Array32F(integralLen);
        
        // compute integral of image in one pass
        // first row
        i=0; j=0; x=0; colR=colG=colB=0;
        for (x=0; x<w; x++, i+=4, j+=3)
        {
            colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
            integral[j]=colR; integral[j+1]=colG; integral[j+2]=colB;
        }
        // other rows
        i=rowLen+w; j=0; x=0; colR=colG=colB=0;
        for (i=rowLen+w; i<imLen; i+=4, j+=3, x++)
        {
            if (x>=w) { x=0; colR=colG=colB=0; }
            colR+=im[i]; colG+=im[i+1]; colB+=im[i+2];
            integral[j+rowLen]=integral[j]+colR; 
            integral[j+rowLen+1]=integral[j+1]+colG; 
            integral[j+rowLen+2]=integral[j+2]+colB;
        }
        
        
        // bokeh (depth-of-field) effect 
        // is a kind of adaptive blurring depending on distance from a center
        // like the camera/eye is focused on a specific area and everything else appears increasingly blurred
        
        x=0; y=0; ty=0;
        for (i=0; i<imLen; i+=4, x++)
        {
            // update image coordinates
            if (x>=w) { x=0; y++; ty+=w; }
            
            // compute distance
            dx = x-cX; dy = y-cY;
            //d = Sqrt(dx*dx + dy*dy);
            d = Abs(dx) + Abs(dy);  // approximation
            
            // calculate amount(radius) of blurring 
            // depending on distance from focus center
            blur = d>r ? Log((d-r)*m)|0 : (d/r+0.5)|0; // smooth it a bit, around the radius edge condition
            
            if ( blur > 0 )
            {
                 blurw = blur*w; wt = 0.25/(blur*blur);
                 
                // calculate the weighed sum of the source image pixels that
                // fall under the convolution matrix
                xOff1 = x - blur; yOff1 = ty - blurw;
                xOff2 = x + blur; yOff2 = ty + blurw;
                
                // fix borders
                if (xOff1<bx1) xOff1=bx1;
                else if (xOff2>bx2) xOff2=bx2;
                if (yOff1<by1) yOff1=by1;
                else if (yOff2>by2) yOff2=by2;
                
                // compute integral positions
                p1 = xOff1 + yOff1; p4 = xOff2 + yOff2; p2 = xOff2 + yOff1; p3 = xOff1 + yOff2;
                // arguably faster way to write p1*=3; etc..
                p1 = (p1<<1) + p1; p2 = (p2<<1) + p2; p3 = (p3<<1) + p3; p4 = (p4<<1) + p4;
                
                // apply a fast box-blur to these pixels
                // compute matrix sum of these elements 
                // (trying to avoid possible overflow in the process, order of summation can matter)
                t0 = wt * (integral[p4] - integral[p2] - integral[p3] + integral[p1]);
                t1 = wt * (integral[p4+1] - integral[p2+1] - integral[p3+1] + integral[p1+1]);
                t2 = wt * (integral[p4+2] - integral[p2+2] - integral[p3+2] + integral[p1+2]);
                
                // output
                if (notSupportClamp)
                {   
                    // clamp them manually
                    t0 = (t0<0) ? 0 : ((t0>255) ? 255 : t0);
                    t1 = (t1<0) ? 0 : ((t1>255) ? 255 : t1);
                    t2 = (t2<0) ? 0 : ((t2>255) ? 255 : t2);
                }
                im[i] = t0|0;  im[i+1] = t1|0;  im[i+2] = t2|0;
                // alpha channel is not transformed
                //im[i+3] = im[i+3];
            }
        }
        // return the new image data
        return im;
    }
});

}(FILTER);/**
*
* Seamless Tile Plugin
* @package FILTER.js
*
**/
!function(FILTER){
"use strict";

// a plugin to create a seamless tileable pattern from an image
// adapted from: http://www.blitzbasic.com/Community/posts.php?topic=43846
FILTER.Create({
    name: "SeamlessTileFilter"
    
    ,type: 2 // 0 radial, 1 linear 1, 2 linear 2
    
    // constructor
    ,init: function( mode ) {
        var self = this;
        self.type = null == mode ? 2 : (mode||0);
    }
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    ,serialize: function( ) {
        var self = this;
        return {
            type: self.type
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.type = params.type;
        return self;
    }
    
    // this is the filter actual apply method routine
    // adapted from: http://www.blitzbasic.com/Community/posts.php?topic=43846
    ,apply: function(im, w, h) {
        var self = this, masktype = self.type,
            resize = FILTER.Interpolation.bilinear,
            IMG = FILTER.ImArray, A8U = FILTER.Array8U,
            //needed arrays
            diagonal, tile, mask, a1, a2, a3, d, i, j, k, 
            index, N, N2, size, imSize, sqrt = Math.sqrt;

        //find largest side of the image
        //and resize the image to become square
        if ( w !== h ) im = resize( im, w, h, N = w > h ? w : h, N );
        else  N = w; 
        N2 = Math.round(N/2);
        size = N*N; imSize = im.length;
        diagonal = new IMG(imSize);
        tile = new IMG(imSize);
        mask = new A8U(size);

        for (i=0,j=0,k=0; k<imSize; k+=4,i++)
        {
            if ( i >= N ) {i=0; j++;}
            index = ((i+N2)%N + ((j+N2)%N)*N)<<2;
            diagonal[index  ] = im[k  ];
            diagonal[index+1] = im[k+1];
            diagonal[index+2] = im[k+2];
            diagonal[index+3] = im[k+3];
        }

        //try to make your own masktypes here
        if ( 0 === masktype ) //RADIAL
        {
            //Create the mask
            for (i=0,j=0; i<N2; j++)
            {
                if ( j >= N2 ) { j=0; i++; }
                
                //Scale d To range from 1 To 255
                d = 255 - (255 * sqrt((i-N2)*(i-N2) + (j-N2)*(j-N2)) / N2);
                d = d < 1 ? 1 : (d > 255 ? 255 : d);

                //Form the mask in Each quadrant
                mask [i     + j*N      ] = d;
                mask [i     + (N-1-j)*N] = d;
                mask [N-1-i + j*N      ] = d;
                mask [N-1-i + (N-1-j)*N] = d;
            }
        }
        else if ( 1 === masktype ) //LINEAR 1
        {
            //Create the mask
            for (i=0,j=0; i<N2; j++)
            {
                if ( j >= N2 ) { j=0; i++; }
                
                //Scale d To range from 1 To 255
                d = 255 - (255 * (N2+j < N2+i ? (j-N2)/N2 : (i-N/2)/N2));
                d = d < 1 ? 1 : (d > 255 ? 255 : d);

                //Form the mask in Each quadrant
                mask [i     + j*N      ] = d;
                mask [i     + (N-1-j)*N] = d;
                mask [N-1-i + j*N      ] = d;
                mask [N-1-i + (N-1-j)*N] = d;
            }
        }
        else //if ( 2 === masktype ) //LINEAR 2
        {
            //Create the mask
            for (i=0,j=0; i<N2; j++)
            {
                if ( j >= N2 ) { j=0; i++; }
                
                //Scale d To range from 1 To 255
                d = 255 - (255 * (N2+j < N2+i ? sqrt((j-N)*(j-N) + (i-N)*(i-N)) / (1.13*N) : sqrt((i-N)*(i-N) + (j-N)*(j-N)) / (1.13*N)));
                d = d < 1 ? 1 : (d > 255 ? 255 : d);

                //Form the mask in Each quadrant
                mask [i     + j*N      ] = d;
                mask [i     + (N-1-j)*N] = d;
                mask [N-1-i + j*N      ] = d;
                mask [N-1-i + (N-1-j)*N] = d;
            }
        }

        //Create the tile
        for (j=0,i=0; j<N; i++)
        {
            if ( i >= N ) {i=0; j++;}
            index = i+j*N;
            a1 = mask[index]; a2 = mask[(i+N2) % N + ((j+N2) % N)*N];
            a3 = a1+a2; a1 /= a3; a2 /= a3; index <<= 2;
            tile[index  ] = ~~(a1*im[index  ] + a2*diagonal[index  ]);
            tile[index+1] = ~~(a1*im[index+1] + a2*diagonal[index+1]);
            tile[index+2] = ~~(a1*im[index+2] + a2*diagonal[index+2]);
            tile[index+3] = im[index+3];
        }

        //create the new tileable image
        //if it wasn't a square image, resize it back to the original scale
        if ( w !== h ) tile = resize( tile, N, N, w, h );

        // return the new image data
        return tile;
    }
});

}(FILTER);/**
*
* FloodFill, PatternFill Plugin(s)
* @package FILTER.js
*
**/
!function(FILTER){
"use strict";

var MODE = FILTER.MODE;
    
// an extended and fast flood fill and flood pattern fill filter using scanline algorithm
// adapted from: A Seed Fill Algorithm, by Paul Heckbert from "Graphics Gems", Academic Press, 1990
// http://en.wikipedia.org/wiki/Flood_fill
FILTER.Create({
    name : "ColorFillFilter"
    ,x: 0
    ,y: 0
    ,color: null
    ,border: null
    ,tolerance: 1e-6
    ,mode: MODE.COLOR
    
    ,path: FILTER_PLUGINS_PATH
    
    ,init: function( x, y, color, tolerance, border ) {
        var self = this;
        self.x = x || 0;
        self.y = y || 0;
        self.color = color || 0;
        self.tolerance = null == tolerance ? 1e-6 : +tolerance;
        self.border = null != border ? border||0 : null;
        self.mode = MODE.COLOR;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             color: self.color
            ,border: self.border
            ,x: self.x
            ,y: self.y
            ,tolerance: self.tolerance
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.color = params.color;
        self.border = params.border;
        self.x = params.x;
        self.y = params.y;
        self.tolerance = params.tolerance;
        return self;
    }
    
    ,apply: function( im, w, h ) {
        var self = this, mode = self.mode || MODE.COLOR,
            color = self.color||0, border = self.border, exterior = null != border,
            x0 = self.x||0, y0 = self.y||0, x, y, x1, y1, x2, y2, k, i, l, 
            r, g, b, r0, g0, b0, rb, gb, bb, hsv, dist, D0, D1, region, box, mask, block_mask,
            RGB2HSV = FILTER.Color.RGB2HSV, HSV2RGB = FILTER.Color.HSV2RGB;
            
        if ( x0 < 0 || x0 >= w || y0 < 0 || y0 >= h ) return im;
        
        x0 = x0<<2; y0 = (y0*w)<<2; i = x0+y0;
        r0 = im[i]; g0 = im[i+1]; b0 = im[i+2]; D0 = 0; D1 = 1;
        r = (color>>>16)&255; g = (color>>>8)&255; b = color&255;
        if ( exterior )
        {
           rb = (border>>>16)&255; gb = (border>>>8)&255; bb = (border)&255;
           if ( r0 === rb && g0 === gb && b0 === bb ) return im;
           r0 = rb; g0 = gb; b0 = bb; D0 = 1; D1 = 0;
        }
        else if ( MODE.COLOR === mode && r0 === r && g0 === g && b0 === b )
        {
            return im;
        }
        
        /* seems to have issues when tolerance is exactly 1.0 */
        dist = FILTER.MachineLearning.dissimilarity_rgb(r0, g0, b0, D0, D1, 255*(self.tolerance>=1.0 ? 0.999 : self.tolerance));
        region = FILTER.MachineLearning.flood_region(im, w, h, 2, dist, 8, x0, y0);
        // mask is a packed bit array for efficiency
        mask = region.mask;
        
        if ( (MODE.MASK === mode) || (MODE.COLORMASK === mode) )
        {
            // MODE.MASK returns the region mask, rest image is put blank
            block_mask = MODE.MASK === mode;
            x=0; y=0;
            for(i=0,l=im.length; i<l; i+=4,x++)
            {
                if ( x>=w ) { x=0; y+=w; }
                k = x+y;
                if ( mask[k>>>5]&(1<<(k&31)) )
                {
                    // use mask color
                    if ( block_mask ) { im[i  ] = r; im[i+1] = g; im[i+2] = b; }
                    // else leave original color
                }
                else
                {
                    im[i  ] = 0; im[i+1] = 0; im[i+2] = 0;
                }
            }
        }
        else if ( MODE.HUE === mode )
        {
            // MODE.HUE enables to fill/replace color gradients in a connected region
            box = region.box;
            x1 = box[0]>>>2; y1 = box[1]>>>2; x2 = box[2]>>2; y2 = box[3]>>>2;
            hsv = new FILTER.Array32F(3);
            
            for(x=x1,y=y1; y<=y2; )
            {
                k = x+y;
                if ( mask[k>>>5]&(1<<(k&31)) )
                {
                    i = k << 2;
                    hsv[0] = im[i  ]; hsv[1] = im[i+1]; hsv[2] = im[i+2];
                    RGB2HSV(hsv, 0, 1); hsv[0] = color; HSV2RGB(hsv, 0, 1);
                    im[i  ] = hsv[0]|0; im[i+1] = hsv[1]|0; im[i+2] = hsv[2]|0;
                }
                if ( ++x>x2 ){ x=x1; y+=w; }
            }
        }
        else //if ( MODE.COLOR === mode )
        {
            // fill/replace color in region
            box = region.box;
            x1 = box[0]>>>2; y1 = box[1]>>>2; x2 = box[2]>>2; y2 = box[3]>>>2;
            for(x=x1,y=y1; y<=y2; )
            {
                k = x+y;
                if ( mask[k>>>5]&(1<<(k&31)) )
                {
                    i = k << 2;
                    im[i  ] = r;
                    im[i+1] = g;
                    im[i+2] = b;
                }
                if ( ++x>x2 ){ x=x1; y+=w; }
            }
        }
        // return the new image data
        return im;
    }
});
FILTER.FloodFillFilter = FILTER.ColorFillFilter;

FILTER.Create({
    name : "PatternFillFilter"
    ,x: 0
    ,y: 0
    ,offsetX: 0
    ,offsetY: 0
    ,tolerance: 1e-6
    ,border: null
    ,mode: MODE.TILE
    ,hasInputs: true
    
    ,path: FILTER_PLUGINS_PATH
    
    ,init: function( x, y, pattern, offsetX, offsetY, tolerance, border ) {
        var self = this;
        self.x = x || 0;
        self.y = y || 0;
        self.offsetX = offsetX || 0;
        self.offsetY = offsetY || 0;
        if ( pattern ) self.setInput( "pattern", pattern );
        self.tolerance = null == tolerance ? 1e-6 : +tolerance;
        self.border = null != border ? border||0 : null;
        self.mode = MODE.TILE;
    }
    
    ,dispose: function( ) {
        var self = this;
        self.x = null;
        self.y = null;
        self.offsetX = null;
        self.offsetY = null;
        self.tolerance = null;
        self.border = null;
        self.$super('dispose');
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             x: self.x
            ,y: self.y
            ,offsetX: self.offsetX
            ,offsetY: self.offsetY
            ,tolerance: self.tolerance
            ,border: self.border
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.x = params.x;
        self.y = params.y;
        self.offsetX = params.offsetX;
        self.offsetY = params.offsetY;
        self.tolerance = params.tolerance;
        self.border = params.border;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function( im, w, h ) {
        var self = this, x0 = self.x||0, y0 = self.y||0, Pat;
        
        if ( x0 < 0 || x0 >= w || y0 < 0 || y0 >= h ) return im;
        Pat = self.input("pattern"); if ( !Pat ) return im;
        
        var mode = self.mode||MODE.TILE, border = self.border, exterior = null != border, delta,
            pattern = Pat[0], pw = Pat[1], ph = Pat[2], px0 = self.offsetX||0, py0 = self.offsetY||0,
            r0, g0, b0, rb, gb, bb, x, y, k, i, pi, px, py, x1, y1, x2, y2, sx, sy,
            dist, D0, D1, region, box, mask, yy;
        
        x0 = x0<<2; y0 = (y0*w)<<2; i = x0+y0;
        r0 = im[i]; g0 = im[i+1]; b0 = im[i+2]; D0 = 0; D1 = 1;
        if ( exterior )
        {
           rb = (border>>>16)&255; gb = (border>>>8)&255; bb = (border)&255;
           if ( r0 === rb && g0 === gb && b0 === bb ) return im;
           r0 = rb; g0 = gb; b0 = bb; D0 = 1; D1 = 0;
        }
        
        /* seems to have issues when tolerance is exactly 1.0 */
        dist = FILTER.MachineLearning.dissimilarity_rgb(r0, g0, b0, D0, D1, 255*(self.tolerance>=1.0 ? 0.999 : self.tolerance));
        region = FILTER.MachineLearning.flood_region(im, w, h, 2, dist, 8, x0, y0);
        // mask is a packed bit array for efficiency
        mask = region.mask; box = region.box;
        x1 = box[0]>>>2; y1 = box[1]>>>2; x2 = box[2]>>>2; y2 = box[3]>>>2;
        
        if ( MODE.STRETCH === mode )
        {
            // MODE.STRETCH stretches (rescales) pattern to fit and fill region
            sx = pw/(x2-x1+1); sy = ph/(y2-y1+w);
            for(x=x1,y=y1; y<=y2; )
            {
                k = x+y;
                if ( mask[k>>>5]&(1<<(k&31)) )
                {
                    i = k << 2;
                    // stretch here
                    px = (sx*(x-x1))|0;
                    py = (sy*(y-y1))|0;
                    // pattern fill here
                    pi = (px + py*pw) << 2;
                    im[i  ] = pattern[pi  ];
                    im[i+1] = pattern[pi+1];
                    im[i+2] = pattern[pi+2];
                }
                if ( ++x>x2 ){ x=x1; y+=w; }
            }
        }
        else //if ( MODE.TILE === mode )
        {
            // MODE.TILE tiles (repeats) pattern to fit and fill region
            if ( 0 > px0 ) px0 += pw;
            if ( 0 > py0 ) py0 += ph;
            x2 = x2-x1+1;
            for(x=0,y=0,yy=y1; yy<=y2; )
            {
                k = x+x1 + yy;
                if ( mask[k>>>5]&(1<<(k&31)) )
                {
                    i = k << 2;
                    // tile here
                    px = (x + px0) % pw;
                    py = (y + py0) % ph;
                    // pattern fill here
                    pi = (px + py*pw) << 2;
                    im[i  ] = pattern[pi  ];
                    im[i+1] = pattern[pi+1];
                    im[i+2] = pattern[pi+2];
                }
                if ( ++x>=x2 ){ x=0; yy+=w; y++; }
            }
        }
        // return the new image data
        return im;
    }
});

}(FILTER);/**
*
* Connected Components Extractor Plugin
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var MODE = FILTER.MODE, min = Math.min, max = Math.max,
    abs = Math.abs, cos = Math.cos, toRad = FILTER.CONST.toRad;

/*function dist_v( a, b, delta )
{
    return (abs(a-b) <= delta);
}

function dist_rgb( a, b, delta )
{
    return (a === b) || (
        (-1 !== a && -1 !== b) && 
        (abs(((a>>16)&255)-((b>>16)&255))<=delta) &&
        (abs(((a>>8)&255)-((b>>8)&255))<=delta) &&
        (abs((a&255)-(b&255))<=delta)
    );
}*/

FILTER.Create({
    name: "ConnectedComponentsFilter"
    
    // parameters
    ,connectivity: 4
    ,tolerance: 1e-6
    ,mode: MODE.COLOR
    ,color: null
    ,invert: false
    ,box: null
    //,hasMeta: true
    
    // this is the filter constructor
    ,init: function( connectivity, tolerance, color, invert ) {
        var self = this;
        self.connectivity = 8 === connectivity ? 8 : 4;
        self.tolerance = null == tolerance ? 1e-6 : +tolerance;
        self.color = null == color ? null : +color;
        self.invert = !!invert;
        self.mode = MODE.COLOR;
    }
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    ,serialize: function( ) {
        var self = this;
        return {
             connectivity: self.connectivity
            ,tolerance: self.tolerance
            ,color: self.color
            ,invert: self.invert
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.connectivity = params.connectivity;
        self.tolerance = params.tolerance;
        self.color = params.color;
        self.invert = params.invert;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function( im, w, h ) {
        var self = this, imLen = im.length, imSize = imLen>>>2,
            mode = self.mode||MODE.COLOR, color = self.color,
            delta = min(0.999, max(0.0, self.tolerance||0.0)),
            D = new FILTER.Array32F(imSize);
        
        if ( null != color )
        {
            if ( MODE.HUE === mode )
            {
                color = cos(toRad*color);
            }
            else if ( MODE.COLOR === mode )
            {
                var r = ((color >>> 16)&255)/255, g = ((color >>> 8)&255)/255, b = ((color)&255)/255;
                color = 10000*(r+g+b)/3 + 1000*(r+g)/2 + 100*(g+b)/2 + 10*(r+b)/2 + r;
            }
        }
        // compute an appropriate (relational) dissimilarity matrix, based on filter operation mode
        delta = FILTER.MachineLearning.dissimilarity_rgb_2(im, w, h, 2, D, delta, mode);
        // return the connected image data
        return FILTER.MachineLearning.connected_components(im, w, h, 2, D, self.connectivity, delta, color, self.invert);
    }
});

}(FILTER);/**
*
* Canny Edges Detector Plugin
* @package FILTER.js
*
**/
!function(FILTER){
"use strict";

var MAGNITUDE_SCALE = 100, MAGNITUDE_LIMIT = 1000,
    MAGNITUDE_MAX = MAGNITUDE_SCALE * MAGNITUDE_LIMIT, round = Math.round;

// an efficient Canny Edges Detector
// http://en.wikipedia.org/wiki/Canny_edge_detector
FILTER.Create({
    name : "CannyEdgesFilter"
    
    ,low: 2.5
    ,high: 7.5
    ,lowpass: true
    
    ,path: FILTER_PLUGINS_PATH
    
    ,init: function( lowThreshold, highThreshold, lowpass ) {
        var self = this;
		self.low = arguments.length < 1 ? 2.5 : +lowThreshold;
		self.high = arguments.length < 2 ? 7.5 : +highThreshold;
		self.lowpass = arguments.length < 3 ? true : !!lowpass;
    }
    
    ,thresholds: function( low, high, lowpass ) {
        var self = this;
        self.low = +low;
        self.high = +high;
        if ( arguments.length > 2 ) self.lowpass = !!lowpass;
        return self;
    }
    
    ,serialize: function( ) {
        var self = this;
        return {
             low: self.low
            ,high: self.high
            ,lowpass: self.lowpass
        };
    }
    
    ,unserialize: function( params ) {
        var self = this;
        self.low = params.low;
        self.high = params.high;
        self.lowpass = params.lowpass;
        return self;
    }
    
    // this is the filter actual apply method routine
    ,apply: function( im, w, h ) {
        var self = this;
        // NOTE: assume image is already grayscale (and contrast-normalised if needed)
        return FILTER.Util.Filter.gradient(im, w, h, 2, 0, self.lowpass, 0, round(self.low*MAGNITUDE_SCALE), round(self.high*MAGNITUDE_SCALE), MAGNITUDE_SCALE, MAGNITUDE_LIMIT, MAGNITUDE_MAX);
    }
});

}(FILTER);/**
*
* HAAR Feature Detector Plugin
* @package FILTER.js
*
**/
!function(FILTER, undef){
"use strict";

var Abs = Math.abs, Max = Math.max, Min = Math.min, 
    Floor = Math.floor, Round = Math.round, Sqrt = Math.sqrt,
    TypedArray = FILTER.Util.Array.typed, TypedObj = FILTER.Util.Array.typed_obj,
    HAS = 'hasOwnProperty', MAX_FEATURES = 10, push = Array.prototype.push;

function haar_detect(feats, w, h, sel_x1, sel_y1, sel_x2, sel_y2,
                    haar, baseScale, scaleIncrement, stepIncrement,
                    SAT, RSAT, SAT2, GSAT, cL, cH)
{
    var thresholdEdgesDensity = null != GSAT,
        selw = (sel_x2-sel_x1+1)|0, selh = (sel_y2-sel_y1+1)|0,
        imSize = w*h, imArea1 = imSize-1,
        haar_stages = haar.stages, sl = haar_stages.length,
        sizex = haar.size1, sizey = haar.size2,
        scale, maxScale, xstep, ystep, xsize, ysize,
        startx, starty, startty, //minScale, 
        x, y, ty, tyw, tys, p0, p1, p2, p3, xl, yl, s, t,
        bx, by, swh, inv_area,
        total_x, total_x2, vnorm, edges_density, pass,
        
        stage, threshold, trees, tl,
        t, cur_node_ind, features, feature,
        rects, nb_rects, thresholdf, 
        rect_sum, kr, r, x1, y1, x2, y2,
        x3, y3, x4, y4, rw, rh, yw, yh, sum
    ;
    
    bx=w-1; by=imSize-w;
    startx = sel_x1|0; starty = sel_y1|0;
    maxScale = Min(selw/sizex, selh/sizey);
    //minScale = Max(selw/w, selh/h);
    for(scale=baseScale/* *minScale*/; scale<=maxScale; scale*=scaleIncrement)
    {
        // Viola-Jones Single Scale Detector
        xsize = (scale * sizex)|0;
        xstep = (xsize * stepIncrement)|0;
        ysize = (scale * sizey)|0;
        ystep = (ysize * stepIncrement)|0;
        //ysize = xsize; ystep = xstep;
        tyw = ysize*w; tys = ystep*w; 
        startty = starty*tys; 
        xl = selw-xsize; yl = selh-ysize;
        swh = xsize*ysize; inv_area = 1.0/swh;
        
        for(y=starty,ty=startty; y<yl; y+=ystep,ty+=tys) 
        {
            for (x=startx; x<xl; x+=xstep) 
            {
                p0 = x-1 + ty-w;  p1 = p0 + xsize;
                p2 = p0 + tyw;    p3 = p2 + xsize;
                
                // clamp
                p0 = Min(imArea1,Max(0,p0));
                p1 = Min(imArea1,Max(0,p1));
                p2 = Min(imArea1,Max(0,p2));
                p3 = Min(imArea1,Max(0,p3));
                
                if ( thresholdEdgesDensity )
                {
                    // prune search space based on canny edges density
                    // i.e too few = no feature, too much = noise
                    // avoid overflow
                    edges_density = inv_area * (GSAT[p3] - GSAT[p2] - GSAT[p1] + GSAT[p0]);
                    if ( edges_density < cL || edges_density > cH ) continue;
                }
                
                // pre-compute some values for speed
                
                // avoid overflow
                total_x = inv_area * (SAT[p3] - SAT[p2] - SAT[p1] + SAT[p0]);
                // avoid overflow
                total_x2 = inv_area * (SAT2[p3] - SAT2[p2] - SAT2[p1] + SAT2[p0]);
                
                vnorm = total_x2 - total_x * total_x;
                vnorm = 1 < vnorm ? Sqrt(vnorm) : vnorm /*1*/;  
                
                pass = false;
                for(s=0; s<sl; s++) 
                {
                    // Viola-Jones HAAR-Stage evaluator
                    stage = haar_stages[s];
                    threshold = stage.thres;
                    trees = stage.trees; tl = trees.length;
                    sum=0;
                    
                    for(t=0; t<tl; t++) 
                    { 
                        //
                        // inline the tree and leaf evaluators to avoid function calls per-loop (faster)
                        //
                        
                        // Viola-Jones HAAR-Tree evaluator
                        features = trees[t].feats; 
                        cur_node_ind = 0;
                        while (true) 
                        {
                            feature = features[cur_node_ind]; 
                            
                            // Viola-Jones HAAR-Leaf evaluator
                            rects = feature.rects; 
                            nb_rects = rects.length; 
                            thresholdf = feature.thres; 
                            rect_sum = 0;
                            
                            if (feature.tilt)
                            {
                                // tilted rectangle feature, Lienhart et al. extension
                                for(kr=0; kr<nb_rects; kr++) 
                                {
                                    r = rects[kr];
                                    
                                    // this produces better/larger features, possible rounding effects??
                                    x1 = x + (scale * r[0])|0;
                                    y1 = (y-1 + (scale * r[1])|0) * w;
                                    x2 = x + (scale * (r[0] + r[2]))|0;
                                    y2 = (y-1 + (scale * (r[1] + r[2]))|0) * w;
                                    x3 = x + (scale * (r[0] - r[3]))|0;
                                    y3 = (y-1 + (scale * (r[1] + r[3]))|0) * w;
                                    x4 = x + (scale * (r[0] + r[2] - r[3]))|0;
                                    y4 = (y-1 + (scale * (r[1] + r[2] + r[3]))|0) * w;
                                    
                                    // clamp
                                    x1 = Min(bx,Max(0,x1));
                                    x2 = Min(bx,Max(0,x2));
                                    x3 = Min(bx,Max(0,x3));
                                    x4 = Min(bx,Max(0,x4));
                                    y1 = Min(by,Max(0,y1));
                                    y2 = Min(by,Max(0,y2));
                                    y3 = Min(by,Max(0,y3));
                                    y4 = Min(by,Max(0,y4));
                                    
                                    // RSAT(x-h+w, y+w+h-1) + RSAT(x, y-1) - RSAT(x-h, y+h-1) - RSAT(x+w, y+w-1)
                                    //        x4     y4            x1  y1          x3   y3            x2   y2
                                    rect_sum += r[4] * (RSAT[x4 + y4] - RSAT[x3 + y3] - RSAT[x2 + y2] + RSAT[x1 + y1]);
                                }
                            }
                            else
                            {
                                // orthogonal rectangle feature, Viola-Jones original
                                for(kr=0; kr<nb_rects; kr++) 
                                {
                                    r = rects[kr];
                                    
                                    // this produces better/larger features, possible rounding effects??
                                    x1 = x-1 + (scale * r[0])|0; 
                                    x2 = x-1 + (scale * (r[0] + r[2]))|0;
                                    y1 = w * (y-1 + (scale * r[1])|0); 
                                    y2 = w * (y-1 + (scale * (r[1] + r[3]))|0);
                                    
                                    // clamp
                                    x1 = Min(bx,Max(0,x1));
                                    x2 = Min(bx,Max(0,x2));
                                    y1 = Min(by,Max(0,y1));
                                    y2 = Min(by,Max(0,y2));
                                    
                                    // SAT(x-1, y-1) + SAT(x+w-1, y+h-1) - SAT(x-1, y+h-1) - SAT(x+w-1, y-1)
                                    //      x1   y1         x2      y2          x1   y1            x2    y1
                                    rect_sum += r[4] * (SAT[x2 + y2]  - SAT[x1 + y2] - SAT[x2 + y1] + SAT[x1 + y1]);
                                }
                            }
                            
                            /*where = rect_sum * inv_area < thresholdf * vnorm ? 0 : 1;*/
                            // END Viola-Jones HAAR-Leaf evaluator
                            
                            if ( rect_sum * inv_area < thresholdf * vnorm )
                            {
                                if (feature.has_l) { sum += feature.l_val; break; } 
                                else { cur_node_ind = feature.l_node; }
                            } 
                            else 
                            {
                                if (feature.has_r) { sum += feature.r_val; break; } 
                                else { cur_node_ind = feature.r_node; }
                            }
                        }
                        // END Viola-Jones HAAR-Tree evaluator
                    }
                    pass = sum > threshold;
                    // END Viola-Jones HAAR-Stage evaluator
                    
                    if ( !pass ) break;
                }
                
                if ( pass )
                {
                    // expand
                    if ( feats.count === feats.length ) push.apply(feats, new Array(MAX_FEATURES));
                    //                      x, y, width, height
                    feats[feats.count++] = [x, y, xsize, ysize];
                }
            }
        }
    }
}

//x2-x1+1=w  x2 = w+x1-1
function similar( r1, r2, tolerance )
{
    // tolerance = 0.2
    var d1=Max(r2[2], r1[2])*tolerance, 
        d2=Max(r2[3], r1[3])*tolerance;
    return Abs(r1[0]-r2[0])<=d1 && Abs(r1[1]-r2[1])<=d2 && Abs(r1[2]-r2[2])<=d1 && Abs(r1[3]-r2[3])<=d2; 
}

function is_inside( r1, r2 )
{
    return (r1.x1>=r2.x1) && (r1.y1>=r2.y1) && (r1.x2<=r2.x2) && (r1.y2<=r2.y2); 
}

function snap_to_grid( r )
{
    r.x1 = (r.x1+0.5)|0; r.y1 = (r.y1+0.5)|0;
    r.x2 = (r.x2+0.5)|0; r.y2 = (r.y2+0.5)|0;
}

function by_area( r1, r2 ) { return r2.area-r1.area; }

// merge the detected features if needed
function merge_features( rects, min_neighbors, tolerance ) 
{
    var rlen=rects.length, ref = new Array(rlen), feats=[], 
        nb_classes = 0, neighbors, r, found=false, i, j, n, t, ri, x1, y1, w, h;
    
    // original code
    // find number of neighbour classes
    for (i=0; i<rlen; i++) ref[i] = 0;
    for (i=0; i<rlen; i++)
    {
        found = false;
        for (j=0; j<i; j++)
        {
            if ( similar(rects[j],rects[i],tolerance) )
            {
                found = true;
                ref[i] = ref[j];
            }
        }
        
        if (!found)
        {
            ref[i] = nb_classes;
            nb_classes++;
        }
    }        
    
    // merge neighbor classes
    neighbors = new Array(nb_classes); r = new Array(nb_classes);
    for (i=0; i<nb_classes; i++)
    {
        neighbors[i] = 0;
        r[i] = [0,0,0,0];
    }
    for (i=0; i<rlen; i++)
    {
        ri = ref[i];
        neighbors[ri]++;
        //add_feat(r[ri],rects[i]);
        r[ri][0] += rects[i][0]; 
        r[ri][1] += rects[i][1]; 
        r[ri][2] += rects[i][2]; 
        r[ri][3] += rects[i][3]; 
    }
    for (i=0; i<nb_classes; i++) 
    {
        n = neighbors[i];
        if (n >= min_neighbors) 
        {
            t = 1/(n + n);
            x1 = t*(r[i][0] * 2 + n);
            y1 = t*(r[i][1] * 2 + n);
            w = t*(r[i][2] * 2 + n);
            h = t*(r[i][3] * 2 + n);
            feats.push({
                x1: x1, y1: y1, x2: x1+w-1, y2: y1+h-1,
                x: x1, y: y1, width: w, height: h,
                area: 0, inside: 0
            });
        }
    }
    
    // filter inside rectangles
    rlen=feats.length;
    for (i=0; i<rlen; i++)
    {
        for (j=i+1; j<rlen; j++)
        {
            if (!feats[i].inside && is_inside(feats[i],feats[j])) { feats[i].inside=1; }
            else if (!feats[j].inside && is_inside(feats[j],feats[i])) { feats[j].inside=1; }
        }
    }
    i=rlen;
    while (--i >= 0) 
    { 
        if (feats[i].inside) // inside
        {
            feats.splice(i, 1); 
        }
        else 
        {
            snap_to_grid(feats[i]); 
            feats[i].area = feats[i].width*feats[i].height;
        }
    }
    
    // sort according to size 
    // (a deterministic way to present results under different cases)
    return feats.sort(by_area);
}

// HAAR Feature Detector (Viola-Jones-Lienhart algorithm)
// adapted from: https://github.com/foo123/HAAR.js
// references:
// 1. Viola, Jones 2001 http://www.cs.cmu.edu/~efros/courses/LBMV07/Papers/viola-cvpr-01.pdf
// 2. Lienhart et al 2002 http://www.lienhart.de/Prof._Dr._Rainer_Lienhart/Source_Code_files/ICIP2002.pdf
// expose as static utility methods
FILTER.Util.Filter.haar_detect = haar_detect;
FILTER.Util.Filter.merge_features = merge_features;

FILTER.Create({
    name: "HaarDetectorFilter"
    
    // parameters
    ,_update: false // filter by itself does not alter image data, just processes information
    ,hasMeta: true
    ,haardata: null
    ,tolerance: 0.2
    ,baseScale: 1.0
    ,scaleIncrement: 1.25
    ,stepIncrement: 0.5
    ,minNeighbors: 1
    ,doCannyPruning: true
    ,cannyLow: 20
    ,cannyHigh: 100
    ,_haarchanged: false
    
    // this is the filter constructor
    ,init: function( haardata, baseScale, scaleIncrement, stepIncrement, minNeighbors, doCannyPruning, tolerance ) {
        var self = this;
        self.haardata = haardata || null;
        self.baseScale = undef === baseScale ? 1.0 : +baseScale;
        self.scaleIncrement = undef === scaleIncrement ? 1.25 : +scaleIncrement;
        self.stepIncrement = undef === stepIncrement ? 0.5 : +stepIncrement;
        self.minNeighbors = undef === minNeighbors ? 1 : +minNeighbors;
        self.doCannyPruning = undef === doCannyPruning ? true : !!doCannyPruning;
        self.tolerance = null == tolerance ? 0.2 : +tolerance;
        self._haarchanged = !!self.haardata;
    }
    
    // support worker serialize/unserialize interface
    ,path: FILTER_PLUGINS_PATH
    
    ,dispose: function( ) {
        var self = this;
        self.haardata = null;
        self.$super('dispose');
        return self;
    }
    
    ,haar: function( haardata ) {
        var self = this;
        self.haardata = haardata;
        self._haarchanged = true;
        return self;
    }
    
    ,params: function( params ) {
        var self = this;
        if ( params )
        {
        if ( params[HAS]('haardata') )
        {
            self.haardata = params.haardata;
            self._haarchanged = true;
        }
        if ( params[HAS]('baseScale') ) self.baseScale = +params.baseScale;
        if ( params[HAS]('scaleIncrement') ) self.scaleIncrement = +params.scaleIncrement;
        if ( params[HAS]('stepIncrement') ) self.stepIncrement = +params.stepIncrement;
        if ( params[HAS]('minNeighbors') ) self.minNeighbors = +params.minNeighbors;
        if ( params[HAS]('doCannyPruning') ) self.doCannyPruning = !!params.doCannyPruning;
        if ( params[HAS]('tolerance') ) self.tolerance = +params.tolerance;
        if ( params[HAS]('cannyLow') ) self.cannyLow = +params.cannyLow;
        if ( params[HAS]('cannyHigh') ) self.cannyHigh = +params.cannyHigh;
        if ( params[HAS]('selection') ) self.selection = params.selection || null;
        }
        return self;
    }
    
    ,serialize: function( ) {
        var self = this, json;
        json = {
             //haardata: null
             baseScale: self.baseScale
            ,scaleIncrement: self.scaleIncrement
            ,stepIncrement: self.stepIncrement
            ,minNeighbors: self.minNeighbors
            ,doCannyPruning: self.doCannyPruning
            ,tolerance: self.tolerance
            ,cannyLow: self.cannyLow
            ,cannyHigh: self.cannyHigh
        };
        // avoid unnecessary (large) data transfer
        if ( self._haarchanged )
        {
            json.haardata = TypedObj( self.haardata );
            self._haarchanged = false;
        }
        return json;
    }
    
    ,unserialize: function( params ) {
        var self = this;
        if ( params[HAS]('haardata') ) self.haardata = TypedObj( params.haardata, 1 );
        self.baseScale = params.baseScale;
        self.scaleIncrement = params.scaleIncrement;
        self.stepIncrement = params.stepIncrement;
        self.minNeighbors = params.minNeighbors;
        self.doCannyPruning = params.doCannyPruning;
        self.tolerance = params.tolerance;
        self.cannyLow = params.cannyLow;
        self.cannyHigh = params.cannyHigh;
        return self;
    }
    
    // detected objects are passed as filter metadata (if filter is run in parallel thread)
    ,metaData: function( serialisation ) {
        return serialisation && FILTER.isWorker ? TypedObj( this.meta ) : this.meta;
    }
    
    ,setMetaData: function( meta, serialisation ) {
        this.meta = serialisation && "string" === typeof meta ? TypedObj( meta, 1 ) : meta;
        return this;
    }
    
    // this is the filter actual apply method routine
    ,apply: function( im, w, h, metaData ) {
        var self = this;
        if ( !self.haardata ) return im;
        
        var imLen = im.length, imSize = imLen>>>2,
            selection = self.selection || null,
            A32F = FILTER.Array32F, SAT=null, SAT2=null, RSAT=null, GSAT=null, 
            x1, y1, x2, y2, features, FilterUtil = FILTER.Util.Filter;
        
        if ( selection )
        {
            if ( selection[4] )
            {
                // selection is relative, make absolute
                x1 = Min(w-1, Max(0, selection[0]*(w-1)));
                y1 = Min(h-1, Max(0, selection[1]*(h-1)));
                x2 = Min(w-1, Max(0, selection[2]*(w-1)));
                y2 = Min(h-1, Max(0, selection[3]*(h-1)));
            }
            else
            {
                // selection is absolute
                x1 = Min(w-1, Max(0, selection[0]));
                y1 = Min(h-1, Max(0, selection[1]));
                x2 = Min(w-1, Max(0, selection[2]));
                y2 = Min(h-1, Max(0, selection[3]));
            }
        }
        else
        {
            x1 = 0; y1 = 0;
            x2 = w-1; y2 = h-1;
        }
        
        // NOTE: assume image is already grayscale
        if ( metaData && metaData.haarfilter_SAT )
        {
            SAT = metaData.haarfilter_SAT; SAT2 = metaData.haarfilter_SAT2; RSAT = metaData.haarfilter_RSAT;
        }
        else
        {
            // pre-compute <del>grayscale,</del> SAT, RSAT and SAT2
            FilterUtil.sat(im, w, h, 2, 0, SAT=new A32F(imSize), SAT2=new A32F(imSize), RSAT=new A32F(imSize));
            if ( metaData ) { metaData.haarfilter_SAT = SAT; metaData.haarfilter_SAT2 = SAT2; metaData.haarfilter_RSAT = RSAT; }
        }
        
        // pre-compute integral canny gradient edges if needed
        if ( self.doCannyPruning )
        {
            if ( metaData && metaData.haarfilter_GSAT )
            {
                GSAT = metaData.haarfilter_GSAT;
            }
            else
            {
                GSAT = FilterUtil.gradient(im, w, h, 2, 0, 1, 1);
                if ( metaData ) { metaData.haarfilter_GSAT = GSAT; }
            }
        }
        
        // synchronous detection loop
        features = new Array(MAX_FEATURES); features.count = 0;
        FilterUtil.haar_detect(features, w, h, x1, y1, x2, y2, self.haardata, self.baseScale, self.scaleIncrement, self.stepIncrement, SAT, RSAT, SAT2, GSAT, self.cannyLow, self.cannyHigh);
        // truncate if needed
        if ( features.length > features.count ) features.length = features.count;
        
        // return results as meta
        self.meta = {objects: FilterUtil.merge_features(features, self.minNeighbors, self.tolerance)};
        
        // return im back
        return im;
    }
});

}(FILTER);
/* main code ends here */
/* export the module */
return FILTER;
});
