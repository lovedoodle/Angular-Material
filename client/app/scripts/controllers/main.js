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
    var $scope.toolBar = "false";
    var $scope.info = "false";
    $scope.showToolBar() = function() {
      $scope.info = !$scope.info;
      $scope.toolBar = !$scope.toolBar;
    }

  });
