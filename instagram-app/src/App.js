import React, { useState } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBar';
import withAuthenticate from './authentication/withAuthentication';
const initialData = dummyData;

const PostPageWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    }
  }

  searchHandler = (event) => {
    this.setState({searchInput: event.target.value});
  }
  render() {
    return (
      <div>
        <SearchBar 
          inputHandler={this.searchHandler}
          inputValue={this.state.searchInput}
        />
        <PostPageWithAuthenticate
          posts={initialData}
          searchInput={this.state.searchInput}
        />
      </div>
    );
  }
}

export default App;
