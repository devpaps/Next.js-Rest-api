using AutoMapper;
using nasa_api.Data.Entities;
using nasa_api.Models;

namespace nasa_api.Mapping
{
  public class ResourceToModelProfile : Profile
  {
    public ResourceToModelProfile()
    {
      this.CreateMap<Rover, RoverEntity>()
      .ForMember(c => c.BackgroundStory, o => o.MapFrom(m => m.BackgroundStory));
    }
  }
}