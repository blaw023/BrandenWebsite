using System.Collections.Generic;
using System.Linq;
using Blaw_Website.BlawEntityFramework.DBContext;
using Blaw_Website.BlawEntityFramework.Models;

namespace Blaw_Website.BlawWebApi.Repositories
{
    public class DashboardRepository
    {
        private BLContext context;

        public DashboardRepository(BLContext blcontext)
        {
            this.context = blcontext;
        }

        public IEnumerable<ChelseaFacts> ReturnChelseaFacts()
        {
            return context.ChelseaFacts.Select(x => x).AsEnumerable();
        }

        public IEnumerable<UconnStats> ReturnUconnPlayerStats()
        {
            return context.UconnStats.Select(x => x).AsEnumerable();
        }

        public void InsertActivityInfo(TrackUserActivity info)
        {
            context.TrackUserActivity.Add(info);

            context.SaveChanges();

        }
    }
}