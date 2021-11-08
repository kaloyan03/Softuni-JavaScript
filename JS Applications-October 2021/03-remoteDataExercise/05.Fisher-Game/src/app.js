let loadButtonElement = document.querySelector('aside button.load');

loadButtonElement.addEventListener('click', loadButtonHandler);

let catchesDivElements = document.querySelectorAll('div.catch');
catchesDivElements.forEach(el => el.remove());

async function loadButtonHandler() {
    let catchesDivElement = document.getElementById('catches');

    let baseUrl = 'http://localhost:3030/data/catches';

    let catchesResponse = await fetch(baseUrl);
    let catchesResult = await catchesResponse.json();
    
    if (catchesDivElement.children.length !== 0) {
        catchesDivElement.querySelectorAll('.catch').forEach(el => el.remove())
    }

    catchesResult.forEach(data => {
        let angler = data['angler'];
        let weight = data['weight'];
        let species = data['species'];
        let location = data['location'];
        let bait = data['bait'];
        let captureTime = data['captureTime'];
        
        let catchDivElement = createCatch(angler, weight, species, location, bait, captureTime);

        catchesDivElement.appendChild(catchDivElement);
    })

    function createCatch(angler, weight, species, location, bait, captureTime) {

    // <button class="update" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Update</button>
    // <button class="delete" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Delete</button>
    // </div> 

        let anglerLabel = createElement('label', undefined, 'Angler');
        let inputAngler = createElement('input', {type: 'text', class: 'species'}, angler);

        let weightLabel = createElement('label', undefined, 'Weight');
        let inputWeight = createElement('input', {type: 'text', class: 'weight'}, weight);

        let speciesLabel = createElement('label', undefined, 'Species');
        let inputSpecies = createElement('input', {type: 'text', class: 'species'}, species);

        let locationLabel = createElement('label', undefined, 'Location');
        let inputLocation = createElement('input', {type: 'text', class: 'location'}, location);

        let baitLabel = createElement('label', undefined, 'Bait');
        let inputBait = createElement('input', {type: 'text', class: 'bait'}, bait);

        let captureTimeLabel = createElement('label', undefined, 'Capture Time');
        let inputCaptureTime = createElement('input', {type: 'number', class: 'captureTime'}, captureTime);

        let updateButton = createElement('button', {class: 'update'}, 'Update');
        let deleteButton = createElement('button', {class: 'delete'}, 'Delete');

        let catchDiv = createElement('div', {'class': 'catch'},
        anglerLabel, inputAngler, weightLabel, inputWeight, speciesLabel,
        inputSpecies, locationLabel, inputLocation, baitLabel, inputBait,
        captureTimeLabel, inputCaptureTime, updateButton, deleteButton);

        return catchDiv;
    }

    function createElement(tag, attributes, ...params) {
        let element = document.createElement(tag);
        let firstValue = params[0];

        if (params.length == 1 && typeof firstValue !== 'object') {
            if (['input', 'textarea'].includes(tag)) {
                element.value = firstValue;
            } else {
                element.textContent = firstValue;
            }
        } else {
            element.append(...params)
        
        }

        if(attributes !== undefined) {
            Object.keys(attributes).forEach(key => {
                element.setAttribute(key, attributes[key]);
            })
        }
        return element;
    }

}
