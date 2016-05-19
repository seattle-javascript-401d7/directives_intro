const angular = require('angular');
const shoppingApp = angular.module('shoppingApp', []);

require('./directives')(shoppingApp);
shoppingApp.controller('ListController', function() {
  this.items = [
    { name: 'apples' },
    { name: 'chicken' },
    { name: 'toilet paper' },
    { name: 'soy sauce' },
    { name: 'bread' },
    { name: 'sangria' },
    { name: 'pina colada' }
  ];
});
