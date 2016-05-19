module.exports = function(app) {
  app.directive('todoItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/todo_item.html',
      require: '^todoList',
      scope: {
        todo: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.completeTodo;
      }
    }
  });
};
