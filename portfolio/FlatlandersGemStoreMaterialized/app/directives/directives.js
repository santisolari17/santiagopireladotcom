(function(){

	var app = angular.module('store-directives',[]);

	app.directive('productDescription',function (){
		return {
			restrict: 'E',
			templateUrl: 'app/directives/directivesTemplates/product-description.html'
		};

	});

	app.directive('reviewPreview',function (){
		return {
			restrict: 'E',
			templateUrl: 'app/directives/directivesTemplates/review-preview.html'
		};

	});

	app.directive('productSpecs', function(){
		return{
			restrict: 'A',
			templateUrl: 'app/directives/directivesTemplates/product-specs.html'
		};
	});

	app.directive('productGallery', function(){
		return{
			restrict: 'E',
			templateUrl: 'app/directives/directivesTemplates/product-gallery.html',
			controller: function(){
				this.current = 0;
				this.setCurrent = function(value){
					this.current = value || 0;
				}
			},
			controllerAs: 'gallery'
		};
	});

})();