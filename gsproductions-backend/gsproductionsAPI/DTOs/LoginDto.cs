namespace gsproductionsAPI.DTOs
{
    public class LoginDto
    {
        // Can be either username OR email
        public string Identifier { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

    }
}
