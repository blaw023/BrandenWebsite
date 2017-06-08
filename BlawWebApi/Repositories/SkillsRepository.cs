using System.Collections.Generic;
using System.Linq;
using Blaw_Website.BlawEntityFramework.DBContext;
using Blaw_Website.BlawEntityFramework.Models;

namespace Blaw_Website.BlawWebApi.Repositories
{
    public class SkillsRepository
    {
        private BLContext context;

        public SkillsRepository(BLContext blcontext)
        {
            this.context = blcontext;
        }

        public IList<Skills> returnSkillsVideos()
        {
            var videoList = context.Skills.Select(x => x).ToList();

            return videoList;
        }
    }
}