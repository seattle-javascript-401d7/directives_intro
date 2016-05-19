const angular = require('angular');
const shoppingApp = angular.module('shoppingApp', []);

require('./directives')(shoppingApp);
shoppingApp.controller('ListController', function() {
  this.items = [
    { name: 'mushrooms' },
    { name: 'sherry' },
    { name: 'dill' },
    { name: 'butter' },
    { name: 'chicken broth' },
    { name: 'sour cream' },
    { name: 'onion' }
  ];
  this.recipeUsedFor = 'Mushroom sauce';
});
