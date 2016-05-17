"use strict";angular.module("clientApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial","ngMessages","ngAria"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/slideshow",{templateUrl:"views/slideshow.html",controller:"SlideshowCtrl",controllerAs:"slideshow"}).otherwise({redirectTo:"/"})}]),angular.module("clientApp").controller("MainCtrl",["$scope","$timeout",function(a,b){function c(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0}console.log(c()),a.is_touch_device=c(),console.log(a.is_touch_device)}]),angular.module("clientApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("clientApp").controller("SlideshowCtrl",["$scope",function(a){a.images=[{src:"butter.jpg",name:"butter",personality:"sweet"},{src:"jack.jpg",name:"jack",personality:"friendly"},{src:"buckroo.jpg",name:"buckroo",personality:"great"},{src:"arrow.jpg",name:"arrow",personality:"never bark"},{src:"jupiter.jpg",name:"jupiter",personality:"cute "},{src:"donald.jpg",name:"donald",personality:"gental men"}]}]),console.log("loading sliderjs"),angular.module("clientApp").directive("slideshow",function(){return{restrict:"E",replace:!0,templateUrl:"partials/slideshow.html",link:function(a,b,c){console.log("testing",arguments),a.currentIndex=0,a.next=function(){a.currentIndex<a.images.length-1?a.currentIndex++:a.currentIndex=0},a.prev=function(){a.currentIndex>0?a.currentIndex--:a.currentIndex=a.images.length-1},a.$watch("currentIndex",function(){a.images.forEach(function(a){a.visible=!1}),a.images[a.currentIndex].visible=!0,a.currentImg=a.currentIndex+1})}}}),angular.module("clientApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="mainWrap" ng-class="{nonTouchDevice: !is_touch_device}"> <div class="header" layout="column" layout-wrap> <div class="headline"> <h1>Hello & Welcome</h1> </div> <div class="content fade-in"> <p> My name Jing Wait. I am an aspiring full stack web developer who loves living in browers\' world. </p> <p> I am passionate about great design and writing Javascript and Ruby. Please take a look at my <a href="https://drive.google.com/file/d/0B6k_CGkGW3O1eGpKMmhvRkhWOFE/view?usp=sharing">Resume</a> and <a href="https://github.com/lovedoodle">Github repo</a> for some examples of my work. </p> <p> Below are some pet projects I have done with AngularJS, NodeJS, and Express based APIs. </p> </div> </div> <div layout="row" layout-wrap class="projectsWrap fade-in"> <!-- <div layout="row" layout-wrap layout-xs="column" layout-margin class=""> --> <div flex="33" flex-sm="50" flex-xs="100" class="projectsDiv"> <a href="https://hirejing.herokuapp.com/#/"> <img src="./images/stories.png" alt=""> <div ng-class="{intro: !is_touch_device, introTouchDeviceHide: is_touch_device, introTouchDeviceShow: is_touch_device && introShow3}"> <h3>Angular Material Portfolio</h3> <p> A responsive portfolio site done with the Angular Material framework and CSS3 Animation. </p> </div> </a> <div ng-show="is_touch_device" class="touchOnlyIcons"> <!-- <a href="https://hirejing.herokuapp.com/#/"><span class="glyphicon glyphicon-link" ng-show="toolBar3"></span></a>\n      <span class="glyphicon glyphicon-remove" ng-show="toolBar3" ng-click="toolBar3 = false; infoSign3 = false; introShow3 = false"></span>\n      <span class="glyphicon glyphicon-info-sign" ng-hide="infoSign3" ng-click="toolBar3 = true; infoSign3 = true; introShow3 = true"></span> --> <a href="https://hirejing.herokuapp.com/#/"><i class="fa fa-link" aria-hidden="true" ng-show="toolBar3"></i></a> <i class="fa fa-times" aria-hidden="true" ng-show="toolBar3" ng-click="toolBar3 = false; infoSign3 = false; introShow3 = false"></i> <i class="fa fa-info" aria-hidden="true" ng-hide="infoSign3" ng-click="toolBar3 = true; infoSign3 = true; introShow3 = true"></i> </div> </div> <div flex="33" flex-sm="50" flex-xs="100" class="projectsDiv"> <a href="https://angularpizzaplanet.herokuapp.com/"> <img src="./images/pizza.png" alt=""> <div ng-class="{intro: !is_touch_device, introTouchDeviceHide: is_touch_device, introTouchDeviceShow: is_touch_device && introShow2}"> <h3>Pizza Menu</h3> <p> A pet project I did with Yeoman/Angular practicing two-way data binding, inline editing and data persistence with MongoDB . </p> </div> </a> <div ng-show="is_touch_device" class="touchOnlyIcons"> <!-- <a href="https://angularpizzaplanet.herokuapp.com/"><span class="glyphicon glyphicon-link" ng-show="toolBar2"></span></a>\n      <span class="glyphicon glyphicon-remove" ng-show="toolBar2" ng-click="toolBar2 = false; infoSign2 = false; introShow2 = false"></span>\n      <span class="glyphicon glyphicon-info-sign" ng-hide="infoSign2" ng-click="toolBar2 = true; infoSign2 = true; introShow2 = true"></span> --> <a href="https://angularpizzaplanet.herokuapp.com/"><i class="fa fa-link" aria-hidden="true" ng-show="toolBar2"></i></a> <i class="fa fa-times" aria-hidden="true" ng-show="toolBar2" ng-click="toolBar2 = false; infoSign2 = false; introShow2 = false"></i> <i class="fa fa-info" aria-hidden="true" ng-hide="infoSign2" ng-click="toolBar2 = true; infoSign2 = true; introShow2 = true"></i> </div> </div> <div flex="33" flex-sm="50" flex-xs="100" class="projectsDiv"> <a href="https://twittersearchmap.herokuapp.com/"> <img src="./images/twittersearch.png" alt=""> <div ng-class="{intro: !is_touch_device, introTouchDeviceHide: is_touch_device, introTouchDeviceShow: is_touch_device && introShow1}"> <h3>Twitter Search API</h3> <p> Features include showing tweets on Google map and D3 bubble chart of trending tweets and topics. </p> </div> </a> <div ng-show="is_touch_device" class="touchOnlyIcons"> <a href="https://twittersearchmap.herokuapp.com/"><i class="fa fa-link" aria-hidden="true" ng-show="toolBar1"></i></a> <i class="fa fa-times" aria-hidden="true" ng-show="toolBar1" ng-click="toolBar1 = false; infoSign1 = false; introShow1 = false"></i> <i class="fa fa-info" aria-hidden="true" ng-hide="infoSign1" ng-click="toolBar1 = true; infoSign1 = true; introShow1 = true"></i> </div> </div> <div flex="33" flex-sm="50" flex-xs="100" class="projectsDiv"> <a href="#slideshow"> <img src="./images/butter.jpg" alt=""> <div ng-class="{intro: !is_touch_device, introTouchDeviceHide: is_touch_device, introTouchDeviceShow: is_touch_device && introShow4}"> <h3>Slide Show</h3> <p> Puppies Gallery </p> </div> </a> <div ng-show="is_touch_device" class="touchOnlyIcons"> <a href="#slideshow"><i class="fa fa-link" aria-hidden="true" ng-show="toolBar4"></i></a> <i class="fa fa-times" aria-hidden="true" ng-show="toolBar4" ng-click="toolBar4 = false; infoSign4 = false; introShow4 = false"></i> <i class="fa fa-info" aria-hidden="true" ng-hide="infoSign4" ng-click="toolBar4 = true; infoSign4 = true; introShow4 = true"></i> </div> </div> </div> <!-- //footer where stay social --> <div class="footer fade-in" layout="column"> <div class="contact" layout="row" layout-wrap layout-align="center center"> <div class="" flex="25" flex-xs="50" layout="column" layout-align="center center"> <a href="mailto:jingzhaowait@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a> </div> <div class="" flex="25" flex-xs="50" layout="column" layout-align="center center"> <a href="https://github.com/lovedoodle"><i class="fa fa-github-alt" aria-hidden="true"></i></a> </div> <div class="" flex="25" flex-xs="50" layout="column" layout-align="center center"> <a href="https://www.instagram.com/jing.wait/"><i class="fa fa-instagram" aria-hidden="true"></i></a> </div> <div class="" flex="25" flex-xs="50" layout="column" layout-align="center center"> <a href="https://twitter.com/JingWait"><i class="fa fa-twitter" aria-hidden="true"></i></a> </div> </div> </div> </div>'),a.put("views/slideshow.html",'<div class="dogSlideShow container"> <slideshow></slideshow> </div>'),a.put("partials/slideshow.html",'<div class="slideShow" ng-repeat="image in images" ng-show="image.visible" layout="row" layout-xs="column" layout-padding layout-wrap> <div class="" flex="100"> <h2>Which pooch you like most?</h2> </div> <div class="slideImg" flex="55" flex-xs="100"> <img ng-src="images/{{image.src}}"> <i class="fa fa-chevron-left" aria-hidden="true" ng-click="prev()"></i> <i class="fa fa-chevron-right" aria-hidden="true" ng-click="next()"></i> <i class="fa fa-camera" aria-hidden="true"> {{currentImg}} / {{images.length}}</i> </div> <div class="slideText" flex="40" flex-xs="100"> <h3>{{image.name}}</h3> <p> {{image.personality}} </p> </div> </div>')}]);