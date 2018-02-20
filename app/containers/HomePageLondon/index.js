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
import Logo from 'components/london/Logo';
import ArticlesContainer from './ArticlesContainer';
import ArtistsContainer from './ArtistsContainer';
import HeaderLondon from 'components/london/HeaderLondon';
import IntroCopy from 'components/london/IntroCopy';
import Calendar from 'components/london/CalendarLondon';
import Insta from 'components/london/Insta';
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
        <HeaderLondon />
        <Logo />
        <Insta />
        <Delay wait={1000}>
          <IntroCopy />
        </Delay>
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
