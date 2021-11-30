import { html } from '../../lib.js'

export const memeFormTemplate = (data) => html`
<section id="${data['type'] == 'edit' ? " edit-meme" : "create-meme" }">
    <form id="${data['type'] == 'edit' ? " edit-form" : "create-form" }" @submit='${data['submitHandler']}'>
        <h1>${data['type'] == 'edit' ? "Edit" : "Create"} Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" value='${data['type']=='edit' ?
                data['meme']['title'] : '' }'>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"
                value=''>${data['type'] == 'edit' ? data['meme']['description'] : ''}</textarea>
            <label for="imageUrl">${data['type'] == 'edit' ? "Image Url" : "Meme Image"}</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" value='${data['type']=='edit' ? data['meme']['imageUrl'] : '' }'>
            <input type="submit" class="registerbtn button" value="${data['type'] == 'edit' ? " Edit" : "Create" } Meme">
        </div>
    </form>
</section>
`