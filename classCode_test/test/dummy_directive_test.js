const angular = require('angular');
const dummyTemplate = require('../app/templates/dummy_directive.html');

describe('dummy directive', function() {
  beforeEach(angular.mock.module('demoApp'));

  var $httpBackend;
  var $compile;
  var $rootScope;
  var $scope;

  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
    var $httpBackend = _$httpBackend_;
    var $compile = _$compile_;
    var $rootScope = _$rootScope_;
    var $scope = $rootScope.new();
  }));

  it('should create a dummy directive with a controller binding', function() {
    $httpBackend.expectGET('templates/dummy_directive.html').respond(200, dummyTemplate);

    $scope.greeting = 'test greeting';
    var link = $compile('<section data-cf-dummy-directive data-unicorns="greeting"></section>');
    var directive = link($scope);
    $httpBackend.flush();
    $scope.$digest();
    var h1 = directive.find('h1');
    var h2 = directive.find('h2');
    expect(h1.text()).toEqual($scope.greeting);
    expect(h2.text()).toEqual('default');
    var input = directive.find('input');
    input.val('some new value');
    input.triggerHangler('input');
    expect($scope.greeting).toEqual('some new value');
  });
});
