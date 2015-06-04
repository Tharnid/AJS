'use strict';

var app = angular.module('filterApp', [
    'ngRoute'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'employees.tpl.html',
            controller: 'EmployeeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});