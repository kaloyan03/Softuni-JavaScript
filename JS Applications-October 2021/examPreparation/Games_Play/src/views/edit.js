import { html } from '../../lib.js';


import helper from '../helper.js';
import { getGame, editGame } from '../services/gamesService.js';
const editPageTemplate = (model) => html`
<!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="auth">
    <form id="edit" @submit="${model['submitHandler']}">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="${model['gameData']['title']}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="${model['gameData']['category']}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="${model['gameData']['maxLevel']}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="${model['gameData']['imageUrl']}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${model['gameData']['summary']}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>
`

let bookId = undefined;

async function editView(context) {
    bookId = context.params['id'];

    let game = await getGame(bookId);
    let viewModel = {
        gameData: game,
        submitHandler: async function(e) {
            e.preventDefault();
            let formElement = e.target;
            let formData = new FormData(formElement);
            
            let title = formData.get('title');
            let category = formData.get('category');
            let maxLevel = formData.get('maxLevel');
            let image = formData.get('imageUrl');
            let summary = formData.get('summary');

            if (!helper.checkIfFieldsAreEmpty(title, category, maxLevel, image, summary)) {
                alert('Fields must be filled!');
                return;
            }

            let game = {
                title,
                category,
                maxLevel,
                imageUrl: image,
                summary,
            }

            await editGame(game, bookId);

            context.page.redirect(`/details/${bookId}`);
        }
    }
    let templateResult = editPageTemplate(viewModel);
    context.renderView(templateResult);
}

export { editView }