/**
 * Created by joelmiller on 1/15/16.
 */

var app = angular.module('serviceApp', []);

app.controller('MainController', ['$scope', 'DataService', function($scope, DataService){
	$scope.data = DataService.data;
	DataService.makeCall();
}]);

app.factory('DataService', ['$http', function($http){

	var data = {};

	var makeCall = function(){
		$http.get('/getMyThing').then(function(response){
			data.results = response.data;
		})
	};
	//

	return {
		makeCall: makeCall,
		data: data
	}



}]);
