import 'core-js/stable';
import 'regenerator-runtime/runtime';

const deckContainer = document.querySelector('.results');
const btnAddCard = document.querySelector('.btn--add-card');

const renderSpinner = function (parentEl) {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const render = function (data) {
  if (!data || (Array.isArray(data) && data.length === 0))
    return this.renderError();

  this._data = data;
  const markup = this._generateMarkup();

  // limpiar y agregar el html mas reutilizable
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
};

const _generateMarkup = function (parentEl) {
  renderSpinner(deckContainer);
  markup = `<li class="deck deck-active">
  <i class="ion-ios-folder icon-small"></i>
  <div class="deck-text">
    <h4>Historia</h4>
    <p>some info about deck 1</p>
  </div>
  <div class="progress lack">
    <div class="progress__fill-lack"></div>
    <span class="progress__text"></span>
  </div>
  <div class="progress track">
    <div class="progress__fill-track"></div>
    <span class="progress__text"></span>
    <p>30</p>
  </div>

  <ul class="cards">
    <li class="card corner-left">
      <i class="ion-ios-bookmarks icon-small"></i>
      <p>Card1</p>
    </li>
    <li class="card">
      <i class="ion-ios-bookmarks icon-small"></i>
      <p>Card2</p>
    </li>
    <li class="card">
      <i class="ion-ios-close icon-small"></i>
      <p>Card3</p>
    </li>
    <li class="card corner-right">
      <i class="ion-ios-bookmarks icon-small"></i>
      <p>Card4</p>
    </li>
  </ul>
</li>`;

  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
console.log(btnAddCard);
console.log(deckContainer);
_generateMarkup(deckContainer);
