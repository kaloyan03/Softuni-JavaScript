import page from './node_modules/page/page.mjs';
import rendering from './src/rendering/renderingMiddleware.js';
import dashboardPage from './src/pages/dashboard/dashboardPage.js';
import navigationPage from './src/nav/navigationPage.js';
 
let viewContainer = document.querySelector('div#viewContainer');
let navigationContainer = document.querySelector('nav#navigation');

rendering.initialize(viewContainer, navigationContainer);

page('/dashboard', rendering.decorateContext,navigationPage.viewPage, dashboardPage.viewPage);
page('/', '/dashboard');
page('/index.html', '/dashboard');

page.start();