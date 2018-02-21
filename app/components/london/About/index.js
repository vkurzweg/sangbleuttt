/**
*
* IntroCopy
*
*/

import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';



function IntroCopy() {
  return (
    <div id="about" style={{ paddingTop: '3%', paddingBottom: '3%', borderBottom: '1px solid black' }}>
      <ScrollAnimation animateIn="slideInDown">
        <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '2vw', letterSpacing: '2', marginLeft: '16.75vw' }}>about</h3>
        <p style={{ fontSize: '2.3vw', textAlign: 'justify', color: '#323232', width: '73%', textTransform: 'uppercase', margin: '0 auto', paddingTop: '2%', letterSpacing: '.5px', lineHeight: '2em' }}>
          Lorem ipsum dolor sit amet, <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}>consectetur adipiscing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}>Ut enim ad minim veniam,</span> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}>Duis aute irure dolor in reprehenderit</span> in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </ScrollAnimation>
    </div>
  );
}

IntroCopy.propTypes = {

};

export default IntroCopy;
// <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '20px', letterSpacing: '.3', marginLeft: '2%' }}>about</h3>
