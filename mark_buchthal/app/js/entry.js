
const angular = require('angular');
const cookieApp = angular.module('cookieApp', []);

require('./directives')(cookieApp);


cookieApp.controller('CookieController', function() {
  this.cookies = [
      { name: 'macaron' },
      { name: 'chocolate chip' },
      { name: 'oatmeal' }
  ];
});


