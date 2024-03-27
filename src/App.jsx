import { useState } from 'react';
import Post from './components/Post'; 
import CreatePostForm from './components/CreatePostForm'; 
function App() {
  const [post, setPost] = useState([])
  let handleNewSubmission = (data) => {
    setPost([...post, data])
  }
  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm onNewSubmit={handleNewSubmission}/>
      {/*Feed*/}
      <Post content={post} />
    </div>
  );
  
}

export default App;
