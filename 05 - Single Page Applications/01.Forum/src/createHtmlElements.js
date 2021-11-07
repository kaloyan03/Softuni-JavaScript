function createTopicElement(username, post) {
    let divHeadingElement = document.createElement('div');
    divHeadingElement.setAttribute('class', 'comment');

    // append this div to the divheader
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'header');

    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', '../static/profile.png');
    imgElement.setAttribute('alt', 'avatar');
    divElement.appendChild(imgElement);

    let paragraphElement = document.createElement('p');
    paragraphElement.innerHTML = `<span>${username}</span> posted on <time>15.20.2020</time>`;
    divElement.appendChild(paragraphElement);

    let postParagraphElement = document.createElement('p');
    postParagraphElement.setAttribute('class', 'post-content');
    postParagraphElement.textContent = post;
    divElement.appendChild(postParagraphElement);

    divHeadingElement.appendChild(divElement);
    return divHeadingElement;
}   

function createCommendElement(username, post) {
    let divUserCommendElement = document.createElement('div');
    divUserCommendElement.setAttribute('class', 'user-commend');

    // don't forget to append it to the divUserCommendElement
    let divTopicWrapper = document.createElement('div');
    divTopicWrapper.setAttribute('class', 'topic-name-wrapper');
    
    // don't forget to append it to the divTopicWrapper
    let divTopicName = document.createElement('div');
    divTopicName.setAttribute('class', 'topic-name');

    let paragraphElement = document.createElement('p');
    paragraphElement.innerHTML = `<span>${username}</span> commented on <time>15.20.2020</time>`;
    divTopicName.appendChild(paragraphElement);

    let postDivElement = document.createElement('div');
    postDivElement.setAttribute('class', 'post-content');
    let postParagraphElement = document.createElement('p');
    postParagraphElement.textContent = post;
    postDivElement.appendChild(postParagraphElement);

    divTopicName.appendChild(postDivElement);
    divTopicWrapper.appendChild(divTopicName);
    divUserCommendElement.appendChild(divTopicWrapper);

    return divUserCommendElement;
}


export { createTopicElement, createCommendElement }