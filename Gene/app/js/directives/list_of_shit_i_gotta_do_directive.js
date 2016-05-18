module.exports = function(app) {
  app.directive('listOfShitIGottaDo', function() {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/list_of_shit_i_gotta_do.html',
      scope: {
        works: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.workDone = function(work) {
          $scope.works.splice($scope.works.indexOf(work), 1);
        }
      }
    }
  });
};
