using System.Data.Entity;
using MySql.Data.Entity;
using Blaw_Website.BlawEntityFramework.Models;
using Blaw_Website.BlawEntityFramework.EntityMappings;

namespace Blaw_Website.BlawEntityFramework.DBContext
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class BLContext : DbContext
    {
        
        /// <summary>
        /// Initializes new instance of the <see cref="MySqlContext"/> class.
        /// </summary>
        public BLContext() 
            : base("name=MySqlContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Configurations.Add<Images>(new ImageMapping());
            modelBuilder.Configurations.Add<Books>(new BooksMapping());
            modelBuilder.Configurations.Add<BookReview>(new BookReviewMapping());
            modelBuilder.Configurations.Add<Investments>(new InvestmentsMapping());
            modelBuilder.Configurations.Add<Skills>(new SkillsMapping());
            modelBuilder.Configurations.Add<BooksSearch>(new BooksSearchMapping());
            modelBuilder.Configurations.Add<ChelseaFacts>(new ChelseaFactsMapping());
            modelBuilder.Configurations.Add<TrackUserActivity>(new TrackUserActivityMapping());
            modelBuilder.Configurations.Add<UconnStats>(new UconnStatsMapping());

        }

        public DbSet<Images> Images { get; set; }
        public DbSet<Books> Books { get; set; }
        public DbSet<BookReview> BookReview { get; set; }
        public DbSet<Investments> Investments { get; set; }
        public DbSet<Skills> Skills { get; set; }
        public DbSet<BooksSearch> BooksSearch { get; set; }
        public DbSet<ChelseaFacts> ChelseaFacts { get; set; }
        public DbSet<TrackUserActivity> TrackUserActivity { get; set; }
        public DbSet<UconnStats> UconnStats { get; set; }

    }
}