angular
    .module('branden-site.module', ['ngAnimate', 'ngAria', 'ui.bootstrap', 'ui.router', 'ngMaterial', 'vjs.video', 'chart.js'])
        .constant('SocialMedia', {
            Linkedln: 'https://www.linkedin.com/in/branden-lawrence-b0191b81',
            Twitter: 'https://twitter.com/blaw023',
            Instagram: 'https://www.instagram.com/blaw023',
            Github: 'https://github.com/blaw023'
        }).constant('TransactionType', {
            Roth: "Roth IRA",
            BWealth: "Branden's Personal Account"
        }).constant('config',{
            apiUrl: 'http://localhost:2713/',
            prodApiUrl: 'http://aboutbranden.azurewebsites.net/'
        });
        
    