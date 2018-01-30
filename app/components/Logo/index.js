/**
*
* Logo
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function Logo() {
  return (
    <div style={{ width: '100%', margin: '0 auto', marginTop: '100%' }}>
      <Image style={{ width: '150px', display: 'block', margin: '0 auto' }} cloudName="kurzweg" publicId="logolondon" alt="sang bleu london" quality="auto" crop="scale" responsive />
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
