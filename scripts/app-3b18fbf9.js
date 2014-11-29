"use strict";!function(){var e,t="directive.mobileNavbar";try{e=angular.module(t)}catch(n){e=angular.module(t,[])}e.directive("mobileNavbar",["$document","$window","$timeout",function(e,t,n){return function(){for(var e=0,n=["webkit","moz"],o=0;o<n.length&&!t.requestAnimationFrame;++o)t.requestAnimationFrame=t[n[o]+"RequestAnimationFrame"],t.cancelAnimationFrame=t[n[o]+"CancelAnimationFrame"]||t[n[o]+"CancelRequestAnimationFrame"];t.requestAnimationFrame||(t.requestAnimationFrame=function(n){var o=(new Date).getTime(),a=Math.max(0,16-(o-e)),i=t.setTimeout(function(){n(o+a)},a);return e=o+a,i}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(e){clearTimeout(e)})}(),{restrict:"AE",link:function(o,a){function i(e){t.requestAnimationFrame(function(){var t;t=e?-l.height+"px":"",a.css({"margin-top":t})})}function r(){angular.element(l.window.$).on("scroll",function(){if(!(l.document.height<=l.window.height)){if(l.window.scrollTop=l.window.$.scrollY,l.window.scrollTop>=l.top)a.hasClass("fixed")||a.addClass("fixed transition");else if(a.hasClass("fixed"))return void a.removeClass("transition fixed").css({"margin-top":""});l.timeout||(l.timeout=n(function(){Math.abs(l.window.lastScroll-l.window.scrollTop)<=l.height/2||(l.window.scrollTop>l.window.lastScroll&&l.window.scrollTop>=l.top+l.height?a.hasClass("fixed")&&""===a.css("margin-top")&&i(!0):a.hasClass("fixed")&&a.css("margin-top")===-l.height+"px"&&i(!1),l.window.lastScroll=l.window.$.scrollY)},50).then(function(){t.requestAnimationFrame(function(){l.timeout=!1})}))}})}var l={height:a[0].offsetHeight,document:{$:e[0],height:0},timeout:!1,top:a[0].getBoundingClientRect().top+t.scrollY,window:{$:t,height:t.innerHeight,lastScroll:0,scrollTop:0,timeout:!1}};o.$on("$viewContentLoaded",function(){n(function(){l.document.height=Math.max(l.document.$.documentElement.clientHeight,l.document.$.body.scrollHeight,l.document.$.documentElement.scrollHeight,l.document.$.body.offsetHeight,l.document.$.documentElement.offsetHeight),r()},0)}),function(){angular.element(l.window.$).on("resize",function(){angular.element(l.window.$).off("scroll"),clearTimeout(l.window.timeout),l.window.timeout=setTimeout(function(){a.hasClass("fixed")&&a.removeClass("transition fixed").css({"margin-top":""}),l.document.height=Math.max(l.document.$.documentElement.clientHeight,l.document.$.body.scrollHeight,l.document.$.documentElement.scrollHeight,l.document.$.body.offsetHeight,l.document.$.documentElement.offsetHeight),l.window.height=l.window.$.innerHeight,l.top=a[0].getBoundingClientRect().top+l.window.$.scrollY,r()},200)})}()}}}])}();var wpUrl="http://www.goncaloneves.com/rest/wp-json/",app=angular.module("angularApp",["ngRoute","ngSanitize","directive.mobileNavbar"]);app.factory("restData",["$http",function(e){return function(t,n,o){var a="";return"all"!==t&&t?(a+="?type="+t,n&&(a+="page"===t?"&filter[pagename]="+n:"&filter[name]="+n)):a+="?type[]=post&type[]=page",e.get(wpUrl+"posts"+a,{cache:!1}).then(o,function(e){return e.data||"Request failed."})}}]),app.config(["$routeProvider","$locationProvider",function(e,t){e.when("/",{templateUrl:"app/home/home.html",controller:"PageCtrl",resolve:{data:["restData",function(e){return e("page","home",function(e){return e.data[0]})}]}}).when("/home",{redirectTo:"/"}).when("/:pageName",{templateUrl:"app/page/page.html",controller:"PageCtrl",resolve:{data:["$q","$route","$location","restData",function(e,t,n,o){return o("page",t.current.params.pageName,function(t){return 0===t.data.length?(n.path("/"),e.reject(t)):t.data[0]})}]}}).otherwise({redirectTo:"/"}),t.html5Mode(!0)}]),app.run(["$rootScope",function(e){e.page={setTitle:function(t){e.page.title=t+" | Gonçalo Neves"}},e.view={rendered:!1},e.$on("$routeChangeStart",function(){e.view.rendered=!1}),e.$on("$routeChangeSuccess",function(){e.view.rendered=!0})}]),angular.module("angularApp").controller("PageCtrl",["$rootScope","$scope","$sanitize","data",function(e,t,n,o){t.page.setTitle(o.title),t.page={title:o.title,content:n(o.content),featured:{src:o.featured_image.source,alt:o.featured_image.title}},e.view.rendered=!0}]),function(e){try{e=angular.module("angularApp")}catch(t){e=angular.module("angularApp",[])}e.run(["$templateCache",function(e){e.put("app/home/home.html",'<div class="title"><h1>{{page.title}}</h1></div><div class="content"><div class="img-wrapper"><img class="img-responsive" ng-src="{{page.featured.src}}" alt="{{page.featured.alt}}"></div><div class="text" ng-bind-html="page.content"></div></div>')}])}(),function(e){try{e=angular.module("angularApp")}catch(t){e=angular.module("angularApp",[])}e.run(["$templateCache",function(e){e.put("app/page/page.html",'<div class="container">{{page.title}} {{page.content}}</div>')}])}();