export const state = {
  decks: [
    {
      name: 'cadp',
      description: 'some info about deck 1',
      progressDeck: 0,
      progressDay: 0,
      cardIndex: 0,
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
  //deckIndex: 0,

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

//pone la data en el localStorage
const initDecks = function () {
  const storage = localStorage.getItem('decks');
  if (storage) state.decks = JSON.parse(storage);
};
initDecks();

export const getCards = function (deckName) {
  console.log(`getting Cards of ${deckName}`);
  const findCards = state.decks.find(deck => deck.name === deckName).cards;
  const shuffledCards = findCards.sort((a, b) => 0.5 - Math.random());
  return shuffledCards;
};

const addDeck = function (newCard) {
  state.decks.push({
    name: newCard.deck,
    description: `some info about the deck`,
    progress: 0,
    cards: [],
  });
  addCard(newCard);
};

export const addCard = function (newCard) {
  const findDeck = state.decks.find(deck => deck.name === newCard.deck);
  findDeck?.cards.push(newCard) ?? addDeck(newCard);

  localStorage.setItem('decks', JSON.stringify(state.decks));
};

const deleteDeck = function (deckI) {
  state.decks.splice(deckI, 1);
  localStorage.setItem('decks', JSON.stringify(state.decks));
  console.log('deck eliminado');
};

export const deleteCard = function (deckI, cardI) {
  console.log(state.decks);
  state.decks[deckI].cards.splice(cardI, 1);
  if (state.decks[deckI].cards.length > 0) {
    console.log('carta eliminada');
    localStorage.setItem('decks', JSON.stringify(state.decks));
  } else {
    deleteDeck(deckI);
  }
};

// export const loadCard = (aun no )
