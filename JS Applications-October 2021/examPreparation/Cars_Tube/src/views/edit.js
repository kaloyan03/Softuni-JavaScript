import { html } from '../lib.js';


import { getListing, editListing } from '../services/carService.js';
const editTemplate = (model) => html`
<!-- Edit Listing Page -->
<section id="edit-listing">
    <div class="container">

        <form id="edit-form" @submit='${model['submitHandler']}'>
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value="${model['car']['brand']}">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value="${model['car']['model']}">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value="${model['car']['description']}">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value="${model['car']['year']}">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${model['car']['imageUrl']}">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value="${model['car']['price']}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`

let cntxt = undefined;

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let brand = formData.get('brand');
    let model = formData.get('model');
    let description = formData.get('description');
    let year = formData.get('year');
    let imageUrl = formData.get('imageUrl');
    let price = formData.get('price');

    if (brand == '' || model == '' || description == '' || year == '' || imageUrl == '' || price == '') {
        alert('All fields must be filled!');
        return;
    }

    if (year <= 0 || price <= 0) {
        alert('Year and Price must be positive numbers!');
        return;
    }

    formElement.reset();

    let car = {
        brand,
        model,
        description,
        year,
        imageUrl,
        price,
    }
    let carId = cntxt.params['id'];

    editListing(carId, car)
        .then(() => {
            cntxt.page.redirect(`/details/${carId}`)
        })
}

function viewPage(context) {
    cntxt = context;
    let carId = context.params['id'];

    getListing(carId)
    .then(data => {
        let viewModel = {
            car: data,
            submitHandler,
        }
        
        let templateResult = editTemplate(viewModel);
        context.renderView(templateResult);
    })
}


export default {
    viewPage,
}