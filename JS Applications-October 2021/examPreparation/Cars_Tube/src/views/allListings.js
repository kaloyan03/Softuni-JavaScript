import { html } from '../lib.js';


import { getAllListings } from '../services/carService.js';
import { carTemplate } from './common/carTemplate.js';

const allListingsTemplate = (model) => html`
<!-- All Listings Page -->
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        ${model['cars'].length !== 0
        ? html`
        ${model['cars'].map(c => carTemplate(c))}
        `
        : html`
        <p class="no-cars">No cars in database.</p>
        `}
    </div>
</section>
`
function viewPage(context) {
    getAllListings()
    .then(data => {

        let viewModel = {
            cars: data,
        }
    
        let templateResult = allListingsTemplate(viewModel);
        context.renderView(templateResult);
    })
}


export default {
    viewPage,
}