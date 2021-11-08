import { jsonRequest } from './httpService.js';
let baseUrl = 'http://localhost:3030';

function getMovies() {
    return jsonRequest('GET', `${baseUrl}/data/movies`);
}

function getMovie(id) {
    return jsonRequest('GET', `${baseUrl}/data/movies/${id}`);
}

function createMovie(body) {
    return jsonRequest('POST', `${baseUrl}/data/movies`, body, true);
}

function deleteMovie(id) {
    return jsonRequest('DELETE', `${baseUrl}/data/movies/${id}`, undefined, true);
}

function updateMovie(id, body) {
    return jsonRequest('PUT', `${baseUrl}/data/movies/${id}`, body, true)
}

let movieService = {
    getMovies,
    getMovie,
    createMovie,
    deleteMovie,
    updateMovie,
}


export default movieService;