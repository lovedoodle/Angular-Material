console.log("loading sliderjs");
'use strict';

/**
 * @ngdoc function
 * @name slideShowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slideShowApp
 */

angular.module('clientApp')
  .directive('slideshow', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'partials/slideshow.html',
      link: function(scope, elem, attrs) {
        console.log("testing", arguments);
        scope.currentIndex = 0; // Initially the index is at the first image
        scope.currentImage = scope.images[scope.currentIndex];
        scope.next = function() {
          scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
          scope.currentImage = scope.images[scope.currentIndex];
        };

        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
          scope.currentImage = scope.images[scope.currentIndex];
        };
      }
    };
  });
