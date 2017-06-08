using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class BookReviewMapping : EntityTypeConfiguration<BookReview>
    {
        public BookReviewMapping()
        {
            this.ToTable("book_reviews");

            this.HasKey(e => e.bookCode);

            this.Property(e => e.bookCode).HasColumnName("Book_Code");
            this.Property(e => e.bookReview).HasColumnName("Book_Review");
        }
    }
}