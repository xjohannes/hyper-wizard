(function () {
	'use strict';
// wizardServices mockingTracks fakeBackend
	var wizard = angular.module('Wizard',
		['wizardControllers', 'wizardDirectives',
		'ngResource', 'ui.router', 'wizardFilters', 'wizardServices']);

	/**
 * @name myApp.rootScope
 * @property {Object} Math
 */
/*
* if $rootScope need to be manipulated. Try to avoid manipulating the $rootScope
var app = angular.module('myApp',[]);
app.run(function($rootScope) { 
    $rootScope.Math = Math;
});
*/
	  wizard.config(function($provide, $stateProvider, $urlRouterProvider) {
		  // For any unmatched url, redirect to /state1
		 $urlRouterProvider.otherwise("/");
		  //
		  // Now set up the states
		  $stateProvider
		  	.state('wizard', {
		  		abstract: true,
		      url: "",
		      templateUrl: "wizardApp/partials/genome.html "	,
		      views: {
		      	"mainView": {templateUrl: "wizardApp/partials/noTrack.html "},
		      	"trackView": {templateUrl: "wizardApp/partials/empty.html "},
		      	"analyzisView": {templateUrl: "wizardApp/partials/empty.html "}
		      } 
		    })
		  	.state('wizard.start', {
		      url: "/" 
		    })
		    .state('nrOfTracks', {
		      url: "/trackSource/:trackSource",
		      views: {
		      	"mainView": {templateUrl: "wizardApp/partials/nrOfTracks.html "},
		      	"trackView": {templateUrl: "wizardApp/partials/empty.html "},
		      	"analyzisView": {templateUrl: "wizardApp/partials/empty.html "}
		      }
		    })
		    .state('genome', {
		      url: "/nrOfTracks/:nrOfTracks/",
		      views: {
		      	"mainView": {templateUrl: "wizardApp/partials/genome.html "},
		      	"trackView": {templateUrl: "wizardApp/partials/empty.html "},
		      	"analyzisView": {templateUrl: "wizardApp/partials/empty.html "}
		      } 
		    })
		    .state('mainTrack', {
		      url: "/genome/:genome/genomeName/:genomeName",
		      views: {
		      	"mainView": {templateUrl: "wizardApp/partials/mainTrack.html "},
		      	"trackView": {templateUrl: "wizardApp/partials/trackSelection.html "},
		      	"analyzisView": {templateUrl: "wizardApp/partials/empty.html "}
		      } 
		    })
		    .state('subTracks', {
		      url: "/genome/:genome/track/:track/trackNr/:trackNr",
		      views: {
		      	"mainView": {templateUrl: "wizardApp/partials/subTracks.html "},
		      	"trackView": {templateUrl: "wizardApp/partials/trackSelection.html "},
		      	"analyzisView": {templateUrl: "wizardApp/partials/empty.html "}
		      }
		    })
		    .state('analyze', {
		      url: "/genome/:genome/track/:track/trackNr/:trackNr/analyze.html/",
		      views: {
		      	"mainView": {templateUrl: "wizardApp/partials/analyze.html "},
		      	"trackView": {templateUrl: "wizardApp/partials/trackSelection.html "},
		      	"analyzisView": {templateUrl: "wizardApp/partials/analyzeStats.html "}
		      }
		    });

		    // Config $httpBackend delay mock responses. Not working to good
		    var DELAY_MS = 100;
		    $provide.decorator('$httpBackend', function($delegate) {
		    	var proxy = function(method, url, data, callback, headers) {
		    		var interceptor = function() {
		    			var _this = this,
		    			_arguments = arguments;
		    			setTimeout(function() {
		    				callback.apply(_this, _arguments);
		    			}, DELAY_MS);
		    		};
		    		return $delegate.call(this, method, url, data, interceptor, headers);
		    	};
		    	for(var key in $delegate) {
		    		proxy[key] = $delegate[key];
		    	}
		    	return proxy;
		    });
		 });

		    

// Anonymous outer function
}());












// FOr referance:

