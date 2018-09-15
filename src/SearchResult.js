import React, { Component } from 'react';
import { Icon, Card, Modal, Button } from 'antd';

class SearchResult extends Component {

  constructor() {
    super();
    this.state = {
      popupVisible: false
    };
  }

  hidePopup = () => {
    this.setState({ popupVisible: false });
  }

  showPopup = () => {
    this.setState({ popupVisible: true });
  };

  redirectToArtistLink = (link) => {
    window.location.href = link;
  }

  renderArtist = (artist) => (
    <div style={{ marginRight: '20px', display: 'inline-block', marginBottom: '20px', cursor: 'pointer' }} key={`${artist.mbid}${artist.name}`}>
      <Card title={artist.name} bordered={false} style={{ width: 320 }} onClick={() => this.redirectToArtistLink(artist.url)}>
        <p>Listeners: {artist.listeners}</p>
      </Card>
    </div>
  )

  renderPopup = (popupVisible) => {
    <Modal visible={popupVisible}>
      Put old seraches here...
    </Modal>
  }

  render() {
    const { artistSearchList, isSearching, oldSearches } = this.props;
    const { popupVisible } = this.state;
    const hasArtistList = artistSearchList.length > 0;
    if (isSearching) {
      return (
        <div>
          {this.renderPopup(popupVisible)}
          <div className="button_container">
            <Button type="primary" onClick={this.showPopup}>
              Old Searches
            </Button>
          </div>
          <div className="search_result_container center_element">
            <Icon type="loading" theme="outlined" />
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.renderPopup(popupVisible)}
        <div className="button_container">
          <Button type="primary" onClick={this.showPopup}>
            Old Searches
          </Button>
        </div>
        <div className="search_result_container">
          {hasArtistList && artistSearchList.map(this.renderArtist)}
          {!hasArtistList && (
            <p style={{ textAlign: 'center', fontSize: '32px', paddingTop: '75px' }}>Search for the artist...</p>
          )}
        </div>
      </div>
    );
  }
}

export default SearchResult;
