/**
*
* InstaHover
*
*/

import React from 'react';
// import styled from 'styled-components';
import ReactHover from 'react-hover';
import Instafeed from 'react-instafeed';
import NamesFull from './NamesFull';
import NamesInitial from './NamesInitial';
import NamesBlog from './NamesBlog';
import NamesAbout from './NamesAbout';


class InstaHover extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  const options = {
    followCursor:false,
  }
  let blogState = this.props.blogOpen;
  let aboutState = this.props.aboutOpen;
  let initialState = this.props.initial;
  let fontShrink;
  let widthValue;
  let fullMarginLeft;
  let fullMarginTop;
  let fontGrow;
  let imageClass;
  let content = <NamesFull />
  initialState ? widthValue = '70vw' : widthValue;
  if(blogState){
    fontShrink = 'font-shrink';
    widthValue = '40vw';
    content = <NamesBlog />
  }
  if(aboutState){
    fontShrink = 'font-shrink';
    widthValue = '45vw';
    content = <NamesAbout />
  }
  if(!initialState && !blogState && !aboutState){
    widthValue = '98vw';
    fullMarginLeft = '13vw';
    fullMarginTop = '1vh';
    fontGrow = 'font-grow';
    content = <NamesFull />
  }
  initialState ? content = <NamesInitial /> : content;
    return (
      <div style={{ width: '80%', margin: '0 auto', paddingTop: '30vh', overflowY: 'scroll', paddingBottom: '10vh' }}>
        <a href='https://www.instagram.com/mxmttt/' target='_blank' style={{ textDecoration: 'none' }}>
          <h2 className='name-mobile'>
            Maxime Plescia-Buchi<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@mxmttt</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/giorgiodeduesanti/' target='_blank' style={{ textDecoration: 'none' }}>
        <h2 className='name-mobile name-right'>
            Giorgio<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@giorgiodeduesanti</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/jordalive/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
          <h2 className='name-mobile'>
            Jordan Angius<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@jordalive</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/paolo_bosson/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
         <h2 className='name-mobile name-right'>
            Paolo Bosson<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@paolo_bosson</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/zilba.1/' target='_blank' style={{ textDecoration: 'none' }}>
         <h2 className='name-mobile'>
            Labaz 1<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@zilba.1</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/stephane_devidal_tattoo/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
          <h2 className='name-mobile name-right'>
            Stephane Devidal<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@stephane_devidal_tattoo</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/diagal_faust/' target='_blank' style={{ textDecoration: 'none' }}>
         <h2 className='name-mobile'>
            Diego Thonney<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@diagal_faust</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/golda.kracks/' target='_blank' style={{ textDecoration: 'none' }}>
         <h2 className='name-mobile name-right'>
            Golda Kracks<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@golda.kracks</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/marco_romegialli/' target='_blank' style={{ textDecoration: 'none' }}>
          <h2 className='name-mobile'>
            Marco Romegialli<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@marco_romegialli</span>
          </h2>
        </a>
      <a href='https://www.instagram.com/black_arm_tattoo/' target='_blank' style={{ textDecoration: 'none', paddingBottom: '5vh' }}>
        <h2 className='name-mobile name-right'>
          Matt Powers<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@black_arm_tattoo</span>
        </h2>
      </a>
    </div>
    );
  }
}

InstaHover.propTypes = {

};

export default InstaHover;
