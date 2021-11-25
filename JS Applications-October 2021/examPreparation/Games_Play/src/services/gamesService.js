import * as api from '../api/api.js';
import * as url from '../api/urls.js';


export async function getAllGames() {
    return api.get(url.getAllGamesUrl);
}

export async function getGame(gameId) {
    return api.get(url.getGameUrl(gameId));
}

export async function getRecentlyGames() {
    return api.get(url.getRecentGamesUrl);
}

export async function createGame(data) {
    return api.create(url.createGameUrl, data);
}

export async function editGame(data, id) {
    return api.put(url.editGameUrl(id), data);
}

export async function deleteGame(gameId) {
    return api.del(url.deleteGameUrl(gameId));
}

export async function loadAllGameComments(gameId) {
    return api.get(url.gameCommentsUrl(gameId))
}

export async function createGameComment(data) {
    return api.post(url.postCommentUrl, data)
}

