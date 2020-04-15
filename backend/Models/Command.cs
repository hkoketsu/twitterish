
using System.ComponentModel.DataAnnotations;

namespace Twitterish.Models
{
    public class Command
    {
        [Key]
        public string KeyCommand { get;set; }
        public string ResponseClass { get; set; }
    }
}