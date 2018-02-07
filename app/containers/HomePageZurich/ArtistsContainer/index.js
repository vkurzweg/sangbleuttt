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
import Insta from 'components/zurich/Insta';
import Insta2 from 'components/zurich/Insta2';
import InstaHover from 'components/zurich/InstaHover';
import Switch from 'antd/lib/switch';
import Icon from 'antd/lib/icon';

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
    artistsState ? artists = <Insta2 /> : artists = <InstaHover />
    return (
      <div className="container-fluid">
        <div className="row">
          <Helmet>
            <title>ArtistsContainer</title>
            <meta name="description" content="Description of ArtistsContainer" />
          </Helmet>
          <div>
            {artists}
          </div>
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
