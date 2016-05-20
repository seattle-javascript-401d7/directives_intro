const angular = require('angular');
const grocApp = angular.module('grocApp', []);

require('./directives')(grocApp);

grocApp.run(['$rootScope', function($rs) {
  $rs.groceries = [
    { description: 'coffee' },
    { description: 'orange juice' },
    { description: 'bread' },
    { description: 'chicken' },
    { description: 'spinach' }
  ];
}]);
