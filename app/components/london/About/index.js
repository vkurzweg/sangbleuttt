/**
*
* IntroCopy
*
*/

import React from 'react';
// import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

function IntroCopy(props) {
  const studio = 'http://res.cloudinary.com/kurzweg/image/upload/v1519322649/sangbleu/sblondon.png';
  return (
    <div style={{ paddingTop: '8vh', paddingBottom: '1vh' }}>
      <div style={{ height: '700px', backgroundImage: `url(${studio})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ScrollAnimation animateIn="fadeIn">
        <a name="about_section" style={{ color: 'black', textDecoration: 'none' }}><p style={{ fontFamily: 'SuisseRegular', marginLeft: '10vw', letterSpacing: '.02em', fontSize: '1.04vw', lineHeight: '20px', color: 'black', width: '45%', paddingTop: '20vh', paddingBottom: '15vh' }}>
          {props.about}
        </p></a>
      </ScrollAnimation>
    </div>
  );
}

IntroCopy.propTypes = {

};

export default IntroCopy;
// <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '20px', letterSpacing: '.3', marginLeft: '2%' }}>about</h3>
