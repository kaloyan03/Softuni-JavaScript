import { navigationTemplate } from './navigationTemplate.js';
import authService from '../services/authService.js';

function viewPage(context, next) {
    let navInfo = {
        currentPage: context.pathname,
        isLoggedIn: authService.isLoggedIn(),
    }
    let templateResult = navigationTemplate(navInfo);
    context.renderNavigation(templateResult);
    next();
}

let navigationPage = {
    viewPage,
}

export default navigationPage;