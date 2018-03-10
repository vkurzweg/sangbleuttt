/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const StyledImage = styled(Image)`
  width: 1.25vw;
  display: block;
  margin: 0 auto;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  bottom: 0;
  font-size: 12px;
  letter-spacing: 1.1px;
  &:hover {
    color: black;
  }
`;

const Button = styled.button`
  border: 1px solid black;
  width: 208px;
  height: 25px;
  font-family: SuisseLight;
  text-transform: uppercase;
  font-size: 12px;
  margin: 0 auto;
  white-space: no-wrap;
  display: block;
  bottom: 0;
  margin-bottom: 4.5vh;
  padding: 3px;
  letter-spacing: 1.5px;
  position: absolute;
 &:hover, &:active, &:focus {
   background-color: black;
   color: #FAFAFA;
   border: none;
   outline: 0;
}

`;



function Footer() {
  return (
    <div className="container-fluid" style={{ position: 'absolute', bottom: '0', height: '15vh', width: '100%', fontFamily: 'SuisseLight', textTransform: 'uppercase', color: 'black', fontSize: '12px', textAlign: 'center', marginRight: '0', marginLeft: '0', paddingRight: '0', paddingLeft: '0' }}>
      <div className="row" style={{ paddingTop: '2vh', width: '96%', height: '15vh', margin: '0 auto' }}>
        <div style={{ display: 'flex', position: 'relative' }}>
          <A href="/zurich">
            <StyledImage cloudName="kurzweg" publicId="logozurich" alt="sang bleu london" quality="auto" crop="scale" responsive />
            <p style={{ paddingTop: '1vh' }}>Sang Bleu Zurich</p>
          </A>
          <div style={{ position: 'relative', marginLeft: '3vw', marginRight: '3vw', paddingTop: '6.75vh' }}>
            <A href="http://www.sangbleu.com" target="_blank">
              <p>sangbleu.com</p>
            </A>
          </div>
          <div style={{ position: 'relative', marginRight: '3vw', paddingTop: '6.75vh' }}>
            <A href="https://sangbleu.com/privacypolicy/" target="_blank">
              <p>Privacy Policy</p>
            </A>
          </div>
          <div style={{ position: 'relative', marginRight: '18vw', paddingTop: '6.75vh' }}>
            <A href="https://sangbleu.com/termsandconditions/" target="_blank">
              <p>T&C<span style={{ textTransform: 'lowercase' }}>s</span></p>
            </A>
          </div>
          <div style={{ position: 'relative', marginLeft: '3vw', marginRight: '3vw', paddingTop: '6.75vh' }}>
            <A href="https://www.instagram.com/sangbleutattoolondon/" target="_blank">
              <p>instagram</p>
            </A>
          </div>
          <div style={{ position: 'relative', marginRight: '3vw', paddingTop: '6.75vh' }}>
            <A href="mailto:london@sangbleu.tattoo" target="_blank">
              <p>london@sangbleu.tattoo</p>
            </A>
          </div>
          <div>
            <a style={{ color: 'black' }} href="mailto:london@sangbleu.tattoo" target="_blank">
              <Button className="btn btn-default">Book an Appointment</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
