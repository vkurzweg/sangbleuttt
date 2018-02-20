/**
*
* Nav
*
*/

import React from 'react';
// import styled from 'styled-components';
import ReactDOM from 'react-dom';

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      blue: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    }

  handleScroll(event) {
    let offset = 50;
    var scrollTop = window.pageYOffset;
    if (scrollTop > offset){
        this.setState({
          blue: true
        });
      } else {
        this.setState({
          blue: false
        })
      }
    }

  render() {
    let displayBlack = 'block';
    let displayBlue = 'none';
    this.state.blue ? displayBlue = 'block' : displayBlue;
    this.state.blue ? displayBlack = 'none' : displayBlack;
    return (
      <div>
        <div style={{ position: 'fixed', top: '0', display: 'block', zIndex: '3', width: '100%' }}>
          <h1 style={{ display: displayBlack, overflow: 'visible', whiteSpace: 'nowrap', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '2.5vw', letterSpacing: '1px', paddingTop: '2.5%', paddingBottom: '1%', marginBottom: '0', marginLeft: '17vw' }}>Sang Bleu London</h1>
          <h1 style={{ display: displayBlue, color: '#3D8EE2', overflow: 'visible', whiteSpace: 'nowrap', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '2.5vw', letterSpacing: '1px', paddingTop: '2.5%', paddingBottom: '1%', marginBottom: '0', marginLeft: '17vw' }}><span style={{ color: 'black' }}>Sang Bleu</span> London</h1>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {

};

export default Nav;
