'use strict';

var app = angular.module('dependencyInjectionApp', [
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