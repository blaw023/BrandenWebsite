using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class ChelseaFactsMapping : EntityTypeConfiguration<ChelseaFacts>
    {
        public ChelseaFactsMapping()
        {
            this.HasKey(e => e.id);
            this.ToTable("chelsea_facts");

            this.Property(e => e.id).HasColumnName("ID");
            this.Property(e => e.description).HasColumnName("DESCRIPTION").HasMaxLength(1000);

        }
    }
}