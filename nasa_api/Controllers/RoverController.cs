using System;
using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using nasa_api.Models;
using Microsoft.AspNetCore.Http;

namespace nasa_api.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class RoverController : ControllerBase
  {
    private readonly IRoverRepo _roverRepo;
    private readonly IMapper _mapper;

    public RoverController(IRoverRepo roverRepo, IMapper mapper)
    {
      _roverRepo = roverRepo;
      _mapper = mapper;
    }


    [HttpGet]
    public async Task<ActionResult<Rover[]>> GetAllAsync()
    {

      try
      {
        var result = await _roverRepo.ListAsync();

        return _mapper.Map<Rover[]>(result);
      }
      catch (Exception)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, "Server Failure");
      }

    }

    [HttpGet("{roverName}")]
    public async Task<ActionResult<Rover>> Get(string roverName)
    {

      try
      {
        var result = await _roverRepo.GetSpecificRover(roverName);
        if (result == null) return NotFound("Hittade ej en rover med det namnet.");
        return _mapper.Map<Rover>(result);
      }
      catch (Exception)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, "Server Failure");
      }


    }
  }
}
