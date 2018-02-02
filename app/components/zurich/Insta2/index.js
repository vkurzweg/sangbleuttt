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
      name: 'Giorgio',
      userId: '55968406',
      link: 'https://www.instagram.com/giorgiodeduesanti/'
    }, {
      name: 'Jordan Angius',
      userId: '51624775',
      link: 'https://www.instagram.com/jordalive/?hl=en'
    } ]

const artists2 = [
    {
      name: 'Paolo Bosson',
      userId: '378914167',
      link: 'https://www.instagram.com/paolo_bosson/?hl=en'
    }, {
      name: 'Stephane Devidal',
      userId: '2179164383',
      link: 'https://www.instagram.com/stephane_devidal_tattoo/?hl=en'
    }, {
      name: 'Labaz 1',
      userId: '1529406200',
      link: 'https://www.instagram.com/zilba.1/'
    } ]

const artists3 = [
 {
     name: 'Matt Powers',
     userId: '17337198',
     link: 'https://www.instagram.com/black_arm_tattoo/'
   }, {
     name: 'Diego Thonney',
     userId: '1210201419',
     link: 'https://www.instagram.com/diagal_faust/'
   }, {
     name: 'Golda Kracks',
     userId: '2268101836',
     link: 'https://www.instagram.com/golda.kracks/'
   }, {
     name: 'Marco Romegialli',
     userId: '1599024779',
     link: 'https://www.instagram.com/marco_romegialli/'
   }]


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
