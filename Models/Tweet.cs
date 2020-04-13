
using System.ComponentModel.DataAnnotations;

namespace Twitterish.Models
{
    public class Tweet
    {
        [Key]
        public int ID { get;set; }
        public string Body { get; set; }
    }
}