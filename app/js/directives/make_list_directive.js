module.exports = function(app) {
  app.directive('makeList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/make_list.html',
      scope: {
        makes: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.completeMake = function(make) {
          $scope.makes.splice($scope.makes.indexOf(make), 1);
        };
      }
    };
  });
};
