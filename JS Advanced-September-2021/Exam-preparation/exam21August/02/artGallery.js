class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {'picture': 200, 'photo': 50, 'item': 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        let isArticleExists = false;
        for (const key in this.possibleArticles) {
            if (key === articleModel.toLowerCase()) {
                isArticleExists = true;
                break;
            }
        }
        if (isArticleExists === false) {
            throw new Error('This article model is not included in this gallery!');
        }
        let articleInArticles = this.getItem(this.listOfArticles, articleName, undefined, 'articleName');

        if (articleInArticles == undefined) {
            let newArticle = {articleModel: articleModel.toLowerCase(), articleName, quantity};
        
            this.listOfArticles.push(newArticle);
        } else {
            articleInArticles['quantity'] += Number(quantity);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        const pointsMapper = {'Vip': 500, 'Middle': 250}
        let guest = this.getItem(this.guests, guestName, undefined, 'guestName');

        if (guest !== undefined) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let guestPoints = 0;

        if (!(pointsMapper[personality])) {
            guestPoints = 50;
        } else {
            guestPoints = pointsMapper[personality];
        }

        let newGuest = {guestName, points: guestPoints, purchaseArticle: 0};
        this.guests.push(newGuest);
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.getItem(this.listOfArticles, articleName, articleModel, 'articleName', 'articleModel');

        if (article === undefined) {
            throw new Error('This article is not found.');
        } 

        if (article['quantity'] === 0) {
            return `The ${articleName} is not available`;
        }

        let guest = this.getItem(this.guests, guestName, undefined, 'guestName');

        if (guest === undefined) {
            return `This guest is not invited.`;
        }

        let articlePoints = this.possibleArticles[article['articleModel']];

        if (articlePoints <= guest['points']) {
            guest['points'] -= articlePoints;
            article['quantity'] -= 1;
            guest['purchaseArticle'] += 1;
            
            return `${guestName} successfully purchased the article worth ${articlePoints} points.`;
        }

        return `You need to more points to purchase the article.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === 'guest') {
            let guestsMessages = [];
            let result = `Guests information:\n`
        
            for (const guest of this.guests) {
                guestsMessages.push(`${guest['guestName']} - ${guest['purchaseArticle']}`);
            }

            result += guestsMessages.join('\n');

            return result;

        } else if (criteria === 'article') {
            let articlesMessages = [];
            let result = `Articles information:\n`
        
            for (const article of this.listOfArticles) {
                articlesMessages.push(`${article['articleModel']} - ${article['articleName']} - ${article['quantity']}`)
            }

            result += articlesMessages.join('\n');

            return result;
        }
    }
    
    // iterates over given collection and return the item if is in the collection, otherwise returns undefined
    getItem(collection, collectionParam, secondCollectionParam, ...params) {
        let result = undefined;

        if (params.length == 1) {
            let searchingParam = params[0];
            for (const element of collection) {
                if (element[searchingParam] === collectionParam) {
                    result = element;
                    break;
                }
            }
        } else if (params.length == 2) {
            let firstSearchingParam = params[0];
            let secondSearchingParam = params[1];
            for (const element of collection) {
                if (element[firstSearchingParam] === collectionParam && element[secondSearchingParam] === secondCollectionParam) {
                    result = element;
                    break;
                }
            }
        }
        return result;
    }
}

// test addArticle functionality

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// test inviteGuest functionality

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('test', 'dle'));

// test buyArticle funcitonality

const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// test all functionality

// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));

console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));

