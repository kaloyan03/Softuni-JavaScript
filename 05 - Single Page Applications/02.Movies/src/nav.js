import { redirectToPage } from './viewChanger.js';

let navElement = undefined;

function initialize(domSelector) {
    navElement = document.querySelector(domSelector);
    navElement.addEventListener('click', navHandler);
}

function navHandler(e) {
    let element = e.target;
    if (element.tagName === 'A') {
        let clickedRoute = element.getAttribute('data-route');
        redirectToPage(clickedRoute);
    }
}

let nav = {
    initialize,
}

export default nav;