using Microsoft.EntityFrameworkCore;
using Twitterish.Models;

namespace Twitterish.Data
{
    public class TwitterishContext : DbContext
    {
        public TwitterishContext(DbContextOptions<TwitterishContext> options) : base(options)
        {
        }

        public DbSet<Tweet> Tweets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tweet>().ToTable("Tweet");
        }
    }
}