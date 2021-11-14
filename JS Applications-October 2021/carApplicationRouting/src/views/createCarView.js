import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderView } from '../renderingMiddleware.js';
import { createCar } from '../services/carsService.js';

const createCarTemplate = (onClick) => html`
<section id="add-car-page">
    <form class="row g-3">
        <div class="col-md-2">
            <label for="validationCustom01" class="form-label">Brand</label>
            <input type="text" name="brand" class="form-control" id="brand">
        </div>
        <div class="col-md-2">
            <label for="validationCustom02" class="form-label">Model</label>
            <input type="text" name="model" class="form-control" id="model">
        </div>
        <div class="col-md-2">
            <label for="validationCustom03" class="form-label">Price</label>
            <input type="text" name="price" class="form-control" id="price">
        </div>
        </div>
        <div class="col-md-2">
            <label for="validationCustom03" class="form-label">Image</label>
            <input type="text" name="image" class="form-control" id="image">
        </div>
        <div class="col-md-2">
            <label for="validationCustom03" class="form-label">Description</label>
            <input type="text" name="description" class="form-control" id="description">
        </div>
        <div class="col-12">
            <button class="btn btn-primary" @click=${onClick} type="submit">Add car</button>
        </div>
    </form>
</section>
`

export function createCarPage(context) {
    const clickHandler = (e) => {
        e.preventDefault();
        let brandElement = document.getElementById('brand');
        let modelElement = document.getElementById('model');
        let priceElement = document.getElementById('price');
        let imageElement = document.getElementById('image');
        let descriptionElement = document.getElementById('description');
        let newCar = {
            brand: brandElement.value,
            model: modelElement.value,
            image: imageElement.value,
            price: priceElement.value,
            description: descriptionElement.value,
        }
        
        createCar(newCar)

        context.page.redirect('/cars');
    }

    let templateResult = createCarTemplate(clickHandler);
    renderView(templateResult);
}
