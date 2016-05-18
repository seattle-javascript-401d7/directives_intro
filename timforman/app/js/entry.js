const angular = require('angular');
const todoApp = angular.module('todoApp', []);

require('./directives')(todoApp);

todoApp.run(['$rootScope', function($rs) {
  $rs.todos = [
    { desc: 'Make this damn button work'},
    { desc: 'Finish this assignment' },
    { desc: 'Get some sleep'},
    { desc: 'Wake up too early and feed the cat'},
    { desc: 'Make coffee' }

  ];
}]);
