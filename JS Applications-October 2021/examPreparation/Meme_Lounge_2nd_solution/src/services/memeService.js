import * as requester from '../api/requester.js';
import * as url from '../api/urls.js';


export function getAllMemes() { return requester.get(url.getAllMemesUrl)}
export function getMeme(memeId) { return requester.get(url.detailsMemeUrl(memeId))}
export function createMeme(data) { return requester.post(url.postMemeUrl, data)}
export function updateMeme(data, memeId) { return requester.put(url.updateMemeUrl(memeId), data)}
export function deleteMeme(memeId) { return requester.del(url.deleteMemeUrl(memeId))}
export function getUserMemes(userId) { return requester.get(url.getUserMemesUrl(userId))}
