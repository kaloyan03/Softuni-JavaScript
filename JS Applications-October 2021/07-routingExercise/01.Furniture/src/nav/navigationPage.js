import { navigationTemplate } from './navigationTemplate.js';
import authService from '../services/authService.js';

function viewPage(context) {
    let navInfo = {
        currentPage: context.pathname,
        isLoggedIn: authService.isLoggedIn(),
    }
    let templateResult = navigationTemplate(navInfo);
    context.renderNavigation(templateResult);
}

let navigationPage = {
    viewPage,
}

export default navigationPage;