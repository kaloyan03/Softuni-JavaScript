export function jsonRequest(method, url, body) {

    let requestBody = {
    method,
    headers: {'Content-Type': 'application/json'},
    }

    if (body) {
        requestBody['body'] = JSON.stringify(body);
    }

    return fetch(url, requestBody).then(body => body.json());
}

