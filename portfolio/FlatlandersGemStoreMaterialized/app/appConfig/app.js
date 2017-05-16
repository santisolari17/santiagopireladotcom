(function(){

	 var app = angular.module('gemStore', [
	 	'store-directives',
	 	'store-controllers',
	 	'ngMaterial'
	 	]);

	app.config(($mdThemingProvider) => {

    $mdThemingProvider.theme('default')
      .primaryPalette('deep-orange')
      .accentPalette('red');
  })

})();
