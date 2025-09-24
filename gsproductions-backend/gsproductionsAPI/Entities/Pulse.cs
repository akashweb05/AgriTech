using System.ComponentModel.DataAnnotations;

namespace gsproductionsAPI.Entities
#nullable disable
{
    public class Pulse
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public string SowingTime { get; set; }
        public string Yield { get; set; }
        public string SeedQuantity { get; set; }
        public string Temperature { get; set; }
        public string Irrigation { get; set; }
    }
}
