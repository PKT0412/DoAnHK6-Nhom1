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
    public class PhoneModelImagesController : ControllerBase
    {
        private readonly API_ServerContext _context;

        public PhoneModelImagesController(API_ServerContext context)
        {
            _context = context;
        }

        // GET: api/PhoneModelImages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhoneModelImage>>> GetPhoneModelImages()
        {
            return await _context.PhoneModelImages.ToListAsync();
        }

        [HttpGet("GetPhoneModelImagesByPhoneModelId")]
        public async Task<ActionResult<IEnumerable<PhoneModelImage>>> GetPhoneModelImagesByPhoneModelId(int id)
        {
            var phoneModelImages = await _context.PhoneModelImages
                .Where(p => p.PhoneModelId == id)
                .ToListAsync();

            return phoneModelImages;
        }

        // GET: api/PhoneModelImages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PhoneModelImage>> GetPhoneModelImage(int id)
        {
            var phoneModelImage = await _context.PhoneModelImages.FindAsync(id);

            if (phoneModelImage == null)
            {
                return NotFound();
            }

            return phoneModelImage;
        }

        // PUT: api/PhoneModelImages/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhoneModelImage(int id, PhoneModelImage phoneModelImage)
        {
            if (id != phoneModelImage.Id)
            {
                return BadRequest();
            }

            _context.Entry(phoneModelImage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhoneModelImageExists(id))
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

        // POST: api/PhoneModelImages
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PhoneModelImage>> PostPhoneModelImage(PhoneModelImage phoneModelImage)
        {
            _context.PhoneModelImages.Add(phoneModelImage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhoneModelImage", new { id = phoneModelImage.Id }, phoneModelImage);
        }

        // DELETE: api/PhoneModelImages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoneModelImage(int id)
        {
            var phoneModelImage = await _context.PhoneModelImages.FindAsync(id);
            if (phoneModelImage == null)
            {
                return NotFound();
            }

            _context.PhoneModelImages.Remove(phoneModelImage);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PhoneModelImageExists(int id)
        {
            return _context.PhoneModelImages.Any(e => e.Id == id);
        }
    }
}
