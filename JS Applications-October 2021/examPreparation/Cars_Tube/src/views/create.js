import { html } from '../lib.js';


import { createListing } from '../services/carService.js';
const createTemplate = (model) => html`
<!-- Create Listing Page -->
<section id="create-listing">
    <div class="container">
        <form id="create-form" @submit='${model['submitHandler']}'>
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
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
    
    if (year <= 0) {
        alert('Year must be positive number!');
        return;
    }

    if (price <= 0) {
        alert('Price must be positive number!');
        return;
    }
    let car = {
        brand,
        model,
        description,
        year: Number(year),
        imageUrl,
        price: Number(price),
    }

    createListing(car)
        .then(() => {
            cntxt.page.redirect('/all-listings')
            formElement.reset();
        })
    formElement.reset();
}

function viewPage(context) {
    cntxt = context;
    let viewModel = {
        submitHandler,
    }
    
    let templateResult = createTemplate(viewModel);
    context.renderView(templateResult);
}


export default {
    viewPage,
}