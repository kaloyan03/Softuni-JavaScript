import { redirectToPage } from '../viewChanger.js';
import { createMovieDivElement } from '../createHtmlElements.js';
import movieService from '../services/moviesService.js';
import authentication from '../services/authService.js';

let sectionElement = undefined;

function initialize(domSelector) {
    sectionElement = document.querySelector(domSelector);
    let addMovieSection = document.querySelector('#add-movie-button');
    let buttonElement = addMovieSection.querySelector('a');
    buttonElement.addEventListener('click', addMovieButtonHandler);
    updatePage()
}

function addMovieButtonHandler() {
    if (!authentication.isAuthenticated()) {
        alert('You are not registered/logged');
        redirectToPage('login');
        return;
    }

    redirectToPage('add-movie');
}

function updatePage() {
    let moviesListDiv = sectionElement.querySelector('div.card-deck.d-flex.justify-content-center');
    movieService.getMovies()
    .then(moviesData => {
        Array.from(moviesListDiv.children).forEach(el => el.remove());
        moviesData.forEach(movie => {
            let movieDiv = createMovieDivElement(movie['img'], movie['title'], movie['_id']);
            moviesListDiv.appendChild(movieDiv);
        })
    })
}

function getPageHtmlElement(username) {
    updatePage();
    if (username) {
        let aUsernameElement = document.getElementById('usernameChanger');
        aUsernameElement.textContent = `Welcome, ${username}`;
    }

    return sectionElement;
}

let moviePage = {
    initialize,
    getPageHtmlElement,
}

export default moviePage;