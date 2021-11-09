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

function setAuthToken(token) {
    localStorage.setItem('auth-token', token);
}

function getUsername() {
    return localStorage.getItem('auth-username');
}

function setUsername(username) {
    localStorage.setItem('auth-username', username);
}

let authService = {
    isLoggedIn,
    setAuthToken,
    getAuthToken,
    setUsername,
    getUsername,
}

export default authService;