!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=3)}([,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r=["IMG"],i=[27,81],a=function(e){return-1<r.indexOf(e.tagName)},d=function(e){return e.naturalWidth!==e.width},l=function(e){return e&&1===e.nodeType},c=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=t.margin,c=void 0===o?0:o,u=t.background,s=void 0===u?"#fff":u,m=t.scrollOffset,f=void 0===m?48:m,h=t.metaClick,p=t.container,g=t.template,v=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{bubbles:!1,cancelable:!1,detail:void 0};if("function"==typeof window.CustomEvent)return new CustomEvent(e,t);var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o},y=function(){if(T.original){if(T.original.dispatchEvent(v("show")),O=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,S=!0,T.zoomed=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,r=t.width,i=t.height,a=e.cloneNode(),d=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=o+d+"px",a.style.left=n+l+"px",a.style.width=r+"px",a.style.height=i+"px",a.style.transform="",a}(T.original),document.body.appendChild(H),C.template){var e=l(C.template)?C.template:document.querySelector(C.template);T.template=document.createElement("div"),T.template.appendChild(e.content.cloneNode(!0)),document.body.appendChild(T.template)}if(document.body.appendChild(T.zoomed),requestAnimationFrame(function(){document.body.classList.add("medium-zoom--open")}),T.original.style.visibility="hidden",T.zoomed.classList.add("medium-zoom-image--open"),T.zoomed.addEventListener("click",b),T.zoomed.addEventListener("transitionend",E),T.original.getAttribute("data-zoom-target")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.src=T.zoomed.getAttribute("data-zoom-target"),T.zoomedHd.onerror=function(){clearInterval(t),console.error("Unable to reach the zoom image target "+T.zoomedHd.src),T.zoomedHd=null,A()};var t=setInterval(function(){T.zoomedHd.naturalWidth&&(clearInterval(t),T.zoomedHd.classList.add("medium-zoom-image--open"),T.zoomedHd.addEventListener("click",b),document.body.appendChild(T.zoomedHd),A())},10)}else A()}},b=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,o=function(){S||!T.original||(T.original.dispatchEvent(v("hide")),S=!0,document.body.classList.remove("medium-zoom--open"),T.zoomed.style.transform="",T.zoomedHd&&(T.zoomedHd.style.transform="",T.zoomedHd.removeEventListener("click",e)),T.template&&(T.template.style.transition="opacity 150ms",T.template.style.opacity=0),T.zoomed.removeEventListener("click",e),T.zoomed.addEventListener("transitionend",M))};0<t?setTimeout(o,t):o()},z=function(e){e&&e.target?(T.original=e.target,y()):T.original?b():(T.original=x[0],y())},w=function(e){return(e.metaKey||e.ctrlKey)&&C.metaClick?window.open(e.target.getAttribute("data-original")||e.target.parentNode.href||e.target.src,"_blank"):(e.preventDefault(),void z(e))},E=function e(){S=!1,T.zoomed.removeEventListener("transitionend",e),T.original.dispatchEvent(v("shown"))},M=function e(){T.original&&(T.original.style.visibility="",document.body.removeChild(T.zoomed),T.zoomedHd&&document.body.removeChild(T.zoomedHd),document.body.removeChild(H),T.zoomed.classList.remove("medium-zoom-image--open"),T.template&&document.body.removeChild(T.template),S=!1,T.zoomed.removeEventListener("transitionend",e),T.original.dispatchEvent(v("hidden")),T.original=null,T.zoomed=null,T.zoomedHd=null,T.template=null)},L=function(){if(!S&&T.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(O-e)>C.scrollOffset&&b(150)}},k=function(e){-1<i.indexOf(e.keyCode||e.which)&&b()},A=function(){var e=Math.min;if(T.original){var t,o,r={width:window.innerWidth,height:window.innerHeight,left:0,top:0,right:0,bottom:0};if(C.container)if(C.container instanceof Object)n(r,C.container),t=r.width-r.left-r.right-2*C.margin,o=r.height-r.top-r.bottom-2*C.margin;else{var i=(l(C.container)?C.container:document.querySelector(C.container)).getBoundingClientRect(),a=i.width,d=i.height,c=i.left,u=i.top;n(r,{width:a,height:d,left:c,top:u})}t=t||r.width-2*C.margin,o=o||r.height-2*C.margin;var s=T.zoomedHd||T.original,m=s.naturalWidth,f=void 0===m?t:m,h=s.naturalHeight,p=void 0===h?o:h,g=s.getBoundingClientRect(),v=g.top,y=g.left,b=g.width,z=g.height,w=e(e(f,t)/b,e(p,o)/z)||1,E="scale("+w+") translate3d("+((t-b)/2-y+C.margin+r.left)/w+"px, "+((o-z)/2-v+C.margin+r.top)/w+"px, 0)";T.zoomed.style.transform=E,T.zoomedHd&&(T.zoomedHd.style.transform=E)}},C={margin:c,background:s,scrollOffset:f,metaClick:void 0===h||h,container:p,template:g};e instanceof Object&&n(C,e);var x=function(e){try{return Array.isArray(e)?e.filter(a):function(e){return NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e)}(e)?Array.apply(null,e).filter(a):l(e)?[e].filter(a):"string"==typeof e?Array.apply(null,document.querySelectorAll(e)).filter(a):Array.apply(null,document.querySelectorAll(r.map(function(e){return e.toLowerCase()}).join(","))).filter(d)}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}}(e),H=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.backgroundColor=e,t}(C.background),T={original:null,zoomed:null,zoomedHd:null,template:null},O=0,S=!1;return x.forEach(function(e){e.classList.add("medium-zoom-image"),e.addEventListener("click",w)}),H.addEventListener("click",b),document.addEventListener("scroll",L),document.addEventListener("keyup",k),window.addEventListener("resize",b),{show:z,hide:b,toggle:z,update:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e.background&&(H.style.backgroundColor=e.background),e.container&&e.container instanceof Object&&(e.container=n({},C.container,e.container)),n(C,e)},addEventListeners:function(e,t){x.forEach(function(o){o.addEventListener(e,t)})},detach:function(){T.zoomed&&b();var e=v("detach");x.forEach(function(t){t.classList.remove("medium-zoom-image"),t.removeEventListener("click",w),t.dispatchEvent(e)}),x.splice(0,x.length),H.removeEventListener("click",b),document.removeEventListener("scroll",L),document.removeEventListener("keyup",k),window.removeEventListener("resize",b)},images:x,options:C}},u=Object.freeze({default:c});!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var s=u&&c||u;t.default=s},function(e,t,o){"use strict";var n=r(o(2));r(o(1));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(0,n.default)(".zoomable",{margin:48});var a=document.querySelector("#logo"),d=document.querySelector("#logo-track svg"),l=document.querySelector("#logo-name"),c=document.querySelector("#logo-magnifier"),u=document.querySelector("#logo-magnifier-pos"),s=document.querySelector("#logo .content"),m=document.querySelector("#logo-tooltip"),f=["05","06","07","08"],h=["000","005","010","015","020"],p=[[.1,0,.05,.1,.15,0,0],[.1,.2,.15,0,.1,.05,.05],[.05,0,.05,.05,.15,0,.1]],g=[[.2,.5,1,.7,.2],[.4,.9,.8,.75,.2],[.3,.6,.85,1,.1]],v=[4,5,6],y={},b=function(e){Object.values(y).forEach(function(e){return clearTimeout(e)}),Array.prototype.forEach.call(d.children,function(e){e.setAttribute("height",0),e.setAttribute("class","animation-duration-02")}),a.insertBefore(c,s);var t=d.getBoundingClientRect(),o=t.width,n=t.height,r=l.getBoundingClientRect(),m=r.left,b=r.width;d.setAttribute("viewBox","0 0 "+o+" "+n),d.setAttribute("preserveAspectRatio","none");var z=v[0];o>960?z=v[1]:o>1600&&(z=z[2]);for(var w=Math.ceil(o/z),E=Math.ceil(m/z),M=Math.ceil(b/z),L=Math.round(.2*M),k=d.children,A=0;A<w;A+=7)for(var C=p[Math.round(Math.random()*(p.length-1))],x=0;x<7;x++){var H=k[A+x]||document.createElementNS("http://www.w3.org/2000/svg","rect"),T=Math.round(4*Math.random())/4*.1*(1-2*Math.round(Math.random())),O=Math.max(0,(C[x]+T)*n),S=f[Math.round(3*Math.random())],P=h[Math.round(4*Math.random())];H.setAttribute("x",(A+x)*z),H.setAttribute("y",n-O),H.setAttribute("width",z),H.setAttribute("height",O),H.setAttribute("class","animation-duration-"+S+" animation-delay-"+P),k[A+x]||d.appendChild(H)}k=d.children;for(var q=function(e){for(var t=g[Math.round(Math.random()*(g.length-1))],o=0;o<5;o++){var r=Math.round(4*Math.random())/4*.2*(1-2*Math.round(Math.random())),i=Math.min(1,Math.max(0,t[o]+r))*n*(1-.5*Math.random());k[e+o].setAttribute("y",n-i),k[e+o].setAttribute("height",i)}},j=Math.round((o-b)/z/5/10),N=0,B=[];N<j;){var R=Math.round(Math.random()*(w-5));R>E-M&&R<E+M+L||(B.push(R),N++,q(R))}for(var W=Math.floor(j/2),_=0,I=[],Y=function(){var e=Math.round(Math.random()*(w-5));return e>E-M&&e<E+M+L?"continue":B.some(function(t){return e+2>=t&&e-2<=t+5})?"continue":(I.push(e),void _++)};_<W;)Y();q(E+2);for(var K=0;K<w;K++)k[K].setAttribute("class",k[K].getAttribute("class")+" animate");var U=function(e,t){for(var o=t?"peak":"no-peak",n=0;n<5;n++)k[e+n].setAttribute("class",k[e+n].getAttribute("class")+" "+o)};c.style.transform="translate("+E*z+"px, 0)",y[0]=setTimeout(function(){c.style.transition="opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",y[1]=setTimeout(function(){c.style.opacity=1},0),y[2]=setTimeout(function(){U(E+2,!0)},250);var t=[].concat(i(B.map(function(e){return{pos:e,isPos:!0}})),i(I.map(function(e){return{pos:e,isPos:!1}})));t.sort(function(e,t){return e.pos-t.pos});y[3]=setTimeout(function(){c.style.transition="transform 0.666s cubic-bezier(0.66, 0, 0.66, 1)"},250);y[8]=setTimeout(function(){return function o(n,r,i){var a=i?n:t[n].pos-2,d=!!i||t[n].isPos;c.style.transform="translate("+a*z+"px, 0)",y[4]=setTimeout(function(){U(a+2,d)},666),void 0!==t[r]?y[5]=setTimeout(function(){return o(r,r+1)},916):i?y[7]=setTimeout(function(){e&&e(),c.style.transition=null,c.style.transform=null,u.appendChild(c)},691):y[6]=setTimeout(function(){return o(E,void 0,!0)},916)}(0,1)},3e3)},1e3)};b(function(){m.innerHTML="Hooray 🎉 Peax found all peaks! Hit <code>R</code> to find some more."});var z=["Here we go again!","Will it work yet another time?","You are pushing Peax to its limit!","Can this really be true?","If it works one more time&hellip;"],w=["Wow! Peax did it again. Hit <code>R</code> for another round.","Magnificant! Peax always finds the peaks.","Unbelievable! As if Peax knows where the peaks are!","This must be some kind of trick? Right? Is Peax that good?","Absolutely spectacular!1! What a peak-finding extravaganza!"],E=function(e,t){return function(){m.innerHTML=t[e%t.length]}},M=0;window.addEventListener("keyup",function(e){82===e.keyCode&&(E(M,z)(),b(E(M,w)),M++)})}]);