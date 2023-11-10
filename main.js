const showFormButton = document.getElementById('show-form');
const postForm = document.getElementById('post-form');
const createPostButton = document.getElementById('create-post');
const postsContainer = document.getElementById('posts');
const imageInput = document.getElementById('image');
const imagePreview = document.getElementById('image-preview');

showFormButton.addEventListener('click', () => {
    postForm.style.display = 'block';
});

 // preview image before posting
function previewImage() {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = '';
        imagePreview.style.display = 'none';
    }
}

createPostButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const description = document.getElementById('description').value;

    if (username && description) {
        const post = document.createElement('div');
        post.className = 'post';

        // Get the current date and time
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toLocaleString();

        post.innerHTML = `
        <h3>${username}</h3>
       <p>${formattedDateTime}</p>
       <h4>${description}</h4>


        <img src="${imagePreview.src}" alt="Post Image" style="max-width: 500px;">

        <button class="like-button"><i class="far fa-heart"></i> Like</button>
       <button class="comment-button"><i class="far fa-comment"></i> Comment</button>
       <div class="comments-container"></div>
    `;

        // Prepend the new post to the postsContainer to display the newest on top
        postsContainer.prepend(post);

        // Clear the input fields and hide the post form
        document.getElementById('username').value = '';
        document.getElementById('description').value = '';
        imageInput.value = ''; // Reset the file input
        imagePreview.src = '';
        imagePreview.style.display = 'none';
        postForm.style.display = 'none';
    }
});
