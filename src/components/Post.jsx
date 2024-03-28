import React, { useState } from 'react';
import CreateComment from './CreateComment';
import Comment from './Comment'
import Like from './Like'

function Post(props){
  const [comment, setComment] = useState([])
  let handleNewSubmission = (data) => {
    setComment([...comment, data])
  }
    return(
      <div className='Poster'>
        <h3>Title: {props.data.title}</h3>
        <p>Description: {props.data.ds}</p>
        <Like />
        <p>Comments:</p>
        <CreateComment onNewSubmit={handleNewSubmission}/>
        <Comment content={comment}/>
      </div>
    )
}
export default Post