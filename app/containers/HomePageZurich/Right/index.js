/**
 *
 * Right
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import InfoCopyHalf from 'components/zurich/InfoCopyHalf';
import InstaHoverHalf from 'components/zurich/InstaHoverHalf';


export class Right extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid" style={{ width: 'calc(100vw - 160px)', margin: '0 auto', height: '100vh', marginBottom: '0', paddingBottom: '0' }}>
        <Helmet>
          <title>Right</title>
          <meta name="description" content="Description of Right" />
        </Helmet>
        <div className="row" style={{ marginBottom: '0', paddingBottom: '0', height: '100vh' }}>
          <div className="col-sm-6" style={{ marginBottom: '0', paddingBottom: '0', backgroundColor: 'black', height: '100vh' }}>
          </div>
          <div className="col-sm-6" style={{ marginBottom: '0', paddingBottom: '0', height: '100vh' }}>
            <InfoCopyHalf />
            <InstaHoverHalf />
          </div>
        </div>
      </div>
    );
  }
}

Right.propTypes = {
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
)(Right);
