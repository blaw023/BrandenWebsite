(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-investments.controller',['InvestmentList', 'TransactionType', InvestmentsController])

    function InvestmentsController(InvestmentList, TransactionType) {
        var vm = this;

        //variables
        vm.investmentTransactions = InvestmentList;
        vm.labels = [];
        vm.series = [];
        vm.investmentData = [];
        vm.options = [];
        vm.investmentDataOverride = [];
        vm.subjectA = vm.investmentTransactions[0].AccountName;
        vm.subjectB = vm.investmentTransactions[1].AccountName;

        //angular material
        vm.currentNavItem = 'investments';
        vm.isCollapsed = false;

        //functions
        vm.createInvestmentGraph = createInvestmentGraph;

        activate();

        //////////////////////////

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
                if (vm.investmentTransactions[i].AccountName == TransactionType.Roth) {
                    subjectAData.push(vm.investmentTransactions[i].EndingBalance);
                }
                else
                {
                    subjectBData.push(vm.investmentTransactions[i].EndingBalance);
                }
            }

            vm.labels = ['Jan. 17', 'Feb. 17', 'Mar. 17', 'Apr. 17', 'May 17', 'Jun. 17', 'Jul. 17', 'Aug. 17'];
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
    }

}(angular));