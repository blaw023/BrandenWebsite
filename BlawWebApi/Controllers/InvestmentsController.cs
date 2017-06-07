using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using Blaw_Website.BlawEntityFramework.DBContext;
using Blaw_Website.BlawEntityFramework.Models;
using Blaw_Website.BlawWebApi.Repositories;
using System.Linq;

namespace Blaw_Website.BlawWebApi.Controllers
{
    [RoutePrefix("api/investments")]
    public class InvestmentsController : ApiController
    {
        private BLContext context;

        public InvestmentsController()
        {
            this.context = new BLContext();
        }

        [HttpGet, Route("getInvestments")]
        public HttpResponseMessage GetInvesments()
        {
            InvestmentsRepository invest = new InvestmentsRepository(context);

            IList<Investments> investmentList = new List<Investments>();

            investmentList = invest.GetInvestments();

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, investmentList);
        }
    }
}