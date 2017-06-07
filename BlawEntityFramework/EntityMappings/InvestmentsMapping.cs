using Blaw_Website.BlawEntityFramework.Models;
using System.Data.Entity.ModelConfiguration;

namespace Blaw_Website.BlawEntityFramework.EntityMappings
{
    public class InvestmentsMapping :EntityTypeConfiguration<Investments>
    {
        public InvestmentsMapping()
        {
            this.HasKey(e => e.investmentId);

            this.ToTable("transaction_investments");

            this.Property(e => e.investmentId).HasColumnName("investment_id");
            this.Property(e => e.accountName).HasColumnName("Account_Name");
            this.Property(e => e.transactionDescription).HasColumnName("Transaction_Description");
            this.Property(e => e.amountDeposited).HasColumnName("Amount");
            this.Property(e => e.endingBalance).HasColumnName("Ending_Balance");
            this.Property(e => e.dateCompleted).HasColumnName("Date_Completed");

        }
    }
}