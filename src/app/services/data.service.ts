import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataService {

public testitems : Array<any> = [];

public items :  Array<any> = [
   {
      "_id":5,
      "word":"butterfly",
      "translate":"der Schmetterling",
      "translateFR":"le papillon",
      "translateIT":"la farfalla",
      "tags":"animal otherAnimal",
      "picture":"butterfly.jpg",
      "audio":"En-uk-a_butterfly.ogg.mp3"
   },
   {
      "_id":308,
      "word":"carrots",
      "translate":"die Karotten",
      "translateFR":"...",
      "translateIT":"...",
      "tags":"food vegetable",
      "picture":"308.jpg",
      "audio":""
   },
   {
      "_id":8,
      "word":"cat",
      "translate":"die Katze",
      "translateFR":"le chat",
      "translateIT":"il gatto",
      "tags":"animal mammal",
      "picture":"cat.jpg",
      "audio":"En-uk-a_cat.ogg.mp3"
   },
   {
      "_id":12,
      "word":"dog",
      "translate":"der Hund",
      "translateFR":"le chien",
      "translateIT":"il cane",
      "tags":"animal mammal",
      "picture":"dog.jpg",
      "audio":"En-uk-a_dog.ogg.mp3"
   },
   {
      "_id":125,
      "word":"duck",
      "translate":"die Ente",
      "translateFR":"le canard",
      "translateIT":"il .....",
      "tags":"animal bird",
      "picture":"125.jpg",
      "audio":""
   },
   {
      "_id":18,
      "word":"fish",
      "translate":"der Fisch",
      "translateFR":"le poisson",
      "translateIT":"il pesce",
      "tags":"animal otherAnimal",
      "picture":"fish.jpg",
      "audio":"En-uk-fish.ogg.mp3"
   },
   {
      "_id":12,
      "word":"fire",
      "translate":"das Feuer",
      "translateFR":"le feu",
      "translateIT":"...",
      "tags":"nature",
      "picture":"12.jpg",
      "audio":""
   },
   {
      "_id":20,
      "word":"grasshopper",
      "translate":"die Heuschrecke",
      "translateFR":"la sauterelle",
      "translateIT":"la saltabecca",
      "tags":"animal otherAnimal",
      "picture":"grasshopper.jpg",
      "audio":"En-uk-grasshopper.ogg.mp3"
   },
   {
      "_id":318,
      "word":"hen",
      "translate":"die Henne",
      "translateFR":"la poule",
      "translateIT":"....",
      "tags":"animal bird",
      "picture":"318.jpg",
      "audio":"En-uk-grasshopper.ogg.mp3"
   },
   {
      "_id":5,
      "word":"mushrooms",
      "translate":"die Pilze",
      "translateFR":"....",
      "translateIT":"....",
      "tags":"food vegetable",
      "picture":"5.jpg",
      "audio":""
   },
   {
      "_id":35,
      "word":"sheep",
      "translate":"das Schaf",
      "translateFR":"le mouton",
      "translateIT":"l'ovino m.",
      "tags":"animal mammal",
      "picture":"sheep.jpg",
      "audio":"En-uk-a_sheep.ogg.mp3"
   },
   {
      "_id":298,
      "word":"zebra",
      "translate":"das Zebra",
      "translateFR":"...",
      "translateIT":"...",
      "tags":"animal mammal",
      "picture":"298.jpg",
      "audio":""
   }
];


  constructor() { }
}
