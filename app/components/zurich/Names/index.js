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
  initialState ? widthValue = '90%' : widthValue;
  if(blogState){
    fontShrink = '';
    widthValue = '90%';
    content = <NamesBlog />
  }
  if(aboutState){
    fontShrink = '';
    widthValue = '90%';
    content = <NamesAbout />
  }
  if(!initialState && !blogState && !aboutState){
    widthValue = '98vw';
    fullMarginLeft = '5vw';
    fullMarginTop = '1vh';
    content = <NamesFull />
  }
  initialState ? content = <NamesInitial /> : content;
    return (
      <div className='container' style={{ maxWidth: widthValue, margin: '0 auto', marginLeft: fullMarginLeft, marginTop: fullMarginTop, fontSize: fontGrow, paddingLeft: '0', paddingRight: '0' }}>
        {content}
      </div>
    );
  }
}

InstaHover.propTypes = {

};

export default InstaHover;
