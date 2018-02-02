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
    <div className='menuzurich-logo' style={{ fontFamily: 'Helvetica' }}>
      <a href="/london" style={{ textDecoration: 'none' }}><Image className='menuzurich' cloudName="kurzweg" publicId="logolondon" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
      <a href="/london" style={{ textDecoration: 'none' }}><Image className='menuzurich-blue' cloudName="kurzweg" publicId="logolondon_blue" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
    </div>
  );
}

HeaderLondon.propTypes = {

};

export default HeaderLondon;
