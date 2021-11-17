import * as api from '../api.js';
import * as request from './httpService.js';

export function getMemes() {
    return request.get(api.memesApi)
}

export function getUserMemes(id) {
    return request.get(`${api.userMemesApi(id)}`, undefined, true)
}


export function getMeme(id) {
    return request.get(`${api.memeApi}/${id}`)
}

export function updateMeme(id, body) {
    return request.put(`${api.memeApi}/${id}`, body, true)
}

export function createMeme(body) {
    return request.post(`${api.memeApi}`, body, true)
}

export function deleteMeme(id) {
    return request.del(`${api.memeApi}/${id}`, undefined, true, true)
}