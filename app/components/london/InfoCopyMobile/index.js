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
  white-space: no-wrap;
 &:hover, &:active, &:focus {
   background-color: black;
   color: #FAFAFA;
   border: none;
   outline: 0;
}

`;


function Logo() {
  return (
    <div className="container" style={{ width: '100%', margin: '0 auto', color: 'black', paddingTop: '10vh', paddingBottom: '1vh' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '2.8vw', fontFamily: 'SangBleu', letterSpacing: '1', color: 'black', display: 'flex', textAlign: 'center', width: '33%', margin: '0 auto', justifyContent: 'center', flexDirection: 'column' }}>
          <p>29B Dalston Ln, London E8 3DF</p>
          <p>Open 11am — 7pm<br />7 days a week</p>
        </div>
        <div style={{ width: '33%', margin: '0 auto', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Image className='logo-london' style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }} cloudName="kurzweg" publicId="logolondon" alt="sang bleu london" quality="auto" crop="scale" responsive />
        </div>
        <div style={{ fontSize: '3vw', textAlign: 'center', fontFamily: 'SangBleu', letterSpacing: '1', color: 'black', display: 'flex', textAlign: 'center', width: '33%', margin: '0 auto', justifyContent: 'center', flexDirection: 'column' }}>
          <p>london@<br />sangbleu.tattoo</p>
          <p>+44 20 8616 0840</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
        </div>
        <div className="col-xs-6">
        </div>
      </div>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
