using System.Collections.Generic;
using System.Linq;
using Blaw_Website.BlawEntityFramework.DBContext;
using Blaw_Website.BlawEntityFramework.Models;


namespace Blaw_Website.BlawWebApi.Repositories
{
    public class HomePageRepository 
    {
        private BLContext bl_Context;

        public HomePageRepository(BLContext blContext) 
           :base()
        {
            bl_Context = blContext; 
        }

        public IList<Images> GetImages()
        {                 
            var content = bl_Context.Images.Select(x => x).ToList();
            
            return content;
        }
    }
}