const angular = require('angular');
const remodelApp = angular.module('remodelApp', []);

require('./directives')(remodelApp);

remodelApp.run(['$rootScope', function($rootscope) {
  $rootscope.works = [
    {description: 'put up shades in garage'},
    {description: 'move tools and equipment to garage'},
    {description: 'clean basement floor'},
    {description: 'stain basement floor'},
    {description: 'hire bathroom contractor'},
    {description: 'hire window contractor'},
    {description: 'finish bedroom framing'},
    {description: 'run wiring and install lighting'},
    {description: 'install drywall'},
    {description: 'install doors'},
    {description: 'paint bedroom'}
  ];
}]);
