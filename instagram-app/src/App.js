import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import uuid from 'uuid';

const initialData = dummyData;
function App() {
  const [ posts, setPosts ] = useState(initialData);
  return (
    <div>
      {
        posts.map(post => {
          return (
            <PostContainer
            key={uuid()}
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
            likes={post.likes}
            timestamp={post.timestamp}
            comments={post.comments}
            />
          )
        })
      }
    </div>
  );
}

export default App;
