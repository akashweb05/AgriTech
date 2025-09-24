using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace gsproductionsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        [HttpGet("dashboard")]
        public IActionResult GetDashboard()
        {
            return Ok("Welcome Admin! You have access to this dashboard.");
        }

        [HttpGet("users")]
        public IActionResult GetAllUsers()
        {
            // This would normally fetch all users from DB
            return Ok("Here is a list of all users (Admin only).");
        }
    }
}
