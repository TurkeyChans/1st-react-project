<<<<<<< HEAD
import React, { useState } from 'react';

import Comment from './Comment';

function Post(props){
  const [likes, setLikes] = useState(0);
  function handleLike(){
    setLikes(likes + 1);
  }
  let row = props.content.map((data) => {
    return(
      <div>
        <h3>Title: {data.title}</h3>
        <p>Description: {data.ds}</p>
        <p>Likes: {likes}</p>
        <button onClick={handleLike}>Like</button>
        <p>Comments:</p>
        <Comment content="This is a test comment!" />
        <Comment content="This is another test comment!" />
        <Comment content="This is yet another test comment!" />
      </div>
    )
    })
    return(
      <div>
        <h1>Post</h1>
        {row}
      </div>
    )
}
export default Post
=======
import React, { useState } from 'react';

import Comment from './Comment';

function Post(props){
  const [likes, setLikes] = useState(0);
  function handleLike(){
    setLikes(likes + 1);
  }
  let row = props.content.map((data) => {
    return(
      <div>
        <h3>Title: {data.title}</h3>
        <p>Description: {data.ds}</p>
        <p>Likes: {likes}</p>
        <button onClick={handleLike}>Like</button>
        <p>Comments:</p>
        <Comment content="This is a test comment!" />
        <Comment content="This is another test comment!" />
        <Comment content="This is yet another test comment!" />
      </div>
    )
    })
    return(
      <div>
        <h1>Post</h1>
        {row}
      </div>
    )
}
export default Post
>>>>>>> 36f64cda08b49a87eb4d8f09d0de808129880b1c
