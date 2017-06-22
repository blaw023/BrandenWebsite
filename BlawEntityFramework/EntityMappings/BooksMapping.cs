using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;


namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class BooksMapping : EntityTypeConfiguration<Books>
    {
        public BooksMapping()
        {
            this.ToTable("branden.books");

            this.HasKey(e => e.BookName);

            this.Property(e => e.Author).HasColumnName("Author");
            this.Property(e => e.BookName).HasColumnName("Book_Name");
            this.Property(e => e.BookCode).HasColumnName("Book_Code");
            this.Property(e => e.BookReviewRating).HasColumnName("Book_Review_Rating");
            this.Property(e => e.BookSynopsis).HasColumnName("Book_Synopsis");
            this.Property(e => e.BookImage).HasColumnName("Book_Image");
        }
    }
}