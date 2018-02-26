/**
*
* About
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import Icon from 'antd/lib/icon';

function About() {
  return (
    <div>
      <Icon type="close" style={{ position: 'absolute', color: 'white', fontSize: '2vw', opacity: '.7', right: '0', paddingTop: '5%', paddingRight: '5%' }} />
      <h3 className='zurich-about-header'>about sbzh</h3>
      <Image className='zurich-about-image' cloudName="kurzweg" publicId="table" alt="sang bleu london" quality="auto" crop="scale" responsive />
      <p className='zurich-about-copy'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className='container-fluid' style={{ marginTop: '5vh' }}>
        <div className='row' style={{ padding: '0', width: '95%', margin: '0 auto' }}>
          <div className='col-sm-6 zurich-about-copy zurich-links'>
            <a href='https://www.instagram.com/sangbleutattoozurich/?hl=en'>instagram</a>
            <a href='mailto:zurich@sangbleu.tattoo'>zurich@sangbleu.tattoo</a>
          </div>
          <div className='col-sm-6 zurich-about-copy zurich-links'>
            <a href='http://www.sangbleu.tattoo/london'>sang bleu london</a>
            <a href='http://www.sangbleu.com'>sangbleu.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {

};

export default About;
