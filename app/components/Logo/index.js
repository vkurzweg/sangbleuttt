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
    <div>
      <Image style={{ display: 'block', margin: '0 auto', paddingTop: '10%' }} cloudName="kurzweg" publicId="logolondon" alt="sang bleu london" width="250" quality="auto" crop="scale" responsive />
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
