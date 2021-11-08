function solution() {
    let itemsSectionElement = document.getElementById('main');

    async function resolve() {
        let articlesListUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';

        let articlesList = await fetch(articlesListUrl).then(body => body.json());

        for (const article of articlesList) {
            let articleId = article['_id'];
            let articleInfo = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`).then(body => body.json());
            let articleTitle = articleInfo['title'];
            let articleContent = articleInfo['content'];

            let articleElement = createArticle(articleTitle, articleId, articleContent);
            itemsSectionElement.appendChild(articleElement);
        }
    }

    function createArticle(title, id, content) {
    //     <!-- <div class="accordion">
    //     <div class="head">
    //         <span>Scalable Vector Graphics</span>
    //         <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
    //     </div>
    //     <div class="extra">
    //         <p>Scalable Vector Graphics .....</p>
    //     </div>
    // </div> -->
        let articleDivElement = document.createElement('div');
        articleDivElement.setAttribute('class', 'accordion');
        
        let headDivElement = document.createElement('div');
        headDivElement.setAttribute('class', 'head');

        let titleSpanElement = document.createElement('span');
        titleSpanElement.textContent = title;

        let buttonElement = document.createElement('button');
        buttonElement.setAttribute('class', 'button');
        buttonElement.setAttribute('id', id);
        buttonElement.textContent = 'More';

        buttonElement.addEventListener('click', buttonElementHandler)

        headDivElement.appendChild(titleSpanElement);
        headDivElement.appendChild(buttonElement);
        articleDivElement.appendChild(headDivElement);

        let extraDivElement = document.createElement('div');
        extraDivElement.setAttribute('class', 'extra');
        let extraParagraphElement = document.createElement('p');
        extraParagraphElement.textContent = content;
        extraDivElement.appendChild(extraParagraphElement);
        
        articleDivElement.appendChild(extraDivElement);

        return articleDivElement;
    }

    function buttonElementHandler(e) {
        let buttonElement = e.currentTarget;
        let parahraphDiv = e.currentTarget.parentElement.parentElement.children[1];

        if (buttonElement.textContent === 'More') {
            buttonElement.textContent = 'Less';
            parahraphDiv.style.display = 'block';
        } else if (buttonElement.textContent == 'Less') {
            buttonElement.textContent = 'More';
            parahraphDiv.style.display = 'none';
        }
    }
    resolve()
}

solution()