import { html } from '../../node_modules/lit-html/lit-html.js';


import { getMemes } from '../services/memesService.js';


const memeTemplate = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme['title']}</p>
            <img class="meme-image" alt="meme-img" src="${meme['imageUrl']}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme['_id']}">Details</a>
        </div>
    </div>
</div>
`

const memesPageTemplate = (model) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${model['displayMemes']
    ?
    html`${model['memes'].map(m => memeTemplate(m))}`
    :
    html`<p class="no-memes">No memes in database.</p> -->`
    }
    </div>
</section>
`


let router = undefined;
let renderHandler = undefined;

function initialize(givenRouter, givenRenderer) {
    router = givenRouter;
    renderHandler = givenRenderer;
}

function memesView() {
    getMemes()
        .then(result => {
            let viewModel = {
                displayMemes: result.length !== 0 ? true : false,
                memes: result, 
            }
            let templateResult = memesPageTemplate(viewModel);
            renderHandler(templateResult);
        })
}

export default {
    initialize,
    memesView,
}
