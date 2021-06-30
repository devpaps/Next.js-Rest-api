using System.Collections.Generic;
using System.Threading.Tasks;

namespace nasa_api.Models
{
    public interface IRoverRepo
    {
        Task<IEnumerable<Rover>> ListAsync();
        Task<Rover> GetSpecificRover(string roverName);
    }
}