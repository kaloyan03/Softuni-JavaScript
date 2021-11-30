function setUserData(email, username, gender, id ,token) {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('userId', id);
    sessionStorage.setItem('accessToken', token);
}

function getUsername() {
    return sessionStorage.getItem('username');
}

function getUserId() {
    return sessionStorage.getItem('userId');
}

function getUserEmail() {
    return sessionStorage.getItem('email');
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
    getUsername,
    getUserId,
    getUserEmail,
    getSessionToken,
    isAuthenticated,
    clearSessionStorage,
}