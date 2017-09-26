(function(angular){

    angular.module("branden-site.module")
             .controller('UconnController', ['$mdDialog', 'selectedPlayerStats', UconnController])

    function UconnController($mdDialog, selectedPlayerStats) {
        var vm = this;

        vm.playerStats = selectedPlayerStats;

        vm.hide = function () {
            $mdDialog.hide();
        };

        vm.cancel = function () {
            $mdDialog.cancel();
        };

        vm.answer = function (answer) {
            $mdDialog.hide(answer);
        };

    }

}(angular))