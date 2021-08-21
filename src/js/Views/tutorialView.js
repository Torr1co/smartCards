import View from './view';

class TutorialView extends View {
  _parentElement = document.querySelector('.tutorial__pagination');
  _tutoText = document.querySelector('.tutorial__text');
  _tutoSection = document.querySelector('.section-tutorial');
  _overlay = document.querySelector('.tutoOverlay');
  _cardForm = document.querySelector('.add-card-window');
  _btnClose = document.querySelector('.btn--close-tutorial');
  _highlight;

  //carta
  _showCard() {
    this._cardForm.classList.toggle('hidden');
  }
  manageCard() {
    this._showCard();
    //se le agrega a los botones que se cierre
    document
      .querySelector('.tutorial__btn--next')
      .addEventListener('click', this._showCard.bind(this));
    document
      .querySelector('.tutorial__btn--prev')
      .addEventListener('click', this._showCard.bind(this));
  }

  toggleBackground() {
    this._overlay.classList.toggle('hidden');
    this._tutoSection.classList.toggle('hidden');
  }

  manageFinish(handler) {
    document
      .querySelector('.tutorial__btn--next')
      .addEventListener('click', this.toggleBackground.bind(this));

    document
      .querySelector('.tutorial__btn--next')
      .addEventListener('click', function () {
        handler();
      });
  }
  updateEnvironment(data) {
    //eliminar el previo si existe
    if (this._highlight) {
      this._highlight.classList.toggle('highlight');
    }

    //chequea si hay elemento a resaltar
    this._highlight = data.highlight
      ? document.querySelector(`.${data.highlight}`)
      : '';

    //si hay elemento lo resalta
    if (this._highlight) {
      this._highlight.classList.toggle('highlight');
    }
    //cambia el top, left y width
    this._tutoSection.style.top = `${data.t}%`;
    this._tutoSection.style.left = `${data.l}%`;
    this._tutoSection.style.width = `${data.w}rem`;

    //cambia texto
    this._tutoText.innerHTML = '';
    this._tutoText.insertAdjacentHTML('afterbegin', data.text);
  }

  addHandlerClick(handler) {
    this._btnClose.addEventListener('click', this.toggleBackground.bind(this));
    this._btnClose.addEventListener('click', handler);
  }
  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn ');
      //   console.log(btn);

      if (!btn) return;

      //  para hacerlo integer se le agrega el mas
      const gotoBtn = +btn.dataset.tuto;
      console.log(gotoBtn);
      //   console.log(gotoBtn);
      handler(gotoBtn);
    });
  }

  _generateMarkup() {
    //   recordar que la data se define en el controller
    // console.log(this._data);
    const numPages = this._data.numPages;
    const curPage = this._data.curPage;

    //pagina uno y hay otras paginas
    if (curPage === 0 && numPages > 1) {
      // se le agrega un data-tuto para saber a donde hay que ir
      return `
      <button data-tuto="${curPage + 1}" class="btn tutorial__btn--next">
          <span>Siguiente</span>
          <ion-icon name="arrow-forward" size="medium"></ion-icon>
        </button>`;
    }

    //ultima pagina
    else if (curPage === numPages && numPages > 1) {
      return `
      <button data-tuto="${curPage - 1}" class="btn tutorial__btn--prev">
      <ion-icon name="arrow-back" size="medium"></ion-icon>
        <span>Atras</span>
      </button>
      <button data-tuto="${curPage - numPages}" class="btn tutorial__btn--next">
            <span>Finalizar</span>
            <ion-icon name="checkmark"></ion-icon>
          </button>`;
    }

    //otra pagina
    else {
      return `
      <button data-tuto="${curPage - 1}" class="btn tutorial__btn--prev">
      <ion-icon name="arrow-back" size="medium"></ion-icon>
        <span>Atras</span>
      </button>
      <button data-tuto="${curPage + 1}" class="btn tutorial__btn--next">
            <span>Siguiente</span>
            <ion-icon name="arrow-forward" size="medium"></ion-icon>
          </button>`;
    }

    //pagina uno sin otras paginas
    return '';
  }
}

export default new TutorialView();
