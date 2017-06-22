using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class InvestmentsMapping :EntityTypeConfiguration<Investments>
    {
        public InvestmentsMapping()
        {
            this.HasKey(e => e.InvestmentId);

            this.ToTable("transaction_investments");

            this.Property(e => e.InvestmentId).HasColumnName("investment_id");
            this.Property(e => e.AccountName).HasColumnName("Account_Name");
            this.Property(e => e.TransactionDescription).HasColumnName("Transaction_Description");
            this.Property(e => e.AmountDeposited).HasColumnName("Amount");
            this.Property(e => e.EndingBalance).HasColumnName("Ending_Balance");
            this.Property(e => e.DateCompleted).HasColumnName("Date_Completed");

        }
    }
}