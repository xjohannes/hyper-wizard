(function () {
	'use strict';

	/**
	* Makes a json object ready to be used in a select dropdown.
	* @param the Object to be read by the html select attribute
	* @return a selectable array.
	*/
	function selectifyObject ( o ) {
	var newArr = [],
		counter = 0;

		for(var key in o ) {
			if(o.hasOwnProperty(key)) {
				newArr[counter++] = { "label": key, "value": o[key] };
				console.log(newArr[counter].label + " - " + newArr[counter].value );
			}
		}
		return newArr;
	}

	var wizard = angular.module('wizard', ['store-products']);

	wizard.controller('GenomeController', ['$http', '$scope',  function ( $http, $scope ) {
		this.allGenomes = [];
		this.tracks = [];
		this.allGenomesLocal = allGenomesObject;
		
		
		//console.log($scope.allGenomeFake.length);

		var that = this, scope = $scope;
		
		$http.get('https://hyperbrowser.uio.no/wizard/hyper/json?module=jsongui&method=getMainTracks&genome=hg19').success(function ( data ) {
			//that.allGenomes = data;
			$scope.allGenomeFake = selectifyObject(data);
			$scope.styledForSelect = $scope.allGenomeFake[0];
		});
		$http.get('https://hyperbrowser.uio.no/wizard/hyper/json?module=jsongui&method=getAllGenomes').success(function (data) {
			that.tracks = data;
		});

	}]);




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
//var newArrayFromObject = selectifyObject(allGenomesObject);


function printProps ( o ) {
		for(var p in o ) {
			console.log( p + ": " + o[p] );
		}
	}
//printProps(allGenomesObject);


	var gems = [
	{
		name  : 'Dodecahede',
		price : 2.00,
		description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate enim at mauris sollicitudin congue. Quisque et sagittis ex. Quisque mollis, erat non vehicula blandit, est nulla tempor ex, vitae auctor leo turpis vel purus. Phasellus pharetra nibh at dolor viverra blandit. Cras non leo mollis, tempus elit a, gravida lectus. Sed ac lacus finibus, efficitur eros sed, tristique tellus. Duis a efficitur nisi. Proin aliquam eget leo ac congue. Quisque laoreet ligula vitae tortor pharetra tempus. Sed laoreet vel augue et blandit. Quisque nibh metus, tempor ac lacus et, euismod egestas justo. Phasellus vel orci eu diam dapibus dapibus sit amet vel ipsum. Fusce non tortor in velit porttitor bibendum non non lacus. Suspendisse potenti. Aenean auctor quam mi, sit amet tempor sem iaculis non. Nulla et congue orci.',
		canPurchase : true,
		soldOut : false,
		images  : 
			{
				full : "./images/Diamond_001_smaller.png",
				thumbs: [
						"./images/diamond.jpg",
						"./images/diamond1.jpg",
						"./images/diamond2.jpg"
						]
			},
		reviews : [
			{
				stars : 5,
				body  : "I love this gem",
				author: "joe@thomas.com"
			},
			{
				stars : 2,
				body  : "Dont like it",
				author: "eathan@joel.com"
			}
		]
	},
	{
		name  : 'Pentagonal Gem',
		price : 5.95,
		description : '...',
		canPurchase : true,
		soldOut : false,
		images  : 
			{
				full : "./images/Diamond_001_smaller.png",
				thumbs: [
						"./images/diamond3.jpg",
						"./images/diamond4.jpg",
						"./images/diamond6.jpg"
						]
			},
		reviews : [
			{
				stars : 4,
				body  : "Its an ok gem",
				author: "jes@satriani.com"
			},
			{
				stars : 2,
				body  : "Dont like it",
				author: "eathan@joel.com"
			}

		]
	},
	{
		name  : 'Sdkjo Gem',
		price : 5.95,
		description : '...',
		canPurchase : true,
		soldOut : false,
		images  : 
			{
				full : "./images/Diamond_001_smaller.png",
				thumbs: []
			},
		reviews : [
			{
				stars : 2,
				body  : "Dont like it",
				author: "eathan@joel.com"
			},
			{
				stars : 4,
				body  : "Its an ok gem",
				author: "jes@satriani.com"
			}
		]
	}
			
];
//console.log(gems[2].images.thumbs[1]);	

}());

(function () {
'use strict';

var wizard = angular.module('store-products', []);

	wizard.directive('productDescription', function () {
		return {
			restrict : 'E',
			templateUrl : 'product-description.html'
		};
	});	

	wizard.directive('reviewsPanel', function () {
		return {
			restrict : 'E',
			templateUrl : 'reviews-panel.html'
		};
	});

	wizard.directive('productPanels', function () {
		return {
			restrict    : 'E',
			templateUrl : 'product-panels.html',
			controller  :  function ( ) {
				this.tab = 1;
				this.selectTab = function ( setTab ) {
					this.tab = setTab;
				};
				this.isSelected = function ( checkTab ) {
					return this.tab === checkTab;
				};
			},
			controllerAs : 'panel'
		};
	});

}());
