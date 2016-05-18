module.exports = function(app) {
  app.directive('cfDummyDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/dummy_directive.html',
      scope: {
        catering: '=',
        menu: '@'
      },
      controller: ['$scope', function($scope) {
        $scope.menu = $scope.menu || 'default';
        $scope.catering = $scope.catering || 'hello from default';
      }]
    };
  });
}
