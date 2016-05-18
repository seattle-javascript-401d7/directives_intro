module.exports = function(app) {
  app.directive('team', function() {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/team.html',
      scope: {
        players: '=',
        teamName: '@'
      },
      controller: function($scope) {
        this.firePlayer = function(player) {
          $scope.players.splice($scope.players.indexOf(player), 1);
        };
      }
    };
  });
};
