
module.exports = function(app) {
  app.directive('cookieItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/cookie_item.html',
      transclude: true,
      require: '^cookieList',
      scope: {
        cookie: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.bake = controller.deleteCookie;
      }
    };
  });
};
