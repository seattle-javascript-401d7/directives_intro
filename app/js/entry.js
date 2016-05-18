const angular = require('angular');
const demoApp = angular.module('demoApp', []);

require('./directives')(demoApp);

demoApp.run(['$rootScope', function($rs) {
  $rs.makes = [
    {desc: 'find recipes'},
    {desc: 'calculate quantity'},
    {desc: 'grocery shop'},
    {desc: 'begin food prep'}
  ];
}]);
