using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class BooksSearchMapping : EntityTypeConfiguration<BooksSearch>
    {
        public BooksSearchMapping()
        {
            this.HasKey(e => e.bookCode);
            this.ToTable("books_search");

            this.Property(e => e.bookName).HasColumnName("Book_Name").HasMaxLength(50);
            this.Property(e => e.bookCode).HasColumnName("Book_Code");
            this.Property(e => e.bookUrl).HasColumnName("Book_Amazon_Url");

        }
    }
}