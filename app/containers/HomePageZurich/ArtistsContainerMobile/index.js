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
import NamesMobile from 'components/zurich/NamesMobile';
import LightboxContainerMobile from '../LightboxContainerMobile';
import Prismic from 'prismic-javascript';


export class Center extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      artistName: '',
      artistHandle: '',
      artistUrl: '',
      photos: [],
      slideCount: 0,
      artists: [],
    }
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount() {
    const apiEndpoint = 'https://sb-zurich-blog.prismic.io/api/v2';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'artist'),).then((response) => {
      console.log('Documents artists: ', response.results);
      const artistsZurich = response.results;
      return this.setState({ artists: artistsZurich });
    }));
  }


  openLightbox(artist) {
    let images = [];
    images.push(artist.data.image.url);
    if(artist.data.image2.url){
      let image2 = artist.data.image2.url;
      images.push(image2)}
    if(artist.data.image3.url){
      let image3 = artist.data.image3.url;
      images.push(image3)}
    if(artist.data.image4.url){
      let image4 = artist.data.image4.url;
      images.push(image4)}
    if(artist.data.image5.url){
      let image5 = artist.data.image5.url;
      images.push(image5)}
    if(artist.data.image6.url){
      let image6 = artist.data.image6.url;
      images.push(image6)}
    if(artist.data.image7.url) {
      let image7 = artist.data.image7.url;
      images.push(image7)}
    if(artist.data.image8.url){
      let image8 = artist.data.image8.url;
      images.push(image8)}
    return this.setState({
      artistName: artist.data.name[0].text,
      artistHandle: artist.data.handle[0].text,
      artistUrl: artist.data.link.url,
      photos: images,
      isOpen: true,
    })
  }

  nextImage() {
    let slideCountState = this.state.slideCount;
    console.log(slideCountState)
    let photoLength = this.state.photos.length;
    if(slideCountState === photoLength - 1){ return this.setState({slideCount: 0})
    } else {
    return this.setState({ slideCount: this.state.slideCount + 1 })}
  }

  previousImage() {
    console.log(this.state.slideCount)
    let slideCountState = this.state.slideCount;
    let photoLength = this.state.photos.length;
    if(slideCountState === 0){ return this.setState({slideCount: photoLength})
    } else {
    return this.setState({ slideCount: this.state.slideCount - 1 })}
  }

  handleClose() {
    this.setState({ isOpen: false, photos: [] })
  }


  render() {
    return (
      <div style={{ height: '100%', overflowY: 'scroll' }}>
        <Helmet>
          <title>Sang Bleu Zurich</title>
          <meta name="description" content="Book an appointment at the Sang Bleu tattoo studio in Zurich, Switzerland." />
        </Helmet>
        <NamesMobile
          openLightbox={this.openLightbox}
          artists={this.state.artists}
        />
        <LightboxContainerMobile
           isOpen={this.state.isOpen}
           artistName={this.state.artistName}
           artistHandle={this.state.artistHandle}
           artistUrl={this.state.artistUrl}
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
