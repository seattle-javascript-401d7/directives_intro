module.exports = function(app) {
  app.directive('tfTodoDirective', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/todo_directive.html',
      scope: {
        todos: '=',
        lists: '@'
      },
      controller: ['scope', function($scope) {
        $scope.todos = $scope.todos;
        $scope.lists = $scope.lists;
      }]
    };
  });
}
