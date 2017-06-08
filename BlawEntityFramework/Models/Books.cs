using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blaw_Website.BlawEntityFramework.Models
{
    public class Books
    {
        public string author { get; set; }
        
        public string bookName { get; set; }

        public int bookCode { get; set;}

        public float bookReviewRating { get; set; }

        public string bookSynopsis { get; set; }

        public string bookImage { get; set; }
    }
}