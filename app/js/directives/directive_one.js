module.exports = function(app) {
  app.directive('cfDirectiveOne', function() {
    return {
      restrict: 'AC',
      templateURL: 'templates/directive_one.html',
      scope: {
        equals: '=',
        ats: '@'
      },
      controller: ['$scope', function($scope) {
        $scope.ats = $scope.ats || 'default ats thing';
        $scope.equals = $scope.equals || 'this is from default equals thing';
      }]
    };
  });
};
