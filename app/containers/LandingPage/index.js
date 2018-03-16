/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import LondonLanding from 'components/landing/LondonLanding';
import ZurichLanding from 'components/landing/ZurichLanding';
import ThreeTest from 'components/landing/ThreeTest';
import Map from 'components/landing/Map';
import Names from 'components/landing/Names';

const BrandLondon = styled.h1`
  font-family: SuisseIntlSemiBold;
  text-transform: uppercase;
  font-size: 23pt;
  letter-spacing: 0.16;
  text-align: center;
  padding-top: 10vh;
`;

const BrandZurich = styled.h1`
  font-family: BRRR;
  text-transform: uppercase;
  font-size: 23pt;
  letter-spacing: 0.16;
  text-align: center;
  padding-top: 10vh;
`;

export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: '#FFFFFF', height: '100vh', padding: '0', margin: '0 auto' }}>
        <Helmet>
          <title>Sang Bleu</title>
          <meta name="description" content="Sang Bleu tattoo studios in London and Zurich. Coming soon to Los Angeles." />
        </Helmet>
        <div className="row" style={{ margin: '0', padding: '0', marginTop: '20%' }}>
          <div className="col-sm-6">
            <a href="/london"><BrandLondon>sang bleu london</BrandLondon></a>
          </div>
          <div className="col-sm-6">
            <a href="/zurich"><BrandZurich>sang bleu zurich</BrandZurich></a>
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(LandingPage);

// <div className="container-fluid" style={{ backgroundColor: '#FFFFFF', paddingLeft: '0' }}>
//   <Helmet>
//     <title>LandingPage</title>
//     <meta name="description" content="Description of LandingPage" />
//   </Helmet>
//   <div className="row" style={{ }}>
//     <div className="col-sm-6" style={{ paddingRight: '0', paddingBottom: '0' }}>
//       <ZurichLanding />
//     </div>
//     <h1 style={{ position: 'absolute', overflow: 'visible', whiteSpace: 'nowrap', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '44px', letterSpacing: '.7', marginTop: '40vh', marginLeft: '41.8vw' }}>Sang Bleu</h1>
//     <div className="col-sm-6" style={{ paddingLeft: '0' }}>
//       <LondonLanding />
//     </div>
//   </div>
//   <h1 style={{ marginLeft: '5vw', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '44px', letterSpacing: '.7', marginTop: '5vh' }}>Sang Bleu</h1>

//   <Map />
//   <Names />
// </div>



