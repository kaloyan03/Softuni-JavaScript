function attachEvents() {
    let blogBaseUrl = `http://localhost:3030/jsonstore/blog/`;
    let loadPostsButtonElement = document.getElementById('btnLoadPosts');
    let viewPostButtonElement = document.getElementById('btnViewPost');

    loadPostsButtonElement.addEventListener('click', loadPostsButtonHandler)

    function loadPostsButtonHandler() {
        fetch(`${blogBaseUrl}posts`)
        .then(body => body.json())
        .then(posts => {
            let titleOptionsElement = document.getElementById('posts');
            for (const [key, value] of Object.entries(posts)) {
                let currentPostTitle = value['title'];
                let currentPostBody = value['body'];
                let currentPostId = value['id'];

                let optionElement = createOptionElement(currentPostTitle, key, currentPostBody, currentPostId);
                titleOptionsElement.appendChild(optionElement);


            }
        })
    }

    function createOptionElement(title, key, postBody, postId) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute('value', key);
        optionElement.textContent = title.toUpperCase();
        optionElement.setAttribute('post-body', postBody);
        optionElement.setAttribute('post-id', postId)
        return optionElement;
    }

    viewPostButtonElement.addEventListener('click', viewPostHandler);

    async function viewPostHandler() {
        const commentsInfo = await fetch(`${blogBaseUrl}comments`).then(body => body.json());
        let comments = [];
        let posts = document.getElementById('posts');
        let selectedPostId = posts.value;
        for (const value of Object.values(commentsInfo)) {
            if (value['postId'] === selectedPostId) {
                comments.push(value['text']);
            }
        }

        const postInfo = await fetch(`${blogBaseUrl}posts/${selectedPostId}`).then(body => body.json());

        let postBody = postInfo['body'];
        let postTitle = postInfo['title'];

        let postTitleElement = document.getElementById('post-title');
        postTitleElement.textContent = postTitle;

        let postBodyElement = document.getElementById('post-body');
        postBodyElement.textContent = postBody;

        let commentsUlElement = document.getElementById('post-comments');
        commentsUlElement.innerHTML = '';
        for (const comment of comments) {
            let liElement = document.createElement('li');
            liElement.textContent = comment;
            commentsUlElement.appendChild(liElement);
        }




        // fetch(`${blogBaseUrl}comments`)
        // .then(body => body.json())
        // .then(commentsInfo => {
        //     let comments = [];
        //     let posts = document.getElementById('posts');
        //     let selectedPostId = posts.value;
        //     for (const value of Object.values(commentsInfo)) {
        //         if (value['postId'] === selectedPostId) {
        //             comments.push(value['text']);
        //         }
        //     }
        //     createPost()
        // })
    }

    // function getPostBodyAndTitle(postId) {
    //     fetch(`${blogBaseUrl}posts`)
    //     .then(body => body.json())
    //     .then(postInfo => {
    //         let result = [];
    //         let postTitle = undefined;
    //         let postBody = undefined;
    //         for (const [key, value] of Object.entries(postInfo)) {
    //             if (key === postId) {
    //                 postTitle = value['title'];
    //                 postBody = value['body'];
    //                 // result.push(postTitle);
    //                 // result.push(postBody);
    //                 break;
    //             }
    //         }
    //     })

    // }
}

attachEvents();