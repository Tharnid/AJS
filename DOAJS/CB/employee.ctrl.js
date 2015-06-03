'use strict';

app.controller('EmployeeCtrl', ['$scope',
    function ($scope) {

        var Employee = function (name, age) {
            this.name = name;
            this.age = age;
        };

        var getEmployees = function() {
            return [
              new Employee("Han Solo", 43),
                new Employee("Luke Skywalker", 39),
                new Employee("Wedge Antilles", 40)
            ];
        };

        $scope.employeeData = {
          employees: getEmployees()
        };
    }
]);