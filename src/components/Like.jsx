import React, { useState } from 'react';

function Like() {
    const [likes, setLikes] = useState(0);
    function handleLike(){
        setLikes(likes + 1);
    }
    return(
        <div>
            <p>Likes: {likes}</p>
            <button onClick={handleLike} className='likebutton'>Like</button>
        </div>
        
    )
}

export default Like