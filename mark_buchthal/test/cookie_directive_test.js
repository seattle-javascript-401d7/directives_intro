
const angular = require('angular');
const cookieListTemplate = require('../app/templates/cookie_list.html');

describe('cookie directive', () => {
  beforeEach(angular.mock.module('cookieApp'));

  var $httpBackend, $compile, $scope;

  beforeEach(angular.mock.inject(function(_$compile_, $rootScope, _$httpBackend_) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $compile = _$compile_;
  }));

  it('should transclude some html', function() {
    $httpBackend.expectGET('templates/cookie_list.html').respond(200, cookieListTemplate);
    var cookieList = $compile('<cookie-list data-cookie-title="test cookie" data-cookies="\'hello from test cookie\'"><p>this is transcluded</p></cookie-list>')($scope);
    $httpBackend.flush();
    expect(cookieDirective.html().indexOf('hello from test')).not.toBe(-1);
  });

  // it('should create a cookie directive with controller binding', function() {
  //   $httpBackend.expectGET('templates/cookie_list.html').respond(200, cookieListTemplate);
  //   $scope.cookieTitle = 'test';
  //   var link = $compile('<div data-cookie-title></div>');
  //   var directive = link($scope);
  //   $httpBackend.flush();
  //   var h1 = directive.find('h1');
  //   expect(h1.text()).toEqual($scope.cookieTitle);
  // });
});
