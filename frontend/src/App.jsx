import LoginForm from "./components/Login"
// import { useState } from "react";

function App() {
  // const [posts, setPosts] = useState([]);

  // function fetchPosts() {
  //   fetch("http://localhost:8081/posts")
  //     .then((res) => res.json())
  //     .then(setPosts);
  // }
  return (
    <div className="container">
      <h1>Login</h1>
      <LoginForm />
    </div>
  )
}

export default App
