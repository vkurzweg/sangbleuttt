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
import Moment from 'react-moment';

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
  font-size: 40px;
  color: white;
  text-align: center;
  padding-top: 5vh;
  height: 100px;
  letter-spacing: -1.99px;
`;

const ArtistHandle = styled.h4`
  color: white;
  font-family: SuisseCond;
  font-size: 19px;
  letter-spacing: 2.36;
  text-align: center;
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

const BackButton = styled.button`
  font-family: BRRR;
  text-transform: uppercase;
  backgroundColor: transparent;
  border: none;
  outline: 0;
  left: 0;
  top: 0;
  height: 130vh;
  width: 400px;
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
  width: 400px;
  z-index: 20;
  position: fixed;
    &:hover, &:active, &:focus {
      outline: 0;
      cursor: url(http://res.cloudinary.com/kurzweg/image/upload/v1520661714/sangbleu/nextbtn_1.png), auto;
    }
`;

const PostDate = styled.p`
  font-family: SuisseCond;
  color: white;
  font-size: 19px;
  text-align: center;
  letter-spacing: 2.36px;
  position: absolute;
  top: 45vh;
  left: 35%;
`;


export class LightboxContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const actions = [
      <button type="close" onClick={this.props.handleClose} style={{ position: 'absolute', backgroundColor: 'black', fontSize: '3vw', right: '0', top: '0', width: '40px', height: '100%' }}>
        <h4 className='close-label'>close</h4>
      </button>
    ]
    const backButton = <BackButton onClick={this.props.previousImage}>
                      </BackButton>
    const nextButton = <NextButton onClick={this.props.nextImage}>
                      </NextButton>
    let artistName;
    let artistHandle;
    let userId = this.props.userId;
    switch(userId) {
      case '1529406200':
        artistName = 'Labaz 1';
        artistHandle = '@zilba.1';
        break;
      case '1210201419':
        artistName = 'Diego Thonney';
        artistHandle = '@diagal_faust';
        break;
      case '55968406':
        artistName = 'Giorgio Deduesanti';
        artistHandle = '@giorgiodeduesanti';
        break;
      case '2268101836':
        artistName = 'Golda Kraks';
        artistHandle = '@golda.kracks';
        break;
      case '51624775':
        artistName = 'Jordan Angius';
        artistHandle = '@jordalive';
        break;
      case '1599024779':
        artistName = 'Marco Romegialli';
        artistHandle = '@marco_romegialli';
        break;
      case '17337198':
        artistName = 'Matt Powers';
        artistHandle = '@black_arm_tattoo';
        break;
      case '1789183639':
        artistName = 'Maxime Plescia-Buchi';
        artistHandle = '@mxmttt';
        break;
      case '378914167':
        artistName = 'Paolo Bosson';
        artistHandle = '@paolo_bosson';
        break;
      case '2179164383':
        artistName = 'Stephane Devidal';
        artistHandle = '@stephane_devidal_tattoo';
        break;
      case '':
        artistName = '';
        artistHandle = '';
    }
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
            <div style={{ width: 'calc(100% - 40px)', paddingTop: '15vh' }}>
              <ArtistName>{artistName}</ArtistName>
              <ArtistHandle>{artistHandle}</ArtistHandle>
              <div style={{ position: 'relative' }}>
                {this.props.slideCount !== 0 ? backButton : '' }
                {this.props.photos.map((photo, key) => {
                  if (this.props.photos.indexOf(photo) === this.props.slideCount) {
                    return (
                      <div key={photo.id} style={{ position: 'relative' }}>
                        <div className="slideshow-image-container">
                          <a href={photo.link} target="_blank">
                            <img className="slideshow-image" src={photo.images.standard_resolution.url} alt={photo.caption}/>
                          </a>
                        </div>
                        <PostDate>
                          <Moment unix>{photo.created_time}</Moment>
                        </PostDate>
                      </div>
                    )
                  }
                    return ''
                })}
                {this.props.slideCount !== (this.props.photos.length - 1) ? nextButton : ''}
              </div>
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


