import movieService from "./services/moviesService.js";
import movieDescriptionPage from './pages/movieDescriptionPage.js';
import editMoviePage from "./pages/editMoviePage.js";
import { redirectToPage } from './viewChanger.js';
import authentication from "./services/authService.js";
import likesService from "./services/movieLikesService.js";

let movieId = undefined;
let movieLikes = undefined;

function createMovieDivElement(imgUrl, title, id) {
    let divHeadingElement = document.createElement('div');
    divHeadingElement.setAttribute('class', 'card mb-4');

    let imgElement = document.createElement('img');
    imgElement.setAttribute('class', 'card-img-top');
    imgElement.setAttribute('src', imgUrl);
    imgElement.setAttribute('alt', 'Card image cap');
    imgElement.setAttribute('width', '400');
    divHeadingElement.appendChild(imgElement);

    let divBodyElement = document.createElement('div');
    divBodyElement.setAttribute('class', 'card-body');
    let h4Element = document.createElement('h4');
    h4Element.setAttribute('class', 'card-title');
    h4Element.textContent = title;
    divBodyElement.appendChild(h4Element);
    divHeadingElement.appendChild(divBodyElement);

    let divFooterElement = document.createElement('div');
    divFooterElement.setAttribute('class', 'card-footer');
    let aDetailsElement = document.createElement('a');
    let buttonElement = document.createElement('button');
    buttonElement.setAttribute('class', 'btn btn-info');
    buttonElement.textContent = 'Details';
    buttonElement.dataset.id = id;
    aDetailsElement.setAttribute('href', '#');
    aDetailsElement.appendChild(buttonElement);
    aDetailsElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (authentication.isAuthenticated() === false) {
            alert('You must be logged in to see movie details!');
            return;
        }
        movieService.getMovie(e.target.dataset.id)
            .then(data => {
                let descriptionPage = createMovieDescription(data['title'], data['description'], data['img'], data);
                let movieDescriptionSection = movieDescriptionPage.getPageHtmlElement();
                Array.from(movieDescriptionSection.children).forEach(el => el.remove());
                movieDescriptionSection.appendChild(descriptionPage);
                movieDescriptionPage.updateSection(movieDescriptionSection);
                redirectToPage('movie-description');

            })
    });


    divFooterElement.appendChild(aDetailsElement);
    divHeadingElement.appendChild(divFooterElement);

    return divHeadingElement;
}

function createMovieDescription(title, description, image, movie) {
    let movieId = movie['_id'];
    let editMovieSection = editMoviePage.getPageHtmlElement();
    editMovieSection.dataset.movieId = movieId;
    let movieDescriptionSection = movieDescriptionPage.getPageHtmlElement();
    let movieDescriptionDiv = movieDescriptionSection.querySelector('div.container').cloneNode(true);
    movieDescriptionDiv.dataset.movieId = movie['_id'];
    let h1Element = movieDescriptionDiv.querySelector('h1');
    h1Element.textContent = `Movie title: ${title}`;
    let pElement = movieDescriptionDiv.querySelector('p');
    pElement.textContent = description;
    let imgElement = movieDescriptionDiv.querySelector('img');
    imgElement.removeAttribute('src');
    imgElement.setAttribute('src', image);
    likesService.getMovieLikes(movieId)
    .then(result => {
        let spanElement = movieDescriptionDiv.querySelector('span.enrolled-span');
        spanElement.textContent = `Liked ${result}`;
        })
    let buttonElements = movieDescriptionDiv.querySelectorAll('a.btn');
    let deleteButtonElement = buttonElements[0];
    deleteButtonElement.addEventListener('click', deleteButtonHandler);
    let editButtonElement = buttonElements[1];
    editButtonElement.addEventListener('click', editButtonHandler);
    let likeButtonElement = buttonElements[2];
    likeButtonElement.addEventListener('click', likeButtonHandler);
    likesService.getUserMovieLikes(authentication.getUserId(), movieId)
    .then(userLikes => {
        let userAlreadyLikedMovie = false;
        userLikes.forEach(el => {
            if (el['movieId'] === movie['_id']) {
                likeButtonElement.style.display = 'none';
                userAlreadyLikedMovie = true;
            }
        })

        if (!userAlreadyLikedMovie || userLikes.length === 0) {
            likeButtonElement.style.display = 'inline-block';
        }

        if(authentication.getUserId() === movie['_ownerId']) {
            likeButtonElement.style.display = 'none';
        }
    })
    if (authentication.getUserId() !== movie['_ownerId']) {
        deleteButtonElement.style.display = 'none';
        editButtonElement.style.display = 'none';
    } else {
        deleteButtonElement.style.display = 'inline';
        editButtonElement.style.display = 'inline';
    }
    return movieDescriptionDiv;
}

function likeButtonHandler(e) {
    let movieId = e.target.parentElement.parentElement.parentElement.dataset.movieId;
    likesService.getMovieLikes(movieId)
        .then(result => {
            movieLikes = result;
            likesService.likeMovie(movieId)
                .then(result => {
                    try {
                        let spanElement = e.target.parentElement.querySelector('span');
                        spanElement.textContent = `Liked ${Number(movieLikes + 1)}`;
                        e.target.style.display = 'none';
                    } catch (err) {
                        alert(err);
                    }
                })
        })
}

function editButtonHandler(e) {
    let movieDivElement = e.target.parentElement.parentElement.parentElement;
    redirectToPage('edit-movie');
    movieId = movieDivElement.dataset.movieId;

}


async function deleteButtonHandler(e) {
    let movieDivElement = e.target.parentElement.parentElement.parentElement;
    let movieId = movieDivElement.dataset.movieId;
    // movieService.deleteMovie(movieId)
    //     .then(result => {
    //         clearPage();
    //         redirectToPage('movies');
    //     })

    await movieService.deleteMovie(movieId);
    redirectToPage('movies');
}

export { createMovieDivElement, createMovieDescription };