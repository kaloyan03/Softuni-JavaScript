import * as request from '../api/api.js';
import * as url from '../api/urls.js';


function setUserData(username, id ,token) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('userId', id);
    sessionStorage.setItem('accessToken', token);
}

function getUsername() {
    return sessionStorage.getItem('username');
}

function getUserId() {
    return sessionStorage.getItem('userId');
}

function getSessionToken() {
    return sessionStorage.getItem('accessToken');
}

function isAuthenticated() {
    return Boolean(getSessionToken());
}

function login(data) {
    return request.post(url.loginUrl, data)
}

function logout() {
    return request.get(url.logoutUrl)
}

function register(data) {
    return request.post(url.registerUrl, data)
}

function clearSessionStorage() {
    sessionStorage.clear();
}

export {
    setUserData,
    isAuthenticated,
    login,
    register,
    logout,
    clearSessionStorage,
    getSessionToken,
    getUsername,
    getUserId
}