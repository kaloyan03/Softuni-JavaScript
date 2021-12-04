import { page, render } from './lib.js';


import home from './views/home.js';
import login from './views/login.js';
import register from './views/register.js';
import catalog from './views/catalog.js';
import details from './views/details.js';
import edit from './views/edit.js';
import create from './views/create.js';
import search from './views/search.js';
import navigation from './views/navigation.js';

let mainContainer = document.querySelector('#main-content');
let navContainer = document.querySelector('#nav-content');



page(decorateContext);
page(navigation.viewNav);
page('/', '/home');
page('/index.html', '/home');
page('/home', home.viewPage);
page('/login', login.viewPage);
page('/register', register.viewPage);
page('/catalog', catalog.viewPage);
page('/create', create.viewPage);
page('/details/:id', details.viewPage);
page('/edit/:id', edit.viewPage);
page('/search', search.viewPage);

page.start();

function decorateContext(context, next) {
    context.renderView = (templateResult) => render(templateResult, mainContainer); 
    context.renderNav = (templateResult) => render(templateResult, navContainer); 
    next();
}