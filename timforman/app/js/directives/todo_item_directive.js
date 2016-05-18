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
  app.directive("clickToEdit", function() {
    return {
      restrict: "A",
      replace: true,
      templateUrl: 'templates/editor.html',
      scope: {
        value: "=clickToEdit",
      },
      link: function(scope, element, attrs) {
        scope.view = {
          editableValue: scope.value,
          editorEnabled: false
        };

        scope.enableEditor = function() {
          scope.view.editorEnabled = true;
          scope.view.editableValue = scope.value;
        };

        scope.disableEditor = function() {
          scope.view.editorEnabled = false;
        };

        scope.save = function() {
          scope.value = scope.view.editableValue;
          scope.disableEditor();
        };

      }
    };
  });
};
