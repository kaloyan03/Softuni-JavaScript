import { html } from '../lib.js';

import { getUserId } from '../services/authService.js';
import { deleteListing, getListing } from '../services/carService.js';
const detailsTemplate = (model) => html`
<!-- Listing Details Page -->
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${model['car']['imageUrl']}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${model['car']['brand']}</li>
            <li><span>Model:</span>${model['car']['model']}</li>
            <li><span>Year:</span>${model['car']['year']}</li>
            <li><span>Price:</span>${model['car']['price']}$</li>
        </ul>

        <p class="description-para">${model['car']['description']}</p>

        ${model['isOwner'] == true 
        ? html`
        <div class="listings-buttons">
            <a href="/edit/${model['car']['_id']}" class="button-list">Edit</a>
            <a href="javascript:void(0)" @click='${model['deleteHandler']}' class="button-list">Delete</a>
        </div>
        `
        :
        ''}
    </div>
</section>
`
let cntxt = undefined;

function deleteHandler() {
    let carId = cntxt.params['id'];
    deleteListing(carId)
    .then(() => {
        cntxt.page.redirect('/all-listings')
    })
}


function viewPage(context) {
    cntxt = context;
    let carId = context.params['id'];

    getListing(carId)
    .then(data => {
        let viewModel = {
            car: data,
            isOwner: getUserId() == data['_ownerId'] ? true : false,
            deleteHandler,
        }
    
        let templateResult = detailsTemplate(viewModel);
        context.renderView(templateResult);
    })
}


export default {
    viewPage,
}