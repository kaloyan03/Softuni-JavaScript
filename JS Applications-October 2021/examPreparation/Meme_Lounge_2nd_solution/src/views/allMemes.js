import { html } from '../lib.js';


import { getAllMemes } from '../services/memeService.js';
import { memeTemplate } from './common/memeTemplate.js';

const allMemesTemplate = (model) => html`
<!-- All Memes Page ( for Guests and Users )-->
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				${model['memes'].length !== 0
                ? html`
                ${model['memes'].map(m => memeTemplate(m))}
                `
                : html`
                <p class="no-memes">No memes in database.</p>
                `}
			</div>
        </section>
`

function viewPage(context) {
    getAllMemes().then(memes => {
        let viewModel = {
            memes,

        }

        let templateResult = allMemesTemplate(viewModel);
        context.renderView(templateResult);
    })
}

export default {
    viewPage
}