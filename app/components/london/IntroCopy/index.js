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
    <div style={{ paddingBottom: '5%' }}>
      <ScrollAnimation animateIn="slideInDown">
        <p style={{ fontSize: '22px', textAlign: 'justify', color: '#323232', width: '76%', textTransform: 'uppercase', fontSize: '42px', margin: '0 auto', paddingTop: '2%', paddingBottom: '3%', paddingTop: '6%', letterSpacing: '.5px', lineHeight: '2em' }}>
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
