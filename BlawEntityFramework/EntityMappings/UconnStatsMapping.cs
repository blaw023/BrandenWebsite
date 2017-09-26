using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class UconnStatsMapping : EntityTypeConfiguration<UconnStats>
    {
        public UconnStatsMapping()
        {
            this.ToTable("uconnstats");
            this.HasKey(e => e.Id);

            this.Property(e => e.Assists).HasColumnName("Assists");
            this.Property(e => e.Blocks).HasColumnName("Blocks");
            this.Property(e => e.FieldGoalPercentage).HasColumnName("FieldGoalPercentage");
            this.Property(e => e.FreeThrowPercentage).HasColumnName("FreeThrowPercentage");
            this.Property(e => e.MinutesPerGame).HasColumnName("MinutesPerGame");
            this.Property(e => e.Name).HasColumnName("Name").HasMaxLength(50);
            this.Property(e => e.Points).HasColumnName("Points");
            this.Property(e => e.Season).HasColumnName("Season").HasMaxLength(50);
            this.Property(e => e.Steals).HasColumnName("Steals");
            this.Property(e => e.ThreePointPercentage).HasColumnName("ThreePointPercentage");
            this.Property(e => e.Id).HasColumnName("Id");
        }
    }
}