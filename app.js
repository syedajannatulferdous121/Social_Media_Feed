// app.js
// You can use JavaScript to dynamically generate posts and add them to the post list

// Example data
const posts = [
  {
    username: "John Doe",
    content: "Hello, world!",

    likes: 10,
    comments: 2
  },
  {
    username: "Jane Smith",
    content: "Having a great day!",
    likes: 5,
    comments: 1
  }
];

// Function to generate HTML for a post
function generatePostHTML(post) {
  return `
    <div class="post">
      <h3>${post.username}</h3>
      <p>${post.content}</p>
      <div>
        <span>${post.likes} likes</span>
        <span>${post.comments} comments</span>
      </div>
    </div>
  `;
}

// Function to display posts on the page
function displayPosts() {
  const postList = document.querySelector(".post-list");
  postList.innerHTML = "";

  posts.forEach((post) => {
    const postHTML = generatePostHTML(post);
    postList.innerHTML += postHTML;
  });
}

// Call the displayPosts function to initially populate the post list
displayPosts();
