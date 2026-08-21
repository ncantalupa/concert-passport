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
  { name: "DNCE", genre: "Pop", tags: ["Dance pop", "Pop rock"], initials: "DN" },
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
];
const colors = {
  Country: "#ffca3a", Pop: "#ff5ea0", "Indie & Folk": "#7bdff2",
  "Rock & Alternative": "#9b8cff", "R&B & Hip-Hop": "#ff795d", Other: "#8fe0b1",
};
const attendance = {
  "Gracie Abrams":"B", "Taylor Acorn":"L", "Lauren Alaina":"L", "Jason Aldean":"N",
  "Ashe":"B", "Kelsea Ballerini":"B", "Eddie Benjamin":"B", "Dierks Bentley":"B",
  "Blü Eyes":"L", "Kane Brown":"N", "Luke Bryan":"N", "Cam":"L", "Eric Church":"N",
  "Luke Combs":"N", "Sheryl Crow":"L", "Noah Cyrus":"B", "Shelby Darrell":"L", "Djo":"B",
  "DNCE":"N", "Edgehill":"L", "Filmore":"L", "Rachel Grae":"B", "Corey Harper":"B",
  "Hunter Hayes":"L", "Hozier":"B", "Sam Hunt":"L", "Jelly Roll":"B",
  "Josiah and the Bonnevilles":"B", "Noah Kahan":"B", "Khalid":"N", "Alexandra Kay":"L",
  "Lady A":"L", "Noah Levine":"B", "Little Big Town":"N", "Dustin Lynch":"N",
  "Maddie & Tae":"L", "The Man, The Myth, The Meatslab":"B", "Shawn Mendes":"B",
  "Niko Moon":"L", "Maren Morris":"L", "Tim McGraw":"L", "Mt. Joy":"N", "Paramore":"L",
  "Gigi Perez":"B", "Carly Pearce":"L", "P!nk":"L", "Cassadee Pope":"L", "Post Malone":"B",
  "Rascal Flatts":"L", "Ethan Regan":"B", "Chase Rice":"N", "Owen Riegling":"L",
  "Josh Ross":"B", "Royel Otis":"N", "Michael Sanzone":"L", "Sophia Scott":"L",
  "Jay Sean":"N", "Set It Off":"L", "Nate Smith":"B", "Chris Stapleton":"N",
  "Straight No Chaser":"L", "The Strike":"N", "Taylor Swift":"L", "Carrie Underwood":"L",
  "Keith Urban":"N", "Alex Warren":"B", "Hudson Westbrook":"B", "Brandon Wisham":"B",
  "Blake Whiten":"B", "World’s First Cinema":"L", "Brett Young":"L", "Bailey Zimmerman":"B",
};
const attendanceLabel = { N: "Nick", L: "Liz", B: "Both" };
let activeGenre = "All";
let activeAttendee = "All";
let query = "";

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
  <nav><span class="brand"><i></i> CONCERT PASSPORT</span><span class="issue">NICK + LIZ · 72 ARTISTS</span></nav>
  <div class="hero-copy"><p class="eyebrow">THE LIVE MUSIC ARCHIVE</p><h1>We were<br><em>there.</em></h1><p class="lede">From stadium country to indie basements, this is every artist we’ve seen live—mapped by the sounds that got us there.</p></div>
  <div class="hero-numbers"><div><strong>72</strong><span>artists seen</span></div><div><strong>${togetherCount}</strong><span>seen together</span></div><div><strong>${Math.round(togetherCount / artists.length * 100)}%</strong><span>shared lineup</span></div></div>
  <div class="ticket-stub"><span>ADMIT TWO</span><b>N + L<br>LIVE</b><small>NO EXPIRATION</small></div>
</header>
<section class="attendance-section">
  <div class="section-heading"><div><span class="kicker">01 / WHO WAS THERE</span><h2>Two fans, one archive</h2></div><p>Solo favorites and shared nights, all in one place. Choose a person to filter the full artist roster.</p></div>
  <div class="attendance-grid">
    <button class="nick" data-attendee-card="Nick"><span>N</span><strong>${nickCount}</strong><h3>Nick</h3><p>${nickCount-togetherCount} solo · ${togetherCount} shared</p></button>
    <button class="both" data-attendee-card="Both"><span>N + L</span><strong>${togetherCount}</strong><h3>Together</h3><p>${Math.round(togetherCount/artists.length*100)}% of the full lineup</p></button>
    <button class="liz" data-attendee-card="Liz"><span>L</span><strong>${lizCount}</strong><h3>Liz</h3><p>${lizCount-togetherCount} solo · ${togetherCount} shared</p></button>
  </div>
