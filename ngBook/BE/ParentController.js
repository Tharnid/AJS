var app = angular.module('myApp', []);

app.controller('ParentController', function($scope) {
    $scope.person = { named: false };
});