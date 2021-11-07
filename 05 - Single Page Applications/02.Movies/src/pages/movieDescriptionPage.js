let sectionElement = undefined;

function initialize(domSelector) {
    sectionElement = document.querySelector(domSelector);
}

function getPageHtmlElement() {
    return sectionElement;
}

function updateSection(newSection) {
    sectionElement = newSection;
}

let movieDescriptionPage = {
    initialize,
    getPageHtmlElement,
    updateSection,
}

export default movieDescriptionPage;