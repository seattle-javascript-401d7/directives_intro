module.exports = function (app) {
  app.directive("taskItem", () => {
    return {
      restrict: "EAC",
      templateUrl: "templates/task_item.html",
      replace: true,
      require: "^taskList",
      scope: {
        task: "="
      },
      link: function (scope, element, attrs, controller) {
        scope.done = controller.completeTask;
      }
    };
  });
};
