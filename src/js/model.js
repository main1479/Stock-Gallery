import { API_CALL } from './helper.js';
import { API_KEY, API_URL } from './config.js';

export const state = {
	page: 1,
	resultsPerPage: 12,
};

export const getImage = async function (req , query, perPage = `per_page=${state.resultsPerPage}`) {
	try {
		const data = await API_CALL(`${API_URL}${req}?${query? `query=${query}`: ''}&page=${state.page}&${perPage}`);
		const { next_page, page, photos, total_results } = data;
		state.nextPage = next_page;
		state.page = page;
		state.photos = photos;
		state.totalResults = total_results;
	} catch (err) {
		throw err;
	}
};

// https://api.pexels.com/v1/curated/?page=2&per_page=12
