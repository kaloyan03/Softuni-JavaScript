import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderView } from '../renderingMiddleware.js';
const homePageTemplate = () => html`
    <section id='home-page'>
        <h3>Welcome to the Car Dealers!!!</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit blanditiis fugiat dolorum quas possimus voluptate repudiandae illo magni est nihil? Perspiciatis quam nobis corrupti cum, ipsa fugit minima possimus! Quam.</p>
    </section>
`

export function homePage(context) {
    let templateResult = homePageTemplate();
    renderView(templateResult);
}