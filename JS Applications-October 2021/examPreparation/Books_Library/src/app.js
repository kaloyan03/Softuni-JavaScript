import page from '../node_modules/page/page.mjs';


import dashboardPage from "./pages/dashboardPage.js";
import registerPage from './pages/registerPage.js';
import loginPage from './pages/loginPage.js';
import detailsPage from './pages/detailsPage.js';
import createPage from './pages/createPage.js';
import navView from './navView.js';
import renderMiddlewear from "./middlewears/renderMiddlewear.js";
import { logoutUser, clearStorage } from './services/authService.js';

let headerContainer = document.querySelector('#site-header');
let mainContainer = document.querySelector('#site-content');

renderMiddlewear.initialize(headerContainer, mainContainer);

navView.initialize(page, renderMiddlewear.renderHeaderView);
dashboardPage.initialize(page, renderMiddlewear.renderMainView);
registerPage.initialize(page, renderMiddlewear.renderMainView);
loginPage.initialize(page, renderMiddlewear.renderMainView);
detailsPage.initialize(page, renderMiddlewear.renderMainView);
createPage.initialize(page, renderMiddlewear.renderMainView);

page(renderMiddlewear.decorateContext)
page(navView.viewNav);
page('/dashboards', dashboardPage.viewPage)
page('/', '/dashboards')
page('/register', registerPage.viewPage)
page('/login', loginPage.viewPage)
page('/logout', function() {logoutUser(); clearStorage(); page.redirect('/login')})
page('/details/:id', detailsPage.viewPage)
page('/add-book', createPage.viewPage)
page.start();