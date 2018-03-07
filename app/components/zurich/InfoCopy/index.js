/**
*
* Logo
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function Logo(props) {
  let blogState = props.blogOpen;
  let aboutState = props.aboutOpen;
  let initialState = props.initial;
  let subtitle =
      <div>
        <h3 className='zurich-subtitle'>Dienerstrasse 26, 8004 Zürich, Switzerland </h3>
        <h3 className="zurich-subtitle">+41 43 545 88 38</h3>
      </div>
  if(blogState || aboutState){
    subtitle =
      <div>
        <h3 className='zurich-subtitle'>Dienerstrasse 26, 8004 <br /> Zürich, Switzerland </h3>
        <h3 className="zurich-subtitle">+41 43 545 88 38</h3>
      </div>
  }
  return (
    <div style={{ zIndex: '20', width: '100%', paddingLeft: '0', paddingRight: '0', marginRight: '0', right: '0', marginLeft: '0' }}>
      <div className="zurich-title-container" >
        <h1 className="zurich-title">
          <span>S</span>
          <span>a</span>
          <span>n</span>
          <span>g</span>
          <span></span>
          <span>b</span>
          <span>l</span>
          <span>e</span>
          <span>u</span>
          <span></span>
          <span>z</span>
          <span>u</span>
          <span>r</span>
          <span>i</span>
          <span>c</span>
          <span>h</span>
        </h1>
      </div>
      {subtitle}
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
// <div style={{ height: '250px', left: '50%'}}>
//   <Image style={{ width: 'auto', height: '100%', display: 'block', margin: '0 auto', marginTop: '15%' }} cloudName="kurzweg" publicId="logozurich" alt="sang bleu london" quality="auto" crop="scale" responsive />
// </div>

