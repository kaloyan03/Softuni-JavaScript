import { render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
import { catsTemplate } from './createHtml/createCatTemplate.js'; 


let catsSectionElement = document.querySelector('#allCats');  

let catsElement = catsTemplate(cats);

render(catsElement, catsSectionElement);
