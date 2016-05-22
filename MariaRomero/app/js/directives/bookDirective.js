module.exports = exports = function(app) {
  app.directive('myBook', () => {
    return {
      restrict: 'EA',
      require: '^ngController',
      templateUrl: '/templates/bookTemplate.html',
      scope: {
        book: '=',
        buttonText: '@',
        action: '@'
      }
    };
  });
};
