module.exports = function(app) {
  app.directive('makeList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      templateUrl: 'templates/make_list.html',
      scope: {
        makes: '=',
        listTitle: '@',
        desc: '@'
      },
      controller: function($scope) {
        this.completeMake = function(make) {
          $scope.makes.splice($scope.makes.indexOf(make), 1);
        };
      }
    };
  });
};
