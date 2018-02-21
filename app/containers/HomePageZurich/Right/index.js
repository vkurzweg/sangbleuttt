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
      <div>
        <Helmet>
          <title>Right</title>
          <meta name="description" content="Description of Right" />
        </Helmet>
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
