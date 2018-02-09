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
  width: 13vw;
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
    <div className="container-fluid" style={{ width: '100%', margin: '0 auto', color: 'black' }}>
      <div className="row" style={{ marginTop: '3%' }}>
        <div className="col-sm-2">
          <div style={{ height: '100px', left: '50%'}}>
            <Image style={{ position: 'absolute', width: 'auto', height: '100%', display: 'block', margin: '0 auto', marginTop: '-10%', marginLeft: '15%', zIndex: '3' }} cloudName="kurzweg" publicId="logolondon" alt="sang bleu london" quality="auto" crop="scale" responsive />
          </div>
        </div>
        <div className="col-sm-2">
          <div style={{ fontSize: '15px', letterSpacing: '.4', color: 'black', marginTop: '13%' }}>
            <h3 style={{ fontSize: '15px', letterSpacing: '.4', fontWeight: 'normal' }}>Sang Bleu London,<br /> 29B Dalston Ln,<br />London E8 3DF</h3>
          </div>
        </div>
        <div className="col-sm-2" style={{ fontSize: '15px' }}>
          <p style={{ marginTop: '13%' }}>+44 20 8616 0840<br />london@sangbleu.tattoo</p>
        </div>
        <div className="col-sm-2">
          <p style={{ marginTop: '13%' }}>Open 11am — 7pm<br />7 days a week</p>
        </div>
        <div className="col-sm-2">
          <Button className="btn btn-default">Book an Appointment</Button>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
