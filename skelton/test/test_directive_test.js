const angular = require('angular');
const testTemplate = require('../app/templates/test_template.html');

describe('test directive', function(){
  beforeEach(angular.mock.module('hwTrack'));

  var $httpBackend;
  var $compile;
  var $scope;
  var $rootScope;

  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_, _$httpBackend_){
    $httpBackend = _$httpBackend_;
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));
  it('should create a test directive with controller binding', function() {
    $httpBackend.expectGET('templates/test_template.html').respond(200, testTemplate);
    $scope.greeting = 'test greeting';
    var link = $compile('<div data-cf-test-directive data-rhinos="greeting"></div>');
    var directive = link($scope);
    $httpBackend.flush();
    var h1 = directive.find('h1');
    var h2 = directive.find('h2');
    expect(h1.text()).toEqual($scope.greeting);
    expect(h2.text()).toEqual('default');
  });
});
