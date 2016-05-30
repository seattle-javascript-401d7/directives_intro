module.exports = function(app) {
  app.directive('brokenDownWorks', () => {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/broken_down_works.html',
      require: '^listOfShitIGottaDo',
      transclude: true,
      replace: true,
      scope: {
        work: '='
      },
      link: function(scope, element, attributes, controller) {
        scope.done = controller.workDone;
      }
    };
  });
};
