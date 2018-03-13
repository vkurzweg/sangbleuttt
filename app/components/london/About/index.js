/**
*
* IntroCopy
*
*/

import React from 'react';
// import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

function IntroCopy() {
  const studio = 'http://res.cloudinary.com/kurzweg/image/upload/v1519322649/sangbleu/sblondon.png';
  return (
    <div id="about" style={{ paddingTop: '8vh', paddingBottom: '3vh' }}>
      <div style={{ height: '425px', backgroundImage: `url(${studio})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ScrollAnimation animateIn="fadeIn">
        <p style={{ fontFamily: 'SuisseRegular', marginLeft: '10vw', letterSpacing: '.02em', fontSize: '15pt', color: 'black', width: '45%', paddingTop: '10vh', paddingBottom: '10vh' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </ScrollAnimation>
    </div>
  );
}

IntroCopy.propTypes = {

};

export default IntroCopy;
// <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '20px', letterSpacing: '.3', marginLeft: '2%' }}>about</h3>
