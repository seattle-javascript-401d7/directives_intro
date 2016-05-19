module.exports = function(app) {
  app.directive('hwItem', function(){
    return {
      restrict: 'EAC',
      templateUrl: 'templates/hw_item.html',
      require: '^hwList',
      scope: {
        hw: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.completeHw;
      }
    }
  });
};
