'use strict';

/* jasmine specs for controllers go here */
describe('Wizard controllers', function() {

	beforeEach(function(){
  this.addMatchers({
    toEqualData: function(expected) {
      return angular.equals(this.actual, expected);
    }
  });
});

	describe('GenomeCtrl', function(){
		var $httpBackend, requestHandler1, scope, ctrl;

		// backend definitions common for all tests
		beforeEach(module('wizardControllers'));
		beforeEach(module('wizardControllers'));
		
		beforeEach( inject( function( $injector, $controller ) {
			// Set up the mock http service responses
			$httpBackend = $injector.get('$httpBackend');
			
			scope = {};

      ctrl = $controller('GenomeCtrl', {$scope:scope});

			$httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json?module=jsongui&method=getAllGenomes')
			.respond({
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
			});
		}));
	/*
		it('should create trackHierarchy model with 1 track', inject(function($controller) {
      
      expect(scope.allGenomes.length).toBe(32);
    }));
    */
		it('should fetch allGenomes', inject(function($controller) {
		 
			expect(scope.allGenomes).toEqualData({});
		
			$httpBackend.flush();

	  	expect(scope.allGenomes.mm9).toEqualData('Mouse July 2007 (mm9)');
		}));

/*
		it('should fetch mainTrackNames', inject(function($controller) {
			
			$httpBackend.flush();

	  	expect(scope.tracks.length).toBe(5);	
		}));

*/
		/*
		it('should fetch SubTrackNames', function () {
			$httpBackend.expectGET('https://hyperbrowser.uio.no/wizard/hyper/json?module=jsongui&method=getSubTrackNames&genome=hg19&parent=Chromatin');
			var controller = createController();
			$httpBackend.flush();
		});
	*/
		//afterEach($httpBackend.verifyNoOutstandingRequest);
		afterEach(function() {
			//$httpBackend.verifyNoOutstandingExpectation();
			//$httpBackend.verifyNoOutstandingRequest();
		});
	});
});
