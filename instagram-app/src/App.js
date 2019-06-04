import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import uuid from 'uuid';

const initialData = dummyData;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: initialData,
    }
  }

  addPostIds = (postArray) => {
    let changes = 0;
    let newPosts = postArray.map(post => {
      if (!post.id){
        changes++;
        post.id = uuid();
      }
      return post;
    })
    if (changes)
      this.setState({posts: newPosts});
  }
  addComment = (comment, postId) => {
    const newPosts = this.state.posts.map(post => {
      if (post.id === postId) {
        post.comments.push(comment);
      }
      return post;
    })
    this.setState({posts: newPosts});
  }
  likePost = (postId) => {
    const newPosts = this.state.posts.map(post => {
      if (post.id === postId) {
        post.likes += 1;
      }
      return post;
    })
    this.setState({posts: newPosts});
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        {
          this.state.posts.map(post => {
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
              addComment={this.addComment}
              likePost={this.likePost}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
