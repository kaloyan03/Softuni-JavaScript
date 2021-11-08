import topicPage from "./src/pages/topicsPage.js";
import commentPage from "./src/pages/commentPage.js";

function setup() {
    topicPage.initializePage('#post-button', '#cancel-button', '#home-page');
    commentPage.initializePage('#comment-page');
}

setup();
