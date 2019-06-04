import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import uuid from 'uuid';

const initialData = dummyData;
function App() {
  const [ posts, setPosts ] = useState(initialData);
  let addPostIds = (postArray) => {
    let changes = 0;
    let newPosts = postArray.map(post => {
      if (!post.id){
        changes++;
        post.id = uuid();
      }
      return post;
    })
    if (changes)
      setPosts(newPosts);
  }
  let addComment = (comment, postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        post.comments.push(comment);
      }
      return post;
    }))
  }
  let likePost = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        post.likes += 1;
      }
      return post;
    }))
  }
  addPostIds(posts);
  return (
    <div>
      <SearchBar />
      {
        posts.map(post => {
          return (
            <PostContainer
            key={post.id}
            id={post.id}
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
            likes={post.likes}
            timestamp={post.timestamp}
            comments={post.comments}
            addComment={addComment}
            />
          )
        })
      }
    </div>
  );
}

export default App;
