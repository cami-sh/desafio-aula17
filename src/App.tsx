import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {User} from "./types/User"
import {Post} from "./types/Post"

function App() {

  const [users, setUsers] = useState([])

  const [selectID, setSelectID] = useState<number>(0)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(resposta => setUsers(resposta.data))
  }, [])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${selectID}/posts`)
    .then(resposta => setPosts(resposta.data))
  }, [selectID])

  return (
    <div className="App">
      
      <ul>
        {
          users != null &&
          users.map((user:User) => (
            <li key={user.id} onClick={() => setSelectID(user.id)}>
              {user.name} ({user.id})
            </li>
          ))
        }
      </ul>

        {
          posts != null &&
          posts.map((post:Post) => (
            <div key={post.id}>
              <h2>{post.userId} - {post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        }


    </div>
  );
}

export default App;
