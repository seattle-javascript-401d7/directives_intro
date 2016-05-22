const angular = require('angular');
const shoppingApp = angular.module('shoppingApp', []);

require('./directives')(shoppingApp);

shoppingApp.controller('DemoController', ['$scope', function($scope) {
  $scope.items = $scope.items || 'default';
  $scope.list = $scope.list || 'hello from default';
}]);

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
