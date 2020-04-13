using Microsoft.EntityFrameworkCore;
using Twitterish.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.Extensions.Options;


namespace Twitterish.Data
{
    public class TwitterishContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<Tweet> Tweets { get; set; }

        public TwitterishContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
    }
}