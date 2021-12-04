import { html } from '../lib.js';


import { getAlbum, editAlbum } from '../services/musicService.js';

const editViewTemplate = (model) => html`
<!--Edit Page-->
<section class="editPage">
    <form @submit=${model['submitHandler']}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" value=${model['album']['name']}>

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value=${model['album']['imgUrl']}>

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" value=${model['album']['price']}>

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value=${model['album']['releaseDate']}>

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" value=${model['album']['artist']}>

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" value=${model['album']['genre']}>

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10"
                    cols="10">${model['album']['description']}</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>
`

let cntxt = undefined;
let albumId = undefined;

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let name = formData.get('name');
    let imgUrl = formData.get('imgUrl');
    let price = formData.get('price');
    let releaseDate = formData.get('releaseDate');
    let artist = formData.get('artist');
    let genre = formData.get('genre');
    let description = formData.get('description');

    if (name == '' || imgUrl == '' || price == '' || releaseDate == '' || artist == '' || genre == '' || description == '') {
        alert('All fields are required!');
        return;
    }

    let album = {
        name,
        imgUrl,
        price,
        releaseDate,
        artist,
        genre,
        description,
    }

    editAlbum(albumId, album)
    .then(() => {
        cntxt.page.redirect(`/details/${albumId}`);
    })

}

function viewPage(context) {
    cntxt = context;
    albumId = cntxt.params['id'];

    getAlbum(albumId)
    .then(albumData => {
        let viewModel = {
            album: albumData,
            submitHandler,
        }

        let templateResult = editViewTemplate(viewModel);
        cntxt.renderView(templateResult);
    })
}

export default {
    viewPage
}
