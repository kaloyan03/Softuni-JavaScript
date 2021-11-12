import * as request from './httpService.js';
import * as api from '../api.js';

export function saveDataToStorage(token, email, userId) {
    localStorage.setItem('auth-token', token);
    localStorage.setItem('user-email', email);
    localStorage.setItem('user-id', userId);
}

export function getUserId() {
    return localStorage.getItem('user-id');
}

export function getAuthToken() {
    return localStorage.getItem('auth-token');
}

export function clearStorage() {
    localStorage.clear();
}

export function loginUser(userData) {
    request.post(api.loginUrl, userData)
    .then(result => {
        saveDataToStorage(result['accessToken'], result['email'], result['_id'])
    })
}

export function registerUser(userData) {
    request.post(api.registerUrl, userData)
    .then(result => {
        saveDataToStorage(result['accessToken'], result['email'], result['_id'])
    })
}


export function logoutUser() {
    request.get(api.logoutUrl, undefined, true, true)
}