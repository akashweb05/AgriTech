using gsproductionsAPI.Data;
using gsproductionsAPI.DTOs;
using gsproductionsAPI.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IJwtService _jwtService;

    public AuthController(AppDbContext context, IJwtService jwtService)
    {
        _context = context;
        _jwtService = jwtService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto loginDto)
    {
        // Search by username or email
        var admin = await _context.Admins
            .FirstOrDefaultAsync(a => a.Username == loginDto.Identifier || a.Email == loginDto.Identifier);

        if (admin == null)
            return Unauthorized("Invalid credentials");

        var hasher = new PasswordHasher<object>();
        var result = hasher.VerifyHashedPassword(null, admin.PasswordHash, loginDto.Password);

        if (result == PasswordVerificationResult.Failed)
            return Unauthorized("Invalid credentials");

        var token = _jwtService.GenerateToken(admin.Username, "Admin");

        return Ok(new AuthResponseDto
        {
            Username = admin.Username,
            Role = "Admin",
            Token = token
        });
    }
}
