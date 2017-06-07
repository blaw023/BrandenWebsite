	angular.module('branden-site.module')
		.config(routeConfig)
		.run(function($rootScope) {
			 $rootScope.$on("$stateChangeError", console.log.bind(console));
		});

	function routeConfig($urlRouterProvider, $stateProvider){
		
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'home.html',
			controller: 'branden-home.controller as vm',
			resolve: {
				images: [
					'branden-site.dataservice', function(service) {
						return service.getImages();
					}
				]
			}
		});

		$stateProvider.state('branden-skills', {
			url: '/skills',
			templateUrl: 'skills.html',
			controller: 'branden-skills.controller as vm'
		});

		$stateProvider.state('branden-investments', {
			url: '/investments',
			templateUrl: 'investments.html',
			controller: 'branden-investments.controller as vm',
			resolve: {
				investmentList: [
					'branden-site.dataservice', function (service) {
						return service.getInvestments();
					}
				]
			}
		});

		$stateProvider.state('branden-books', {
			url: '/books',
			templateUrl: 'branden-books.html',
			controller: 'branden-books.controller as vm',
			resolve: {			
				books: [
					'branden-site.dataservice', function (service) {
						return service.getBooks();
					}
				]
			}
		});
			
}