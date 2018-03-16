/**
*
* Banner
*
*/

import React from 'react';
import styled from 'styled-components';
import Marquee from 'react-smooth-marquee';

function Banner() {
  return (
    <div>
      <div className="marquee">
        <span className="marquee-text">
          Book an appointment — Open 11am to 7pm  Tuesday to Saturday  — Book an appointment — Open 11am to 7pm  Tuesday to Saturday — Book an appointment — Open 11am to 7pm  Tuesday to Saturday — Book an appointment — Open 11am to 7pm  Tuesday to Saturday —
          Book an appointment — Open 11am to 7pm  Tuesday to Saturday  — Book an appointment — Open 11am to 7pm  Tuesday to Saturday — Book an appointment — Open 11am to 7pm  Tuesday to Saturday — Book an appointment — Open 11am to 7pm  Tuesday to Saturday —
        </span>
        <span className="marquee-mailto">
          <a href="mailto:zurich@sangbleu.tattoo">Book now: zurich@sangbleu.tattoo</a>
        </span>
      </div>
    </div>
  );
}

Banner.propTypes = {

};

export default Banner;

// <div className="marquee marquee2">
//   <span className="marquee-text">
//     Book an appointment — Open 11am to 7pm  Tuesday to Saturday  — Book an appointment — Open 11am to 7pm  Tuesday to Saturday — Book an appointment — Open 11am to 7pm  Tuesday to Saturday — Book an appointment — Open 11am to 7pm  Tuesday to Saturday —
//     Book an appointment — Open 11am to 7pm  Tuesday to Saturday  — Book an appointment — Open 11am to 7pm  Tuesday to Saturday — Book an appointment — Open 11am to 7pm  Tuesday to Saturday — Book an appointment — Open 11am to 7pm  Tuesday to Saturday —
//   </span>
//   <span className="marquee-mailto">
//     <a href="mailto:zurich@sangbleu.tattoo">Book now: zurich@sangbleu.tattoo</a>
//   </span>
// </div>
