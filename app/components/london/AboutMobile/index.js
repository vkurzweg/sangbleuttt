/**
*
* IntroCopy
*
*/

import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { Image } from 'cloudinary-react';

const StyledImage = styled(Image)`
  height: 50vh;
  width: 100%;
  object-fit: cover;
  padding-top: 10vh;
`;


function IntroCopy(props) {
  return (
    <div id="about_section" style={{ paddingBottom: '100px' }}>
      <StyledImage cloudName="kurzweg" publicId="sangbleu/sblondon" alt="sang bleu london" quality="auto" crop="scale" responsive />
      <ScrollAnimation animateIn="fadeIn">
        <p style={{ fontFamily: 'SuisseRegular', fontSize: '15px', lineHeight: '20px', color: '#323232', width: '85%', margin: '0 auto', paddingTop: '30px' }}>
          {props.about}
        </p>
      </ScrollAnimation>
    </div>
  );
}

IntroCopy.propTypes = {

};

export default IntroCopy;
// <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '20px', letterSpacing: '.3', marginLeft: '2%' }}>about</h3>
