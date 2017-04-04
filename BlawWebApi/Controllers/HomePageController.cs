using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using Blaw_Website.BlawEntityFramework.DBContext;
using Blaw_Website.BlawEntityFramework.Models;
using Blaw_Website.BlawWebApi.Repositories;


namespace Blaw_Website.BlawWebApi.Controllers
{
    [RoutePrefix("api/homepage")]
    public class HomePageController : ApiController
    {
        private BLContext context;

        public HomePageController()
        {
            this.context = new BLContext();
        }

        [HttpGet, Route("getImages")]
        public HttpResponseMessage GetImages()
        {
            HomePageRepository hp = new HomePageRepository(context);
            IList<Images> images = new List<Images>();

            images = hp.GetImages();
            return Request.CreateResponse(System.Net.HttpStatusCode.OK, images);


        }
    }
}