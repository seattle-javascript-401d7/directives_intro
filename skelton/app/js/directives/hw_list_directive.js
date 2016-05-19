module.exports = function(app) {
  app.directive('hwList', function(){
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/hw_list.html',
      scope: {
        hws: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.completeHw = function(hw) {
          $scope.hws.splice($scope.hws.indexOf(hw), 1);
        }
      }
    }
  });
};
