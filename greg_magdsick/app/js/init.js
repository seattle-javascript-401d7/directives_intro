const angular = require('angular');
const listApp = angular.module('listApp', []);

require('./directives')(listApp);

listApp.run(['$rootScope', function($rs) {
  $rs.tasks = [
    { desc: 'Eat Lunch', due: 'today' },
    { desc: 'Sleep', due: 'June 10th' },
    { desc: 'Get a job', due: 'June 13th' }
  ];
}]);
