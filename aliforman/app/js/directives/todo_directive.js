module.exports = function(app) {
  app.directive('cfTodoDirective', () => {
    return {
      restrict: 'AC',
      templateUrl: 'templates/todo_directive.html',
      scope: {
        expressions: '=',
        literals: '@'
      },
      controller: ['$scope', function($scope) {
        $scope.literals = $scope.literals || 'literals';
        $scope.expressions = $scope.expressions || 'expressions';
      }]
    };
  });
};
