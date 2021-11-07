import helper from '../helpers.js';
import topicService from '../services/topicService.js'
import { createTopicElement } from '../createHtmlElements.js';

let domElement = undefined;


function initializePage(postButtonSelector, cancelButtonSelector, domSelector) {
    domElement = document.querySelector(domElement);
    let postButtonElement = document.querySelector(postButtonSelector);
    postButtonElement.addEventListener('click', postButtonHandler);

    let cancelButtonElement = document.querySelector(cancelButtonSelector);
    cancelButtonElement.addEventListener('click', cancelButtonHandler);
    loadAllTopics();
}

function loadAllTopics() {
    let topicsDivElement = document.querySelector('div.topic-container');

    Array.from(topicsDivElement.children).forEach(el => el.remove());

    topicService.getTopics().then(result => {
        Object.values(result).forEach(el => {
            let title = el['title'];
            let username = el['username'];
            let post = el['postText'];

            let topicDivElement = createTopicElement(title, username, post);
            topicDivElement.addEventListener('click', commentHandler);
            topicDivElement.dataset.topicId = el['_id'];
            topicDivElement.dataset.username = username;
            topicDivElement.dataset.post = post;
            topicsDivElement.appendChild(topicDivElement);
        })
    })
}

function commentHandler(e) {

}

function postButtonHandler(e) {
    e.preventDefault();
    let [titleElement, usernameElement, postElement] = getInputElements('topicName', 'username', 'postText');
    if (!helper.checkIfFieldsAreEmpty(titleElement.value, usernameElement.value, postElement.value)) {
        alert('You can not post empty fields!');
        return;
    }

    let newTopic = {
        'title': titleElement.value,
        'username': usernameElement.value,
        'postText': postElement.value,
    }

    topicService.createTopic(newTopic);
    loadAllTopics();
    helper.clearInputFields(titleElement, usernameElement, postElement);
}

function cancelButtonHandler(e) {
    e.preventDefault();
    let [titleElement, usernameElement, postElement] = getInputElements('topicName', 'username', 'postText');
    helper.clearInputFields(titleElement, usernameElement, postElement);
}

function getInputElements() {
    let result = [];
    let titleElement = document.getElementById('topicName');
    let usernameElement = document.getElementById('username');
    let postElement = document.getElementById('postText');
    result.push(titleElement);
    result.push(usernameElement);
    result.push(postElement);
    return result;
}

function getHtmlPageElement() {
    return domElement;
}

let topicPage = {
    initializePage,
    getHtmlPageElement,
}

export default topicPage;