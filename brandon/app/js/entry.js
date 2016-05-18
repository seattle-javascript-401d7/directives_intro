const angular = require('angular');
const taskApp = angular.module('taskApp', []);

require('./directives')(taskApp);

taskApp.run(['$rootScope', function($rs) {
  $rs.tasks = [
    { description: 'schedule time to record' },
    { description: 'double check if everyone can meet on that day' },
    { description: 'practice your booty off' }
  ];
}]);
