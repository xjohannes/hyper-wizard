(function () {
	'use strict';

/* Controllers */

var wizardControllers = angular.module('wizardControllers', []);


 	wizardControllers.controller('NrOfTracksCtrl', ['$scope',  '$stateParams',  'trackProperties',
		function ( $scope,  $stateParams, trackProperties ) {
			$scope.sharedTrackProperties = trackProperties;
			$scope.sharedTrackProperties.trackSource = $stateParams.trackSource;
	}]);
 	/**
 * @name wizard.GenomeControllerScope
 * @extends wizard.rootScope
 * @property {object} allGenomes
 * @property {number} (sharedTrackProperties): nrOfTracks
 */
	wizardControllers.controller('GenomeCtrl', ['$scope', 'Genome', '$stateParams', 'trackProperties',
		function ( $scope, Genome, $stateParams, trackProperties ) {
			$scope.allGenomes = {};
			$scope.allGenomes = Genome.get(); 

			$scope.sharedTrackProperties = trackProperties;
			$scope.sharedTrackProperties.nrOfTracks = $stateParams.nrOfTracks;

	}]);

	wizardControllers.controller('MainTrackCtrl', ['$scope', 'MainTrack', '$stateParams', 'trackProperties', 
		function ( $scope, MainTrack, $stateParams, trackProperties ) {
			$scope.mainTracks = MainTrack.query({'genome':$stateParams.genome });
			
			$scope.sharedTrackProperties = trackProperties;
			//$scope.sharedTrackProperties.iterationText = (
			//	$scope.sharedTrackProperties.iteration === 1 ? "first" : "second");
			$scope.sharedTrackProperties.genome = $stateParams.genome;
			$scope.sharedTrackProperties.genomeName = $stateParams.genomeName;

	}]);

	wizardControllers.controller('SubTrackCtrl', ['$scope', 'SubTracks', '$stateParams', 
		'$state', 'trackProperties', 'HelperFunctions',
		function ( $scope, SubTracks, $stateParams, $state, trackProperties, HelperFunctions ) {
			$scope.sharedTrackProperties = trackProperties;
			$scope.sharedTrackProperties.trackPart = $stateParams.track + ":";
			
			//$scope.sharedTrackProperties.trackQueryParam += $stateParams.track +":";
			//console.log("running through SubTracksCtrl");
			SubTracks.getSubTrack({
				genome: $scope.sharedTrackProperties.genome, 
				parentTrack: HelperFunctions.removeTrailingColon($scope.sharedTrackProperties.trackPart)})
			.success(function (data) {
				if(data.length !== 0) {
					//$scope.sharedTrackProperties.trackParts[$scope.sharedTrackProperties.iteration-1]
						//.push(HelperFunctions.getLastTrackPart($stateParams.track));
					$scope.subTracks = data;
				}
				else {
					$scope.sharedTrackProperties.iteration = $scope.sharedTrackProperties.iteration + 1;
					//$scope.sharedTrackProperties.trackParts[$scope.sharedTrackProperties.iteration-1]
					//	.push(HelperFunctions.getLastTrackPart($stateParams.track));
					
					//$scope.sharedTrackProperties.trackPart = '';
					if( $scope.sharedTrackProperties.nrOfTracks >= $scope.sharedTrackProperties.iteration ) {
						$state.go("mainTrack", {genome:$scope.sharedTrackProperties.genome, }, {inherit:false}); // inherit?
					}
					else {
						//$scope.sharedTrackProperties.iteration = $scope.sharedTrackProperties.iteration - 1;
						//$scope.sharedTrackProperties.iterationText = 'first';
						$state.go("analyze", {genome:$scope.sharedTrackProperties.genome}, {inherit:false});
					}
				}
			});	
	}]);

	wizardControllers.controller('TrackSelectionCtrl', ['$scope', '$stateParams', 'trackProperties', 'HelperFunctions', '$state', 
		function ( $scope, $stateParams, trackProperties, HelperFunctions, $state ) {
			$scope.sharedTrackProperties = trackProperties;
			$scope.sharedTrackProperties.iterationText = (
				$scope.sharedTrackProperties.nrOfTracks === 1 ? " " : "First");

			window.addEventListener('popstate', function ( event ) {
				console.log("Currtent state: " + $state.$previous.name );

				if($scope.sharedTrackProperties.trackParts[$scope.sharedTrackProperties.iteration-1].length === 0){// new track
					console.log("no objects in array " + $scope.sharedTrackProperties.iteration);	
					//event.preventDefault();//fyll $stateParams med alle minus siste
					//$stateParams.track = $scope.sharedTrackProperties.trackParts[$scope.sharedTrackProperties.iteration-1].pop();
					$scope.sharedTrackProperties.iteration--;
					//$scope.sharedTrackProperties.trackParts[$scope.sharedTrackProperties.iteration-1].pop();
					//$stateParams.track = $scope.sharedTrackProperties.trackParts[$scope.sharedTrackProperties.iteration-1].join(':');
					$state.go("^", {genome:$scope.sharedTrackProperties.genome, track: $stateParams.track, trackNr: 1}, {inherit:false});
					console.log("Iteration: " + $scope.sharedTrackProperties.iteration+ ", trackPart: " + $stateParams.track);
				}
				else {
					console.log("objects in array");
					//$scope.sharedTrackProperties.trackParts[$scope.sharedTrackProperties.iteration-1].pop();
					//$scope.sharedTrackProperties.iteration--;
					console.log("ITeration: " + $scope.sharedTrackProperties.iteration+ ", trackParts: ");
					//$scope.sharedTrackProperties.trackPart = 
						//$scope.sharedTrackProperties.trackParts[$scope.sharedTrackProperties.iteration-1].join(':');
				}
				
			});
	}]);

wizardControllers.controller('AnalyzeCtrl', ['$scope', 'MainTrack', '$stateParams', 'trackProperties', 
		function ( $scope, MainTrack, $stateParams, trackProperties ) {
			console.log("hello analyze");
			$scope.mainTracks = MainTrack.query({'genome':$stateParams.genome });
			
			$scope.sharedTrackProperties = trackProperties;
			//$scope.sharedTrackProperties.iterationText = (
			//	$scope.sharedTrackProperties.iteration === 1 ? "first" : "second");
			$scope.sharedTrackProperties.genome = $stateParams.genome;
			$scope.sharedTrackProperties.genomeName = $stateParams.genomeName;

	}])
.value('trackProperties', {
	trackSource: '',
	nrOfTracks: 0,
	iteration: 1,
	iterationText: '',
	genome : '',
	trackParts : [[],[],[]],
	trackPart: '',
	trackQueryParam: ''
})
.factory('HelperFunctions', function(){
    var funcs = {

    };
    funcs.removeTrailingColon = function ( str ) {
				if(str.slice(-1) === ':') {
					str = str.slice(0, -1);
				}
				return str;
			};
			funcs.getLastTrackPart = function ( str ) {
				str = str.split(':').pop();
				return str;
			};

    return funcs;
});

// End outer anonymous function	
}());


////////////////////////////////////////////////////////////////////////////
////////////////////// Referance for master Thesis //////////////////////////
////////////////////////////////////////////////////////////////////////////
// To make the history (back and forward in the browser) work properly, every state has to be reflected in the url. Else the history 
// must be custum implemented

// Better to watch $rootScope for changes and save that to a parameter than having an injected link?

// Helper functions: Should such methods live some other place like a helper module?
			/*getStateParams =	function ( str ) {
				if(str.slice(-1) === ':') {
					str = str.slice(0, -1);
				}
				return str;
			};*/
		//Answer: It can reside in a factory

/* Needed to redo the way to get data from server to check for empty array. Ask how I should have done it with $watch
			$scope.subTracks = SubTracks.query(
				{'genome': $scope.selectedGenome, 'parentTrack': removeTrailingColon($scope.selectedTrack) }
			);	
			
			$scope.$watch( function ($scope) { return $scope.subTracks; }, function ( newValue, oldValue ) {
				console.log("OldVal: " + oldValue);
				if( newValue ) {
					console.log("newVal: " + newValue + " - " + $scope.subTracks);
						//MainTrack.query( {genomeKey: newValue } );
				}
			});
*/
