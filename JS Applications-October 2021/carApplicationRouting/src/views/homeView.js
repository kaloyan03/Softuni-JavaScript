import { html } from '../../node_modules/lit-html/lit-html.js';

const homePageTemplate = () => html`
    <section id='home-page'>
        <h3>Welcome to the Car Dealers!!!</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit blanditiis fugiat dolorum quas possimus voluptate repudiandae illo magni est nihil? Perspiciatis quam nobis corrupti cum, ipsa fugit minima possimus! Quam.</p>
    </section>
`

let route = undefined;
let renderHandler = undefined;

function initialize(givenRoute, givenRenderHandler) {
    route = givenRoute;
    renderHandler = givenRenderHandler;
}

function homeView() {
    let templateResult = homePageTemplate();
    renderHandler(templateResult);
}

export default {
    homeView,
    initialize,
}