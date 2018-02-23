/**
*
* IntroCopy
*
*/

import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { Image } from 'cloudinary-react';

const StyledImage = styled(Image)`
  height: 40vh;
  width: 100%;
  object-fit: cover;
  padding-top: 1vh;
`;


function IntroCopy() {
  return (
    <div style={{ paddingBottom: '3vh' }}>
      <ScrollAnimation animateIn="slideInDown">
        <h3 style={{ fontFamily: 'SuisseIntlSemiBold', textTransform: 'uppercase', fontSize: '5vw', letterSpacing: '1px', marginLeft: '4vw' }}>about</h3>
        <StyledImage cloudName="kurzweg" publicId="sblondon" alt="sang bleu london" quality="auto" crop="scale" responsive />
        <p style={{ fontSize: '3.5vw', color: '#323232', width: '85%', margin: '0 auto', paddingTop: '4vh', letterSpacing: '1px', lineHeight: '2em' }}>
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
