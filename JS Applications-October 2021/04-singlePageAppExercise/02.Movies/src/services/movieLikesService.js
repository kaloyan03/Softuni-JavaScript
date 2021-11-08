import { jsonRequest } from "./httpService.js";

let baseUrl = 'http://localhost:3030';

function getMovieLikes(movieId) {
    return jsonRequest('GET', `${baseUrl}/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
}

function getUserMovieLikes(userId, movieId) {
    return jsonRequest('GET', `${baseUrl}/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
}

function likeMovie(movieId) {
    return jsonRequest('POST', `${baseUrl}/data/likes`, { 'movieId': movieId }, true);
}

let likesService = {
    getMovieLikes, 
    getUserMovieLikes,
    likeMovie,
}

export default likesService;