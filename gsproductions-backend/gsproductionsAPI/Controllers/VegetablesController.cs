using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using gsproductionsAPI.Data;
using gsproductionsAPI.Entities;

namespace gsproductionsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VegetablesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VegetablesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Vegetables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vegetable>>> GetVegetable()
        {
            return await _context.Vegetables.ToListAsync();
        }

        // GET: api/Vegetables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vegetable>> GetVegetable(int id)
        {
            var vegetable = await _context.Vegetables.FindAsync(id);

            if (vegetable == null)
            {
                return NotFound();
            }

            return vegetable;
        }

        // PUT: api/Vegetables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVegetable(int id, Vegetable vegetable)
        {
            if (id != vegetable.Id)
            {
                return BadRequest();
            }

            _context.Entry(vegetable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VegetableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Vegetables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Vegetable>> PostVegetable(Vegetable vegetable)
        {
            _context.Vegetables.Add(vegetable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVegetable", new { id = vegetable.Id }, vegetable);
        }

        // DELETE: api/Vegetables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVegetable(int id)
        {
            var vegetable = await _context.Vegetables.FindAsync(id);
            if (vegetable == null)
            {
                return NotFound();
            }

            _context.Vegetables.Remove(vegetable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VegetableExists(int id)
        {
            return _context.Vegetables.Any(e => e.Id == id);
        }
    }
}
