/**
*
* ArtistsMobile
*
*/

import React from 'react';
// import styled from 'styled-components';
import Prismic from 'prismic-javascript';
import LightboxContainerLondonMobile from 'containers/HomePageLondon/LightboxContainerLondonMobile';


class ArtistsMobile extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      artistName: '',
      artistUrl: '',
      photos: [],
      slideCount: 0,
      artists: [],
      artistHandle: '',
    }
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount() {
    const apiEndpoint = 'https://sb-london-blog.prismic.io/api';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'artist'),).then((response) => {
      console.log('Documents: ', response.results);
      const artists = response.results;
      return this.setState({ artists: artists });
    }));
  }


  openLightbox(artist) {
    console.log('artist', artist.data)
    let images = [];
    images.push(artist.data.artist.image1.value.main.url);
    if(artist.data.artist.image2.value.main.url){
      let image2 = artist.data.artist.image2.value.main.url;
      images.push(image2)}
    if(artist.data.artist.image3){
      let image3 = artist.data.artist.image3.value.main.url;
      images.push(image3)}
    if(artist.data.artist.image4){
      let image4 = artist.data.artist.image4.value.main.url;
      images.push(image4)}
    if(artist.data.artist.image5){
      let image5 = artist.data.artist.image5.value.main.url;
      images.push(image5)}
    if(artist.data.artist.image6){
      let image6 = artist.data.artist.image6.value.main.url;
      images.push(image6)}
    if(artist.data.artist.image7) {
      let image7 = artist.data.artist.image7.value.main.url;
      images.push(image7)}
    if(artist.data.artist.image8){
      let image8 = artist.data.artist.image8.value.main.url;
      images.push(image8)}
    return this.setState({
      artistName: artist.data.artist.name.value[0].text,
      artistHandle: artist.data.artist.handle.value[0].text,
      artistUrl: artist.data.artist.insta.value.url,
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
    const artists = this.state.artists;
    if (artists.length > 0) {
    return (
      <div style={{ position: 'relative' }}>
        <div className="scrolling-wrapper">
          {artists.map((artist, idx) => {
            return (
              <div className="london-artist-mobile" onClick={this.openLightbox.bind(this, artist)}>
                <div style={{ position: 'relative' }}>
                  <img src={artist.data.artist.image1.value.main.url} style={{ width: '220px', maxHeight: '275px', bottom: '0'}} />
                </div>
                <h2 style={{ fontFamily: 'SuisseIntlSemiBold', textTransform: 'uppercase', fontSize: '19px', paddingTop: '3vh' }}>{artist.data.artist.name.value[0].text}</h2>
            </div>
            )
          })}
        </div>
        <LightboxContainerLondonMobile
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
    )}
    return (<div></div>)
  }
}

ArtistsMobile.propTypes = {

};

export default ArtistsMobile;
