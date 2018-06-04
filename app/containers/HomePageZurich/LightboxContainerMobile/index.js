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

const NameContainer = styled.div`
  min-width: 100vw;
  min-height: 200px;
`;

const ArtistName = styled.h3`
  font-family: BRRR;
  font-size: 20px;
  color: white;
  text-align: center;
  padding-top: 5vh;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

const ArtistHandle = styled.h4`
  color: white;
  font-family: SuisseCond;
  font-size: 10px;
  letter-spacing: 2.36px;
  text-align: center;
`;

const NextButton = styled.button`
  font-family: BRRR;
  font-size: 20px;
  letter-spacing: 2.48px;
  text-transform: uppercase;
  backgroundColor: transparent;
  border: none;
  outline: 0;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 15%;
  margin-top: 90%;
  &:hover, &:active, &:focus {
    outline: 0
  }
`;

const BackButton = styled.button`
  font-family: BRRR;
  font-size: 20px;
  letter-spacing: 2.48px;
  text-transform: uppercase;
  backgroundColor: transparent;
  border: none;
  outline: 0;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 15%;
  margin-top: 90%;
  z-index: 2001;
  &:hover, &:active, &:focus {
    outline: 0
  }
`;

const PostDate = styled.p`
  font-family: SuisseCond;
  color: white;
  font-size: 12px;
  text-align: center;
  letter-spacing: 2.36px;
  position: absolute;
  top: 45vh;
  left: 15%;
`;


export class LightboxContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const backButton = (<BackButton onClick={this.props.previousImage}>back
    </BackButton>);
    const nextButton = (<NextButton onClick={this.props.nextImage}>next
    </NextButton>);
    let display = 'block';
    this.props.isOpen ? display : display = 'none';
    return (
        <div style={{ display, width: '100vw', height: '100vh', backgroundColor: '#FF001F', position: 'absolute', top: '0', zIndex: '2000' }}>
          <div
            type="close"
            onClick={this.props.handleClose}
            style={{
              position: 'fixed', backgroundColor: 'black', fontSize: '19px', letterSpacing: '2.36', right: '0', top: '0', width: '30px', height: '100%', zIndex: '2001'
            }}
          >
            <h4 className="close-label">close</h4>
          </div>
          <div style={{ marginRight: '30px' }}>
            <ArtistName>{this.props.artistName}</ArtistName>
            <a href={this.props.artistUrl} target="_blank"><ArtistHandle>{this.props.artistHandle}</ArtistHandle></a>
          </div>
          <div style={{ position: 'relative' }}>
            {backButton}
            {this.props.photos.map((photo, key) => {
              if (this.props.photos.indexOf(photo) === this.props.slideCount) {
                return (
                  <div style={{ position: 'relative', minHeight: '55vh' }}>
                    <div style={{ height: '55vh' }}>
                      <div className="slideshow-image-container-mobile">
                        <a href={this.props.artistUrl} target="_blank">
                          <img className="slideshow-image-mobile" src={photo} alt="artist portfolio" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
              return '';
            })}
            {nextButton}
          </div>
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

export default compose(withConnect, )(LightboxContainer);

// <Dialog
//   actions={actions}
//   modal
//   contentStyle={customContentStyle}
//   className="zurich-modal-mobile"
//   open={this.props.isOpen}
//   onRequestClose={this.props.handleClose}
// >

