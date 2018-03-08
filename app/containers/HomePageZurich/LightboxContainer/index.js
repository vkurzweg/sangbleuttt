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

const Button = styled.button`
  font-family: BRRR;
  text-transform: uppercase;
  backgroundColor: transparent;
  border: none;
  outline: 0;
  position: fixed;
  &:hover, &:active, &:focus {
    outline: 0
  }
`;


export class LightboxContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const actions = [
      <button type="close" onClick={this.props.handleClose} style={{ position: 'absolute', backgroundColor: 'black', fontSize: '3vw', right: '0', top: '0', width: '40px', height: '100%' }}>
        <h4 className='close-label'>close</h4>
      </button>
    ]
    const backButton = <Button style={{ left: '0', marginLeft: '10vw', marginTop: '13vh' }} onClick={this.props.previousImage}>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>back</h4>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>back</h4>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>back</h4>
                      </Button>
    const nextButton = <Button style={{ right: '0', top: '0', marginRight: '15vw', marginTop: '35vh' }} onClick={this.props.nextImage}>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>next</h4>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>next</h4>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>next</h4>
                      </Button>
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
            <div style={{ position: 'relative' }}>
              {console.log('slideCount: ', this.props.slideCount)}
              {this.props.slideCount !== 0 ? backButton : '' }
              {this.props.photos.map((photo, key) => {
                if (this.props.photos.indexOf(photo) === this.props.slideCount) {
                  return (
                    <div key={photo.id}>
                      <img className="slideshow-image" src={photo.images.standard_resolution.url} alt={photo.caption}/>
                    </div>
                  )
                }
                  return ''
              })}
              {this.props.slideCount !== (this.props.photos.length - 1) ? nextButton : ''}
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

