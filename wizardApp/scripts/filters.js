var wizardFilters = angular.module('wizardFilters', []);

wizardFilters.filter('getSubTrackLevel', function() {
  return function(input) {
    return items.input;
  };
});