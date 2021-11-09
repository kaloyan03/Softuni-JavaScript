import { render } from '../../node_modules/lit-html/lit-html.js';

let viewContainer = undefined;
let navigationContainer = undefined;

function initialize(viewContainerDomElement, navContainerDomElement) {
    viewContainer = viewContainerDomElement;
    navigationContainer = navContainerDomElement;
}

function renderView(templateResult) {
    render(templateResult, viewContainer);
}

function renderNavigation(templateResult) {
    render(templateResult, navigationContainer);
}

function decorateContext(context, next) {
    context.renderView = renderView;
    context.renderNavigation = renderNavigation;
    next();
}

let rendering = {
    initialize,
    renderView,
    renderNavigation,
    decorateContext,
}

export default rendering;