let baseUrl = 'http://localhost:3030';

export let loginUrl = `${baseUrl}/users/login`;
export let registerUrl = `${baseUrl}/users/register`;
export let logoutUrl = `${baseUrl}/users/logout`;

export let allListingsUrl = `${baseUrl}/data/cars?sortBy=_createdOn%20desc`;
export let createCarListingUrl = `${baseUrl}/data/cars`;
export let getListingUrl = (carId) => `${baseUrl}/data/cars/${carId}`;
export let editListingUrl = (carId) => `${baseUrl}/data/cars/${carId}`;
export let deleteListingUrl = (carId) => `${baseUrl}/data/cars/${carId}`;
export let getMyListingUrl = (userId) => `${baseUrl}/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;


