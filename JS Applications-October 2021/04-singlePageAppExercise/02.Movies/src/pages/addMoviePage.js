import {redirectToPage} from '../viewChanger.js';
import movieService from '../services/moviesService.js';

let sectionElement = undefined;

function initialize(domSelector) {
    sectionElement = document.querySelector(domSelector);
    let addMovieFormElement = sectionElement.querySelector('form');    
    addMovieFormElement.addEventListener('submit', addMovieFormHandler);
}

function addMovieFormHandler(e) {
    let formData = new FormData(e.target);
    
    let newMovie = {
        'title': formData.get('title'),
        'description': formData.get('description'),
        'img': formData.get('imageUrl'),
    }
    movieService.createMovie(newMovie)
    .then(result => {
        e.target.reset();
        if (result['code']) {
            alert(result['message']);
            return;
        }
        redirectToPage('movies');
    });


}

function getPageHtmlElement() {
    return sectionElement;
}

let addMoviePage = {
    initialize,
    getPageHtmlElement,
}

export default addMoviePage;