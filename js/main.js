var spokeApp = angular.module('spokeApp', []);


// In a larger project each component would be separated out into different files, 
// however with the single requirement, this is all simpler in a single app file.

// Register `lawyerList` component, along with its associated controller and template
spokeApp.
controller('people', function($scope, $http) {
  var self = this;
  self.orderProp = 'age';
  self.fulldesc = false;

  $http.get('assets/json/search-results.json').then(function(response) {
    self.people = response.data;
  });
});