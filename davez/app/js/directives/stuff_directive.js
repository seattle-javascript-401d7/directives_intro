module.exports = function(app) {
  app.directive('dzStuffDirective', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/stuff_directive.html',
      scope: {
        stuffs: '=',
        lists: '@'
      },
      controller: ['scope', function($scope) {
        $scope.stuffs = $scope.stuffs;
        $scope.lists = $scope.lists;
      }]
    };
  });
}
