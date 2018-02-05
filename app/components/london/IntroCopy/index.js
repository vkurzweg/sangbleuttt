/**
*
* IntroCopy
*
*/

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: #FAFAFA;
  width: 17vw;
  font-family: Helvetica;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  padding: 1em;
  display: block;
  margin: 0 auto;
  white-space: no-wrap;
 &:hover, &:active, &:focus {
   background-color: #3D8EE2;
   color: #FAFAFA;
   border: 2px solid #FAFAFA;
   outline: 0;
}

`;


function IntroCopy() {
  return (
    <div style={{ paddingBottom: '5%' }}>
      <h3 style={{ textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '28px', letterSpacing: '.3', paddingTop: '10%' }}>about</h3>
      <p style={{ fontSize: '22px', textAlign: 'justify', color: '#323232', width: '75%', margin: '0 auto', paddingTop: '2%', paddingBottom: '3%', letterSpacing: '1px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <Button className="btn btn-default">Book an Appointment</Button>
    </div>
  );
}

IntroCopy.propTypes = {

};

export default IntroCopy;
