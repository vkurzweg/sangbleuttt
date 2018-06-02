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
import ReactSwipe from 'react-swipe';

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
    const nextPhoto = this.props.slideCount + 1
    const prevPhoto = this.props.slideCount - 1
    const cursorImage = `https://process.filestackapi.com/AhTgLagciQByzXpFGRI0Az/resize=width:128,height:128/${this.props.photos[nextPhoto]}`
    const cursorImagePrev = `https://process.filestackapi.com/AhTgLagciQByzXpFGRI0Az/resize=width:128,height:128/${this.props.photos[prevPhoto]}`
    const backButton = <BackButton onClick={this.props.previousImage} style={{  }}>
                        </BackButton>
        const nextButton = <NextButton onClick={this.props.nextImage} style={{  }}>
                          </NextButton>
        let display = 'block';
        this.props.isOpen ? display : display = 'none';
        return (
            <div style={{ display, backgroundColor: '#FFFFFF', width: '100vw', height: '100vh', position: 'fixed', top: '0', zIndex: '2000', overflow: 'hidden' }}>
              <div style={{ position: 'relative', overflow: 'hidden !important' }}>
                <ReactSwipe className="carousel" key={this.props.photos.length}>
                {this.props.photos.map((photo, idx) => {
                    return (
                      <div key={idx} style={{ position: 'relative', overflow: 'hidden' }}>
                        <div className="slideshow-image-container-london-mobile">
                          <img className="slideshow-image-london-mobile" src={photo} alt="artist portfolio" />
                        </div>
                      </div>
                    )
                })}
                </ReactSwipe>
                <div style={{ marginTop: '15vh' }}>
                  <ArtistHandle href={this.props.artistUrl} target="_blank">@{this.props.artistHandle}</ArtistHandle>
                  <ArtistName style={{ }}>{this.props.artistName}</ArtistName>
                  <ArtistName style={{ marginTop: '2vh' }}>{this.props.slideCount + 1} / {this.props.photos.length}</ArtistName>
                </div>
                <div type="close" onClick={this.props.handleClose} style={{ zIndex: '2000', fontSize: '12px', width: '100%', height: '15vh'}}>
                  <h4 onClick={this.props.handleClose} className='close-label-london-lightbox' style={{ textAlign: 'center', padding: '10px', marginBottom: '5vh' }}>close</h4>
                </div>
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
