using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class SkillsMapping : EntityTypeConfiguration<Skills>
    {
        public SkillsMapping()
        {
            this.ToTable("site_videos");

            this.Property(e => e.Id).HasColumnName("Id");
            this.Property(e => e.VideoSource).HasColumnName("Video_Source");
            this.Property(e => e.VideoType).HasColumnName("Video_Type");
        }
    }
}