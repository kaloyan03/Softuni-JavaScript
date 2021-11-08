function solve(){
   let createButtonElement = document.querySelector('.site div aside form button');
   
   let archiveTitles = [];

   createButtonElement.addEventListener('click', createButtonEventHandler)

   function createButtonEventHandler(e) {
      e.preventDefault()
      let authorInputElement = document.getElementById('creator');
      let titleInputElement = document.getElementById('title');
      let categoryInputElement = document.getElementById('category');
      let contentTextAreaElement = document.getElementById('content');
      let articlesSectionElement = document.querySelector('.site-content main section');

      let newArticle = createArticle(authorInputElement.value, titleInputElement.value, categoryInputElement.value, contentTextAreaElement.value);
      articlesSectionElement.appendChild(newArticle);

   }

   function createArticle(author, title, category, content) {
      let articleElement = document.createElement('article');
      let h1Element = document.createElement('h1');
      h1Element.textContent = title;
      articleElement.appendChild(h1Element);
      let categoryParagraph = document.createElement('p');
      let categoryStrong = document.createElement('strong');
      categoryParagraph.textContent = 'Category:';
      categoryStrong.textContent = category;
      categoryParagraph.appendChild(categoryStrong);
      articleElement.appendChild(categoryParagraph);
      let creatorParagraph = document.createElement('p');
      let creatorStrong = document.createElement('strong');
      creatorStrong.textContent = author;
      creatorParagraph.textContent = 'Creator:'
      creatorParagraph.appendChild(creatorStrong);
      articleElement.appendChild(creatorParagraph);
      let contentParagraph = document.createElement('p');
      contentParagraph.textContent = content;
      articleElement.appendChild(contentParagraph);
      let divElement = document.createElement('div');
      divElement.setAttribute('class', 'buttons');
      let deleteButtonElement = document.createElement('button');
      deleteButtonElement.textContent = 'Delete';
      deleteButtonElement.setAttribute('class', 'btn delete');
      deleteButtonElement.addEventListener('click', deleteButtonHandler);
      let archiveButtonElement = document.createElement('button');
      archiveButtonElement.textContent = 'Archive';
      archiveButtonElement.setAttribute('class', 'btn archive');
      archiveButtonElement.addEventListener('click', archiveButtonHandler);
      divElement.appendChild(deleteButtonElement);
      divElement.appendChild(archiveButtonElement);
      articleElement.appendChild(divElement);
      return articleElement;

   }

   function deleteButtonHandler(e) {
      let currentArticleElement = e.currentTarget.parentElement.parentElement;
      currentArticleElement.remove();
   }

   function archiveButtonHandler(e) {
      let archiveSectionElement = document.querySelector('.archive-section ol');
      let currentArticleElement = e.currentTarget.parentElement.parentElement;
      let currentTitle = currentArticleElement.children[0].textContent;
      archiveTitles.push(currentTitle);
      archiveTitles.sort((a,b) => a.localeCompare(b));
      
      archiveSectionElement.innerHTML = '';

      archiveTitles.forEach((title) => {
         let titleLi = document.createElement('li');
         titleLi.textContent = title;
         archiveSectionElement.appendChild(titleLi);
      })

      currentArticleElement.remove();
      
   }
}
