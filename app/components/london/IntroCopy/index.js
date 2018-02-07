/**
*
* IntroCopy
*
*/

import React from 'react';
import styled from 'styled-components';




function IntroCopy() {
  return (
    <div style={{ paddingBottom: '5%' }}>
      <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '20px', letterSpacing: '.3', paddingTop: '10%', marginLeft: '2%' }}>about</h3>
      <p style={{ fontSize: '22px', textAlign: 'justify', color: '#323232', width: '75%', margin: '0 auto', paddingTop: '2%', paddingBottom: '3%', letterSpacing: '1px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
}

IntroCopy.propTypes = {

};

export default IntroCopy;
