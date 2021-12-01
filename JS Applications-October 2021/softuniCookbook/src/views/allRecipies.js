import { html } from '../lib.js';


import { getAllRecipies } from '../services/recipiesService.js';

const recipeViewTemplate = (recipe, clickHandler) => html`
<article class="preview" data-id=${recipe['_id']} @click=${clickHandler}>
<div class="title">
        <h2>${recipe['name']}</h2>
    </div>
    <div class="small">
        <img src="${recipe['img']}">
    </div>
    </article>
`

const allRecipiesViewTemplate = (model) => html`
    ${model['recipies'].map(r => recipeViewTemplate(r, model['recipieClickHandler']))}
`

let cntxt = undefined;

function recipieClickHandler(e) {
    let recipeId = e.target.getAttribute('data-id');
    cntxt.page.redirect(`/recipe/${recipeId}`);
}

function viewPage(context) {
    cntxt = context;
    getAllRecipies()
    .then(recipies => {
        let viewModel = {
            recipies: Object.values(recipies),
            recipieClickHandler,
        }
        let templateResult = allRecipiesViewTemplate(viewModel);
        context.renderView(templateResult); 
    })
}

export default {
    viewPage,
}