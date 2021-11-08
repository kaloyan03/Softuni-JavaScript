import moviePage from "./pages/moviePage.js";
import registerPage from "./pages/registerPage.js";
import loginPage from "./pages/loginPage.js";
import authentication from "./services/authService.js";
import addMoviePage from "./pages/addMoviePage.js";
import editMoviePage from "./pages/editMoviePage.js";
import movieDescriptionPage from "./pages/movieDescriptionPage.js";


let views = {
    'movies': moviePage.getPageHtmlElement,
    'register': registerPage.getPageHtmlElement,
    'login': loginPage.getPageHtmlElement,
    'logout': () => {
        if (authentication.isAuthenticated()) {
            authentication.clearStorage(); 
        } else {
            alert('You are not logged in yet!');
        }
        let aUsernameElement = document.getElementById('usernameChanger');
        aUsernameElement.textContent = `Welcome, email`;
        return loginPage.getPageHtmlElement();
    },
    'add-movie': addMoviePage.getPageHtmlElement,
    'edit-movie': editMoviePage.getPageHtmlElement,
    'movie-description': movieDescriptionPage.getPageHtmlElement,
}

function clearPage() {
    let mainElement = document.querySelector('main');
    let allSectionElements = mainElement.querySelectorAll('section');
    allSectionElements.forEach(el => {
        if (el.classList.contains('view')) {
            el.remove();
        }
    });
}

async function redirectToPage(route, username) {
    clearPage();
    let view = await views[route](username);
    document.querySelector('main').appendChild(view);
}

export {
    redirectToPage,
    clearPage,
}