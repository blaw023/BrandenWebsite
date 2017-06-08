angular.module('branden-site.module').config(['$stateProvider, $urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'app/home.html',
        controller: 'branden-home.controller as vm'
    });

}]);