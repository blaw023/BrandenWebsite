(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-home.controller',['SocialMedia', '$location', '$window', BrandenHomeController])

    function BrandenHomeController(SocialMedia, $location, $window) {     
        var vm = this;

        //functions
        vm.gotoLinkedln = gotoLinkedln;
        vm.gotoTwitter = gotoTwitter;
        vm.gotoInsta = gotoInsta;
        
        activate();


        function activate()
        {
        }

        function gotoLinkedln()
        {
            $window.location = SocialMedia.Linkedln;
            return $window.location;
        }

        function gotoTwitter()
        {
            $window.location = SocialMedia.Twitter;
            return $window.location;
        }

        function gotoInsta()
        {
            $window.location = SocialMedia.Instagram;
            return $window.location;
        }
        
    }

}(angular));