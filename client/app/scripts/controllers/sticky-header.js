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
    $scope.gallery = [{url: "../../images/tent.jpg"},{url: "../../images/camping-coffee.jpg"}, {url: "../../images/fly-fishing.jpg"}, {url: "../../images/rowing.jpg"}]
    $interval(function() {
      if(window.pageYOffset >= 70) {
        jQuery("nav").addClass("visibleHeader");
      }else {
        jQuery("nav").removeClass("visibleHeader");
      }
      // console.log(  $("#mainGallery").css("background-image"));
      // console.log($scope.gallery[2]);
    }, 100);
    // console.log($("#mainGallery").length, "url('"+$scope.gallery[2].url+"')");
    $scope.currentIndex = 0;
    $scope.currentImage = $scope.gallery[$scope.currentIndex];
    $("#mainGallery").css("background-image", "url('"+$scope.currentImage.url+"')");
    // debugger;
    $interval(function () {
      $scope.currentImage = $scope.gallery[$scope.currentIndex];
      $scope.currentIndex < $scope.gallery.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;

      $("#mainGallery").css("background-image", "url('"+$scope.currentImage.url+"')");

    }, 3000);



  });
