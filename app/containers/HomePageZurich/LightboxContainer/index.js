/**
 *
 * LightboxContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Icon from 'antd/lib/icon';
import styled from 'styled-components';

// const customContentStyle = {
//   width: '100vw',
//   height: '100vh'
// };

// const NameContainer = styled.div`
//   min-width: 100vw;
//   min-height: 200px;
// `;

const ArtistName = styled.h3`
  font-family: BRRR;
  font-size: 40px;
  color: white;
  text-align: center;
  padding-top: 5vh;
  height: 100px;
  letter-spacing: -1.99px;
  text-transform: uppercase;
`;

const ArtistHandle = styled.h4`
  color: white;
  font-family: SuisseCond;
  font-size: 19px;
  letter-spacing: 2.36px;
  text-align: center;
`;

// const Button = styled.button`
//   font-family: BRRR;
//   text-transform: uppercase;
//   backgroundColor: transparent;
//   border: none;
//   outline: 0;
//   position: fixed;
//   &:hover, &:active, &:focus {
//     outline: 0
//   }
// `;

const BackButton = styled.button`
  font-family: BRRR;
  text-transform: uppercase;
  backgroundColor: transparent;
  border: none;
  outline: 0;
  left: 0;
  top: 0;
  height: 130vh;
  width: 50%;
  z-index: 20;
  position: fixed;
  &:hover, &:active, &:focus {
    outline: 0;
    cursor: url(http://res.cloudinary.com/kurzweg/image/upload/v1520661716/sangbleu/backbtn_1.png), auto;
  }
`;

const NextButton = styled.button`
  font-family: BRRR;
  text-transform: uppercase;
  backgroundColor: black;
  border: none;
  outline: 0;
  right: 0;
  margin-right: 150px;
  top: 0;
  height: 100vh;
  width: 50%;
  z-index: 20;
  position: fixed;
    &:hover, &:active, &:focus {
      outline: 0;
      cursor: url(http://res.cloudinary.com/kurzweg/image/upload/v1520661714/sangbleu/nextbtn_1.png), auto;
    }
`;


export class LightboxContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const backButton = <BackButton onClick={this.props.previousImage}>
                      </BackButton>
    const nextButton = <NextButton onClick={this.props.nextImage}>
                      </NextButton>
    let display = 'block';
    this.props.isOpen ? display : display = 'none';
    return (
        <div style={{ display, width: '110vw', marginLeft: '-80px', height: '100vh', backgroundColor: '#FF001F', position: 'absolute', top: '0', zIndex: '2000' }}>
          <div type="close" onClick={this.props.handleClose} style={{ position: 'fixed', backgroundColor: 'black', fontSize: '3vw', right: '0', top: '0', width: '40px', height: '100%', zIndex: '2001' }}>
            <h4 className='close-label'>close</h4>
          </div>
          <ArtistName>{this.props.artistName}</ArtistName>
          <ArtistHandle>{this.props.artistHandle}</ArtistHandle>
          <div style={{ position: 'relative' }}>
            {backButton}
            {this.props.photos.map((photo, key) => {
              if (this.props.photos.indexOf(photo) === this.props.slideCount) {
                return (
                  <div style={{ position: 'relative' }}>
                    <div className="slideshow-image-container">
                      <a href={this.props.artistUrl} target="_blank">
                        <img className="slideshow-image" src={photo} alt="artist portfolio" />
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

// <Dialog
//   actions={actions}
//   modal={true}
//   contentStyle={customContentStyle}
//   className="zurich-modal"
//   open={this.props.isOpen}
//   onRequestClose={this.props.handleClose}
// >
