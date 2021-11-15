let baseUrl = 'http://localhost:3030';

export const loginUrl = `${baseUrl}/users/login`;
export const registerUrl = `${baseUrl}/users/register`;
export const logoutUrl = `${baseUrl}/users/logout`;

export const carsUrl = `${baseUrl}/jsonstore/cars`;
export const carUrl = (id) => `${baseUrl}/jsonstore/cars/${id}`;



