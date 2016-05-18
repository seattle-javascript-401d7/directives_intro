const angular = require('angular');
const fakeApp = angular.module('fakeApp', []);

require('./directives')(fakeApp);

fakeApp.run(['$rootScope', function($rootScope) {
  $rootScope.players = [
    { name: 'Normand Harvey', position: 'Inner Midfielder' },
    { name: 'Izcautzin Arizmendi', position: 'Winger' },
    { name: 'Bernard Boulanger', position: 'Forward' },
    { name: 'Elwood Finch', position: 'Withdrawn Forward' },
    { name: 'Nikos Galanos', position: 'Forward' },
    { name: 'Roger Wilcox', position: 'Attacking Midfielder' },
    { name: 'Randy Baribeau', position: 'Winger' }
  ];
}]);
