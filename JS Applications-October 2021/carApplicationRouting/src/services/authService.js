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

export function isAuthenticated() {
    return Boolean(localStorage.getItem('user-id'));
}

export function getAuthToken() {
    return localStorage.getItem('auth-token');
}

export function clearStorage() {
    localStorage.clear();
}

export function loginUser(userData) {
    return request.post(api.loginUrl, userData)
}

export function registerUser(userData) {
    return request.post(api.registerUrl, userData)
}


export function logoutUser() {
    request.get(api.logoutUrl, undefined, true, true)
}