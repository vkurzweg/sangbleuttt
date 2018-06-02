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


const ArtistName = styled.h3`
  font-family: SuisseIntlSemiBold;
  font-size: 23px;
  text-align: left;
  padding-top: 5vh;
  text-transform: uppercase;
  position: absolute;
  margin-left: 2vw;
  z-index: 3001;
`;

const ArtistHandle = styled.a`
  font-family: SuisseRegular;
  font-size: 15px;
  color: black;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  text-transform: uppercase;
  margin-left: 2vw;
  margin-bottom: 2%;
  z-index: 25;
  padding: 1em;
  &:hover {cursor: pointer}
`;

const BackButton = styled.button`
  backgroundColor: transparent;
  border: none;
  outline: 0;
  left: 0;
  top: 0;
  height: 90vh;
  width: 50vw;
  z-index: 20;
  position: fixed;
  margin-bottom: 10vh;
  &:hover, &:active, &:focus {
    outline: 0;
  }
`;

const NextButton = styled.button`
  border: none;
  outline: 0;
  right: 0;
  top: 0;
  height: 100vh;
  width: 50vw;
  z-index: 20;
  position: fixed;
    &:hover, &:active, &:focus {
      outline: 0;
    }
`;

export class LightboxContainerLondon extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('url', this.props.artistUrl)
    const nextPhoto = this.props.slideCount + 1
    const prevPhoto = this.props.slideCount - 1
    const cursorImage = `https://process.filestackapi.com/AhTgLagciQByzXpFGRI0Az/resize=width:128,height:128/${this.props.photos[nextPhoto]}`
    const cursorImagePrev = `https://process.filestackapi.com/AhTgLagciQByzXpFGRI0Az/resize=width:128,height:128/${this.props.photos[prevPhoto]}`
    const backButton = <BackButton onClick={this.props.previousImage} style={{ cursor: `url(${cursorImagePrev}), auto` }}>
                        </BackButton>
        const nextButton = <NextButton onClick={this.props.nextImage} style={{ cursor: `url(${cursorImage}), auto` }}>
                          </NextButton>
        let display = 'block';
        this.props.isOpen ? display : display = 'none';
        return (
            <div style={{ display, width: '100vw', cursor: `url(${cursorImage}), auto`, backgroundColor: '#FFFFFF', height: '100vh', position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', zIndex: '4000', overflowY: 'scroll' }}>
              <div type="close" onClick={this.props.handleClose} style={{ position: 'fixed', padding: '5%', fontSize: '3vw', right: '0', top: '0', width: '40px', height: '100%', zIndex: '2001', cursor: 'pointer', marginTop: '-2%' }}>
                <h4 className='close-label-london-lightbox'>close</h4>
              </div>
              <ArtistName>{this.props.artistName}</ArtistName>
              <ArtistName style={{ marginTop: '3vh' }}>{this.props.slideCount + 1} / {this.props.photos.length}</ArtistName>
              <a href={this.props.artistUrl} target="_blank" style={{ fontFamily: 'SuisseRegular', fontSize: '15px', color: 'black', textDecoration: 'none', position: 'absolute', bottom: '0', textTransform: 'uppercase', marginLeft: '2vw', marginBottom: '2%', zIndex: '25', padding: '1em', cursor: 'pointer' }} >@{this.props.artistHandle}</a>
              <div style={{ position: 'relative', height: '100vh' }}>
                {backButton}
                {this.props.photos.map((photo, idx) => {
                  if (this.props.photos.indexOf(photo) === this.props.slideCount) {
                    return (
                      <div key={idx} style={{ position: 'relative', height: '100vh' }}>
                        <div className="slideshow-image-container-london" style={{  }}>
                          <a href={this.props.artistUrl} target="_blank">
                            <img className="slideshow-image-london" src={photo} alt="artist portfolio" />
                          </a>
                        </div>
                      </div>
                    )
                  }
                    return ''
                })}
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
