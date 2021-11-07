import { jsonRequest } from "./httpService.js";

let baseUrl = 'http://localhost:3030/jsonstore/collections/books';

function getBooksData() {
    return jsonRequest('get', baseUrl);
}

function createBook(body) {
    return jsonRequest('post', baseUrl, body)
}

function editBook(body, id) {
    return jsonRequest('put', `${baseUrl}/${id}`, body);
}

function deleteBook(id) {
    return jsonRequest('delete', `${baseUrl}/${id}`);
}

let bookService = {
    getBooksData,
    createBook,
    editBook,
    deleteBook,
}

export default bookService;