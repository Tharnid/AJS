angular.module("myApp", [])

.controller('ExpressionController',
	function($scope, $parse) {
		$scope.$watch('expr', function(newVal, oldVal, scope) {
			if (newVal !== oldVal) {
				// let's set up our parseFun with the expression
				var parseFun = $parse(newVal);

				// Get the value of the parsed expression
				$scope.parsedValue = parseFun(scope);
			};
		});
	});