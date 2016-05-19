module.exports = function(app) {
  app.directive('make_Item', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/make_Item.html',
      require: '^make_List',
      scope: {
        make: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.completeMake;
      }
    };
  });
};
