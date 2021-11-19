let baseUrl = 'http://localhost:3030';

export const loginUrl = `${baseUrl}/users/login`;
export const registerUrl = `${baseUrl}/users/register`;
export const logoutUrl = `${baseUrl}/users/logout`;

export const createBook = `${baseUrl}/data/books`;
export const getBooks = `${baseUrl}/data/books?sortBy=_createdOn%20desc`;
export const getBook = (id) => `${baseUrl}/data/books/${id}`;
export const updateBook = (id) => `${baseUrl}/data/books/${id}`;
export const deleteBook = (id) => `${baseUrl}/data/books/${id}`;
export const getUserBooks = (userId) => `${baseUrl}/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
