(function () {
'use strict';
var fakeBackend = angular.module('fakeBackend', ['Wizard', 'ngMockE2E', 'serverMock']);

fakeBackend.run( function ( $httpBackend, GenomeFake, FakeHg19, FakeBtaurus, 
  FakeSubChromatin, FakeSubChromatinStateSeg, FakeSubChromatinStateSegWG16, 
  FakeBtaurusGenomeBuild, FakeBtaurusGenomeBuildAssembly, FakeBtaurusGenomeBuildChromosomes,
  FakeBtaurusGenomeBuildChromosomesDNA, FakeSubChromatinStateSegWG16TXN ) {
  // Genome fake
  $httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getAllGenomes').respond(GenomeFake);

/***************************************************************************
********************** Mock hg19 Maintracks ********************************
****************************************************************************/
// Maintrack mock
  $httpBackend.when('GET', 'https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getMainTracks&genome=hg19').respond(FakeHg19);
// Subtrack mocks
  $httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=hg19&parentTrack=Chromatin')
  .respond(FakeSubChromatin);

  $httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=hg19&parentTrack=Chromatin'
      + ':Chromatin+State+Segmentation').respond(FakeSubChromatinStateSeg);

  $httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=hg19&parentTrack=Chromatin'
      + ':Chromatin+State+Segmentation:wgEncodeBroadHmmGm12878HMM').respond(FakeSubChromatinStateSegWG16);

  $httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=hg19&parentTrack=Chromatin'
      + ':Chromatin+State+Segmentation:wgEncodeBroadHmmGm12878HMM:10_Txn_Elongation').respond(FakeSubChromatinStateSegWG16TXN);


  
/***************************************************************************
********************** Mock B.taurus Maintracks ****************************
****************************************************************************/
// Maintrack mock
$httpBackend.when('GET', 'https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getMainTracks&genome=B.taurus').respond(FakeBtaurus);


// Subtracks mock
$httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=B.taurus&parentTrack=Genome+build+properties')
  .respond(FakeBtaurusGenomeBuild);

$httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=B.taurus&parentTrack=Genome+build+properties'
      + ':Assembly+gaps')
  .respond(FakeBtaurusGenomeBuildAssembly);

$httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=B.taurus&parentTrack=Genome+build+properties'
      + ':Chromosomes')
  .respond(FakeBtaurusGenomeBuildChromosomes);

$httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=B.taurus&parentTrack=Genome+build+properties'
      + ':Chromosomes:DNA')
  .respond(FakeBtaurusGenomeBuildChromosomesDNA);

$httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=B.taurus&parentTrack=Sequence')
  .respond(FakeBtaurusGenomeBuildChromosomes);

$httpBackend.whenGET('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames&genome=B.taurus&parentTrack=Sequence'
      + ':DNA')
  .respond(FakeBtaurusGenomeBuildChromosomesDNA);
  
/*


  wizardServices.factory('MainTrack', ['$resource',
  function($resource){
    return $resource('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getMainTracks', {genome:'@genomeKey'}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

wizardServices.factory('SubTracks', ['$resource',
  function($resource){
    return $resource('https://hyperbrowser.uio.no/wizard/hyper/json'
      + '?module=jsongui&method=getSubTrackNames'
      , {genome:'@genomeKey', parentTrack:'@mainTrack'}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

http({
    url: user.details_path, 
    method: "GET",
    params: {user_id: user.id}
 });
*/
  // Ensure that all requests, through the ui-router system is passed through (all partials)
  $httpBackend.whenGET().passThrough();
  });

// Wrapper function
}());