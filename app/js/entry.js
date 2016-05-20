const angular = require('angular');
const demoApp = angular.module('demoApp', []);

require('./directives')(demoApp);
demoApp.controller('makesController', function() {
  this.makes = [
    { desc: 'find recipes' },
    { desc: 'calculate quantity' },
    { desc: 'grocery shop' },
    { desc: 'begin food prep' }
  ];
  this.description = 'Description from controller';
});
