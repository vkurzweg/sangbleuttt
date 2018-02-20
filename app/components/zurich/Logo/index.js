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
    <div style={{ zIndex: '20', width: '100%', margin: '0 auto' }}>
      <div style={{ marginLeft: '5vw'}}>
        <h1 className='zurich-title'>Sang Bleu Zurich</h1>
        <h3 className='zurich-subtitle'>Dienerstrasse 26, 8004 Zürich, Switzerland</h3>
        <h2 className='zurich-subtitle'>zurich@sangbleu.tattoo &nbsp; &nbsp;+41 43 545 88 38</h2>
      </div>
      <div style={{ marginLeft: '5vw', paddingTop: '60vh' }}>
        <p className='zurich-subtitle'>Open 11am - 7pm Tuesday to Saturday</p>
      </div>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
// <div style={{ height: '250px', left: '50%'}}>
//   <Image style={{ width: 'auto', height: '100%', display: 'block', margin: '0 auto', marginTop: '15%' }} cloudName="kurzweg" publicId="logozurich" alt="sang bleu london" quality="auto" crop="scale" responsive />
// </div>

