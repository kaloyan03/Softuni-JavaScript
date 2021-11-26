import { getSessionToken, isAuthenticated } from '../services/authService.js';

export function request(url, options) {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                response.json()
                    .then(error => {
                        const errorMessage = error['message'];
                        throw new Error(errorMessage)
                    })
                    .catch(err => {
                        alert(err);
                        throw new Error(err);
                    })
            } else if (response.status == 204) {
                return response
            } else {
                return response.json()
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

    let isAuth = isAuthenticated();

    if (isAuth) {
        options['headers']['X-Authorization'] = getSessionToken();
    }

    return options;
}

export function get(url) {
    return request(url, createOptions());
}
export const post = (url, data) => request(url, createOptions('POST', data))
export const put = (url, data) => request(url, createOptions('PUT', data))
export const del = (url) => request(url, createOptions('DELETE'))