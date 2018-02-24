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
  let titleSize = 'title-initial'
  let subtitleMargin;
  if(!initialState && !blogState && !aboutState){
    titleSize = 'title-full'
    subtitleMargin = '2vw'
  }
  let subtitle =
      <div>
        <h3 className='zurich-subtitle' style={{ marginLeft: subtitleMargin }}>Dienerstrasse 26, 8004 Zürich, Switzerland </h3>
        <h3 className="zurich-subtitle" style={{ marginLeft: subtitleMargin }}>+41 43 545 88 38</h3>
      </div>
  if(blogState || aboutState){
    titleSize = 'title-half';
    subtitle =
      <div>
        <h3 className='zurich-subtitle'>Dienerstrasse 26, 8004 <br /> Zürich, Switzerland </h3>
        <h3 className="zurich-subtitle">+41 43 545 88 38</h3>
      </div>
  }
  let leftMargin = '1vw'
  aboutState ? leftMargin = '3vw' : leftMargin;
  return (
    <div style={{ zIndex: '20', width: '100%', paddingLeft: '0', paddingRight: '0', marginRight: '0', right: '0', marginLeft: '0' }}>
      <div style={{ marginLeft: leftMargin, marginRight: '1vw', paddingTop: '2vh' }} >
        <h1 className={titleSize}>Sang Bleu Zurich</h1>
        {subtitle}
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

