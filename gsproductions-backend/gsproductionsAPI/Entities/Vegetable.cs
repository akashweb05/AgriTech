namespace gsproductionsAPI.Entities
{
    public class Vegetable
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Season { get; set; } = string.Empty; 
        public string Variety { get; set; } = string.Empty;
        public string SoilType { get; set; } = string.Empty;
    }
}
