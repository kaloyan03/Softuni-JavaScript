let baseUrl = 'http://localhost:3030';

export let loginUrl = `${baseUrl}/users/login`;
export let registerUrl = `${baseUrl}/users/register`;
export let logoutUrl = `${baseUrl}/users/logout`;

export let getAlbumsUrl = `${baseUrl}/data/albums?sortBy=_createdOn%20desc&distinct=name`;
export let getAlbumUrl = (albumId) => `${baseUrl}/data/albums/${albumId}`;
export let createAlbumUrl = `${baseUrl}/data/albums`;
export let deleteAlbumUrl = (albumId) => `${baseUrl}/data/albums/${albumId}`;
export let editAlbumUrl = (albumId) => `${baseUrl}/data/albums/${albumId}`;
export let searchAlbumUrl = (query) => `${baseUrl}/data/albums?where=name%20LIKE%20%22${query}%22`;
