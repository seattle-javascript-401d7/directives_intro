module.exports = function(app) {
  app.directive('makeItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/make_item.html',
      require: '^makeList',
      scope: {
        make: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.completeMake;
      }
    }
  });
};
