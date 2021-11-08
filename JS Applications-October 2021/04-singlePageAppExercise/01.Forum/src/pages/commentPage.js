let domElement = undefined;

function initializePage(domSelector) {
    domElement = document.querySelector(domSelector);
}

function getHtmlPageElement() {
    return domElement;
}

let commentPage = {
    initializePage,
    getHtmlPageElement,
}

export default commentPage;