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
    <div style={{ width: '100%', margin: '0 auto', marginTop: '200%' }}>
      <Image style={{  }} cloudName="kurzweg" publicId="logolondon" alt="sang bleu london" width="150" quality="auto" crop="scale" responsive />
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
