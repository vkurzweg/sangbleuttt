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
    <div style={{ width: '100%', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'right', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '38px', letterSpacing: '.3', paddingTop: '3%' }}>Sang Bleu Zurich</h1>
      <h2 style={{ textAlign: 'right', fontSize: '16px', letterSpacing: '2px' }}>zurich@sangbleu.tattoo</h2>
      <div style={{ height: '250px', left: '50%'}}>
        <Image style={{ width: 'auto', height: '100%', display: 'block', margin: '0 auto', marginTop: '15%' }} cloudName="kurzweg" publicId="logozurich" alt="sang bleu london" quality="auto" crop="scale" responsive />
      </div>
      <div style={{ marginLeft: '7vh', fontSize: '15px', letterSpacing: '.4', color: 'black', marginTop: '13%' }}>
        <h3 style={{ fontSize: '15px', letterSpacing: '.4', fontWeight: 'normal' }}>Sang Bleu Zürich,<br /> Dienerstrasse 26, <br />8004 Zürich, <br />Switzerland</h3>
        <p style={{ marginTop: '4vh' }}>+41 43 545 88 38</p>
        <p style={{ marginTop: '4vh' }}>Open 11am - 7pm<br />Tuesday to Saturday</p>
      </div>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
