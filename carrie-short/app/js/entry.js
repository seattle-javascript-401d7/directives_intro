const angular = require('angular');
require(__dirname + '/../css/style.css');
const taskApp = angular.module('taskApp', []);

require('./directives')(taskApp);

taskApp.controller('TasksController', function() {
  this.tasks = [
    { desc: 'some task' },
    { desc: 'another task' },
    { desc: 'and another' },
    { desc: 'and another one' }
  ];
  this.description = 'Description from controller';
});
