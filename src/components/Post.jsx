import React from 'react';
import Comment from './Comment';

function Post(){
  return(
    <div>
      <h3>Test Post</h3>
      <p>This Post is amazing</p>
      <p>Likes: 30</p>
      <p>Comments:</p>
      <Comment content="This is a test comment!" />
      <Comment content="This is another test comment!" />
      <Comment content="This is yet another test comment!" />
    </div>
  )
}
export default Post
