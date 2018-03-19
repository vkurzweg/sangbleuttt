/**
*
* About
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import Icon from 'antd/lib/icon';

function About(props) {
  return (
    <div>
      <h3 className='zurich-about-header'>about sbzh</h3>
      <Image className='zurich-about-image' cloudName="kurzweg" publicId="sangbleu/table" alt="sang bleu london" quality="auto" crop="scale" responsive />
      <p className='zurich-about-copy'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.about}
      </p>
      <div className='container zurich-about-copy' >
        <div className='row' style={{ padding: '0', width: '100%', margin: '0 auto' }}>
          <div className='col-sm-6  zurich-typefaces zurich-links'>
            <a href='https://www.instagram.com/sangbleutattoozurich/?hl=en'>instagram</a>
            <a href='mailto:zurich@sangbleu.tattoo'>zurich@sangbleu.tattoo</a>
          </div>
          <div className='col-sm-6 zurich-typefaces zurich-links'>
            <a href='http://www.sangbleu.tattoo/london'>sang bleu london</a>
            <a href='http://www.sangbleu.com'>sangbleu.com</a>
          </div>
        </div>
        <div className='row' style={{ padding: '0', width: '100%', margin: '0 auto', marginTop: '2vh', paddingBottom: '10vh' }}>
          <div className='col-sm-6 zurich-typefaces'>
            <p>typefaces:</p>
            <div style={{ marginLeft: '1vw' }}>
              <p>Suisse Int'l + BRRR<br />by swisstypefaces</p>
            </div>
          </div>
          <div className='col-sm-6 zurich-typefaces'>
            <p>Design:</p>
            <p style={{ marginLeft: '1vw' }}>Redwan El-Harrak (Sang Bleu)</p>
            <p style={{ marginTop: '2vh' }}>Development:</p>
            <p style={{ marginLeft: '1vw' }}>Victoria Kurzweg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {

};

export default About;
