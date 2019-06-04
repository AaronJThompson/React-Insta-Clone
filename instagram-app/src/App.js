import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import uuid from 'uuid';
import levenshtein from 'fast-levenshtein';
const initialData = dummyData;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchInput: '',
    }
  }

  componentDidMount() {
    this.addPostIds(initialData);
  }

  searchHandler = (event) => {
    this.setState({searchInput: event.target.value});
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
  shouldShowResult = (post) => {
    if (this.state.searchInput.length === 0)
      return true;
    let searchTerm = this.state.searchInput.toLowerCase();
    let usernameLowered = post.username.toLowerCase();
    //Get Levenshtein distance using fast-levenshtein
    let distance = levenshtein.get(searchTerm, usernameLowered);

    //If the search term is shorter than the username, we should normalize the distance for easier searching
    if (searchTerm.length < usernameLowered.length){
      distance -= usernameLowered.length - searchTerm.length;
    }
    // If the distance is less than 20% of the search term length, display it.
    return distance < (searchTerm.length * 0.2);
  }
  render() {
    return (
      <div>
        <SearchBar 
          inputHandler={this.searchHandler}
          inputValue={this.state.searchInput}
        />
        {

          this.state.posts.filter((post) => this.shouldShowResult(post))
          .map(post => {
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
