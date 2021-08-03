import icons from 'url:../../img/icons.svg';
import View from './view';

class playDeckView extends View {
  _parentElement = document.querySelector('.section-practice');
  _answer;
  _continue;
  _upload;
  _btnClose;
  //to toggle Window

  _decks = document.querySelector('.section-decks');
  _nav = document.querySelector('.main-nav');
  _cardFormBtn = document.querySelector('.btn--add-card');

  _generateMarkup() {
    return `
      <p>inicializar Vector</p>
      <span class="practice__close"><- Volver</span>
      <div class="practice-options">
        <p>Matematica</p>
        <button class="practice__answer hidden">Mostrar Respuest</button>
        <form class="upload-progress">
          <input
            type="radio"
            id="option__bad"
            name="fav_language"
            value="Mal"
          />
          <label class="option-bad" for="option__bad">Mal</label>
          <input
            type="radio"
            id="option__normal"
            name="fav_language"
            value="Maomeno"
          />
          <label class="option-normal" for="option__normal">Maomeno</label>
          <input
            type="radio"
            id="option__bien"
            name="fav_language"
            value="Bien"
          />
          <label class="option-good" for="option__bien">Bien</label>

          <input
            style="display: unset"
            class="practice__continue"
            type="submit"
            value="Enviar datos"
          />
        </form>
        <p>35%</p>
      </div>`;
  }
  showCards(cards) {
    console.log(cards);
    console.log('es este');
    this._btnClose = document.querySelector('.practice__close');
    this._btnClose.addEventListener('click', this._toggleWindow.bind(this));
    this._toggleWindow();
    //to toggle cards
    this._answer = document.querySelector('.practice__answer');
    console.log(this._answer);
    this._upload = document.querySelector('.upload-progress');
    console.log(this._upload);
    this._continue = document.querySelector('.practice__continue');
    console.log(this._upload);

    let i = 0;
    const cthis = this;

    this._togglePractice(cards[i].front);

    this._answer.addEventListener('click', function () {
      console.log(i);
      cthis._togglePractice(cards[i].back);
    });
    this._continue.addEventListener('click', function (e) {
      e.preventDefault();
      console.log(i);
      i++;
      if (i === cards.length) cthis._toggleWindow();
      else cthis._togglePractice(cards[i].front);
    });
  }

  addHandlerStart(handler) {
    this._btnOpen = document.querySelectorAll('.deck__play');

    this._btnOpen.forEach(btn => {
      btn.addEventListener('click', function (e) {
        //se obtiene el nombre del deck
        const deckName =
          this.previousElementSibling.previousElementSibling.firstElementChild
            .textContent;

        handler(deckName);
      });
    });
  }

  /////////////////////////////////////////////////////////////
  _toggleWindow() {
    this._decks.classList.toggle('hidden');
    this._cardFormBtn.classList.toggle('hidden');
    this._nav.classList.toggle('hidden');
    this._parentElement.classList.toggle('hidden');
  }
  _togglePractice(newText) {
    this._upload.classList.toggle('hidden');
    this._answer.classList.toggle('hidden');
    this._parentElement.firstElementChild.textContent = newText;
  }
  _addHandlerWindowClose() {
    this._btnClose.addEventListener('click', this._toggleWindow.bind(this));
  }
}

export default new playDeckView();
