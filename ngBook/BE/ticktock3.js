angular.module('myApp', [])
.controller('MyController', function($scope, $timeout) {
       var updateClock = function() {
           $scope.clock = new Date();
           $timeout(function() {
               updateClock();
           }, 1000);
       };
        updateClock();
    });