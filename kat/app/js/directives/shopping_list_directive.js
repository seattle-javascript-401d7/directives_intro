module.exports = (app) => {
  app.directive('shoppingList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/shopping_list.html',
      scope: {
        items: '=',
        listDate: '@'
      },
      controller: function($scope) {
        this.boughtItem = function(item) {
          $scope.items.splice($scope.items.indexOf(item), 1);
        };
      }
    };
  });
};
