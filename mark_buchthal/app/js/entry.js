
const angular = require('angular');
const cookieApp = angular.module('cookieApp', []);

require('./directives')(cookieApp);

cookieApp.run(['$rootScope', function($rootScope) {
  $rootScope.cookies = [
      { name: 'macaron' },
      { name: 'chocolate chip' },
      { name: 'oatmeal' }
  ];
}]);
