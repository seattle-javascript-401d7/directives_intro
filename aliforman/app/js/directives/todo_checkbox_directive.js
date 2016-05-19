module.exports = function(app) {
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
};
