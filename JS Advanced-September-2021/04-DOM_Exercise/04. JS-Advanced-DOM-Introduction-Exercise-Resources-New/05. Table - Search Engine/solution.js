function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      rowElements = Array.from(document.querySelectorAll('tbody tr'));
      searchElement = document.getElementById('searchField');

      searchText = searchElement.value;

      rowElements.forEach(x => {
         x.className = '';
      })


      let filteredRows = rowElements.filter(el => {
         let values = Array.from(el.children);
         if (values.some(x => x.textContent.includes(searchText))) {
            el.className = 'select';
         }
      })
   }

  

}