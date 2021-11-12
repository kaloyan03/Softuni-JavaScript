import { render } from '../node_modules/lit-html/lit-html.js';

let rootElement = document.querySelector('div#root');

export function renderView(templateResult) {
    render(templateResult, rootElement);
}


export function renderingMiddleware(context, next) {
    context.renderView = renderView;
    next();
}