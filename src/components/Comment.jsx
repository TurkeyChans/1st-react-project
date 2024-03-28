import React from 'react';

function Comment(props){
  return(
    <div>
      {props.content.map((comment) => (
        <p>User: {comment}</p>
      ))}
    </div>
  )
}
export default Comment