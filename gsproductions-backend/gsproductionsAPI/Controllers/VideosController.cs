using gsproductionsAPI.Data;
using gsproductionsAPI.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace gsproductionsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VideosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/videos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> GetVideos()
        {
            return await _context.Videos.ToListAsync();
        }

        // GET: api/videos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Video>> GetVideo(int id)
        {
            var video = await _context.Videos.FindAsync(id);
            if (video == null) return NotFound();
            return video;
        }

        // POST: api/videos
        [HttpPost]
        public async Task<ActionResult<Video>> PostVideo(Video video)
        {
            video.CreatedAt = DateTime.UtcNow;
            video.UpdatedAt = DateTime.UtcNow;
            _context.Videos.Add(video);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVideo), new { id = video.Id }, video);
        }

        // PUT: api/videos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVideo(int id, Video video)
        {
            if (id != video.Id) return BadRequest();

            var existing = await _context.Videos.FindAsync(id);
            if (existing == null) return NotFound();

            existing.Title = video.Title;
            existing.Description = video.Description;
            existing.YoutubeId = video.YoutubeId;
            existing.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/videos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVideo(int id)
        {
            var video = await _context.Videos.FindAsync(id);
            if (video == null) return NotFound();

            _context.Videos.Remove(video);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
