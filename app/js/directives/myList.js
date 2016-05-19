module.exports = function(app){
    app.directive('myList', function(){
        return{
            restrict: 'EAC',
            replace: true,
            templateUrl: 'templates/list.html',
            scope:{
                tasks:'=',
                listTitle:'@',
                description: '@'
            },
            controller: function($scope){
                this.completeTask=function(task){
                    $scope.tasks.splice($scope.tasks.indexOf(task), 1);
                };
            }
        };
    });
};
