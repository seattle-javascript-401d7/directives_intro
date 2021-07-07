module.exports = function(app) {
  app.directive('editTaskList', function() {
    return {
      restrict: 'EAC',
      scope: {
        tasks: '=',
        listTitle: '@'
      },
      templateUrl: 'templates/edit_task_list.html'
    }
  });
};
