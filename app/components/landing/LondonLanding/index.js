/**
*
* LondonLanding
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function LondonLanding() {
  return (
    <div>
      <div className="cathedrals">
        <a href="/london">
          <Image className="cathedral" cloudName="kurzweg" publicId="cathedral" alt="sang bleu london" quality="auto" crop="scale" responsive />
          <Image className="cathedral-invert" cloudName="kurzweg" publicId="cathedral_invert" alt="sang bleu london" quality="auto" crop="scale" responsive />
          <h2 className="bleu-invert">bleu</h2>
          <h2 className="london-invert">london</h2>
        </a>
      </div>
    </div>
  );
}

LondonLanding.propTypes = {

};

export default LondonLanding;

// <h2 style={{ position: 'absolute', textAlign: 'right', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '.3', marginTop: '30vh', color: '#FAFAFA', fontSize: '44', paddingRight: '95%', marginTop: '33vh' }}>U</h2>

