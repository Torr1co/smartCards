import icons from 'url:../../img/icons.svg';
import View from './view';

class DeckResultsView extends View {
  _parentElement = document.querySelector('.results');
  _rightCorner;

  _generateMarkup() {
    // console.log(Math.ceil(this._data.length));
    return `${this._data.map(this._generateMarkupDeck.bind(this)).join('')}`;
  }
  _generateMarkupDeck(deck) {
    this._rightCorner = Math.ceil(deck.cards.length / 4) * 4 - 1;

    return `<li class="deck">
          
          <i class="ion-ios-folder icon-small"></i>
          <div class="deck-text">
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
    
      <ul class="cards">
        ${deck.cards.map(this._generateMarkupCard.bind(this)).join('')}        
      </ul>
    </li>`;
  }

  _generateMarkupCard(card, i) {
    if (i == this._rightCorner)
      return `
    <li class="card corner-right">
          <i class="ion-ios-close icon-small"></i>
          <p>${card.front}</p>
        </li>`;
    else if (i == this._rightCorner - 3)
      return `<li class="card corner-left">
       <i class="ion-ios-bookmarks icon-small"></i>
       <p>${card.front}</p>
     </li>`;
    else
      return `<li class="card">
    <i class="ion-ios-bookmarks icon-small"></i>
    <p>${card.front}</p>
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
}

export default new DeckResultsView();
