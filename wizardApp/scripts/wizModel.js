(function () {
'use strict';
var wizModel = angular.module('wizModel', []);

// this Genome value need to return an object like:
//$resource('https://hyperbrowser.uio.no/wizard/hyper/json'
//        + '?module=jsongui&method=getAllGenomes', {}, {
//      query: {method:'GET', params:{}, isArray:false}
//    });
wizModel.value( 'Model', {
    mod : {},
    set: function ( newVal ) {

    },
    get: function ( url, obj, obj2 ) {

      return mod;
    }
    
        });
/*
mockTracks.factory('MainTrack', ['$resource',
  function($resource){
    return $resource('https://hyperbrowser.uio.no/wizard/hyper/json'
        + '?module=jsongui&method=getMainTracks&genome=:genomeKey', {genome:'@genomeKey'}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
*/


}());