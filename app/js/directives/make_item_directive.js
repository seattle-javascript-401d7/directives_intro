module.exports = function(app) {
  app.directive('makeItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/make_item.html',
      require: '^makeList',
      transclude: true,
      replace: true,
      scope: {
        make: '=',
        listTitle: '@'
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.completeMake;
      }
    }
  });
};
