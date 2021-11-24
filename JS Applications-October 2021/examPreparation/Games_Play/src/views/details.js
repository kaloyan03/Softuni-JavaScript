import { html } from '../../lib.js';

import { getUserId } from '../services/authService.js';
import { getGame } from '../services/gamesService.js';
const detailsPageTemplate = (model) => html`
<!--Details Page-->
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${model['game']['imageUrl']}" />
            <h1>${model['game']['title']}</h1>
            <span class="levels">MaxLevel: ${model['game']['maxLevel']}</span>
            <p class="type">${model['game']['category']}</p>
        </div>

        <p class="text">
            ${model['game']['summary']}
        </p>

        <!-- Bonus ( for Guests and Users )
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                list all comments for current game (If any) -->
                <!-- <li class="comment">
                    <p>Content: I rate this one quite highly.</p>
                </li>
                <li class="comment">
                    <p>Content: The best game.</p>
                </li>
            </ul> -->
            <!-- Display paragraph: If there are no games in the database -->
            <!-- <p class="no-comment">No comments.</p>
        </div> -->

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${model['isOwner'] ?
        html`
        <div class="buttons">
            <a href="/edit/${model['game']['_id']}" class="button">Edit</a>
            <a href="/delete/${model['game']['_id']}" class="button">Delete</a>
        </div>`
        : 
        ''}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    <!-- <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article> -->

</section>
`

let gameId = undefined;

async function detailsView(context) {
    gameId = context.params['id'];

    let gameDetails = await getGame(gameId);
    console.log(gameDetails);

    let viewModel = {
        game: gameDetails,
        isOwner: getUserId() === gameDetails['_ownerId'] ? true : false,
    }

    let templateResult = detailsPageTemplate(viewModel);
    context.renderView(templateResult);
}

export { detailsView }