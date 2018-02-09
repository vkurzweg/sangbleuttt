/**
*
* Names
*
*/

import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  display: inline;
  font-weight: bold;
  color: black;
  font-family: Helvetica;
  padding: 1em;
  font-size: 20px;
`;

class Names extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ width: '80%', display: 'block', margin: '0 auto', paddingTop: '2%', paddingBottom: '5%' }}>
        <P>Maxime Plescia-Buchi</P>
        <P>Giorgio</P>
        <P>Jordan Angius</P>
        <P>Paolo Bosson</P>
        <P>Stephane Devidal</P>
        <P>Labaz 1</P>
        <P>Matt Powers</P>
        <P>Diego Thonney</P>
        <P>Golda Kracks</P>
        <P>Marco Romegialli</P>
        <P>Dani Queipo</P>
        <P>Antoine Larrey</P>
        <P>Dan Crowe</P>
        <P>Ruby Quilter</P>
        <P>Eszter David</P>
        <P>Tattooforyourenemies</P>
        <P>Javier Rodriguez</P>
        <P>Malwina</P>
        <P>Wolfgang</P>
        <P>Frederico Rabelo</P>
        <P>Caio Pineiro</P>
        <P>Frank Carter</P>
      </div>
    );
  }
}

Names.propTypes = {

};

export default Names;
