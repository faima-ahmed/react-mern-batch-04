import { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
    });
  return (
    <>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
