const artists = [
  { name: "Gracie Abrams", genre: "Pop", tags: ["Singer-songwriter", "Indie pop"], initials: "GA" },
  { name: "Taylor Acorn", genre: "Rock & Alternative", tags: ["Pop punk", "Alternative"], initials: "TA" },
  { name: "Lauren Alaina", genre: "Country", tags: ["Country pop"], initials: "LA" },
  { name: "Jason Aldean", genre: "Country", tags: ["Country rock"], initials: "JA" },
  { name: "Ashe", genre: "Pop", tags: ["Indie pop", "Singer-songwriter"], initials: "AS" },
  { name: "Kelsea Ballerini", genre: "Country", tags: ["Country pop"], initials: "KB" },
  { name: "Eddie Benjamin", genre: "Pop", tags: ["Singer-songwriter"], initials: "EB" },
  { name: "Dierks Bentley", genre: "Country", tags: ["Bluegrass", "Country rock"], initials: "DB" },
  { name: "Blü Eyes", genre: "Pop", tags: ["Indie pop"], initials: "BE" },
  { name: "Kane Brown", genre: "Country", tags: ["Country pop", "R&B crossover"], initials: "KB" },
  { name: "Luke Bryan", genre: "Country", tags: ["Country pop"], initials: "LB" },
  { name: "Cam", genre: "Country", tags: ["Country pop", "Singer-songwriter"], initials: "CA" },
  { name: "Eric Church", genre: "Country", tags: ["Country rock", "Outlaw country"], initials: "EC" },
  { name: "Luke Combs", genre: "Country", tags: ["Contemporary country"], initials: "LC" },
  { name: "Sheryl Crow", genre: "Rock & Alternative", tags: ["Roots rock", "Pop rock"], initials: "SC" },
  { name: "Noah Cyrus", genre: "Pop", tags: ["Alternative pop", "Singer-songwriter"], initials: "NC" },
  { name: "Shelby Darrell", genre: "Country", tags: ["Singer-songwriter"], initials: "SD" },
  { name: "Djo", genre: "Indie & Folk", tags: ["Psychedelic pop", "Indie rock"], initials: "DJ" },
  { name: "Loud Luxury", genre: "Pop", tags: ["Dance pop", "Electronic"], initials: "LL" },
  { name: "Edgehill", genre: "Rock & Alternative", tags: ["Alternative rock"], initials: "ED" },
  { name: "Filmore", genre: "Country", tags: ["Country pop"], initials: "FI" },
  { name: "Rachel Grae", genre: "Pop", tags: ["Singer-songwriter"], initials: "RG" },
  { name: "Corey Harper", genre: "Indie & Folk", tags: ["Singer-songwriter", "Folk pop"], initials: "CH" },
  { name: "Hunter Hayes", genre: "Country", tags: ["Country pop"], initials: "HH" },
  { name: "Hozier", genre: "Indie & Folk", tags: ["Folk soul", "Blues rock"], initials: "HO" },
  { name: "Sam Hunt", genre: "Country", tags: ["Country pop", "R&B crossover"], initials: "SH" },
  { name: "Jelly Roll", genre: "Country", tags: ["Country rock", "Hip-hop crossover"], initials: "JR" },
  { name: "Josiah and the Bonnevilles", genre: "Indie & Folk", tags: ["Folk rock", "Americana"], initials: "JB" },
  { name: "Noah Kahan", genre: "Indie & Folk", tags: ["Folk pop", "Singer-songwriter"], initials: "NK" },
  { name: "Khalid", genre: "R&B & Hip-Hop", tags: ["Contemporary R&B", "Pop"], initials: "KH" },
  { name: "Alexandra Kay", genre: "Country", tags: ["Country pop"], initials: "AK" },
  { name: "Lady A", genre: "Country", tags: ["Country pop", "Vocal group"], initials: "LA" },
  { name: "Noah Levine", genre: "Indie & Folk", tags: ["Singer-songwriter"], initials: "NL" },
  { name: "Little Big Town", genre: "Country", tags: ["Country pop", "Vocal group"], initials: "LT" },
  { name: "Dustin Lynch", genre: "Country", tags: ["Country pop"], initials: "DL" },
  { name: "Maddie & Tae", genre: "Country", tags: ["Country pop", "Duo"], initials: "MT" },
  { name: "The Man, The Myth, The Meatslab", genre: "Rock & Alternative", tags: ["Rock", "Local"], initials: "MM" },
  { name: "Shawn Mendes", genre: "Pop", tags: ["Pop rock", "Singer-songwriter"], initials: "SM" },
  { name: "Niko Moon", genre: "Country", tags: ["Country pop"], initials: "NM" },
  { name: "Maren Morris", genre: "Country", tags: ["Country pop", "Americana"], initials: "MM" },
  { name: "Tim McGraw", genre: "Country", tags: ["Contemporary country"], initials: "TM" },
  { name: "Mt. Joy", genre: "Indie & Folk", tags: ["Indie rock", "Folk rock"], initials: "MJ" },
  { name: "Paramore", genre: "Rock & Alternative", tags: ["Alternative rock", "Pop punk"], initials: "PA" },
  { name: "Gigi Perez", genre: "Indie & Folk", tags: ["Indie folk", "Singer-songwriter"], initials: "GP" },
  { name: "Carly Pearce", genre: "Country", tags: ["Country pop"], initials: "CP" },
  { name: "P!nk", genre: "Pop", tags: ["Pop rock"], initials: "P!" },
  { name: "Cassadee Pope", genre: "Country", tags: ["Country pop", "Pop punk"], initials: "CP" },
  { name: "Post Malone", genre: "R&B & Hip-Hop", tags: ["Hip-hop", "Pop", "Country crossover"], initials: "PM" },
  { name: "Rascal Flatts", genre: "Country", tags: ["Country pop", "Vocal group"], initials: "RF" },
  { name: "Ethan Regan", genre: "Indie & Folk", tags: ["Indie rock", "Singer-songwriter"], initials: "ER" },
  { name: "Chase Rice", genre: "Country", tags: ["Country rock"], initials: "CR" },
  { name: "Owen Riegling", genre: "Country", tags: ["Contemporary country"], initials: "OR" },
  { name: "Josh Ross", genre: "Country", tags: ["Country rock"], initials: "JR" },
  { name: "Royel Otis", genre: "Indie & Folk", tags: ["Indie rock", "Dream pop"], initials: "RO" },
  { name: "Michael Sanzone", genre: "Pop", tags: ["Singer-songwriter"], initials: "MS" },
  { name: "Sophia Scott", genre: "Country", tags: ["Country pop", "Singer-songwriter"], initials: "SS" },
  { name: "Jay Sean", genre: "R&B & Hip-Hop", tags: ["R&B", "Pop"], initials: "JS" },
  { name: "Set It Off", genre: "Rock & Alternative", tags: ["Alternative rock", "Pop punk"], initials: "SO" },
  { name: "Nate Smith", genre: "Country", tags: ["Country rock"], initials: "NS" },
  { name: "Chris Stapleton", genre: "Country", tags: ["Country soul", "Blues"], initials: "CS" },
  { name: "Straight No Chaser", genre: "Other", tags: ["A cappella", "Vocal group"], initials: "SN" },
  { name: "The Strike", genre: "Pop", tags: ["Synth-pop", "Pop rock"], initials: "TS" },
  { name: "Taylor Swift", genre: "Pop", tags: ["Singer-songwriter", "Country crossover"], initials: "TS" },
  { name: "Carrie Underwood", genre: "Country", tags: ["Country pop"], initials: "CU" },
  { name: "Keith Urban", genre: "Country", tags: ["Country pop", "Country rock"], initials: "KU" },
  { name: "Alex Warren", genre: "Pop", tags: ["Singer-songwriter"], initials: "AW" },
  { name: "Hudson Westbrook", genre: "Country", tags: ["Red dirt", "Country rock"], initials: "HW" },
  { name: "Brandon Wisham", genre: "Country", tags: ["Singer-songwriter"], initials: "BW" },
  { name: "Blake Whiten", genre: "Country", tags: ["Singer-songwriter"], initials: "BW" },
  { name: "World’s First Cinema", genre: "Rock & Alternative", tags: ["Cinematic rock", "Alternative pop"], initials: "WF" },
  { name: "Brett Young", genre: "Country", tags: ["Country pop"], initials: "BY" },
  { name: "Bailey Zimmerman", genre: "Country", tags: ["Country rock"], initials: "BZ" },
  { name: "Alana Springsteen", genre: "Country", tags: ["Country pop", "Singer-songwriter"], initials: "AS" },
  { name: "MaRynn Taylor", genre: "Country", tags: ["Country pop", "Singer-songwriter"], initials: "MT" },
  { name: "Adam Doleac", genre: "Country", tags: ["Country pop", "Singer-songwriter"], initials: "AD" },
];
const colors = {
  Country: "#ffca3a", Pop: "#ff5ea0", "Indie & Folk": "#7bdff2",
  "Rock & Alternative": "#9b8cff", "R&B & Hip-Hop": "#ff795d", Other: "#8fe0b1",
};
const concerts = [
  {
    artist: "Gracie Abrams", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Budweiser Stage", cityArea: "Toronto", stateCountry: "Canada", otherClues: "" },
    confirmed: { exactDate: "2025-07-26", venue: "Budweiser Stage", city: "Toronto", stateCountry: "Canada" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Taylor Acorn", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Brighton Music Hall", cityArea: "Brighton", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2024-04-20", venue: "Brighton Music Hall", city: "Brighton", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Lauren Alaina", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Toad's Place", cityArea: "New Haven", stateCountry: "CT", otherClues: "" },
    confirmed: { exactDate: "2022-09-01", venue: "Toad's Place", city: "New Haven", stateCountry: "CT" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Jason Aldean", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Gilford Pavilion", cityArea: "Gilford", stateCountry: "NH", otherClues: "" },
    confirmed: { exactDate: "2019-07-20", venue: "Bank of New Hampshire Pavilion", city: "Gilford", stateCountry: "NH" },
    research: { status: "Confirmed", sourceUrl: "https://www.concertarchives.org/venues/bank-of-new-hampshire-pavilion?page=2&year=2019", notes: "Venue name standardized from the remembered Gilford Pavilion name." },
  },
  {
    artist: "Ashe", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-02-13", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Kelsea Ballerini", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-02-13", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Eddie Benjamin", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-09-25", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Dierks Bentley", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Xfinity Center", cityArea: "Mansfield", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2024-08-09", venue: "Xfinity Center", city: "Mansfield", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Blü Eyes", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "The Intersection", cityArea: "Grand Rapids", stateCountry: "MI", otherClues: "" },
    confirmed: { exactDate: "2026-04-11", venue: "The Intersection", city: "Grand Rapids", stateCountry: "MI" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Kane Brown", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Gilford Arena", cityArea: "Gilford", stateCountry: "NH", otherClues: "" },
    confirmed: { exactDate: "2019-07-20", venue: "Bank of New Hampshire Pavilion", city: "Gilford", stateCountry: "NH" },
    research: { status: "Confirmed", sourceUrl: "https://www.concertarchives.org/venues/bank-of-new-hampshire-pavilion?page=2&year=2019", notes: "Venue name standardized from the remembered Gilford Arena name." },
  },
  {
    artist: "Luke Bryan", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Gillette Stadium", cityArea: "Foxborough", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2016-07-16", venue: "Gillette Stadium", city: "Foxborough", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Cam", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Toad's Place", cityArea: "New Haven", stateCountry: "CT", otherClues: "" },
    confirmed: { exactDate: "2022-10-02", venue: "Toad's Place", city: "New Haven", stateCountry: "CT" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Eric Church", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2017-01-28", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Luke Combs", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "DCU Center", cityArea: "Worcester", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2019-03-02", venue: "DCU Center", city: "Worcester", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Sheryl Crow", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "The Intersection", cityArea: "Grand Rapids", stateCountry: "MI", otherClues: "" },
    confirmed: { exactDate: "2026-04-11", venue: "The Intersection", city: "Grand Rapids", stateCountry: "MI" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Noah Cyrus", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-07-13", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Shelby Darrell", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Bernie's Beach Bar", cityArea: "Hampton Beach", stateCountry: "NH", otherClues: "Opener" },
    confirmed: { exactDate: "2023-07-02", venue: "Bernie's Beach Bar", city: "Hampton Beach", stateCountry: "NH" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Djo", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Budweiser Stage", cityArea: "Toronto", stateCountry: "Canada", otherClues: "" },
    confirmed: { exactDate: "2025-07-26", venue: "Budweiser Stage", city: "Toronto", stateCountry: "Canada" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Loud Luxury", attendedBy: "N",
    remembered: { approximateYearSeason: "2019", venue: "Fitton Field", cityArea: "Worcester", stateCountry: "MA", otherClues: "School spring concert" },
    confirmed: { exactDate: "2019-05-03", venue: "Fitton Field", city: "Worcester", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "Date and venue confirmed in the provided update." },
  },
  {
    artist: "Edgehill", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Antone's Nightclub", cityArea: "Austin", stateCountry: "TX", otherClues: "" },
    confirmed: { exactDate: "2026-03-27", venue: "Antone's Nightclub", city: "Austin", stateCountry: "TX" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Filmore", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Mohegan Sun", cityArea: "Uncasville", stateCountry: "CT", otherClues: "" },
    confirmed: { exactDate: "2021-11-13", venue: "Mohegan Sun", city: "Uncasville", stateCountry: "CT" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Rachel Grae", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "The Middle East", cityArea: "Cambridge", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-02-06", venue: "The Middle East", city: "Cambridge", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Corey Harper", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "The Middle East", cityArea: "Cambridge", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-07-09", venue: "The Middle East", city: "Cambridge", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Hunter Hayes", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "The Intersection", cityArea: "Grand Rapids", stateCountry: "MI", otherClues: "" },
    confirmed: { exactDate: "2026-04-11", venue: "The Intersection", city: "Grand Rapids", stateCountry: "MI" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Hozier", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Fenway Park", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-06-23", venue: "Fenway Park", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Sam Hunt", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "MIDFLORIDA Credit Union Amphitheatre", cityArea: "East Lake-Orient Park", stateCountry: "FL", otherClues: "Wheels Up 747 Tour opener" },
    confirmed: { exactDate: "2015-05-29", venue: "MIDFLORIDA Credit Union Amphitheatre", city: "East Lake-Orient Park", stateCountry: "FL" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Jelly Roll", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Gillette Stadium", cityArea: "Foxborough", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-05-31", venue: "Gillette Stadium", city: "Foxborough", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Josiah and the Bonnevilles", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Paradise Rock Club", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2024-03-26", venue: "Paradise Rock Club", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Noah Kahan", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Fenway Park", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-07-07", venue: "Fenway Park", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Khalid", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "House of Blues", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2017-08-06", venue: "House of Blues", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Alexandra Kay", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Toad's Place", cityArea: "New Haven", stateCountry: "CT", otherClues: "" },
    confirmed: { exactDate: "2023-11-12", venue: "Toad's Place", city: "New Haven", stateCountry: "CT" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Lady A", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "MIDFLORIDA Credit Union Amphitheatre", cityArea: "East Lake-Orient Park", stateCountry: "FL", otherClues: "Wheels Up 747 Tour" },
    confirmed: { exactDate: "2015-05-29", venue: "MIDFLORIDA Credit Union Amphitheatre", city: "East Lake-Orient Park", stateCountry: "FL" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Noah Levine", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "The Middle East", cityArea: "Cambridge", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-07-09", venue: "The Middle East", city: "Cambridge", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Little Big Town", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Gillette Stadium", cityArea: "Foxborough", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2016-07-16", venue: "Gillette Stadium", city: "Foxborough", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Dustin Lynch", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Gilford Pavilion", cityArea: "Gilford", stateCountry: "NH", otherClues: "" },
    confirmed: { exactDate: "2017-08-08", venue: "Bank of New Hampshire Pavilion", city: "Gilford", stateCountry: "NH" },
    research: { status: "Confirmed", sourceUrl: "https://banknhpavilion.com/?d=about&page=history", notes: "Venue name standardized from the remembered Gilford Pavilion name." },
  },
  {
    artist: "Maddie & Tae", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Mohegan Sun", cityArea: "Uncasville", stateCountry: "CT", otherClues: "" },
    confirmed: { exactDate: "2021-11-13", venue: "Mohegan Sun", city: "Uncasville", stateCountry: "CT" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "The Man, The Myth, The Meatslab", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Brighton Music Hall", cityArea: "Brighton", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-10-25", venue: "Brighton Music Hall", city: "Brighton", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Shawn Mendes", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-09-25", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Niko Moon", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Toad's Place", cityArea: "New Haven", stateCountry: "CT", otherClues: "" },
    confirmed: { exactDate: "2024-06-20", venue: "Toad's Place", city: "New Haven", stateCountry: "CT" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Maren Morris", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Camping World Stadium", cityArea: "Orlando", stateCountry: "FL", otherClues: "Opener" },
    confirmed: { exactDate: "2024-11-18", venue: "Camping World Stadium", city: "Orlando", stateCountry: "FL" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Tim McGraw", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2024-05-08", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Mt. Joy", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Fenway Park", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2024-07-19", venue: "Fenway Park", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Paramore", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Wembley Stadium", cityArea: "London", stateCountry: "England", otherClues: "" },
    confirmed: { exactDate: "2024-08-17", venue: "Wembley Stadium", city: "London", stateCountry: "England" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Gigi Perez", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Fenway Park", cityArea: "Boston", stateCountry: "MA", otherClues: "Opener" },
    confirmed: { exactDate: "2025-06-23", venue: "Fenway Park", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Carly Pearce", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "Opener" },
    confirmed: { exactDate: "2024-05-08", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "P!nk", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Camping World Stadium", cityArea: "Orlando", stateCountry: "FL", otherClues: "" },
    confirmed: { exactDate: "2024-11-18", venue: "Camping World Stadium", city: "Orlando", stateCountry: "FL" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Cassadee Pope", attendedBy: "L",
    remembered: { approximateYearSeason: "2012–2013", venue: "MIDFLORIDA Credit Union Amphitheatre", cityArea: "East Lake-Orient Park", stateCountry: "FL", otherClues: "Opener for Rascal Flatts" },
    confirmed: { exactDate: "2013-06-07", venue: "MIDFLORIDA Credit Union Amphitheatre", city: "East Lake-Orient Park", stateCountry: "FL" },
    research: { status: "Confirmed", sourceUrl: "", notes: "Exact date confirmed in the provided update." },
  },
  {
    artist: "Post Malone", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Gillette Stadium", cityArea: "Foxborough", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-05-31", venue: "Gillette Stadium", city: "Foxborough", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Rascal Flatts", attendedBy: "L",
    remembered: { approximateYearSeason: "2012–2013", venue: "MIDFLORIDA Credit Union Amphitheatre", cityArea: "East Lake-Orient Park", stateCountry: "FL", otherClues: "" },
    confirmed: { exactDate: "2013-06-07", venue: "MIDFLORIDA Credit Union Amphitheatre", city: "East Lake-Orient Park", stateCountry: "FL" },
    research: { status: "Confirmed", sourceUrl: "", notes: "Exact date confirmed in the provided update." },
  },
  {
    artist: "Ethan Regan", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "Brighton Music Hall", cityArea: "Brighton", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-10-25", venue: "Brighton Music Hall", city: "Brighton", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Chase Rice", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Xfinity Center", cityArea: "Mansfield", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2024-08-09", venue: "Xfinity Center", city: "Mansfield", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Owen Riegling", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Toad's Place", cityArea: "New Haven", stateCountry: "CT", otherClues: "Opener" },
    confirmed: { exactDate: "2024-06-20", venue: "Toad's Place", city: "New Haven", stateCountry: "CT" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Josh Ross", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "House of Blues", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-05-29", venue: "House of Blues", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Royel Otis", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "House of Blues", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2024-09-28", venue: "House of Blues", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Michael Sanzone", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Roadrunner", cityArea: "Boston", stateCountry: "MA", otherClues: "Opener for Alex Warren" },
    confirmed: { exactDate: "2025-05-07", venue: "Roadrunner", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Sophia Scott", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "The Red Room at Cafe 939", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2023-12-08", venue: "The Red Room at Cafe 939", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Jay Sean", attendedBy: "N",
    remembered: { approximateYearSeason: "2019", venue: "Fitton Field", cityArea: "Worcester", stateCountry: "MA", otherClues: "School spring concert" },
    confirmed: { exactDate: "2019-05-03", venue: "Fitton Field", city: "Worcester", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "Date and venue confirmed in the provided update." },
  },
  {
    artist: "Set It Off", attendedBy: "L",
    remembered: { approximateYearSeason: "2013–2015", venue: "Tarpon Springs High School", cityArea: "Tarpon Springs", stateCountry: "FL", otherClues: "Hometown theater show" },
    confirmed: { exactDate: "2013-01-01", venue: "Tarpon Springs High School", city: "Tarpon Springs", stateCountry: "FL" },
    research: { status: "Confirmed", sourceUrl: "", notes: "Exact date confirmed in the provided update." },
  },
  {
    artist: "Nate Smith", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "House of Blues", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-05-29", venue: "House of Blues", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Chris Stapleton", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Gillette Stadium", cityArea: "Foxborough", stateCountry: "MA", otherClues: "Opener" },
    confirmed: { exactDate: "2016-07-16", venue: "Gillette Stadium", city: "Foxborough", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Straight No Chaser", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "The VETS", cityArea: "Providence", stateCountry: "RI", otherClues: "" },
    confirmed: { exactDate: "2022-12-02", venue: "The VETS", city: "Providence", stateCountry: "RI" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "The Strike", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Brighton Music Hall", cityArea: "Brighton", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2024-07-21", venue: "Brighton Music Hall", city: "Brighton", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Taylor Swift", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Wembley Stadium", cityArea: "London", stateCountry: "England", otherClues: "" },
    confirmed: { exactDate: "2024-08-17", venue: "Wembley Stadium", city: "London", stateCountry: "England" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Carrie Underwood", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "Denim & Rhinestones Tour" },
    confirmed: { exactDate: "2023-02-17", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Keith Urban", attendedBy: "N",
    remembered: { approximateYearSeason: "", venue: "Gilford Pavilion", cityArea: "Gilford", stateCountry: "NH", otherClues: "" },
    confirmed: { exactDate: "2017-08-12", venue: "Bank of New Hampshire Pavilion", city: "Gilford", stateCountry: "NH" },
    research: { status: "Confirmed", sourceUrl: "https://banknhpavilion.com/?d=about&page=history", notes: "Venue name standardized from the remembered Gilford Pavilion name." },
  },
  {
    artist: "Alex Warren", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-07-13", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Hudson Westbrook", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-03-05", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Brandon Wisham", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "House of Blues", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-05-29", venue: "House of Blues", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Blake Whiten", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-03-05", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "World’s First Cinema", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Brighton Music Hall", cityArea: "Brighton", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2024-04-20", venue: "Brighton Music Hall", city: "Brighton", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Brett Young", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Mohegan Sun", cityArea: "Uncasville", stateCountry: "CT", otherClues: "" },
    confirmed: { exactDate: "2021-11-13", venue: "Mohegan Sun", city: "Uncasville", stateCountry: "CT" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Bailey Zimmerman", attendedBy: "B",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2026-03-05", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Alana Springsteen", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "The Red Room at Cafe 939", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2023-12-08", venue: "The Red Room at Cafe 939", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "MaRynn Taylor", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "TD Garden", cityArea: "Boston", stateCountry: "MA", otherClues: "" },
    confirmed: { exactDate: "2025-02-13", venue: "TD Garden", city: "Boston", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
  {
    artist: "Adam Doleac", attendedBy: "L",
    remembered: { approximateYearSeason: "", venue: "Brighton Music Hall", cityArea: "Brighton", stateCountry: "MA", otherClues: "Wonderland Tour with Alana Springsteen" },
    confirmed: { exactDate: "2023-02-25", venue: "Brighton Music Hall", city: "Brighton", stateCountry: "MA" },
    research: { status: "Confirmed", sourceUrl: "", notes: "" },
  },
];
const attendance = Object.fromEntries(concerts.map(concert => [concert.artist, concert.attendedBy]));
const attendanceLabel = { N: "Nick", L: "Liz", B: "Both" };
const concertByArtist = Object.fromEntries(concerts.map(concert => [concert.artist, concert]));
let activeGenre = "All";
let activeAttendee = "All";
let query = "";
let activeYear = "All";
let activeLocation = "All";
let activeVenue = "All";
let eventSort = "newest";
const dateFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });

function formatDate(exactDate, approximateYearSeason = "") {
  if (!exactDate) return approximateYearSeason ? `Approx. ${approximateYearSeason}` : "Date unknown";
  const [year, month, day] = exactDate.split("-").map(Number);
  return dateFormatter.format(new Date(year, month - 1, day));
}

function getConcertLocation(concert) {
  const city = concert.confirmed.city || concert.remembered.cityArea || "Unknown city";
  const stateCountry = concert.confirmed.stateCountry || concert.remembered.stateCountry || "";
  return stateCountry ? `${city} · ${stateCountry}` : city;
}

function getEventAttendance(lineup) {
  const nickWasThere = lineup.some(concert => concert.attendedBy === "N" || concert.attendedBy === "B");
  const lizWasThere = lineup.some(concert => concert.attendedBy === "L" || concert.attendedBy === "B");
  return nickWasThere && lizWasThere ? "B" : nickWasThere ? "N" : "L";
}

const eventMap = concerts.reduce((events, concert) => {
  const dateKey = concert.confirmed.exactDate || `approx-${concert.remembered.approximateYearSeason || concert.artist}`;
  const venue = concert.confirmed.venue || concert.remembered.venue || "Unknown venue";
  const city = concert.confirmed.city || concert.remembered.cityArea || "Unknown city";
  const stateCountry = concert.confirmed.stateCountry || concert.remembered.stateCountry || "";
  const key = `${dateKey}|${venue}|${city}|${stateCountry}`;
  if (!events.has(key)) {
    events.set(key, {
      key,
      exactDate: concert.confirmed.exactDate,
      approximateYearSeason: concert.remembered.approximateYearSeason,
      venue,
      city,
      stateCountry,
      lineup: [],
    });
  }
  events.get(key).lineup.push(concert);
  return events;
}, new Map());

const concertEvents = [...eventMap.values()].map(event => ({
  ...event,
  attendedBy: getEventAttendance(event.lineup),
  year: event.exactDate ? event.exactDate.slice(0, 4) : "Unknown",
  location: event.stateCountry ? `${event.city} · ${event.stateCountry}` : event.city,
}));
const years = [...new Set(concertEvents.filter(event => event.year !== "Unknown").map(event => event.year))].sort((a, b) => b.localeCompare(a));
const locations = [...new Set(concertEvents.map(event => event.location))].sort((a, b) => a.localeCompare(b));
const venues = [...new Set(concertEvents.map(event => event.venue))].sort((a, b) => a.localeCompare(b));

function sortConcertEvents(events, mode) {
  return [...events].sort((a, b) => {
    if (mode === "venue") return a.venue.localeCompare(b.venue) || (b.exactDate || "").localeCompare(a.exactDate || "");
    if (!a.exactDate && !b.exactDate) return a.venue.localeCompare(b.venue);
    if (!a.exactDate) return 1;
    if (!b.exactDate) return -1;
    return mode === "oldest" ? a.exactDate.localeCompare(b.exactDate) : b.exactDate.localeCompare(a.exactDate);
  });
}

function filteredConcertEvents() {
  return sortConcertEvents(concertEvents.filter(event =>
    (activeYear === "All" || event.year === activeYear) &&
    (activeLocation === "All" || event.location === activeLocation) &&
    (activeVenue === "All" || event.venue === activeVenue)
  ), eventSort);
}

const counts = Object.entries(artists.reduce((acc, artist) => {
  acc[artist.genre] = (acc[artist.genre] || 0) + 1;
  return acc;
}, {})).sort((a, b) => b[1] - a[1]);
const countryCount = counts.find(([genre]) => genre === "Country")[1];
const crossoverCount = artists.filter(a => a.tags.some(tag => tag.toLowerCase().includes("crossover"))).length;
const togetherCount = artists.filter(a => attendance[a.name] === "B").length;
const nickCount = artists.filter(a => attendance[a.name] !== "L").length;
const lizCount = artists.filter(a => attendance[a.name] !== "N").length;

document.getElementById("app").innerHTML = `
<header class="hero">
  <div class="hero-nav"><span class="brand"><i></i> CONCERT PASSPORT</span><span class="issue">NICK + LIZ · ${artists.length} ARTISTS</span></div>
  <div class="hero-copy"><p class="eyebrow">THE LIVE MUSIC ARCHIVE</p><h1>We were<br><em>there.</em></h1><p class="lede">From stadium country to indie basements, this is every artist we’ve seen live—mapped by the sounds that got us there.</p></div>
  <div class="hero-numbers"><div><strong>${artists.length}</strong><span>artists seen</span></div><div><strong>${togetherCount}</strong><span>seen together</span></div><div><strong>${Math.round(togetherCount / artists.length * 100)}%</strong><span>shared lineup</span></div></div>
  <div class="ticket-stub"><span>ADMIT TWO</span><b>N + L<br>LIVE</b><small>NO EXPIRATION</small></div>
</header>
<nav class="tab-nav" role="tablist" aria-label="Concert Passport sections">
  <button class="active" id="tab-overview" type="button" role="tab" aria-selected="true" aria-controls="panel-overview" data-tab="overview"><span aria-hidden="true">01</span>Overview</button>
  <button id="tab-concerts" type="button" role="tab" aria-selected="false" aria-controls="panel-concerts" tabindex="-1" data-tab="concerts"><span aria-hidden="true">02</span>Concerts</button>
  <button id="tab-artists" type="button" role="tab" aria-selected="false" aria-controls="panel-artists" tabindex="-1" data-tab="artists"><span aria-hidden="true">03</span>Artists</button>
  <button id="tab-timeline" type="button" role="tab" aria-selected="false" aria-controls="panel-timeline" tabindex="-1" data-tab="timeline"><span aria-hidden="true">04</span>Timeline</button>
</nav>
<div class="tab-panel" id="panel-overview" role="tabpanel" aria-labelledby="tab-overview" data-tab-panel="overview">
<section class="attendance-section">
  <div class="section-heading"><div><h2>Two fans, one archive</h2></div><p>Solo favorites and shared nights, all in one place. Choose a person to filter the full artist roster.</p></div>
  <div class="attendance-grid">
    <button class="nick" type="button" aria-pressed="false" data-attendee-card="Nick"><span>N</span><strong>${nickCount}</strong><h3>Nick</h3><p>${nickCount-togetherCount} solo · ${togetherCount} shared</p></button>
    <button class="both" type="button" aria-pressed="false" data-attendee-card="Both"><span>N + L</span><strong>${togetherCount}</strong><h3>Together</h3><p>${Math.round(togetherCount/artists.length*100)}% of the full lineup</p></button>
    <button class="liz" type="button" aria-pressed="false" data-attendee-card="Liz"><span>L</span><strong>${lizCount}</strong><h3>Liz</h3><p>${lizCount-togetherCount} solo · ${togetherCount} shared</p></button>
  </div>
</section>
<section class="genre-section">
  <div class="section-heading"><div><h2>Where the nights live</h2></div><p>Broad genre groupings based on each artist’s primary sound. The crossover tags tell the fuller story.</p></div>
  <div class="genre-layout"><div class="genre-bars">${counts.map(([genre,count],i)=>`<button class="bar-row" type="button" aria-pressed="false" data-chart-genre="${genre}"><span class="rank">0${i+1}</span><span class="bar-label">${genre}</span><span class="bar-track"><i style="width:${count/countryCount*100}%;background:${colors[genre]}"></i></span><strong>${count}</strong></button>`).join("")}</div>
  <aside class="insight-card"><span>THE HEADLINE</span><strong>${countryCount}</strong><h3>country artists</h3><p>Country is the clear main stage, with modern country-pop, red dirt, outlaw, and roots all in the mix.</p></aside></div>
</section>
<section class="stats-strip"><article><span>COUNTRY CROSSOVERS</span><strong>${crossoverCount}</strong><p>artists tagged across genre lines</p></article><article><span>GROUP ENERGY</span><strong>${artists.filter(a=>a.tags.includes("Vocal group")||a.tags.includes("Duo")).length}</strong><p>duos and vocal groups</p></article><article><span>SONGWRITERS’ ROW</span><strong>${artists.filter(a=>a.tags.includes("Singer-songwriter")).length}</strong><p>singer-songwriters seen live</p></article></section>
</div>
<div class="tab-panel" id="panel-concerts" role="tabpanel" aria-labelledby="tab-concerts" data-tab-panel="concerts" hidden>
<section class="explorer" id="explorer">
  <div class="section-heading"><div><h2>One night, full lineup</h2></div><p>The artist archive becomes ${concertEvents.length} distinct concert nights. Filter the calendar, revisit a venue, and see every name that shared the bill.</p></div>
  <div class="explorer-stats">
    <article><strong>${concertEvents.length}</strong><span>concert nights</span></article>
    <article><strong>${venues.length}</strong><span>venues visited</span></article>
    <article><strong>${locations.length}</strong><span>locations</span></article>
  </div>
  <div class="explorer-controls" role="group" aria-label="Concert filters">
    <label><span>Year</span><select id="year-filter"><option value="All">All years</option>${years.map(year=>`<option value="${year}">${year}</option>`).join("")}${concertEvents.some(event=>event.year==="Unknown")?`<option value="Unknown">Date unknown</option>`:""}</select></label>
    <label><span>Location</span><select id="location-filter"><option value="All">All locations</option>${locations.map(location=>`<option value="${location}">${location}</option>`).join("")}</select></label>
    <label><span>Venue</span><select id="venue-filter"><option value="All">All venues</option>${venues.map(venue=>`<option value="${venue}">${venue}</option>`).join("")}</select></label>
    <label><span>Sort</span><select id="event-sort"><option value="newest">Newest first</option><option value="oldest">Oldest first</option><option value="venue">Venue A–Z</option></select></label>
    <button class="reset-filters" id="reset-event-filters" type="button">Clear filters</button>
  </div>
  <div class="explorer-results"><p id="event-result-count" aria-live="polite"></p><span>Artist appearances on the same date and at the same venue are grouped together.</span></div>
  <div class="concert-grid" id="concert-grid"></div>
  <div class="empty" id="event-empty" role="status" hidden>No concert nights match those filters.</div>
</section>
</div>
<div class="tab-panel" id="panel-artists" role="tabpanel" aria-labelledby="tab-artists" data-tab-panel="artists" hidden>
<section class="roster" id="roster">
  <div class="section-heading roster-head"><div><h2>Every name on the bill</h2></div><p id="result-count" aria-live="polite"></p></div>
  <div class="controls"><div class="filter-groups"><div class="filters attendance-filters" id="attendee-filters" role="group" aria-label="Filter artists by attendee"></div><div class="filters" id="genre-filters" role="group" aria-label="Filter artists by genre"></div></div><label class="search"><span aria-hidden="true">⌕</span><input id="search" type="search" autocomplete="off" placeholder="Search artists or styles" aria-label="Search artists or styles"></label></div>
  <div class="artist-grid" id="artist-grid"></div><div class="empty" id="empty" role="status" hidden>No artists found. Try another search.</div>
</section>
</div>
<div class="tab-panel" id="panel-timeline" role="tabpanel" aria-labelledby="tab-timeline" data-tab-panel="timeline" hidden>
<section class="timeline-section" id="timeline">
  <div class="section-heading"><div><h2>Every encore, in order</h2></div><p id="timeline-summary" aria-live="polite">A chronological view of the concert nights currently selected in the explorer.</p></div>
  <div class="timeline" id="concert-timeline"></div>
</section>
</div>
<footer><span>NICK + LIZ · ${artists.length} NAMES · COUNTLESS ENCORES</span><p>Built from our concert history ✦ Genre labels are intentionally broad.</p></footer>`;

const attendeeOptions = ["All", "Nick", "Liz", "Both"];
const genreOptions = ["All", ...counts.map(([genre]) => genre)];
document.getElementById("attendee-filters").innerHTML = attendeeOptions.map(who =>
  `<button type="button" data-attendee="${who}" aria-pressed="false">${who === "All" ? "Everyone" : who}</button>`
).join("");
document.getElementById("genre-filters").innerHTML = genreOptions.map(genre =>
  `<button type="button" data-genre="${genre}" aria-pressed="false">${genre}</button>`
).join("");

function attendeeMatches(who) {
  return activeAttendee === "All" || activeAttendee === "Both" && who === "B" ||
    activeAttendee === "Nick" && (who === "N" || who === "B") ||
    activeAttendee === "Liz" && (who === "L" || who === "B");
}

function activateTab(tabName, focusActiveTab = false) {
  let activeTab;
  document.querySelectorAll("[data-tab]").forEach(tab => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
    if (isActive) activeTab = tab;
  });
  document.querySelectorAll("[data-tab-panel]").forEach(panel => {
    panel.hidden = panel.dataset.tabPanel !== tabName;
  });
  if (focusActiveTab) activeTab?.focus({ preventScroll: true });
}

function renderTimeline(events) {
  const chronological = sortConcertEvents(events, "newest");
  const groups = chronological.reduce((yearsByEvent, event) => {
    if (!yearsByEvent[event.year]) yearsByEvent[event.year] = [];
    yearsByEvent[event.year].push(event);
    return yearsByEvent;
  }, {});
  const yearOrder = Object.keys(groups).sort((a, b) => {
    if (a === "Unknown") return 1;
    if (b === "Unknown") return -1;
    return b.localeCompare(a);
  });
  const timeline = document.getElementById("concert-timeline");
  timeline.innerHTML = events.length ? yearOrder.map(year => `
    <section class="timeline-year">
      <div class="timeline-year-label"><span>${year === "Unknown" ? "DATE TBD" : year}</span><strong>${groups[year].length}</strong></div>
      <div class="timeline-events">${groups[year].map(event => `
        <article class="timeline-event">
          <time${event.exactDate ? ` datetime="${event.exactDate}"` : ""}>${formatDate(event.exactDate, event.approximateYearSeason)}</time>
          <div><h3>${event.venue}</h3><p>${event.location}</p><small>${event.lineup.map(concert => concert.artist).join(" · ")}</small></div>
          <span class="attendance-dot ${event.attendedBy.toLowerCase()}" role="img" aria-label="Attended by ${attendanceLabel[event.attendedBy]}"></span>
        </article>`).join("")}</div>
    </section>`).join("") : `<div class="empty">No concert nights match the current explorer filters.</div>`;
  document.getElementById("timeline-summary").textContent = events.length === concertEvents.length
    ? `All ${events.length} concert nights, from newest to oldest.`
    : `${events.length} filtered concert night${events.length === 1 ? "" : "s"}, from newest to oldest.`;
}

function renderExplorer() {
  const filtered = filteredConcertEvents();
  document.getElementById("event-result-count").textContent = `${filtered.length} concert night${filtered.length === 1 ? "" : "s"} showing`;
  const concertGrid = document.getElementById("concert-grid");
  concertGrid.innerHTML = filtered.map(event => `
    <article class="concert-card">
      <div class="concert-date"><span>${event.year === "Unknown" ? "DATE TBD" : event.year}</span><strong>${formatDate(event.exactDate, event.approximateYearSeason)}</strong></div>
      <div class="concert-card-body">
        <div class="concert-card-meta"><span class="event-attendance ${event.attendedBy.toLowerCase()}">${attendanceLabel[event.attendedBy]}</span></div>
        <h3>${event.venue}</h3><p class="concert-place">${event.location}</p>
        <div class="concert-lineup"><span>On the bill · ${event.lineup.length}</span><div>${event.lineup.map(concert => `<b>${concert.artist}</b>`).join("")}</div></div>
      </div>
    </article>`).join("");
  concertGrid.hidden = filtered.length === 0;
  document.getElementById("event-empty").hidden = filtered.length !== 0;
  document.getElementById("reset-event-filters").disabled = activeYear === "All" && activeLocation === "All" && activeVenue === "All" && eventSort === "newest";
  renderTimeline(filtered);
}

function renderArtists() {
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = artists.filter(artist => {
    const genreMatch = activeGenre === "All" || artist.genre === activeGenre;
    const who = attendance[artist.name];
    const concert = concertByArtist[artist.name];
    const text = `${artist.name} ${artist.genre} ${artist.tags.join(" ")} ${attendanceLabel[who]} ${concert.confirmed.exactDate} ${concert.confirmed.venue} ${getConcertLocation(concert)}`.toLowerCase();
    return genreMatch && attendeeMatches(who) && text.includes(normalizedQuery);
  });
  document.getElementById("result-count").textContent = `${filtered.length} artist${filtered.length===1?"":"s"} showing`;
  const artistGrid = document.getElementById("artist-grid");
  artistGrid.innerHTML = filtered.map(artist => {
    const concert = concertByArtist[artist.name];
    const who = attendance[artist.name];
    return `<article class="artist-card" style="--accent:${colors[artist.genre]}">
      <span class="attendance-badge ${who.toLowerCase()}">${attendanceLabel[who]}</span>
      <div class="monogram">${artist.initials}</div><div><h3>${artist.name}</h3><p>${artist.genre}</p></div>
      <div class="artist-concert"><span>${formatDate(concert.confirmed.exactDate, concert.remembered.approximateYearSeason)}</span><strong>${concert.confirmed.venue || concert.remembered.venue}</strong><small>${getConcertLocation(concert)}</small></div>
      <div class="tags">${artist.tags.map(tag=>`<span>${tag}</span>`).join("")}</div>
    </article>`;
  }).join("");
  artistGrid.hidden = filtered.length === 0;
  document.getElementById("empty").hidden = filtered.length !== 0;
  document.querySelectorAll("[data-attendee-card]").forEach(button => {
    const isActive = button.dataset.attendeeCard === activeAttendee;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll("[data-attendee]").forEach(button => {
    const isActive = button.dataset.attendee === activeAttendee;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll("[data-genre]").forEach(button => {
    const isActive = button.dataset.genre === activeGenre;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll("[data-chart-genre]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.chartGenre === activeGenre));
  });
}
document.querySelectorAll("[data-tab]").forEach((tab, index, tabs) => {
  tab.onclick = () => activateTab(tab.dataset.tab);
  tab.onkeydown = event => {
    const keyMoves = { ArrowRight: 1, ArrowLeft: -1 };
    if (!(event.key in keyMoves) && event.key !== "Home" && event.key !== "End") return;
    event.preventDefault();
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + keyMoves[event.key] + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    activateTab(tabs[nextIndex].dataset.tab);
  };
});
document.querySelectorAll("[data-attendee]").forEach(button => button.onclick = () => {
  activeAttendee = button.dataset.attendee;
  renderArtists();
});
document.querySelectorAll("[data-genre]").forEach(button => button.onclick = () => {
  activeGenre = button.dataset.genre;
  renderArtists();
});
document.querySelectorAll("[data-attendee-card]").forEach(button => button.onclick = () => {
  activeAttendee = activeAttendee === button.dataset.attendeeCard ? "All" : button.dataset.attendeeCard;
  renderArtists();
  activateTab("artists", true);
  document.querySelector(".tab-nav").scrollIntoView({ behavior: "smooth" });
});
document.querySelectorAll("[data-chart-genre]").forEach(button => button.onclick = () => {
  activeGenre = button.dataset.chartGenre;
  renderArtists();
  activateTab("artists", true);
  document.querySelector(".tab-nav").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("search").addEventListener("input", event => {
  query = event.target.value;
  renderArtists();
});
["year-filter", "location-filter", "venue-filter", "event-sort"].forEach(id => document.getElementById(id).addEventListener("change", event => {
  if (id === "year-filter") activeYear = event.target.value;
  if (id === "location-filter") activeLocation = event.target.value;
  if (id === "venue-filter") activeVenue = event.target.value;
  if (id === "event-sort") eventSort = event.target.value;
  renderExplorer();
}));
document.getElementById("reset-event-filters").onclick = () => {
  activeYear = "All";
  activeLocation = "All";
  activeVenue = "All";
  eventSort = "newest";
  document.getElementById("year-filter").value = activeYear;
  document.getElementById("location-filter").value = activeLocation;
  document.getElementById("venue-filter").value = activeVenue;
  document.getElementById("event-sort").value = eventSort;
  renderExplorer();
};
activateTab("overview");
renderExplorer();
renderArtists();
