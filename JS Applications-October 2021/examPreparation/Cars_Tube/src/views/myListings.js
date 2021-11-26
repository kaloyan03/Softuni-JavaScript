import { html } from '../lib.js';

import { getUserId } from '../services/authService.js';
import { getMyListings } from '../services/carService.js';
import { carTemplate } from './common/carTemplate.js';
const myListingsTemplate = (model) => html`
<!-- My Listings Page -->
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
    ${model['cars'].length != 0
    ? html`
    ${model['cars'].map(c => carTemplate(c))}
    `
    : html`
     <p class="no-cars"> You haven't listed any cars yet.</p>
    `}
    </div>
</section>
`

function viewPage(context) {
    let userId = getUserId();

    getMyListings(userId)
    .then(data => {

        let viewModel = {
            cars: data,
        }
    
        let templateResult = myListingsTemplate(viewModel);
        context.renderView(templateResult);
    })
}


export default {
    viewPage,
}