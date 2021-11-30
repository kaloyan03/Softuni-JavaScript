import * as requester from '../api/requester.js';
import * as url from '../api/urls.js';



function login(data) {
    return requester.post(url.loginUrl, data)
}

function logout() {
    return requester.get(url.logoutUrl, true)
}

function register(data) {
    return requester.post(url.registerUrl, data)
}

export {
    login,
    register,
    logout,
}