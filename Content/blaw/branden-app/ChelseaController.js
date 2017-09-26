(function(angular){

    angular.module("branden-site.module")
             .controller('ChelseaController', ['$mdDialog', 'selectedTrophy', 'label', ChelseaController])

    function ChelseaController($mdDialog, selectedTrophy, label) {
        var vm = this;

        vm.premierleague = false;
        vm.faCup = false;
        vm.europaLeague = false;
        vm.leagueCup = false;
        vm.championsLeague = false;

        switch (selectedTrophy) {
            case label[0]:
                vm.premierLeague = true;
                break;
            case label[1]:
                vm.championsLeague = true;
                break;
            case label[2]:
                vm.europaLeague = true;
                break;
            case label[3]:
                vm.faCup = true;
                break;
            case label[4]:
                vm.leagueCup = true;
                break;
            default:
                console.log("Wrong");
                break;
        }

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