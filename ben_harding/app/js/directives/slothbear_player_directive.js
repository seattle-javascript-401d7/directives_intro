module.exports = function(app) {
  app.directive('slothbearPlayer', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/player.html',
      require: '^slothbearTeam',
      scope: {
        player: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.firePlayer = controller.firePlayer;
      }
    };
  });
};
