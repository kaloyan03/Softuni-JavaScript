import { html } from '../../lib.js';


import { getAllGames } from '../services/gamesService.js';


const gameViewTemplate = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src="${game['imageUrl']}">
        <h6>${game['category']}</h6>
        <h2>${game['title']}</h2>
        <a href="/details/${game['id']}" class="details-button">Details</a>
    </div>
`


const cataloguePageTemplate = (model) => html`
<!-- Catalogue -->
<section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->

    ${model.games.length !== 0
    ? html`
    ${model.games.map(g => gameViewTemplate(g))}
    `
    : html`
    <h3 class="no-articles">No articles yet</h3>
    `} 

    <!-- Display paragraph: If there is no games  -->
</section>
`


async function catalogueView(context) {
    let games = await getAllGames();
    let viewModel = {
        games,
    }

    let templateResult = cataloguePageTemplate(viewModel);
    context.renderView(templateResult);
}

export { catalogueView }