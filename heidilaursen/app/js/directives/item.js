module.exports = function(app) {
  app.directive('shopItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/item.html',
      require: '^shopList',
      scope: {
        item: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.boughtItem;
      }
    };
  });
};
