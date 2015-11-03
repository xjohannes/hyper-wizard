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


