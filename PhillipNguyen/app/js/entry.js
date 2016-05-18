const angular = require('angular');
const todoList = angular.module('todoList', []);

require('./directives')(todoList);

todoList.run(['$rootScope', function($rs) {
  $rs.tasks = [
    { item: 'Eat breakfast' },
    { item: 'Goto class' },
    { item: 'Study' },
    { item: 'Goto lecture' },
    { item: 'Go home and goto the gym' }
  ];
}]);
