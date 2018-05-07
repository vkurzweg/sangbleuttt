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
  font-size: .83vw;
  letter-spacing: 1.1px;
  &:hover {
    color: black;
  }
`;

const Button = styled.button`
  border: 1px solid black;
  width: 14.44vw;
  font-family: SuisseLight;
  text-transform: uppercase;
  font-size: .83vw;
  margin: 0 auto;
  white-space: nowrap;
  display: block;
  bottom: 0;
  margin-bottom: 1.5vh;
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
      <div className="row" style={{ paddingTop: '2vh', width: '96%', height: '30vh', margin: '0 auto' }}>
        <div style={{ display: 'flex', position: 'relative', fontSize: '.83vw' }}>
          <A href="/zurich" style={{ position: 'absolute', bottom: '0' }}>
            <StyledImage cloudName="kurzweg" publicId="sangbleu/logozurich" alt="sang bleu london" quality="auto" crop="scale" responsive />
            <p style={{ paddingTop: '1vh', whiteSpace: 'nowrap' }}>Sang Bleu Zurich</p>
          </A>
          <div style={{ position: 'absolute', marginLeft: '13vw', marginRight: '3vw', bottom: '0' }}>
            <A href="http://www.sangbleu.com" target="_blank">
              <p>sangbleu.com</p>
            </A>
          </div>
          <div style={{ position: 'absolute', marginLeft: '25vw', bottom: '0' }}>
            <A href="https://sangbleu.com/privacypolicy/" target="_blank">
              <p style={{ whiteSpace: 'nowrap' }}>Privacy Policy</p>
            </A>
          </div>
          <div style={{ position: 'absolute', marginLeft: '35vw', bottom: '0' }}>
            <A href="https://sangbleu.com/termsandconditions/" target="_blank">
              <p>T&C<span style={{ textTransform: 'lowercase' }}>s</span></p>
            </A>
          </div>
          <div style={{ position: 'absolute', marginLeft: '55vw', marginRight: '3vw', bottom: '0' }}>
            <A href="https://www.instagram.com/sangbleutattoolondon/" target="_blank">
              <p>instagram</p>
            </A>
          </div>
          <div style={{ position: 'absolute', marginLeft: '63vw', bottom: '0' }}>
            <A href="mailto:london@sangbleu.tattoo" target="_blank">
              <p>london@sangbleu.tattoo</p>
            </A>
          </div>
          <div style={{ position: 'absolute', marginLeft: '80vw', bottom: '0' }}>
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
