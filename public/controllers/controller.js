var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $htpp){
	console.log("Hello world from controller!")

	person1 = {
		name: "Neil Lohana",
		email: "blah@example.com",
		number: "(000) 000-0000",
		address: "123 This Lane, USA"
	};

	person2 = {
		name: "Sagar Lohana",
		email: "blah@example.com",
		number: "(111) 111-1111",
		address: "123 Where Way, USA"
	};

	person3= {
		name: "Rahul Lohana",
		email: "blah@example.com",
		number: "(222) 222-2222",
		address: "456 This Way, USA"
	};

	var contactlist = [person1, person2, person3];

	$scope.contactlist = contactlist;
}]);

