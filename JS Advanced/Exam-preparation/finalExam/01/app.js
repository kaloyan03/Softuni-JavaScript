window.addEventListener('load', solve);

function solve() {
    let addButtonElement = document.getElementById('add-btn');

    addButtonElement.addEventListener('click', addButtonHandler);

    function addButtonHandler(e) {
        e.preventDefault();

        let genreInputElement = document.getElementById('genre');
        let songNameInputElement = document.getElementById('name');
        let authorInputElement = document.getElementById('author');
        let dateInputElement = document.getElementById('date');
        let collectionSongsDivElement = document.querySelector('#all-hits div.all-hits-container');

        if (!(validateInputFields(genreInputElement.value, songNameInputElement.value, authorInputElement.value, dateInputElement.value))) {
            return;
        }

        let songDivElement = createSongDivElement(genreInputElement.value, songNameInputElement.value, authorInputElement.value, dateInputElement.value);
        collectionSongsDivElement.appendChild(songDivElement);

        clearInputFields(genreInputElement, songNameInputElement, authorInputElement, dateInputElement);
    }

    function validateInputFields(genre, song, author, date) {
        if (genre.trim() !== '' && song.trim() !== '' && author.trim() !== '' && date.trim() !== '') {
            return true;
        }
        return false;
    }

    function clearInputFields(genreEl, songEl, authorEl, dateEl) {
        genreEl.value = '';
        songEl.value = '';
        authorEl.value = '';
        dateEl.value = '';
    }

    function createSongDivElement(genre, songName, author, date) {
        // div element with info
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'hits-info');

        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', './static/img/img.png');

        let h2GenreElement = document.createElement('h2');
        h2GenreElement.textContent = `Genre: ${genre}`;
        
        let h2SongElement = document.createElement('h2');
        h2SongElement.textContent = `Name: ${songName}`;

        let h2AuthorElement = document.createElement('h2');
        h2AuthorElement.textContent = `Author: ${author}`;

        let h3DateElement = document.createElement('h3');
        h3DateElement.textContent = `Date: ${date}`;
        
        let saveButtonElement = document.createElement('button');
        saveButtonElement.setAttribute('class', 'save-btn');
        saveButtonElement.textContent = 'Save song';
        saveButtonElement.addEventListener('click', saveButtonHandler);

        let likeButtonElement = document.createElement('button');
        likeButtonElement.setAttribute('class', 'like-btn');
        likeButtonElement.textContent = 'Like song';
        likeButtonElement.addEventListener('click', likeButtonHandler)

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.setAttribute('class', 'delete-btn');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', deleteButtonHandler);

        divElement.appendChild(imgElement);
        divElement.appendChild(h2GenreElement);
        divElement.appendChild(h2SongElement);
        divElement.appendChild(h2AuthorElement);
        divElement.appendChild(h3DateElement);
        divElement.appendChild(saveButtonElement);
        divElement.appendChild(likeButtonElement);
        divElement.appendChild(deleteButtonElement);
        
        return divElement;
    }
    
    function likeButtonHandler(e) {
        let likeButtonElement = e.target;
        likeButtonElement.disabled = true;

        let totalLikesDivElement = document.querySelector('#total-likes div.likes');
        let totalLikesParagraph = totalLikesDivElement.querySelector('p');
        let currentLikes = Number(totalLikesParagraph.textContent.slice(-1));
        currentLikes++;
        totalLikesParagraph.textContent = `Total Likes: ${currentLikes}`;

    }   

    function saveButtonHandler(e) {
        let savedSongsDivElement = document.querySelector('#saved-hits div.saved-container');

        let currentSongDivElement = e.target.parentElement;

        let savedSongDivElement = currentSongDivElement.cloneNode(true);
        currentSongDivElement.remove();

        Array.from(savedSongDivElement.children).forEach(el => {
            if (el.nodeName === 'BUTTON' && (el.classList.contains('save-btn') || el.classList.contains('like-btn'))) {
                el.remove();
            } else if (el.nodeName === 'BUTTON' && el.classList.contains('delete-btn')) {
                el.addEventListener('click', deleteButtonHandler);
            }
        })

        savedSongsDivElement.appendChild(savedSongDivElement);
    }

    function deleteButtonHandler(e) {
        let divElement = e.target.parentElement;
        divElement.remove();
    }
}