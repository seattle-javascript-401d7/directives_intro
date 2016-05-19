const angular = require("angular");
const todoApp = angular.module("todoApp", []);

require("./directives")(todoApp);

todoApp.controller("TasksCtrl", function () {
  this.fireflyTasks = [
    { desc: "Marathon Firefly over the weekend" },
    { desc: "Watch Serenity" },
    { desc: "Bemoan the stupidity of Fox for cancelling the best show ever" }
  ];
  this.saoTasks = [
    { desc: "Marathon both seasons" },
    { desc: "Watch the upcoming SAO movie" },
    { desc: "Check ANN to see if more seasons are in the works" }
  ];
});
