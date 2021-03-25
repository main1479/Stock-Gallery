import View from './view.js';

class SearchView extends View {
	_parentEl = document.querySelector('.form');

   addHandlerSearch(handler){
      this._parentEl.addEventListener('submit', function(e){
         e.preventDefault();
         const query = this.querySelector('.search__input');
         handler(query.value);
         // query.value = '';
      })
   }

}

export default new SearchView();
