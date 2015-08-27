var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $htpp){
	console.log("Hello world from controller!")
}]);