using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;


namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class BooksMapping : EntityTypeConfiguration<Books>
    {
        public BooksMapping()
        {
            this.ToTable("branden.books");

            this.HasKey(e => e.bookName);

            this.Property(e => e.author).HasColumnName("Author");
            this.Property(e => e.bookName).HasColumnName("Book_Name");
            this.Property(e => e.bookCode).HasColumnName("Book_Code");
            this.Property(e => e.bookReviewRating).HasColumnName("Book_Review_Rating");
            this.Property(e => e.bookSynopsis).HasColumnName("Book_Synopsis");
            this.Property(e => e.bookImage).HasColumnName("Book_Image");
        }
    }
}