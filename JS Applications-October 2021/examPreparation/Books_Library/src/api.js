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
export const postLikeBook = `${baseUrl}/data/likes`;
export const getLikeBook = (bookId) => `${baseUrl}/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`;
export const getLikeFromUser = (bookId, userId) => `${baseUrl}/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`;