/*
		    .state('genome.list', {
		      url: "/list",
		      templateUrl: "wizardApp/partials/genome.list.html",
		      controller: function($scope) {
		        $scope.items = ["A", "List", "Of", "Items"];
		      }
		    })
		    .state('mainTrack', {
		      url: "/mainTrack",
		      views: {
		      	"viewA": { templateUrl: "wizardApp/partials/mainTrack.html"},
		      	"viewB": { templateUrl: "wizardApp/partials/subTracks.html",
		      						url: "/list",
		      						controller: 'MainTrackCtrl'}
		      }
		    })
		    .state('state2.list', {
		      url: "/list",
		      templateUrl: "wizardApp/partials/mainTrack.list.html",
		      controller: function($scope) {
		        $scope.things = ["A", "Set", "Of", "Things"];
		      }
		    })
		    .state('subTracks', {
		      url: "/subTracks",
		      templateUrl: "wizardApp/partials/subTracks.html"
		    })
		    .state('subTracks.list', {
		      url: "/list",
		      templateUrl: "wizardApp/partials/subTracks.list.html",
		      controller: function($scope) {
		        $scope.things = ["A", "Set", "Of", "Things"];
		      }
		    })

		    ;
});
*/




	// Static test object
	/*
	var allGenomesObject = {
		"mm9": "Mouse July 2007 (mm9)",
		"mm8": "Mouse Feb. 2006 (mm8)",
		"ce6": "C. elegans (ce6)",
		"galGal4": "Chicken Nov. 2011 (galGal4)",
		"B.taurus": "Bos taurus Dec. 2009",
		"sacCerOct07": "Saccharomyces cerevisiae Oct. 2007 (SGD)",
		"rn4": "Rat Nov. 2004 (Baylor 3.4/rn4) ",
		"TestGenome": "TestGenome",
		"danRer7": "Zebrafish Jul. 2010 (Zv9/danRer7)",
		"tair10": "Arabidopsis thaliana Nov. 2010 (TAIR10)",
		"dm3": "Drosophila melanogaster Apr. 2006 (BDGP R5/dm3)",
		"Plasmodium falciparum TEST2": "Plasmodium falciparum",
		"testMit": "Test: Human mitochondrial DNA",	
		"P.falciparum": "Plasmodium falciparum",
		"personer": "midlertidig Personer Harald",
		"testplasmidiumfalci": "lasmidiumfalci",
		"spombe2009": "Schizosaccharomyces pombe May 2009 (Ensembl: EF1)",
		"sacCer2": "Saccharomyces cerevisiae June 2008 (SGD r61/sacCer2)",
		"sacCer1": "Saccharomyces cerevisiae June 2009 (SGD1.01)",
		"hg17": "Human May 2004 (hg17/NCBI35)",
		"spombe2007": "Schizosaccharomyces pombe Aug 2007 (EF1)",
		"ZmB73": "Maize B73 Genome",
		"S.arctica": "Sphaeroforma arctica JP610",
		"mm10": "Mouse Dec 2011. (GRCm38/mm10)",
		"agamp3": "Anopheles gambiae PEST Apr. 2012 (agamp3)",
		"days": "Time Series. year 1900-2036 days",
		"blackrust": "Black rust",
		"gasAcu1": "Stickleback Feb. 2006",
		"phagelambda": "Enterobacteria phage lambda (NC_001416)",
		"hg18": "Human Mar. 2006 (hg18/NCBI36)",
		"hg19": "Human Feb. 2009 (hg19/GRCh37)",
		"Pbar_UMD_V03": "Pogonomyrmex barbatus (UMD_v03)"
};
*/
/**
	* Makes a json object ready to be used in a select dropdown.
	* @param the Object to be read by the html select attribute
	* @return a selectable array.
	*/
/*
	function selectifyObject ( o ) {
	var newArr = [],
		counter = 0;

		for(var key in o ) {
			if(o.hasOwnProperty(key)) {
				newArr[counter] = { "label": key, "value": o[key] };
				console.log(newArr[counter].label + " - " + newArr[counter].value );
				counter++;
			}
		}
		return newArr;
	}

	// Test select array
		$scope.gen = ["hei","hade","gunnar"];
 
		// Test select object
		$scope.colors = [
      {name:'black', shade:'dark'},
      {name:'white', shade:'light'},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark'},
      {name:'yellow', shade:'light'}
    ];
    $scope.myColor = $scope.colors[2]; //Defaul value
*/

/*From statck owerflow: two ways to store previous state
1:
angular.module('MyModule')
.config([
    '$stateProvider',
    function ($stateProvider) {
        $stateProvider
        .state('mystate', {
            templateUrl: 'mytemplate.html',
            resolve: {
                PreviousState: [
                    "$state",
                    function ($state) {
                        var currentStateData = {
                            Name: $state.current.name,
                            Params: $state.params,
                            URL: $state.href($state.current.name, $state.params)
                        };
                        return currentStateData;
                    }
                ]
            },
            controller: [
                "PreviousState",
                function (PreviousState) {
                    if (PreviousState.Name == "mystate") {
                        // ...
                    }
                }
            ]
        })
        ;
    }
]);
2:
$rootScope.previousState;
$rootScope.currentState;
$rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
    $rootScope.previousState = from.name;
    $rootScope.currentState = to.name;
    console.log('Previous state:'+$rootScope.previousState)
    console.log('Current state:'+$rootScope.currentState)
});
*/

