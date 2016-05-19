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
        this.completeTask = function(task) {
          $scope.tasks.splice($scope.tasks.indexOf(task), 1);
        };
        this.addTask = function(task) {
          $scope.tasks.push(task);
          $scope.task = {};
        };
      }
    };
  });
};
