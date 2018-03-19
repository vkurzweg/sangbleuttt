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
    <div id="about" style={{ paddingTop: '8vh', paddingBottom: '1vh' }}>
      <div style={{ height: '525px', backgroundImage: `url(${studio})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ScrollAnimation animateIn="fadeIn">
        <p style={{ fontFamily: 'SuisseRegular', marginLeft: '10vw', letterSpacing: '.02em', fontSize: '15pt', color: 'black', width: '45%', paddingTop: '5vh', paddingBottom: '10vh' }}>
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
