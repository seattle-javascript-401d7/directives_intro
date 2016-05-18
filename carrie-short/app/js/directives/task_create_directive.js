module.exports = function(app) {
  app.directive('taskCreate', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/task_create.html',
      require: '^taskList',
      scope: {},
      link: function(scope, element, attrs, controller) {
        scope.add = function(task) {
          controller.addTask(task);
          scope.desc = null;
        };
      }
    };
  });
};
