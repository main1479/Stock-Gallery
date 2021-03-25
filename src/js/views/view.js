import spinner from 'url:../../img/spinner.svg';
export default class View {
	_parentEl = '';
	_data;
	_errorMessage = 'Something went wrong';

	render(data) {
		if (!data) return;
		this._data = data;
		const markup = this._generateMarkup();
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderSpinner() {
		const markup = `
         <div class="spinner">
            <svg>
               <use xlink:href="${spinner}#icon-spinner"></use>
            </svg>
         </div>
      `;
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentEl.innerHTML = '';
	}
}
