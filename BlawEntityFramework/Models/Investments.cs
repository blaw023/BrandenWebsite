using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blaw_Website.BlawEntityFramework.Models
{
    public class Investments
    {
        public int InvestmentId { get; set; }

        public string AccountName { get; set; }

        public string TransactionDescription { get; set; }

        public double AmountDeposited { get; set; }

        public double EndingBalance { get; set; }

        public DateTime? DateCompleted { get; set; }


    }
}