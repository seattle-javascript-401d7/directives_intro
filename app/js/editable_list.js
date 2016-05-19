module.exports = function(app) {
  app.directive('editMakeList', function() {
    return {
      restrict: 'EAC',
      scope: {
        makes: '=',
        listTitle: '@'
      },
      templateUrl: 'template/edit_task_list.html'
    };
  });
};
