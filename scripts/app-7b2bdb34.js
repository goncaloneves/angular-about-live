"use strict";!function(){var e,t="directive.autohideNavbar";try{e=angular.module(t)}catch(n){e=angular.module(t,[])}e.directive("autohideNavbar",["$document","$window","$timeout",function(e,t,n){return function(){for(var e=0,n=["webkit","moz"],a=0;a<n.length&&!t.requestAnimationFrame;++a)t.requestAnimationFrame=t[n[a]+"RequestAnimationFrame"],t.cancelAnimationFrame=t[n[a]+"CancelAnimationFrame"]||t[n[a]+"CancelRequestAnimationFrame"];t.requestAnimationFrame||(t.requestAnimationFrame=function(n){var a=(new Date).getTime(),i=Math.max(0,16-(a-e)),o=t.setTimeout(function(){n(a+i)},i);return e=a+i,o}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(e){clearTimeout(e)})}(),{restrict:"AE",link:function(a,i){function o(e){t.requestAnimationFrame(function(){var t;t=e?-l.height+"px":"",i.css({"margin-top":t})})}function r(){angular.element(l.window.$).on("scroll",function(){if(!(l.document.height<=l.window.height)){if(l.window.scrollTop=l.window.$.scrollY,l.window.scrollTop>=l.top)i.hasClass("fixed")||i.addClass("fixed transition");else if(i.hasClass("fixed"))return void i.removeClass("transition fixed").css({"margin-top":""});l.timeout||(l.timeout=n(function(){Math.abs(l.window.lastScroll-l.window.scrollTop)<=l.height/2||(l.window.scrollTop>l.window.lastScroll&&l.window.scrollTop>=l.top+l.height?i.hasClass("fixed")&&""===i.css("margin-top")&&o(!0):i.hasClass("fixed")&&i.css("margin-top")===-l.height+"px"&&o(!1),l.window.lastScroll=l.window.$.scrollY)},50).then(function(){t.requestAnimationFrame(function(){l.timeout=!1})}))}})}var l={height:i[0].offsetHeight,document:{$:e[0],height:0},timeout:!1,top:i[0].getBoundingClientRect().top+t.scrollY,window:{$:t,height:t.innerHeight,lastScroll:0,scrollTop:0,timeout:!1}};a.$on("$viewContentLoaded",function(){n(function(){l.document.height=Math.max(l.document.$.documentElement.clientHeight,l.document.$.body.scrollHeight,l.document.$.documentElement.scrollHeight,l.document.$.body.offsetHeight,l.document.$.documentElement.offsetHeight),r()},0)}),angular.element(l.window.$).on("resize",function(){angular.element(l.window.$).off("scroll"),n.cancel(l.window.timeout),l.window.timeout=n(function(){i.hasClass("fixed")&&i.removeClass("transition fixed").css({"margin-top":""}),l.document.height=Math.max(l.document.$.documentElement.clientHeight,l.document.$.body.scrollHeight,l.document.$.documentElement.scrollHeight,l.document.$.body.offsetHeight,l.document.$.documentElement.offsetHeight),l.window.height=l.window.$.innerHeight,l.top=i[0].getBoundingClientRect().top+l.window.$.scrollY,r()},200)})}}}])}();var wpUrl="http://www.goncaloneves.com/rest/wp-json/",app=angular.module("angularApp",["ngRoute","ngSanitize","ngTouch","directive.autohideNavbar"]);app.factory("restData",["$http",function(e){return function(t,n,a){var i="";return"all"!==t&&t?(i+="?type="+t,n&&(i+="page"===t?"&filter[pagename]="+n:"&filter[name]="+n)):i+="?type[]=post&type[]=page",e.get(wpUrl+"posts"+i,{cache:!0}).then(a,function(e){return e.data||"Request failed."})}}]),app.config(["$routeProvider","$locationProvider",function(e,t){e.when("/",{templateUrl:"app/page/page.html",controller:"PageCtrl",resolve:{data:["restData",function(e){return e("page","home",function(e){return e.data[0]})}]}}).when("/home",{redirectTo:"/"}).when("/:pageName",{templateUrl:"app/page/page.html",controller:"PageCtrl",resolve:{data:["$q","$route","$location","restData",function(e,t,n,a){return a("page",t.current.params.pageName,function(t){return 0===t.data.length?(n.path("/"),e.reject(t)):t.data[0]})}]}}).otherwise({redirectTo:"/"}),t.html5Mode(!0)}]),app.run(["$rootScope","$timeout","$window",function(e,t,n){e.page={setTitle:function(t){e.page.title=t+" | Gonçalo Neves"}},e.menuMobile=!1;var a;angular.element(n).on("resize",function(){t.cancel(a),a=t(function(){n.innerWidth>=768&&(e.menuMobile=!1)},200)}),e.view={rendered:!1};var i=e.$on("$viewContentLoaded",function(){e.view.rendered=!0,i()})}]),angular.module("angularApp").controller("PageCtrl",["$rootScope","$scope","$sanitize","data",function(e,t,n,a){t.page.setTitle(a.title),t.page={title:a.title,content:n(a.content),featured:{alt:a.featured_image.title,height:a.featured_image.attachment_meta.height,src:a.featured_image.source,width:a.featured_image.attachment_meta.width}}}]),function(e){try{e=angular.module("angularApp")}catch(t){e=angular.module("angularApp",[])}e.run(["$templateCache",function(e){e.put("app/home/home.html",'<div class="title"><h1>{{page.title}}</h1></div><div class="content"><div class="img-wrapper"><img class="img-responsive" ng-src="{{page.featured.src}}" alt="{{page.featured.alt}}"></div><div class="text" ng-bind-html="page.content"></div></div>')}])}(),function(e){try{e=angular.module("angularApp")}catch(t){e=angular.module("angularApp",[])}e.run(["$templateCache",function(e){e.put("app/page/page.html",'<div class="title"><h1 class="text-uppercase">{{page.title}}</h1></div><div class="content"><div class="img-wrapper"><img alt="{{page.featured.alt}}" class="img-responsive" height="{{page.featured.height}}" ng-src="{{page.featured.src}}" width="{{page.featured.width}}"></div><div class="text" ng-bind-html="page.content"></div></div>')}])}(),function(e){try{e=angular.module("angularApp")}catch(t){e=angular.module("angularApp",[])}e.run(["$templateCache",function(e){e.put("components/includes/navbar-list/navbar-list.include.html",'<li class="pull-left hidden-xs navbar-item"><a data-icon="i" href="/" title="About">About</a></li>')}])}();