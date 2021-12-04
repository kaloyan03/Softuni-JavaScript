function setUserData(email, id ,token) {
    sessionStorage.setItem('email', email);
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

function clearSessionStorage() {
    sessionStorage.clear();
}

export {
    setUserData,
    isAuthenticated,
    clearSessionStorage,
    getSessionToken,
    getUsername,
    getUserId
}