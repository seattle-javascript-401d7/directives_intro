const angular = require('angular');
const demoApp = angular.module('demoApp', []);

require('./directives')(demoApp);

demoApp.run(['$rootScope', function($rs) {
  $rs.todos = [
    { desc: 'do grocery shopping' },
    { desc: 'clean the fridge' },
    { desc: 'give the cat a bath' },
    { desc: 'shampoo carpet' }
  ];
}]);
