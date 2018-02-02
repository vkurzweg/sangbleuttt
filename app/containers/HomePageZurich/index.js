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
import ArtistsContainer from './ArtistsContainer';
import HeaderLondon from 'components/zurich/HeaderZurich';
import IntroCopy from 'components/zurich/IntroCopy';


export class HomePageZurich extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>HomePageZurich</title>
          <meta name="description" content="Description of HomePageZurich" />
        </Helmet>
        <div className="container-fluid" style={{ width: '100%' }}>
          <HeaderLondon />
          <div className="row" style={{ paddingTop: '2%' }}>
            <div className="col-sm-4">
              <Logo />
            </div>
            <div className="col-sm-8">
              <ArtistsContainer />
            </div>
          </div>
          <IntroCopy />
          <ArticlesContainer />
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
