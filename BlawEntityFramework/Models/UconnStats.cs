using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blaw_Website.BlawEntityFramework.Models
{
    public class UconnStats
    {
        public string Name { get; set; }

        public string Season { get; set; }

        public double MinutesPerGame { get; set; }

        public double FieldGoalPercentage { get; set; }

        public double ThreePointPercentage { get; set; }

        public double FreeThrowPercentage { get; set; }

        public double Assists { get; set; }

        public double Steals { get; set; }

        public double Blocks { get; set; }

        public double Points { get; set; }

        public int Id { get; set; }

    }
}