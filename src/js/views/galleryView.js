import View from './view.js';

class GalleryView extends View {
	_parentEl = document.querySelector('.gallery');

	_generateMarkup() {
		return this._data
			.map((item) => {
				return `
				<div class="item">
					<a href="${item.url}" target="_blank">
						<img src="${item.src.large}" alt="image" />
						<h3>${item.photographer}</h3>
					</a>
				</div>
			`;
			})
			.join('');
	}
}

export default new GalleryView();
