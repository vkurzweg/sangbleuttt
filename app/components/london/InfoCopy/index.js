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
  height: 3vh;
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
    <div id="info" className="container-fluid" style={{ width: '100%', margin: '0 auto', color: 'black' }}>
      <div className="row" style={{ paddingLeft: '11.6vw', paddingRight: '11.6vw', letterSpacing: '.02em', fontFamily: 'SuisseRegular', color: 'black', fontSize: '15px', width: '100%', margin: '0 auto', marginTop: '10vh', marginBottom: '2vh' }} >
        <div className="col-sm-3">
          <p>Sang Bleu London <br />29B Dalston Ln,<br />London E8 3DF</p>
        </div>
        <div className="col-sm-3">
          <p>+44 20 8616 0840<br />london@sangbleu.tattoo<br />@sangbleutattoolondon</p>
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
