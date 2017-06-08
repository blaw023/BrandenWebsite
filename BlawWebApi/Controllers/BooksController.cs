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
    [RoutePrefix("api/books")]
    public class BooksController : ApiController
    {
        private BLContext context;

        public BooksController()
        {
            this.context = new BLContext();
        }

        [HttpGet, Route("getBooks")]
        public HttpResponseMessage GetBooks()
        {
            BooksRepository br = new BooksRepository(context);
            IQueryable booksQuery = br.RetrieveBooks();

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, booksQuery);


        }
    }
}