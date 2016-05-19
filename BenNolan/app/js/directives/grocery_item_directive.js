module.exports = exports = function(app) {
  app.directive('groceryItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/grocery_item.html',
      require: '^groceryList',
      transclude: true,
      scope: {
        grocery: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.itemrecieved;
      }
    };
  });
};
