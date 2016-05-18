module.exports = function(app) {
  app.directive('hwList', function(){
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/hw_list.html',
      scope: {
        hwTask: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.completeHw = function(hw) {
          $scope.hwTask.splice($scope.hwTask.indexOf(hw), 1);
        }
      }
    }
  });
};
