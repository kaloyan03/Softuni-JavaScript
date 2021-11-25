import { html } from '../../lib.js';


import { getUserId, isAuthenticated } from '../services/authService.js';
import { getGame, deleteGame, createGameComment, loadAllGameComments } from '../services/gamesService.js';

const commentTemplate = (content) => html`
<li class="comment">
    <p>Content: ${content}</p>
</li>
`

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


        <div class="details-comments">
            <h2>Comments:</h2>
            ${model['comments'].length !== 0
            ? html`
            <ul>
                ${model['comments'].map(c => commentTemplate(c['comment']))}
            </ul>`
            : html`
            <p class="no-comment">No comments.</p>
            `} 
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${model['isOwner'] ?
        html`
        <div class="buttons">
            <a href="/edit/${model['game']['_id']}" class="button">Edit</a>
            <a href="javascript:void(0)" @click='${model['deleteHandler']}' class="button">Delete</a>
        </div>`
        : 
        ''}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${(model['isAuthenticated'] && model['isOwner'] !== true)
    ? html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form" @submit='${model['submitCommentHandler']}'>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>
    `
    : ''}

</section>
`

let gameId = undefined;

async function detailsView(context) {
    gameId = context.params['id'];

    let gameDetails = await getGame(gameId);
    let currentGameComments = await loadAllGameComments(gameId);
    let viewModel = {
        game: gameDetails,
        isOwner: getUserId() === gameDetails['_ownerId'] ? true : false,
        deleteHandler : async function () {
            let answer = confirm('Are you sure you want to delete this game?');

            if (answer == true) {
                await deleteGame(gameId);
                context.page.redirect('/home')
            }
        },
        isAuthenticated: isAuthenticated(),
        comments: currentGameComments,
        submitCommentHandler: async function (e) {
            e.preventDefault();
            let formElement = e.target;
            let formData = new FormData(formElement);

            let comment = {
                gameId,
                comment: formData.get('comment'),
            }

            createGameComment(comment)
            formElement.reset();
            context.page.redirect(`/details/${gameId}`)

        }
    }

    let templateResult = detailsPageTemplate(viewModel);
    context.renderView(templateResult);
}

export { detailsView }