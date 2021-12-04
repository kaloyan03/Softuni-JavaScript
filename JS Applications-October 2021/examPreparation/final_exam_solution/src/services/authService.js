import * as request from '../api/requester.js';
import * as url from '../api/urls.js';

function login(data) {
    return request.post(url.loginUrl, data)
}

function logout() {
    return request.get(url.logoutUrl)
}

function register(data) {
    return request.post(url.registerUrl, data)
}

export { 
    login,
    register,
    logout,
}