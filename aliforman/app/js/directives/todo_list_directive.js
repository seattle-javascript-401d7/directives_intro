module.exports = function(app) {
  app.directive('todoList', () => {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/todo_list.html',
      scope: {
        todos: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.completeTodo = function(todo) {
          $scope.todos.splice($scope.todos.indexOf(todo), 1);
        };
      }
    };
  });
};
