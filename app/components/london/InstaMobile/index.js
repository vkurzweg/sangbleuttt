/**
*
* Insta
*
*/

import React from 'react';
import styled from 'styled-components';
import Instafeed from 'react-instafeed';


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
    name: 'Eszter David',
    userId: '273712202'
  }, {
    name: 'Javier Rodriguez',
    userId: '14376307'
  }, {
    name: 'Malwina',
    userId: '975175955'
  }, {
    name: 'Tattoosforyourenemies',
    userId: '1079415228'
  }, {
    name: 'Wolfgang',
    userId: '1461855489'
  }, {
    name: 'Frederico Rabelo',
    userId: '361861981'
  }, {
    name: 'Caio Pineiro',
    userId: '188422421'
  }, {
    name: 'Frank Carter',
    userId: '8205346'
  }
]


class InstaMobile extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const instafeedTarget = 'instafeed';
    return (
        <div className='wrapper-mobile'>
          <hr style={{ backgroundColor: '#3D8EE2' }} />
          <div className='masonry-mobile'>
          { artists.map((artist, idx, artists) => {
              return (
                  <div className="artist-container">
                  <div
                    className='item-container-mobile'
                    id={'instafeed-' + idx}
                    key={idx}
                    >
                      <Instafeed
                        limit='1'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-recent'
                        target={'instafeed-' + idx}
                        key={idx+1}
                        template="
                                    <a class='item-mobile' href='{{link}}' target='_blank'>
                                      <img class='item-image-mobile' src='{{image}}' />
                                    </a>
                                  "
                        userId={artist.userId}
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
                  </div>
                  <p className='artist-name-mobile' id={'artist-' + idx}>{artist.name}</p>
                  <hr style={{ backgroundColor: '#3D8EE2' }} />
                </div>
                )
          })}
                </div>
          </div>
    );
  }
}

InstaMobile.propTypes = {

};

export default InstaMobile;

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

