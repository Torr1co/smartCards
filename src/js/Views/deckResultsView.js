import View from './view';

class DeckResultsView extends View {
  _parentElement = document.querySelector('.results');
  _rightCorner;
  _cards;
  _errorMessage = 'No has agregado ningún deck/carta';

  _generateMarkup() {
    // console.log(Math.ceil(this._data.length));
    return `${this._data.map(this._generateMarkupDeck.bind(this)).join('')}`;
  }
  _generateMarkupDeck(deck, i) {
    this._rightCorner = Math.ceil(deck.cards.length / 4) * 4 - 1;

    return `<li class="deck" data-deckIndex="${i}">
          
          <ion-icon name="folder" size="medium"></ion-icon>
          <div class="deck__text">
            <h4>${deck.name}</h4>
            <p>${deck.description}</p>
          </div>
          <span>
            <div class="progress lack">
              <div class="progress__fill-lack"></div>
              <span class="progress__text"></span>
            </div>
            <div class="progress track">
              <div class="progress__fill-track"></div>
              <span class="progress__text"></span>
            </div>
          </div>
          </span>
          <ion-icon name="play-circle" size="medium" class="deck__play" style="color:white"></ion-icon>
    
      <ul class="cards">
        ${deck.cards.map(this._generateMarkupCard.bind(this)).join('')}        
      </ul>
    </li>`;
    // acordarse de play-deck--1
  }

  _generateMarkupCard(card, i) {
    const MAXLENGHT = 10;
    if (i == this._rightCorner)
      return `
    <li class="card corner-right" data-cardIndex="${i}">
          <ion-icon name="reader-outline" size="medium"></ion-icon>
          <p>${
            card.front.length > MAXLENGHT
              ? card.front.slice(0, MAXLENGHT)
              : card.front
          }</p>
        </li>`;
    else if (i == this._rightCorner - 3)
      return `<li class="card corner-left" data-cardIndex="${i}">
       <ion-icon name="reader-outline" size="medium"></ion-icon>
       <p>${
         card.front.length > MAXLENGHT
           ? card.front.slice(0, MAXLENGHT)
           : card.front
       }</p>
     </li>`;
    else
      return `<li class="card" data-cardIndex="${i}">
    <ion-icon name="reader-outline" size="medium"></ion-icon>
    <p>${
      card.front.length > MAXLENGHT
        ? card.front.slice(0, MAXLENGHT)
        : card.front
    }</p>
  </li>`;

    // <li class="card corner-left">
    //   <i class="ion-ios-bookmarks icon-small"></i>
    //   <p>Card1</p>
    // </li>

    // <li class="card corner-right">
    //   <i class="ion-ios-bookmarks icon-small"></i>
    //   <p>Card4</p>
    // </li>;
  }
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _handleHover(e) {
    const deleteCard = e.target.closest('.card');
    if (!deleteCard) return;
    const siblings = deleteCard.closest('.cards').querySelectorAll('.card');

    //cambio de icono
    if (deleteCard.firstElementChild.name == 'reader-outline')
      deleteCard.firstElementChild.name = 'close-circle-outline';
    else {
      deleteCard.firstElementChild.name = 'reader-outline';
    }
    //cambio opacidad
    siblings.forEach(el => {
      if (el !== deleteCard) el.style.opacity = this;
    });
  }

  handlerHover() {
    this._cards = document.querySelectorAll('.cards');

    this._cards.forEach(c => {
      c.addEventListener('mouseover', this._handleHover.bind(0.5));
      c.addEventListener('mouseout', this._handleHover.bind(1));
    });
  }
}

export default new DeckResultsView();
