import { html } from '../lib.js';

const homeViewTemplate = () => html`
<!--Home Page-->
<section id="welcomePage">
            <div id="welcome-message">
                <h1>Welcome to</h1>
                <h1>My Music Application!</h1>
            </div>

            <div class="music-img">
                <img src="./images/musicIcons.webp">
            </div>
        </section>
`

let cntxt = undefined;

function viewPage(context) {
    cntxt = context;

    let templateResult = homeViewTemplate();
    cntxt.renderView(templateResult);
}

export default {
    viewPage
}