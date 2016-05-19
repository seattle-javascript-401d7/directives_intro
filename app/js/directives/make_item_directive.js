module.exports = function(app) {
  app.directive('makeItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/make_Item.html',
      require: '^makeList',
      transclude: true,
      replace: true,
      scope: {
        make: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.completeMake;
      }
    };
  });
};
