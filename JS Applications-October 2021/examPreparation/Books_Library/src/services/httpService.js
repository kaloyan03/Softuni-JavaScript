import { getAuthToken } from './authService.js';

function request(method, url, body ,isAuthorized, skipResult) {
    let options = {
        method,
        headers: {},
        body: undefined,
    }

    if (body) {
        options['body'] = JSON.stringify(body);
        options['headers']['Content-Type'] = 'application.json';
    }

    if (isAuthorized) {
        options['headers']['X-Authorization'] = getAuthToken();
    }

    if (skipResult) {
        return fetch(url, options)
    }

    return fetch(url, options).then(body => body.json())
}


export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const del = request.bind(null, 'DELETE')