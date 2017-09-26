using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class TrackUserActivityMapping : EntityTypeConfiguration<TrackUserActivity>
    {
        public TrackUserActivityMapping()
        {
            this.ToTable("trackuseractivity");
            this.HasKey(e => e.UserActivityDate);

            this.Property(e => e.DidUserEnjoySite).HasColumnName("DidUserEnjoy");
            this.Property(e => e.UserActivityDate).HasColumnName("UserActivityTime");
        }
    }
}