import page from './node_modules/page/page.mjs';
import rendering from './src/rendering/renderingMiddleware.js';
import dashboardPage from './src/pages/dashboard/dashboardPage.js';
import navigationPage from './src/nav/navigationPage.js';
import registerPage from './src/pages/register/registerPage.js';
import loginPage from './src/pages/login/loginPage.js';
import authService from './src/services/authService.js';
import detailsPage from './src/pages/details/detailsPage.js';
 
let viewContainer = document.querySelector('div#viewContainer');
let navigationContainer = document.querySelector('nav#navigation');

rendering.initialize(viewContainer, navigationContainer);

page('/dashboard', rendering.decorateContext,navigationPage.viewPage, dashboardPage.viewPage);
page('/register', rendering.decorateContext,navigationPage.viewPage ,registerPage.viewPage);
page('/login', rendering.decorateContext,navigationPage.viewPage ,loginPage.viewPage);
page('/logout', async function(context) {await authService.logoutUser(); context.page.redirect('/login')})
page('/details/:id', rendering.decorateContext,navigationPage.viewPage ,detailsPage.viewPage)
page('/', '/dashboard');
page('/index.html', '/dashboard');

page.start();