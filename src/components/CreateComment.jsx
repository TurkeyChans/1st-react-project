import React, { useState } from 'react';

function CreateComment(props){
    const [comment, setComment] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        props.onNewSubmit(comment);
    }

    let handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id='comment' type='text' placeholder='Comment' onChange={handleCommentChange} className='text'></input>
                <input type='submit' disabled={comment === ''} className='submit'></input>
            </form>
        </div>
    )
}

export default CreateComment;
