import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderView } from '../renderingMiddleware.js';

const createCarTemplate = (submitHandler) => html`
<section id="add-car-page">
    <form class="row g-3 needs-validation" @sumbit=${submitHandler} novalidate>
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">Brand</label>
            <input type="text" name="brand" class="form-control" id="validationCustom01">
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Model</label>
            <input type="text" name="model" class="form-control" id="validationCustom02">
        </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom03" class="form-label">Description</label>
            <input type="text" name="description" class="form-control" id="validationCustom03">
        </div>

        <div class="col-12">
            <button class="btn btn-primary" type="submit">Add car</button>
        </div>
    </form>
</section>
`

export function createCarPage(context) {
    const submitHandler = (e) => {
        e.preventDefault();
        let formElement = e.target;
        let formData = new FormData(formElement);

    }

    let templateResult = createCarTemplate(submitHandler);
    renderView(templateResult);
}
