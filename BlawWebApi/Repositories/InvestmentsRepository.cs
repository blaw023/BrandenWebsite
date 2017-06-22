using System.Collections.Generic;
using System.Linq;
using Blaw_Website.BlawEntityFramework.DBContext;
using Blaw_Website.BlawEntityFramework.Models;

namespace Blaw_Website.BlawWebApi.Repositories
{
    public class InvestmentsRepository
    {
        private BLContext blContext;

        public InvestmentsRepository(BLContext bl_context)
        {
            blContext = bl_context;
        }

        public IList<Investments> GetInvestments()
        {
            
            var investments = blContext.Investments.Select(x => x).OrderBy(x => x.DateCompleted).ToList();

            return investments;
        }
    }
}