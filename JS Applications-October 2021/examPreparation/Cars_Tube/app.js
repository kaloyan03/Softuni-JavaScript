import { page, render } from './src/lib.js';

import navigation from './src/views/navigation.js';
import login from './src/views/login.js';
import register from './src/views/register.js';
import allListings from './src/views/allListings.js';
import home from './src/views/home.js';
import create from './src/views/create.js';
import details from './src/views/details.js';
import edit from './src/views/edit.js';
import myListings from './src/views/myListings.js';

let mainRoot = document.querySelector('#site-content');
let navRoot = document.querySelector('#nav-root');

page(decorateContext);
page(navigation.viewNav);
page('/', '/home')
page('/index.html', '/home')
page('/home', home.viewPage)
page('/login', login.viewPage)
page('/register', register.viewPage)
page('/all-listings', allListings.viewPage)
page('/create', create.viewPage)
page('/details/:id', details.viewPage)
page('/edit/:id', edit.viewPage)
page('/my-listings', myListings.viewPage)

page.start();

function decorateContext(context, next) {
    context.renderView = (result) => {render(result, mainRoot)};
    context.renderNav = (result) => {render(result, navRoot)};
    next();
}
