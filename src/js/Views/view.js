import icons from 'url:../../img/icons.svg';

//todos estoso datos son importantes para todas las clases view

export default class View {
  _data;
  //_errorMessage;
  //_message;
  //_generateMarkup

  /**
   * renderiza el objeto recibido al dom, la view necesita un _generateMarkup()
   * @param {object} data la data a ser recibida
   * @returns {undefined}
   * @author fabrizio torrico
   */
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    // limpiar y agregar el html mas reutilizable
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * actualiza el objeto recibido al dom, necesita un _generateMarkup
   * @param {object} data la data a ser recibida
   * @returns {undefined}
   * @author fabrizio torrico
   */
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    //comparar el viejo con el nuevo y actualizar las diferencias para eso necesitamos:
    //convertir la string markup en un DOM object (es dificil comparar strings)
    const newDom = document.createRange().createContextualFragment(newMarkup);
    //selecciona todos los elementos y los hace un array para compararlos
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      //actualizar texto cambiado
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      //actualizar atributos cambiados
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner = function () {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(err = this._errorMessage) {
    const markup = `
      <div class="error">
        <p>${err}</p>
        <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
        </div>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(mess = this._message) {
    const markup = `
      <div class="message">
        <p>${mess}</p>
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
