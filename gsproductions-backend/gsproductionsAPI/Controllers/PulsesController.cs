using Microsoft.AspNetCore.Mvc;
using gsproductionsAPI.Entities;
using Microsoft.EntityFrameworkCore;
using gsproductionsAPI.Data;

namespace gsproductionsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PulsesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PulsesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/pulses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pulse>>> GetPulses()
        {
            return await _context.Pulses.ToListAsync();
        }

        // GET: api/pulses/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Pulse>> GetPulse(int id)
        {
            var pulse = await _context.Pulses.FindAsync(id);

            if (pulse == null)
                return NotFound();

            return pulse;
        }

        // POST: api/pulses
        [HttpPost]
        public async Task<ActionResult<Pulse>> CreatePulse(Pulse pulse)
        {
            _context.Pulses.Add(pulse);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPulse), new { id = pulse.Id }, pulse);
        }

        // PUT: api/pulses/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePulse(int id, Pulse pulse)
        {
            if (id != pulse.Id)
                return BadRequest();

            _context.Entry(pulse).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Pulses.Any(e => e.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/pulses/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePulse(int id)
        {
            var pulse = await _context.Pulses.FindAsync(id);
            if (pulse == null)
                return NotFound();

            _context.Pulses.Remove(pulse);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
