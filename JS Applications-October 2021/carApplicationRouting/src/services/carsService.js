import * as request from './httpService.js';
import * as api from '../api.js';

export function createCar(carData) {
    request.post(api.carsUrl, carData, true)
}  

export function getCars() {
    return request.get(api.carsUrl)
}  

export function getCar(carId) {
    return request.get(api.carUrl(carId), undefined, true)
}  