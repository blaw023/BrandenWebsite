using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class ImageMapping : EntityTypeConfiguration<Images>
    {
        public ImageMapping()
        {
            this.ToTable("site_images");

            this.HasKey(e => e.ImageId);

            this.Property(e => e.ImageId).HasColumnName("image_id");
            this.Property(e => e.Image).HasColumnName("image");
            this.Property(e => e.PageIdentifier).HasColumnName("page_identifier");
        }
    }
}