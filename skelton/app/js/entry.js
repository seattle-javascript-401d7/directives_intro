const angular = require('angular');
const hwTrack = angular.module('hwTrack', []);

require('./directives')(hwTrack);

hwTrack.controller('hwController', function(){
  this.hws = [
    {desc: 'finish directives assignment'},
    {desc: 'push directives assignment'},
    {desc: 'update first group project'},
    {desc: 'update ESlinitfy client side code'},
    {desc: 'update E2E testing with Protractor'},
    {desc: 'rebuild basicNG CRUD app'}
  ];
  this.description = 'Awesome description from hwController';
});
