angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
            
        $scope.complete = function(task){
            var temp = task;
            Tasks.del(task);
            temp.st = "text-decoration:line-through";
            Tasks.save(temp);
            $scope.tasks = Tasks.all();
           
        }
            
        $scope.tasks = Tasks.all();
});
