var module1 = angular.module(module1, []);
module1.controller("ctrl1", function($scope) {
	$scope.first = 1;
	$scope.second = 2; 
	$scope.updateValue = function() {

		$scope.calcuatedValue = $scope.first + '+' + $scope.second + "=" + (+$scope.first + +$scope.second);
	};
});
