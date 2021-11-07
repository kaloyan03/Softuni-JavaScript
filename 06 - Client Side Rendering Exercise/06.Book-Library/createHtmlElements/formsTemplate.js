import { html } from '../../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';

// let formTemplate = () => html`
// <form @submit=${addBookFormHandler} id="add-form">
//     <h3>Add book</h3>
//     <label>TITLE</label>
//     <input type="text" name="title" placeholder="Title...">
//     <label>AUTHOR</label>
//     <input type="text" name="author" placeholder="Author...">
//     <input type="submit" value="Submit">
// </form>
// `

let formTemplate = (form) => html`
<form @submit=${form['handler']} id="${form['id']}">
    ${form.isEdit ? html`<input type="hidden" name="id"></input>` : ''} 
    <h3>${form['message']}</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="${form['submitMessage']}">
</form>
`


export { formTemplate };