import { render, page } from './lib.js';


import allRecipies from './views/allRecipies.js';
import recipeDetails from './views/recipeDetails.js';

let mainContainer = document.querySelector('#main-container');

page(decorateContext);
page('/', '/all-recipies');
page('/index.html', '/all-recipies');
page('/all-recipies', allRecipies.viewPage);
page('/recipe/:id', recipeDetails.viewPage);

page.start();

function decorateContext(context, next) {
    context.renderView = (templateResult) => render(templateResult, mainContainer);
    next();
}