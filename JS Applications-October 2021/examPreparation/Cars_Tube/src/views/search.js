import { html, render } from '../lib.js';


import { getCarsByYear } from '../services/carService.js';
import { carTemplate } from './common/carTemplate.js';
const searchTemplate = (model) => html`
<!-- Search Page -->
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button class="button-list" @click='${model['searchHandler']}'>Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
    </div>
</section>
`

const resultTemplate = (cars) => html`
${cars.length !== 0
? html`
<!--Display all records-->
${cars.map(c => carTemplate(c))}
`
: html`
<!-- Display if there are no matches -->
<p class="no-cars"> No results.</p>
`}
`

let cntxt = undefined;

function searchHandler() {
    let searchInputElement = document.querySelector('#search-input');
    let searchQuery = searchInputElement.value;
    getCarsByYear(searchQuery)
    .then(data => {
        let carsTemplate = resultTemplate(data);
        let listingsDivElement = document.querySelector('div.listings');
        render(carsTemplate, listingsDivElement);

    })

}

function viewPage(context) { 
    cntxt = context;

    let viewModel = {
        searchHandler,
    }
    
    let templateResult = searchTemplate(viewModel);
    context.renderView(templateResult);
}


export default {
    viewPage,
}