import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataService {

public testitems : Array<any> = [];

public items :  Array<any> = [
  {
    "_id": 254,
    "word": "apple",
    "translate": "der Apfel",
    "translateFR": "",
    "translateIT": "",
    "tags": "",
    "picture": "254.jpg",
    "audio": ""
  },
  {
    "_id": 116,
    "word": "axe",
    "translate": "die Axt",
    "translateFR": "la hache",
    "translateIT": "",
    "tags": "",
    "picture": "116.jpg",
    "audio": ""
  },
  {
    "_id": 130,
    "word": "ball",
    "translate": "der Ball",
    "translateFR": "la balle / le ballon",
    "translateIT": "",
    "tags": "",
    "picture": "130.jpg",
    "audio": ""
  },
  {
    "_id": 121,
    "word": "butterfly",
    "translate": "der Schmetterling",
    "translateFR": "le papillon",
    "translateIT": "",
    "tags": "",
    "picture": "121.jpg",
    "audio": ""
  },
  {
    "_id": 308,
    "word": "carrots",
    "translate": "die Karotten",
    "translateFR": "les carottes (f.)",
    "translateIT": "",
    "tags": "food vegetable",
    "picture": "308.jpg",
    "audio": ""
  },
  {
    "_id": 55,
    "word": "dog",
    "translate": "der Hund",
    "translateFR": "le chien",
    "translateIT": "",
    "tags": "",
    "picture": "55.jpg",
    "audio": ""
  },
  {
    "_id": 125,
    "word": "duck",
    "translate": "die Ente",
    "translateFR": "le canard",
    "translateIT": "",
    "tags": "animal bird",
    "picture": "125.jpg",
    "audio": ""
  },
  {
    "_id": 63,
    "word": "egg",
    "translate": "das Ei",
    "translateFR": "un œuf",
    "translateIT": "",
    "tags": "",
    "picture": "63.jpg",
    "audio": ""
  },
  {
    "_id": 12,
    "word": "fire",
    "translate": "das Feuer",
    "translateFR": "le feu",
    "translateIT": "il cane",
    "tags": "nature",
    "picture": "12.jpg",
    "audio": "En-uk-a_dog.ogg.mp3"
  },
  {
    "_id": 18,
    "word": "goat",
    "translate": "die Ziege",
    "translateFR": "la chèvre",
    "translateIT": "il pesce",
    "tags": "animal otherAnimal",
    "picture": "18.jpg",
    "audio": "En-uk-fish.ogg.mp3"
  },
  {
    "_id": 278,
    "word": "grasshopper",
    "translate": "die Heuschrecke",
    "translateFR": "la sauterelle",
    "translateIT": "",
    "tags": "",
    "picture": "278.jpg",
    "audio": ""
  },
  {
    "_id": 262,
    "word": "ground nuts",
    "translate": "die Erdnüsse",
    "translateFR": "la cacaho(u)ète",
    "translateIT": "",
    "tags": "",
    "picture": "262.jpg",
    "audio": ""
  },
  {
    "_id": 314,
    "word": "hammer",
    "translate": "der Hammer",
    "translateFR": "le marteau",
    "translateIT": "",
    "tags": "",
    "picture": "314.jpg",
    "audio": ""
  },
  {
    "_id": 318,
    "word": "hen",
    "translate": "die Henne",
    "translateFR": "la poule",
    "translateIT": "",
    "tags": "animal bird",
    "picture": "318.jpg",
    "audio": "En-uk-grasshopper.ogg.mp3"
  },
  {
    "_id": 195,
    "word": "knife",
    "translate": "das Messer",
    "translateFR": "le couteau",
    "translateIT": "",
    "tags": "",
    "picture": "195.jpg",
    "audio": ""
  },
  {
    "_id": 363,
    "word": "matches",
    "translate": "die Streichhölzer",
    "translateFR": "les allumettes (f.)",
    "translateIT": "",
    "tags": "",
    "picture": "363.jpg",
    "audio": ""
  },
  {
    "_id": 288,
    "word": "mattress",
    "translate": "die Matratze",
    "translateFR": "le matelas",
    "translateIT": "",
    "tags": "",
    "picture": "288.jpg",
    "audio": ""
  },
  {
    "_id": 5,
    "word": "mushrooms",
    "translate": "die Pilze",
    "translateFR": "les champignons (m.)",
    "translateIT": "la farfalla",
    "tags": "food vegetable",
    "picture": "5.jpg",
    "audio": "En-uk-a_butterfly.ogg.mp3"
  },
  {
    "_id": 65,
    "word": "nail",
    "translate": "der Nagel",
    "translateFR": "le clou / la pointe",
    "translateIT": "",
    "tags": "",
    "picture": "65.jpg",
    "audio": ""
  },
  {
    "_id": 109,
    "word": "pencil",
    "translate": "der Bleistift",
    "translateFR": "le crayon",
    "translateIT": "",
    "tags": "",
    "picture": "109.jpg",
    "audio": ""
  },
  {
    "_id": 201,
    "word": "pigeon",
    "translate": "die Taube",
    "translateFR": "le pigeon",
    "translateIT": "",
    "tags": "",
    "picture": "201.jpg",
    "audio": ""
  },
  {
    "_id": 35,
    "word": "rabbit",
    "translate": "der Hase",
    "translateFR": "le lièvre",
    "translateIT": "l'ovino m.",
    "tags": "animal mammal",
    "picture": "35.jpg",
    "audio": "En-uk-a_sheep.ogg.mp3"
  },
  {
    "_id": 334,
    "word": "sack",
    "translate": "der Sack",
    "translateFR": "le sac",
    "translateIT": "",
    "tags": "",
    "picture": "334.jpg",
    "audio": ""
  },
  {
    "_id": 377,
    "word": "square",
    "translate": "das Quadrat",
    "translateFR": "",
    "translateIT": "",
    "tags": "",
    "picture": "377.png",
    "audio": ""
  },
  {
    "_id": 157,
    "word": "tambourine",
    "translate": "der Schellenkranz",
    "translateFR": "le tambourin",
    "translateIT": "",
    "tags": "",
    "picture": "157.jpg",
    "audio": ""
  },
  {
    "_id": 60,
    "word": "tomatoes",
    "translate": "die Tomaten",
    "translateFR": "les tomates (f.)",
    "translateIT": "",
    "tags": "",
    "picture": "60.jpg",
    "audio": ""
  },
  {
    "_id": 105,
    "word": "watermelon",
    "translate": "die Wassermelone",
    "translateFR": "la pastèque",
    "translateIT": "",
    "tags": "",
    "picture": "105.jpg",
    "audio": ""
  },
  {
    "_id": 244,
    "word": "wheel",
    "translate": "das Vorderrad",
    "translateFR": "la roue",
    "translateIT": "",
    "tags": "",
    "picture": "244.jpg",
    "audio": ""
  },
  {
    "_id": 298,
    "word": "zebra",
    "translate": "das Zebra",
    "translateFR": "le zèbre",
    "translateIT": "",
    "tags": "animal mammal",
    "picture": "298.jpg",
    "audio": ""
  }
];


  constructor() { }
}
