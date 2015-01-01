var app = angular.module('myApp', []);

app.controller('ParentController', function($scope) {
    $scope.person = { greeted: false };
});

app.controller('ChildController', function($scope) {
    $scope.sayMyName = function() {
        $scope.person.name = "Heisenberg!!!";
        $scope.person.greeted = true;
    }
});