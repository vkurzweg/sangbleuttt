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

const ArtistName = styled.h3`
  font-family: BRRR;
  font-size: 40px;
  color: white;
  text-align: center;
  padding-top: 10vh;
  z-index: 2000;
`;

const ArtistHandle = styled.h4`
  color: white;
  font-family: SuisseCond;
  font-size: 19px;
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

const PostDate = styled.p`
  font-family: SuisseCond;
  color: white;
  font-size: 19px;
  text-align: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 10vh;
  margin-left: 31vw;
`;


export class LightboxContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const actions = [
      <button type="close" onClick={this.props.handleClose} style={{ position: 'absolute', backgroundColor: 'black', fontSize: '3vw', right: '0', top: '0', width: '40px', height: '100%' }}>
        <h4 className='close-label'>close</h4>
      </button>
    ]
    const backButton = <Button style={{ left: '0', marginLeft: '12vw', marginTop: '16vh' }} onClick={this.props.previousImage}>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>back</h4>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>back</h4>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>back</h4>
                      </Button>
    const nextButton = <Button style={{ right: '0', top: '0', marginRight: '15vw', marginTop: '40vh' }} onClick={this.props.nextImage}>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>next</h4>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>next</h4>
                        <h4 style={{ color: 'white', fontSize: '20px' }}>next</h4>
                      </Button>
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
            <ArtistName>{artistName}</ArtistName>
            <ArtistHandle>{artistHandle}</ArtistHandle>
            <div style={{ position: 'relative' }}>
              {console.log('photos', this.props.photos)}
              {this.props.slideCount !== 0 ? backButton : '' }
              {this.props.photos.map((photo, key) => {
                if (this.props.photos.indexOf(photo) === this.props.slideCount) {
                  return (
                    <div key={photo.id} style={{ position: 'relative' }}>
                      <a href={photo.link} target="_blank">
                        <img className="slideshow-image" src={photo.images.standard_resolution.url} alt={photo.caption}/>
                      </a>
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


