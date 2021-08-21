import * as model from './model.js';
import deckResultsView from './Views/deckResultsView.js';
import addCardView from './Views/addCardView.js';
import playDeckView from './Views/playDeckView.js';
import deleteCardView from './Views/deleteCardView.js';
import tutorialView from './Views/tutorialView.js';
/* import { TIMEOUT_SEC } from './config.js'; */

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import icons from 'url:../img/icons.svg';

const deckContainer = document.querySelector('.results');

const controlDeckResults = function () {
  deckResultsView.renderSpinner();
  //renderiza los resultados de decks predefinida (ponele)
  deckResultsView.render(model.state.decks);
  console.log('rendered');

  //luego de renderizados, obtiene los botones de play
  playDeckView.addHandlerStart(controlPlayDeck);

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
  //se elimina la carta
  model.deleteCard(deckI, cardI);
  //se vuelve a renderizar la data
  controlDeckResults();
};

const controlPlayDeck = function (deckName) {
  //se obtiene la lista de cartas a mostrar
  const cards = model.getCards(deckName);

  //se rendereiza el form adecuado
  playDeckView.render(cards);

  //se inicia el juego
  playDeckView.showCards(cards);

  //se actualiza dependiendo del form
  // playDeckView.addHandlerUpload();
};

const controlAddCardForm = function () {
  const deckNames =
    model.state.decks.length === 0
      ? ['Escribe el nombre del mazo']
      : model.state.decks.map(n => n?.name);

  addCardView.render(deckNames);
};

const controltutorial = function (tutoPage) {
  const tutoPageData = model.getTutoResults(tutoPage);
  tutorialView.render(model.state.tutorial);

  //si se tiene que abrir la carta
  if (tutoPageData.highlight === 'form') {
    tutorialView.manageCard();
    controlAddCardForm();
  }
  //si es el final del tutorial, quitarlo
  if (model.state.tutorial.curPage === model.state.tutorial.numPages) {
    tutorialView.manageFinish(model.finishTutorial);
  }
  tutorialView.updateEnvironment(tutoPageData);
};

//inicializador de todas las funciones
const init = function () {
  deckResultsView.addHandlerRender(controlDeckResults);
  addCardView.addHandlerUpload(controlAddCard);
  addCardView.addHandlerOpenForm(controlAddCardForm);
  tutorialView.addHandlerClick(model.finishTutorial);
  if (model.state.tutorial.active) {
    tutorialView.toggleBackground();
    controltutorial(0);
  }
  tutorialView.addHandlerPagination(controltutorial);
};
init();
