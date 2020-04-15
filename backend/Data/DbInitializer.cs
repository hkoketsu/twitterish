using Twitterish.Data;
using Twitterish.Models;
using System;
using System.Linq;

namespace ContosoUniversity.Data
{
    public static class DbInitializer
    {
        public static void Initialize(TwitterishContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Tweets.Any())
            {
                return;   // DB has been seeded
            }

            var tweets = new Tweet[]
            {
                new Tweet{Body="1"},
                new Tweet{Body="2"},
                new Tweet{Body="3"},
                new Tweet{Body="Hi"},
                new Tweet{Body="Hello"},
                new Tweet{Body="What's up"}
                
            };
            foreach (Tweet s in tweets)
            {
                context.Tweets.Add(s);
            }
            context.SaveChanges();

            var commands = new Command[]
            {
                new Command{KeyCommand="hi", ResponseClass="Hi"},
                new Command{KeyCommand="clear", ResponseClass="Clear"},
                new Command{KeyCommand="empty", ResponseClass="Empty"},
            };
            foreach (Command c in commands)
            {
                context.Commands.Add(c);
            }
            context.SaveChanges();

        }
    }
}