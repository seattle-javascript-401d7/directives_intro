module.exports = function(app){
    app.directive('myItem', function(){
        return{
            restrict: 'EAC',
            templateUrl: 'templates/item.html',
            require:'^myList',
            transclude: true,
            replace:true,
            scope:{
                task:'='
            },
            link: function(scope, element, attrs, controller){
                scope.done = controller.completeTask;
            }
        };
    });
};
