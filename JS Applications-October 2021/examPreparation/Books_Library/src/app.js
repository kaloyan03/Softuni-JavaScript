import page from '../node_modules/page/page.mjs';


import dashboardPage from "./pages/dashboardPage.js";
import registerPage from './pages/registerPage.js';
import loginPage from './pages/loginPage.js';
import renderMiddlewear from "./middlewears/renderMiddlewear.js";


let headerContainer = document.querySelector('#site-header');
let mainContainer = document.querySelector('#site-content');

renderMiddlewear.initialize(headerContainer, mainContainer);

dashboardPage.initialize(page, renderMiddlewear.renderMainView);
registerPage.initialize(page, renderMiddlewear.renderMainView);
loginPage.initialize(page, renderMiddlewear.renderMainView);

page(renderMiddlewear.decorateContext)
page('/dashboards', dashboardPage.viewPage)
page('/register', registerPage.viewPage)
page('/login', loginPage.viewPage)

page.start();