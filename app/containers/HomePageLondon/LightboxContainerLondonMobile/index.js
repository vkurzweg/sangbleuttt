/**
 *
 * LightboxContainerLondon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import styled from 'styled-components';
import SwipeReact from 'swipe-react'

const ArtistName = styled.h3`
  font-family: SuisseIntlSemiBold;
  font-size: 23px;
  text-align: left;
  text-transform: uppercase;
  margin-left: 2vw;
`;

const ArtistHandle = styled.a`
  font-family: SuisseRegular;
  font-size: 15px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 2vw;
  z-index: 25;
  margin-top: 24vh;
  &:hover {cursor: pointer}
`;

const BackButton = styled.button`
  backgroundColor: transparent;
  border: none;
  outline: 0;
  left: 0;
  top: 0;
  height: 95vh;
  width: 50vw;
  z-index: 20;
  position: fixed;
  &:hover, &:active, &:focus {
    outline: 0;
  }
`;

const NextButton = styled.button`
  border: none;
  outline: 0;
  right: 0;
  top: 0;
  height: 95vh;
  width: 50vw;
  z-index: 20;
  position: fixed;
    &:hover, &:active, &:focus {
      outline: 0;
    }
`;

export class LightboxContainerLondon extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    SwipeReact.config({
          left: () => {
            this.props.previousImage;
          },
          right: () => {
            this.props.nextImage;
          }
        });
    const nextPhoto = this.props.slideCount + 1
    const prevPhoto = this.props.slideCount - 1
    const cursorImage = `https://process.filestackapi.com/AhTgLagciQByzXpFGRI0Az/resize=width:128,height:128/${this.props.photos[nextPhoto]}`
    const cursorImagePrev = `https://process.filestackapi.com/AhTgLagciQByzXpFGRI0Az/resize=width:128,height:128/${this.props.photos[prevPhoto]}`
    const backButton = <BackButton {...SwipeReact.events} onClick={this.props.previousImage} style={{ cursor: `url(${cursorImagePrev}), auto` }}>
                        </BackButton>
        const nextButton = <NextButton {...SwipeReact.events} onClick={this.props.nextImage} style={{ cursor: `url(${cursorImage}), auto` }}>
                          </NextButton>
        let display = 'block';
        this.props.isOpen ? display : display = 'none';
        return (
            <div style={{ display, width: '100vw', cursor: `url(${cursorImage}), auto`, backgroundColor: '#FFFFFF', height: '100vh', position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', zIndex: '2000', overflowY: 'hidden' }}>
              <div style={{ position: 'relative', height: '100vh' }}>
                {this.props.slideCount !== 0 ? backButton : '' }
                {this.props.photos.map((photo, idx) => {
                  if (this.props.photos.indexOf(photo) === this.props.slideCount) {
                    return (
                      <div key={idx} style={{ position: 'relative' }}>
                        <div className="slideshow-image-container-london-mobile">
                          <img className="slideshow-image-london-mobile" src={photo} alt="artist portfolio" />
                        </div>
                      </div>
                    )
                  }
                    return ''
                })}
                <div style={{ marginTop: '20vh' }}>
                  <ArtistHandle src={this.props.artistUrl} target="_blank">@{this.props.artistHandle}</ArtistHandle>
                  <ArtistName style={{ }}>{this.props.artistName}</ArtistName>
                  <ArtistName style={{ marginTop: '2vh' }}>{this.props.slideCount + 1} / {this.props.photos.length}</ArtistName>
                </div>
                <div type="close" onClick={this.props.handleClose} style={{ zIndex: '100', fontSize: '12px', width: '100%', height: '5vh'}}>
                  <h4 onClick={this.props.handleClose} className='close-label-london-lightbox' style={{ textAlign: 'center', padding: '10px' }}>close</h4>
                </div>
                {nextButton}
              </div>
            </div>
        );
      }
}

LightboxContainerLondon.propTypes = {
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
)(LightboxContainerLondon);
