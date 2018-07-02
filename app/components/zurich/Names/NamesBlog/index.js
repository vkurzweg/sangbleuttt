/**
*
* NamesFull
*
*/

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Artist0 from '../Artists/Artist0';
import Artist1 from '../Artists/Artist1';
import Artist2 from '../Artists/Artist2';
import Artist3 from '../Artists/Artist3';
import Artist4 from '../Artists/Artist4';
import Artist5 from '../Artists/Artist5';
import Artist6 from '../Artists/Artist6';
import Artist7 from '../Artists/Artist7';
import Artist8 from '../Artists/Artist8';
import Artist9 from '../Artists/Artist9';
import { slideInRight } from 'react-animations';


const rightAnimation = keyframes`${slideInRight}`;

const SlideRightDiv = styled.div`
  animation: .5s ${rightAnimation};
  margin-top: -3vh;
`;


class NamesFull extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const options = {
      followCursor:false,
    }
    let widthValue = '48%';
    let imageClass = 'hover-container-blog';
    const artists = this.props.artists;
    if(artists.length > 0){
    return (
      <SlideRightDiv>
        <div className="insta-hover row" style={{ paddingLeft: '3vw', paddingTop: '5vh', display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto' }}>
          <div className={`${imageClass} + col-sm-6`}>
            <Artist0
              artist0={artists[0]}
              openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-6`}>
            <Artist1
              artist1={artists[1]}
              openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="insta-hover row" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto', marginTop: '10vh' }}>
          <div className={`${imageClass} + col-sm-6`}>
            <Artist2
              artist2={artists[2]}
              openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-6`}>
            <Artist3
              artist3={artists[3]}
              openLightbox={this.props.openLightbox} />
          </div>
        </div>
        <div className="row insta-hover" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: widthValue, margin: '0 auto', marginTop: '10vh' }}>
          <div className={`${imageClass} + col-sm-4`} style={{ paddingRight: '5vw', marginLeft: '-10vw' }}>
            <Artist4
              artist4={artists[4]}
              openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`} style={{ marginLeft: '10vw' }}>
            <Artist5
              artist5={artists[5]}
              openLightbox={this.props.openLightbox} />
          </div>
          <div className={`${imageClass} + col-sm-4`} style={{ marginLeft: '5vw' }}>
            {artists[6] ? <Artist6
              artist6={artists[6]}
              openLightbox={this.props.openLightbox} /> : ''}
          </div>
        </div>
        <div className="insta-hover row" style={{ marginLeft: '-10vw', display: 'flex', justifyContent: 'space-between', maxWidth: 'widthValue', margin: '0 auto', marginTop: '10vh' }}>
          <div className={`${imageClass} + col-sm-4`} style={{ marginTop: '10h' }}>
            {artists[7] ? <Artist7
              artist7={artists[7]}
              openLightbox={this.props.openLightbox} /> : ''}
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            {artists[8] ? <Artist8
              artist8={artists[8]}
              openLightbox={this.props.openLightbox} /> : ''}
          </div>
          <div className={`${imageClass} + col-sm-4`}>
            {artists[9] ? <Artist9
              artist9={artists[9]}
              openLightbox={this.props.openLightbox} /> : ''}
          </div>
        </div>
      </SlideRightDiv>
    )}
    return (<div />)
  }
}

NamesFull.propTypes = {

};

export default NamesFull;
