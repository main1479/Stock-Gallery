import View from './view.js';

class PaginationView extends View {
	_parentEl = document.querySelector('.pagination');

	addHandlerPagination(handler) {
		this._parentEl.addEventListener('click', function (e) {
			const btn = e.target.closest('.btn__pagination');
			if (!btn) return;
         const page = +btn.dataset.goto;
			handler(page);
		});
	}

	_generateMarkup() {
		const currPage = this._data.page;
		const totalPages = Math.floor(this._data.totalResults / this._data.resultsPerPage);

		// First page and there are other pages
		if (currPage === 1 && totalPages > 1) {
			return `<button class="btn btn__pagination pagination--next" data-goto="${currPage + 1}">next</button>`;
		}

		// last page
		if (currPage === totalPages && totalPages > 1) {
			return `<button class="btn btn__pagination pagination--prev" data-goto="${currPage - 1}">prev</button>`;
		}

		// other pages
		if (currPage > 1 && currPage < totalPages) {
			return `
         <button class="btn btn__pagination pagination--prev" data-goto="${currPage - 1}">prev</button>
         <button class="btn btn__pagination pagination--next" data-goto="${currPage + 1}">next</button>
         `;
		}

		// first page and there is no other page
		return '';
	}
}

export default new PaginationView();
