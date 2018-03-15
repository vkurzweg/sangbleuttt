/**
 *
 * Center
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import InfoCopy from 'components/zurich/InfoCopy';
import Names from 'components/zurich/Names';
import LightboxContainer from '../LightboxContainer';
import request from 'superagent';


export class Center extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      userId: '',
      photos: [],
      slideCount: 0,
    }
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }


  openLightbox(userId) {
    console.log('clicked')
    let url = 'https://api.instagram.com/v1/users/' + userId + '/media/recent/?access_token=258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f&count=9'
     request
       .get(url)
       .then((res) => {
         return this.setState({
           photos: res.body.data,
           userId: userId,
           isOpen: true,
         })
       })
       .catch(function(err) {
         console.log('err: ', err.status)
    })
  }

  nextImage() {
    this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousImage() {
    this.setState({ slideCount: this.state.slideCount - 1 })
  }

  handleClose() {
    this.setState({ isOpen: false, photos: [] })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Sang Bleu Zurich</title>
          <meta name="description" content="Book an appointment at the Sang Bleu tattoo studio in Zurich, Switzerland." />
        </Helmet>
        <InfoCopy
          blogOpen={this.props.blogOpen}
          aboutOpen={this.props.aboutOpen}
          initial={this.props.initial}
        />
        <Names
          blogOpen={this.props.blogOpen}
          aboutOpen={this.props.aboutOpen}
          initial={this.props.initial}
          openLightbox={this.openLightbox}
        />
        <LightboxContainer
          isOpen={this.state.isOpen}
          userId={this.state.userId}
          photos={this.state.photos}
          slideCount={this.state.slideCount}
          handleClose={this.handleClose}
          previousImage={this.previousImage}
          nextImage={this.nextImage}
        />
      </div>
    );
  }
}

Center.propTypes = {
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
)(Center);
