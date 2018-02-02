/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import Logo from 'components/Logo';
import ArticlesContainer from './ArticlesContainer';
import ArtistsContainer from './ArtistsContainer';
import HeaderLondon from 'components/HeaderLondon';
import IntroCopy from 'components/IntroCopy';


export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="container-fluid" style={{ width: '100%' }}>
        <div className="row" style={{ paddingTop: '3%' }}>
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
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}


export default connect(null, mapDispatchToProps)(HomePage);
