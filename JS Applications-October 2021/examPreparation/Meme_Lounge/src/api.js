let baseUrl = 'http://localhost:3030';

export const loginUrl = `${baseUrl}/users/login`;
export const registerUrl = `${baseUrl}/users/register`;
export const logoutUrl = `${baseUrl}/users/logout`;

export const memesApi = `${baseUrl}/data/memes?sortBy=_createdOn%20desc`;
export const userMemesApi = (userId) => `${baseUrl}/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
export const memeApi = `${baseUrl}/data/memes`; 