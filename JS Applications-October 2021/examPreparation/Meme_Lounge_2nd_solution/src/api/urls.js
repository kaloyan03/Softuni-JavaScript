let baseUrl = 'http://localhost:3030';

export const loginUrl = `${baseUrl}/users/login`;
export const registerUrl = `${baseUrl}/users/register`;
export const logoutUrl = `${baseUrl}/users/logout`;

export const getAllMemesUrl = `${baseUrl}/data/memes?sortBy=_createdOn%20desc`;
export const postMemeUrl = `${baseUrl}/data/memes`;
export const detailsMemeUrl = (memeId) => `${baseUrl}/data/memes/${memeId}`;
export const updateMemeUrl = (memeId) => `${baseUrl}/data/memes/${memeId}`;
export const deleteMemeUrl = (memeId) => `${baseUrl}/data/memes/${memeId}`;
export const getUserMemesUrl = (userId) => `${baseUrl}/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
