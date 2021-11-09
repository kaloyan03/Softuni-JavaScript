import { jsonRequest } from "./httpService.js";

let baseUrl = 'http://localhost:3030/data/catalog';

function getDashboards() {
    return jsonRequest('get', baseUrl)
}

function getDashboard(id) {
    return jsonRequest('get', `${baseUrl}/${id}`)
}

function createDashboard(body) {
    return jsonRequest('post', baseUrl, body, true)
}

function updateDashboard(body, id) {
    return jsonRequest('put', `${baseUrl}/${id}`, body, true)
}

function deleteDashboard(body, id) {
    return jsonRequest('delete', `${baseUrl}/${id}`,body,true)
}


export default {
    getDashboards,
    getDashboard,
    createDashboard,
    updateDashboard,
    deleteDashboard,
}