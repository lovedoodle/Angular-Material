'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
    function is_touch_device() {
     return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
    };

    console.log(is_touch_device());

  //   if (!is_touch_device()) {
  //    var touchOnlyElements=document.getElementByClassName('touchOnly');
  //    for(i=0; i<touchOnlyElements.length; i++) {
  //      var touchOnlyElement = touchOnlyElements(i);
  //      console.log(touchOnlyElement);
  //      touchOnlyElement.style.display='none';
  //    }
   //
  //   //  .style.display='none';
  //  };


    $scope.infoSign = false;
    $scope.toolBar = false;
    $scope.showToolBar = function() {
      $scope.infoSign = !$scope.infoSign;
      $scope.toolBar = !$scope.toolBar;
    };
    $scope.hideToolBar = function() {
      $scope.infoSign = !$scope.infoSign;
      $scope.toolBar = !$scope.toolBar;
    }

  });
