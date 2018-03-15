/**
*
* NamesFull
*
*/

import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReactHover from 'react-hover';
import Instafeed from 'react-instafeed';
import Maxime from '../Artists/Maxime';
import Giorgio from '../Artists/Giorgio';
import Jordan from '../Artists/Jordan';
import Paolo from '../Artists/Paolo';
import Labaz from '../Artists/Labaz';
import Stephane from '../Artists/Stephane';
import Diego from '../Artists/Diego';
import Golda from '../Artists/Golda';
import Marco from '../Artists/Marco';
import Matt from '../Artists/Matt';
import { slideInRight } from 'react-animations';


const rightAnimation = keyframes`${slideInRight}`;

const SlideRightDiv = styled.div`
  animation: .5s ${rightAnimation};
  margin-top: -3vh;
`;


class NamesFull extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const options = {
      followCursor:false,
    }
    let widthValue = '48%';
    let imageClass = 'hover-container-blog';
    let fontShrink = '';
    return (
      <SlideRightDiv>
        <div className="insta-hover row" style={{ paddingLeft: '10vw', display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto' }}>
          <div className={`${imageClass} + col-sm-5`}>
            <Maxime openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <Giorgio openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="insta-hover row" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-6`}>
            <Jordan openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-6`}>
            <Paolo openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="row insta-hover" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-6`}>
            <Labaz openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-6`}>
            <Stephane openLightbox={this.props.openLightbox} />
          </div>
        </div>


        <div className="row insta-hover" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-5`} style={{ marginLeft: '-10vw' }}>
            <Diego openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="col-sm-7"></div>
        <div className="insta-hover row" style={{ marginLeft: '-10vw', display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-4`} style={{ marginTop: '-12vh' }}>
            <Golda openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <Marco openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`} style={{ marginTop: '-12vh' }}>
            <Matt openLightbox={this.props.openLightbox} />
          </div>
        </div>
      </SlideRightDiv>
    );
  }
}

NamesFull.propTypes = {

};

export default NamesFull;
