(function (angular) {

    angular.module("branden-site.module")
            .controller('branden-dashboard.controller', ['$scope', 'branden-site.dataservice', 'ChelseaPlayers', 'ChelseaFacts', 'UconnPlayerStats', '$mdDialog', '$state', BrandenDashboardController])
            .controller('UconnController', ['$scope', '$mdDialog', 'selectedPlayerStats', UconnController])
            

    function BrandenDashboardController($scope, service, ChelseaPlayers, ChelseaFacts, UconnPlayerStats, $mdDialog, $state) {
        var vm = this;

        vm.chelseaPlayers = ChelseaPlayers.players;
        vm.chelseaFacts = ChelseaFacts;
        vm.uconnPlayerStats = UconnPlayerStats;
        vm.showModal = false;
        var selectedTrophy = null;
        var selectedPlayerStats = [];
        vm.buttonText = null;
        
        //data initialized for chelsea chart
        vm.label = [];
        vm.chelseaData = [];

        //data initialized for Uconn Men Chart
        vm.labels = [];
        vm.data = [];

        //data initialized for Uconn Women Chart
        vm.ucwData = [];
        vm.ucwLabels = [];

        //anuglar material nav
        vm.currentNavItem = "dashboard";

        //object
        var trackActivity = {
            DidUserEnjoySite: null,
            UserActivityDate: new Date()
        };

        //functions
        vm.setChelseaChart = setChelseaChart;
        vm.onClick = onClick;
        vm.showAlert = showAlert;
        vm.hideButton = hideButton;
        vm.showVideo = showVideo;
        vm.setUconnChart = setUconnChart;
        vm.showStats = showStats;
        vm.getPlayerStats = getPlayerStats

        //activate
        activate();


        function activate() {
            setChelseaChart();
            setUconnChart();
        }

        function setChelseaChart() {
            vm.label = ["(Click to see video) Premier League Championships", "(Click to see video) Champions League Trophies", "(Click to see video) Europa League Trophies", "(Click to see video) FA Cup Trophies", "(Click to see video) League Cup Trophies"];
            vm.chelseaData = [6, 1, 1, 7, 5];
        }

        function setUconnChart() {
            vm.labels = ['Big East Championships', 'AAC Championships', 'National Championships'];
            vm.data = [7, 1, 4];

            vm.ucwLabels = ['Big East Championships', 'AAC Championships', 'National Championships'];
            vm.ucwData = [18, 4, 11];

        }

        //Called when you click on doughnut chart
        function onClick(points, evt) {
            switch(points[0]._view.label)
            {
                case vm.label[0]:
                    vm.showModal = true;
                    selectedTrophy = vm.label[0];
                    vm.buttonText = 'Premier League Champions Video';
                    break;
                case vm.label[1]:
                    vm.showModal = true;
                    selectedTrophy = vm.label[1];
                    vm.buttonText = 'Champions League Video';
                    break;
                case vm.label[2]:
                    vm.showModal = true;
                    selectedTrophy = vm.label[2];
                    vm.buttonText = 'Europa League Video';
                    break;
                case vm.label[3]:
                    vm.showModal = true;
                    selectedTrophy = vm.label[3];
                    vm.buttonText = 'FA Cup Video';
                    break;
                case vm.label[4]:
                    vm.showModal = true;
                    selectedTrophy = vm.label[4];
                     vm.buttonText = 'League Cup Video';
                    break;
                default:
                    console.log("championship not found");
                    break;
            }
            //trigger on click event to update angular dom
            document.getElementById('hideButton').click();
        }

        //Called when Random Facts button selected
        function showAlert(ev) {
            //find random number between 0 and 11
            var arrayIndex = Math.floor((Math.random() * 11));

            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('11 Random Chelsea Facts')
                .textContent(vm.chelseaFacts[arrayIndex].description)
                .ariaLabel('Random Chelsea Facts')
                .ok('Cool!')
                .targetEvent(ev)
            );
        }

        //Calling ChelseaController to show appropiate video to user
        function showVideo(ev) {
            $mdDialog.show({
                controller: 'ChelseaController as vm',
                templateUrl: 'Content/blaw/branden-app/templates/show-chelsea.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                   selectedTrophy: selectedTrophy,
                   label: vm.label
                }
            }).then(function (answer) {
                if (answer == 1) {
                    trackActivity.DidUserEnjoySite = 1;
                    service.trackUserActivity(trackActivity)
                            .then(function (){},function(){});

                }
                else {
                    trackActivity.DidUserEnjoySite = 0;
                    service.trackUserActivity(trackActivity)
                            .then(function () { },function (){});
                }
            }, function () {});
        }

        //Calling UconnController to show appropiate stats to user
        function showStats(ev) {
            getPlayerStats(ev);
            $mdDialog.show({
                controller: 'UconnController as vm',
                templateUrl: 'Content/blaw/branden-app/templates/show-uconn.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    selectedPlayerStats: selectedPlayerStats
                }
            }).then(function (answer) {
                if (answer == 1) {
                    trackActivity.DidUserEnjoySite = 1;
                    service.trackUserActivity(trackActivity)
                            .then(function (){},function(){});

                }
                else {
                    trackActivity.DidUserEnjoySite = 0;
                    service.trackUserActivity(trackActivity)
                            .then(function () { },function (){});
                }
            }, function () {});
        }

        //Filter stats based on selected person
        function getPlayerStats(ev){
            var text = ev.toElement.innerText;
            text = text.substring(15);

            selectedPlayerStats = vm.uconnPlayerStats.filter(function (player) {
                return player.Name.toUpperCase() == text;
            });
        }

        

        //trigger on click event
        function hideButton(){}    
    }

    //Controller for event when user wants to see player stats
    function UconnController($scope, $mdDialog, selectedPlayerStats) {

        $scope.playerStats = selectedPlayerStats;

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

}(angular));