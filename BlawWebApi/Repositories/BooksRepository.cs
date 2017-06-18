using System.Collections.Generic;
using System.Linq;
using Blaw_Website.BlawEntityFramework.DBContext;
using Blaw_Website.BlawEntityFramework.Models;
using System;

namespace Blaw_Website.BlawWebApi.Repositories
{
    public class BooksRepository 
    {
        private BLContext bl_context;

        public BooksRepository(BLContext blContext)
            :base()
        {
            bl_context = blContext;
        }

        public IQueryable RetrieveBooks()
        {
            var booksQuery = bl_context.Books.Join(bl_context.BookReview,
                a => a.bookCode,
                b => b.bookCode,
                (a, b) => new
                {
                    a.author,
                    a.bookCode,
                    a.bookImage,
                    a.bookName,
                    a.bookReviewRating,
                    a.bookSynopsis,
                    b.bookReview
                }).AsQueryable();

            return booksQuery;
          
        }

        public IList<BooksSearch> RetrieveBooksUrl()
        {      
          var content = bl_context.BooksSearch.Select(x => x).ToList();

          return content;
        }

    }
}