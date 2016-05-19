module.exports = function(app) {
  app.directive('hwItem', function(){
    return {
      restrict: 'EAC',
      templateUrl: 'templates/hw_item.html',
      require: '^hwList',
      transclude: true,
      replace: true,
      scope: {
        hw: '='
      },
      link: function(scope, element, attrs, controller, transclude) {
        scope.done = controller.completeHw;
        el.find('.content').append(transclude());
      }
    }
  });
};
