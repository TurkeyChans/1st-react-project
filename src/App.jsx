import { useState } from 'react';
import Feed from './components/Feed'; 
import CreatePostForm from './components/CreatePostForm';
import './App.css';

function App() {
  const [post, setPost] = useState([])
  let handleNewSubmission = (data) => {
    setPost([...post, data])
  }
  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm onNewSubmit={handleNewSubmission}/>
      <Feed content={post} />
    </div>
  );
  
}

export default App;
