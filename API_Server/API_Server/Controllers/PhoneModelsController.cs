using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Server.Data;
using API_Server.Models;

namespace API_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneModelsController : ControllerBase
    {
        private readonly API_ServerContext _context;

        public PhoneModelsController(API_ServerContext context)
        {
            _context = context;
        }

        // GET: api/PhoneModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhoneModel>>> GetPhoneModels()
        {
            return await _context.PhoneModels
                                 .Include(p => p.Brand)
                                 .ToListAsync();
        }

        [HttpGet("GetPhoneModelsByBrand")]
        public async Task<ActionResult<IEnumerable<PhoneModel>>> GetPhoneByColorAndStorage(int BrandId)
        {
            var phoneModels = await _context.PhoneModels
                                            .Where(pm =>  pm.BrandId == BrandId)
                                            .ToListAsync();

            if (phoneModels == null)
            {
                return NotFound();
            }

            return phoneModels;
        }

        // GET: api/PhoneModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PhoneModel>> GetPhoneModel(int id)
        {
            var phoneModel = await _context.PhoneModels
                .Include(p => p.Brand)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (phoneModel == null)
            {
                return NotFound();
            }

            return phoneModel;
        }

        // PUT: api/PhoneModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhoneModel(int id, PhoneModel phoneModel)
        {
            if (id != phoneModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(phoneModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhoneModelExists(id))
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

        // POST: api/PhoneModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PhoneModel>> PostPhoneModel(PhoneModel phoneModel)
        {
            _context.PhoneModels.Add(phoneModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhoneModel", new { id = phoneModel.Id }, phoneModel);
        }

        // DELETE: api/PhoneModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoneModel(int id)
        {
            var phoneModel = await _context.PhoneModels.FindAsync(id);
            if (phoneModel == null)
            {
                return NotFound();
            }

            _context.PhoneModels.Remove(phoneModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PhoneModelExists(int id)
        {
            return _context.PhoneModels.Any(e => e.Id == id);
        }
    }
}
