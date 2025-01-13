import Deck from './Deck.js';
import Card from './Card.js';
import shuffle from './node_modules/lodash-es/shuffle.js';

const options = {
    suits: ['hearts', 'diamonds', 'clubs', 'spades'],
    values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    };
const deck = new Deck(options)
deck.shuffleCards()
deck.displayCards()