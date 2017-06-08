(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-investments.controller',['investmentList', 'TransactionType', InvestmentsController])

    function InvestmentsController(investmentList, TransactionType) {
        var vm = this;

        //variables
        vm.investmentTransactions = investmentList;
        vm.labels = [];
        vm.series = [];
        vm.investmentData = [];
        vm.options = [];
        vm.investmentDataOverride = [];
        vm.subjectA = vm.investmentTransactions[0].accountName;
        vm.subjectB = vm.investmentTransactions[1].accountName;

        //angular material
        vm.currentNavItem = 'investments';
        vm.isCollapsed = false;

        //functions
        vm.createInvestmentGraph = createInvestmentGraph;
        vm.chartClick = chartClick;

        activate();

        function activate() {
            createInvestmentGraph();
           
        }

        ///<summary>
        ///Sets graph alignment for given data.
        ///</summary>
        function createInvestmentGraph() {
          
            var subjectAData = [];
            var subjectBData = [];
            for (var i = 0; i < vm.investmentTransactions.length; i++) {
                if (vm.investmentTransactions[i].accountName == TransactionType.Roth) {
                    subjectAData.push(vm.investmentTransactions[i].endingBalance);
                }
                else
                {
                    subjectBData.push(vm.investmentTransactions[i].endingBalance);
                }
            }

            vm.labels = ['Oct. 16', 'Nov. 16', 'Dec. 16', 'Jan. 17', 'Feb. 17', 'Mar. 17', 'Apr. 17', 'May 17'];
            vm.series = [vm.subjectA, vm.subjectB];
            vm.investmentData = [subjectAData, subjectBData];
            vm.investmentDataOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
            vm.options = {
                    scales: {
                    yAxes: [
                      {
                          id: 'y-axis-1',
                          type: 'linear',
                          display: true,
                          position: 'left'
                      },
                      {
                          id: 'y-axis-2',
                          type: 'linear',
                          display: true,
                          position: 'right'
                      }
                    ]
                }
            };
        }

        //Not needed?
        function chartClick(points, evt) {
            console.log(points, evt);
        }
    }




}(angular));