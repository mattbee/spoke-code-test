var spokeApp = angular.module('spokeApp', []);


// In a larger project each component would be separated out into different files, 
// however with the single requirement, this is all simpler in a single app file.

// Register `lawyerList` component, along with its associated controller and template
spokeApp.
	controller('people', function($scope, $http) {
	  var self = this;

	  // So the short description is shown first, set full desc to false.
	  self.fulldesc = false;

	  $http.get('assets/json/search-results.json').then(function(response) {
	    self.people = response.data.slice(0, 6);
	    self.peoplePage2 = response.data.slice(7, response.data.length + 1);
	  });

	  self.loadMore = function(array1, array2) {
	  	// Fake a load more by merging the second array onto the first and add items to self.people.
	  	// As self.people populates a ng-repeat, if it changes it will redraw the required elements.
	  	self.people = array1.concat(array2);

	  }

	});