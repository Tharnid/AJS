var app = angular.module('myApp', []);

app.controller('ChildController', function($scope) {
    $scope.sayMyName = function($scope) {
        $scope.person.name = "Heisenberg!!!";
    }
});