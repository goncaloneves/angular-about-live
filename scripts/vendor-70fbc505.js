/**
 * @license AngularJS v1.3.4
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function(e,t){"use strict";/*
 * HTML Parser By Misko Hevery (misko@hevery.com)
 * based on:  HTML Parser By John Resig (ejohn.org)
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * // Use like so:
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 */
function r(){this.$get=["$$sanitizeUri",function(e){return function(t){var r=[];return i(t,c(r,function(t,r){return!/^unsafe/.test(e(t,r))})),r.join("")}}]}function n(e){var r=[],n=c(r,t.noop);return n.chars(e),r.join("")}function a(e){var t,r={},n=e.split(",");for(t=0;t<n.length;t++)r[n[t]]=!0;return r}function i(e,r){function n(e,n,i,s){if(n=t.lowercase(n),C[n])for(;x.last()&&S[x.last()];)a("",x.last());w[n]&&x.last()==n&&a("",n),s=b[n]||!!s,s||x.push(n);var c={};i.replace(p,function(e,t,r,n,a){var i=r||n||a||"";c[t]=o(i)}),r.start&&r.start(n,c,s)}function a(e,n){var a,i=0;if(n=t.lowercase(n))for(i=x.length-1;i>=0&&x[i]!=n;i--);if(i>=0){for(a=x.length-1;a>=i;a--)r.end&&r.end(x[a]);x.length=i}}"string"!=typeof e&&(e=null===e||"undefined"==typeof e?"":""+e);var i,s,c,$,x=[],y=e;for(x.last=function(){return x[x.length-1]};e;){if($="",s=!0,x.last()&&P[x.last()]?(e=e.replace(new RegExp("(.*)<\\s*\\/\\s*"+x.last()+"[^>]*>","i"),function(e,t){return t=t.replace(g,"$1").replace(v,"$1"),r.chars&&r.chars(o(t)),""}),a("",x.last())):(0===e.indexOf("<!--")?(i=e.indexOf("--",4),i>=0&&e.lastIndexOf("-->",i)===i&&(r.comment&&r.comment(e.substring(4,i)),e=e.substring(i+3),s=!1)):m.test(e)?(c=e.match(m),c&&(e=e.replace(c[0],""),s=!1)):d.test(e)?(c=e.match(h),c&&(e=e.substring(c[0].length),c[0].replace(h,a),s=!1)):f.test(e)&&(c=e.match(u),c?(c[4]&&(e=e.substring(c[0].length),c[0].replace(u,n)),s=!1):($+="<",e=e.substring(1))),s&&(i=e.indexOf("<"),$+=0>i?e:e.substring(0,i),e=0>i?"":e.substring(i),r.chars&&r.chars(o($)))),e==y)throw l("badparse","The sanitizer was unable to parse the following block of html: {0}",e);y=e}a()}function o(e){if(!e)return"";var t=U.exec(e),r=t[1],n=t[3],a=t[2];return a&&(O.innerHTML=a.replace(/</g,"&lt;"),a="textContent"in O?O.textContent:O.innerText),r+a+n}function s(e){return e.replace(/&/g,"&amp;").replace($,function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1);return"&#"+(1024*(t-55296)+(r-56320)+65536)+";"}).replace(x,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c(e,r){var n=!1,a=t.bind(e,e.push);return{start:function(e,i,o){e=t.lowercase(e),!n&&P[e]&&(n=e),n||D[e]!==!0||(a("<"),a(e),t.forEach(i,function(n,i){var o=t.lowercase(i),c="img"===e&&"src"===o||"background"===o;j[o]!==!0||E[o]===!0&&!r(n,c)||(a(" "),a(i),a('="'),a(s(n)),a('"'))}),a(o?"/>":">"))},end:function(e){e=t.lowercase(e),n||D[e]!==!0||(a("</"),a(e),a(">")),e==n&&(n=!1)},chars:function(e){n||a(s(e))}}}var l=t.$$minErr("$sanitize"),u=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,h=/^<\/\s*([\w:-]+)[^>]*>/,p=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,f=/^</,d=/^<\//,g=/<!--(.*?)-->/g,m=/<!DOCTYPE([^>]*?)>/i,v=/<!\[CDATA\[(.*?)]]>/g,$=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,x=/([^\#-~| |!])/g,b=a("area,br,col,hr,img,wbr"),y=a("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),k=a("rp,rt"),w=t.extend({},k,y),C=t.extend({},y,a("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),S=t.extend({},k,a("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),T=a("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),P=a("script,style"),D=t.extend({},b,C,S,w,T),E=a("background,cite,href,longdesc,src,usemap,xlink:href"),z=a("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),A=a("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),j=t.extend({},E,A,z),O=document.createElement("pre"),U=/^(\s*)([\s\S]*?)(\s*)$/;t.module("ngSanitize",[]).provider("$sanitize",r),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var r=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,a=/^mailto:/;return function(i,o){function s(e){e&&f.push(n(e))}function c(e,r){f.push("<a "),t.isDefined(o)&&f.push('target="',o,'" '),f.push('href="',e.replace('"',"&quot;"),'">'),s(r),f.push("</a>")}if(!i)return i;for(var l,u,h,p=i,f=[];l=p.match(r);)u=l[0],l[2]==l[3]&&(u="mailto:"+u),h=l.index,s(p.substr(0,h)),c(u,l[0].replace(a,"")),p=p.substring(h+l[0].length);return s(p),e(f.join(""))}}])}(window,window.angular),/**
 * @license AngularJS v1.3.4
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
function(e,t){"use strict";function r(){function e(e,r){return t.extend(Object.create(e),r)}function r(e,t){var r=t.caseInsensitiveMatch,n={originalPath:e,regexp:e},a=n.keys=[];return e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(e,t,r,n){var i="?"===n?n:null,o="*"===n?n:null;return a.push({name:r,optional:!!i}),t=t||"",""+(i?"":t)+"(?:"+(i?t:"")+(o&&"(.+?)"||"([^/]+)")+(i||"")+")"+(i||"")}).replace(/([\/$\*])/g,"\\$1"),n.regexp=new RegExp("^"+e+"$",r?"i":""),n}var n={};this.when=function(e,a){var i=t.copy(a);if(t.isUndefined(i.reloadOnSearch)&&(i.reloadOnSearch=!0),t.isUndefined(i.caseInsensitiveMatch)&&(i.caseInsensitiveMatch=this.caseInsensitiveMatch),n[e]=t.extend(i,e&&r(e,i)),e){var o="/"==e[e.length-1]?e.substr(0,e.length-1):e+"/";n[o]=t.extend({redirectTo:e},r(o,i))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(e){return"string"==typeof e&&(e={redirectTo:e}),this.when(null,e),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(r,a,i,o,c,l,u){function h(e,t){var r=t.keys,n={};if(!t.regexp)return null;var a=t.regexp.exec(e);if(!a)return null;for(var i=1,o=a.length;o>i;++i){var s=r[i-1],c=a[i];s&&c&&(n[s.name]=c)}return n}function p(e){var n=x.current;m=d(),v=m&&n&&m.$$route===n.$$route&&t.equals(m.pathParams,n.pathParams)&&!m.reloadOnSearch&&!$,v||!n&&!m||r.$broadcast("$routeChangeStart",m,n).defaultPrevented&&e&&e.preventDefault()}function f(){var e=x.current,n=m;v?(e.params=n.params,t.copy(e.params,i),r.$broadcast("$routeUpdate",e)):(n||e)&&($=!1,x.current=n,n&&n.redirectTo&&(t.isString(n.redirectTo)?a.path(g(n.redirectTo,n.params)).search(n.params).replace():a.url(n.redirectTo(n.pathParams,a.path(),a.search())).replace()),o.when(n).then(function(){if(n){var e,r,a=t.extend({},n.resolve);return t.forEach(a,function(e,r){a[r]=t.isString(e)?c.get(e):c.invoke(e,null,null,r)}),t.isDefined(e=n.template)?t.isFunction(e)&&(e=e(n.params)):t.isDefined(r=n.templateUrl)&&(t.isFunction(r)&&(r=r(n.params)),r=u.getTrustedResourceUrl(r),t.isDefined(r)&&(n.loadedTemplateUrl=r,e=l(r))),t.isDefined(e)&&(a.$template=e),o.all(a)}}).then(function(a){n==x.current&&(n&&(n.locals=a,t.copy(n.params,i)),r.$broadcast("$routeChangeSuccess",n,e))},function(t){n==x.current&&r.$broadcast("$routeChangeError",n,e,t)}))}function d(){var r,i;return t.forEach(n,function(n){!i&&(r=h(a.path(),n))&&(i=e(n,{params:t.extend({},a.search(),r),pathParams:r}),i.$$route=n)}),i||n[null]&&e(n[null],{params:{},pathParams:{}})}function g(e,r){var n=[];return t.forEach((e||"").split(":"),function(e,t){if(0===t)n.push(e);else{var a=e.match(/(\w+)(?:[?*])?(.*)/),i=a[1];n.push(r[i]),n.push(a[2]||""),delete r[i]}}),n.join("")}var m,v,$=!1,x={routes:n,reload:function(){$=!0,r.$evalAsync(function(){p(),f()})},updateParams:function(e){if(!this.current||!this.current.$$route)throw s("norout","Tried updating route when with no current route");var r={},n=this;t.forEach(Object.keys(e),function(t){n.current.pathParams[t]||(r[t]=e[t])}),e=t.extend({},this.current.params,e),a.path(g(this.current.$$route.originalPath,e)),a.search(t.extend({},a.search(),r))}};return r.$on("$locationChangeStart",p),r.$on("$locationChangeSuccess",f),x}]}function n(){this.$get=function(){return{}}}function a(e,r,n){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,i,o,s,c){function l(){f&&(n.cancel(f),f=null),h&&(h.$destroy(),h=null),p&&(f=n.leave(p),f.then(function(){f=null}),p=null)}function u(){var o=e.current&&e.current.locals,s=o&&o.$template;if(t.isDefined(s)){var u=a.$new(),f=e.current,m=c(u,function(e){n.enter(e,null,p||i).then(function(){!t.isDefined(d)||d&&!a.$eval(d)||r()}),l()});p=m,h=f.scope=u,h.$emit("$viewContentLoaded"),h.$eval(g)}else l()}var h,p,f,d=o.autoscroll,g=o.onload||"";a.$on("$routeChangeSuccess",u),u()}}}function i(e,t,r){return{restrict:"ECA",priority:-400,link:function(n,a){var i=r.current,o=i.locals;a.html(o.$template);var s=e(a.contents());if(i.controller){o.$scope=n;var c=t(i.controller,o);i.controllerAs&&(n[i.controllerAs]=c),a.data("$ngControllerController",c),a.children().data("$ngControllerController",c)}s(n)}}}var o=t.module("ngRoute",["ng"]).provider("$route",r),s=t.$$minErr("ngRoute");o.provider("$routeParams",n),o.directive("ngView",a),o.directive("ngView",i),a.$inject=["$route","$anchorScroll","$animate"],i.$inject=["$compile","$controller","$route"]}(window,window.angular);