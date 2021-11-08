import {jsonRequest} from './httpService.js';

let baseUrl = 'http://localhost:3030';

function getComments() {
    return jsonRequest('GET', `${baseUrl}/jsonstore/collections/myboard/comments`)
}

function createComments(body) {
    return jsonRequest('POST', `${baseUrl}/jsonstore/collections/myboard/comments`, body);
}

let commentsService = {
    getComments,
    createComments,
}

export default commentsService;