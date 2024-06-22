document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // Parse the JSON data and update the DOM
            updateDOM(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function updateDOM(data) {
    const postsContainer = document.getElementById('posts-container');

    data.forEach(post => {
        // Create a new post element
        const postElement = document.createElement('div');
        postElement.className = 'post';

        // Create the title element
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        // Create the body element
        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;

        // Append title and body to the post element
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);

        // Append the post element to the posts container
        postsContainer.appendChild(postElement);
    });
}
