class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }
    
    set likes(val) {
        this._likes = [];
    }

    get comments() {
        return this._comments;
    }

    set comments(val) {
        this._comments = [];
    }

    like(username) {
        if (username in this._likes) {
            throw new Error("You can't like the same story twice!");
        } else if (username === this.creator) {
            throw new Error("You can't like your own story!");
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        if (!(this._likes.includes(username))) {
            throw new Error(`You can't dislike this story!`);
        }  else {
            this._likes = this._likes.filter(el => el !== username);
            return `${username} disliked ${this.title}`;
        }

    }

    comment(username, content, id) {
        for (const commend of this._comments) {
            if (id === undefined) {
                break;
            }

            if (commend['Id'] === id) {
                let replyId = `${commend['Id']}.${commend['Replies'].length + 1}`;
                let newReply = {Id: replyId, Username: username, Content: content};
                commend['Replies'].push(newReply);
                return `You replied successfully`;
            } 
        }

        if (this._comments.length == 0) {
            let newComment = {Id: 1, Username: username, Content: content, Replies: []};
            this._comments.push(newComment);
        } else {
            let newComment = {Id: this._comments.length + 1, Username: username, Content: content, Replies:[]};
            this._comments.push(newComment);
        }

        return `${username} commented on ${this.title}`;
    }

    toString(criteria) {
        const sortingMapper =  {
            asc : (a,b) => a.Id - b.Id,
            desc : (a,b) => b.Id - a.Id,
            username : (a,b) => a.Username.localeCompare(b.Username),
        };  


        let comments = this._comments.sort(sortingMapper[criteria]);
        
        comments.forEach(c => c['Replies'].sort(sortingMapper[criteria]))

        let commentsResultArray = [];
        for (const comment of comments) {
            let replies = comment['Replies'].map(r => `--- ${r.Id}. ${r.Username}: ${r.Content}`);
            commentsResultArray.push((replies.length > 0) 
            ? `-- ${comment.Id}. ${comment.Username}: ${comment.Content}\n${replies.join('\n')}` 
            : `-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
        }

        
        
        return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n${commentsResultArray.join('\n')}`;
        
        // console.log('');

        // let comments = this._comments.sort(sortingMapper[criteria]);
        
        // comments.forEach(c => c['Replies'].sort(sortingMapper[criteria]));
        // let commentsStringArr = [];
        // for (const comment of comments) {
        //     let commentString = `-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
        //     let repliesString = comment['Replies'].map(r => `--- ${r.Id}. ${r.Username}: ${r.Content}`);
        //     let combinedString = `${commentString}\n${repliesString}`;
        //     commentsStringArr.push(combinedString);
        // }

        // let fullCommendString = commentsStringArr;

        // return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:${fullCommendString}`;
       
    }
}



let art = new Story("My Story", "Anny");
console.log(art.like("John")); //John liked My Story!
console.log(art.likes); //John likes this story!
console.log(art.dislike("John")) //, "John disliked My Story");
console.log(art.likes) //, "My Story has 0 likes");
console.log(art.comment("Sammy", "Some Content")) //, "Sammy commented on My Story");
console.log(art.comment("Ammy", "New Content")) //, "Ammy commented on My Story");
console.log(art.comment("Zane", "Reply", 1)) //, "You replied successfully");
console.log(art.comment("Jessy", "Nice :)"))  //, "Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 1)) //, "You replied successfully");

console.log(art.toString('username')) //`Title: My Story