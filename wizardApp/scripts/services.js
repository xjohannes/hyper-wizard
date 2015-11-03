(function () {
	'use strict';

/* Services */

var wizardServices = angular.module('wizardServices', ['ngResource']);

// Using $resource
wizardServices.factory('Genome', ['$resource',
  function($resource){

    return $resource('https://hyperbrowser.uio.no/wizard/hyper/json'
    	+ '?module=jsongui&method=getAllGenomes', {}, {});
  }]);
/*
// Using $http
wizardServices.factory('Genome', ['$http',
  function($http){

    return $http.get('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getAllGenomes');
  }]);
*/

wizardServices.factory('MainTrack', ['$resource',
  function($resource){
    return $resource('https://hyperbrowser.uio.no/wizard/hyper/json'
    	+ '?module=jsongui&method=getMainTracks', {genome:'@genomeKey'}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

wizardServices.factory('SubTracks', ['$http',
  function($http){

    return {
      getSubTrack: function( paramObj ) {
        return $http({
          method: 'GET',
          url: 'https://hyperbrowser.uio.no/wizard/hyper/json'
            + '?module=jsongui&method=getSubTrackNames',
          params: {
            genome: paramObj.genome,
            parentTrack: paramObj.parentTrack
          }
        });
      }
    };
      
  }]);

wizardServices.factory('AnalysisCategorys', ['$http',
  function($http){

    return {
      getSubTrack: function( paramObj ) {
        return $http({
          method: 'GET',
          url: 'https://hyperbrowser.uio.no/wizard/hyper/json'
            + '?module=jsongui&method=getSubTrackNames',
          params: {
            genome: paramObj.genome,
            parentTrack: paramObj.parentTrack
          }
        });
      }
    };
      
  }]);
/*
wizardServices.factory('SubTracks', ['$resource',
  function($resource){
    return $resource('https://hyperbrowser.uio.no/wizard/hyper/json'
    	+ '?module=jsongui&method=getSubTrackNames'
      , {genome:'@genomeKey', parentTrack:'@mainTrack'}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
*/
}());

