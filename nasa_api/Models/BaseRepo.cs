using nasa_api.Data;

namespace nasa_api.Models
{
    public abstract class BaseRepo
    {
        protected readonly ApplicationDbContext _context;

        public BaseRepo(ApplicationDbContext context)
        {
            _context = context;
        }
    }
}