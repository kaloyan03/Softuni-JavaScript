import * as request from '../api/api.js';
import * as url from '../api/urls.js';

export function getAllListings() {return request.get(url.allListingsUrl)}
export function createListing(data) {return request.post(url.createCarListingUrl, data)}
export function getListing(id) {return request.get(url.getListingUrl(id))}
export function editListing(id, data) {return request.put(url.editListingUrl(id), data)}
export function deleteListing(id) {return request.del(url.deleteListingUrl(id))}
export function getMyListings(id) {return request.get(url.getMyListingUrl(id))}