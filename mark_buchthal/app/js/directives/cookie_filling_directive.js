
module.exports = function(app) {
  app.directive('cookieItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/cookie_list_item.html',
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
