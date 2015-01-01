var app = angular.module('myApp', []);

app.controller('WhatsMyNameController', function($scope) {
   $scope.person = {
    name: "Heisenberg"
   };
});