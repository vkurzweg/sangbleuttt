/**
*
* Insta
*
*/

import React from 'react';
// import styled from 'styled-components';
import Instafeed from 'react-instafeed';
// import { Image } from 'cloudinary-react';
import Prismic from 'prismic-javascript';


const artists = [
  {
    name: 'Maxime Plescia-Buchi',
    userId: '1789183639',
  }, {
    name: 'Dani Queipo',
    userId: '17916905',
  }, {
    name: 'Antoine Larrey',
    userId: '7838019'
  }, {
    name: 'Dan Crowe',
    userId: '4357811'
  }, {
    name: 'Ruby Quilter',
    userId: '11348723'
  }, {
    name: 'Javier Rodriguez',
    userId: '14376307'
  }, {
    name: 'Malwina',
    userId: '975175955'
  }, {
    name: 'Tattoos For Your Enemies',
    userId: '1079415228'
  }, {
    name: 'Wolfgang',
    userId: '1461855489'
  }, {
    name: 'Caio Pineiro',
    userId: '188422421'
  }, {
    name: 'Frank Carter',
    userId: '8205346'
  }
];


class Insta extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    if (artists.length > 0) {
    return (
      <div style={{ width: '100%' }}>
        <div className="wrapper">
          <div className="masonry">
            { artists.map((artist, idx, artists) => (
              <div
                className="item-container"
                id={`instafeed-${idx}`}
                key={idx}
              >
                <p className="artist-name" id={`artist-${idx}`}>{artist.data.artist.name.value[0].text}</p>
                <div></div>
                <a className='item' href={artist.data.artist.insta.value.url} target='_blank'>
                  <img src={artist.data.artist.image1.value.main.url} alt="artist portfolio image" />
                </a>
                <a className='item' href={artist.data.artist.insta.value.url} target='_blank'>
                  <img src={artist.data.artist.image2.value.main.url} alt="artist portfolio image" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
    return (<div></div>)
  }
}

Insta.propTypes = {

};

export default Insta;

// <div style={{width: '100%', marginTop: '2%', marginBottom: '10%' }}>
//   <div style={{width: '100%', margin: '2em auto' }}>
//     <div className='masonry'id={instafeedTarget}>
//         <Instafeed
//           limit='28'
//           ref='instafeed'
//           resolution='standard_resolution'
//           sortBy='most-recent'
//           target={instafeedTarget}
//           template="<a href='{{link}}' target='_blank'>
//                       <div style='width: 100%;display: block;margin:0 auto;'>
//                         <img style='display: inline-block;margin: 0 0 1.2em;width: 150px;height:150px;' src='{{image}}' />
//                       </div>
//                     </a>"
//           userId='22173386'
//           clientId='da06fb6699f1497bb0d5d4234a50da75'
//           accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f'
//         />
//       </div>
//     </div>
//   </div>

// <p class='likes'><img src='http://res.cloudinary.com/kurzweg/image/upload/v1517464456/heart.png' alt='black heart' style='width:15px;padding-right:3%;padding-bottom:2%' />{{likes}}</p>

