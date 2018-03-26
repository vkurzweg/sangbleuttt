/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  width: 200px;
  height: 25px;
  font-family: SuisseRegular;
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  border-radius: 2px;
  padding: 3px;
  letter-spacing: 1px;
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
      <div style={{ marginLeft: '110px' }}>
        <div style={{ fontSize: '15px', fontFamily: 'SuisseRegular', lineHeight: '20px', color: 'black', width: '100%' }}>
          <p><a href="https://www.google.com/maps/place/Sang+Bleu+Tattoo/@51.5463764,-0.0726058,15z/data=!4m2!3m1!1s0x0:0x3e5c154937010676?sa=X&ved=0ahUKEwi50v-Nl4baAhVn8IMKHQCeBj4Q_BIIdzAK" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>Sang Bleu London,<br />29B Dalston Ln,<br /> London E8 3DF</a></p>
          <div style={{ fontSize: '15px', fontFamily: 'SuisseRegular', lineHeight: '20px', color: 'black', width: '100%' }}>
            <p><a href="tel:+44 20 8616 0840" style={{ color: 'black', textDecoration: 'none' }}>+44 20 8616 0840</a><br />
            <a href="mailto:london@sangbleu.tattoo" style={{ color: 'black', textDecoration: 'none' }}>london@sangbleu.tattoo</a><br />
            <a href="https://www.instagram.com/sangbleutattoolondon/?hl=en" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>@sangbleutattoolondon</a></p>
          </div>
          <p>Open 11am — 7pm<br />7 days a week</p>
        </div>
        <a style={{ color: 'black', paddingTop: '5vh', fontFamily: 'SuisseLight', letterSpacing: '2px' }} href="mailto:london@sangbleu.tattoo" target="_blank">
          <Button className="btn btn-default">Book an Appointment</Button>
        </a>
      </div>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
