import { html, nothing } from '../lib.js';

import { getUserId } from '../util.js';
import { deleteAlbum, getAlbum } from '../services/musicService.js';

const detailsViewTemplate = (model) => html`
<!--Details Page-->
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${model['album']['imgUrl']}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${model['album']['name']}</h1>
                <h3>Artist: ${model['album']['artist']}</h3>
                <h4>Genre: ${model['album']['genre']}</h4>
                <h4>Price: $${model['album']['price']}</h4>
                <h4>Date: ${model['album']['releaseDate']}</h4>
                <p>Description: ${model['album']['description']}</p>
            </div>

            ${model['isOwner']
            ? html`
            <!-- Only for registered user and creator of the album-->
            <div class="actionBtn">
                <a href="/edit/${model['album']['_id']}" class="edit">Edit</a>
                <a href="javascript:void(0)" @click=${model['deleteHandler']} class="remove">Delete</a>
            </div>
            `
            : nothing}
        </div>
    </div>
</section>
`

let cntxt = undefined;
let albumId = undefined;

function deleteHandler() {
    deleteAlbum(albumId)
    .then(() => {
        cntxt.page.redirect('/catalog');
    })
}

function viewPage(context) {
    cntxt = context;

    albumId = cntxt.params['id'];

    getAlbum(albumId)
    .then(albumData => {

        let viewModel = {
            album: albumData,
            isOwner: getUserId() == albumData['_ownerId'],
            deleteHandler,
        }

        let templateResult = detailsViewTemplate(viewModel);
        cntxt.renderView(templateResult);
    })
}

export default {
    viewPage
}