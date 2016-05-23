module.exports = exports = function(app) {
  app.directive('myBookList', () => {
    return {
      restrict: 'AC',
      require: '^ngController',
      templateUrl: '/templates/bookListTemplate.html',
      transclude: true,
      scope: {
        title: '@',
        bookArray: '=',
        buttonText: '@',
        typeOfAction: '@'
      }
    };
  });
};
