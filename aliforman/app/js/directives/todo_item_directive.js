module.exports = function(app) {
  app.directive('todoItem', function() {
    return {
      restrict: 'EAC',
      templateUrl: 'templates/todo_item.html',
      require: '^todoList',
      scope: {
        todo: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.done = controller.completeTodo;
      }
    };
  });

  app.directive('simpleCheckbox', function() {
    return {
      scope: true,
      template: '<div checkbox>check</div>'
    };
  });

  app.directive('checkbox', function() {
    return {
      scope: true,
      transclude: true,
      template: '<div><input type="checkbox"><label ng-transclude></label></div>'
    };
  });

  app.directive('clickToEdit', function() {
    var editorTemplate = '' +
      '<span class="click-to-edit">' +
        '<span class="fields" ng-hide="view.editorEnabled">' +
          '{{todo}} ' +
          '<button ng-click="enableEditor()">Edit</button>' +
        '</span>' +
          '<span ng-show="view.editorEnabled">' +
          '<input type="text" ng-model="view.editableValue">' +
          '<button ng-click="save()">Save</button>' +
          ' or ' +
          '<button ng-click="disableEditor()">Cancel</button>' +
        '</span>' +
      '</span>';

    return {
      restrict: 'A',
      replace: true,
      template: editorTemplate,
      scope: {
        value: '=clickToEdit'
      },
    link: function(scope, element) {
      scope.view = {
        editableValue: scope.value,
        editorEnabled: false
      };
      scope.enableEditor = function() {
        scope.view.editorEnabled = true;
        scope.view.editableValue = scope.value;
      };
      scope.disableEditor = function() {
        scope.view.editorEnabled = false;
      };
      scope.save = function() {
        scope.value = scope.view.editableValue;
        scope.disableEditor();
      };
    }
    };
  });
};
