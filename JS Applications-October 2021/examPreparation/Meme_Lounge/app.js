import page from "./node_modules/page/page.mjs";


import { decorateContext, renderView, renderNav } from "./src/middlewears/renderingMiddlewear.js";
import welcomePage from './src/pages/welcomePage.js';
import loginPage from './src/pages/loginPage.js';
import registerPage from "./src/pages/registerPage.js";
import memesPage from './src/pages/memesPage.js';
import createMemePage from "./src/pages/createMemePage.js";
import editMemePage from "./src/pages/editMemePage.js";
import detailsMemePage from "./src/pages/detailsMemePage.js";
import profilePage from "./src/pages/profilePage.js";
import navigation from './src/navigationView.js';
import { logoutUser, clearStorage } from './src/services/authService.js';

navigation.initialize(page, renderNav);
welcomePage.initialize(page, renderView);
loginPage.initialize(page, renderView)
registerPage.initialize(page, renderView);
memesPage.initialize(page, renderView);
createMemePage.initialize(page, renderView);
editMemePage.initialize(page, renderView);
detailsMemePage.initialize(page, renderView);
profilePage.initialize(page, renderView);


page(decorateContext);
page(navigation.navigationView);

page('/', '/home');
page('/index.html', '/home');
page('/home', welcomePage.welcomeView);

page('/login', loginPage.loginView);
page('/register', registerPage.registerView);
page('/logout', () => {logoutUser(); clearStorage(); page.redirect('/home')});

page('/memes', memesPage.memesView);
page('/create-meme', createMemePage.createMemeView);
page('/my-profile', profilePage.profilePageView);
page('/edit/:id', editMemePage.editMemeView);
page('/details/:id', detailsMemePage.memeDetailsView);

page.start();