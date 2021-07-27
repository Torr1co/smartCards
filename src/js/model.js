export const state = {
  decks: [
    {
      name: 'cadp',
      description: 'some info about deck 1',
      progressDeck: 0,
      progressDay: 0,
      cards: [
        {
          front: 'card1',
          back: 'asd',
          deck: 'cadp',
          theme: '',
        },
        {
          front: 'card2',
          back: 'asd',
          deck: 'cadp',
          theme: '',
        },
        {
          front: 'card3',
          back: 'asd',
          deck: 'cadp',
          theme: '',
        },
        {
          front: 'card4',
          back: 'asd',
          deck: 'cadp',
          theme: '',
        },
      ],
    },
  ],

  /* decks: [
    {
      name: 'cadp',
      cards: [
        {
          front: 'asd',
          back: 'asd',
          deck: 'cadp',
        },
        {
          front: 'dsa',
          back: 'ad',
          deck: 'mat',
        },
      ],
    },
  ], */
  /*[deck[card, card], deck2[card, card-2]] */
};
const addDeck = function (newCard) {
  state.decks.push({
    name: newCard.deck,
    description: `some info about deck ${newCard.deck}`,
    progress: 0,
    cards: [],
  });
  addCard(newCard);
};

//pone la data en el localStorage
const initDecks = function () {
  const storage = localStorage.getItem('decks');
  if (storage) state.decks = JSON.parse(storage);
};
initDecks();

export const addCard = function (newCard) {
  const findDeck = state.decks.find(deck => deck.name === newCard.deck);
  findDeck?.cards.push(newCard) ?? addDeck(newCard);

  localStorage.setItem('decks', JSON.stringify(state.decks));
};

// export const loadCard = (aun no )
