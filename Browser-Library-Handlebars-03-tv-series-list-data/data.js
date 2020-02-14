var tvShows = [
  {
    id: 82,
    name: "Game of Thrones",
    language: "English",
    genres: ["Drama", "Adventure", "Fantasy"],
    status: "Ended",
    premiered: "2011-04-17",
    rating: {
      average: 9.1
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg"
    },
    summary:
      "<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>",
    officialSite: "http://www.hbo.com/game-of-thrones"
  },
  {
    id: 1871,
    name: "Mr. Robot",
    language: "English",
    genres: ["Drama", "Crime", "Thriller"],
    status: "Ended",
    premiered: "2015-06-24",
    rating: {
      average: 8.4
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/211/528026.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/211/528026.jpg"
    },
    summary:
      "<p><b>Mr. Robot</b> follows Elliot, a young programmer who works as a cyber-security engineer by day and as a vigilante hacker by night. Elliot finds himself at a crossroads when the mysterious leader of an underground hacker group recruits him to destroy the firm he is paid to protect. Compelled by his personal beliefs, Elliot struggles to resist the chance to take down the multinational CEOs he believes are running (and ruining) the world.</p>",
    officialSite: "http://www.usanetwork.com/mrrobot"
  },
  {
    id: 618,
    name: "Better Call Saul",
    language: "English",
    genres: ["Drama", "Crime", "Legal"],
    status: "Running",
    premiered: "2015-02-08",
    rating: {
      average: 8.7
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/235/587815.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/235/587815.jpg"
    },
    summary:
      '<p><b>Better Call Saul</b> is the prequel to the award-winning series Breaking Bad, set six years before Saul Goodman became Walter White\'s lawyer. When we meet him, the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and often against, Jimmy is "fixer" Mike Ehrmantraut, a beloved character introduced in Breaking Bad. The series will track Jimmy\'s transformation into Saul Goodman, the man who puts "criminal" in "criminal lawyer".</p>',
    officialSite: "http://www.amc.com/shows/better-call-saul"
  },
  {
    id: 7,
    name: "Homeland",
    language: "English",
    genres: ["Drama", "Thriller", "Espionage"],
    status: "Running",
    premiered: "2011-10-02",
    rating: {
      average: 8.2
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/230/575652.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/230/575652.jpg"
    },
    summary:
      "<p>The winner of 6 Emmy Awards including Outstanding Drama Series, <b>Homeland</b> is an edge-of-your-seat sensation. Marine Sergeant Nicholas Brody is both a decorated hero and a serious threat. CIA officer Carrie Mathison is tops in her field despite being bipolar. The delicate dance these two complex characters perform, built on lies, suspicion, and desire, is at the heart of this gripping, emotional thriller in which nothing short of the fate of our nation is at stake.</p>",
    officialSite: "http://www.sho.com/sho/homeland/home"
  },
  {
    id: 143,
    name: "Silicon Valley",
    language: "English",
    genres: ["Comedy"],
    status: "Ended",
    premiered: "2014-04-06",
    rating: {
      average: 8.5
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/215/538434.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/215/538434.jpg"
    },
    summary:
      "<p>In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. From Mike Judge comes this satire about a programmer whose game-changing algorithm becomes the subject of a valley-wide bidding war.</p>",
    officialSite: "http://www.hbo.com/silicon-valley/"
  },
  {
    id: 73,
    name: "The Walking Dead",
    language: "English",
    genres: ["Drama", "Action", "Horror"],
    status: "Running",
    premiered: "2010-10-31",
    rating: {
      average: 8.1
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/238/596840.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/238/596840.jpg"
    },
    summary:
      "<p><b>The Walking Dead</b> tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive.</p><p>Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard.</p>",
    officialSite: "http://www.amc.com/shows/the-walking-dead"
  },
  {
    id: 112,
    name: "South Park",
    language: "English",
    genres: ["Comedy"],
    status: "Running",
    premiered: "1997-08-13",
    rating: {
      average: 8.6
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/0/935.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/0/935.jpg"
    },
    summary:
      "<p><b>South Park</b> is an adult comedy animation show centred around 4 children in the small town of south park. Its humour is often dark involving satirical elements and mocking current real-life events.</p>",
    officialSite: "http://southpark.cc.com"
  },
  {
    id: 175,
    name: "House of Cards",
    language: "English",
    genres: ["Drama", "Thriller"],
    status: "Ended",
    premiered: "2013-02-01",
    rating: {
      average: 8.4
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/169/424482.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/169/424482.jpg"
    },
    summary:
      "<p>Based on the BBC miniseries of the same name, <b>House of Cards </b>follows Francis Underwood, the politician's politician – masterful, beguiling, charismatic and ruthless. He and his equally ambitious wife Claire will stop at nothing to ensure their ascendancy. This wicked political drama slithers beneath the curtain and through the back halls of greed, sex, love and corruption in modern Washington D.C.</p>",
    officialSite: "https://www.netflix.com/title/70178217"
  },
  {
    id: 66,
    name: "The Big Bang Theory",
    language: "English",
    genres: ["Comedy"],
    status: "Ended",
    premiered: "2007-09-24",
    rating: {
      average: 7.9
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/173/433868.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/173/433868.jpg"
    },
    summary:
      '<p><b>The Big Bang Theory</b> is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of "beautiful minds" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard\'s roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.</p>',
    officialSite: "http://www.cbs.com/shows/big_bang_theory/"
  },
  {
    id: 2705,
    name: "Narcos",
    language: "English",
    genres: ["Drama", "Action", "Crime"],
    status: "Ended",
    premiered: "2015-08-28",
    rating: {
      average: 8.5
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/166/416516.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/166/416516.jpg"
    },
    summary:
      "<p><b>Narcos</b> chronicle the life and death of drug lord Pablo Escobar the ruthless boss of the Medellin Cartel and a known terrorist who was also a congressman, a family man and revered by the poor as a new Robin Hood.</p>",
    officialSite: "https://www.netflix.com/title/80025172"
  }
];
let stringed = JSON.stringify(tvShows);
let parsed = JSON.parse(stringed);
let output = document.getElementById("series-template").innerHTML;

let template = Handlebars.compile(output);
console.log(template);
let outputData = template(parsed);

document.getElementById("output").innerHTML += outputData;
