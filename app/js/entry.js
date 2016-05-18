const angular = require('angular');
const myApp = angular.module('myApp', []);

require('./directives')(myApp);

myApp.run(['$rootScope', function($rs) {
  $rs.tasks = [
        { desc: 'carrots' },
        { desc: 'a potato' },
        { desc: 'coconut water' },
        { desc: 'chicken' },
        { desc: 'vodka' }
  ];
}]);
