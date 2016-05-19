const angular = require("angular");
const todoApp = angular.module("todoApp", []);

require("./directives")(todoApp);

todoApp.controller("TasksCtrl", function () {
  this.tasks = [
    { desc: "Re-submit broken assignments" },
    { desc: "Get caught up on current assignments" },
    { desc: "Get a metric fuck-ton of sleep" }
  ];
});
