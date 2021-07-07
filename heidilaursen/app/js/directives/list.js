module.exports = (app) => {
  app.directive('shopList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      templateUrl: 'templates/list.html',
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
