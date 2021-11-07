import createHtml from './createHtmlElements.js';
import { render } from '../node_modules/lit-html/lit-html.js';

let loadFormElement = document.getElementById('load-form');

loadFormElement.addEventListener('submit', loadFormHandler);

function loadFormHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let townsArray = formData.get('towns').split(', ');
    let rootElement = document.querySelector('#root');

    let townsListElement = createHtml.townsTemplate(townsArray);
    render(townsListElement, rootElement);    

}