import { render } from '../../node_modules/lit-html/lit-html.js';


let headerContainer = undefined;
let mainContainer = undefined;

function initialize(element1, element2) {
    headerContainer = element1;
    mainContainer = element2;
}

function renderMainView(templateResult) {
    render(templateResult, mainContainer)
}

function renderHeaderView(templateResult) {
    render(templateResult, headerContainer)
}

function decorateContext(context, next) {
    context.renderMainView = renderMainView;
    context.renderHeaderView = renderHeaderView;
    next();
}

export default {
    initialize,
    renderHeaderView,
    renderMainView,
    decorateContext,
}

