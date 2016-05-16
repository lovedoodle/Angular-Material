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


        scope.next = function() {
          scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;

        };

        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
        };
        scope.$watch('currentIndex', function() {
        scope.images.forEach(function(image) {
          image.visible = false; // make every image invisible
        });

        scope.images[scope.currentIndex].visible = true; // make the current image visible
        scope.currentImg = scope.currentIndex + 1;
      });
      }
    };
  });
