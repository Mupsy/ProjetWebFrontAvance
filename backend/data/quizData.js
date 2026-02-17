const categories = [
  {
    id: 1,
    name: "Histoire",
    icon: "🏛️",
    color: "#E74C3C",
    description: "Testez vos connaissances en histoire mondiale"
  },
  {
    id: 2,
    name: "Cinéma",
    icon: "🎬",
    color: "#9B59B6",
    description: "Questions sur le 7ème art"
  },
  {
    id: 3,
    name: "Sport",
    icon: "⚽",
    color: "#27AE60",
    description: "Pour les passionnés de sport"
  },
  {
    id: 4,
    name: "Sciences",
    icon: "🔬",
    color: "#2980B9",
    description: "Explorez l'univers scientifique"
  },
  {
    id: 5,
    name: "Géographie",
    icon: "🌍",
    color: "#F39C12",
    description: "Parcourez le monde entier"
  },
  {
    id: 6,
    name: "Musique",
    icon: "🎵",
    color: "#E91E63",
    description: "Vibrez au rythme de la musique"
  }
];

const questions = [
  // ============ HISTOIRE (categoryId: 1) ============
  {
    id: 1,
    categoryId: 1,
    question: "En quelle année a eu lieu la Révolution française ?",
    answers: ["1789", "1776", "1804", "1815", "1792", "1750", "1799", "1812", "1830", "1848"],
    correctAnswer: "1789"
  },
  {
    id: 2,
    categoryId: 1,
    question: "Qui était le premier empereur de Rome ?",
    answers: ["Auguste", "Jules César", "Néron", "Caligula", "Tibère", "Claude", "Trajan", "Hadrien", "Marc Aurèle", "Commode"],
    correctAnswer: "Auguste"
  },
  {
    id: 3,
    categoryId: 1,
    question: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
    answers: ["1492", "1498", "1500", "1488", "1510", "1475", "1520", "1485", "1502", "1515"],
    correctAnswer: "1492"
  },
  {
    id: 4,
    categoryId: 1,
    question: "Quel pharaon est associé à la grande pyramide de Gizeh ?",
    answers: ["Khéops", "Ramsès II", "Toutânkhamon", "Cléopâtre", "Akhenaton", "Thoutmôsis III", "Séthi Ier", "Khéphren", "Mykérinos", "Ptolémée"],
    correctAnswer: "Khéops"
  },
  {
    id: 5,
    categoryId: 1,
    question: "Quel traité a mis fin à la Première Guerre mondiale ?",
    answers: ["Traité de Versailles", "Traité de Paris", "Traité de Vienne", "Traité de Westphalie", "Traité de Tordesillas", "Traité de Brest-Litovsk", "Traité de Trianon", "Traité de Sèvres", "Traité de Lausanne", "Traité de Rome"],
    correctAnswer: "Traité de Versailles"
  },
  {
    id: 6,
    categoryId: 1,
    question: "Qui a été le premier président des États-Unis ?",
    answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams", "Benjamin Franklin", "James Madison", "Alexander Hamilton", "Andrew Jackson", "James Monroe", "John Quincy Adams"],
    correctAnswer: "George Washington"
  },
  {
    id: 7,
    categoryId: 1,
    question: "En quelle année le mur de Berlin est-il tombé ?",
    answers: ["1989", "1991", "1985", "1990", "1987", "1988", "1992", "1986", "1993", "1984"],
    correctAnswer: "1989"
  },
  {
    id: 8,
    categoryId: 1,
    question: "Quelle civilisation a construit Machu Picchu ?",
    answers: ["Les Incas", "Les Mayas", "Les Aztèques", "Les Olmèques", "Les Toltèques", "Les Mochicas", "Les Nazcas", "Les Chimú", "Les Zapotèques", "Les Mixtèques"],
    correctAnswer: "Les Incas"
  },
  {
    id: 9,
    categoryId: 1,
    question: "Qui a peint la Joconde ?",
    answers: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Botticelli", "Le Caravage", "Titien", "Donatello", "Giotto", "Véronèse", "Le Tintoret"],
    correctAnswer: "Léonard de Vinci"
  },
  {
    id: 10,
    categoryId: 1,
    question: "En quelle année a eu lieu la bataille de Waterloo ?",
    answers: ["1815", "1812", "1804", "1789", "1830", "1848", "1870", "1805", "1806", "1814"],
    correctAnswer: "1815"
  },

  // ============ CINÉMA (categoryId: 2) ============
  {
    id: 11,
    categoryId: 2,
    question: "Quel film a remporté l'Oscar du meilleur film en 1994 ?",
    answers: ["Forrest Gump", "Pulp Fiction", "Le Roi Lion", "Les Évadés", "Quatre Mariages et un Enterrement", "Speed", "True Lies", "Léon", "The Mask", "Entretien avec un Vampire"],
    correctAnswer: "Forrest Gump"
  },
  {
    id: 12,
    categoryId: 2,
    question: "Qui a réalisé le film Inception ?",
    answers: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Martin Scorsese", "Ridley Scott", "David Fincher", "Quentin Tarantino", "Denis Villeneuve", "Tim Burton", "Zack Snyder"],
    correctAnswer: "Christopher Nolan"
  },
  {
    id: 13,
    categoryId: 2,
    question: "Dans quel film entend-on la réplique 'Je suis ton père' ?",
    answers: ["L'Empire contre-attaque", "Un Nouvel Espoir", "Le Retour du Jedi", "La Menace Fantôme", "La Revanche des Sith", "L'Attaque des Clones", "Le Réveil de la Force", "Rogue One", "Les Derniers Jedi", "Solo"],
    correctAnswer: "L'Empire contre-attaque"
  },
  {
    id: 14,
    categoryId: 2,
    question: "Quel acteur incarne Jack Sparrow ?",
    answers: ["Johnny Depp", "Orlando Bloom", "Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Robert Downey Jr.", "Will Smith", "Nicolas Cage", "Jude Law", "Colin Farrell"],
    correctAnswer: "Johnny Depp"
  },
  {
    id: 15,
    categoryId: 2,
    question: "Quel est le film le plus rentable de l'histoire (2023) ?",
    answers: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: Le Réveil de la Force", "Avengers: Infinity War", "Jurassic World", "The Lion King (2019)", "The Avengers", "Frozen II", "Top Gun: Maverick"],
    correctAnswer: "Avatar"
  },
  {
    id: 16,
    categoryId: 2,
    question: "Qui a réalisé la trilogie du Seigneur des Anneaux ?",
    answers: ["Peter Jackson", "Steven Spielberg", "George Lucas", "James Cameron", "Ridley Scott", "Christopher Nolan", "Tim Burton", "Ron Howard", "Michael Bay", "Guillermo del Toro"],
    correctAnswer: "Peter Jackson"
  },
  {
    id: 17,
    categoryId: 2,
    question: "Dans quel film joue Keanu Reeves un élu dans une simulation ?",
    answers: ["Matrix", "John Wick", "Speed", "Point Break", "Constantine", "47 Ronin", "The Day the Earth Stood Still", "Bill & Ted", "Knock Knock", "Destination Finale"],
    correctAnswer: "Matrix"
  },
  {
    id: 18,
    categoryId: 2,
    question: "Quel studio a produit Toy Story ?",
    answers: ["Pixar", "DreamWorks", "Disney", "Warner Bros", "Illumination", "Blue Sky", "Sony Pictures Animation", "Laika", "Aardman", "Studio Ghibli"],
    correctAnswer: "Pixar"
  },
  {
    id: 19,
    categoryId: 2,
    question: "Quel film met en scène un requin terrorisant une station balnéaire ?",
    answers: ["Les Dents de la mer", "Sharknado", "Deep Blue Sea", "The Meg", "Open Water", "47 Meters Down", "The Shallows", "Peur Bleue", "Shark Tale", "Le Grand Bleu"],
    correctAnswer: "Les Dents de la mer"
  },
  {
    id: 20,
    categoryId: 2,
    question: "Qui incarne le Joker dans The Dark Knight (2008) ?",
    answers: ["Heath Ledger", "Jack Nicholson", "Joaquin Phoenix", "Jared Leto", "Mark Hamill", "Cesar Romero", "Cameron Monaghan", "Barry Keoghan", "Zach Galifianakis", "Willem Dafoe"],
    correctAnswer: "Heath Ledger"
  },

  // ============ SPORT (categoryId: 3) ============
  {
    id: 21,
    categoryId: 3,
    question: "Combien de joueurs composent une équipe de football sur le terrain ?",
    answers: ["11", "10", "12", "9", "13", "14", "8", "15", "7", "16"],
    correctAnswer: "11"
  },
  {
    id: 22,
    categoryId: 3,
    question: "Dans quel pays se sont déroulés les JO d'été 2021 ?",
    answers: ["Japon", "Chine", "Brésil", "France", "Corée du Sud", "Australie", "États-Unis", "Angleterre", "Allemagne", "Russie"],
    correctAnswer: "Japon"
  },
  {
    id: 23,
    categoryId: 3,
    question: "Qui détient le record du monde du 100m ?",
    answers: ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Carl Lewis", "Justin Gatlin", "Asafa Powell", "Maurice Greene", "Donovan Bailey", "Nesta Carter", "Steve Mullings"],
    correctAnswer: "Usain Bolt"
  },
  {
    id: 24,
    categoryId: 3,
    question: "Combien de sets faut-il gagner pour remporter un match de tennis masculin en Grand Chelem ?",
    answers: ["3", "2", "4", "5", "1", "6", "7", "3 ou 5", "2 ou 3", "4 ou 5"],
    correctAnswer: "3"
  },
  {
    id: 25,
    categoryId: 3,
    question: "Quel pays a remporté la Coupe du Monde de football 2022 ?",
    answers: ["Argentine", "France", "Brésil", "Allemagne", "Espagne", "Italie", "Portugal", "Angleterre", "Croatie", "Maroc"],
    correctAnswer: "Argentine"
  },
  {
    id: 26,
    categoryId: 3,
    question: "Dans quel sport utilise-t-on un volant ?",
    answers: ["Badminton", "Tennis", "Squash", "Ping-pong", "Padel", "Pelote basque", "Volleyball", "Cricket", "Baseball", "Golf"],
    correctAnswer: "Badminton"
  },
  {
    id: 27,
    categoryId: 3,
    question: "Combien de points vaut un touchdown au football américain ?",
    answers: ["6", "7", "3", "4", "5", "2", "8", "1", "9", "10"],
    correctAnswer: "6"
  },
  {
    id: 28,
    categoryId: 3,
    question: "Quel nageur a remporté 23 médailles d'or olympiques ?",
    answers: ["Michael Phelps", "Ian Thorpe", "Mark Spitz", "Ryan Lochte", "Matt Biondi", "Grant Hackett", "Sun Yang", "Caeleb Dressel", "Florent Manaudou", "Chad le Clos"],
    correctAnswer: "Michael Phelps"
  },
  {
    id: 29,
    categoryId: 3,
    question: "Quel club de football a remporté le plus de Ligues des Champions ?",
    answers: ["Real Madrid", "AC Milan", "FC Barcelone", "Liverpool", "Bayern Munich", "Manchester United", "Juventus", "Ajax Amsterdam", "Inter Milan", "Benfica"],
    correctAnswer: "Real Madrid"
  },
  {
    id: 30,
    categoryId: 3,
    question: "Quel pays a inventé le basketball ?",
    answers: ["États-Unis", "Canada", "Angleterre", "France", "Espagne", "Grèce", "Lituanie", "Brésil", "Argentine", "Italie"],
    correctAnswer: "États-Unis"
  },

  // ============ SCIENCES (categoryId: 4) ============
  {
    id: 31,
    categoryId: 4,
    question: "Quel est le symbole chimique de l'or ?",
    answers: ["Au", "Ag", "Fe", "Cu", "Or", "Go", "Ar", "Al", "Gd", "Os"],
    correctAnswer: "Au"
  },
  {
    id: 32,
    categoryId: 4,
    question: "Combien d'os possède le corps humain adulte ?",
    answers: ["206", "208", "204", "210", "200", "212", "198", "215", "196", "220"],
    correctAnswer: "206"
  },
  {
    id: 33,
    categoryId: 4,
    question: "Quelle planète est surnommée la 'planète rouge' ?",
    answers: ["Mars", "Jupiter", "Vénus", "Saturne", "Mercure", "Neptune", "Uranus", "Pluton", "Terre", "Io"],
    correctAnswer: "Mars"
  },
  {
    id: 34,
    categoryId: 4,
    question: "Qui a formulé la théorie de la relativité ?",
    answers: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Max Planck", "Stephen Hawking", "Richard Feynman", "Werner Heisenberg", "Erwin Schrödinger", "Marie Curie", "Galilée"],
    correctAnswer: "Albert Einstein"
  },
  {
    id: 35,
    categoryId: 4,
    question: "Quel gaz les plantes absorbent-elles lors de la photosynthèse ?",
    answers: ["Dioxyde de carbone", "Oxygène", "Azote", "Hydrogène", "Hélium", "Méthane", "Ozone", "Néon", "Argon", "Monoxyde de carbone"],
    correctAnswer: "Dioxyde de carbone"
  },
  {
    id: 36,
    categoryId: 4,
    question: "Quel est le plus grand organe du corps humain ?",
    answers: ["La peau", "Le foie", "Le cerveau", "Les poumons", "Le cœur", "L'intestin grêle", "L'estomac", "Le pancréas", "La rate", "Les reins"],
    correctAnswer: "La peau"
  },
  {
    id: 37,
    categoryId: 4,
    question: "Quelle est la vitesse de la lumière en km/s (approximativement) ?",
    answers: ["300 000 km/s", "150 000 km/s", "500 000 km/s", "200 000 km/s", "100 000 km/s", "250 000 km/s", "350 000 km/s", "400 000 km/s", "1 000 000 km/s", "50 000 km/s"],
    correctAnswer: "300 000 km/s"
  },
  {
    id: 38,
    categoryId: 4,
    question: "Quel élément chimique a le numéro atomique 1 ?",
    answers: ["Hydrogène", "Hélium", "Lithium", "Carbone", "Oxygène", "Azote", "Bore", "Fluor", "Néon", "Béryllium"],
    correctAnswer: "Hydrogène"
  },
  {
    id: 39,
    categoryId: 4,
    question: "Combien de chromosomes possède un être humain ?",
    answers: ["46", "44", "48", "42", "23", "50", "40", "36", "52", "38"],
    correctAnswer: "46"
  },
  {
    id: 40,
    categoryId: 4,
    question: "Quel scientifique a découvert la pénicilline ?",
    answers: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch", "Edward Jenner", "Jonas Salk", "Gregor Mendel", "Charles Darwin", "Linus Pauling", "Joseph Lister"],
    correctAnswer: "Alexander Fleming"
  },

  // ============ GÉOGRAPHIE (categoryId: 5) ============
  {
    id: 41,
    categoryId: 5,
    question: "Quelle est la capitale de l'Australie ?",
    answers: ["Canberra", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Darwin", "Hobart", "Auckland", "Wellington"],
    correctAnswer: "Canberra"
  },
  {
    id: 42,
    categoryId: 5,
    question: "Quel est le plus long fleuve du monde ?",
    answers: ["Le Nil", "L'Amazone", "Le Mississippi", "Le Yangtsé", "Le Danube", "Le Mékong", "Le Congo", "Le Gange", "La Volga", "Le Rhin"],
    correctAnswer: "Le Nil"
  },
  {
    id: 43,
    categoryId: 5,
    question: "Combien de continents y a-t-il sur Terre ?",
    answers: ["7", "6", "5", "8", "4", "9", "10", "3", "11", "12"],
    correctAnswer: "7"
  },
  {
    id: 44,
    categoryId: 5,
    question: "Quel est le plus grand désert du monde ?",
    answers: ["Sahara", "Antarctique", "Gobi", "Kalahari", "Atacama", "Namib", "Sonora", "Karakoum", "Taklamakan", "Thar"],
    correctAnswer: "Sahara"
  },
  {
    id: 45,
    categoryId: 5,
    question: "Quel pays possède le plus grand nombre d'habitants ?",
    answers: ["Inde", "Chine", "États-Unis", "Indonésie", "Brésil", "Pakistan", "Bangladesh", "Russie", "Nigéria", "Mexique"],
    correctAnswer: "Inde"
  },
  {
    id: 46,
    categoryId: 5,
    question: "Quel est le plus haut sommet du monde ?",
    answers: ["Everest", "K2", "Kangchenjunga", "Mont Blanc", "Kilimandjaro", "Makalu", "Denali", "Aconcagua", "Nanga Parbat", "Annapurna"],
    correctAnswer: "Everest"
  },
  {
    id: 47,
    categoryId: 5,
    question: "Quelle est la capitale du Canada ?",
    answers: ["Ottawa", "Toronto", "Montréal", "Vancouver", "Québec", "Calgary", "Edmonton", "Winnipeg", "Halifax", "Victoria"],
    correctAnswer: "Ottawa"
  },
  {
    id: 48,
    categoryId: 5,
    question: "Quel océan est le plus grand ?",
    answers: ["Pacifique", "Atlantique", "Indien", "Arctique", "Antarctique", "Méditerranée", "Caraïbes", "Mer de Chine", "Mer Rouge", "Mer Noire"],
    correctAnswer: "Pacifique"
  },
  {
    id: 49,
    categoryId: 5,
    question: "Dans quel pays se trouve la tour de Pise ?",
    answers: ["Italie", "France", "Espagne", "Grèce", "Portugal", "Allemagne", "Autriche", "Turquie", "Suisse", "Pays-Bas"],
    correctAnswer: "Italie"
  },
  {
    id: 50,
    categoryId: 5,
    question: "Quelle est la plus petite nation du monde ?",
    answers: ["Vatican", "Monaco", "Saint-Marin", "Liechtenstein", "Malte", "Nauru", "Tuvalu", "Andorre", "Luxembourg", "Singapour"],
    correctAnswer: "Vatican"
  },

  // ============ MUSIQUE (categoryId: 6) ============
  {
    id: 51,
    categoryId: 6,
    question: "Quel groupe a chanté 'Bohemian Rhapsody' ?",
    answers: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones", "AC/DC", "Nirvana", "Guns N' Roses", "U2", "Aerosmith"],
    correctAnswer: "Queen"
  },
  {
    id: 52,
    categoryId: 6,
    question: "Combien de cordes possède une guitare standard ?",
    answers: ["6", "4", "5", "7", "8", "12", "3", "9", "10", "11"],
    correctAnswer: "6"
  },
  {
    id: 53,
    categoryId: 6,
    question: "Qui est surnommé le 'King of Pop' ?",
    answers: ["Michael Jackson", "Elvis Presley", "Prince", "Stevie Wonder", "James Brown", "Madonna", "David Bowie", "Freddie Mercury", "Whitney Houston", "Elton John"],
    correctAnswer: "Michael Jackson"
  },
  {
    id: 54,
    categoryId: 6,
    question: "Quel instrument joue un pianiste ?",
    answers: ["Piano", "Orgue", "Synthétiseur", "Clavecin", "Accordéon", "Xylophone", "Vibraphone", "Célesta", "Marimba", "Glockenspiel"],
    correctAnswer: "Piano"
  },
  {
    id: 55,
    categoryId: 6,
    question: "Quel compositeur est devenu sourd mais a continué à composer ?",
    answers: ["Beethoven", "Mozart", "Bach", "Chopin", "Vivaldi", "Tchaïkovski", "Schubert", "Brahms", "Handel", "Liszt"],
    correctAnswer: "Beethoven"
  },
  {
    id: 56,
    categoryId: 6,
    question: "De quel pays vient le genre musical Reggae ?",
    answers: ["Jamaïque", "Cuba", "Brésil", "Trinité-et-Tobago", "Haïti", "Barbade", "Porto Rico", "République Dominicaine", "Bahamas", "Guadeloupe"],
    correctAnswer: "Jamaïque"
  },
  {
    id: 57,
    categoryId: 6,
    question: "Quel rappeur français a sorti l'album 'Que la famille' ?",
    answers: ["PNL", "Booba", "Nekfeu", "Jul", "Orelsan", "Ninho", "Damso", "SCH", "Lacrim", "Kaaris"],
    correctAnswer: "PNL"
  },
  {
    id: 58,
    categoryId: 6,
    question: "Combien de touches possède un piano standard ?",
    answers: ["88", "76", "64", "92", "72", "84", "96", "80", "61", "100"],
    correctAnswer: "88"
  },
  {
    id: 59,
    categoryId: 6,
    question: "Quel groupe a chanté 'Stairway to Heaven' ?",
    answers: ["Led Zeppelin", "Pink Floyd", "The Beatles", "The Rolling Stones", "Deep Purple", "Black Sabbath", "The Who", "Cream", "Jimi Hendrix Experience", "The Doors"],
    correctAnswer: "Led Zeppelin"
  },
  {
    id: 60,
    categoryId: 6,
    question: "Quelle chanteuse a interprété 'Rolling in the Deep' ?",
    answers: ["Adele", "Beyoncé", "Rihanna", "Taylor Swift", "Lady Gaga", "Sia", "Amy Winehouse", "Alicia Keys", "Katy Perry", "P!nk"],
    correctAnswer: "Adele"
  },

  // ============ NOUVELLES QUESTIONS HISTOIRE (categoryId: 1) — IDs 61-100 ============
  {
    id: 61,
    categoryId: 1,
    question: "Quel roi de France a été surnommé le 'Roi-Soleil' ?",
    answers: ["Louis XIV", "Louis XVI", "Louis XV", "François Ier", "Henri IV", "Charles V", "Louis XIII", "Philippe Auguste", "Louis IX", "Napoléon Ier"],
    correctAnswer: "Louis XIV"
  },
  {
    id: 62,
    categoryId: 1,
    question: "En quelle année a débuté la Seconde Guerre mondiale ?",
    answers: ["1939", "1941", "1938", "1940", "1937", "1936", "1942", "1935", "1943", "1944"],
    correctAnswer: "1939"
  },
  {
    id: 63,
    categoryId: 1,
    question: "Qui a assassiné Jules César ?",
    answers: ["Brutus", "Cassius", "Marc Antoine", "Pompée", "Octave", "Cicéron", "Crassus", "Sylla", "Catilina", "Spartacus"],
    correctAnswer: "Brutus"
  },
  {
    id: 64,
    categoryId: 1,
    question: "Quelle reine d'Angleterre a régné pendant 63 ans au XIXe siècle ?",
    answers: ["Victoria", "Élisabeth Ire", "Élisabeth II", "Marie Ire", "Anne", "Marie Stuart", "Jane Grey", "Catherine d'Aragon", "Mathilde", "Aliénor d'Aquitaine"],
    correctAnswer: "Victoria"
  },
  {
    id: 65,
    categoryId: 1,
    question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
    answers: ["1969", "1968", "1970", "1971", "1967", "1972", "1966", "1965", "1973", "1974"],
    correctAnswer: "1969"
  },
  {
    id: 66,
    categoryId: 1,
    question: "Quel empire était dirigé par Gengis Khan ?",
    answers: ["L'Empire mongol", "L'Empire ottoman", "L'Empire perse", "L'Empire romain", "L'Empire chinois", "L'Empire moghol", "L'Empire byzantin", "L'Empire russe", "L'Empire japonais", "L'Empire khmer"],
    correctAnswer: "L'Empire mongol"
  },
  {
    id: 67,
    categoryId: 1,
    question: "Quel événement a déclenché la Première Guerre mondiale ?",
    answers: ["L'assassinat de l'archiduc François-Ferdinand", "L'invasion de la Pologne", "La bataille de la Marne", "Le naufrage du Lusitania", "La révolution russe", "Le traité de Versailles", "L'annexion de l'Alsace-Lorraine", "La crise de Sarajevo économique", "Le blocus de Berlin", "La conférence de Yalta"],
    correctAnswer: "L'assassinat de l'archiduc François-Ferdinand"
  },
  {
    id: 68,
    categoryId: 1,
    question: "Qui était le leader de l'URSS pendant la Seconde Guerre mondiale ?",
    answers: ["Joseph Staline", "Lénine", "Trotski", "Khrouchtchev", "Brejnev", "Gorbatchev", "Eltsine", "Molotov", "Joukov", "Beria"],
    correctAnswer: "Joseph Staline"
  },
  {
    id: 69,
    categoryId: 1,
    question: "Quelle ville antique a été détruite par l'éruption du Vésuve en 79 après J.-C. ?",
    answers: ["Pompéi", "Rome", "Athènes", "Carthage", "Troie", "Herculanum", "Babylone", "Alexandrie", "Constantinople", "Corinthe"],
    correctAnswer: "Pompéi"
  },
  {
    id: 70,
    categoryId: 1,
    question: "En quelle année l'esclavage a-t-il été aboli en France ?",
    answers: ["1848", "1789", "1815", "1830", "1870", "1804", "1794", "1863", "1833", "1865"],
    correctAnswer: "1848"
  },
  {
    id: 71,
    categoryId: 1,
    question: "Qui a fondé l'Empire carolingien ?",
    answers: ["Charlemagne", "Clovis", "Charles Martel", "Pépin le Bref", "Louis le Pieux", "Hugues Capet", "Mérovée", "Childéric", "Dagobert", "Lothaire"],
    correctAnswer: "Charlemagne"
  },
  {
    id: 72,
    categoryId: 1,
    question: "Quelle guerre a opposé le Nord et le Sud des États-Unis ?",
    answers: ["La guerre de Sécession", "La guerre d'Indépendance", "La guerre de 1812", "La guerre hispano-américaine", "La guerre du Mexique", "La guerre de Corée", "La guerre du Vietnam", "La guerre des Sept Ans", "La guerre de Cent Ans", "La guerre froide"],
    correctAnswer: "La guerre de Sécession"
  },
  {
    id: 73,
    categoryId: 1,
    question: "Quel navigateur portugais a réalisé le premier tour du monde ?",
    answers: ["Magellan", "Vasco de Gama", "Christophe Colomb", "Bartolomeu Dias", "James Cook", "Francis Drake", "Amerigo Vespucci", "Marco Polo", "Henri le Navigateur", "Pedro Álvares Cabral"],
    correctAnswer: "Magellan"
  },
  {
    id: 74,
    categoryId: 1,
    question: "En quelle année la Déclaration d'indépendance américaine a-t-elle été signée ?",
    answers: ["1776", "1789", "1783", "1774", "1791", "1763", "1800", "1770", "1781", "1787"],
    correctAnswer: "1776"
  },
  {
    id: 75,
    categoryId: 1,
    question: "Quel pays a lancé la première bombe atomique sur Hiroshima ?",
    answers: ["Les États-Unis", "L'URSS", "Le Royaume-Uni", "La France", "L'Allemagne", "Le Japon", "La Chine", "L'Italie", "Le Canada", "L'Inde"],
    correctAnswer: "Les États-Unis"
  },
  {
    id: 76,
    categoryId: 1,
    question: "Qui a mené la résistance française pendant la Seconde Guerre mondiale depuis Londres ?",
    answers: ["Charles de Gaulle", "Jean Moulin", "Philippe Pétain", "Pierre Laval", "Leclerc", "Georges Clemenceau", "Léon Blum", "Raymond Poincaré", "Édouard Daladier", "Paul Reynaud"],
    correctAnswer: "Charles de Gaulle"
  },
  {
    id: 77,
    categoryId: 1,
    question: "Quelle dynastie a régné sur la Chine pendant plus de 250 ans jusqu'en 1912 ?",
    answers: ["La dynastie Qing", "La dynastie Ming", "La dynastie Han", "La dynastie Tang", "La dynastie Song", "La dynastie Yuan", "La dynastie Sui", "La dynastie Zhou", "La dynastie Xia", "La dynastie Shang"],
    correctAnswer: "La dynastie Qing"
  },
  {
    id: 78,
    categoryId: 1,
    question: "Quel événement marque traditionnellement la fin du Moyen Âge ?",
    answers: ["La chute de Constantinople en 1453", "La découverte de l'Amérique en 1492", "La prise de la Bastille en 1789", "La chute de Rome en 476", "L'invention de l'imprimerie en 1450", "Le début des Croisades en 1096", "La signature de la Magna Carta en 1215", "La peste noire en 1347", "La guerre de Cent Ans en 1337", "Le schisme d'Orient en 1054"],
    correctAnswer: "La chute de Constantinople en 1453"
  },
  {
    id: 79,
    categoryId: 1,
    question: "Qui a aboli la monarchie en France pour instaurer la Première République ?",
    answers: ["La Convention nationale", "Napoléon Bonaparte", "Louis XVI", "Robespierre", "Danton", "Marat", "Lafayette", "Mirabeau", "Talleyrand", "Sieyès"],
    correctAnswer: "La Convention nationale"
  },
  {
    id: 80,
    categoryId: 1,
    question: "En quelle année le Titanic a-t-il coulé ?",
    answers: ["1912", "1910", "1914", "1905", "1908", "1915", "1920", "1907", "1911", "1913"],
    correctAnswer: "1912"
  },
  {
    id: 81,
    categoryId: 1,
    question: "Quel philosophe grec est considéré comme le père de la démocratie ?",
    answers: ["Périclès", "Socrate", "Platon", "Aristote", "Hérodote", "Thucydide", "Solon", "Démosthène", "Pythagore", "Épicure"],
    correctAnswer: "Périclès"
  },
  {
    id: 82,
    categoryId: 1,
    question: "Quelle bataille navale a opposé Nelson à Napoléon en 1805 ?",
    answers: ["Trafalgar", "Aboukir", "Salamine", "Lépante", "Actium", "Midway", "Jutland", "Tsushima", "Chesapeake", "Les Saintes"],
    correctAnswer: "Trafalgar"
  },
  {
    id: 83,
    categoryId: 1,
    question: "Qui a été le premier homme à voler en avion ?",
    answers: ["Les frères Wright", "Louis Blériot", "Clément Ader", "Santos-Dumont", "Charles Lindbergh", "Amelia Earhart", "Howard Hughes", "Otto Lilienthal", "Samuel Langley", "Glenn Curtiss"],
    correctAnswer: "Les frères Wright"
  },
  {
    id: 84,
    categoryId: 1,
    question: "Quelle civilisation a inventé l'écriture cunéiforme ?",
    answers: ["Les Sumériens", "Les Égyptiens", "Les Grecs", "Les Romains", "Les Phéniciens", "Les Perses", "Les Babyloniens", "Les Assyriens", "Les Hittites", "Les Hébreux"],
    correctAnswer: "Les Sumériens"
  },
  {
    id: 85,
    categoryId: 1,
    question: "En quelle année Nelson Mandela a-t-il été libéré de prison ?",
    answers: ["1990", "1989", "1991", "1988", "1994", "1985", "1992", "1993", "1987", "1986"],
    correctAnswer: "1990"
  },
  {
    id: 86,
    categoryId: 1,
    question: "Quel empereur romain a divisé l'Empire en deux parties ?",
    answers: ["Dioclétien", "Constantin", "Théodose", "Auguste", "Trajan", "Hadrien", "Marc Aurèle", "Justinien", "Néron", "Commode"],
    correctAnswer: "Dioclétien"
  },
  {
    id: 87,
    categoryId: 1,
    question: "Quelle guerre a duré de 1337 à 1453 ?",
    answers: ["La guerre de Cent Ans", "La guerre de Trente Ans", "Les Croisades", "La guerre de Sécession", "La guerre de Sept Ans", "Les guerres napoléoniennes", "La guerre des Roses", "La Reconquista", "Les guerres puniques", "La guerre du Péloponnèse"],
    correctAnswer: "La guerre de Cent Ans"
  },
  {
    id: 88,
    categoryId: 1,
    question: "Qui a inventé l'imprimerie à caractères mobiles en Europe ?",
    answers: ["Gutenberg", "Léonard de Vinci", "Copernic", "Galilée", "Erasme", "Luther", "Machiavel", "Thomas More", "Dante", "Cervantès"],
    correctAnswer: "Gutenberg"
  },
  {
    id: 89,
    categoryId: 1,
    question: "Quel pays a été le premier à abolir l'esclavage en 1794 ?",
    answers: ["La France", "L'Angleterre", "Les États-Unis", "Le Portugal", "L'Espagne", "Les Pays-Bas", "Le Danemark", "La Suède", "Haïti", "Le Brésil"],
    correctAnswer: "La France"
  },
  {
    id: 90,
    categoryId: 1,
    question: "Quelle révolution industrielle a commencé en Angleterre au XVIIIe siècle ?",
    answers: ["La première révolution industrielle", "La deuxième révolution industrielle", "La révolution agricole", "La révolution numérique", "La révolution scientifique", "La révolution verte", "La révolution commerciale", "La révolution financière", "La révolution énergétique", "La révolution technologique"],
    correctAnswer: "La première révolution industrielle"
  },
  {
    id: 91,
    categoryId: 1,
    question: "Qui a dirigé l'Allemagne nazie ?",
    answers: ["Adolf Hitler", "Heinrich Himmler", "Hermann Göring", "Joseph Goebbels", "Rudolf Hess", "Albert Speer", "Erwin Rommel", "Karl Dönitz", "Wilhelm Keitel", "Martin Bormann"],
    correctAnswer: "Adolf Hitler"
  },
  {
    id: 92,
    categoryId: 1,
    question: "En quelle année a eu lieu le débarquement en Normandie ?",
    answers: ["1944", "1943", "1945", "1942", "1941", "1940", "1939", "1946", "1938", "1937"],
    correctAnswer: "1944"
  },
  {
    id: 93,
    categoryId: 1,
    question: "Quelle civilisation a construit les temples d'Angkor ?",
    answers: ["Les Khmers", "Les Thaïs", "Les Birmans", "Les Vietnamiens", "Les Javanais", "Les Chams", "Les Malais", "Les Laotiens", "Les Mons", "Les Dayaks"],
    correctAnswer: "Les Khmers"
  },
  {
    id: 94,
    categoryId: 1,
    question: "Quel roi d'Angleterre a signé la Magna Carta en 1215 ?",
    answers: ["Jean sans Terre", "Richard Cœur de Lion", "Henri II", "Édouard Ier", "Guillaume le Conquérant", "Henri VIII", "Élisabeth Ire", "Henri III", "Étienne de Blois", "Henri Ier"],
    correctAnswer: "Jean sans Terre"
  },
  {
    id: 95,
    categoryId: 1,
    question: "Quelle bataille a marqué la fin de l'Empire napoléonien en 1815 ?",
    answers: ["Waterloo", "Austerlitz", "Trafalgar", "Leipzig", "Iéna", "Marengo", "Wagram", "Borodino", "Eylau", "Friedland"],
    correctAnswer: "Waterloo"
  },
  {
    id: 96,
    categoryId: 1,
    question: "En quelle année l'Union soviétique s'est-elle effondrée ?",
    answers: ["1991", "1989", "1990", "1992", "1988", "1993", "1987", "1985", "1994", "1986"],
    correctAnswer: "1991"
  },
  {
    id: 97,
    categoryId: 1,
    question: "Qui était le premier empereur de Chine ?",
    answers: ["Qin Shi Huang", "Liu Bang", "Wu Zetian", "Kangxi", "Kublai Khan", "Sun Yat-sen", "Mao Zedong", "Confucius", "Lao Tseu", "Gengis Khan"],
    correctAnswer: "Qin Shi Huang"
  },
  {
    id: 98,
    categoryId: 1,
    question: "Quel mouvement a lutté pour les droits civiques des Noirs américains dans les années 1960 ?",
    answers: ["Le mouvement des droits civiques", "Le mouvement abolitionniste", "Le mouvement suffragiste", "Le mouvement hippie", "Le Black Power", "Le mouvement ouvrier", "Le mouvement féministe", "Le Ku Klux Klan", "Les Panthères noires", "Le mouvement pacifiste"],
    correctAnswer: "Le mouvement des droits civiques"
  },
  {
    id: 99,
    categoryId: 1,
    question: "Quelle héroïne française a mené les troupes à Orléans en 1429 ?",
    answers: ["Jeanne d'Arc", "Marie-Antoinette", "Charlotte Corday", "Olympe de Gouges", "Aliénor d'Aquitaine", "Catherine de Médicis", "Blanche de Castille", "Anne de Bretagne", "Madame de Pompadour", "Madame de Staël"],
    correctAnswer: "Jeanne d'Arc"
  },
  {
    id: 100,
    categoryId: 1,
    question: "En quelle année a été proclamée la Cinquième République française ?",
    answers: ["1958", "1946", "1962", "1945", "1968", "1954", "1956", "1960", "1952", "1950"],
    correctAnswer: "1958"
  },

  // ============ NOUVELLES QUESTIONS CINÉMA (categoryId: 2) — IDs 101-140 ============
  {
    id: 101,
    categoryId: 2,
    question: "Quel film de 1972 raconte l'histoire de la famille Corleone ?",
    answers: ["Le Parrain", "Les Affranchis", "Scarface", "Casino", "Il était une fois en Amérique", "L'Impasse", "Le Parrain 2", "Heat", "Donnie Brasco", "Road to Perdition"],
    correctAnswer: "Le Parrain"
  },
  {
    id: 102,
    categoryId: 2,
    question: "Qui a réalisé Pulp Fiction ?",
    answers: ["Quentin Tarantino", "Martin Scorsese", "David Lynch", "Steven Spielberg", "Francis Ford Coppola", "Stanley Kubrick", "Ridley Scott", "Oliver Stone", "Brian De Palma", "Joel Coen"],
    correctAnswer: "Quentin Tarantino"
  },
  {
    id: 103,
    categoryId: 2,
    question: "Quel acteur incarne Iron Man dans le MCU ?",
    answers: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Tom Holland", "Benedict Cumberbatch", "Scarlett Johansson", "Jeremy Renner", "Paul Rudd", "Chadwick Boseman"],
    correctAnswer: "Robert Downey Jr."
  },
  {
    id: 104,
    categoryId: 2,
    question: "Quel film d'animation japonais a remporté l'Oscar du meilleur film d'animation en 2003 ?",
    answers: ["Le Voyage de Chihiro", "Princesse Mononoké", "Mon voisin Totoro", "Le Château ambulant", "Akira", "Ghost in the Shell", "Ponyo", "Kiki la petite sorcière", "Nausicaä", "Le Tombeau des lucioles"],
    correctAnswer: "Le Voyage de Chihiro"
  },
  {
    id: 105,
    categoryId: 2,
    question: "Quel réalisateur français a réalisé 'Intouchables' ?",
    answers: ["Olivier Nakache et Éric Toledano", "Luc Besson", "Jean-Pierre Jeunet", "François Truffaut", "Jacques Audiard", "Mathieu Kassovitz", "Michel Hazanavicius", "Claude Lelouch", "Cédric Klapisch", "Dany Boon"],
    correctAnswer: "Olivier Nakache et Éric Toledano"
  },
  {
    id: 106,
    categoryId: 2,
    question: "Dans quel film Leonardo DiCaprio joue-t-il un escroc qui se fait passer pour un pilote ?",
    answers: ["Arrête-moi si tu peux", "Le Loup de Wall Street", "Inception", "Shutter Island", "Titanic", "Aviator", "Gatsby le Magnifique", "Les Infiltrés", "Blood Diamond", "Django Unchained"],
    correctAnswer: "Arrête-moi si tu peux"
  },
  {
    id: 107,
    categoryId: 2,
    question: "Quel film de Stanley Kubrick se déroule dans un hôtel hanté ?",
    answers: ["Shining", "2001, l'Odyssée de l'espace", "Orange mécanique", "Full Metal Jacket", "Eyes Wide Shut", "Barry Lyndon", "Lolita", "Spartacus", "Docteur Folamour", "L'Ultime Razzia"],
    correctAnswer: "Shining"
  },
  {
    id: 108,
    categoryId: 2,
    question: "Quel personnage dit 'Hasta la vista, baby' ?",
    answers: ["Terminator", "Rambo", "Rocky", "John McClane", "James Bond", "RoboCop", "Mad Max", "Snake Plissken", "Dutch", "John Matrix"],
    correctAnswer: "Terminator"
  },
  {
    id: 109,
    categoryId: 2,
    question: "Quel film de 2010 se déroule dans des rêves imbriqués ?",
    answers: ["Inception", "Shutter Island", "Matrix", "Interstellar", "Tenet", "Memento", "Le Prestige", "Source Code", "Total Recall", "Dark City"],
    correctAnswer: "Inception"
  },
  {
    id: 110,
    categoryId: 2,
    question: "Quel acteur a joué James Bond le plus grand nombre de fois ?",
    answers: ["Roger Moore", "Sean Connery", "Daniel Craig", "Pierce Brosnan", "Timothy Dalton", "George Lazenby", "David Niven", "Barry Nelson", "Idris Elba", "Tom Hardy"],
    correctAnswer: "Roger Moore"
  },
  {
    id: 111,
    categoryId: 2,
    question: "Quel film français a remporté la Palme d'Or à Cannes en 2008 ?",
    answers: ["Entre les murs", "La Vie d'Adèle", "Amour", "La Classe de neige", "Dheepan", "Sous le soleil de Satan", "La Pianiste", "Le Goût des autres", "Un prophète", "Titane"],
    correctAnswer: "Entre les murs"
  },
  {
    id: 112,
    categoryId: 2,
    question: "Quel réalisateur est connu pour la trilogie Dollars avec Clint Eastwood ?",
    answers: ["Sergio Leone", "Federico Fellini", "Luchino Visconti", "Roberto Rossellini", "Bernardo Bertolucci", "Pier Paolo Pasolini", "Vittorio De Sica", "Michelangelo Antonioni", "Ennio Morricone", "Dario Argento"],
    correctAnswer: "Sergio Leone"
  },
  {
    id: 113,
    categoryId: 2,
    question: "Quel film Disney raconte l'histoire d'un lionceau nommé Simba ?",
    answers: ["Le Roi Lion", "Le Livre de la Jungle", "Bambi", "Dumbo", "Tarzan", "Frère des ours", "Rox et Rouky", "Les Aristochats", "La Belle et le Clochard", "Les 101 Dalmatiens"],
    correctAnswer: "Le Roi Lion"
  },
  {
    id: 114,
    categoryId: 2,
    question: "Qui a réalisé Jurassic Park ?",
    answers: ["Steven Spielberg", "James Cameron", "George Lucas", "Ridley Scott", "Michael Crichton", "Joe Johnston", "Colin Trevorrow", "Ron Howard", "Robert Zemeckis", "Barry Levinson"],
    correctAnswer: "Steven Spielberg"
  },
  {
    id: 115,
    categoryId: 2,
    question: "Quel film de 1999 met en scène un groupe de soutien pour hommes insatisfaits ?",
    answers: ["Fight Club", "Matrix", "American Beauty", "Sixième Sens", "Eyes Wide Shut", "Magnolia", "Office Space", "The Boondock Saints", "Being John Malkovich", "American Pie"],
    correctAnswer: "Fight Club"
  },
  {
    id: 116,
    categoryId: 2,
    question: "Quelle actrice incarne Katniss Everdeen dans Hunger Games ?",
    answers: ["Jennifer Lawrence", "Emma Watson", "Shailene Woodley", "Scarlett Johansson", "Kristen Stewart", "Natalie Portman", "Anne Hathaway", "Emma Stone", "Zendaya", "Brie Larson"],
    correctAnswer: "Jennifer Lawrence"
  },
  {
    id: 117,
    categoryId: 2,
    question: "Quel film de Pixar met en scène des émotions personnifiées ?",
    answers: ["Vice-Versa", "Toy Story", "Monstres et Cie", "Là-Haut", "Wall-E", "Ratatouille", "Coco", "Les Indestructibles", "Le Monde de Nemo", "Cars"],
    correctAnswer: "Vice-Versa"
  },
  {
    id: 118,
    categoryId: 2,
    question: "Qui a réalisé le film Titanic ?",
    answers: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Ridley Scott", "Peter Jackson", "Martin Scorsese", "Francis Ford Coppola", "Robert Zemeckis", "Ron Howard", "Michael Bay"],
    correctAnswer: "James Cameron"
  },
  {
    id: 119,
    categoryId: 2,
    question: "Dans quel film Tom Hanks est-il naufragé sur une île déserte ?",
    answers: ["Seul au monde", "Forrest Gump", "Il faut sauver le soldat Ryan", "La Ligne verte", "Philadelphia", "Terminal", "La Guerre selon Charlie Wilson", "Pirate des Caraïbes", "Robinson Crusoé", "L'Île mystérieuse"],
    correctAnswer: "Seul au monde"
  },
  {
    id: 120,
    categoryId: 2,
    question: "Quel film a popularisé la phrase 'La vie, c'est comme une boîte de chocolats' ?",
    answers: ["Forrest Gump", "Le Fabuleux Destin d'Amélie Poulain", "Chocolat", "Charlie et la Chocolaterie", "Seul au monde", "Rain Man", "Good Will Hunting", "Un homme d'exception", "Benjamin Button", "Philadelphia"],
    correctAnswer: "Forrest Gump"
  },
  {
    id: 121,
    categoryId: 2,
    question: "Quel film d'horreur de 1973 raconte une possession démoniaque ?",
    answers: ["L'Exorciste", "Shining", "Halloween", "Psychose", "Rosemary's Baby", "Carrie", "La Malédiction", "Poltergeist", "Les Griffes de la nuit", "Amityville"],
    correctAnswer: "L'Exorciste"
  },
  {
    id: 122,
    categoryId: 2,
    question: "Quel film de Wes Anderson se déroule dans un grand hôtel européen ?",
    answers: ["The Grand Budapest Hotel", "Moonrise Kingdom", "The Royal Tenenbaums", "La Vie aquatique", "Fantastic Mr. Fox", "L'Île aux chiens", "À bord du Darjeeling Limited", "Rushmore", "The French Dispatch", "Asteroid City"],
    correctAnswer: "The Grand Budapest Hotel"
  },
  {
    id: 123,
    categoryId: 2,
    question: "Quel réalisateur a créé la saga Alien ?",
    answers: ["Ridley Scott", "James Cameron", "David Fincher", "Jean-Pierre Jeunet", "Neill Blomkamp", "Denis Villeneuve", "Christopher Nolan", "Paul W.S. Anderson", "John Carpenter", "Guillermo del Toro"],
    correctAnswer: "Ridley Scott"
  },
  {
    id: 124,
    categoryId: 2,
    question: "Quel film de 2019 a remporté l'Oscar du meilleur film, premier film non anglophone à le faire ?",
    answers: ["Parasite", "Roma", "1917", "Joker", "Once Upon a Time in Hollywood", "Le Mans 66", "Marriage Story", "Les Misérables", "Jojo Rabbit", "The Irishman"],
    correctAnswer: "Parasite"
  },
  {
    id: 125,
    categoryId: 2,
    question: "Quel personnage de fiction habite au 221B Baker Street ?",
    answers: ["Sherlock Holmes", "James Bond", "Harry Potter", "Jack l'Éventreur", "Dracula", "Frankenstein", "Oliver Twist", "Dorian Gray", "Le Fantôme de l'Opéra", "Arsène Lupin"],
    correctAnswer: "Sherlock Holmes"
  },
  {
    id: 126,
    categoryId: 2,
    question: "Quel film met en scène un dinosaure cloné dans un parc d'attractions ?",
    answers: ["Jurassic Park", "Le Monde perdu", "King Kong", "Godzilla", "Avatar", "La Planète des singes", "Jurassic World", "Le Voyage au centre de la Terre", "Rampage", "Pacific Rim"],
    correctAnswer: "Jurassic Park"
  },
  {
    id: 127,
    categoryId: 2,
    question: "Quel réalisateur a réalisé 'Le Fabuleux Destin d'Amélie Poulain' ?",
    answers: ["Jean-Pierre Jeunet", "Luc Besson", "François Ozon", "Michel Gondry", "Mathieu Kassovitz", "Claude Lelouch", "Cédric Klapisch", "Jacques Audiard", "Dany Boon", "Patrice Leconte"],
    correctAnswer: "Jean-Pierre Jeunet"
  },
  {
    id: 128,
    categoryId: 2,
    question: "Quel film de Christopher Nolan explore les voyages interstellaires ?",
    answers: ["Interstellar", "Inception", "Tenet", "The Dark Knight", "Memento", "Le Prestige", "Dunkerque", "Insomnia", "Batman Begins", "Oppenheimer"],
    correctAnswer: "Interstellar"
  },
  {
    id: 129,
    categoryId: 2,
    question: "Qui interprète le rôle de Gandalf dans Le Seigneur des Anneaux ?",
    answers: ["Ian McKellen", "Ian Holm", "Christopher Lee", "Hugo Weaving", "Viggo Mortensen", "Orlando Bloom", "Sean Astin", "Elijah Wood", "Cate Blanchett", "Andy Serkis"],
    correctAnswer: "Ian McKellen"
  },
  {
    id: 130,
    categoryId: 2,
    question: "Quel film de 1997 met en scène un naufrage tragique dans l'Atlantique Nord ?",
    answers: ["Titanic", "Le Poseidon", "En pleine tempête", "Master and Commander", "Seul au monde", "Capitaine Phillips", "Waterworld", "La Tempête du siècle", "Le Bateau", "Ghost Ship"],
    correctAnswer: "Titanic"
  },
  {
    id: 131,
    categoryId: 2,
    question: "Quel acteur français a joué dans 'Le Grand Bleu' de Luc Besson ?",
    answers: ["Jean-Marc Barr", "Jean Reno", "Vincent Cassel", "Gérard Depardieu", "Jean-Paul Belmondo", "Alain Delon", "Omar Sy", "Guillaume Canet", "François Cluzet", "Mathieu Amalric"],
    correctAnswer: "Jean-Marc Barr"
  },
  {
    id: 132,
    categoryId: 2,
    question: "Quel film d'animation raconte l'histoire d'un poisson clown perdu ?",
    answers: ["Le Monde de Nemo", "Le Monde de Dory", "Shark Tale", "L'Âge de glace", "Madagascar", "Vaiana", "La Petite Sirène", "Ponyo", "Épave", "Atlantide"],
    correctAnswer: "Le Monde de Nemo"
  },
  {
    id: 133,
    categoryId: 2,
    question: "Quel réalisateur est connu pour ses plans-séquences dans 'Birdman' ?",
    answers: ["Alejandro González Iñárritu", "Alfonso Cuarón", "Guillermo del Toro", "Pedro Almodóvar", "Denis Villeneuve", "David Fincher", "Terrence Malick", "Paul Thomas Anderson", "Darren Aronofsky", "Damien Chazelle"],
    correctAnswer: "Alejandro González Iñárritu"
  },
  {
    id: 134,
    categoryId: 2,
    question: "Quel film de 2014 raconte une mission pour sauver l'humanité via un trou de ver ?",
    answers: ["Interstellar", "Gravity", "Seul sur Mars", "Arrival", "Ad Astra", "Passengers", "Solaris", "Moon", "Sunshine", "Europa Report"],
    correctAnswer: "Interstellar"
  },
  {
    id: 135,
    categoryId: 2,
    question: "Quel film culte de 1994 raconte les histoires entrelacées de criminels à Los Angeles ?",
    answers: ["Pulp Fiction", "Reservoir Dogs", "Les Affranchis", "Heat", "True Romance", "Léon", "Tueurs nés", "Seven", "L'Impasse", "Casino"],
    correctAnswer: "Pulp Fiction"
  },
  {
    id: 136,
    categoryId: 2,
    question: "Dans quel film voit-on un androïde rêver de moutons électriques ?",
    answers: ["Blade Runner", "Terminator", "I, Robot", "A.I.", "Ex Machina", "Ghost in the Shell", "Metropolis", "RoboCop", "Westworld", "Minority Report"],
    correctAnswer: "Blade Runner"
  },
  {
    id: 137,
    categoryId: 2,
    question: "Quel film de Denis Villeneuve adapte le roman de Frank Herbert ?",
    answers: ["Dune", "Arrival", "Blade Runner 2049", "Sicario", "Prisoners", "Incendies", "Enemy", "Polytechnique", "Maelström", "Un 32 août sur terre"],
    correctAnswer: "Dune"
  },
  {
    id: 138,
    categoryId: 2,
    question: "Quel personnage de film dit 'Je reviendrai' dans sa version originale ?",
    answers: ["Terminator", "Rambo", "Rocky", "James Bond", "John McClane", "RoboCop", "Mad Max", "Snake Plissken", "Conan", "Predator"],
    correctAnswer: "Terminator"
  },
  {
    id: 139,
    categoryId: 2,
    question: "Quel film muet de 2011 a remporté l'Oscar du meilleur film ?",
    answers: ["The Artist", "Hugo Cabret", "Le Discours d'un roi", "Midnight in Paris", "The Tree of Life", "Drive", "La Guerre des boutons", "Intouchables", "Polisse", "La Source des femmes"],
    correctAnswer: "The Artist"
  },
  {
    id: 140,
    categoryId: 2,
    question: "Quel réalisateur a réalisé 'La La Land' ?",
    answers: ["Damien Chazelle", "Wes Anderson", "Edgar Wright", "Denis Villeneuve", "David Fincher", "Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "Martin Scorsese", "Greta Gerwig"],
    correctAnswer: "Damien Chazelle"
  },

  // ============ NOUVELLES QUESTIONS SPORT (categoryId: 3) — IDs 141-180 ============
  {
    id: 141,
    categoryId: 3,
    question: "Quel footballeur a remporté le plus de Ballons d'Or ?",
    answers: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Johan Cruyff", "Zinédine Zidane", "Ronaldo Nazário", "Marco van Basten", "Karl-Heinz Rummenigge", "Luka Modrić", "Karim Benzema"],
    correctAnswer: "Lionel Messi"
  },
  {
    id: 142,
    categoryId: 3,
    question: "Combien de joueurs composent une équipe de rugby à XV sur le terrain ?",
    answers: ["15", "13", "11", "14", "16", "12", "10", "17", "18", "9"],
    correctAnswer: "15"
  },
  {
    id: 143,
    categoryId: 3,
    question: "Dans quel sport pratique-t-on le 'smash' ?",
    answers: ["Tennis", "Volleyball", "Badminton", "Ping-pong", "Squash", "Padel", "Cricket", "Baseball", "Handball", "Basketball"],
    correctAnswer: "Tennis"
  },
  {
    id: 144,
    categoryId: 3,
    question: "Quel pays a accueilli la Coupe du Monde de football en 1998 ?",
    answers: ["France", "Allemagne", "Japon", "Brésil", "Italie", "Espagne", "Angleterre", "Argentine", "Corée du Sud", "Mexique"],
    correctAnswer: "France"
  },
  {
    id: 145,
    categoryId: 3,
    question: "Quel sport se pratique sur un tatami ?",
    answers: ["Judo", "Boxe", "Karaté", "Lutte", "Taekwondo", "Escrime", "Aïkido", "Sumo", "Kung-fu", "Capoeira"],
    correctAnswer: "Judo"
  },
  {
    id: 146,
    categoryId: 3,
    question: "Combien de trous comporte un parcours de golf standard ?",
    answers: ["18", "9", "12", "16", "20", "15", "14", "21", "24", "10"],
    correctAnswer: "18"
  },
  {
    id: 147,
    categoryId: 3,
    question: "Quel tennisman a remporté le plus de tournois du Grand Chelem masculin ?",
    answers: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Pete Sampras", "Björn Borg", "Rod Laver", "Andre Agassi", "Jimmy Connors", "John McEnroe", "Ivan Lendl"],
    correctAnswer: "Novak Djokovic"
  },
  {
    id: 148,
    categoryId: 3,
    question: "Quelle est la distance d'un marathon ?",
    answers: ["42,195 km", "40 km", "45 km", "42 km", "41 km", "43 km", "38 km", "44 km", "39 km", "50 km"],
    correctAnswer: "42,195 km"
  },
  {
    id: 149,
    categoryId: 3,
    question: "Quel sport est surnommé 'le sport roi' ?",
    answers: ["Football", "Tennis", "Basketball", "Rugby", "Athlétisme", "Natation", "Cricket", "Baseball", "Golf", "Boxe"],
    correctAnswer: "Football"
  },
  {
    id: 150,
    categoryId: 3,
    question: "Quel cycliste a remporté le plus de Tours de France ?",
    answers: ["Jacques Anquetil, Eddy Merckx, Bernard Hinault et Miguel Indurain", "Lance Armstrong", "Chris Froome", "Tadej Pogačar", "Alberto Contador", "Greg LeMond", "Fausto Coppi", "Laurent Fignon", "Louison Bobet", "Bradley Wiggins"],
    correctAnswer: "Jacques Anquetil, Eddy Merckx, Bernard Hinault et Miguel Indurain"
  },
  {
    id: 151,
    categoryId: 3,
    question: "Quelle équipe nationale a remporté le plus de Coupes du Monde de football ?",
    answers: ["Brésil", "Allemagne", "Italie", "Argentine", "France", "Uruguay", "Espagne", "Angleterre", "Pays-Bas", "Portugal"],
    correctAnswer: "Brésil"
  },
  {
    id: 152,
    categoryId: 3,
    question: "Dans quel sport utilise-t-on un palet ?",
    answers: ["Hockey sur glace", "Hockey sur gazon", "Curling", "Crosse", "Football", "Handball", "Water-polo", "Rugby", "Polo", "Cricket"],
    correctAnswer: "Hockey sur glace"
  },
  {
    id: 153,
    categoryId: 3,
    question: "Quel boxeur est surnommé 'The Greatest' ?",
    answers: ["Mohamed Ali", "Mike Tyson", "Floyd Mayweather", "Manny Pacquiao", "Sugar Ray Leonard", "Joe Louis", "Rocky Marciano", "Lennox Lewis", "George Foreman", "Evander Holyfield"],
    correctAnswer: "Mohamed Ali"
  },
  {
    id: 154,
    categoryId: 3,
    question: "Quel sport se joue avec un ballon ovale et des essais ?",
    answers: ["Rugby", "Football américain", "Football australien", "Football gaélique", "Cricket", "Handball", "Water-polo", "Polo", "Lacrosse", "Baseball"],
    correctAnswer: "Rugby"
  },
  {
    id: 155,
    categoryId: 3,
    question: "Quel joueur de basketball est considéré comme le meilleur de tous les temps ?",
    answers: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Magic Johnson", "Larry Bird", "Kareem Abdul-Jabbar", "Wilt Chamberlain", "Shaquille O'Neal", "Tim Duncan", "Bill Russell"],
    correctAnswer: "Michael Jordan"
  },
  {
    id: 156,
    categoryId: 3,
    question: "Combien de périodes y a-t-il dans un match de hockey sur glace ?",
    answers: ["3", "2", "4", "5", "1", "6", "3 ou 4", "2 ou 3", "4 ou 5", "Pas de périodes"],
    correctAnswer: "3"
  },
  {
    id: 157,
    categoryId: 3,
    question: "Quel sport combine natation, cyclisme et course à pied ?",
    answers: ["Triathlon", "Décathlon", "Pentathlon", "Heptathlon", "Biathlon", "Duathlon", "Aquathlon", "Marathon", "Cross-country", "Ironman"],
    correctAnswer: "Triathlon"
  },
  {
    id: 158,
    categoryId: 3,
    question: "Dans quel pays le cricket est-il le sport national ?",
    answers: ["Inde", "Angleterre", "Australie", "Pakistan", "Afrique du Sud", "Sri Lanka", "Nouvelle-Zélande", "Bangladesh", "Jamaïque", "Zimbabwe"],
    correctAnswer: "Inde"
  },
  {
    id: 159,
    categoryId: 3,
    question: "Quel pilote de Formule 1 détient le record de titres de champion du monde ?",
    answers: ["Michael Schumacher et Lewis Hamilton", "Ayrton Senna", "Alain Prost", "Sebastian Vettel", "Max Verstappen", "Juan Manuel Fangio", "Fernando Alonso", "Niki Lauda", "Nelson Piquet", "Mika Häkkinen"],
    correctAnswer: "Michael Schumacher et Lewis Hamilton"
  },
  {
    id: 160,
    categoryId: 3,
    question: "Quel pays a remporté la première Coupe du Monde de football en 1930 ?",
    answers: ["Uruguay", "Argentine", "Brésil", "Italie", "Allemagne", "France", "Espagne", "Angleterre", "Pays-Bas", "Hongrie"],
    correctAnswer: "Uruguay"
  },
  {
    id: 161,
    categoryId: 3,
    question: "Quel sport est pratiqué par Tiger Woods ?",
    answers: ["Golf", "Tennis", "Basketball", "Baseball", "Football américain", "Boxe", "Athlétisme", "Natation", "Cricket", "Rugby"],
    correctAnswer: "Golf"
  },
  {
    id: 162,
    categoryId: 3,
    question: "Combien de manches comporte un match de baseball professionnel ?",
    answers: ["9", "7", "8", "10", "6", "5", "11", "12", "4", "3"],
    correctAnswer: "9"
  },
  {
    id: 163,
    categoryId: 3,
    question: "Quel sport olympique se pratique avec un fleuret ?",
    answers: ["Escrime", "Judo", "Boxe", "Lutte", "Tir à l'arc", "Pentathlon moderne", "Karaté", "Taekwondo", "Gymnastique", "Aviron"],
    correctAnswer: "Escrime"
  },
  {
    id: 164,
    categoryId: 3,
    question: "Quelle ville a accueilli les Jeux Olympiques d'été en 2024 ?",
    answers: ["Paris", "Los Angeles", "Tokyo", "Londres", "Pékin", "Rio de Janeiro", "Sydney", "Athènes", "Barcelone", "Berlin"],
    correctAnswer: "Paris"
  },
  {
    id: 165,
    categoryId: 3,
    question: "Quel footballeur est surnommé 'CR7' ?",
    answers: ["Cristiano Ronaldo", "Carlos Roa", "Clarence Reedijk", "César Rodríguez", "Christian Ramos", "Cafu Ribeiro", "Cássio Ramos", "Clément Ripart", "Cheick Rouamba", "Cyril Rool"],
    correctAnswer: "Cristiano Ronaldo"
  },
  {
    id: 166,
    categoryId: 3,
    question: "Quel sport de glisse se pratique sur une planche dans les vagues ?",
    answers: ["Surf", "Snowboard", "Skateboard", "Wakeboard", "Kitesurf", "Windsurf", "Bodyboard", "Longboard", "Stand-up paddle", "Ski nautique"],
    correctAnswer: "Surf"
  },
  {
    id: 167,
    categoryId: 3,
    question: "Dans quel sport lance-t-on un javelot ?",
    answers: ["Athlétisme", "Pentathlon", "Décathlon", "Lancer de poids", "Tir à l'arc", "Escrime", "Cricket", "Baseball", "Rugby", "Handball"],
    correctAnswer: "Athlétisme"
  },
  {
    id: 168,
    categoryId: 3,
    question: "Quel est le nombre maximum de joueurs dans une équipe de volleyball sur le terrain ?",
    answers: ["6", "5", "7", "8", "4", "9", "10", "11", "12", "3"],
    correctAnswer: "6"
  },
  {
    id: 169,
    categoryId: 3,
    question: "Quel athlète jamaïcain est surnommé 'Lightning Bolt' ?",
    answers: ["Usain Bolt", "Asafa Powell", "Yohan Blake", "Shelly-Ann Fraser-Pryce", "Elaine Thompson", "Nesta Carter", "Veronica Campbell", "Warren Weir", "Don Quarrie", "Ben Johnson"],
    correctAnswer: "Usain Bolt"
  },
  {
    id: 170,
    categoryId: 3,
    question: "Dans quel sport les joueurs portent-ils des raquettes et un volant ?",
    answers: ["Badminton", "Tennis", "Squash", "Padel", "Pelote basque", "Tennis de table", "Racquetball", "Cricket", "Baseball", "Lacrosse"],
    correctAnswer: "Badminton"
  },
  {
    id: 171,
    categoryId: 3,
    question: "Quel pays a le plus de médailles d'or olympiques de tous les temps ?",
    answers: ["États-Unis", "URSS/Russie", "Chine", "Allemagne", "Royaume-Uni", "France", "Italie", "Japon", "Australie", "Suède"],
    correctAnswer: "États-Unis"
  },
  {
    id: 172,
    categoryId: 3,
    question: "Combien de joueurs composent une équipe de basketball sur le terrain ?",
    answers: ["5", "6", "7", "4", "8", "9", "10", "11", "3", "12"],
    correctAnswer: "5"
  },
  {
    id: 173,
    categoryId: 3,
    question: "Quel sport se pratique dans une piscine avec un ballon et des buts ?",
    answers: ["Water-polo", "Natation synchronisée", "Plongeon", "Surf", "Kayak-polo", "Aviron", "Voile", "Canoë", "Rafting", "Natation"],
    correctAnswer: "Water-polo"
  },
  {
    id: 174,
    categoryId: 3,
    question: "Quel joueur de tennis français a remporté Roland-Garros en 1983 ?",
    answers: ["Yannick Noah", "Henri Leconte", "Guy Forget", "Cédric Pioline", "Jo-Wilfried Tsonga", "Gaël Monfils", "Richard Gasquet", "Sébastien Grosjean", "Arnaud Clément", "Paul-Henri Mathieu"],
    correctAnswer: "Yannick Noah"
  },
  {
    id: 175,
    categoryId: 3,
    question: "Quel est le sport national du Japon ?",
    answers: ["Sumo", "Judo", "Karaté", "Kendo", "Baseball", "Football", "Aïkido", "Rugby", "Tennis", "Gymnastique"],
    correctAnswer: "Sumo"
  },
  {
    id: 176,
    categoryId: 3,
    question: "Combien de temps dure un match de football réglementaire (hors prolongations) ?",
    answers: ["90 minutes", "80 minutes", "100 minutes", "120 minutes", "60 minutes", "70 minutes", "75 minutes", "85 minutes", "95 minutes", "110 minutes"],
    correctAnswer: "90 minutes"
  },
  {
    id: 177,
    categoryId: 3,
    question: "Quel athlète éthiopien a remporté le marathon olympique pieds nus en 1960 ?",
    answers: ["Abebe Bikila", "Haile Gebrselassie", "Kenenisa Bekele", "Mamo Wolde", "Derartu Tulu", "Miruts Yifter", "Tirunesh Dibaba", "Sileshi Sihine", "Meseret Defar", "Gebre Gebremariam"],
    correctAnswer: "Abebe Bikila"
  },
  {
    id: 178,
    categoryId: 3,
    question: "Quel sport utilise les termes 'birdie', 'eagle' et 'bogey' ?",
    answers: ["Golf", "Tennis", "Badminton", "Cricket", "Baseball", "Bowling", "Squash", "Polo", "Fléchettes", "Pétanque"],
    correctAnswer: "Golf"
  },
  {
    id: 179,
    categoryId: 3,
    question: "Quel handballeur français est considéré comme le meilleur de l'histoire ?",
    answers: ["Nikola Karabatić", "Thierry Omeyer", "Jackson Richardson", "Luc Abalo", "Michaël Guigou", "Daniel Narcisse", "Cédric Sorhaindo", "Didier Dinart", "Guillaume Gille", "Jérôme Fernandez"],
    correctAnswer: "Nikola Karabatić"
  },
  {
    id: 180,
    categoryId: 3,
    question: "Quel sport d'hiver combine ski de fond et tir à la carabine ?",
    answers: ["Biathlon", "Pentathlon", "Triathlon", "Combiné nordique", "Ski alpin", "Ski de fond", "Saut à ski", "Bobsleigh", "Luge", "Patinage"],
    correctAnswer: "Biathlon"
  },

  // ============ NOUVELLES QUESTIONS SCIENCES (categoryId: 4) — IDs 181-220 ============
  {
    id: 181,
    categoryId: 4,
    question: "Quelle est la formule chimique de l'eau ?",
    answers: ["H2O", "CO2", "NaCl", "O2", "H2O2", "CH4", "NH3", "SO2", "HCl", "NO2"],
    correctAnswer: "H2O"
  },
  {
    id: 182,
    categoryId: 4,
    question: "Quel organe produit l'insuline ?",
    answers: ["Le pancréas", "Le foie", "Les reins", "L'estomac", "La thyroïde", "La rate", "Les surrénales", "L'hypophyse", "Le thymus", "La vésicule biliaire"],
    correctAnswer: "Le pancréas"
  },
  {
    id: 183,
    categoryId: 4,
    question: "Quel est le métal le plus abondant dans la croûte terrestre ?",
    answers: ["Aluminium", "Fer", "Cuivre", "Or", "Argent", "Zinc", "Titane", "Magnésium", "Sodium", "Calcium"],
    correctAnswer: "Aluminium"
  },
  {
    id: 184,
    categoryId: 4,
    question: "Combien de planètes composent le système solaire ?",
    answers: ["8", "9", "7", "10", "6", "11", "12", "5", "13", "14"],
    correctAnswer: "8"
  },
  {
    id: 185,
    categoryId: 4,
    question: "Quel physicien a formulé les trois lois du mouvement ?",
    answers: ["Isaac Newton", "Albert Einstein", "Galilée", "Nikola Tesla", "James Maxwell", "Michael Faraday", "Robert Hooke", "Blaise Pascal", "Archimède", "Leibniz"],
    correctAnswer: "Isaac Newton"
  },
  {
    id: 186,
    categoryId: 4,
    question: "Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
    answers: ["Azote", "Oxygène", "Dioxyde de carbone", "Argon", "Hélium", "Néon", "Hydrogène", "Méthane", "Ozone", "Krypton"],
    correctAnswer: "Azote"
  },
  {
    id: 187,
    categoryId: 4,
    question: "Quelle particule subatomique a une charge positive ?",
    answers: ["Proton", "Électron", "Neutron", "Photon", "Positron", "Neutrino", "Muon", "Quark", "Boson", "Gluon"],
    correctAnswer: "Proton"
  },
  {
    id: 188,
    categoryId: 4,
    question: "Quel scientifique a découvert la radioactivité ?",
    answers: ["Henri Becquerel", "Marie Curie", "Pierre Curie", "Ernest Rutherford", "Niels Bohr", "Wilhelm Röntgen", "Max Planck", "Enrico Fermi", "Irène Joliot-Curie", "Lise Meitner"],
    correctAnswer: "Henri Becquerel"
  },
  {
    id: 189,
    categoryId: 4,
    question: "Quel est le plus grand animal vivant sur Terre ?",
    answers: ["La baleine bleue", "L'éléphant d'Afrique", "La girafe", "Le requin-baleine", "Le cachalot", "Le calmar géant", "Le rorqual commun", "L'ours polaire", "L'hippopotame", "Le crocodile marin"],
    correctAnswer: "La baleine bleue"
  },
  {
    id: 190,
    categoryId: 4,
    question: "Quel acide se trouve dans l'estomac humain ?",
    answers: ["Acide chlorhydrique", "Acide sulfurique", "Acide citrique", "Acide acétique", "Acide phosphorique", "Acide nitrique", "Acide lactique", "Acide formique", "Acide urique", "Acide oxalique"],
    correctAnswer: "Acide chlorhydrique"
  },
  {
    id: 191,
    categoryId: 4,
    question: "Quelle est l'unité de mesure de la force ?",
    answers: ["Newton", "Joule", "Watt", "Pascal", "Hertz", "Ampère", "Volt", "Ohm", "Tesla", "Kelvin"],
    correctAnswer: "Newton"
  },
  {
    id: 192,
    categoryId: 4,
    question: "Quel est le nombre d'Avogadro (approximativement) ?",
    answers: ["6,022 × 10²³", "3,14 × 10²³", "1,602 × 10¹⁹", "9,81 × 10²³", "2,998 × 10⁸", "8,314 × 10²³", "6,674 × 10¹¹", "1,381 × 10²³", "5,670 × 10⁸", "4,186 × 10²³"],
    correctAnswer: "6,022 × 10²³"
  },
  {
    id: 193,
    categoryId: 4,
    question: "Quel type de roche est formé par la solidification du magma ?",
    answers: ["Roche ignée", "Roche sédimentaire", "Roche métamorphique", "Roche calcaire", "Roche granitique", "Roche volcanique", "Roche cristalline", "Roche fossile", "Roche basaltique", "Roche siliceuse"],
    correctAnswer: "Roche ignée"
  },
  {
    id: 194,
    categoryId: 4,
    question: "Quel est le processus par lequel les cellules se divisent en deux ?",
    answers: ["Mitose", "Méiose", "Osmose", "Photosynthèse", "Fermentation", "Transcription", "Traduction", "Réplication", "Apoptose", "Cytokinèse"],
    correctAnswer: "Mitose"
  },
  {
    id: 195,
    categoryId: 4,
    question: "Quelle molécule porte l'information génétique ?",
    answers: ["ADN", "ARN", "ATP", "ADP", "Protéine", "Lipide", "Glucide", "Enzyme", "Hormone", "Anticorps"],
    correctAnswer: "ADN"
  },
  {
    id: 196,
    categoryId: 4,
    question: "Quel est le point d'ébullition de l'eau au niveau de la mer ?",
    answers: ["100°C", "90°C", "110°C", "80°C", "120°C", "95°C", "105°C", "85°C", "115°C", "75°C"],
    correctAnswer: "100°C"
  },
  {
    id: 197,
    categoryId: 4,
    question: "Quel gaz est responsable de l'effet de serre ?",
    answers: ["Dioxyde de carbone", "Oxygène", "Azote", "Hélium", "Néon", "Argon", "Krypton", "Xénon", "Radon", "Hydrogène"],
    correctAnswer: "Dioxyde de carbone"
  },
  {
    id: 198,
    categoryId: 4,
    question: "Quel scientifique a proposé la théorie de l'évolution par sélection naturelle ?",
    answers: ["Charles Darwin", "Jean-Baptiste Lamarck", "Gregor Mendel", "Alfred Wallace", "Louis Pasteur", "Thomas Huxley", "Ernst Haeckel", "Carl Linné", "Georges Cuvier", "Stephen Jay Gould"],
    correctAnswer: "Charles Darwin"
  },
  {
    id: 199,
    categoryId: 4,
    question: "Quel est le symbole chimique du sodium ?",
    answers: ["Na", "So", "Sd", "S", "No", "Nm", "Sa", "Si", "Sn", "Ni"],
    correctAnswer: "Na"
  },
  {
    id: 200,
    categoryId: 4,
    question: "Quelle est la planète la plus proche du Soleil ?",
    answers: ["Mercure", "Vénus", "Terre", "Mars", "Jupiter", "Saturne", "Uranus", "Neptune", "Pluton", "Cérès"],
    correctAnswer: "Mercure"
  },
  {
    id: 201,
    categoryId: 4,
    question: "Quel est le tableau périodique des éléments classé par ?",
    answers: ["Numéro atomique", "Masse atomique", "Électronégativité", "Nombre de neutrons", "Rayon atomique", "Point de fusion", "Densité", "Conductivité", "Valence", "Abondance"],
    correctAnswer: "Numéro atomique"
  },
  {
    id: 202,
    categoryId: 4,
    question: "Quelle force maintient les planètes en orbite autour du Soleil ?",
    answers: ["La gravité", "La force électromagnétique", "La force nucléaire forte", "La force nucléaire faible", "La force centrifuge", "La force de Coriolis", "La force de frottement", "La tension", "La pression", "L'inertie"],
    correctAnswer: "La gravité"
  },
  {
    id: 203,
    categoryId: 4,
    question: "Combien de litres de sang y a-t-il en moyenne dans le corps humain adulte ?",
    answers: ["5 litres", "3 litres", "7 litres", "10 litres", "4 litres", "6 litres", "8 litres", "2 litres", "9 litres", "12 litres"],
    correctAnswer: "5 litres"
  },
  {
    id: 204,
    categoryId: 4,
    question: "Quel scientifique a inventé le vaccin contre la rage ?",
    answers: ["Louis Pasteur", "Edward Jenner", "Alexander Fleming", "Robert Koch", "Jonas Salk", "Albert Sabin", "Paul Ehrlich", "Emil von Behring", "Joseph Lister", "Ignaz Semmelweis"],
    correctAnswer: "Louis Pasteur"
  },
  {
    id: 205,
    categoryId: 4,
    question: "Quel est l'élément le plus léger du tableau périodique ?",
    answers: ["Hydrogène", "Hélium", "Lithium", "Bore", "Carbone", "Azote", "Oxygène", "Fluor", "Néon", "Béryllium"],
    correctAnswer: "Hydrogène"
  },
  {
    id: 206,
    categoryId: 4,
    question: "Quelle est la couche de l'atmosphère la plus proche de la Terre ?",
    answers: ["Troposphère", "Stratosphère", "Mésosphère", "Thermosphère", "Exosphère", "Ionosphère", "Magnétosphère", "Ozonosphère", "Lithosphère", "Hydrosphère"],
    correctAnswer: "Troposphère"
  },
  {
    id: 207,
    categoryId: 4,
    question: "Quel phénomène optique décompose la lumière blanche en arc-en-ciel ?",
    answers: ["La réfraction", "La réflexion", "La diffraction", "L'absorption", "La polarisation", "L'interférence", "La dispersion", "La diffusion", "La fluorescence", "La phosphorescence"],
    correctAnswer: "La réfraction"
  },
  {
    id: 208,
    categoryId: 4,
    question: "Quel est le nom de la galaxie dans laquelle se trouve la Terre ?",
    answers: ["La Voie lactée", "Andromède", "Le Grand Nuage de Magellan", "La galaxie du Triangle", "La galaxie du Sombrero", "La galaxie du Tourbillon", "La galaxie d'Orion", "La galaxie Centaurus", "La galaxie du Sculpteur", "La galaxie des Antennes"],
    correctAnswer: "La Voie lactée"
  },
  {
    id: 209,
    categoryId: 4,
    question: "Quel est le symbole chimique du fer ?",
    answers: ["Fe", "Fr", "Fi", "Ir", "F", "Fa", "Fl", "Fm", "Fb", "Fc"],
    correctAnswer: "Fe"
  },
  {
    id: 210,
    categoryId: 4,
    question: "Combien de paires de nerfs crâniens possède l'être humain ?",
    answers: ["12", "10", "14", "8", "16", "6", "20", "24", "15", "11"],
    correctAnswer: "12"
  },
  {
    id: 211,
    categoryId: 4,
    question: "Quel état de la matière n'a ni forme ni volume propre ?",
    answers: ["Gaz", "Liquide", "Solide", "Plasma", "Condensat de Bose-Einstein", "Superfluide", "Cristal liquide", "Colloïde", "Gel", "Mousse"],
    correctAnswer: "Gaz"
  },
  {
    id: 212,
    categoryId: 4,
    question: "Qui a découvert les rayons X ?",
    answers: ["Wilhelm Röntgen", "Henri Becquerel", "Marie Curie", "Max Planck", "Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "Louis de Broglie", "Werner Heisenberg", "Paul Dirac"],
    correctAnswer: "Wilhelm Röntgen"
  },
  {
    id: 213,
    categoryId: 4,
    question: "Quelle est la température du zéro absolu en degrés Celsius ?",
    answers: ["-273,15°C", "-200°C", "-300°C", "-250°C", "-100°C", "-400°C", "-175°C", "-325°C", "-260°C", "-450°C"],
    correctAnswer: "-273,15°C"
  },
  {
    id: 214,
    categoryId: 4,
    question: "Quel organe filtre le sang et produit l'urine ?",
    answers: ["Les reins", "Le foie", "La rate", "Le pancréas", "La vessie", "Les surrénales", "L'intestin", "L'estomac", "Le cœur", "Les poumons"],
    correctAnswer: "Les reins"
  },
  {
    id: 215,
    categoryId: 4,
    question: "Quel phénomène géologique provoque les tremblements de terre ?",
    answers: ["La tectonique des plaques", "L'érosion", "Le volcanisme", "La marée", "Le magnétisme terrestre", "La rotation de la Terre", "Les courants océaniques", "Le vent solaire", "La gravité lunaire", "L'effet de serre"],
    correctAnswer: "La tectonique des plaques"
  },
  {
    id: 216,
    categoryId: 4,
    question: "Quel est le nombre de protons dans un atome de carbone ?",
    answers: ["6", "8", "12", "4", "14", "7", "10", "2", "16", "5"],
    correctAnswer: "6"
  },
  {
    id: 217,
    categoryId: 4,
    question: "Quelle lentille est utilisée pour corriger la myopie ?",
    answers: ["Lentille divergente", "Lentille convergente", "Lentille biconvexe", "Lentille plan-convexe", "Lentille cylindrique", "Lentille asphérique", "Lentille prismatique", "Lentille torique", "Lentille de Fresnel", "Lentille multifocale"],
    correctAnswer: "Lentille divergente"
  },
  {
    id: 218,
    categoryId: 4,
    question: "Quel est l'os le plus long du corps humain ?",
    answers: ["Le fémur", "Le tibia", "L'humérus", "Le radius", "Le péroné", "Le cubitus", "Le sternum", "La clavicule", "L'omoplate", "Le bassin"],
    correctAnswer: "Le fémur"
  },
  {
    id: 219,
    categoryId: 4,
    question: "Quel scientifique a formulé la loi de la gravitation universelle ?",
    answers: ["Isaac Newton", "Albert Einstein", "Galilée", "Johannes Kepler", "Tycho Brahe", "Robert Hooke", "Gottfried Leibniz", "Christiaan Huygens", "Blaise Pascal", "René Descartes"],
    correctAnswer: "Isaac Newton"
  },
  {
    id: 220,
    categoryId: 4,
    question: "Quel est le processus de transformation d'un gaz en liquide ?",
    answers: ["Condensation", "Évaporation", "Sublimation", "Solidification", "Fusion", "Vaporisation", "Déposition", "Ionisation", "Cristallisation", "Liquéfaction"],
    correctAnswer: "Condensation"
  },

  // ============ NOUVELLES QUESTIONS GÉOGRAPHIE (categoryId: 5) — IDs 221-260 ============
  {
    id: 221,
    categoryId: 5,
    question: "Quelle est la capitale du Japon ?",
    answers: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya", "Sapporo", "Kobe", "Hiroshima", "Fukuoka", "Sendai"],
    correctAnswer: "Tokyo"
  },
  {
    id: 222,
    categoryId: 5,
    question: "Quel est le plus grand pays du monde par superficie ?",
    answers: ["Russie", "Canada", "Chine", "États-Unis", "Brésil", "Australie", "Inde", "Argentine", "Kazakhstan", "Algérie"],
    correctAnswer: "Russie"
  },
  {
    id: 223,
    categoryId: 5,
    question: "Quel fleuve traverse Paris ?",
    answers: ["La Seine", "La Loire", "Le Rhône", "La Garonne", "Le Rhin", "La Marne", "L'Oise", "La Meuse", "La Somme", "Le Doubs"],
    correctAnswer: "La Seine"
  },
  {
    id: 224,
    categoryId: 5,
    question: "Sur quel continent se trouve le Kilimandjaro ?",
    answers: ["Afrique", "Asie", "Amérique du Sud", "Europe", "Océanie", "Amérique du Nord", "Antarctique", "Moyen-Orient", "Asie centrale", "Caucase"],
    correctAnswer: "Afrique"
  },
  {
    id: 225,
    categoryId: 5,
    question: "Quelle est la capitale du Brésil ?",
    answers: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador", "Recife", "Belo Horizonte", "Porto Alegre", "Manaus", "Curitiba", "Fortaleza"],
    correctAnswer: "Brasília"
  },
  {
    id: 226,
    categoryId: 5,
    question: "Quel détroit sépare l'Europe de l'Afrique ?",
    answers: ["Le détroit de Gibraltar", "Le détroit du Bosphore", "Le détroit de Malacca", "Le détroit de Magellan", "Le détroit de Béring", "Le détroit d'Ormuz", "Le détroit de Messine", "Le détroit de Formose", "Le détroit de Davis", "Le détroit de Cook"],
    correctAnswer: "Le détroit de Gibraltar"
  },
  {
    id: 227,
    categoryId: 5,
    question: "Quelle mer borde la Côte d'Azur française ?",
    answers: ["La mer Méditerranée", "L'océan Atlantique", "La Manche", "La mer du Nord", "La mer Adriatique", "La mer Tyrrhénienne", "La mer Égée", "La mer Noire", "La mer Baltique", "La mer Rouge"],
    correctAnswer: "La mer Méditerranée"
  },
  {
    id: 228,
    categoryId: 5,
    question: "Quel pays est surnommé le 'pays du Soleil-Levant' ?",
    answers: ["Japon", "Chine", "Corée du Sud", "Thaïlande", "Vietnam", "Inde", "Philippines", "Indonésie", "Myanmar", "Taïwan"],
    correctAnswer: "Japon"
  },
  {
    id: 229,
    categoryId: 5,
    question: "Quelle est la plus grande île du monde ?",
    answers: ["Groenland", "Nouvelle-Guinée", "Bornéo", "Madagascar", "Sumatra", "Grande-Bretagne", "Honshu", "Java", "Islande", "Cuba"],
    correctAnswer: "Groenland"
  },
  {
    id: 230,
    categoryId: 5,
    question: "Quelle est la capitale de l'Égypte ?",
    answers: ["Le Caire", "Alexandrie", "Louxor", "Assouan", "Charm el-Cheikh", "Gizeh", "Port-Saïd", "Suez", "Hurghada", "Marsa Alam"],
    correctAnswer: "Le Caire"
  },
  {
    id: 231,
    categoryId: 5,
    question: "Quel pays a la forme d'une botte ?",
    answers: ["L'Italie", "L'Espagne", "La Grèce", "Le Portugal", "La Croatie", "La Turquie", "La France", "L'Albanie", "La Slovénie", "Le Monténégro"],
    correctAnswer: "L'Italie"
  },
  {
    id: 232,
    categoryId: 5,
    question: "Quel est le plus long mur du monde ?",
    answers: ["La Grande Muraille de Chine", "Le mur de Berlin", "Le mur d'Hadrien", "Le mur des Lamentations", "Le mur d'Antonin", "Les murailles de Constantinople", "Le mur de Troie", "Les murailles de Carcassonne", "Le mur d'enceinte de Paris", "Le mur de Servius"],
    correctAnswer: "La Grande Muraille de Chine"
  },
  {
    id: 233,
    categoryId: 5,
    question: "Quelle est la capitale de la Turquie ?",
    answers: ["Ankara", "Istanbul", "Izmir", "Antalya", "Bursa", "Adana", "Konya", "Trabzon", "Gaziantep", "Diyarbakır"],
    correctAnswer: "Ankara"
  },
  {
    id: 234,
    categoryId: 5,
    question: "Quel pays possède le plus de fuseaux horaires ?",
    answers: ["France", "Russie", "États-Unis", "Canada", "Chine", "Australie", "Brésil", "Inde", "Royaume-Uni", "Indonésie"],
    correctAnswer: "France"
  },
  {
    id: 235,
    categoryId: 5,
    question: "Quel lac est le plus profond du monde ?",
    answers: ["Le lac Baïkal", "Le lac Tanganyika", "Le lac Supérieur", "Le lac Victoria", "Le lac Titicaca", "Le lac Michigan", "Le lac Ladoga", "Le lac Malawi", "Le lac Érié", "Le lac Ontario"],
    correctAnswer: "Le lac Baïkal"
  },
  {
    id: 236,
    categoryId: 5,
    question: "Quelle est la capitale de l'Argentine ?",
    answers: ["Buenos Aires", "Santiago", "Montevideo", "Lima", "Bogotá", "Caracas", "La Paz", "Quito", "Asunción", "Brasília"],
    correctAnswer: "Buenos Aires"
  },
  {
    id: 237,
    categoryId: 5,
    question: "Quel pays africain a pour capitale Nairobi ?",
    answers: ["Kenya", "Tanzanie", "Ouganda", "Éthiopie", "Somalie", "Rwanda", "Mozambique", "Madagascar", "Soudan", "Nigéria"],
    correctAnswer: "Kenya"
  },
  {
    id: 238,
    categoryId: 5,
    question: "Quel canal relie la mer Méditerranée à la mer Rouge ?",
    answers: ["Le canal de Suez", "Le canal de Panama", "Le canal de Corinthe", "Le canal de Kiel", "Le canal de la Manche", "Le canal Érié", "Le canal du Midi", "Le canal Albert", "Le canal de Mozambique", "Le canal de Beagle"],
    correctAnswer: "Le canal de Suez"
  },
  {
    id: 239,
    categoryId: 5,
    question: "Quelle est la capitale de la Norvège ?",
    answers: ["Oslo", "Stockholm", "Helsinki", "Copenhague", "Reykjavik", "Bergen", "Trondheim", "Stavanger", "Tromsø", "Göteborg"],
    correctAnswer: "Oslo"
  },
  {
    id: 240,
    categoryId: 5,
    question: "Quel pays est traversé par l'équateur ET par le méridien de Greenwich ?",
    answers: ["Ghana", "Gabon", "Congo", "Cameroun", "Nigéria", "Togo", "Bénin", "Côte d'Ivoire", "Burkina Faso", "Guinée équatoriale"],
    correctAnswer: "Ghana"
  },
  {
    id: 241,
    categoryId: 5,
    question: "Quelle chaîne de montagnes sépare la France de l'Espagne ?",
    answers: ["Les Pyrénées", "Les Alpes", "Le Jura", "Les Vosges", "Le Massif central", "Les Carpates", "Les Apennins", "L'Atlas", "Les Andes", "L'Oural"],
    correctAnswer: "Les Pyrénées"
  },
  {
    id: 242,
    categoryId: 5,
    question: "Quelle est la capitale de la Thaïlande ?",
    answers: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya", "Krabi", "Koh Samui", "Chiang Rai", "Ayutthaya", "Sukhothaï", "Hua Hin"],
    correctAnswer: "Bangkok"
  },
  {
    id: 243,
    categoryId: 5,
    question: "Quel est le plus petit continent ?",
    answers: ["Océanie", "Europe", "Antarctique", "Amérique du Sud", "Afrique", "Asie", "Amérique du Nord", "Australie", "Arctique", "Groenland"],
    correctAnswer: "Océanie"
  },
  {
    id: 244,
    categoryId: 5,
    question: "Quel pays est le plus grand producteur de café au monde ?",
    answers: ["Brésil", "Colombie", "Vietnam", "Éthiopie", "Indonésie", "Honduras", "Inde", "Mexique", "Guatemala", "Pérou"],
    correctAnswer: "Brésil"
  },
  {
    id: 245,
    categoryId: 5,
    question: "Quelle ville est surnommée 'la ville éternelle' ?",
    answers: ["Rome", "Athènes", "Paris", "Istanbul", "Jérusalem", "Le Caire", "Pékin", "Lisbonne", "Vienne", "Prague"],
    correctAnswer: "Rome"
  },
  {
    id: 246,
    categoryId: 5,
    question: "Quel pays a pour capitale Canberra ?",
    answers: ["Australie", "Nouvelle-Zélande", "Canada", "Afrique du Sud", "Inde", "Brésil", "Argentine", "Mexique", "Chili", "Japon"],
    correctAnswer: "Australie"
  },
  {
    id: 247,
    categoryId: 5,
    question: "Quel est le volcan le plus actif d'Europe ?",
    answers: ["L'Etna", "Le Vésuve", "Le Stromboli", "Le Piton de la Fournaise", "L'Eyjafjallajökull", "Le Hekla", "Le Santorin", "Le Teide", "Le Puy de Dôme", "Le Vatnajökull"],
    correctAnswer: "L'Etna"
  },
  {
    id: 248,
    categoryId: 5,
    question: "Quelle est la capitale du Maroc ?",
    answers: ["Rabat", "Casablanca", "Marrakech", "Fès", "Tanger", "Agadir", "Meknès", "Essaouira", "Ouarzazate", "Tétouan"],
    correctAnswer: "Rabat"
  },
  {
    id: 249,
    categoryId: 5,
    question: "Quel pays est composé de plus de 17 000 îles ?",
    answers: ["Indonésie", "Philippines", "Japon", "Maldives", "Grèce", "Fidji", "Bahamas", "Tonga", "Micronésie", "Polynésie française"],
    correctAnswer: "Indonésie"
  },
  {
    id: 250,
    categoryId: 5,
    question: "Quelle rivière traverse Londres ?",
    answers: ["La Tamise", "La Seine", "Le Danube", "Le Tibre", "L'Elbe", "La Spree", "La Vltava", "Le Tage", "La Neva", "Le Rhin"],
    correctAnswer: "La Tamise"
  },
  {
    id: 251,
    categoryId: 5,
    question: "Quel désert se trouve en Amérique du Sud ?",
    answers: ["Le désert d'Atacama", "Le Sahara", "Le Gobi", "Le Kalahari", "Le Namib", "Le désert de Sonora", "Le désert de Mojave", "Le désert du Thar", "Le Taklamakan", "Le Karakoum"],
    correctAnswer: "Le désert d'Atacama"
  },
  {
    id: 252,
    categoryId: 5,
    question: "Quelle est la capitale de la Pologne ?",
    answers: ["Varsovie", "Cracovie", "Gdańsk", "Wrocław", "Poznań", "Łódź", "Katowice", "Szczecin", "Lublin", "Bydgoszcz"],
    correctAnswer: "Varsovie"
  },
  {
    id: 253,
    categoryId: 5,
    question: "Quel pays africain est le plus peuplé ?",
    answers: ["Nigéria", "Éthiopie", "Égypte", "République démocratique du Congo", "Afrique du Sud", "Tanzanie", "Kenya", "Algérie", "Soudan", "Ouganda"],
    correctAnswer: "Nigéria"
  },
  {
    id: 254,
    categoryId: 5,
    question: "Quelle chaîne de montagnes s'étend le long de la côte ouest de l'Amérique du Sud ?",
    answers: ["Les Andes", "Les Rocheuses", "L'Himalaya", "Les Alpes", "Les Appalaches", "Les Carpates", "L'Atlas", "L'Oural", "Le Caucase", "La Sierra Madre"],
    correctAnswer: "Les Andes"
  },
  {
    id: 255,
    categoryId: 5,
    question: "Quelle est la capitale de l'Inde ?",
    answers: ["New Delhi", "Mumbai", "Calcutta", "Bangalore", "Chennai", "Hyderabad", "Ahmedabad", "Pune", "Jaipur", "Lucknow"],
    correctAnswer: "New Delhi"
  },
  {
    id: 256,
    categoryId: 5,
    question: "Quel pays est situé entre la France et l'Espagne ?",
    answers: ["Andorre", "Monaco", "Luxembourg", "Liechtenstein", "Saint-Marin", "Gibraltar", "Pays basque", "Catalogne", "Navarre", "Aragon"],
    correctAnswer: "Andorre"
  },
  {
    id: 257,
    categoryId: 5,
    question: "Quelle est la mer intérieure la plus grande du monde ?",
    answers: ["La mer Caspienne", "La mer Méditerranée", "La mer Noire", "La mer Rouge", "La mer Baltique", "La mer d'Aral", "Le lac Victoria", "Le lac Supérieur", "La mer des Caraïbes", "La mer de Chine méridionale"],
    correctAnswer: "La mer Caspienne"
  },
  {
    id: 258,
    categoryId: 5,
    question: "Quelle est la capitale de la Suisse ?",
    answers: ["Berne", "Zurich", "Genève", "Lausanne", "Bâle", "Lucerne", "Lugano", "Interlaken", "Saint-Gall", "Fribourg"],
    correctAnswer: "Berne"
  },
  {
    id: 259,
    categoryId: 5,
    question: "Quel pays est le plus grand d'Afrique par superficie ?",
    answers: ["Algérie", "République démocratique du Congo", "Soudan", "Libye", "Tchad", "Niger", "Angola", "Mali", "Afrique du Sud", "Éthiopie"],
    correctAnswer: "Algérie"
  },
  {
    id: 260,
    categoryId: 5,
    question: "Quelle ville est construite sur 118 îles et parcourue de canaux ?",
    answers: ["Venise", "Amsterdam", "Bruges", "Stockholm", "Saint-Pétersbourg", "Bangkok", "Copenhague", "Hambourg", "Giethoorn", "Suzhou"],
    correctAnswer: "Venise"
  },

  // ============ NOUVELLES QUESTIONS MUSIQUE (categoryId: 6) — IDs 261-300 ============
  {
    id: 261,
    categoryId: 6,
    question: "Quel compositeur autrichien a composé 'La Flûte enchantée' ?",
    answers: ["Mozart", "Beethoven", "Haydn", "Schubert", "Strauss", "Brahms", "Wagner", "Mahler", "Bruckner", "Liszt"],
    correctAnswer: "Mozart"
  },
  {
    id: 262,
    categoryId: 6,
    question: "Quel groupe britannique a sorti l'album 'Abbey Road' ?",
    answers: ["The Beatles", "The Rolling Stones", "Led Zeppelin", "Pink Floyd", "The Who", "The Kinks", "Cream", "The Yardbirds", "The Animals", "The Hollies"],
    correctAnswer: "The Beatles"
  },
  {
    id: 263,
    categoryId: 6,
    question: "Quel chanteur français est connu pour la chanson 'Ne me quitte pas' ?",
    answers: ["Jacques Brel", "Charles Aznavour", "Georges Brassens", "Édith Piaf", "Serge Gainsbourg", "Léo Ferré", "Claude François", "Michel Sardou", "Johnny Hallyday", "Jean-Jacques Goldman"],
    correctAnswer: "Jacques Brel"
  },
  {
    id: 264,
    categoryId: 6,
    question: "Quel instrument à vent est le plus grave de la famille des bois ?",
    answers: ["Le basson", "Le hautbois", "La clarinette", "La flûte traversière", "Le piccolo", "Le cor anglais", "Le saxophone", "La clarinette basse", "Le contrebasson", "La flûte à bec"],
    correctAnswer: "Le basson"
  },
  {
    id: 265,
    categoryId: 6,
    question: "Quel genre musical est né à La Nouvelle-Orléans au début du XXe siècle ?",
    answers: ["Le jazz", "Le blues", "Le rock", "Le gospel", "Le soul", "Le R&B", "Le funk", "Le ragtime", "Le country", "Le folk"],
    correctAnswer: "Le jazz"
  },
  {
    id: 266,
    categoryId: 6,
    question: "Quel chanteur est surnommé 'The Boss' ?",
    answers: ["Bruce Springsteen", "Bob Dylan", "Eric Clapton", "Mick Jagger", "Rod Stewart", "Tom Petty", "John Mellencamp", "Neil Young", "Billy Joel", "Elton John"],
    correctAnswer: "Bruce Springsteen"
  },
  {
    id: 267,
    categoryId: 6,
    question: "Quel groupe a chanté 'Smells Like Teen Spirit' ?",
    answers: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains", "Stone Temple Pilots", "Foo Fighters", "Mudhoney", "Screaming Trees", "Temple of the Dog", "Bush"],
    correctAnswer: "Nirvana"
  },
  {
    id: 268,
    categoryId: 6,
    question: "Quel compositeur italien est célèbre pour ses 'Quatre Saisons' ?",
    answers: ["Vivaldi", "Verdi", "Puccini", "Rossini", "Paganini", "Monteverdi", "Donizetti", "Bellini", "Corelli", "Albinoni"],
    correctAnswer: "Vivaldi"
  },
  {
    id: 269,
    categoryId: 6,
    question: "Quelle chanteuse française est connue pour 'La Vie en rose' ?",
    answers: ["Édith Piaf", "Dalida", "Mireille Mathieu", "Barbara", "Françoise Hardy", "France Gall", "Vanessa Paradis", "Mylène Farmer", "Céline Dion", "Patricia Kaas"],
    correctAnswer: "Édith Piaf"
  },
  {
    id: 270,
    categoryId: 6,
    question: "Combien de musiciens composent un quatuor à cordes ?",
    answers: ["4", "3", "5", "6", "2", "7", "8", "9", "10", "12"],
    correctAnswer: "4"
  },
  {
    id: 271,
    categoryId: 6,
    question: "Quel artiste a popularisé le moonwalk ?",
    answers: ["Michael Jackson", "James Brown", "Prince", "Fred Astaire", "Usher", "Justin Timberlake", "Chris Brown", "Bobby Brown", "Sammy Davis Jr.", "Gene Kelly"],
    correctAnswer: "Michael Jackson"
  },
  {
    id: 272,
    categoryId: 6,
    question: "Quel groupe de rock a sorti l'album 'The Dark Side of the Moon' ?",
    answers: ["Pink Floyd", "Led Zeppelin", "The Beatles", "The Rolling Stones", "Queen", "Genesis", "Yes", "King Crimson", "Emerson Lake and Palmer", "Jethro Tull"],
    correctAnswer: "Pink Floyd"
  },
  {
    id: 273,
    categoryId: 6,
    question: "Quel rappeur américain est surnommé 'Slim Shady' ?",
    answers: ["Eminem", "50 Cent", "Dr. Dre", "Snoop Dogg", "Jay-Z", "Kanye West", "Lil Wayne", "Tupac", "Notorious B.I.G.", "Nas"],
    correctAnswer: "Eminem"
  },
  {
    id: 274,
    categoryId: 6,
    question: "Quel instrument africain est un xylophone en bois avec des calebasses ?",
    answers: ["Le balafon", "Le djembé", "La kora", "Le talking drum", "Le mbira", "Le shekere", "Le udu", "Le dundun", "Le kalimba", "Le ngoni"],
    correctAnswer: "Le balafon"
  },
  {
    id: 275,
    categoryId: 6,
    question: "Quel festival de musique se tient chaque année à Glastonbury en Angleterre ?",
    answers: ["Le Glastonbury Festival", "Le Reading Festival", "Le Download Festival", "Le Bestival", "Le T in the Park", "Le V Festival", "Le Latitude Festival", "Le Boardmasters", "Le Creamfields", "Le Wireless Festival"],
    correctAnswer: "Le Glastonbury Festival"
  },
  {
    id: 276,
    categoryId: 6,
    question: "Quel compositeur allemand a composé 'La Chevauchée des Walkyries' ?",
    answers: ["Richard Wagner", "Johann Sebastian Bach", "Ludwig van Beethoven", "Johannes Brahms", "Robert Schumann", "Felix Mendelssohn", "Georg Friedrich Haendel", "Carl Maria von Weber", "Richard Strauss", "Gustav Mahler"],
    correctAnswer: "Richard Wagner"
  },
  {
    id: 277,
    categoryId: 6,
    question: "Quel artiste a chanté 'Purple Rain' ?",
    answers: ["Prince", "Michael Jackson", "David Bowie", "Stevie Wonder", "Marvin Gaye", "Jimi Hendrix", "James Brown", "George Michael", "Lionel Richie", "Whitney Houston"],
    correctAnswer: "Prince"
  },
  {
    id: 278,
    categoryId: 6,
    question: "Quel est l'instrument principal du flamenco ?",
    answers: ["La guitare", "Le cajón", "Les castagnettes", "Le violon", "La mandoline", "La harpe", "Le banjo", "Le luth", "Le ukulélé", "L'accordéon"],
    correctAnswer: "La guitare"
  },
  {
    id: 279,
    categoryId: 6,
    question: "Quel chanteur français a interprété 'Allumer le feu' ?",
    answers: ["Johnny Hallyday", "Michel Sardou", "Charles Aznavour", "Jacques Brel", "Serge Gainsbourg", "Claude François", "Jean-Jacques Goldman", "Renaud", "Francis Cabrel", "Alain Souchon"],
    correctAnswer: "Johnny Hallyday"
  },
  {
    id: 280,
    categoryId: 6,
    question: "Quel groupe a chanté 'Hotel California' ?",
    answers: ["Eagles", "Fleetwood Mac", "The Doobie Brothers", "Steely Dan", "Lynyrd Skynyrd", "Crosby Stills Nash and Young", "America", "Chicago", "The Eagles", "Boston"],
    correctAnswer: "Eagles"
  },
  {
    id: 281,
    categoryId: 6,
    question: "Quel genre musical brésilien est né dans les favelas de Rio ?",
    answers: ["La samba", "La bossa nova", "Le forró", "Le baião", "Le MPB", "Le tropicália", "Le pagode", "Le funk carioca", "Le maracatu", "Le frevo"],
    correctAnswer: "La samba"
  },
  {
    id: 282,
    categoryId: 6,
    question: "Quel DJ français a produit l'album 'Homework' ?",
    answers: ["Daft Punk", "David Guetta", "Justice", "Air", "DJ Snake", "Kavinsky", "Cassius", "Laurent Garnier", "Bob Sinclar", "Martin Solveig"],
    correctAnswer: "Daft Punk"
  },
  {
    id: 283,
    categoryId: 6,
    question: "Quel opéra de Giuseppe Verdi raconte l'histoire d'une courtisane parisienne ?",
    answers: ["La Traviata", "Aida", "Rigoletto", "Il Trovatore", "Nabucco", "Otello", "Falstaff", "Don Carlos", "Macbeth", "Un Ballo in Maschera"],
    correctAnswer: "La Traviata"
  },
  {
    id: 284,
    categoryId: 6,
    question: "Quel groupe irlandais a chanté 'With or Without You' ?",
    answers: ["U2", "The Cranberries", "Thin Lizzy", "The Corrs", "Westlife", "Boyzone", "The Script", "Snow Patrol", "Hozier", "Sinead O'Connor"],
    correctAnswer: "U2"
  },
  {
    id: 285,
    categoryId: 6,
    question: "Quel instrument produit du son grâce à des anches doubles ?",
    answers: ["Le hautbois", "La clarinette", "La flûte", "Le saxophone", "La trompette", "Le tuba", "Le trombone", "Le cor", "Le piccolo", "Le fifre"],
    correctAnswer: "Le hautbois"
  },
  {
    id: 286,
    categoryId: 6,
    question: "Quel artiste a sorti l'album 'Thriller', l'album le plus vendu de l'histoire ?",
    answers: ["Michael Jackson", "Elvis Presley", "The Beatles", "Whitney Houston", "Elton John", "Madonna", "Prince", "Stevie Wonder", "Marvin Gaye", "Lionel Richie"],
    correctAnswer: "Michael Jackson"
  },
  {
    id: 287,
    categoryId: 6,
    question: "Quel compositeur russe a composé 'Le Lac des cygnes' ?",
    answers: ["Tchaïkovski", "Rachmaninov", "Stravinsky", "Prokofiev", "Rimski-Korsakov", "Moussorgski", "Borodine", "Chostakovitch", "Glinka", "Scriabine"],
    correctAnswer: "Tchaïkovski"
  },
  {
    id: 288,
    categoryId: 6,
    question: "Quel chanteur jamaïcain est la légende du reggae, interprète de 'No Woman, No Cry' ?",
    answers: ["Bob Marley", "Peter Tosh", "Jimmy Cliff", "Burning Spear", "Toots Hibbert", "Lee Scratch Perry", "Dennis Brown", "Gregory Isaacs", "Buju Banton", "Shaggy"],
    correctAnswer: "Bob Marley"
  },
  {
    id: 289,
    categoryId: 6,
    question: "Quel instrument à cordes frottées est le plus aigu dans un orchestre ?",
    answers: ["Le violon", "L'alto", "Le violoncelle", "La contrebasse", "La viole de gambe", "La harpe", "Le banjo", "La mandoline", "Le luth", "Le clavecin"],
    correctAnswer: "Le violon"
  },
  {
    id: 290,
    categoryId: 6,
    question: "Quel rappeur français a sorti l'album 'Civilisation' ?",
    answers: ["Orelsan", "Nekfeu", "Booba", "PNL", "Jul", "SCH", "Ninho", "Damso", "Vald", "Lomepal"],
    correctAnswer: "Orelsan"
  },
  {
    id: 291,
    categoryId: 6,
    question: "Quel groupe a interprété 'Back in Black' ?",
    answers: ["AC/DC", "Metallica", "Iron Maiden", "Judas Priest", "Black Sabbath", "Motörhead", "Scorpions", "Megadeth", "Def Leppard", "Ozzy Osbourne"],
    correctAnswer: "AC/DC"
  },
  {
    id: 292,
    categoryId: 6,
    question: "Quel musicien de jazz est surnommé 'Bird' ?",
    answers: ["Charlie Parker", "Miles Davis", "John Coltrane", "Duke Ellington", "Louis Armstrong", "Dizzy Gillespie", "Thelonious Monk", "Art Blakey", "Sonny Rollins", "Charles Mingus"],
    correctAnswer: "Charlie Parker"
  },
  {
    id: 293,
    categoryId: 6,
    question: "Quel est le tempo le plus lent en musique classique ?",
    answers: ["Largo", "Adagio", "Andante", "Moderato", "Allegro", "Presto", "Vivace", "Lento", "Grave", "Prestissimo"],
    correctAnswer: "Largo"
  },
  {
    id: 294,
    categoryId: 6,
    question: "Quelle chanteuse barbadienne a sorti le hit 'Umbrella' ?",
    answers: ["Rihanna", "Beyoncé", "Nicki Minaj", "Cardi B", "Ariana Grande", "Dua Lipa", "Shakira", "Jennifer Lopez", "Alicia Keys", "Christina Aguilera"],
    correctAnswer: "Rihanna"
  },
  {
    id: 295,
    categoryId: 6,
    question: "Quel compositeur a écrit 'Les Quatre Saisons de Buenos Aires' pour le bandonéon ?",
    answers: ["Astor Piazzolla", "Carlos Gardel", "Osvaldo Pugliese", "Aníbal Troilo", "Atahualpa Yupanqui", "Mercedes Sosa", "Héctor Stamponi", "Mariano Mores", "Horacio Salgán", "Juan D'Arienzo"],
    correctAnswer: "Astor Piazzolla"
  },
  {
    id: 296,
    categoryId: 6,
    question: "Quel groupe suédois a connu un succès mondial avec 'Dancing Queen' ?",
    answers: ["ABBA", "Roxette", "Ace of Base", "Europe", "The Cardigans", "Swedish House Mafia", "Robyn", "Avicii", "Tove Lo", "Zara Larsson"],
    correctAnswer: "ABBA"
  },
  {
    id: 297,
    categoryId: 6,
    question: "Quel chanteur français est connu pour 'La Bohème' ?",
    answers: ["Charles Aznavour", "Jacques Brel", "Georges Brassens", "Serge Gainsbourg", "Léo Ferré", "Claude François", "Michel Sardou", "Yves Montand", "Gilbert Bécaud", "Henri Salvador"],
    correctAnswer: "Charles Aznavour"
  },
  {
    id: 298,
    categoryId: 6,
    question: "Quel genre musical est caractérisé par le 'scratching' et le 'sampling' ?",
    answers: ["Le hip-hop", "Le rock", "Le jazz", "La pop", "L'électro", "Le reggae", "Le blues", "Le country", "Le R&B", "Le punk"],
    correctAnswer: "Le hip-hop"
  },
  {
    id: 299,
    categoryId: 6,
    question: "Quel trompettiste de jazz est surnommé 'Satchmo' ?",
    answers: ["Louis Armstrong", "Miles Davis", "Dizzy Gillespie", "Chet Baker", "Freddie Hubbard", "Clifford Brown", "Wynton Marsalis", "Lee Morgan", "Maynard Ferguson", "Clark Terry"],
    correctAnswer: "Louis Armstrong"
  },
  {
    id: 300,
    categoryId: 6,
    question: "Quel groupe de rock britannique a sorti l'album '(What's the Story) Morning Glory?' ?",
    answers: ["Oasis", "Blur", "Radiohead", "Pulp", "The Verve", "Suede", "Manic Street Preachers", "Elastica", "Supergrass", "The Stone Roses"],
    correctAnswer: "Oasis"
  }
];

module.exports = { categories, questions };
