import { jsonRequest } from "./httpService.js";

let baseUrl = 'http://localhost:3030/jsonstore/advanced/table';

function getData() {
    return jsonRequest('get', baseUrl);
}

let dataService = {
    getData,
}

export default dataService;