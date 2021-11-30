import { isAuthenticated, getSessionToken } from '../util.js';

function request(url, options, skipResult) {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                response.json()
                    .then(error => {
                        throw new Error(error.message);
                    })
                    .catch(err => {
                        alert(err)
                        throw new Error(err)
                    })
            } else {
                if (!skipResult) {
                    return response.json();
                } else {
                    return response;
                } 
            }
        })
}


function createOptions(method = 'GET', data) {
    let options = {
        method,
        headers: {},
    }

    if (data) {
        options['headers']['Content-Type'] = 'application/json';
        options['body'] = JSON.stringify(data);
    }

    if (isAuthenticated()) {
        options['headers']['X-Authorization'] = getSessionToken();
    }

    return options;
}


export function get(url, skipResult) { return request(url, createOptions(undefined, undefined), skipResult)}
export function post(url, data) { return request(url, createOptions('POST', data)) }
export function put(url, data) { return request(url, createOptions('PUT', data)) }
export function del(url) { return request(url, createOptions('DELETE')) }
