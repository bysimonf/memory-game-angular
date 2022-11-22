import { Component, OnInit } from '@angular/core';
import { MemoryCard } from '../memory-card';

@Component({
  selector: 'memory-cards',
  templateUrl: './memory-cards.component.html',
  styleUrls: ['./memory-cards.component.css']
})
export class MemoryCardsComponent implements OnInit {

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

  cardsToCompare: HTMLImageElement[] = [] // using type of line 59 here

  gameEndCount = 0

  constructor() { }

  ngOnInit(): void {
  }

  checkForMatch = () => {
    if (this.cardsToCompare[0].getAttribute('data-pair-id') === this.cardsToCompare[1].getAttribute('data-pair-id')) {  // not sure why getAttribute method is required here
      console.log('it is a match')
      this.cardsToCompare = []
      this.gameEndCount++

      if (this.gameEndCount === this.memoryCards.length / 2) {
        setTimeout(() => {
          alert('The game is finished!')
        }, 1000)
      }
    }

    else {
      setTimeout(() => {
        console.log('sorry no match')
        this.cardsToCompare[0].src = 'assets/cardbackground.jpg'
        this.cardsToCompare[1].src = 'assets/cardbackground.jpg'
        this.cardsToCompare = []
      }, 1000)
    }
  }

  revealCard = () => {

    let selectedCard = event?.target as HTMLImageElement // using "event?" here to make it work - not sure why...
    let selectedCardId = selectedCard.id as any // getting fancy with the type conversion - might be not correct but it's needed for the index in line 63 apparently
  
    selectedCard?.setAttribute('src', `assets/${this.memoryCards[selectedCardId].imagePathInfo}`)

    this.cardsToCompare.push(selectedCard)
  
    if (this.cardsToCompare.length === 2) {
      this.checkForMatch()
    }
  }
}
