export const state = {
  decks: [
    {
      name: 'cadp',
      description: 'some info about deck 1',
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
const uploadDeck = function (newCard) {
  state.decks.push({
    name: newCard.deck,
    description: `some info about deck ${newCard.deck}`,
    cards: [],
  });
  uploadCard(newCard);
};

export const uploadCard = function (newCard) {
  const findDeck = state.decks.find(deck => deck.name === newCard.deck);
  findDeck?.cards.push(newCard) ?? uploadDeck(newCard);
};
// export const loadCard = (aun no )
