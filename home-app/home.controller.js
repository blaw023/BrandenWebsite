(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-home.controller',['SocialMedia', 'branden-site.dataservice', '$location', '$window', BrandenHomeController])

    function BrandenHomeController(SocialMedia, service, $location, $window) {     
        var vm = this;

        //functions
        vm.getImages = getImages;
        vm.setImageId = setImageId;
     
        //variables
        vm.images = [];
        vm.myInterval = 3000;
        vm.activeSlide = 0;
        vm.linkedln = SocialMedia.Linkedln;
        vm.twitter = SocialMedia.Twitter;
        vm.instagram = SocialMedia.Instagram;
        
        activate();


        function activate()
        {
            getImages();
        }

        //get needed images for the home page
        function getImages()
        {
            service.getImages()
                .then(ImageSuccess)
                .catch(ImageError)
        }

        //sets Image Id in vm.images[]
        function setImageId()
        {
            for(var i = 0; i < vm.images.length; i++)
            {
                vm.images[i].imageId = vm.images[i].imageId - 1;
            }
        }

        //Then and Catch Functions
        function ImageSuccess(response)
        {
            vm.images = response;
            setImageId();
        }

        function ImageError(error)
        {
            throw new DOMException("You messed up");
        }
        
    }

}(angular));