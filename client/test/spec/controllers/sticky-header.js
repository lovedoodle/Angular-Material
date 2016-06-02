'use strict';

describe('Controller: StickyHeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StickyHeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StickyHeaderCtrl = $controller('StickyHeaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StickyHeaderCtrl.awesomeThings.length).toBe(3);
  });
});
