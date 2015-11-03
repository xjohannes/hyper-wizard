(function () {
'use strict';
var mockTracks = angular.module('mockingTracks', ['Wizard', 'ngMockE2E','MockGenome']);
mockTracks.run( function ( $httpBackend ) {
  $httpBackend.whenGet('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getAllGenomes').resopnd(MockGenome);
});

// this Genome value need to return an object like:
//$resource('https://hyperbrowser.uio.no/wizard/hyper/json'
//        + '?module=jsongui&method=getAllGenomes', {}, {
//      query: {method:'GET', params:{}, isArray:false}
//    });
mockTracks.value( 'MockGenome', {
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



mockTracks.value( 'MainTrack', {
    test: 'test',
  query: function ( selected ) {
    var returnValue;
    
    console.log("mockTracks: " + selected.genome);

    if( selected.genome === 'hg19') {
      returnValue = [
        "Chromatin",
        "Comparative genomics",
        "DNA structure",
        "Gene regulation",
        "Genes and gene subsets",
        "Genome build properties",
        "Phenotype and disease associations",
        "Sample data",
        "Sequence"
        ];  
    }
    else if( selected.genome === 'B.taurus' ) {
        returnValue = [
            "Genome build properties",
            "Sequence"
        ];
    }
    return returnValue;
  }
});

mockTracks.value( 'MainTrack-B.taurus', {
  query: function () {
    return [
    "Genome build properties",
    "Sequence"
    ];
  }
});
//encodeURI('Chromatin:Chromatin State Segmentation');
// 

mockTracks.value( 'SubTracks', {
    query: function ( trackURI ) {
        //implement state here:
     return [
         [
            "Chromatin State Segmentation [144]",
            "Chromatin State Segmentation",
            false
        ],
        [
            "DNA methylation [185]",
            "DNA methylation",
            false
        ],
        [
            "DNaseI [399]",
            "DNaseI",
            true
        ],
        [
            "Faire [37]",
            "Faire",
            false
        ],
        [
            "Roadmap Epigenomics [1 145]",
            "Roadmap Epigenomics",
            false
        ]
    ];
  }
});

mockTracks.value( 'SubTracksLe', [
    [
        "Chromatin State Segmentation [144]",
        "Chromatin State Segmentation",
        false
    ],
    [
        "DNA methylation [185]",
        "DNA methylation",
        false
    ],
    [
        "DNaseI [399]",
        "DNaseI",
        false
    ],
    [
        "Faire [37]",
        "Faire",
        false
    ],
    [
        "Roadmap Epigenomics [1 145]",
        "Roadmap Epigenomics",
        false
    ]
]);

mockTracks.value( 'subTrackLevel2', {

    query: function () {
        return [
                [
                    "wgEncodeBroadHmmGm12878HMM [16]",
                    "wgEncodeBroadHmmGm12878HMM",
                    false
                ],
                [
                    "wgEncodeBroadHmmH1hescHMM [16]",
                    "wgEncodeBroadHmmH1hescHMM",
                    false
                ],
                [
                    "wgEncodeBroadHmmHepg2HMM [16]",
                    "wgEncodeBroadHmmHepg2HMM",
                    false
                ],
                [
                    "wgEncodeBroadHmmHmecHMM [16]",
                    "wgEncodeBroadHmmHmecHMM",
                    false
                ],
                [
                    "wgEncodeBroadHmmHsmmHMM [16]",
                    "wgEncodeBroadHmmHsmmHMM",
                    false
                ],
                [
                    "wgEncodeBroadHmmHuvecHMM [16]",
                    "wgEncodeBroadHmmHuvecHMM",
                    false
                ],
                [
                    "wgEncodeBroadHmmK562HMM [16]",
                    "wgEncodeBroadHmmK562HMM",
                    false
                ],
                [
                    "wgEncodeBroadHmmNhekHMM [16]",
                    "wgEncodeBroadHmmNhekHMM",
                    false
                ],
                [
                    "wgEncodeBroadHmmNhlfHMM [16]",
                    "wgEncodeBroadHmmNhlfHMM",
                    false
                ]
        ];
    }
});

mockTracks.value( 'subTrackLevel3', [
    [
        "10_Txn_Elongation",
        "10_Txn_Elongation",
        false
    ],
    [
        "11_Weak_Txn",
        "11_Weak_Txn",
        false
    ],
    [
        "12_Repressed",
        "12_Repressed",
        false
    ],
    [
        "13_Heterochrom|lo",
        "13_Heterochrom|lo",
        false
    ],
    [
        "14_Repetitive|CNV",
        "14_Repetitive|CNV",
        false
    ],
    [
        "15_Repetitive|CNV",
        "15_Repetitive|CNV",
        false
    ],
    [
        "1_Active_Promoter",
        "1_Active_Promoter",
        false
    ],
    [
        "2_Weak_Promoter",
        "2_Weak_Promoter",
        false
    ],
    [
        "3_Poised_Promoter",
        "3_Poised_Promoter",
        false
    ],
    [
        "4_Strong_Enhancer",
        "4_Strong_Enhancer",
        false
    ],
    [
        "5_Strong_Enhancer",
        "5_Strong_Enhancer",
        false
    ],
    [
        "6_Weak_Enhancer",
        "6_Weak_Enhancer",
        false
    ],
    [
        "7_Weak_Enhancer",
        "7_Weak_Enhancer",
        false
    ],
    [
        "8_Insulator",
        "8_Insulator",
        false
    ],
    [
        "9_Txn_Transition",
        "9_Txn_Transition",
        false
    ],
    [
        "-- All subtypes --",
        "-- All subtypes --",
        false
    ]
]);

/*mockTracks.factory('HyperBrowserTrackModel', ['MainTrack',
  function( MainTrack ){
    return function () {
        var update, get, fetchFromServer, model;

        update = function ( trackPart ) {
            angular.forEach( this.model, function ( value, key ) {
                if( trackPart === key ) {
                key = MainTrack.success;
                }
            });
        };

        get = function ( url, obj, obj2 ) {
            return this.model;
      
        };

        fetchFromServer = function ( selectedTrack ) {
            //$scope.genome = $stateParams.selectedGenome;
            //return mainTracks = MainTrack.query({'genome':selectedTrack});
        };
        model = {
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
      };
        
  }]);
*/

}());