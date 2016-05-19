const angular = require('angular');
const directiveApp = angular.module('directiveApp', []);

require('./directives')(directiveApp);

directiveApp.run(['$rootScope', function($rs) {
  $rs.stuffs = [
    {desc: 'STA #1'},
    {desc: 'STA #2'},
    {desc: 'STA #3'},
    {desc: 'STA #4'}
  ];
}]);
