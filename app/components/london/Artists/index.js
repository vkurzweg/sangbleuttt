/**
*
* Artists
*
*/

import React from 'react';
import styled from 'styled-components';
import ReactHover from 'react-hover';
import Prismic from 'prismic-javascript';


class Artists extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    }
  }

  componentDidMount() {
    const apiEndpoint = 'https://sb-london-blog.prismic.io/api';
    Prismic.api(apiEndpoint).then((api) => api.query(Prismic.Predicates.at('document.type', 'artist'),).then((response) => {
      console.log('Documents: ', response.results);
      const artists = response.results;
      return this.setState({ artists: artists });
    }));
  }

  render() {
    const artists = this.state.artists;
    const options = {
      followCursor: false,
    };
    if (artists.length > 0) {
    console.log('artists', artists);
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#FFFFFF', marginBottom: '10vh', maxWidth: '100vw' }}>
        <div className="artists-wrapper0">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '70vh'}}></div>
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
              <div style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '70vh'}}></div>
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
              <div style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '70vh'}}></div>
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
              <div style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '70vh'}}></div>
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
              <div style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '70vh'}}></div>
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
              <div style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '70vh', zIndex: '1' }}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london-right" style={{  }}>
                <img className="bg-london-right" style={{  }} src={artists[5].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix5">{artists[5].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper6">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '70vh', isolation: 'isolate'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london-right" style={{  }}>
                <img className="bg-london-right" style={{  }} src={artists[6].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix5">{artists[6].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper7">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '70vh', isolation: 'isolate'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london-right" style={{  }}>
                <img className="bg-london-right" style={{  }} src={artists[7].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix5">{artists[7].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
        <div className="artists-wrapper8">
          <ReactHover
            options={options}>
            <ReactHover.Trigger type="trigger">
              <div style={{ display: 'inline', position: 'absolute', cursor: 'pointer', width: '9vw', height: '70vh'}}></div>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="image-container-london-right" style={{  }}>
                <img className="bg-london-right" style={{  }} src={artists[8].data.artist.image1.value.main.url} />
                <div style={{ display: 'block', width: '100vw', margin: '0 auto' }}><h3 className="artist-name-mix5">{artists[8].data.artist.name.value[0].text}</h3></div>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
      </div>
    )}
    return (<div></div>)
  }
}

Artists.propTypes = {

};

export default Artists;
