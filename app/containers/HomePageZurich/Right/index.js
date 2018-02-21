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
      <div style={{ width: '100vw', margin: '0 auto', borderLeft: 'calc(50vw - 160px) solid black', marginRight: '80px', height: 'calc(100vh + 80px)', marginTop: '-80px' }}>
        <Helmet>
          <title>Right</title>
          <meta name="description" content="Description of Right" />
        </Helmet>
        <InfoCopyHalf />
        <InstaHoverHalf />
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