</section>
<section class="genre-section">
  <div class="section-heading"><div><span class="kicker">02 / THE SOUND</span><h2>Where the nights live</h2></div><p>Broad genre groupings based on each artist’s primary sound. The crossover tags tell the fuller story.</p></div>
  <div class="genre-layout"><div class="genre-bars">${counts.map(([genre,count],i)=>`<button class="bar-row" data-chart-genre="${genre}"><span class="rank">0${i+1}</span><span class="bar-label">${genre}</span><span class="bar-track"><i style="width:${count/countryCount*100}%;background:${colors[genre]}"></i></span><strong>${count}</strong></button>`).join("")}</div>
  <aside class="insight-card"><span>THE HEADLINE</span><strong>${countryCount}</strong><h3>country artists</h3><p>Country is the clear main stage, with modern country-pop, red dirt, outlaw, and roots all in the mix.</p></aside></div>
</section>
<section class="stats-strip"><article><span>COUNTRY CROSSOVERS</span><strong>${crossoverCount}</strong><p>artists tagged across genre lines</p></article><article><span>GROUP ENERGY</span><strong>${artists.filter(a=>a.tags.includes("Vocal group")||a.tags.includes("Duo")).length}</strong><p>duos and vocal groups</p></article><article><span>SONGWRITERS’ ROW</span><strong>${artists.filter(a=>a.tags.includes("Singer-songwriter")).length}</strong><p>singer-songwriters seen live</p></article></section>
<section class="roster" id="roster">
  <div class="section-heading roster-head"><div><span class="kicker">03 / THE ROSTER</span><h2>Every name on the bill</h2></div><p id="result-count"></p></div>
  <div class="controls"><div class="filter-groups"><div class="filters attendance-filters" id="attendee-filters"></div><div class="filters" id="genre-filters"></div></div><label class="search"><span>⌕</span><input id="search" placeholder="Search artists or styles" aria-label="Search artists or styles"></label></div>
  <div class="artist-grid" id="artist-grid"></div><div class="empty" id="empty" hidden>No artists found. Try another search.</div>
</section>
<footer><span>NICK + LIZ · 72 NAMES · COUNTLESS ENCORES</span><p>Built from our concert history ✦ Genre labels are intentionally broad.</p></footer>`;

function attendeeMatches(who) {
  return activeAttendee === "All" || activeAttendee === "Both" && who === "B" ||
    activeAttendee === "Nick" && (who === "N" || who === "B") ||
    activeAttendee === "Liz" && (who === "L" || who === "B");
}
function render() {
  const filtered = artists.filter(artist => {
    const genreMatch = activeGenre === "All" || artist.genre === activeGenre;
    const who = attendance[artist.name];
    const text = `${artist.name} ${artist.genre} ${artist.tags.join(" ")} ${attendanceLabel[who]}`.toLowerCase();
    return genreMatch && attendeeMatches(who) && text.includes(query.toLowerCase());
  });
  document.getElementById("result-count").textContent = `${filtered.length} artist${filtered.length===1?"":"s"} showing`;
  document.getElementById("artist-grid").innerHTML = filtered.map(artist => `
    <article class="artist-card" style="--accent:${colors[artist.genre]}">
      <span class="attendance-badge ${attendance[artist.name].toLowerCase()}">${attendanceLabel[attendance[artist.name]]}</span>
      <div class="monogram">${artist.initials}</div><div><h3>${artist.name}</h3><p>${artist.genre}</p></div>
      <div class="tags">${artist.tags.map(tag=>`<span>${tag}</span>`).join("")}</div>
    </article>`).join("");
  document.getElementById("empty").hidden = filtered.length !== 0;
  document.getElementById("attendee-filters").innerHTML = ["All","Nick","Liz","Both"].map(who=>`<button data-attendee="${who}" class="${activeAttendee===who?"active":""}">${who==="All"?"Everyone":who}</button>`).join("");
  document.getElementById("genre-filters").innerHTML = ["All",...counts.map(([g])=>g)].map(genre=>`<button data-genre="${genre}" class="${activeGenre===genre?"active":""}">${genre}</button>`).join("");
  document.querySelectorAll("[data-attendee-card]").forEach(btn => btn.classList.toggle("active", btn.dataset.attendeeCard === activeAttendee));
  document.querySelectorAll("[data-attendee]").forEach(btn => btn.onclick=()=>{activeAttendee=btn.dataset.attendee;render();});
  document.querySelectorAll("[data-genre]").forEach(btn => btn.onclick=()=>{activeGenre=btn.dataset.genre;render();});
}
document.querySelectorAll("[data-attendee-card]").forEach(btn => btn.onclick=()=>{activeAttendee=activeAttendee===btn.dataset.attendeeCard?"All":btn.dataset.attendeeCard;render();document.getElementById("roster").scrollIntoView({behavior:"smooth"});});
document.querySelectorAll("[data-chart-genre]").forEach(btn => btn.onclick=()=>{activeGenre=btn.dataset.chartGenre;render();document.getElementById("roster").scrollIntoView({behavior:"smooth"});});
document.getElementById("search").addEventListener("input", e=>{query=e.target.value;render();});
render();
