import { html } from '../node_modules/lit-html/lit-html.js';

let rowTemplate = (data) => html`
<tr>
    <td>${data['name']}</td>
    <td>${data['email']}</td>
    <td>${data['course']}</td>
</tr>
`

let rowsTemplate = (dataArray) => 
    html`${dataArray.map(d => rowTemplate(d))}`

export { rowsTemplate }