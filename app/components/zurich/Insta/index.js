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
    name: 'Giorgio',
    userId: '55968406',
  }, {
    name: 'Jordan Angius',
    userId: '51624775'
  }, {
    name: 'Paolo Bosson',
    userId: '378914167'
  }, {
    name: 'Stephane Devidal',
    userId: '2179164383'
  }, {
    name: 'Labaz 1',
    userId: '1529406200'
  }, {
    name: 'Matt Powers',
    userId: '17337198'
  }, {
    name: 'Diego Thonney',
    userId: '1210201419'
  }, {
    name: 'Golda Kracks',
    userId: '2268101836'
  }, {
    name: 'Marco Romegialli',
    userId: '1599024779'
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
  position: absolute;
  margin: 0 auto;
  opacity: 0;
  background-color: #FAFAFA;
  &:hover {
    opacity: .8;
    cursor: pointer;
  }
`;


class Insta extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div className='insta-transition'>
        <div style={{maxWidth: '100%', margin: '1em auto' }}>
          <div className='masonry'>
          { artists.map((artist, idx, artists) => {
              return (
                  <div
                    className='item-container'
                    id={'instafeed-' + idx}
                    key={idx}
                    >
                      <p className='artist-name' id={'artist-' + idx}>{artist.name}</p>
                      <Instafeed
                        limit='4'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-recent'
                        target={'instafeed-' + idx}
                        key={idx+1}
                        template="<a href='{{link}}' target='_blank'>
                                    <div>
                                      <img class='item img' src='{{image}}' />
                                    </div>
                                  </a>"
                        userId={artist.userId}
                        clientId='da06fb6699f1497bb0d5d4234a50da75'
                        accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
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

// <p class='likes'><img src='http://res.cloudinary.com/kurzweg/image/upload/v1517464456/heart.png' alt='black heart' style='width:15px;padding-right:3%;padding-bottom:2%' />{{likes}}</p>

