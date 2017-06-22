using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class BookReviewMapping : EntityTypeConfiguration<BookReview>
    {
        public BookReviewMapping()
        {
            this.ToTable("book_reviews");

            this.HasKey(e => e.BookCode);

            this.Property(e => e.BookCode).HasColumnName("Book_Code");
            this.Property(e => e.BookReviewDesc).HasColumnName("Book_Review");
        }
    }
}