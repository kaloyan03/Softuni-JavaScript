import { html } from '../lib.js';


import { getRecipe } from '../services/recipiesService.js';
const ingredientTemplate = (ingredientText) => html`
<li>${ingredientText}</li>
`

const preparationTemplate = (preparationText) => html`
<p>${preparationText}</p>
`

const recipeDetailTemplate = (recipe) => html`
<article>
    <h2>${recipe['name']}</h2>
    <div class="band">
        <div class="thumb">
            <img src="../${recipe['img']}">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe['ingredients'].map(i => ingredientTemplate(i))}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${recipe['steps'].map(p => preparationTemplate(p))}
    </div>
</article>
`

function viewPage(context) {
    let recipeId = context.params['id'];

    getRecipe(recipeId)
    .then(recipe => {
        let templateResult = recipeDetailTemplate(recipe);
        context.renderView(templateResult);
    })
}

export default {
    viewPage,
}