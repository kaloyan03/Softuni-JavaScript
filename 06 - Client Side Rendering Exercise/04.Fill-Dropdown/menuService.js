import { jsonRequest } from "./httpService.js";

let baseUrl = 'http://localhost:3030/jsonstore/advanced/dropdown';

function getMenuOptions() {
    return jsonRequest('get', baseUrl);
}

function createMenuOption(body) {
    return jsonRequest('post', baseUrl, body);
}

let menuService = {
    getMenuOptions,
    createMenuOption,
}

export default menuService;