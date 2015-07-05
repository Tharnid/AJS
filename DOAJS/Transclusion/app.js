'use strict';

var app = angular.module('transcludeApp', [
    'ngRoute'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'employee-view.tpl.html',
            controller: 'EmployeeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Directive Types

// A = attribute name

// E = element name

// C = class name