import { render } from '../node_modules/lit-html/lit-html.js';
import dataService from './dataService.js';
import { rowsTemplate } from './createHtmlElements.js'; 

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let tbodyElement = document.querySelector('tbody');
   dataService.getData().then(result => {
      let students = Object.values(result).map(s => ({
         name: `${s['firstName']} ${s['lastName']}`,
         course: `${s['course']}`,
         email: `${s['email']}`, 
      }))
      let rowsElement = rowsTemplate(Object.values(students));
      render(rowsElement, tbodyElement);
   })

   function onClick() {
      let searchInputElement = document.querySelector('#searchField');
      let searchValue = searchInputElement.value;
      clearPreviousState(searchInputElement);
      checkForMatches(searchValue);
   }

   function checkForMatches(searchValue) {
      let tbodyElement = document.querySelector('tbody');

      Array.from(tbodyElement.children).forEach(tr => {
         Array.from(tr.children).forEach(td => {
            let currentValue = td.textContent;
            if (currentValue.toLowerCase().includes(searchValue.toLowerCase())) {
               tr.classList.add('select');
            }
         })
      })
   }
   
   function clearPreviousState(inputElement) {
      inputElement.value = '';
      Array.from(tbodyElement.children).forEach(tr => {
         tr.classList.remove('select');
      })

   }
}

solve();