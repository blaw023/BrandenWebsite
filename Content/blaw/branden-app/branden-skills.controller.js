(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-skills.controller', ['skillsVideos', SkillsController])


    function SkillsController(skillsVideos) {
        var vm = this;
      
        vm.skillsVideos = skillsVideos;
        vm.isCollapsed = false;
        

        //angular material
        vm.currentNavItem = "skills";

        activate();

        ////////////////////////////

        function activate() { }

            /*
            Vjs-video does not like when I bind vm.skillsVideos in HTML. Therefore I have to use the video source link in the html page. :(
            */
           
    }

})(angular);