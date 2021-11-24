import { html } from '../../lib.js';


import helper from '../helper.js';
import { createGame } from '../services/gamesService.js';
const createPageTemplate = (model) => html`
<!-- Create Page ( Only for logged-in users ) -->
<section id="create-page" class="auth">
    <form id="create" @submit=${model['submitHandler']}>
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>
`


function createView(context) {
    let viewModel = {
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

            await createGame(game);

            context.page.redirect('/home');
        }
    }
    let templateResult = createPageTemplate(viewModel);
    context.renderView(templateResult);
}

export { createView }