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
import ArticlesContainer from './ArticlesContainer';
import Nav from 'components/london/Nav';
import HeaderMobile from 'components/london/HeaderMobile';
import About from 'components/london/About';
import AboutMobile from 'components/london/AboutMobile';
import Insta from 'components/london/Insta';
import InstaMobile from 'components/london/InstaMobile';
import Delay from 'react-delay';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      transform: null
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
      let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);

      this.setState({
        transform: itemTranslate
      })
  }

  render() {
    return (
      <div style={{ width: '100%', backgroundColor: '#FFFFFF' }}>
        <MediaQuery minWidth={768}>
          <div>
            <Nav/>
            <InfoCopy />
            <Insta />
            <Delay wait={400}>
              <About />
            </Delay>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <div>
            <HeaderMobile />
            <InfoCopyMobile />
            <InstaMobile />
            <Delay wait={400}>
              <AboutMobile />
            </Delay>
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
