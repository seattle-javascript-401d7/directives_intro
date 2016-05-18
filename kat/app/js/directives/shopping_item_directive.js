module.exports = function(app) {
  app.directive('shoppingItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/shopping_item.html',
      require: '^shoppingList',
      scope: {
        item: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.boughtItem;
      }
    };
  });
};
