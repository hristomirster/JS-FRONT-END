function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'

    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const selectPostElement = document.getElementById('posts');
    const postDetails = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');
    const postTittle = document.getElementById('post-title');
    btnLoadPosts.addEventListener('click', () => {
        selectPostElement.innerHTML = '';
        fetch(postsUrl)
            .then(res => res.json())
            .then(posts => {
                Object.values(posts)
                .forEach(post => {
                    const optionElement = document.createElement('option');
                    optionElement.value = post.id;
                    optionElement.textContent= post.title;

                    selectPostElement.appendChild(optionElement);
                })
            })
    })

    btnViewPost.addEventListener('click', () => {
        // console.log(selectPostElement.value);
        
        fetch(`${postsUrl}/${selectPostElement.value}`)
            .then(res => res.json())
            .then(post => {
                // console.log(post.body)
                // console.log(post.title)
                postTittle.textContent = post.title
                postDetails.textContent = post.body;
            })
        
        fetch(`${commentsUrl}`)
            .then(res => res.json())
            .then(comments => {                
                const commentsAll = (Object.values(comments));
                postComments.innerHTML = '';
                for (const comment of commentsAll) {
                    // console.log(comment.postId);
                    if (comment.postId === selectPostElement.value) {
                        // console.log(comment.text);
                        const liElement = document.createElement('li');
                        liElement.textContent = comment.text;
                        postComments.appendChild(liElement);
                    }
                }
            });
    });
}

attachEvents();
