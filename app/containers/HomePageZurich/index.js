/**
 *
 * HomePageZurich
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import Logo from 'components/zurich/Logo';
import ArticlesContainer from './ArticlesContainer';
import IntroCopy from 'components/zurich/IntroCopy';
import InstaHover from 'components/zurich/InstaHover';


export class HomePageZurich extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#EB3331' }}>
        <Helmet>
          <title>HomePageZurich</title>
          <meta name="description" content="Description of HomePageZurich" />
        </Helmet>
        <div style={{ width: '100%' }}>
          <Logo />
          <InstaHover />
        </div>

      </div>
    );
  }
}

HomePageZurich.propTypes = {
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
)(HomePageZurich);
