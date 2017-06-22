using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blaw_Website.BlawEntityFramework.Models
{
    public class Books
    {
        public string Author { get; set; }
        
        public string BookName { get; set; }

        public int BookCode { get; set;}

        public float BookReviewRating { get; set; }

        public string BookSynopsis { get; set; }

        public string BookImage { get; set; }
    }
}