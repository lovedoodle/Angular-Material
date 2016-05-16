'use strict';

/**
 * @ngdoc function
 * @name slideShowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slideShowApp
 */
angular.module('clientApp')
  .controller('SlideshowCtrl', function ($scope) {
    $scope.images = [
      {src: "butter.jpg",
      name: 'butter',
      personality: "sweet"
      },
      {src: "jack.jpg",
      name: "jack",
      personality: 'friendly'
      },
      {src: "buckroo.jpg",
      name: 'buckroo',
      personality: 'great'
      },
      {src: 'arrow.jpg',
      name: 'arrow',
      personality: 'never bark'
      },
      {src: 'jupiter.jpg',
      name: 'jupiter',
      personality: 'cute '
      }
    ]

  });
