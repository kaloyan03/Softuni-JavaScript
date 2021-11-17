import { render } from '../../node_modules/lit-html/lit-html.js';

let navigationElement = document.querySelector('nav#nav-container');
let mainElement = document.querySelector('main#root');

function renderView(templateResult) {
    render(templateResult, mainElement);
}

function renderNav(templateResult) {
    render(templateResult, navigationElement);
}

function decorateContext(context, next) {
    context.renderView = renderView;
    context.renderNav = renderNav;
    next();
}

export {
    decorateContext,
    renderView,
    renderNav,
    }