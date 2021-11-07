import { html } from '../../node_modules/lit-html/lit-html.js';

// <li>
//     <img src="./images/cat100.jpg" width="250" height="250" alt="Card image cap">
//     <div class ="info">
//     <button class ="showBtn">Show status code</button>
//     <div class ="status" style="display: none" id="100">
//     <h4>Status Code: 100</h4>
//     <p>Continue</p>
//     </div>
//     </div>
// </li>

let catTemplate = (catObj) => html`
    <li>
        <img src="./images/${catObj['imageLocation']}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${clickHandler} class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="100">
                <h4>Status Code: ${catObj['statusCode']}</h4>
                <p>${catObj['statusMessage']}</p>
            </div>
        </div>
    </li>
`

const clickHandler = {
    handleEvent(e) {
        let buttonElement = e.target;
        let divStatusElement = e.target.parentElement.querySelector('div.status');
        if (buttonElement.textContent == 'Show status code') {
            buttonElement.textContent = 'Hide status code';
            divStatusElement.style.display = 'inline-block';
        } else {
            divStatusElement.style.display = 'none';
            buttonElement.textContent = 'Show status code';
        }
    },
}


let catsTemplate = (cats) => html`
    <ul>
    ${cats.map(c => catTemplate(c))}
    </ul>
`

export { catsTemplate }; 