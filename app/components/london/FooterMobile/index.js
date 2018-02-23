/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const StyledImage = styled(Image)`
  width: 5vw;
  display: block;
  margin: 0 auto;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: black;
  }
`;

const Button = styled.button`
  border: 1px solid black;
  width: 50vw;
  margin: 0 auto;
  font-family: SuisseLight;
  text-transform: uppercase;
  font-size: 3vw;
  white-space: no-wrap;
  margin-bottom: 3vh;
  margin-top: 2vh;
  margin-left: 5vw;
 &:hover, &:active, &:focus {
   background-color: black;
   color: #FAFAFA;
   border: none;
   outline: 0;
}

`;

function Footer() {
  return (
    <div style={{ width: '100%', fontFamily: 'SuisseLight', textTransform: 'uppercase', color: 'black', fontSize: '3vw', lineHeight: '2', textAlign: 'center', margin: '0 auto', marginRight: '0', marginLeft: '0', paddingRight: '0', paddingLeft: '0' }}>
      <a style={{ color: 'black', paddingTop: '5vh' }} href="mailto:london@sangbleu.tattoo" target="_blank">
        <Button className="btn btn-default">Book an Appointment</Button>
      </a>
      <A href="https://www.instagram.com/sangbleutattoolondon/" target="_blank">
        <p>instagram</p>
      </A>
      <A href="mailto:london@sangbleu.tattoo" target="_blank">
        <p>london@sangbleu.tattoo</p>
      </A>
      <div style={{ position: 'relative', height: '100%', display: 'flex', width: '100%', marginTop: '15vh', paddingBottom: '5vh', lineHeight: '.5' }}>
        <div style={{ width: '50%', position: 'absolute', bottom: '0' }}>
          <A href="http://www.sangbleu.com" target="_blank">
            <p>sangbleu.com</p>
          </A>
          <A href="https://sangbleu.com/privacypolicy/" target="_blank">
            <p>Privacy Policy</p>
          </A>
          <A href="https://sangbleu.com/termsandconditions/" target="_blank">
            <p>T&C<span style={{ textTransform: 'lowercase' }}>s</span></p>
          </A>
        </div>
        <div style={{ width: '50%', position: 'absolute', bottom: '0', left: '50%' }}>
          <A href="/zurich">
            <StyledImage cloudName="kurzweg" publicId="logozurich" alt="sang bleu london" quality="auto" crop="scale" responsive />
            <p style={{ paddingTop: '2vh' }}>Sang Bleu Zurich</p>
          </A>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
