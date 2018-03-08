/**
*
* NamesFull
*
*/

import React from 'react';
// import styled from 'styled-components';
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


class NamesFull extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const options = {
      followCursor:false,
    }
    let widthValue = '98vw';
    let imageClass = 'hover-container-full';
    return (
      <div>
        <div className="insta-hover row" style={{ margintop: '-5vh', paddingLeft: '20vw', display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto' }}>
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
        <div className="row insta-hover" style={{ paddingLeft: '20vw', display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-6`}>
            <Labaz openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-6`}>
            <Stephane openLightbox={this.props.openLightbox} />
          </div>
        </div>


        <div className="row insta-hover" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '6vh' }}>
          <div className={`${imageClass} + col-sm-5`}>
            <Diego openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="col-sm-7"></div>
        <div className="insta-hover row" style={{ paddingLeft: '10vw', display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto', marginTop: '6vh' }}>
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
      </div>
    );
  }
}

NamesFull.propTypes = {

};

export default NamesFull;
