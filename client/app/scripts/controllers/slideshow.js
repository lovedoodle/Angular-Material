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
      personality: "Protector like Jon Snow, always looking out on the wall for the Whitewalker Squirrels"
      },
      {src: "jack.jpg",
      name: "jack",
      personality: 'Old wise man like Ser Barristan'
      },
      {src: "buckroo.jpg",
      name: 'Buckaroo',
      personality: 'Loyal but bit hardheaded, like Jorah Mormont'
      },
      {src: 'arrow.jpg',
      name: 'arrow',
      personality: 'Quiet like Hodor'
      },
      {src: 'jupiter.jpg',
      name: 'jupiter',
      personality: 'Naive and young but very earnest like Tommen'
      },
      {src: 'donald.jpg',
        name: 'donald',
        personality: 'Sweet and Quiet like Sam Tarly'
      }]

  });
