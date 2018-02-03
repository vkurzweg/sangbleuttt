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
  width: 18vw;
  font-family: Helvetica;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  padding: 1em;
  display: block;
  margin: 0 auto;
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
      <h3 style={{ textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '32px', letterSpacing: '.3', paddingTop: '10%' }}>about</h3>
      <p style={{ fontSize: '28px', textAlign: 'center', color: '#323232', width: '70%', margin: '0 auto', paddingTop: '2%', paddingBottom: '3%', letterSpacing: '1px' }}>
        The studios are different because they're not only studios, they are a kind of embassy for all the things we do.
      </p>
      <Button className="btn btn-default">Book an Appointment</Button>
    </div>
  );
}

IntroCopy.propTypes = {

};

export default IntroCopy;
