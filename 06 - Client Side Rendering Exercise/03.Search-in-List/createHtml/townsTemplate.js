import { html } from '../../node_modules/lit-html/lit-html.js';

let townTemplate = (townName) => html`
<li>${townName}</li>
`

let townsTemplate = (towns) => html`
<ul>
    ${towns.map(t => townTemplate(t))}
</ul>
`

export { townsTemplate }