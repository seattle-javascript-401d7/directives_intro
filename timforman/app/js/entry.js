const angular = require('angular');
const todoApp = angular.module('todoApp', []);

require('./directives')(todoApp);

todoApp.run(['$rootScope', function($rs) {
  $rs.todos = [
    { desc: 'task 1'},
    { desc: 'task 2' },
    { desc: 'task 3'},
    { desc: 'task 4'},
    { desc: 'task 5' }
  ];
}]);
