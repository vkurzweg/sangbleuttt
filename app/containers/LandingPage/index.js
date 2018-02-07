/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import LondonLanding from 'components/landing/LondonLanding';
import ZurichLanding from 'components/landing/ZurichLanding';
import ThreeTest from 'components/landing/ThreeTest';


export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: '#FFFFFF', paddingLeft: '0' }}>
        <Helmet>
          <title>LandingPage</title>
          <meta name="description" content="Description of LandingPage" />
        </Helmet>

        <div className="row" style={{ }}>
          <div className="col-sm-6" style={{ paddingRight: '0', paddingBottom: '0' }}>
            <ZurichLanding />
          </div>
          <h1 style={{ position: 'absolute', overflow: 'visible', whiteSpace: 'nowrap', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '44px', letterSpacing: '.7', marginTop: '40vh', marginLeft: '41.8vw' }}>Sang Bleu</h1>
          <div className="col-sm-6" style={{ paddingLeft: '0' }}>
            <LondonLanding />
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
