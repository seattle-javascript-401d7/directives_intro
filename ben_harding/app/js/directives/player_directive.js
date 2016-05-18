module.exports = function(app) {
  app.directive('player', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/player.html',
      require: '^team',
      scope: {
        task: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.firePlayer = controller.firePlayer;
      }
    };
  });
};
