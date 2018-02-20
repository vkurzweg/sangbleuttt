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
    <div style={{ position: 'fixed', top: '0', display: 'block', zIndex: '3', width: '100%' }}>
      <h1 className='london-title' style={{ overflow: 'visible', whiteSpace: 'nowrap', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '2.5vw', letterSpacing: '1px', paddingTop: '2.5%', paddingBottom: '1%', marginBottom: '0', marginLeft: '17vw' }}>Sang Bleu London</h1>
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
