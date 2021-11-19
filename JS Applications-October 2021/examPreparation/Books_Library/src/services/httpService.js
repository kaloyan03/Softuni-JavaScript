import { getAuthToken } from './authService.js';

export function request(method, url, body ,isAuthorized, skipResult) {
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
        options['X-Authorization'] = getAuthToken();
    }

    if (skipResult) {
        return fetch(url, options)
    }

    return fetch(url, options).then(body => body.json())
}