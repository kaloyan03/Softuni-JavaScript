import {jsonRequest} from './httpService.js';

let baseUrl = 'http://localhost:3030';

function getTopics() {
    return jsonRequest('GET', `${baseUrl}/jsonstore/collections/myboard/posts`)
}

function createTopic(body) {
    return jsonRequest('POST', `${baseUrl}/jsonstore/collections/myboard/posts`, body);
}

let topicService = {
    getTopics,
    createTopic,
}

export default topicService;