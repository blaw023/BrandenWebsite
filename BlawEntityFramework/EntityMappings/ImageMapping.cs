using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class ImageMapping : EntityTypeConfiguration<Images>
    {
        public ImageMapping()
        {
            this.ToTable("site_images");

            this.HasKey(e => e.imageId);

            this.Property(e => e.imageId).HasColumnName("image_id");
            this.Property(e => e.image).HasColumnName("image");
            this.Property(e => e.pageIdentifier).HasColumnName("page_identifier");
        }
    }
}