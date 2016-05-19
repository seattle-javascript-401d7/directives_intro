module.exports = function(app) {
  app.directive('shoppingItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/shopping_item.html',
      require: '^shoppingList',
      transclude: true,
      scope: {
        item: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.boughtItem;
        // element.find('main').append(transclude());
      }
    };
  });
};
