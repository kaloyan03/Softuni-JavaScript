window.addEventListener('load', solve);

function solve() {
    let formElement = document.querySelector('.store form');

    formElement.addEventListener('submit', formHandler);

    function formHandler(e) {
        e.preventDefault();

        let modelElement = document.getElementById('model');
        let yearElement = document.getElementById('year');
        let descriptionElement = document.getElementById('description');
        let priceElement = document.getElementById('price');

        if (validateInputFields(modelElement.value, yearElement.value, descriptionElement.value, priceElement.value) === false) {
            return;
        }

        let furnitureTrElements = createFurnitureElements(modelElement.value, yearElement.value, priceElement.value, descriptionElement.value);
        let furnitureListElement = document.getElementById('furniture-list');

        for (const tr of furnitureTrElements) {
            furnitureListElement.appendChild(tr);
        }

        clearInputFields(modelElement, yearElement, descriptionElement, priceElement);
    }

    function createFurnitureElements(model, year, price, description) {
        let result = [];

        let formatedPrice = Number(price).toFixed(2);
        let chairTdElement = createElement('td', {}, model);
        let priceTdElement = createElement('td', {}, formatedPrice);

        
        let moreButtonElement = createElement('button', {'class': 'moreBtn'}, 'More Info');
        moreButtonElement.addEventListener('click', moreButtonHandler);
        let buyButtonElement = createElement('button', {'class': 'buyBtn'}, 'Buy it');
        buyButtonElement.addEventListener('click', buyButtonHandler);
        let buttonsTdElement = createElement('td', {}, moreButtonElement, buyButtonElement);

        let infoTrElement = createElement('tr', {'class': 'info'}, chairTdElement, priceTdElement, buttonsTdElement);
        result.push(infoTrElement);

        let yearTdElement = createElement('td', {}, `Year: ${year}`);
        let descriptionTdElement = createElement('td', {'colspan': '3'}, `Description: ${description}`);
        let otherTrElement = createElement('tr', {'class': 'hide'}, yearTdElement, descriptionTdElement);
        result.push(otherTrElement);

        return result;
    }

    function moreButtonHandler(e) {
        let buttonElement = e.target;
        let tbodyElement = buttonElement.closest('tbody');
        let descriptionTrElement = tbodyElement.children[1];

        if (buttonElement.textContent == 'More Info') {
            buttonElement.textContent = 'Less Info';
            descriptionTrElement.style.display = 'contents';
        } else if (buttonElement.textContent == 'Less Info') {
            buttonElement.textContent = 'More Info';
            descriptionTrElement.style.display = 'none';
        }
    }
 
    function buyButtonHandler(e) {
        let storeProfitElement = document.querySelector('td.total-price');
        let currentProfit = storeProfitElement.textContent;


        let buyButton = e.target;
        let trHideElement = e.target.parentElement;
        let trInfoElement = buyButton.closest('.info');
        let productPrice = Number(trInfoElement.children[1].textContent);
        storeProfitElement.textContent = (Number(currentProfit) + productPrice).toFixed(2); 

        trHideElement.remove();
        trInfoElement.remove();

    }

    function validateInputFields(model, year, description, price) {
        if (model.trim() !== '' || description.trim() !== '' || year.trim() !== '' || price.trim() !== '') {
            if (year > 0 && price > 0) {
                return true;
            }
        }
        return false;
    }

    function clearInputFields(modelEl, yearEl, descriptionEl, priceEl) {
        modelEl.value = '';
        yearEl.value = '';
        descriptionEl.value = '';
        priceEl.value = '';
    }

    function createElement(tag, attributes, ...params) {
        let element = document.createElement(tag);
        let firstValue = params[0];
        if (params.length === 1 && typeof firstValue !== 'object') {
            if (['input', 'textarea'].includes(tag)) {
                element.value = firstValue;
            } else {
                element.textContent = firstValue;
            }
        } else {
            for (const param of params) {
                element.appendChild(param);
            }
        }
        
        for (const key of Object.keys(attributes)) {
            element.setAttribute(key, attributes[key]);
        }       
        return element;

    }
}
