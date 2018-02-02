/**
*
* HeaderLondon
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function HeaderLondon() {
  return (
    <div className='menu-logo' style={{ fontFamily: 'Helvetica' }}>
      <a href="/zurich" style={{ textDecoration: 'none' }}><Image className='menu' cloudName="kurzweg" publicId="logozurich" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
      <a href="/zurich" style={{ textDecoration: 'none' }}><Image className='menu-blue' cloudName="kurzweg" publicId="logozurich_blue" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
    </div>
  );
}

HeaderLondon.propTypes = {

};

export default HeaderLondon;
