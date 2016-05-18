module.exports = function(app) {
  app.directive('cfTestDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/test_template.html',
      scope: {
        rhinos: '=',
        mudpuddles: '@'
      },
      controller: ['$scope', function($scope) {
        $scope.rhinos = $scope.rhinos || 'default';
        $scope.mudpuddles = $scope.mudpuddles || 'hello from default';
      }]
    };
  });
}
