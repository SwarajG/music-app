import React, { Component } from 'react';
import ArtistSearch from './ArtistSearch';
import './App.css';

class Header extends Component {
  onSerchArtist = results => this.props.onSerchArtist(results);

  setSearching = value => this.props.setSearching(value);

  render() {
    return (
      <div className="header">
        <h1>Search Your Artist Here...</h1>
        <ArtistSearch onSerchArtist={this.onSerchArtist} setSearching={this.setSearching} />
      </div>
    );
  }
}

export default Header;
