module.exports = exports = function(app) {
  app.directive('gmTaskList', function() {
    return {
      restrict: 'EAC',
      transclude: true,
      replace: true,
      templateUrl: 'templates/task_list.html',
      scope: {
        tasks: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.completeTask = function(task) {
          $scope.tasks.splice($scope.tasks.indexOf(task, 1));
        };
      }
    };
  });
};
