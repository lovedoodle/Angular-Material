'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    // 'ngAnimate2',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMessages',
    'ngAria'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/slideshow', {
        templateUrl: 'views/slideshow.html',
        controller: 'SlideshowCtrl',
        controllerAs: 'slideshow'
      })
      .when('/sticky-header', {
        templateUrl: 'views/sticky-header.html',
        // controller: 'StickyHeaderCtrl',
        // controllerAs: 'stickyHeader'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
