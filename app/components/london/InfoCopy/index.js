/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`

  border: 1px solid black;
  width: 14.44vw;
  font-family: SuisseLight;
  text-transform: uppercase;
  font-size: .83vw;
  padding: 3px;
  display: block;
  margin: 0 auto;
  white-space: no-wrap;
  margin-left: 30%;
  letter-spacing: 1.5px;
  clear: both;
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
      <div className="row" style={{ paddingLeft: '11.6vw', paddingRight: '12.6vw', letterSpacing: '.02em', fontFamily: 'SuisseRegular', color: 'black', fontSize: '1.04vw', lineHeight: '20px', width: '100%', margin: '0 auto', marginTop: '50px', marginBottom: '20px' }} >
        <div className="col-sm-3">
          <p>Sang Bleu London <br /><a href="https://www.google.com/maps/place/Sang+Bleu+Tattoo/@51.5463764,-0.0726058,15z/data=!4m2!3m1!1s0x0:0x3e5c154937010676?sa=X&ved=0ahUKEwi50v-Nl4baAhVn8IMKHQCeBj4Q_BIIdzAK" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>29B Dalston Ln,<br />London E8 3DF</a></p>
        </div>
        <div className="col-sm-3">
          <p><a href="tel:+44 20 8616 0840" style={{ color: 'black', textDecoration: 'none' }}>+44 20 8616 0840</a><br /><a href="mailto:london@sangbleu.tattoo" style={{ color: 'black', textDecoration: 'none' }}>london@sangbleu.tattoo</a><br /><a href="https://www.instagram.com/sangbleutattoolondon/?hl=en" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>@sangbleutattoolondon</a></p>
        </div>
        <div className="col-sm-3">
          <p>Open 11am — 7pm<br />7 days a week</p>
        </div>
        <div className="col-sm-3">
          <a style={{ color: 'black', paddingTop: '5vh', position: 'relative' }} href="mailto:london@sangbleu.tattoo" target="_blank">
            <Button className="btn btn-default">Book an Appointment</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
