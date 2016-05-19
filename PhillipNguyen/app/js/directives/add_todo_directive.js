module.exports = function(app) {
  app.directive('addToDo', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/add_todo.html',
      require: '^taskList',
      scope: {
        task: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.task = {};
        scope.addtask = controller.addTask;
      }
    };
  });
};
