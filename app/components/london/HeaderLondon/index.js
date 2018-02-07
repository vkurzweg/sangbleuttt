/**
*
* HeaderLondon
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function HeaderLondon() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-2">
          <h1 style={{ position: 'absolute', overflow: 'visible', whiteSpace: 'nowrap', marginTop: '10%', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '32px', letterSpacing: '.3', paddingTop: '2%' }}>Sang Bleu London</h1>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

HeaderLondon.propTypes = {

};

export default HeaderLondon;

// <div className='menu-logo'>
//   <a href="/zurich" style={{ textDecoration: 'none' }}><Image className='menu' cloudName="kurzweg" publicId="logozurich" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
//   <a href="/zurich" style={{ textDecoration: 'none' }}><Image className='menu-blue' cloudName="kurzweg" publicId="logozurich_blue" alt="sang bleu" quality="auto" crop="scale" responsive /></a>
// </div>
