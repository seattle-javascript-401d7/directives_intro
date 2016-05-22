module.exports = exports = function(app) {
  app.directive('myBookList', () => {
    return {
      restrict: 'AC',
      require: '^ngController',
      templateUrl: '/templates/bookListTemplate.html',
      scope: {
        title: '@'
      }
    };
  });
};
