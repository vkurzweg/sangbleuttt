/**
*
* HeaderLondon
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function HeaderLondon() {
  return (
    <div style={{ position: 'fixed', top: '0', display: 'block', backgroundColor: '#FFFFFF', zIndex: '3', width: '100%' }}>
      <h1 style={{ overflow: 'visible', whiteSpace: 'nowrap', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '32px', letterSpacing: '.3', paddingTop: '1%', paddingBottom: '1%', marginBottom: '0', marginLeft: '17.5vw' }}>Sang Bleu London</h1>
    </div>
  );
}

HeaderLondon.propTypes = {

};

export default HeaderLondon;

// <div className='menu-logo'>
//   <a href="/zurich" style={{ textDecoration: 'none' }}><Image className='menu' cloudName="kurzweg" publicId="logozurich" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
//   <a href="/zurich" style={{ textDecoration: 'none' }}><Image className='menu-blue' cloudName="kurzweg" publicId="logozurich_blue" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
// </div>
