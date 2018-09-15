import React, { Component } from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import Header from './Header';
import SearchResult from './SearchResult';
import LoginPage from './LoginPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artistSearchList: [],
      isSearching: false,
      oldSearches: []
    };
  }

  onSerchArtist = result => this.setState({
    artistSearchList: result.artistmatches.artist,
    isSearching: false
  });

  setSearching = isSearching => this.setState({ isSearching })

  render() {
    const { artistSearchList, isSearching, oldSearches } = this.state;
    const isLogin = true;
    if (isLogin) {
      return <LoginPage />
    }
    return (
      <div className="app_contianer">
        <Header onSerchArtist={this.onSerchArtist} setSearching={this.setSearching} />
        <SearchResult artistSearchList={artistSearchList} isSearching={isSearching} oldSearches={oldSearches} />
      </div>
    );
  }
}

export default App;
