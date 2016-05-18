
const angular = require('angular');
const cookieListTemplate = require('../app/templates/cookie_list.html');

describe('cookie directive', () => {
  beforeEach(angular.mock.module('cookieApp'));

  var $httpBackend;
  var $compile;
  var $scope;
  var $rootScope;

  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));

  it('should create a cookie directive with controller binding', function() {
    $httpBackend.expectGET('templates/cookie_list.html').respond(200, cookieListTemplate);
    $scope.cookieTitle = 'test cookieTitle';
    var link = $compile('<div data-cookie-title></div>');
    var directive = link($scope);
    $httpBackend.flush();
    var h1 = directive.find('h1');
    expect(h1.text()).toEqual($scope.cookieTitle);
  });


});
