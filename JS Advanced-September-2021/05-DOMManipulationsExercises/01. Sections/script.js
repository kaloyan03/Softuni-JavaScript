function create(words) {
   divToAddAnotherElement = document.getElementById('content');
   words.forEach(word => {
      //create div
      divCurrentStringElement = document.createElement('div');
      
      //create and modify paragraph
      pCurrentStringElement = document.createElement('p');
      pCurrentStringElement.textContent = word;
      pCurrentStringElement.style.display = 'none';
      //attach the paragraph to div
      divCurrentStringElement.appendChild(pCurrentStringElement);

      //attach event listener to div
      divCurrentStringElement.addEventListener('click', function(e) {
         divElement = e.currentTarget;
         p = divElement.children[0];
         p.style.display = 'block';
      })

      //add div to body
      divToAddAnotherElement.appendChild(divCurrentStringElement);




   })
}