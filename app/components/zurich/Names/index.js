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
      <div className='container' style={{ width: widthValue, margin: '0 auto', marginTop: fullMarginTop, fontSize: fontGrow, marginLeft: fullMarginLeft, paddingLeft: '0', paddingRight: '0', height: '60vh' }}>
        {content}
      </div>
    );
  }
}

InstaHover.propTypes = {

};

export default InstaHover;
