module.exports = function(app) {
  app.directive('brokenDownWorks', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/broken_down_works.html',
      require: '^listOfShitIGottaDo',
      scope: {
        work: '='
      },
      link: function(scope, element, attributes, controller) {
        scope.done = controller.workDone;
      }
    }
  });
};
