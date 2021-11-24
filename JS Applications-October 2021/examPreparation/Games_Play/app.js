import { page, render } from './lib.js';


import { navigationView } from './src/views/navigation.js';
import { loginView } from './src/views/login.js';
import { registerView } from './src/views/register.js';
import { catalogueView } from './src/views/catalogue.js';
import { createView } from './src/views/create.js';
import { editView } from './src/views/edit.js';
import { detailsView } from './src/views/details.js';
import { homeView } from './src/views/home.js';

page(decorateContext);
page(navigationView);
page('/', '/home');
page('/index.html', '/home');
page('/register', registerView)
page('/login', loginView)
page('/home', homeView)
page('/create', createView)
page('/edit', editView)
page('/details/:id', detailsView)
page('/catalogue', catalogueView)

page.start();


function decorateContext(context, next) {
    let mainContainer = document.querySelector('#main-content');
    let navigationContainer = document.querySelector('#navigation-container');
    context.renderView = (templateResult) => renderContent(templateResult, mainContainer);
    context.renderNav = (tempalteResult) => renderContent(tempalteResult, navigationContainer);
    next();

    function renderContent(template, container) {
        render(template, container);
    }
}