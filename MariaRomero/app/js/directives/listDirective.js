module.exports = function(app) {
  app.directive('mrListDirective', () => {
    return {
      restrict: 'AC',
      templateUrl: 'templates/listDirective.html',
      scope: {
        title: '@'
      }
    };
  });
};
