/**
*
* Insta
*
*/

import React from 'react';
import styled from 'styled-components';
import Instafeed from 'react-instafeed';



const artists1 = [
  {
    name: 'Maxime Plescia-Buchi',
    userId: '1789183639',
    link: 'https://www.instagram.com/mxmttt/'
  }, {
    name: 'Dani Queipo',
    userId: '17916905',
    link: 'https://www.instagram.com/daniqueipo/'
  }, {
    name: 'Antoine Larrey',
    userId: '7838019',
    link: 'https://www.instagram.com/antoine_larrey/'
  }, {
    name: 'Dan Crowe',
    userId: '4357811',
    link: 'https://www.instagram.com/dancrowe_tattoo/'
  } ]

const artists2 = [
  {
    name: 'Ruby Quilter',
    userId: '11348723',
    link: 'https://www.instagram.com/rubymayqtattoo/'
  }, {
    name: 'Eszter David',
    userId: '273712202',
    link: 'https://www.instagram.com/eszterdavidtattoo/'
  }, {
    name: 'Tattoosforyourenemies',
    userId: '1079415228',
    link: 'https://www.instagram.com/tattoosforyourenemies/?hl=en'
  }, {
    name: 'Javier Rodriguez',
    userId: '14376307',
    link: 'https://www.instagram.com/javier_rodrigueztattoo/'
  } ]

const artists3 = [
 {
    name: 'Malwina',
    userId: '975175955',
    link: 'https://www.instagram.com/malwina8/'
  }, {
    name: 'Wolfgang',
    userId: '1461855489',
    link: 'https://www.instagram.com/wolfgangtattoo/'
  }, {
    name: 'Frederico Rabelo',
    userId: '361861981',
    link: 'https://www.instagram.com/fredericorabelo/'
  }, {
    name: 'Caio Pineiro',
    userId: '188422421',
    link: 'https://www.instagram.com/caiopineiro/?hl=en'
  } ]

const artists4 = [
 {
    name: 'Frank Carter',
    userId: '8205346',
    link: 'https://www.instagram.com/frankcarter23/?hl=en'
  }, {
    name: 'Sara Carter',
    link: ''
  }
]

// const StyledInstafeed = styled(Instafeed)`
//   width: 100%;
//   &:hover {
//     opacity: 0;
//     cursor: pointer;
//   }
// `;

const ArtistName = styled.div`
  &:hover {
    color: #3D8EE2;
    cursor: pointer;
  }
`;


class Insta extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate(){
    return false;
  }

  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div className='insta-transition'>
        <div style={{width: '100%', margin: '0 auto', paddingTop: '20vh' }}>
          <div className='masonry-names'>
          { artists1.map((artist, idx, artists) => {
              return (
                  <div
                    className='item-container-artist'
                    key={idx}
                    >
                    <a className='item' href={artist.link} target='blank'>
                      <p className='item'>{artist.name}</p>
                    </a>
                  </div>
                )
          })}
                </div>

          <div className='masonry-names' style={{ textAlign: 'center !important' }}>
          { artists2.map((artist, idx, artists) => {
              return (
                  <div
                    className='item-container-artist'
                    key={idx}
                    >
                    <a className='item' href={artist.link} target='blank'>
                      <p className='item'>{artist.name}</p>
                    </a>
                  </div>
                )
          })}
                </div>

          <div className='masonry-names'>
          { artists3.map((artist, idx, artists) => {
              return (
                  <div
                    className='item-container-artist'
                    key={idx}
                    >
                    <a className='item' href={artist.link} target='blank'>
                      <p className='item'>{artist.name}</p>
                    </a>
                  </div>
                )
          })}
                </div>

          <div className='masonry-names'>
          { artists4.map((artist, idx, artists) => {
              return (
                  <div
                    className='item-container-artist'
                    key={idx}
                    >
                    <a className='item' href={artist.link} target='blank'>
                      <p className='item'>{artist.name}</p>
                    </a>
                  </div>
                )
          })}
                </div>
          </div>
        </div>
    );
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
