'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StickyHeaderCtrl
 * @description
 * # StickyHeaderCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StickyHeaderCtrl', function ($scope, $interval) {
    // setInterval(function() {
    //   console.log(new Date(), "interval");
    //   $scope.test = "A";
    // },1000);
    //
    // $scope.myButtonClick

    // $scope.headerVisible = false;
    $interval(function() {
      if(window.pageYOffset >= 70) {
        jQuery("nav").addClass("visibleHeader");
      }else {
        jQuery("nav").removeClass("visibleHeader");
      }
    }, 100);


  });
