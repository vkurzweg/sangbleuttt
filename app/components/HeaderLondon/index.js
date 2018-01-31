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
    <div className='zurich-logo' style={{ fontFamily: 'Helvetica' }}>
      <Image className='zurich' cloudName="kurzweg" publicId="logozurich" alt="sang bleu london" quality="auto" crop="scale" responsive />
      <Image className='zurich-blue' cloudName="kurzweg" publicId="logozurich_blue" alt="sang bleu london" quality="auto" crop="scale" responsive />
    </div>
  );
}

HeaderLondon.propTypes = {

};

export default HeaderLondon;
