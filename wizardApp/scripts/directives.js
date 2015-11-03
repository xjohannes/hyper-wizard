(function () {
'use strict';

var wizardDirectives = angular.module('wizardDirectives', []);

wizardDirectives.directive('wizTestdir', function () {
	// Several functions can be placed inside this function
	return {
		restrict: 'EA',
		templateUrl: './wizardApp/partials/analyze.html'
	};
});
/*
.directive('myCustomer', function() {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});
*/

// Question: Should a directive do one thing only?
// Question two: Should I use click() instead?
/*
Click belongs to the $scope? If so, can I pass it 
the parentScope and call the buildTrack function from that scope instead?


*/
// End enclosing anynomous function
}());