var app2 = angular.module('module2', []);
app2.controller('ctrl2', function($scope) {
$scope.randomNum1 = Math.floor((Math.random()*10)+1);
$scope.randomNum2 = Math.floor((Math.random()*10)+1);
});

app2.controller('badCtrl', function($scope) {

var badFeelings = ["bad", "ugly", "rejected", "powerless"];
$scope.bad = badFellings[Math.floor((Math.random()*4))];


});

app2.controller('goodCtrl', function($scope) {
var goodFeelings = ["good", "peace", "love", "cool"];
$scope.good = goodFeelings[Math.floor(Math.random()*4)];

});
