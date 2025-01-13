import Deck from './Deck.js';
import Card from './Card.js';

const options = {
    suits: ['hearts', 'diamonds', 'clubs', 'spades'],
    values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    };
const deck = new Deck(options)
console.log(deck.cards);
deck.displayCards()