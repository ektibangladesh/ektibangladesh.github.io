// Get references to elements
const postForm = document.getElementById('postForm');
const postContent = document.getElementById('postContent');
const postsDiv = document.getElementById('posts');

// Load posts from LocalStorage
const loadPosts = () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    postsDiv.innerHTML = '';
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <p>${post}</p>
            <button onclick="deletePost(${index})">Delete</button>
        `;
        postsDiv.appendChild(postElement);
    });
};

// Save a new post
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.unshift(postContent.value); // Add new post to the top
    localStorage.setItem('posts', JSON.stringify(posts));
    postContent.value = '';
    loadPosts();
});

// Delete a post
const deletePost = (index) => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
};

// Load posts on page load
loadPosts();