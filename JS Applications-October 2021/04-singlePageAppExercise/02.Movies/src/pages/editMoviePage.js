import movieService from '../services/moviesService.js';
import {redirectToPage} from '../viewChanger.js';

let sectionElement = undefined;

function initialize(domSelector) {
    sectionElement = document.querySelector(domSelector);
    let editFormElement = sectionElement.querySelector('form');
    editFormElement.addEventListener('submit', editFormHandler);
}

function editFormHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);

    let newMovieInfo = {
        'title': formData.get('title'),
        'description': formData.get('description'),
        'img': formData.get('imageUrl'),
    }
    let movieId = e.target.parentElement.dataset.movieId;
    movieService.updateMovie(movieId, newMovieInfo)
        .then(result => {
            redirectToPage('movies');
        })
}

function getPageHtmlElement() {
    return sectionElement;
}

let editMoviePage = {
    initialize,
    getPageHtmlElement,
}

export default editMoviePage;