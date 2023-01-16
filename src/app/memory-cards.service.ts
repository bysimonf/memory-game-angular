import { Injectable } from '@angular/core';
import { MemoryCard } from './memory-card';

@Injectable({
  providedIn: 'root'
})

  export class MemoryCardsService {

    memoryCards: MemoryCard[] = [
      {
        name: "bird",
        imagePathInfo: "bird.jpg",
        id: 0,
        pairIdent: 1
      },
      {
        name: "dog",
        imagePathInfo: "dog.jpg",
        id: 1,
        pairIdent: 2
      },
      {
        name: "fish",
        imagePathInfo: "fish.jpg",
        id: 2,
        pairIdent: 3,
      },
      {
        name: "dog",
        imagePathInfo: "dog.jpg",
        id: 3,
        pairIdent: 2
      },
      {
        name: "fish",
        imagePathInfo: "fish.jpg",
        id: 4,
        pairIdent: 3
      },
      {   
        name: "bird",
        imagePathInfo: "bird.jpg",
        id: 5,
        pairIdent: 1
      }
    ]

    getMemoryCards() {
      return this.memoryCards
    }

  constructor() { }
}
