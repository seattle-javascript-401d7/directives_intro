module.exports = function(app) {
  app.directive('makeList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/make_list.html',
      scope: {
        make: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.completeMake = function(make) {
          $scope.make.splice($scope.make.indexOf(make), 1);
        }
      }
    }
  });
};
