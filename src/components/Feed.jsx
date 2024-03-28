import React from 'react';
import Post from './Post';

function Feed(props) {
    return (
        <div>
            {props.content.map((post) => (
                <Post data={post} />
            ))}
        </div>
    )
}

export default Feed;
