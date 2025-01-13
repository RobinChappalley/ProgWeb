class Deck {
  #cards = [];
  constructor(options) {
    this.createFullDeck(options);
  }
   createFullDeck = (options) =>  {
    console.log(options);
    const suits = options.suits;
    const values = options.values;
    for (const suit of suits) {
      for (const value of values) {
        this.#cards.push({ suit, value });
      }
    }
  }
    get cards() {
        return this.#cards;
    }
}

export default Deck;