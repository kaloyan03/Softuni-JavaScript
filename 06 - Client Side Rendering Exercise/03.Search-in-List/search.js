import { render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';
import { townsTemplate } from './createHtml/townsTemplate.js';

function search() {
   let townsDivElement = document.querySelector('div#towns');
   let searchButtonElement = document.querySelector('button#search-button');

   let townsListElement = townsTemplate(towns);
   render(townsListElement, townsDivElement);

   searchButtonElement.addEventListener('click', searchButtonHandler);
}

function searchButtonHandler() {
   let townsLiElements = document.querySelectorAll('div#towns ul li');
   clearPreviousData(townsLiElements);
   let inputElement = document.querySelector('#searchText');
   let inputValue = inputElement.value;
   checkForMatches(townsLiElements, inputValue)
}

function checkForMatches(townsLiElements, input) {
   let matchesCount = 0;
   Array.from(townsLiElements).forEach(el => {
      if (el.textContent.includes(input)) {
         el.classList.add('active');
         matchesCount++;
      }
   })

   let resultDivElement = document.querySelector('#result');
   let pMatchesElement = document.createElement('p');
   pMatchesElement.textContent = matchesCount == 1 ? `${matchesCount} match found` : `${matchesCount} matches found`;
   resultDivElement.appendChild(pMatchesElement);

}

function clearPreviousData(townsLiElements) {
   Array.from(townsLiElements).forEach(el => {
      el.classList.remove('active');
   })

   let resultDivElement = document.querySelector('#result');
   Array.from(resultDivElement.children).forEach(el => el.remove());
}

search();
