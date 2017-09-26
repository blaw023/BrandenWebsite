angular.module('branden-site.module').config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'Content/blaw/branden-app/templates/home.html',
        controller: 'branden-home.controller as vm',
        resolve: {
            Images: [
                'branden-site.dataservice', function (service) {
                    return service.getImages();
                }
            ]
        }
    });

    $stateProvider.state('branden-skills', {
        url: '/skills',
        templateUrl: 'Content/blaw/branden-app/templates/skills.html',
        controller: 'branden-skills.controller as vm',
        resolve: {
            SkillsVideos: [
                'branden-site.dataservice', function (service) {
                    return service.getSkillsVideos();
                }
            ]
        }
    });

    $stateProvider.state('branden-investments', {
        url: '/investments',
        templateUrl: 'Content/blaw/branden-app/templates/investments.html',
        controller: 'branden-investments.controller as vm',
        resolve: {
            InvestmentList: [
                'branden-site.dataservice', function (service) {
                    return service.getInvestments();
                }
            ]
        }
    });

    $stateProvider.state('branden-books', {
        url: '/books',
        templateUrl: 'Content/blaw/branden-app/templates/branden-books.html',
        controller: 'branden-books.controller as vm',
        resolve: {
            Books: [
                'branden-site.dataservice', function (service) {
                    return service.getBooks();
                }
            ],
            BooksSearch: [
                'branden-site.dataservice', function (service) {
                    return service.getBooksSearchUrl();
                }
            ]
        }
    });

    $stateProvider.state('branden-dashboard', {
        url: '/sports-dashboard',
        templateUrl: 'Content/blaw/branden-app/templates/branden-dashboard.html',
        controller: 'branden-dashboard.controller as vm',
        resolve: {
            ChelseaPlayers: [
                'branden-site.dataservice', function (service) {
                    return service.getPlayers();
                }
            ],

            ChelseaFacts: [
                'branden-site.dataservice', function (service) {
                    return service.getChelseaFacts();
                }
            ],

            UconnPlayerStats: [
                'branden-site.dataservice', function (service) {
                    return service.getUconnPlayerStats();
                }
            ]

        }
    });

}]);
//.run(function($rootScope) {
//	 $rootScope.$on("$stateChangeError", console.log.bind(console));
//});