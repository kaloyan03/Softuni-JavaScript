import { jsonRequest } from "./httpService.js";

let baseUrl = 'http://localhost:3030/data/catalog';

async function getDashboards() {
    return await jsonRequest('get', baseUrl)
}

async function getDashboard(id) {
    return await jsonRequest('get', `${baseUrl}/${id}`)
}

async function createDashboard(body) {
    return await jsonRequest('post', baseUrl, body, true)
}

async function updateDashboard(body, id) {
    return await jsonRequest('put', `${baseUrl}/${id}`, body, true)
}

async function deleteDashboard(id) {
    return await jsonRequest('delete', `${baseUrl}/${id}`,undefined,true)
}

async function getUserDashboards(id) {
    return await jsonRequest('get', `${baseUrl}?where=_ownerId%3D%22${id}%22`, undefined, true)
}

export default {
    getDashboards,
    getDashboard,
    createDashboard,
    updateDashboard,
    deleteDashboard,
    getUserDashboards,
}