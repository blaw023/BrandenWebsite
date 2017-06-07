(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-skills.controller', [SkillsController])


    function SkillsController() {
        var vm = this;

        vm.currentNavItem = "skills";


        activate();

        function activate(){}





    }








})(angular);