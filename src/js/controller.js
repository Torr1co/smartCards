import * as model from './model.js';
import deckResultsView from './Views/deckResultsView.js';
import addCardView from './Views/addCardView.js';
import config from './config.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import icons from 'url:../img/icons.svg';
import { TIMEOUT_SEC } from '../../../forkify/src/js/config.js';

const deckContainer = document.querySelector('.results');

const controlDeckResults = function () {
  deckResultsView.renderSpinner();
  //renderiza los resultados de decks predefinida (ponele)
  deckResultsView.render(model.state.decks);
  // deckResultsView.update();
};

const controlAddCard = function (newCard) {
  //se añade la carta
  model.uploadCard(newCard);
  console.log('añadido');

  //se vuelve a renderizar la data
  deckResultsView.render(model.state.decks);

  //mostrar mensaje de exito
  addCardView.renderMessage();
  //cerrar ventana del form
  /* setTimeout(function () {
    addCardView.toggleWindow();
  }, TIMEOUT_SEC * 1000); */
};
//inicializador de todas las funciones
const init = function () {
  //deckResultsView.addHandlerRender(controlDeckResults);
  //addCardView.addHandlerUpload(controlAddCard);
};
init();
