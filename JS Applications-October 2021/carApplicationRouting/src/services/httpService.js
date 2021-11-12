import { getAuthToken } from "./authService.js";

function requester(method, url, body, authorizedRequest, skipResult) {
    let options = {
        method,
        headers: body !== undefined ? {'Content-Type': 'application/json'}: {},
        body: undefined
    }

    if (body) {
        options['body'] = JSON.stringify(body);
    }

    if (authorizedRequest) {
        options['headers']['X-Authorization'] = getAuthToken();
    }

    if (!skipResult) {
        return fetch(url, options).then(body => body.json())
    }

    return fetch(url, options)
}

export const get = requester.bind(null,'GET');
export const post = requester.bind(null,'POST');
export const put = requester.bind(null,'PUT');
export const del = requester.bind(null,'DELETE');