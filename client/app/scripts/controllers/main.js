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
    // $scope.is_touch_device = true; //false == desktop mode, true == phone mode
    // console.log($scop);
    $scope.is_touch_device = is_touch_device();
    console.log($scope.is_touch_device);

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

  });
