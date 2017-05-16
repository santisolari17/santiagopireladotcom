(function(){

	var app = angular.module('store-controllers',[]);

	 app.controller('storeController',['$http','$mdSidenav',function ($http,$mdSidenav) {
 	 	//this.products = gems;
 	 	var self = this;
 	 	$http.get('../AngularJS-FlatlandersGemStore/store-products.json').success(function(data){
 	 		self.products = data;
 	 	});

 	 	self.select = function(value){
 	 		self.selected = value;
 	 	};

		self.toggleSideNav = function() {
			$mdSidenav('leftSidenav').toggle();
		}

		self.currentImg = 0;
		self.setCurrentImg = function(value){
			self.currentImg = value || 0;
		}

	 }]);

	 app.controller('panelController',function () {
	 	 this.tab = 1;
	 	 this.selectTab = function (value) {
	 	 	 this.tab = value;
	 	 }
	 	 this.isSelected = function (value) {
	 	 	 return this.tab === value;
	 	 }

	 });

	app.controller('reviewController', function() {
		this.review = {};
		this.addReview = function (product){
			//this.review = {'createdOn': Date.now()}; This line of code re-writes the array, yet it lets you pass the angularjs challenge 3.11
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();