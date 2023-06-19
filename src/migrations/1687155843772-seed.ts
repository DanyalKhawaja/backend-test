import { ElasticsearchService } from "@nestjs/elasticsearch";
import { Film } from "src/entities/film.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class Seed1687155843772 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Film, films);
    const es = new ElasticsearchService({
      node: "http://localhost:9200",
    });
    films.forEach(async (film: Film) => {
      await es.index({
        id: film.id.toString(),
        index: "film",
        body: film,
      });
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.clear(Film);
  }
}

const films = [
  {
    name: "Wild Wild West Revisited, The",
    description: "Objective, Burma!",
    releaseDate: new Date("4/4/2023"),
    genre: "Action|Adventure|Sci-Fi|Western",
    country: "Chile",
    ticketPrice: 6,
    rating: 1,
  },
  {
    name: "American Gun",
    description: "Jim Carrey: Unnatural Act",
    releaseDate: new Date("6/10/2023"),
    genre: "Drama",
    country: "Indonesia",
    ticketPrice: 2,
    rating: 2,
  },
  {
    name: "Last Holiday",
    description: "40 Guns to Apache Pass",
    releaseDate: new Date("8/26/2022"),
    genre: "Comedy",
    country: "Poland",
    ticketPrice: 1,
    rating: 3,
  },
  {
    name: "Last Stop for Paul",
    description: "49th Parallel",
    releaseDate: new Date("7/2/2022"),
    genre: "Comedy",
    country: "Sweden",
    ticketPrice: 9,
    rating: 4,
  },
  {
    name: "Intimate Enemies (L'ennemi intime)",
    description: "City of Ghosts",
    releaseDate: new Date("11/8/2022"),
    genre: "Drama|War",
    country: "Poland",
    ticketPrice: 2,
    rating: 5,
  },
  {
    name: "Flash of Genius",
    description: "Night Catches Us",
    releaseDate: new Date("12/11/2022"),
    genre: "Drama",
    country: "Portugal",
    ticketPrice: 6,
    rating: 6,
  },
  {
    name: "Lessons of Darkness (Lektionen in Finsternis)",
    description: "633 Squadron",
    releaseDate: new Date("9/30/2022"),
    genre: "Documentary|War",
    country: "Costa Rica",
    ticketPrice: 8,
    rating: 933,
  },
  {
    name: "Girlhood",
    description: "Batman Begins",
    releaseDate: new Date("9/30/2022"),
    genre: "Drama",
    country: "Slovenia",
    ticketPrice: 2,
    rating: 934,
  },
  {
    name: "Human Stain, The",
    description: "Iceman",
    releaseDate: new Date("2/13/2023"),
    genre: "Drama|Romance|Thriller",
    country: "Indonesia",
    ticketPrice: 5,
    rating: 935,
  },
  {
    name: "Very British Gangster, A",
    description: "Balls Out: Gary the Tennis Coach",
    releaseDate: new Date("8/15/2022"),
    genre: "Crime|Documentary",
    country: "Germany",
    ticketPrice: 4,
    rating: 936,
  },
  {
    name: "Varan the Unbelievable",
    description: "The Trip to Bountiful",
    releaseDate: new Date("2/20/2023"),
    genre: "Action|Drama|Sci-Fi",
    country: "China",
    ticketPrice: 3,
    rating: 937,
  },
  {
    name: "Alibi",
    description: "Julia",
    releaseDate: new Date("11/30/2022"),
    genre: "Crime|Drama",
    country: "Poland",
    ticketPrice: 9,
    rating: 938,
  },
  {
    name: "Lower Depths, The (Donzoko)",
    description: "Charlie's Angels: Full Throttle",
    releaseDate: new Date("12/3/2022"),
    genre: "Comedy|Drama",
    country: "Canada",
    ticketPrice: 3,
    rating: 939,
  },
  {
    name: "No Regrets for Our Youth (Waga seishun ni kuinashi)",
    description: "Shallow Grave",
    releaseDate: new Date("12/31/2022"),
    genre: "Drama",
    country: "China",
    ticketPrice: 8,
    rating: 940,
  },
  {
    name: "What Women Want (aka I Know a Woman's Heart)",
    description: "Tenderness (Hellyys)",
    releaseDate: new Date("3/4/2023"),
    genre: "Comedy|Romance",
    country: "China",
    ticketPrice: 8,
    rating: 941,
  },
  {
    name: "23 Paces to Baker Street",
    description: "Bad Luck Love",
    releaseDate: new Date("6/11/2023"),
    genre: "Mystery|Thriller",
    country: "China",
    ticketPrice: 5,
    rating: 942,
  },
  {
    name: "Donkey Hide (Oslinaya shkura)",
    description: "No Time for Love",
    releaseDate: new Date("3/27/2023"),
    genre: "Children|Comedy|Fantasy|Romance",
    country: "Dominican Republic",
    ticketPrice: 5,
    rating: 943,
  },
  {
    name: "Blackjack",
    description: "Fatso",
    releaseDate: new Date("7/30/2022"),
    genre: "Action|Thriller",
    country: "France",
    ticketPrice: 6,
    rating: 944,
  },
  {
    name: "Trilogy of Terror",
    description: "Topaz",
    releaseDate: new Date("11/22/2022"),
    genre: "Horror|Thriller",
    country: "Panama",
    ticketPrice: 2,
    rating: 945,
  },
  {
    name: "Coach Carter",
    description: "Lumiere and Company (Lumière et compagnie)",
    releaseDate: new Date("10/16/2022"),
    genre: "Drama",
    country: "Azerbaijan",
    ticketPrice: 8,
    rating: 946,
  },
  {
    name: "One-Eyed Jacks",
    description: "Forest (Rengeteg)",
    releaseDate: new Date("12/26/2022"),
    genre: "Western",
    country: "Indonesia",
    ticketPrice: 3,
    rating: 947,
  },
  {
    name: "On My Way (Elle s'en va)",
    description: "With Love from the Age of Reason",
    releaseDate: new Date("7/5/2022"),
    genre: "Comedy|Drama",
    country: "Brazil",
    ticketPrice: 6,
    rating: 948,
  },
  {
    name: "Martha Marcy May Marlene",
    description: "Phantom Tollbooth, The",
    releaseDate: new Date("9/23/2022"),
    genre: "Drama|Thriller",
    country: "Philippines",
    ticketPrice: 4,
    rating: 949,
  },
  {
    name: "Set-Up, The",
    description: "Play the Game",
    releaseDate: new Date("10/4/2022"),
    genre: "Drama|Film-Noir|Romance",
    country: "China",
    ticketPrice: 2,
    rating: 950,
  },
  {
    name: "Men in White",
    description: "I Can't Sleep (J'ai pas sommeil)",
    releaseDate: new Date("9/6/2022"),
    genre: "(no genre listed)",
    country: "Russia",
    ticketPrice: 8,
    rating: 951,
  },
  {
    name: "First Man Into Space",
    description: "Tyler Perry's Why Did I Get Married?",
    releaseDate: new Date("3/30/2023"),
    genre: "Drama|Horror|Sci-Fi",
    country: "Uruguay",
    ticketPrice: 2,
    rating: 952,
  },
  {
    name: "Slappy and the Stinkers",
    description: "Raw Meat (Death Line)",
    releaseDate: new Date("9/3/2022"),
    genre: "Children|Comedy",
    country: "Brazil",
    ticketPrice: 6,
    rating: 953,
  },
  {
    name: "Robot",
    description: "Butterflies Have No Memories",
    releaseDate: new Date("5/11/2023"),
    genre: "Action|Comedy|Musical|Sci-Fi",
    country: "Malaysia",
    ticketPrice: 7,
    rating: 954,
  },
  {
    name: "Bride Flight",
    description: "Rob the Mob",
    releaseDate: new Date("12/30/2022"),
    genre: "Drama",
    country: "Zimbabwe",
    ticketPrice: 8,
    rating: 955,
  },
  {
    name: "Fed Up",
    description: "Animal Kingdom, The",
    releaseDate: new Date("3/21/2023"),
    genre: "Documentary",
    country: "Peru",
    ticketPrice: 2,
    rating: 956,
  },
  {
    name: "Martin Lawrence: You So Crazy",
    description: "Match King, The",
    releaseDate: new Date("7/20/2022"),
    genre: "Comedy|Documentary",
    country: "China",
    ticketPrice: 4,
    rating: 957,
  },
  {
    name: "Miracle in Cell No 7",
    description: "Bleak House",
    releaseDate: new Date("7/6/2022"),
    genre: "Comedy|Drama",
    country: "China",
    ticketPrice: 3,
    rating: 958,
  },
  {
    name: "Alpha and Omega",
    description: "Nantucket Film Festival's Comedy Roundtable",
    releaseDate: new Date("9/10/2022"),
    genre: "Adventure|Animation|Children|Comedy|Romance",
    country: "United States",
    ticketPrice: 3,
    rating: 959,
  },
  {
    name: "Beatdown",
    description: "Eyes of Tammy Faye, The",
    releaseDate: new Date("8/4/2022"),
    genre: "Action|Crime|Thriller",
    country: "China",
    ticketPrice: 3,
    rating: 960,
  },
  {
    name: "Inside the Twin Towers",
    description: "Much Ado About Nothing",
    releaseDate: new Date("1/5/2023"),
    genre: "Drama",
    country: "Peru",
    ticketPrice: 7,
    rating: 961,
  },
  {
    name: "Blue Spring (Aoi haru)",
    description: "Eye of the Dolphin",
    releaseDate: new Date("5/6/2023"),
    genre: "Drama",
    country: "Indonesia",
    ticketPrice: 5,
    rating: 962,
  },
  {
    name: "Toxic Avenger, The",
    description: "Silent House, The (La casa muda)",
    releaseDate: new Date("10/9/2022"),
    genre: "Comedy|Horror",
    country: "Albania",
    ticketPrice: 9,
    rating: 963,
  },
  {
    name: "Sweet Sixteen",
    description: "News from a Personal War (Notícias de uma Guerra Particular)",
    releaseDate: new Date("2/21/2023"),
    genre: "Drama",
    country: "South Africa",
    ticketPrice: 1,
    rating: 964,
  },
  {
    name: "Walker, The",
    description: "Condemned, The",
    releaseDate: new Date("5/15/2023"),
    genre: "Drama|Mystery",
    country: "Mauritius",
    ticketPrice: 2,
    rating: 965,
  },
  {
    name: "Zone Troopers",
    description: "Leaving Las Vegas",
    releaseDate: new Date("6/7/2023"),
    genre: "Action|Sci-Fi|War",
    country: "Venezuela",
    ticketPrice: 2,
    rating: 966,
  },
  {
    name: "Carnage",
    description: "Funny Ha Ha",
    releaseDate: new Date("12/12/2022"),
    genre: "Comedy|Drama",
    country: "Greece",
    ticketPrice: 7,
    rating: 967,
  },
  {
    name: "4th Man, The (Fourth Man, The) (Vierde man, De)",
    description: "Runaway Train",
    releaseDate: new Date("6/19/2022"),
    genre: "Drama|Mystery|Thriller",
    country: "Colombia",
    ticketPrice: 2,
    rating: 968,
  },
  {
    name: "Shaka Zulu: The Citadel",
    description: "Jack Frost",
    releaseDate: new Date("11/5/2022"),
    genre: "Drama",
    country: "Indonesia",
    ticketPrice: 8,
    rating: 969,
  },
  {
    name: "Winners and Sinners (Qi mou miao ji: Wu fu xing)",
    description: "Shadow Man",
    releaseDate: new Date("9/10/2022"),
    genre: "Action|Comedy|Crime",
    country: "Indonesia",
    ticketPrice: 3,
    rating: 970,
  },
  {
    name: "Weekend at Bernie's II",
    description: "Crisis: Behind a Presidential Commitment",
    releaseDate: new Date("5/21/2023"),
    genre: "Adventure|Comedy",
    country: "France",
    ticketPrice: 3,
    rating: 971,
  },
  {
    name: "Father's Little Dividend",
    description:
      "Blossoming of Maximo Oliveros, The (Ang pagdadalaga ni Maximo Oliveros)",
    releaseDate: new Date("6/24/2022"),
    genre: "Comedy|Romance",
    country: "Iran",
    ticketPrice: 3,
    rating: 972,
  },
  {
    name: "16 Acres",
    description: "Sleeping Car Murder, The (Compartiment tueurs)",
    releaseDate: new Date("9/7/2022"),
    genre: "Documentary",
    country: "Indonesia",
    ticketPrice: 6,
    rating: 973,
  },
  {
    name: "Children of the Corn 666: Isaac's Return",
    description: "10 Items or Less",
    releaseDate: new Date("11/14/2022"),
    genre: "Horror|Mystery",
    country: "Portugal",
    ticketPrice: 1,
    rating: 974,
  },
  {
    name: "American Virgin",
    description: "Death by Hanging (Koshikei)",
    releaseDate: new Date("9/23/2022"),
    genre: "Comedy",
    country: "Indonesia",
    ticketPrice: 7,
    rating: 975,
  },
  {
    name: "Man on a Ledge",
    description: "Bat Whispers, The",
    releaseDate: new Date("12/14/2022"),
    genre: "Crime|Thriller",
    country: "Sweden",
    ticketPrice: 5,
    rating: 976,
  },
  {
    name: "Forty Shades of Blue",
    description: "Tension at Table Rock",
    releaseDate: new Date("4/24/2023"),
    genre: "Drama",
    country: "Canada",
    ticketPrice: 4,
    rating: 977,
  },
  {
    name: "Tetro",
    description: "Koruto wa ore no pasupooto (Colt Is My Passport, A)",
    releaseDate: new Date("4/3/2023"),
    genre: "Drama|Mystery",
    country: "Bosnia and Herzegovina",
    ticketPrice: 2,
    rating: 978,
  },
  {
    name: "Brewster McCloud",
    description: "Possessed",
    releaseDate: new Date("6/30/2022"),
    genre: "Comedy",
    country: "United States",
    ticketPrice: 6,
    rating: 979,
  },
  {
    name: "Esther Kahn",
    description: "The Grump",
    releaseDate: new Date("1/26/2023"),
    genre: "Drama",
    country: "Montserrat",
    ticketPrice: 3,
    rating: 980,
  },
  {
    name: "I Saw Mommy Kissing Santa Claus",
    description: "Black Widow",
    releaseDate: new Date("11/3/2022"),
    genre: "Children|Comedy",
    country: "Honduras",
    ticketPrice: 4,
    rating: 981,
  },
  {
    name: "Stonehenge Apocalypse",
    description: "Grosse Pointe Blank",
    releaseDate: new Date("7/27/2022"),
    genre: "Sci-Fi",
    country: "Brazil",
    ticketPrice: 3,
    rating: 982,
  },
  {
    name: "Agora",
    description: "Rooster Cogburn",
    releaseDate: new Date("12/15/2022"),
    genre: "Adventure|Drama|Romance",
    country: "Burkina Faso",
    ticketPrice: 6,
    rating: 983,
  },
  {
    name: "Cleopatra",
    description: "Yearling, The",
    releaseDate: new Date("9/27/2022"),
    genre: "Drama|Romance|War",
    country: "Argentina",
    ticketPrice: 2,
    rating: 984,
  },
  {
    name: "Princess (Prinsessa)",
    description: "Thank You for Smoking",
    releaseDate: new Date("4/6/2023"),
    genre: "Drama",
    country: "Indonesia",
    ticketPrice: 5,
    rating: 985,
  },
  {
    name: "Following Sean",
    description: "Barabbas",
    releaseDate: new Date("2/1/2023"),
    genre: "Documentary",
    country: "Indonesia",
    ticketPrice: 1,
    rating: 986,
  },
  {
    name: "Season of Monsters (Szörnyek évadja) ",
    description: "Flintstones, The",
    releaseDate: new Date("10/27/2022"),
    genre: "Drama",
    country: "Spain",
    ticketPrice: 5,
    rating: 987,
  },
  {
    name: "Seal Team Eight: Behind Enemy Lines",
    description: "Sol ",
    releaseDate: new Date("5/11/2023"),
    genre: "Action|Drama|War",
    country: "Indonesia",
    ticketPrice: 2,
    rating: 988,
  },
  {
    name: "Sasayaki (aka Moonlight Whispers) (Gekkô no sasayaki)",
    description: "Sunlight Jr",
    releaseDate: new Date("8/1/2022"),
    genre: "Drama|Romance",
    country: "Greenland",
    ticketPrice: 6,
    rating: 989,
  },
  {
    name: "Get on Up",
    description: "Idolmaker, The",
    releaseDate: new Date("4/9/2023"),
    genre: "Drama|Musical",
    country: "Indonesia",
    ticketPrice: 5,
    rating: 990,
  },
  {
    name: "American Psycho",
    description: "Man from the Future, The (O Homem do Futuro)",
    releaseDate: new Date("10/22/2022"),
    genre: "Crime|Horror|Mystery|Thriller",
    country: "China",
    ticketPrice: 6,
    rating: 991,
  },
  {
    name: "Far Country, The",
    description: "Candy Snatchers, The",
    releaseDate: new Date("9/4/2022"),
    genre: "Western",
    country: "Brazil",
    ticketPrice: 6,
    rating: 992,
  },
  {
    name: "Battleship",
    description: "Talk to Her (Hable con Ella)",
    releaseDate: new Date("3/5/2023"),
    genre: "Action|Sci-Fi|Thriller|IMAX",
    country: "Nicaragua",
    ticketPrice: 7,
    rating: 993,
  },
  {
    name: "Pillow Book, The",
    description: "We Are Marshall",
    releaseDate: new Date("8/1/2022"),
    genre: "Drama|Romance",
    country: "Iran",
    ticketPrice: 7,
    rating: 994,
  },
  {
    name: "Yesterday Was a Lie",
    description: "Man in the Iron Mask, The",
    releaseDate: new Date("9/14/2022"),
    genre: "Drama|Film-Noir|Mystery|Romance|Sci-Fi",
    country: "United States",
    ticketPrice: 2,
    rating: 995,
  },
  {
    name: "Hellboy",
    description: "Hangtime - Kein leichtes Spiel",
    releaseDate: new Date("9/3/2022"),
    genre: "Action|Adventure|Fantasy|Horror",
    country: "China",
    ticketPrice: 4,
    rating: 996,
  },
  {
    name: "Wild Hogs",
    description: "Love Bites",
    releaseDate: new Date("12/31/2022"),
    genre: "Adventure|Comedy",
    country: "Germany",
    ticketPrice: 2,
    rating: 997,
  },
  {
    name: "Swept Away (Travolti da un insolito destino nell'azzurro mare d'Agosto)",
    description: "Who Killed the Electric Car?",
    releaseDate: new Date("2/11/2023"),
    genre: "Comedy|Drama",
    country: "Venezuela",
    ticketPrice: 5,
    rating: 998,
  },
  {
    name: "Noise",
    description: "Mogambo",
    releaseDate: new Date("8/4/2022"),
    genre: "Comedy|Drama",
    country: "Denmark",
    ticketPrice: 2,
    rating: 999,
  },
];