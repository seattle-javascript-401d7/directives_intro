module.exports = function(app) {
  app.directive('hwList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      templateUrl: 'templates/hw_list.html',
      scope: {
        hws: '=',
        listTitle: '@',
        description: '@'
      },
      controller: function($scope) {
        this.completeHw = function(hw) {
          $scope.hws.splice($scope.hws.indexOf(hw), 1);
        }
      }
    }
  });
};
