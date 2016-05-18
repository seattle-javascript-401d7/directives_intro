module.exports = function(app) {
  app.directive('slothbearTeam', function() {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/team.html',
      scope: {
        players: '=',
        teamName: '@'
      },
      controller: function($scope) {
        var newPlayer = {};
        this.firePlayer = function(player) {
          $scope.players.splice($scope.players.indexOf(player), 1);
        };
      },
      link: function(scope, element, attrs, controller) {
        scope.createPlayer = function(newPlayer) {
          if (newPlayer.name && newPlayer.position) {
            scope.players.push(newPlayer);
          }
        };
      }
    };
  });
};
