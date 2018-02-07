/**
*
* ThreeTest
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';

class ThreeTest extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="stage" style={{ paddingBottom: '15%', backgroundColor: '#FFFFFF', height: '100vh' }}>
        <Image id="spinner" className="bird-three" cloudName="kurzweg" publicId="birds" alt="sang bleu london" quality="auto" crop="scale" responsive />
        <Image id="spinner2" className="cathedral-three" cloudName="kurzweg" publicId="cathedral" alt="sang bleu london" quality="auto" crop="scale" responsive />
        <h1 style={{ position: 'absolute', whiteSpace: 'nowrap', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '44px', letterSpacing: '.7', marginTop: '40vh', marginLeft: '40.8vw' }}>Sang Bleu</h1>
      </div>
    );
  }
}

ThreeTest.propTypes = {

};

export default ThreeTest;
