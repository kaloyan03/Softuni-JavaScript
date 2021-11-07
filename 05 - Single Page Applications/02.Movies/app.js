// This file will be initializing pages saved by reference from separated modules for every page
import { clearPage } from "./src/viewChanger.js";
import moviePage from "./src/pages/moviePage.js";
import registerPage from "./src/pages/registerPage.js";
import loginPage from "./src/pages/loginPage.js";
import { redirectToPage } from "./src/viewChanger.js";
import addMoviePage from "./src/pages/addMoviePage.js";
import editMoviePage from "./src/pages/editMoviePage.js";
import movieDescriptionPage from "./src/pages/movieDescriptionPage.js";
import nav from "./src/nav.js";

setup();

function setup() {
    moviePage.initialize('#home-page');
    registerPage.initialize('#form-sign-up');
    loginPage.initialize('#form-login');
    addMoviePage.initialize('#add-movie');
    editMoviePage.initialize('#edit-movie');
    movieDescriptionPage.initialize('#movie-example');
    nav.initialize('#nav');
    clearPage();
    redirectToPage('movies');

}

