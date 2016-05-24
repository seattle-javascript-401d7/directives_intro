
module.exports = function(app) {
  app.directive('cookieList', function() {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      templateUrl: 'templates/cookie_list.html',
      scope: {
        cookies: '=',
        cookieTitle: '@'
      },
      controller: function($scope) {
        this.deleteCookie = function(cookie) {
          $scope.cookies.splice($scope.cookies.indexOf(cookie), 1);
        };
      }
    };
  });
};
