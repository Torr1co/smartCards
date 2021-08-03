import * as model from './model.js';
import deckResultsView from './Views/deckResultsView.js';
import addCardView from './Views/addCardView.js';
import { TIMEOUT_SEC } from './config.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import icons from 'url:../img/icons.svg';
import playDeckView from './Views/playDeckView.js';
import deleteCardView from './Views/deleteCardView.js';

const deckContainer = document.querySelector('.results');

const controlDeckResults = function () {
  deckResultsView.renderSpinner();
  //renderiza los resultados de decks predefinida (ponele)
  deckResultsView.render(model.state.decks);
  console.log('rendered');

  //luego de renderizados, obtiene los botones de play
  playDeckView.addHandlerStart(controlplayDeck);

  // a cada carta se le pone la animacion al señalar;
  deckResultsView.handlerHover();

  //a cada carta se le añade la funcion de eliminar
  deleteCardView.addHandlerDelete(controlDeleteCard);
};

const controlAddCard = function (newCard) {
  //se añade la carta
  model.addCard(newCard);
  console.log('añadido');

  //se vuelve a renderizar la data
  controlDeckResults();

  //mostrar mensaje de exito
  addCardView.renderMessage();
  //cerrar ventana del form
  /* setTimeout(function () {
    addCardView.toggleWindow();
  }, TIMEOUT_SEC * 1000); */
  //ponerle el hover a las cartas
};

const controlDeleteCard = function (deckI, cardI) {
  model.deleteCard(deckI, cardI);
  controlDeckResults();
};

const controlplayDeck = function (deckName) {
  //se obtiene la lista de cartas a mostrar
  const cards = model.getCards(deckName);

  //se rendereiza el form adecuado
  playDeckView.render(cards);

  //se inicia el juego
  playDeckView.showCards(cards);

  //se actualiza dependiendo del form
  // playDeckView.addHandlerUpload();
};
//inicializador de todas las funciones
const init = function () {
  deckResultsView.addHandlerRender(controlDeckResults);
  addCardView.addHandlerUpload(controlAddCard);
};
init();
