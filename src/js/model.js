export const state = {
  decks: [
    {
      name: 'tutorial Quiz',
      description: 'some info about deck 1',
      progressDeck: 0,
      progressDay: 0,
      cardIndex: 0,
      cards: [
        {
          front: 'tutorial 1',
          back: 'Este es el momento de realizar la autoevaluación🧐. Notarás que hay 3 opciones debajo, cada una de ellas tendrá un impacto sobre tu porcentaje de conocimiento. Una vez seguro de tu respuesta selecciona una opción y clickea sobre enviar los datos arriba a la derecha para continuar jugando!',
          deck: 'tutorial Quiz',
          theme: '',
        },
        {
          front: 'tutorial 2',
          back: ' El porcentaje de conocimieneto (abajo a la derecha) intentará mostrar cuanto conoces sobre el mazo jugado(aunque aún no esta implementado😤).',
          deck: 'tutorial Quiz',
          theme: '',
        },
        {
          front: 'tutorial 3     ¿Quienes son los creadores de la aplicación?',
          back: '@Fabriziotorrico e @IñakiLapeyre',
          deck: 'tutorial Quiz',
          theme: '',
        },
      ],
    },
  ],
  /* tutorial: {
    active: true,
    numPages: 4,
    curPage: 0,
    data: [
      {
        text: `<h3>Bienvenido a IntelliCards!</h3>
    <p>
      <strong>Intellicards</strong> es una fant&aacute;stica aplicación que
      te ayudar&aacute; a <strong>mejorar</strong> tu capacidad de
      establecer y recordar conceptos🤓. Podrás mantener tus estudios al
      d&iacute;a facilmente utilizando nuestras tecnicas de aprendizaje y
      practica👩‍🎓👨‍🎓, <strong>compartir</strong> tus estudios con otras
      personas para revisar errores y <strong>analizar</strong> tus
      resultados en nuestra seccion de graficos📈
    </p>`,
        t: 50,
        l: 50,
        w: 40,
        highlight: '',
      },
      {
        text: `<p>
      Actualmente solo disponemos de la seccion de practica pues la aplicación
      se encuentra en alfa😨😬 pero pronto saldr&aacute;n nuevas
      actualizaci&oacute;nes para que dispongan de todas nuestras
      funci&oacute;nes so&ntilde;adas para la app
      </p>`,
        t: 50,
        l: 50,
        w: 40,
        highlight: 'main-nav',
      },
      {
        text: `<p>
        En la seccion de practica puedes comenzar aprendiendo con nuestro
        juego de quizes🎯🎰. El juego se basa en realizar una autoevaluación de tus propias cartas, las cartas tienen un frente y un dorso, el <strong>dorso</strong> debe ser la
        información que quieras <strong>recordar</strong> y el
        <strong>frente</strong> tiene que
        <strong>activar tu memoria</strong> para el dorso, puede ser una
        frase, palabra o pregunta😉.
      Puedes <strong>agregar</strong> una carta rapida clickeando
      sobre el + abajo a la derecha
    </p>`,
        t: 50,
        l: 50,
        w: 40,
        highlight: 'btn--add-card',
      },
      {
        text: `<p>
        Al <strong>agregar</strong> una carta se desplegará este formulario a
        completar con la información del frente, el dorso y el mazo donde
        querrás ubicarla, si el mazo que escribes no existe, se <strong>creará uno
        nuevo</strong> con la carta incluida. <br />El tema aún no tiene función
        incluida pero su objetivo es tener una mayor personalizacion en tus
        cartas
      </p>`,
        t: 38,
        l: 78,
        w: 25,
        highlight: 'form',
      },
      {
        text: `<p>
      Las cartas se guardaran en el <stong>mazo</stong> deseado y podrás comenzar a jugar!🥳. Para realizar tu primera autoevaluación clickea sobre el boton de
      play del mazo al terminar el tutorial.
      También puede <strong>eliminar</strong> cartas rapidamente clickeando sobre ellas en un mazo❌, si borras todas las cartas de un mazo, el mazo también se eliminará
    </p>`,
        t: 75,
        l: 41,
        w: 45,
        highlight: 'deck',
      },
    ],
  }, */
  tutorial: {
    active: true,
    numPages: 4,
    curPage: 0,
    data: [
      {
        text: `<h2>Bienvenido a IntelliCards!</h2>
    <p>
      <strong>Intellicards</strong> es una fant&aacute;stica aplicación que
      te ayudar&aacute; a <strong>mejorar</strong> tu capacidad de
      establecer y recordar conceptos🤓. Podrás mantener tus estudios al
      d&iacute;a facilmente utilizando nuestras tecnicas de aprendizaje y
      practica👩‍🎓👨‍🎓, <strong>compartir</strong> tus estudios con otras
      personas para revisar errores y <strong>analizar</strong> tus
      resultados en nuestra seccion de graficos📈
    </p>`,
        t: 50,
        l: 50,
        w: 40,
        highlight: '',
      },
      {
        text: `<p>
      Actualmente solo disponemos de la seccion de practica pues la aplicación
      se encuentra en alfa😨😬 pero pronto saldr&aacute;n nuevas
      actualizaci&oacute;nes para que dispongan de todas nuestras
      funci&oacute;nes so&ntilde;adas para la app
      </p>`,
        t: 50,
        l: 50,
        w: 40,
        highlight: 'main-nav',
      },
      {
        text: `<p>
        En la seccion de practica puedes comenzar aprendiendo con nuestro
        juego de quizes🎯🎰. El juego se basa en realizar una autoevaluación de tus propias cartas, las cartas tienen un frente y un dorso, el <strong>dorso</strong> debe ser la
        información que quieras <strong>recordar</strong> y el
        <strong>frente</strong> tiene que
        <strong>activar tu memoria</strong> para el dorso, puede ser una
        frase, palabra o pregunta😉.
      Puedes <strong>agregar</strong> una carta rapida clickeando
      sobre el + abajo a la derecha
    </p>`,
        t: 50,
        l: 50,
        w: 40,
        highlight: 'btn--add-card',
      },
      {
        text: `<p>
        Al <strong>agregar</strong> una carta se desplegará este formulario a
        completar con la información del frente, el dorso y el mazo donde
        querrás ubicarla, si el mazo que escribes no existe, se <strong>creará uno
        nuevo</strong> con la carta incluida. <br />El tema aún no tiene función
        incluida pero su objetivo es tener una mayor personalizacion en tus
        cartas
      </p>`,
        t: 38,
        l: 78,
        w: 25,
        highlight: 'form',
      },
      {
        text: `<p>
      Las cartas se guardaran en el <stong>mazo</stong> deseado y podrás comenzar a jugar!🥳. Para realizar tu primera autoevaluación clickea sobre el boton de
      play del mazo al terminar el tutorial.
      También puede <strong>eliminar</strong> cartas rapidamente clickeando sobre ellas en un mazo❌, si borras todas las cartas de un mazo, el mazo también se eliminará
    </p>`,
        t: 75,
        l: 41,
        w: 45,
        highlight: 'deck',
      },
    ],
  },

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
const initTutorial = function () {
  const storage = localStorage.getItem('tutorialActive');
  if (storage) state.tutorial.active = JSON.parse(storage);
};
initTutorial();

export const finishTutorial = function () {
  localStorage.setItem('tutorialActive', false);
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

export const getTutoResults = function (page = state.search.page) {
  state.tutorial.curPage = page;

  return state.tutorial.data[page];
};

// export const loadCard = (aun no )
