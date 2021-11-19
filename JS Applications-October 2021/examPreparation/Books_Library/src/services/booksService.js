import * as api from '../api.js';
import * as request from './httpService.js';

export function getBooks() {
    return request.get(api.getBooks)
}

export function getUserBooks(id) {
    return request.get(`${api.getUserBooks(id)}`, undefined, true)
}

export function getBook(id) {
    return request.get(`${api.getBook(id)}`)
}

export function updateBook(id, body) {
    return request.put(`${api.updateBook(id)}`, body, true)
}

export function createBook(body) {
    return request.post(`${api.createBook}`, body, true)
}

export function deleteBook(id) {
    return request.del(`${api.deleteBook(id)}`, undefined, true, true)
}