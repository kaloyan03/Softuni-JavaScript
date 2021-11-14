import { html } from '../../node_modules/lit-html/lit-html.js';


import { getCar } from '../services/carsService.js';
import { renderView } from '../renderingMiddleware.js';

const carDescriptionTemplate = (car) => html`
<div class="card mb-3">
  <img src="${car['image']}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${car['brand']}</h5>
    <p class="card-text">Car description: ${car['description']}</p>
    <p class="card-text"><small class="text-muted">Price: ${car['price']}</small></p>
  </div>
</div>

`
export function carDescriptionPage(context) {
  let carId = context.params['id'];
  getCar(carId)
  .then(carInfo => {
    let templateResult = carDescriptionTemplate(carInfo);
    renderView(templateResult);
  })
}