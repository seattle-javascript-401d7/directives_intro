module.exports = exports = function(app) {
  app.directive('gmTaskItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/task_item.html',
      require: '^gmTaskList',
      scope: {
        task: '='
      },
      link: function(scope, element, attr, controller) {
        scope.done = controller.completeTask;
      }
    };
  });
};
