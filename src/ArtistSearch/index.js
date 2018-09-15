import React, { Component } from 'react';
import { Input } from 'antd';
import { getArtistSearchUrl, getArtistInfoUrl } from '../helper';

const Search = Input.Search;

class ArtistSearch extends Component {
  onSearch = async (value) => {
    this.props.setSearching(true);
    const response = await getArtistSearchUrl(value);
    const jsonResponse = await response.json();
    this.props.onSerchArtist(jsonResponse.results);
  };

  render() {
    return (
      <div>
        <Search
          placeholder="input search text"
          onSearch={this.onSearch}
          enterButton
          style={{ width: '400px' }}
        />
      </div>
    );
  }
}

export default ArtistSearch;
