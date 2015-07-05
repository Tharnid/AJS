'use strict';

var app = angular.module('elementDirectiveApp', [
   'ngRoute'
]);

app.config(function ($routeProvider) {
   $routeProvider
       .when('/', {
          templateUrl: 'employee.tpl.html',
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