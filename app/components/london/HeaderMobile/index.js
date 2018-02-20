/**
*
* HeaderLondon
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function HeaderMobile() {
  return (
    <div style={{ height: '50px !important', backgroundColor: 'black', position: 'fixed', top: '0', display: 'block', zIndex: '3', width: '100%' }}>
      <h1 style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '4.5vw', letterSpacing: '1px', paddingTop: '2vh', marginBottom: '2vh' }}>Sang Bleu London</h1>
    </div>
  );
}

HeaderMobile.propTypes = {

};

export default HeaderMobile;

// <div className='menu-logo'>
//   <a href="/zurich" style={{ textDecoration: 'none' }}><Image className='menu' cloudName="kurzweg" publicId="logozurich" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
//   <a href="/zurich" style={{ textDecoration: 'none' }}><Image className='menu-blue' cloudName="kurzweg" publicId="logozurich_blue" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
// </div>
