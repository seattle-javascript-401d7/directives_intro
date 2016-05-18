module.exports = function(app) {
  app.directive('taskItem', function() {
    return {
      restrict: 'EAC',
      templateURL: 'templates/item.html',
      require: '^taskList',
      scope: {
        task: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.completeTask;
      }
    };
  });
};
