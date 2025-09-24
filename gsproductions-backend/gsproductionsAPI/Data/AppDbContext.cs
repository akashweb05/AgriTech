using gsproductionsAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace gsproductionsAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Crop> Crops { get; set; }

        public DbSet<Pulse> Pulses { get; set; }
        public DbSet<Fruit> Fruits { get; set; }
        public DbSet<Vegetable> Vegetables { get; set; }
        public DbSet<Video> Videos { get; set; }
    }
}
