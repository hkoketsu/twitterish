using Microsoft.EntityFrameworkCore;
using Twitterish.Models;

namespace Twitterish.Data
{
    public class TwitterishContext : DbContext
    {
        public DbSet<Tweet> Tweets { get; set; }
        public DbSet<Command> Commands { get; set; }

        public TwitterishContext(DbContextOptions<TwitterishContext> options) : base(options)
        {
        }
    }
}