/**
*
* Banner
*
*/

import React from 'react';
import styled from 'styled-components';


function Banner() {
  return (
    <div className="marquee">
      <span className="marquee-text">
        Book an appointment --- Open 11am to 7pm  Tuesday to Saturday  --- Book an appointment --- Open 11am to 7pm  Tuesday to Saturday --- Book an appointment --- Open 11am to 7pm  Tuesday to Saturday --- Book an appointment --- Open 11am to 7pm  Tuesday to Saturday ---
        Book an appointment --- Open 11am to 7pm  Tuesday to Saturday  --- Book an appointment --- Open 11am to 7pm  Tuesday to Saturday --- Book an appointment --- Open 11am to 7pm  Tuesday to Saturday --- Book an appointment --- Open 11am to 7pm  Tuesday to Saturday ---
      </span>
      <span className="marquee-mailto">
        <a href="mailto:zurich@sangbleu.tattoo">Book now: zurich@sangbleu.tattoo</a>
      </span>
    </div>
  );
}

Banner.propTypes = {

};

export default Banner;
