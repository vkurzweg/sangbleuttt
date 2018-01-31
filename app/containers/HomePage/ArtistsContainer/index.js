/**
 *
 * ArtistsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import Insta from 'components/Insta';
import Insta2 from 'components/Insta2';
import { Switch, Icon } from 'antd';

export class ArtistsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      showArtists: false
    }
    this.toggleArtists = this.toggleArtists.bind(this);
  }

  toggleArtists(){
    this.setState((prevState) => {
       return { showArtists: !prevState.showArtists }});
    console.log(this.state)
  }

  render() {
    let artists = <p style={{ textAlign: 'center', margin: 'auto auto'}}>Loading...</p>
    let artistsState = this.state.showArtists;
    artistsState ? artists = <Insta2 /> : artists = <Insta />
    return (
      <div>
        <Helmet>
          <title>ArtistsContainer</title>
          <meta name="description" content="Description of ArtistsContainer" />
        </Helmet>
        <div style={{ height: '85vh' }}>
          {artists}
        </div>
        <div style={{ display: 'flex', width: '2em', marginLeft: '85%' }}>
          <Icon
            type="camera"
            style={{ fontSize: '22px', marginRight: '33%' }}
          />
          <Switch
            onChange={this.toggleArtists}
          />
          <p style={{ fontSize: '14px', letterSpacing: '1px', marginLeft: '33%' }}>artists</p>
        </div>
      </div>
    );
  }
}

ArtistsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(ArtistsContainer);
