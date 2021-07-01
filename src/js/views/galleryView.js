import View from './view.js';

class GalleryView extends View {
	_parentEl = document.querySelector('.gallery');
	_column = 3;

	_generateMarkup() {
		let a = this._data;
		let chunk = [];
		while (a.length > 0) {
			chunk.push(a.splice(0, this._column));
		}
		console.log(chunk);
		return chunk
			.map((item) => {
				return `
				<div class="item">
					${item.map(
						(img) => `<a href="${img.url}" target="_blank">
						<img src="${img.src.large}" alt="image" />
						<h3>${img.photographer}</h3>
					</a>`
					).join('')}
				</div>
			`;
			})
			.join('');
	}
}

export default new GalleryView();
