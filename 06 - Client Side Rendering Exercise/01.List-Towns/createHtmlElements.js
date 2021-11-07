import { html } from '../node_modules/lit-html/lit-html.js';

let townsTemplate = (towns) => html`
    <ul>
        ${towns.map(t => townTemplate(t))}
    </ul>
`

let townTemplate = (townName) => html`  
    <li>${townName}</li>
`

let createHtml = {
    townsTemplate,
}

export default createHtml;