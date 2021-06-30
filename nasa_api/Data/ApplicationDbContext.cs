using System;
using Microsoft.EntityFrameworkCore;
using nasa_api.Models;

namespace nasa_api.Data
{
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
      this.Database.EnsureCreated();
    }

    public DbSet<Rover> Rovers { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);

      builder.Entity<Rover>().HasData(new Rover
      {
        ID = 1,
        RoverName = "Curiosity",
        LaunchDate = new DateTime(2011, 11, 26),
        LandingDate = new DateTime(2012, 8, 06),
        Status = "active",
        MaxSol = 3005,
        MaxDate = DateTime.UtcNow.ToLongDateString(),
        TotalofPhotos = 464644,
        RoverImage = "Curiosity",
        RoverWeight = 899,
        RoverUrl = "https://mars.nasa.gov/msl/home/",
        BackgroundStory = "Curiosity[2] (Mars Science Laboratory, förkortas MSL) är en obemannad motoriserad landfarkost (strövare) som sköts upp på uppdrag av NASA den 26 november 2011. Enligt plan landade strövaren på Mars vid kratern Gale den 5 augusti 2012 kl. 05:31 UTC.[3] Strövaren är tre gånger så tung och dubbelt så bred som de tidigare Mars Exploration Rovers (MER) Spirit och Opportunity som landade på Mars 2004. Efter landningen har Curiosity analyserat ett flertal prover från marsjorden och från stenar. Strövaren förväntades vid uppskjutningen arbeta i minst ett marsår (cirka två jordår) och planerades att bli den strövare som täckte en större del av planetytan än någon tidigare strövare. Uppdraget var att undersöka Mars tidigare och dåvarande förmåga att hysa liv. Curiosity är 2020 fortfarande aktiv, vilket innebär att den har överlevt långt längre än vad man först trodde eller planerade för."
      });
      builder.Entity<Rover>().HasData(new Rover
      {
        ID = 2,
        RoverName = "Spirit",
        LaunchDate = new DateTime(2003, 6, 10),
        LandingDate = new DateTime(2004, 1, 10),
        Status = "complete",
        MaxSol = 2208,
        MaxDate = "2010-03-21",
        TotalofPhotos = 124550,
        RoverImage = "OPPORTUNITY",
        RoverWeight = 185,
        RoverUrl = "https://solarsystem.nasa.gov/missions/spirit/in-depth/",
        BackgroundStory = "Spirit, också känd som MER-A (Mars Exploration Rover – A) eller MER-2, var NASAs första sond i Marsutforskningsprogrammet Mars Exploration Rover Mission. Den sköts upp med en Delta II-raket från Cape Canaveral Air Force Station, den 10 juni 2003 och landade på Mars yta, den 3 januari 2004. Den är syskonfarkost till MER-B, kallad Opportunity. Uppdraget var tänkt att pågå i 90 dagar, men tack vare att solcellerna då och då blåstes rena av starka vindar på Mars, överlevde Spirit i 2 269 dagar. Under sin tid på Mars tillryggalade den totalt 7,73 kilometer"
      });
      builder.Entity<Rover>().HasData(new Rover
      {
        ID = 3,
        RoverName = "Opportunity",
        LaunchDate = new DateTime(2003, 07, 7),
        LandingDate = new DateTime(2004, 01, 25),
        Status = "complete",
        MaxSol = 5111,
        MaxDate = "2018-6-11",
        TotalofPhotos = 198439,
        RoverImage = "OPPORTUNITY",
        RoverWeight = 1063,
        RoverUrl = "https://mars.nasa.gov/mer/",
        BackgroundStory = "Opportunity, också känd som MER-B (Mars Exploration Rover – B) eller MER-1, med smeknamnet Oppy[2], var NASAs andra rymdsond i Mars-utforskningsprogrammet Mars Exploration Rover Mission. MER-B sköts iväg 8 juli 2003 och landade i området Meridiani planum på planeten Mars den 25 januari 2004. Den är tvillingfarkost till MER-A, Spirit."
      });
      builder.Entity<Rover>().HasData(new Rover
      {
        ID = 4,
        RoverName = "Perseverance",
        LaunchDate = new DateTime(2020, 7, 30),
        LandingDate = new DateTime(2021, 2, 18),
        Status = "-",
        MaxSol = 0,
        MaxDate = "-",
        TotalofPhotos = 0,
        RoverImage = "Perseverance",
        RoverWeight = 1025,
        RoverUrl = "https://mars.nasa.gov/mars2020/",
        BackgroundStory = "Perseverance är en obemannad motoriserad landfarkost (rover), utvecklad av Jet Propulsion Laboratory, under NASAs Mars 2020-projekt. Den sköts upp av en Atlas V-raket 30 juli 2020. Planen är att rovern ska utforska Jezero-kratern på Mars. Rovern är en vidareutveckling av rovern Curiosity som landade på Mars i augusti 2012. Den förväntas arbeta i minst ett marsår (cirka två jordår). Mars helikoptern Ingenuity kommer åka snålskjuts med Perseverance till Mars."
      });
    }
  }
}