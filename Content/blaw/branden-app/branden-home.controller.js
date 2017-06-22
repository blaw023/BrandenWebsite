(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-home.controller',['$state', 'SocialMedia', 'branden-site.dataservice', 'Images', '$location', '$window', BrandenHomeController])

    function BrandenHomeController($state, SocialMedia, service, Images, $location, $window) {     
        var vm = this;
     
        //variables
        vm.images = Images;
        vm.myInterval = 3000;
        vm.activeSlide = 0;
        vm.linkedln = SocialMedia.Linkedln;
        vm.twitter = SocialMedia.Twitter;
        vm.instagram = SocialMedia.Instagram;
        vm.github = SocialMedia.Github;

        vm.isCollapsed = true;
        vm.showAboutMe = true;
        vm.hideButton = false;
        vm.hideContent = true;
                
        //angular material
        vm.currentNavItem = "home";
       
        //functions
        vm.setImageId = setImageId;
        vm.closeContent = closeContent;
        vm.showContent = showContent;
        
        activate();


        function activate()
        {
           setImageId();
        }

        ///<summary>
        //sets Image Id in vm.images[]
        ///</summary>
        function setImageId()
        {
            for(var i = 0; i < vm.images.length; i++)
            {
                vm.images[i].ImageId = vm.images[i].ImageId - 1;
            }
        }

        function showContent() {
            vm.hideContent = false;
            vm.hideButton = true;

        }

        /**
        *Function called when close button is clicked
        */
        function closeContent()
        {
            vm.hideContent = true;
            vm.hideButton = false;
        }
        
    }

}(angular));