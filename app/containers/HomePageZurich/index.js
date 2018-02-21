/**
 *
 * HomePageZurich
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import ArticlesContainer from './ArticlesContainer';
import IntroCopy from 'components/zurich/IntroCopy';
import InfoCopy from 'components/zurich/InfoCopy';
import InstaHover from 'components/zurich/InstaHover';
import Center from './Center';
import Right from './Right';
import Left from './Left';

const Background = styled.div`
  width: calc(100vw - 80px);
  margin: 0 auto;
  &:hover {
    background-color: #EB3331;
  }
`;


export class HomePageZurich extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#EB3331', borderLeft: '80px solid black', borderRight: '80px solid black', paddingTop: '60px', paddingBottom: '60px',  height: '100vh' }}>
        <Helmet>
          <title>HomePageZurich</title>
          <meta name="description" content="Description of HomePageZurich" />
        </Helmet>
        <Left />
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
