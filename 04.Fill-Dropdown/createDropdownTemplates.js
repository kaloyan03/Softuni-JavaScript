import { html } from '../node_modules/lit-html/lit-html.js';

let optionTemplate = (option) => html`
    <option value="${option['_id']}">${option['text']}</option>
`

let optionsTemplate = (options) => html`
${options.map(o => optionTemplate(o))}
`

export { optionsTemplate }