'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    function is_touch_device() {
     return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
    };

    console.log(is_touch_device());
    // $scope.is_touch_device = true; //false == desktop mode, true == phone mode
    // console.log($scop);
    $scope.is_touch_device = is_touch_device();
    console.log($scope.is_touch_device);


    // $timeout(function() {
    //   $scope.showRestPage = true;
    // }, 1000);


  });
