const angular = require('angular');
const demoApp = angular.module('demoApp', []);

require('./directives')(demoApp);

todoApp.run(['$rootScope', function($rs) {
  $rs.checkList = [
    { desc: 'task 1'},
    { desc: 'task 2'},
    { desc: 'task 3'}
  ];
}]);


// const angular = require('angular');
// const demoApp = angular.module('demoApp', []);
//
// demoApp.controller('DemoController', ['$scope', function($scope) {
//   $scope.greeting = 'inside demo controller'
// }]);
//
// demoApp.directive('cfDummyDirective', function() {
//   return {
//     restrict: 'AC',
//     // template: '<h1>Hello From a directive</h1>'
//     templateUrl: 'templates/dummy_directive.html',
//     scope: {
//       unicorns: '=',
//       rainbows: '@'
//     },
//     controller: ['$scope', function($scope) {
//       $scope.rainbows = $scope.rainbows || 'default';
//       $scope.unicorns = $scope.unicorns || 'hello from default';
//     }]
//   };
// });
//
// demoApp.run(['$rootScope', function($rs) {
//   $rs.greeting = 'hello world';
// }]);
