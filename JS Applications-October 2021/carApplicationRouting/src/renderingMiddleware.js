import { render } from '../node_modules/lit-html/lit-html.js';

let rootElement = document.querySelector('div#root');
let navContainerElement = document.querySelector('nav#nav-container');

export function renderNav(templateResult) {
    render(templateResult, navContainerElement);
}

export function renderView(templateResult) {
    render(templateResult, rootElement);
}

export function renderingMiddleware(context, next) {
    context.renderView = renderView;
    context.renderNav = renderNav;
    next();
}
