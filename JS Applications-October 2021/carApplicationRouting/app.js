import page from './node_modules/page/page.mjs';


import { homePage } from './src/views/homeView.js';
import { carsPage } from './src/views/carsView.js';
import { loginPage } from './src/views/loginView.js';
import { registerPage } from './src/views/registerView.js';
import { createCarPage} from './src/views/createCarView.js';
import { carDescriptionPage} from './src/views/carDescriptionView.js';
import { renderingMiddleware } from './src/renderingMiddleware.js';
import { logoutUser } from './src/services/authService.js';
import { clearStorage } from './src/services/authService.js';


page(renderingMiddleware);

page('/home', homePage);
page('/cars', carsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/add-car', createCarPage);
page('/details/:id', carDescriptionPage);
page('/logout', function() { logoutUser(); page.redirect('/login'); clearStorage()});

page.start();