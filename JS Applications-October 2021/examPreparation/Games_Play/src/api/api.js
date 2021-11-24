import { getUserToken } from "../services/authService.js";

async function request(url, options, skipResult) {
    try {
        let response =  await fetch(url, options)

        if (!response.ok) {
            const error =  await response.json();
            throw new Error(error.message)
        }

        if (skipResult) {
            return response;
        }

        let result = await response.json();

        return result;

    } catch(err) {
        alert(err);
        throw new Error(err)
    }
}


function createOptions(method='GET', data, authorizedRequest) {
    let options = {
        method,
        headers: {},
    }

    if (data) {
        options['headers']['Content-Type'] = 'application/json';
        options['body'] = JSON.stringify(data);
    }

    if (authorizedRequest) {
        options['headers']['X-Authorization'] = getUserToken();
    }
    
    return options;
}


export async function get(url) {
    return request(url, createOptions())
}

export async function post(url, data) {
    return request(url, createOptions('POST', data))
}

export async function put(url, data) {
    return request(url, createOptions('PUT', data, true))
}

export async function del(url) {
    return request(url, createOptions('DELETE'))
}

export async function logout(url) {
    return request(url, createOptions('GET', undefined, true), true)
}

export async function create(url, data) {
    return request(url, createOptions('POST', data, true))
}


