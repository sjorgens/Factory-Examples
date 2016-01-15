/**
 * Created by joelmiller on 1/15/16.
 */

var app = angular.module('serviceApp', []);

app.controller('MainController', ['$scope', 'FoodService', 'PetService', 'StatesLivedService', function($scope, FoodService, PetService, StatesLivedService){
	$scope.name = 'Joel';
	$scope.favoriteFood = FoodService.favoriteFood;
	$scope.today = FoodService.lunchToday();
	$scope.states = StatesLivedService.states;
}]);

app.factory('FoodService', ['$http', function($http){

	//Private
	var getFoods = function(){
		return 'Sesame Beef';
	};

	var x = $http.jsonp('https://api.github.com/users/joeltmiller/events/?callback=JSON_CALLBACK').then(function(response){
		console.log(response)
	})

	//Public
	return {
		favoriteFood: getFoods(),
		leastFavorite: 'Rice Crackers',
		lunchToday: function(){
			return 'Jimmy Johns';
		}
	}
}]);

app.factory('PetService', function(){
	var pets = ['Charlie', 'Sweet Dee'];

	function petType(){
		return 'Chihuahua'
	}

	var petInfo = {
		pets : ['Charlie', 'Sweet Dee']
	};

	return {
		pets: ['Charlie', 'Sweet Dee'],
		getTypes: petType(),
		petInfo: petInfo
	}
});

app.factory('StatesLivedService', function(){

	var states = {
		born: 'Illinois',
		lived: 'Iowa',
		also: 'Wisconsin'
	};

	return {
		states: states
	}

});