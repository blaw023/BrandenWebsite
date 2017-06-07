using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blaw_Website.BlawEntityFramework.Models
{
    public class Investments
    {
        public int investmentId { get; set; }

        public string accountName { get; set; }

        public string transactionDescription { get; set; }

        public double amountDeposited { get; set; }

        public double endingBalance { get; set; }

        public DateTime? dateCompleted { get; set; }


    }
}