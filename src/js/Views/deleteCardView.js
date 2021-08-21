import View from './view';

class deleteCardView extends View {
  _parentElement = document.querySelector('.results');
  _rightCorner;
  _cards;

  addHandlerDelete(handler) {
    this._cards = document.querySelectorAll('.cards');

    this._cards.forEach(c => {
      c.addEventListener('click', function (e) {
        const cardI = +e.target.closest('.card').dataset.cardindex;
        const deckI = +e.target.closest('.deck').dataset.deckindex;
        handler(deckI, cardI);
      });
    });
  }

  _showForm() {
    const markup = this._generateMarkup();

    // limpiar y agregar el html mas reutilizable
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new deleteCardView();
