import { jsonRequest } from './httpService.js';

let authUrl = 'http://localhost:3030/users';

function isLoggedIn() {
    if (getAuthToken() !== null) {
        return true;
    } else {
        return false;
    }
}

function getAuthToken() {
    return localStorage.getItem('auth-token');
}

async function registerUser(userInfo) {
    let result = await jsonRequest('post',`${authUrl}/register`, userInfo)
    setAuthToken(result['accessToken']);
    setUserId(result['_id']);
    setUsername(userInfo['email']);
}

async function loginUser(userInfo) {
    let result = await jsonRequest('post',`${authUrl}/login`, userInfo)
    setAuthToken(result['accessToken']);
    setUserId(result['_id']);
    setUsername(userInfo['email']);
}


async function logoutUser() {
    await jsonRequest('get',`${authUrl}/logout`, undefined, true, true)
    clearStorage();
}


function setAuthToken(token) {
    localStorage.setItem('auth-token', token);
}

function setUserId(id) {
    localStorage.setItem('user-id', id);
}

function getUserId() {
    return localStorage.getItem('user-id');
}

function getUsername() {
    return localStorage.getItem('auth-username');
}

function setUsername(username) {
    localStorage.setItem('auth-username', username);
}

function clearStorage() {
    localStorage.clear();
}

let authService = {
    isLoggedIn,
    setAuthToken,
    getAuthToken,
    setUsername,
    getUsername,
    registerUser,
    loginUser,
    logoutUser,
    getUserId,
    setUserId,
}

export default authService;