import { html, nothing } from '../lib.js';

import { getAlbums } from '../services/musicService.js';
import { isAuthenticated } from '../util.js';


const albumTemplate = (album) => html`
<div class="card-box">
    <img src=${album['imgUrl']}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album['name']}</p>
            <p class="artist">Artist: ${album['artist']}</p>
            <p class="genre">Genre: ${album['genre']}</p>
            <p class="price">Price: $${album['price']}</p>
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

const catalogViewTemplate = (model) => html`
<!--Catalog-->
<section id="catalogPage">
    <h1>All Albums</h1>

    ${model['albums'].length != 0
    ? html`
    ${model['albums'].map(a => albumTemplate(a))}
    `
    : html`
    <!--No albums in catalog-->
    <p>No Albums in Catalog!</p>
    `}
</section>
`

let cntxt = undefined;

function viewPage(context) {
    cntxt = context;

    getAlbums()
        .then(albumsData => {
            
            let viewModel = {
                albums: albumsData,
            }
            
            let templateResult = catalogViewTemplate(viewModel);
            cntxt.renderView(templateResult);
        })
}

export default {
    viewPage
}