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
    [RoutePrefix("api/skills")]
    public class SkillsController : ApiController
    {
        private BLContext context;

        public SkillsController()
        {
            this.context = new BLContext();
        }

        [HttpGet, Route("getSkillsVideos")]
        public HttpResponseMessage GetSkillsVideos()
        {
            SkillsRepository sr = new SkillsRepository(context);
            IList<Skills> skillsVideoList = sr.returnSkillsVideos();

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, skillsVideoList);
        }
    }
}