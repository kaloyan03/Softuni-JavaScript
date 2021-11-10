import authService from './authService.js';

async function jsonRequest(requestMethod, url, element, authRequest, skipResult) {
    let fetchBody = {
        method: requestMethod.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
        },
        body: undefined,
    }

    if (authRequest === true) {
        fetchBody['headers']['X-Authorization'] = authService.getAuthToken();
    } 

    if (element !== undefined) {
        fetchBody['body'] = JSON.stringify(element);
    }

    let result = undefined;

    if (!skipResult) {
        result = await fetch(url, fetchBody)
        .then(body => body.json())
    } else {
        result = await fetch(url, fetchBody)
    }
    
    return result;
}

export { jsonRequest };