import { html, nothing, render } from '../lib.js';


import { isAuthenticated } from '../util.js';
import { searchAlbum } from '../services/musicService.js';

const albumTemplate = (album) => html`
<div class="card-box">
    <img src=${album['imgUrl']}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album['name']}</p>
            <p class="artist">Artist: ${album['artist']}</p>
            <p class="genre">Genre: ${album['genre']}</p>
            <p class="price">Price: $${Number(album['price'])}</p>
            <p class="date">Release Date: ${album['releaseDate']}</p>
        </div>

        ${isAuthenticated()
? html`
        <div class="btn-group">
            <a href="/details/${album['_id']}" id="details">Details</a>
        </div>
        `
: nothing}
    </div>
</div>
`


const resultTemplate = (result) => html`
<!--If have matches-->
${result.length != 0
? html`
${result.map(a => albumTemplate(a))}
`
: html`
<!--If there are no matches-->
<p class="no-result">No result.</p>
`}
`

const searchViewTemplate = (model) => html`
<!--Search Page-->
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search"
            placeholder="Enter desired albums's name">
        <button class="button-list" @click=${model['searchHandler']}>Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">

    </div>
</section>
`

let cntxt = undefined;

function searchHandler() {
    let searchingQueryElement = document.querySelector('#search-input');
    let searchingQueryValue = searchingQueryElement.value;

    let showResultContainer = document.querySelector('div.search-result');

    if (searchingQueryValue == '') {
        alert('Field cannot be empty');
        return;
    }

    searchAlbum(searchingQueryValue)
        .then((result) => {
            let resultToShow = resultTemplate(result);
            render(resultToShow, showResultContainer);
        })


}

function viewPage(context) {
    cntxt = context;

    let viewModel = {
        searchHandler,
    }

    let templateResult = searchViewTemplate(viewModel);
    cntxt.renderView(templateResult);
}

export default {
    viewPage
}