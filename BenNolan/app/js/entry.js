const angular = require('angular');
const grocApp = angular.module('grocApp', []);

require('./directives')(grocApp);
grocApp.controller('GroceriesController', function() {
  this.groceries = [
    { description: 'coffee' },
    { description: 'orange juice' },
    { description: 'bread' },
    { description: 'chicken' },
    { description: 'spinach' }
  ];
});
