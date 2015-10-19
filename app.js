var app = angular.module('ngToDo', []);

app.controller('myNotesCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.notes = [];
	$scope.newNote  = [];
	



	$scope.addNote = function(newNote){
		$scope.notes.push(newNote);
		$scope.newNote = [];

		
	}

	$scope.deleteNote = function(note){
		$scope.notes.splice(note, 1);


	}

	$scope.markComplete = function(){
		if (checkedOff = true){}
	}

}]);

