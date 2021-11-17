import { html } from '../../node_modules/lit-html/lit-html.js';


import { getMeme, deleteMeme } from '../services/memesService.js';
import { getUserId } from '../services/authService.js';

const detailsMemePageTemplate = (model) => html`
<!-- Details Meme Page (for guests and logged users) -->
<section id="meme-details">
    <h1>Meme Title: ${model['meme']['title']}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${model['meme']['imageUrl']}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${model['meme']['description']}
            </p>

            ${model['memeCreator']
        ? html`<!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            <a class="button warning" href="/edit/${model['meme']['_id']}">Edit</a>
            <button class="button danger" @click='${model['deleteHandler']}'>Delete</button>`
        : ''}

        </div>
    </div>
</section>
`

let router = undefined;
let renderHandler = undefined;

function initialize(givenRouter, givenRenderer) {
    router = givenRouter;
    renderHandler = givenRenderer;
}


function memeDetailsView(context) {
    let memeId = context.params['id'];
    getMeme(memeId)
    .then(result => {
        let viewModel = {
            meme: result,
            memeCreator: result['_ownerId'] === getUserId() ? true : false,
            deleteHandler: (e) => {e.preventDefault(); deleteMeme(memeId); router.redirect('/memes')},
        }
        let templateResult = detailsMemePageTemplate(viewModel);
        renderHandler(templateResult);
    })
}

export default {
    initialize,
    memeDetailsView,
}
