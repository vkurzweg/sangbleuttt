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
      <Image className='menu' cloudName="kurzweg" publicId="boundby" alt="sang bleu" quality="auto" crop="scale" responsive />
      <Image className='menu-blue' cloudName="kurzweg" publicId="boundby_blue" alt="sang bleu" quality="auto" crop="scale" responsive />
    </div>
  );
}

HeaderLondon.propTypes = {

};

export default HeaderLondon;
