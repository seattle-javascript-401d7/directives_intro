const angular = require('angular');
const remodelApp = angular.module('remodelApp', []);
require('./directives')(remodelApp);

remodelApp.controller('WorksController', function() {
  this.works = [
    {description: 'install drywall'},
    {description: 'install doors'},
    {description: 'paint bedroom'}
  ];
  this.description = 'Description from controller';
});
