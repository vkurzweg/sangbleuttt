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
    <div className="container-fluid" style={{ height: '40vh', zIndex: '20', width: 'calc(100% - 80px)', margin: '0 auto', paddingLeft: '0', paddingRight: '0', marginRight: '0', right: '0', marginLeft: '0' }}>
      <div className="row" style={{ marginLeft: '1vw', marginRight: 'calc(1vw - 80px)' }} >
        <h1 className='zurich-title-half'>Sang Bleu Zurich</h1>
        <div className="col-sm-6">
          <h3 className='zurich-subtitle-half'>Dienerstrasse 26, 8004 Zürich, Switzerland </h3>
          <h3 className='zurich-subtitle-half'>zurich@sangbleu.tattoo</h3>
        </div>
        <div className="col-sm-6">
          <h3 className='zurich-subtitle-half' style={{ textAlign: 'right' }}>Open 11am - 7pm Tuesday to Saturday</h3>
          <h3 className="zurich-subtitle-half" style={{ textAlign: 'right' }}>+41 43 545 88 38</h3>
        </div>
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

