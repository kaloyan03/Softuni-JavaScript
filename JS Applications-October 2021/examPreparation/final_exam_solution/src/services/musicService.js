import * as request from '../api/requester.js';
import * as url from '../api/urls.js';

export const getAlbums = () => request.get(url.getAlbumsUrl);
export const getAlbum = (albumId) => request.get(url.getAlbumUrl(albumId));
export const deleteAlbum = (albumId) => request.del(url.deleteAlbumUrl(albumId));
export const editAlbum = (albumId, album) => request.put(url.editAlbumUrl(albumId), album);
export const createAlbum = (album) => request.post(url.createAlbumUrl, album);
export const searchAlbum = (query) => request.get(url.searchAlbumUrl(query));