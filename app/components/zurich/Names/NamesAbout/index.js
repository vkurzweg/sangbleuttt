/**
*
* NamesFull
*
*/

import React from 'react';
import styled, { keyframes } from 'styled-components';
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
import { slideInLeft } from 'react-animations';

const leftAnimation = keyframes`${slideInLeft}`;

const SlideLeftDiv = styled.div`
  animation: .5s ${leftAnimation};
  margin-top: -5h;
`;

class NamesFull extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const options = {
      followCursor:false,
    }
    let widthValue = '75%';
    let imageClass = 'hover-container-about';
    let fontShrink = '';
    return (
      <SlideLeftDiv>
        <div className="insta-hover row" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto' }}>
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
          <div className={`${imageClass} + col-sm-6`} style={{ paddingRight: '25%' }}>
            <Paolo openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="row insta-hover" style={{ paddingLeft: '5vw', display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-6`}>
            <Labaz openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-6`}>
            <Stephane openLightbox={this.props.openLightbox} />
          </div>
        </div>


        <div className="row insta-hover" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-7`} style={{ marginLeft: '-15%' }}>
            <Diego openLightbox={this.props.openLightbox} />
          </div>
          <div className="col-sm-5"></div>
        </div>
        <div className="insta-hover row" style={{ marginTop: '-5vh', display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-4`}>
            <Golda openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <Marco openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            <Matt openLightbox={this.props.openLightbox} />
          </div>
        </div>
      </SlideLeftDiv>
    );
  }
}

NamesFull.propTypes = {

};

export default NamesFull;
