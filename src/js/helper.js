import { REQ_TIMEOUT_SEC, API_KEY } from './config.js';

const reqTimeout = async function (s) {
	return new Promise((_, reject) => {
		setTimeout(() => {
			reject(`Request took too long! timeout after ${s} seconds :(`);
		}, s * 1000);
	});
};

export const API_CALL = async function (url) {
	try {
		const fetchPromise = fetch(url, {
			headers: {
				Authorization: API_KEY,
			},
		});
		const res = await Promise.race([reqTimeout(REQ_TIMEOUT_SEC), fetchPromise]);
		const data = await res.json();
		if (!res.ok) throw Error;
		return data;
	} catch (err) {
		throw err;
	}
};
