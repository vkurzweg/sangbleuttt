/**
*
* ZurichLanding
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function ZurichLanding() {
  return (
    <div>
      <div className="birds">
        <a href="/zurich">
          <Image className="bird" cloudName="kurzweg" publicId="birds" alt="sang bleu london" quality="auto" crop="scale" responsive />
          <Image className="bird-invert" cloudName="kurzweg" publicId="birds_invert" alt="sang bleu london" quality="auto" crop="scale" responsive />
          <h2 className="sang-invert">sang</h2>
          <h2 className="zurich-invert">zurich</h2>
        </a>
      </div>
    </div>
  );
}

ZurichLanding.propTypes = {

};

export default ZurichLanding;

