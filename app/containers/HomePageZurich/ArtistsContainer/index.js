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
    console.log('clicked', artist)
    let image2; let image3; let image4; let image5; let image6; let image7; let image8;
    if(artist.data.image2.url) image2 = artist.data.image2.url;
    if(artist.data.image3.url) image3 = artist.data.image3.url;
    if(artist.data.image4.url) image4 = artist.data.image4.url;
    if(artist.data.image5.url) image5 = artist.data.image5.url;
    if(artist.data.image6.url) image6 = artist.data.image6.url;
    if(artist.data.image7.url) image7 = artist.data.image7.url;
    if(artist.data.image8.url) image8 = artist.data.image8.url;
    const images = [image2, image3, image4, image5, image6, image7, image8];
    return this.setState({
      artistName: artist.data.name[0].text,
      artistHandle: artist.data.handle[0].text,
      artistUrl: artist.data.link.url,
      photos: images,
      isOpen: true,
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
          artists={this.state.artists}
        />
        <LightboxContainer
          isOpen={this.state.isOpen}
          artistName={this.state.artistName}
          artistHandle={this.state.artistHandle}
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
