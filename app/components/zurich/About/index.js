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
      <Image className='zurich-about-image' cloudName="kurzweg" publicId="empty" alt="sang bleu london" quality="auto" crop="scale" responsive />
      <p className='zurich-about-copy'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

    </div>
  );
}

About.propTypes = {

};

export default About;
