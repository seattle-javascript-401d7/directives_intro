const angular = require('angular');
const shoppingApp = angular.module('shoppingApp', []);

require('./directives')(shoppingApp);

shoppingApp.run(['$rootScope', function($rs) {
  $rs.items = [
    { name: 'apples' },
    { name: 'fish' },
    { name: 'soap' },
    { name: 'ketchup' },
    { name: 'bread' },
    { name: 'jam' },
    { name: 'flowers' }
  ];
}]);
