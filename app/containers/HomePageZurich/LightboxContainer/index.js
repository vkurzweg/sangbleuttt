/**
 *
 * LightboxContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Modal from 'antd/lib/modal';
import Dialog from 'material-ui/Dialog';
import Icon from 'antd/lib/icon';
import styled from 'styled-components';


const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
  height: '50%'
};

const ArtistName = styled.h3`
  font-family: BRRR;
  font-size: 7vh;
  color: white;
  text-align: center;
  padding-top: 5vh;
`;



export class LightboxContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const actions = [
      <button type="close" onClick={this.props.handleClose} style={{ position: 'absolute', backgroundColor: 'black', fontSize: '3vw', right: '0', top: '0', width: '40px', height: '100%' }}>
        <h4 className='close-label'>close</h4>
      </button>
    ]
    let artistName;
    if (this.props.userId == '1529406200') name = 'Labaz';
    return (
        <div>
          <Dialog
            actions={actions}
            modal={true}
            contentStyle={customContentStyle}
            className="zurich-modal"
            open={this.props.isOpen}
            onRequestClose={this.props.handleClose}
          >
            <div>
              {this.props.photos.map((photo, key) => {
                return (
                  <div key={photo.id}>
                    <img className="slideshow-image" src={photo.images.standard_resolution.url} alt={photo.caption}/>
                  </div>
                )
              })}
            </div>
          </Dialog>
        </div>
    );
  }
}

LightboxContainer.propTypes = {
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
)(LightboxContainer);

// <ArtistName>{name}</ArtistName>

