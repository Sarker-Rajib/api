function loadPosts() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => diaplayPost(data))
};

function diaplayPost(posts) {
   const postContainer = document.getElementById('display-container')

   for (const post of posts) {
      const postdiv = document.createElement('div');
      postdiv.classList.add('post');
      postdiv.innerHTML = `
         <h4>User-${post.userId}</h4>
         <h5>Post: ${post.title}</h5>
         <p>${post.body}</p>
      `
      postContainer.appendChild(postdiv);
   }
}

loadPosts();