module.exports = function (app) {
  app.directive("taskList", () => {
    return {
      restrict: "EAC",
      templateUrl: "templates/task_list.html",
      replace: true,
      transclude: true,
      scope: {
        tasks: "=",
        listTitle: "@"
      },
      controller: function ($scope) {
        this.completeTask = function (task) {
          $scope.tasks.splice($scope.tasks.indexOf(task), 1);
        };
      }
    };
  });
};
