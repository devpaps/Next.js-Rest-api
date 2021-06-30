using System;
using System.Reflection.Metadata;

namespace nasa_api.Models
{
  public class Rover
  {
    public int ID { get; set; }
    public string RoverName { get; set; }
    public DateTime LandingDate { get; set; }
    public DateTime LaunchDate { get; set; }
    public string Status { get; set; }
    public int MaxSol { get; set; }
    public string MaxDate { get; set; }
    public int TotalofPhotos { get; set; }
    public string RoverImage { get; set; }
    public int RoverWeight { get; set; }
    public string RoverUrl { get; set; }
    public string BackgroundStory { get; set; }
  }
}