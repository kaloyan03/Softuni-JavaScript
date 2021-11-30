import { html } from '../lib.js';

import { getUserId } from '../util.js';
import { getMeme, deleteMeme } from '../services/memeService.js';
const memeDetailsTemplate = (model) => html`
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

                    ${model['isOwner']
                    ? html`
                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    <a class="button warning" href="/edit/${model['meme']['_id']}">Edit</a>
                    <button class="button danger" href="javascript:void(0)" @click=${model['deleteHandler']}>Delete</button>
                    `
                    : ''}
                    
                </div>
            </div>
        </section>
`

let cntxt = undefined;
let memeId = undefined;


function deleteHandler() {
    deleteMeme(memeId)
    .then(() => {
        cntxt.page.redirect('/all-memes');
    })
}

function viewPage(context) {
    cntxt = context;
    memeId = context.params['id'];
    getMeme(memeId)
    .then(data => {
        let viewModel = {
            isOwner: getUserId() == data['_ownerId'],
            meme: data,
            deleteHandler,
        }

        let templateResult = memeDetailsTemplate(viewModel);
        context.renderView(templateResult);
    })
}

export default {
    viewPage
}