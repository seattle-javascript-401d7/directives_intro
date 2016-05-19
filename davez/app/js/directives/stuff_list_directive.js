module.exports = function(app) {
  app.directive('stuffList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      templateUrl: 'templates/stuff_list.html',
      scope: {
        stuffs: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.completeStuff = function(stuff) {
          $scope.stuffs.splice($scope.stuffs.indexOf(stuff), 1);
        }
      }
    }
  });
};
