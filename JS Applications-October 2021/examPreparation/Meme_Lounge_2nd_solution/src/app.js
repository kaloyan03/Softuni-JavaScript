import { page } from './lib.js';
import { render } from './lib.js';


import home from './views/home.js';
import navigation from './views/navigation.js';
import allMemes from './views/allMemes.js';
import createMeme from './views/createMeme.js';
import detailsMeme from './views/detailsMeme.js';
import editMeme from './views/editMeme.js';
import login from './views/login.js';
import register from './views/register.js';
import myMemes from './views/myMemes.js';


let mainContainer = document.querySelector('#main-container');
let navContainer = document.querySelector('#nav-container');


page(decorateContext);
page(navigation.viewNav);
page('/', '/home');
page('/index.html', '/home');
page('/home', home.viewPage);
page('/login', login.viewPage);
page('/register', register.viewPage);
page('/create', createMeme.viewPage);
page('/all-memes', allMemes.viewPage);
page('/details/:id', detailsMeme.viewPage);
page('/edit/:id', editMeme.viewPage);
page('/my-profile', myMemes.viewPage);

page.start();

function decorateContext(context, next) {
    context.renderView = (result) => render(result, mainContainer);
    context.renderNav = (result) => render(result, navContainer);
    next();
}