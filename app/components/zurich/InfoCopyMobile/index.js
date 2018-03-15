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
    <div style={{ position: 'fixed', zIndex: '20', width: '100%', paddingLeft: '30px', paddingRight: '30px', marginRight: '0', right: '0', marginLeft: '10vw' }}>
      <div style={{ margin: '0 auto', paddingTop: '2vh' }} >
        <div className="zurich-title-container-mobile" >
          <h1 className="zurich-title-mobile">
            <span>S</span>
            <span>a</span>
            <span>n</span>
            <span>g &nbsp;</span>
            <span></span>
            <span>b</span>
            <span>l</span>
            <span>e</span>
            <span>u&nbsp;</span>
            <span></span>
            <span>z</span>
            <span>u</span>
            <span>r</span>
            <span>i</span>
            <span>c</span>
            <span>h</span>
          </h1>
        </div>
        <div>
          <h3 className='zurich-subtitle-mobile' style={{ marginLeft: '2vw' }}>Dienerstrasse 26, 8004</h3>
          <h3 className='zurich-subtitle-mobile' style={{ marginLeft: '2vw' }}>Zürich, Switzerland </h3>
          <h3 className="zurich-subtitle-mobile" style={{ marginLeft: '2vw' }}>+41 43 545 88 38</h3>
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

