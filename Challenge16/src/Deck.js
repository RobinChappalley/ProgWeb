import Card from "./Card.js";
import shuffle from "lodash-es/shuffle.js";
class Deck {
  #cards = [];
  constructor(options) {
    this.createFullDeck(options);
  }
  createFullDeck = (options) => {
    const suits = options.suits;
    const values = options.values;
    for (const suit of suits) {
      for (const value of values) {
        const card = new Card(value, suit);
        this.#cards.push(card);
      }
    }
  };
  get cards() {
    return this.#cards;
  }
  displayCards() {
    for (const card of this.#cards) {
      card.display();
    }
  }
  shuffleCards() {
    this.#cards = shuffle(this.#cards);
  }
}

export default Deck;
