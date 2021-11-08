import topicPage from './pages/topicsPage.js';
import commentPage from './pages/commentPage.js';

let views = { 
    'home-page': topicPage.getHtmlPageElement,
    'comment-page': commentPage.getHtmlPageElement,
}

function clearPage() {
    let mainElement = document.getElementById('main');
    Array.from(mainElement.children).forEach(el => el.remove());
}

function redirectTo(route) {
    clearPage();
    let view = views
}