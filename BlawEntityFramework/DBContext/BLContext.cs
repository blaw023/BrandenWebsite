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

        }

        public DbSet<Images> Images { get; set; }

    }
}