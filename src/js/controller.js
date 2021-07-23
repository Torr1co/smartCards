import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import icons from 'url:../img/icons.svg';
import cardsView from './Views/cardsView.js';

const deckContainer = document.querySelector('.results');

const controlCards = function () {
  cardsView.renderSpinner();
  cardsView.render(model.state.card);
};

const init = function () {
  cardsView.addHandlerRender(controlCards);
};
init();
