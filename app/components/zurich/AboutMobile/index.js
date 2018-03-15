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
    <div style={{ height: '100%', overflowY: 'scroll' }} onTouchTap={props.handleAboutClose}>
      <Icon onTouchTap={props.handleAboutClose} type="close" style={{ position: 'absolute', color: 'white', fontSize: '5vw', opacity: '.7', right: '0', paddingTop: '5%', paddingRight: '5%' }} />
      <h3 className='zurich-about-header-mobile'>about sbzh</h3>
      <Image className='zurich-about-image-mobile' cloudName="kurzweg" publicId="sangbleu/table" alt="sang bleu london" quality="auto" crop="scale" responsive />
      <p className='zurich-about-copy-mobile'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className='container-fluid' style={{ marginTop: '5vh', height: '100%', overflowY: 'scroll' }}>
        <div className='row' style={{ padding: '0', width: '95%', margin: '0 auto' }}>
          <div className='col-xs-6 zurich-links-mobile'>
            <a href='https://www.instagram.com/sangbleutattoozurich/?hl=en'>instagram</a>
            <a href='mailto:zurich@sangbleu.tattoo'>zurich@sangbleu.tattoo</a>
          </div>
          <div className='col-xs-6 zurich-links-mobile' style={{ paddingLeft: '3vw' }}>
            <a href='http://www.sangbleu.tattoo/london'>sang bleu london</a>
            <a href='http://www.sangbleu.com'>sangbleu.com</a>
          </div>
        </div>
        <div className='row' style={{ padding: '0', width: '95%', margin: '0 auto', marginTop: '1vh' }}>
          <div className='col-xs-6 zurich-typefaces'>
            <p>typefaces:</p>
            <div style={{ marginLeft: '3vw' }}>
              <p>Suisse Int'l + BRRR<br />by swisstypefaces</p>
            </div>
          </div>
          <div className='col-xs-6 zurich-typefaces' style={{ paddingLeft: '10vw' }}>
            <p>Design:</p>
            <p style={{ marginLeft: '3vw' }}>Redwan El-Harrak <br /> (Sang Bleu)</p>
            <p style={{ marginTop: '2vh' }}>Development:</p>
            <p style={{ marginLeft: '3vw' }}>Victoria Kurzweg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {

};

export default About;
