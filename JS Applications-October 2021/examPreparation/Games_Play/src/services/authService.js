import * as api from '../api/api.js';
import * as url from '../api/urls.js';

function setStorageData(authToken, userId, userEmail) {
    localStorage.setItem('auth-token', authToken);
    localStorage.setItem('user-id', userId);
    localStorage.setItem('user-email', userEmail);
}


function getUserToken() {
    return localStorage.getItem('auth-token');
}

function isAuthenticated() {
    return Boolean(getUserToken());
}

function getUserId() {
    return localStorage.getItem('user-id');
}

function getUserEmail() {
    return localStorage.getItem('user-email');
}

async function login(userData) {
    return api.post(url.loginUrl, userData);
}

function clearStorage() {
    localStorage.clear();
}

async function register(userData) {
    return api.post(url.registerUrl, userData);
}

async function logout() {
    return api.logout(url.logoutUrl);
}

export {
    setStorageData,
    getUserToken,
    isAuthenticated,
    getUserId,
    getUserEmail,
    clearStorage,
    login,
    register,
    logout,
}