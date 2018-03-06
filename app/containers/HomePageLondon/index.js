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
import MediaQuery from 'react-responsive';
import InfoCopy from 'components/london/InfoCopy';
import InfoCopyMobile from 'components/london/InfoCopyMobile';
import BlogContainer from './BlogContainer';
import ArticlesContainerMobile from './ArticlesContainerMobile';
import Nav from 'components/london/Nav';
import NavMobile from 'components/london/NavMobile';
import HeaderMobile from 'components/london/HeaderMobile';
import About from 'components/london/About';
import AboutMobile from 'components/london/AboutMobile';
import Insta from 'components/london/Insta';
import InstaMobile from 'components/london/InstaMobile';
import Delay from 'react-delay';
import Footer from 'components/london/Footer';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      transform: null
    }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div style={{ width: '100%', backgroundColor: '#FFFFFF' }}>
        <MediaQuery minWidth={768}>
          <div style={{ }}>
            <Nav/>
            <InfoCopy />
            <Insta />
            <Delay wait={400}>
              <About />
            </Delay>
            <BlogContainer />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <div>
            <NavMobile />
            <InfoCopyMobile />
            <InstaMobile />
            <Delay wait={400}>
              <AboutMobile />
            </Delay>
            <ArticlesContainerMobile />
          </div>
        </MediaQuery>
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
