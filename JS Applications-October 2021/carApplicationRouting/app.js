import page from './node_modules/page/page.mjs';


import homePage from './src/views/homeView.js';
import carsPage from './src/views/carsView.js';
import loginPage from './src/views/loginView.js';
import registerPage from './src/views/registerView.js';
import createCarPage from './src/views/createCarView.js';
import carDescriptionPage from './src/views/carDescriptionView.js';
import { renderingMiddleware, renderNav } from './src/renderingMiddleware.js';
import { renderView } from './src/renderingMiddleware.js';
import { logoutUser } from './src/services/authService.js';
import { clearStorage } from './src/services/authService.js';
import carsView from './src/views/carsView.js';
import navView from './src/views/navView.js';

homePage.initialize(page, renderView);
loginPage.initialize(page, renderView);
registerPage.initialize(page, renderView);
createCarPage.initialize(page, renderView);
carsView.initialize(page, renderView);
carDescriptionPage.initialize(page, renderView);
navView.initialize(page, renderNav);

page(renderingMiddleware);
page(navView.navView);
page('/', '/home');
page('/index.html', '/home');
page('/home', homePage.homeView);
page('/cars', carsPage.carsView);
page('/login', loginPage.loginView);
page('/register', registerPage.registerView);
page('/add-car', createCarPage.createCarView);
page('/details/:id', carDescriptionPage.carDescriptionView);
page('/logout', function() { logoutUser(); page.redirect('/login'); clearStorage()});

page.start();