import { async } from 'regenerator-runtime';
import * as model from './model.js';
import galleryView from './views/galleryView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';

let req;
let searchFor = '';

const controlLoadImg = async function () {
	try {
		req = 'curated';

		galleryView.renderSpinner();
		await model.getImage(req, searchFor);
		galleryView.render(model.state.photos);
		paginationView.render(model.state);
	} catch (err) {
		console.error(err);
	}
};

const controlSearch = async function (query) {
	try {
		model.state.page = 1;
		req = 'search';
		searchFor = query;
		galleryView.renderSpinner();
		await model.getImage(req, searchFor);
		galleryView.render(model.state.photos);
		paginationView.render(model.state);
	} catch (err) {
		console.error(err);
	}
};

const controlPagination = async function (currPage) {
	try {
		model.state.page = currPage;
		galleryView.renderSpinner();
		await model.getImage(req, searchFor);
		galleryView.render(model.state.photos);
		paginationView.render(model.state);
	} catch (err) {
		console.error(err);
	}
};

const init = function () {
	searchView.addHandlerSearch(controlSearch);
	controlLoadImg();
	paginationView.addHandlerPagination(controlPagination);
};
init();
