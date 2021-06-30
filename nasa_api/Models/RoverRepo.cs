using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using nasa_api.Data;

namespace nasa_api.Models
{
    public class RoverRepo : BaseRepo, IRoverRepo
    {
        

        public RoverRepo(ApplicationDbContext context) :base(context)
        {

        }
        public async Task<IEnumerable<Rover>> ListAsync() {
            return await _context.Rovers.ToListAsync();
        }

        public async Task<Rover> GetSpecificRover(string roverName) {
            var query = _context.Rovers.Where(x => x.RoverName == roverName);
            return await query.FirstOrDefaultAsync();
        }
    }
}