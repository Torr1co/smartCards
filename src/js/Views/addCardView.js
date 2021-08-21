import icons from 'url:../../img/icons.svg';
import View from './view';

class addCardView extends View {
  _parentElement = document.querySelector('.upload-card');
  _message = 'la carta se cargó exitosamente';

  _window = document.querySelector('.add-card-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.btn--add-card');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerWindow();
  }

  _showForm() {
    const markup = this._generateMarkup();

    // limpiar y agregar el html mas reutilizable
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandlerOpenForm(handler) {
    this._btnOpen.addEventListener('click', function () {
      handler();
    });
  }
  /**
   *
   * @param {function} handler
   * obtiene la data del form y ejecuta la función recibida dando como argumento la data
   * @author fabrizio Torrico
   */
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      //pone toda la data del form en una lista
      const dataArr = [...new FormData(this)];
      //se transforma en un objeto
      const data = Object.fromEntries(dataArr);
      //lleva la data hacia a el model
      handler(data);
    });
  }
  _generateMarkup() {
    return `
      <h3>Carta</h3>
      <label>Frente </label>
      <input
        autocomplete="off"
        placeholder="titulo de la carta..."
        required
        type="text"
        name="front"
      />
      <label>Dorso </label>
      <input
        autocomplete="off"
        placeholder="Informacion a recordar.."
        required
        type="text"
        name="back"
      />
      <label>Customización </label>
      <input
        autocomplete="off"
        id="input_custom"
        required
        placeholder="mazo"
        list="decks"
        type="text"
        maxlength="20"
        name="deck"
      />
      <datalist id="decks">
        ${this._data.map(e => `<option value="${e}"></option>`)}
      </datalist>

      <input
        id="input_custom_right"
        placeholder="tema"
        list="themes"
        type="text"
        name="theme"
      />
      <datalist id="themes">
        <option value="aun no hay :("></option>
      </datalist>

      <button class="btn btn--upload">
        <svg>
          <use href="src/img/icons.svg#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>`;
  }
}
export default new addCardView();
