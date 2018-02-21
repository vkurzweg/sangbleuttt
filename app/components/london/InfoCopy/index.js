/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const Button = styled.button`
  border: 2px solid black;
  width: 200px;
  font-family: Helvetica;
  text-transform: uppercase;
  font-size: 12px;
  padding: .75em;
  display: block;
  margin: 0 auto;
  margin-top: 15%;
  white-space: no-wrap;
  margin-left: 20%;
 &:hover, &:active, &:focus {
   background-color: black;
   color: #FAFAFA;
   border: none;
   outline: 0;
}

`;


function Logo() {
  return (
    <div className="container-fluid" style={{ width: '100%', margin: '0 auto', color: 'black'}}>
      <div className="row" style={{ textAlign: 'center', fontSize: '1.3vw', width: '100%', margin: '0 auto', marginTop: '3vh', marginBottom: '2vh', borderBottom: '1px solid black' }}>
        <div className="col-sm-4">
          <div style={{ color: 'black', marginTop: '13%' }}>
            <p style={{ fontFamily: 'SangBleu', letterSpacing: '.4', fontWeight: 'normal', color: 'black' }}>29B Dalston Ln,<br />London E8 3DF</p>
          </div>
        </div>
        <div className="col-sm-4">
          <p style={{ fontFamily: 'SangBleu', marginTop: '13%' }}>+44 20 8616 0840<br />london@sangbleu.tattoo</p>
        </div>
        <div className="col-sm-4">
          <p style={{fontFamily: 'SangBleu',  marginTop: '13%' }}>Open 11am — 7pm<br />7 days a week</p>
        </div>
      </div>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;

// <Button className="btn btn-default">Book an Appointment</Button>

