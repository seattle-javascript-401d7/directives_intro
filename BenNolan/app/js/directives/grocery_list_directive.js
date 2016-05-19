module.exports = exports = function(app) {
  app.directive('groceryList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      templateUrl: 'templates/grocery_list.html',
      scope: {
        groceries: '=',
        listTitle: '@'
      },
      controller: function($scope) {
        this.itemrecieved = function(grocery) {
          $scope.groceries.splice($scope.groceries.indexOf(grocery), 1);
        };
      }
    };
  });
};
