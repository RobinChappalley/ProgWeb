class Deck {
  #cards = [];
  constructor(options) {
    createFullDeck(options);
  }
  createFullDeck(options) {
    const suits = options.suits;
    const values = options.values;
    for (const suit of suits) {
      for (const value of values) {
        this.#cards.push({ suit, value });
      }
    }
  }
}

export default Deck;