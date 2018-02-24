/**
 *
 * Center
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import InfoCopy from 'components/zurich/InfoCopy';
import InstaHover from 'components/zurich/InstaHover';


export class Center extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Center</title>
          <meta name="description" content="Description of Center" />
        </Helmet>
        <InfoCopy />
        <InstaHover
          blogOpen={this.props.blogOpen}
          aboutOpen={this.props.aboutOpen}
          initial={this.props.initial}
        />
      </div>
    );
  }
}

Center.propTypes = {
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
)(Center);
