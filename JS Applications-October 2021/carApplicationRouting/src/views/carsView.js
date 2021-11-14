import { html } from '../../node_modules/lit-html/lit-html.js';


import { getCars } from '../services/carsService.js';
import { renderView } from '../renderingMiddleware.js';

const carsTemplate = (cars) => html`
    <section id='car-page'>
        ${cars.map(c => carTemplate(c))}
    </section>
`

const carTemplate = (car) => html`
<div class="card" style="width: 18rem;">
    <img src="${car['image']}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-brand">Brand: ${car['brand']}</h5>
        <h5 class="card-brand">Model: ${car['model']}</h5>
        <p class="card-description">Price: ${car['price']} lv</p>
        <a href="/details/${car['_id']}" class="btn btn-primary">Car Details</a>
    </div>
</div>
`


export function carsPage(context) {
    getCars()
    .then(carsInfo => {
        let templateResult = carsTemplate(Object.values(carsInfo));
        renderView(templateResult);
    })
}