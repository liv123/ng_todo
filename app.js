var app = angular.module('ngToDo', []);

app.controller('myNotesCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.notes = [];
	



	$scope.addNote = function(newNote){
		$scope.notes.push(newNote);
		
	}

	$scope.deleteNote = function(){
		

	}

}]);

