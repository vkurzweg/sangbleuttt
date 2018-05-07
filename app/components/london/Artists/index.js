/**
*
* Artists
*
*/

import React from 'react';
import styled from 'styled-components';
import ReactHover from 'react-hover';
import Prismic from 'prismic-javascript';
import LightboxContainerLondon from 'containers/HomePageLondon/LightboxContainerLondon';


class Artists extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      artistName: '',
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
    const options = {
      followCursor: false,
    };
    if (artists.length > 0) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#FFFFFF', marginBottom: '15vh', maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="artists-wrapper0">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[0])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london">
                <img className="bg-london" src={artists[0].data.artist.image1.value.main.url} />
                <h3 className="artist-name-mix">{artists[0].data.artist.name.value[0].text}</h3>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper1">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[1])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london">
                <img className="bg-london" src={artists[1].data.artist.image1.value.main.url} />
                <h3 className="artist-name-mix1">{artists[1].data.artist.name.value[0].text}</h3>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper2">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[2])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london" style={{ paddingLeft: '20%' }}>
                <img className="bg-london" style={{ marginLeft: '-20%'}} src={artists[2].data.artist.image1.value.main.url} />
                <h3 className="artist-name-mix2">{artists[2].data.artist.name.value[0].text}</h3>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper3">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[3])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london" style={{ paddingLeft: '20vw' }}>
                <img className="bg-london" style={{ marginLeft: '-15vw'}} src={artists[3].data.artist.image1.value.main.url} />
                <h3 className="artist-name-mix3">{artists[3].data.artist.name.value[0].text}</h3>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper4">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[4])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london" style={{ paddingLeft: '20vw' }}>
                <img className="bg-london" style={{ marginLeft: '-10vw' }} src={artists[4].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix4">{artists[4].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper5">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[5])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london">
                <img className="bg-london-right" src={artists[5].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix5">{artists[5].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper6">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[6])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh', isolation: 'isolate'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london">
                <img className="bg-london-right" src={artists[6].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix5">{artists[6].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper7">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[7])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh', isolation: 'isolate'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london">
                <img className="bg-london-right" src={artists[7].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix10">{artists[7].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper8">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[8])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london">
                <img className="bg-london-right" src={artists[8].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix10">{artists[8].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper9">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[9])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london">
                <img className="bg-london-right" src={artists[9].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix10">{artists[9].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper10">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div onClick={this.openLightbox.bind(this, artists[10])} style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '60vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london">
                <img className="bg-london-right" src={artists[10].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix10">{artists[10].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <LightboxContainerLondon
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
    )}
    return (<div></div>)
  }
}

Artists.propTypes = {

};

export default Artists;
