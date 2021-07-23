import icons from 'url:../../img/icons.svg';

class CardsView {
  _parentElement = document.querySelector('.results');
  _data;

  renderSpinner = function () {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    // limpiar y agregar el html mas reutilizable
    this._clear();
    console.log('dou');
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkup() {
    return `<li class="deck deck-active">
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
  }
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new CardsView();
