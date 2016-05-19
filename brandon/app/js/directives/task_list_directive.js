module.exports = function(app) {
  app.directive('taskList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      templateUrl: 'templates/task_list.html',
      scope: {
        tasks: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.finishTask = function(task) {
          $scope.tasks.splice($scope.tasks.indexOf(task), 1);
        };
      }
    };
  });
};
