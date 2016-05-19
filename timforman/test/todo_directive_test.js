const angular = require('angular');
const dummyTemplate = require('../app/templates/todo_directive.html');

describe('todo directive', function() {
  beforeEach(angular.mock.module('todoApp'));

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

  it('should create a todo directive with a controller binding', function() {
    $httpBackend.expectGET('templates/todo_directive.html').respond(200, todoTemplate);

    $scope.todo = 'test todo';
    var link = $compile('<div data-cf-todo-directive data-todos="wash the cat"></div>');
    var directive = link($scope);
    $httpBackend.flush();
    $scope.$digest();
    var h1 = directive.find('h1');
    var h2 = directive.find('h2');
    expect(h1.text()).toEqual($scope.todo);
    expect(h2.text()).toEqual('default');
    var input = directive.find('input');
    input.val('some new value');
    input.triggerHandler('input');
    expect($scope.todo).toEqual('some new value');
  });
});
