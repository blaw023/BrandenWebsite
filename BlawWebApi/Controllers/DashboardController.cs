using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using Blaw_Website.BlawEntityFramework.DBContext;
using Blaw_Website.BlawEntityFramework.Models;
using Blaw_Website.BlawWebApi.Repositories;
using System.Linq;
using System.Web.Http.Cors;

namespace Blaw_Website.BlawWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/dashboard")]
    public class DashboardController : ApiController
    {
        private BLContext context;

        public DashboardController()
        {
            this.context = new BLContext();
        }

        [HttpGet, Route("getChelseaFacts")]
        public HttpResponseMessage GetChelseaFacts()
        {
            DashboardRepository cf = new DashboardRepository(context);

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, cf.ReturnChelseaFacts());
        }

        [HttpGet, Route("getUconnPlayerStats")]
        public HttpResponseMessage GetUconnPlayerStats()
        {
            DashboardRepository cf = new DashboardRepository(context);

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, cf.ReturnUconnPlayerStats());
        }

        [HttpPost, Route("postUserActivity")]
        public HttpResponseMessage PostUserActivity(TrackUserActivity info)
        {
            DashboardRepository cf = new DashboardRepository(context);

            cf.InsertActivityInfo(info);

            return Request.CreateResponse(System.Net.HttpStatusCode.OK);
        }
    }
}