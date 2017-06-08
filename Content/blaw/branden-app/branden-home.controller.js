(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-home.controller',['$state', 'SocialMedia', 'branden-site.dataservice', 'images', '$location', '$window', BrandenHomeController])

    function BrandenHomeController($state, SocialMedia, service, images, $location, $window) {     
        var vm = this;
     
        //variables
        vm.images = images;
        vm.myInterval = 3000;
        vm.activeSlide = 0;
        vm.linkedln = SocialMedia.Linkedln;
        vm.twitter = SocialMedia.Twitter;
        vm.instagram = SocialMedia.Instagram;
        vm.github = SocialMedia.Github;

        vm.isCollapsed = true;
        vm.showAboutMe = true;
                
        //angular material
        vm.currentNavItem = "home";
       
        //functions
        vm.setImageId = setImageId;
        
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
                vm.images[i].imageId = vm.images[i].imageId - 1;
            }
        }
        
    }

}(angular));