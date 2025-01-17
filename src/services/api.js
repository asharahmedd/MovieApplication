const API_KEY = 'd6233156be4ac1163ea09750d69ed3a4';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);//using await since its an async function,using api key to authorise ourselves and the rest is the normal url(this is known as an endpoint)
    const data = await response.json(); //grab the json format from here
    return data.results; //return the .results
}
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);//using await since its an async function,using api key to authorise ourselves and the rest is the normal url(this is known as an endpoint)
    const data = await response.json(); //grab the json format from here
    return data.results; //return the .results
}
export const getPopularTVShows = async () => {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
export const gettvshowsairingtoday = async () => {
    const response = await fetch(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
export const gettvshowstoprated = async () => {
    const response = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const gettvshowsonair = async () => {
    const response = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};