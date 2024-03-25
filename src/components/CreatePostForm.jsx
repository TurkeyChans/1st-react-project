import { useState } from 'react';
import Post from './Post'; 



function CreatePostForm(props) {
    const [title, setTitle] = useState("")
    const [ds, setDs] = useState("")
    let handleSubmit = (event) => {
        event.preventDefault()
        props.onNewSubmit({title, ds})
        
    }
    let handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    let handleDsChange = (event) => {
        setDs(event.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id='title' type='text' placeholder='Title' onChange={handleTitleChange}></input>
                <input id='description' type='text' placeholder='Description' onChange={handleDsChange}></input>
                <input type='submit' disabled={title === "" || ds === ""}></input>
            </form>
            
        </div>
        
    )
}

export default CreatePostForm